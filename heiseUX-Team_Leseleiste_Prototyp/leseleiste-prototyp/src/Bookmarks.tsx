import React, { useState, useRef, useEffect } from "react";
import "./bookmarks.css"; //Import der CSS-Datei
import infoIcon from "../img/infoicon.png"; // Pfad zum InfoIcon-Bild
import infoboxImage from "../img/Bookmarks_Tutorial.svg"; // Pfad zur neuen Infobox-Bilddatei
import { useBookmarkContext } from "./BookmarkContext";
import InfoIcon_Bookmarks from "./InfoIcon_Bookmarks";
import deleteIcon from "/img/delete.png"
import editIcon from "/img/edit.png"

const Bookmarks: React.FC = () => {
  const [yOffset, setYOffset] = useState(0); //yOffset hät den aktuellen y-Wert, setYOffset erlaubt es, diesen Wert auf die Höhe der H1 Überschrift zu setzen
  const bookmarksRef = useRef<HTMLDivElement | null>(null); //Referenz, zum DOM-Elemente aus der Bookmarks Komponente
  const { bookmarks, addBookmark, removeBookmark, editBookmarkName } =
    useBookmarkContext();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [bookmarkName, setBookmarkName] = useState("");
  const [selectedText, setSelectedText] = useState<string | null>(null);
  const [range, setRange] = useState<Range | null>(null);
  const [editingBookmarkId, setEditingBookmarkId] = useState<string | null>(
    null
  );
  const [newBookmarkName, setNewBookmarkName] = useState("");
  const [isFixed, setIsFixed] = useState(false);
  const dropdownRef = useRef<HTMLDivElement | null>(null);
  const buttonRef = useRef<HTMLButtonElement | null>(null);
  const selectionRef = useRef<Selection | null>(null);
  const [expandedBookmarks, setExpandedBookmarks] = useState<Set<string>>(
    new Set()
  );

  const toggleExpand = (id: string) => {
    setExpandedBookmarks((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(id)) {
        newSet.delete(id); // Collapse
      } else {
        newSet.add(id); // Expand
      }
      return newSet;
    });
  };

  /*
  Wählt die h1-Überschrift aus dem Artikel aus und setzt den Wert des y-Offset anschließend.
  */
  useEffect(() => {
    const h1Element = document.querySelector("h1");
    if (h1Element) {
      const { top } = h1Element.getBoundingClientRect();
      setYOffset(window.scrollY + top);
    }
  }, []);

  /*
  Gibt dem Bookmark-DOM die richtige y-Eigenschaft
  */
  useEffect(() => {
    if (bookmarksRef.current) {
      if (isFixed) {
        bookmarksRef.current.style.position = "fixed";
        bookmarksRef.current.style.top = "50px"; // Fixiert oben im Viewport
      } else {
        bookmarksRef.current.style.position = "absolute";
        bookmarksRef.current.style.top = `${yOffset}px`; // Auf Höhe der h1
      }
    }
  }, [isFixed, yOffset]);

  useEffect(() => {
    const handleScroll = () => {
      const h1Element = document.querySelector("h1");
      const offset = 100;

      if (h1Element) {
        const { top, bottom } = h1Element.getBoundingClientRect();
        if (bottom < offset || top > window.innerHeight) {
          setIsFixed(true); // h1 ist nicht mehr sichtbar
        } else {
          setIsFixed(false); // h1 ist sichtbar
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Click-Outside-Listener mit useEffect
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      // Falls der Klick außerhalb des Dropdowns UND des Buttons ist, schließe das Dropdown
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node) &&
        buttonRef.current &&
        !buttonRef.current.contains(event.target as Node)
      ) {
        setIsDropdownOpen(false);
      }
    };

    if (!isModalOpen) {
      const focusedElements = document.getElementsByClassName("focused");
      if (focusedElements.length > 0) {
        handleClose();
      }
    }

    if (isDropdownOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isDropdownOpen, isModalOpen]);

  const openModal = () => {
    const selectedText = window.getSelection()?.toString();
    const range = window.getSelection()?.getRangeAt(0);
    selectionRef.current = window.getSelection();

    if (selectedText && range) {
      setSelectedText(selectedText);
      setRange(range);
      setBookmarkName(`Lesezeichen ${bookmarks.length + 1}`);
      setIsModalOpen(true);
    } else {
      // Hinweis anzeigen, wenn kein Text markiert ist
      alert(
        "Bitte markieren Sie zuerst die Textstelle, die sie hinzufügen wollen."
      );
    }
  };

  const handleFocus = () => {
    const id = "focused";

    if (range && selectedText) {
      const existingFocus = document.querySelector("span.focused");
      if (existingFocus) return;

      const startNode = range.startContainer;
      const endNode = range.endContainer;
      const startOffset = range.startOffset;
      const endOffset = range.endOffset;

      if (startNode == endNode) {
        if (rangeHasText(range)) {
          createAndInsertHighlight(range, id, false);
        }

        setRange(null);
        return;
      }

      const walker = document.createTreeWalker(
        range.commonAncestorContainer,
        NodeFilter.SHOW_TEXT,
        {
          acceptNode: (node) => {
            if (
              range.intersectsNode(node) &&
              node.textContent &&
              node.textContent.trim() !== ""
            ) {
              return NodeFilter.FILTER_ACCEPT;
            }
            return NodeFilter.FILTER_REJECT;
          },
        }
      );

      let currentNode: Node | null = walker.currentNode;
      const selectedNodes = [];

      while (currentNode !== null) {
        selectedNodes.push(currentNode);
        currentNode = walker.nextNode();
      }

      delete selectedNodes[0];

      selectedNodes.forEach((textNode) => {
        let newRange = document.createRange();
        if (textNode === startNode && textNode === endNode) {
          newRange.setStart(textNode, startOffset);
          newRange.setEnd(textNode, endOffset);
        } else if (textNode === startNode) {
          newRange.setStart(textNode, startOffset);
          if (textNode.textContent !== null) {
            newRange.setEnd(textNode, textNode.textContent.length);
          }
        } else if (textNode === endNode) {
          newRange.setStart(textNode, 0);
          newRange.setEnd(textNode, endOffset);
        } else {
          newRange.selectNodeContents(textNode);
        }

        createAndInsertHighlight(newRange, id, false);
        selectionRef.current?.removeRange(newRange);
      });

      setRange(null);
    }
  };

  const handleClose = () => {
    const elements = document.getElementsByClassName("focused");

    const highlitedelements = [];

    for (const element of elements) {
      if (element.id == "focused") {
        highlitedelements.push(element);
      }
    }

    console.log(highlitedelements);

    highlitedelements.forEach((element) => {
      if (element.classList.contains("focused")) {
        element.classList.remove("focused");
        unwrapSpan(element);
      }
    });
    setIsModalOpen(false);
  };

  function rangeHasText(range: Range): boolean {
    const clonedContents = range.cloneContents();
    const walker = document.createTreeWalker(
      clonedContents,
      NodeFilter.SHOW_TEXT, // Only consider text nodes
      {
        acceptNode: (node) => {
          // Accept non-empty text nodes
          return node.nodeValue && node.nodeValue.trim().length > 0
            ? NodeFilter.FILTER_ACCEPT
            : NodeFilter.FILTER_REJECT;
        },
      }
    );

    return walker.nextNode() !== null; // If we find any text node, range has text
  }

  const createAndInsertHighlight = (
    range: Range,
    id: string,
    bookmark: boolean
  ): HTMLSpanElement | null => {
    const span = document.createElement("span");
    span.id = id;

    const clonedRange = range.cloneRange(); // Klonen, um die Original-Range nicht zu verändern
    /*if (range) {
      console.log("Before focus:", range.toString());
    }*/

    if (bookmark == true) {
      span.classList.add("highlighted");
    } else {
      span.classList.add("focused");
    }

    if (
      clonedRange.startContainer.nodeType === Node.TEXT_NODE &&
      clonedRange.endContainer.nodeType === Node.TEXT_NODE
    ) {
      try {
        clonedRange.surroundContents(span);

        //console.log("After focus:", range.toString());
      } catch (error) {
        console.error("Fehler beim Umgeben des Inhalts:", error);
        return null;
      }
    } else {
      const docFrag = clonedRange.extractContents();
      span.appendChild(docFrag);
      clonedRange.insertNode(span);
    }

    return span;
  };

  const getHighlightPositions = (
    element: HTMLElement
  ): { start: number; end: number } => {
    const start = element.getBoundingClientRect().top + window.scrollY;
    const end = element.getBoundingClientRect().bottom + window.scrollY;
    return { start, end };
  };

  const getHighlightPositionsStart = (
    element: HTMLElement
  ): { start: number } => {
    const start = element.getBoundingClientRect().top + window.scrollY;
    return { start };
  };

  const getHighlightPositionsEnd = (element: HTMLElement): { end: number } => {
    const end = element.getBoundingClientRect().bottom + window.scrollY;
    return { end };
  };

  const addNewBookmark = () => {
    const id = `bookmark-${new Date().getTime()}`;

    let elements = document.querySelectorAll(".focused");

    if (elements.length == 0) {
      handleFocus();
      elements = document.querySelectorAll(".focused");
    }

    if (elements && selectedText) {
      if (elements.length == 1) {
        const span = elements[0] as HTMLElement;
        const { start, end } = getHighlightPositions(span);

        elements[0].classList.replace("focused", "highlighted");
        elements[0].id = id;

        addBookmark({
          text: selectedText,
          id,
          name: bookmarkName,
          start,
          end,
        });
      } else {
        //let start: number | undefined;
        //let end: number | undefined;

        let globalStart = Infinity;
        let globalEnd = -Infinity;

        const firstElement = elements[0] as HTMLElement;
        const lastElement = elements[elements.length - 1] as HTMLElement;

        //start = parseInt(firstElement.getAttribute("data-start") || "0");
        //end = parseInt(lastElement.getAttribute("data-end") || "0");

        if (firstElement) {
          const { start } = getHighlightPositionsStart(firstElement);
          globalStart = Math.min(globalStart, start);
        }

        if (lastElement) {
          const { end } = getHighlightPositionsEnd(lastElement);
          globalEnd = Math.max(globalEnd, end);
        }

        elements.forEach((element) => {
          element.classList.replace("focused", "highlighted");
          element.id = id;
        });

        addBookmark({
          text: selectedText,
          id,
          name: bookmarkName,
          start: globalStart,
          end: globalEnd,
        });
      }

      setSelectedText(null);
      setBookmarkName("");
      setIsModalOpen(false);
    }
  };

  const toggleDropdown = (e: React.MouseEvent) => {
    e.stopPropagation(); // Verhindert, dass der Click als outside-Klick gewertet wird
    setIsDropdownOpen((prevState) => !prevState);
  };

  const scrollToBookmark = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      window.scrollTo({
        top: element.getBoundingClientRect().top + window.scrollY - 150,
        behavior: "smooth",
      });
      setIsDropdownOpen(false);
    }
  };

  function unwrapSpan(span: Element | null) {
    if (span && span.tagName === "SPAN") {
      const parent = span.parentNode;
      const fragment = document.createDocumentFragment();

      while (span.firstChild) {
        fragment.appendChild(span.firstChild);
      }

      if (parent) {
        parent.replaceChild(fragment, span);
        parent.normalize(); // Merge adjacent text nodes
      }
    }
  }

  const handleRemoveBookmark = (id: string) => {
    const elements = document.getElementsByClassName("highlighted");

    const highlitedelements = [];

    for (const element of elements) {
      if (element.id == id) {
        highlitedelements.push(element);
      }
    }

    console.log(highlitedelements);

    highlitedelements.forEach((element) => {
      if (element.classList.contains("highlighted")) {
        element.classList.remove("highlighted");
        unwrapSpan(element);
      }
    });

    removeBookmark(id);
  };

  const handleEditBookmark = (id: string) => {
    setEditingBookmarkId(id);
    const bookmark = bookmarks.find((bookmark) => bookmark.id === id);
    if (bookmark) {
      setNewBookmarkName(bookmark.name);
      //setIsEditMode(true); // Aktiviert den Edit-Modus
      //document.body.classList.add("edit-mode"); // Fügt die Klasse für den blauen Rand hinzu
    }
  };

  const saveBookmarkName = () => {
    if (editingBookmarkId) {
      editBookmarkName(editingBookmarkId, newBookmarkName);
      setEditingBookmarkId(null);
      setNewBookmarkName("");
      //setIsEditMode(false); // Deaktiviert den Edit-Modus
      //document.body.classList.remove("edit-mode"); // Entfernt die Klasse
    }
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      addNewBookmark();
    }
  };

  return (
    <div className="bookmarks-container" ref={bookmarksRef}>
      <div className="bookmarks-header">
        <InfoIcon_Bookmarks
          additionalClass="bookmarkbar"
          imageSrc={infoIcon}
          infoboxImage={infoboxImage}
        />
        <button
          className="bookmarks-toggle"
          onClick={toggleDropdown}
          ref={buttonRef} // Ref zum Button hinzugefügt
        >
          Meine Lesezeichen {isDropdownOpen ? "▲" : "▼"}
        </button>
        <button className="bookmark-button" onClick={openModal}>
          Lesezeichen hinzufügen
        </button>
      </div>
      {isDropdownOpen && (
        <div ref={dropdownRef} className="bookmarks-list">
          {bookmarks.map((bookmark, index) => (
            <div key={index} className="bookmark-item">
              {editingBookmarkId === bookmark.id ? (
                <div>
                  <input
                    type="text"
                    value={newBookmarkName}
                    onChange={(e) => setNewBookmarkName(e.target.value)}
                    placeholder="Edit Bookmark Name"
                  />
                  <button onClick={saveBookmarkName}>Save</button>
                </div>
              ) : (
                <div>
                  <h3>{bookmark.name}</h3>
                  <p>
                    {bookmark.text.length > 100 &&
                    !expandedBookmarks.has(bookmark.id)
                      ? `${bookmark.text.slice(0, 100)}...`
                      : bookmark.text}
                  </p>
                  <span
                    className="back-link"
                    onClick={() => scrollToBookmark(bookmark.id)}
                  >
                    Zum Text
                  </span>
                  <div className="bookmark-actions">
                    {bookmark.text.length > 100 && (
                      <button
                        className="show-more-less-btn"
                        onClick={() => toggleExpand(bookmark.id)}
                      >
                        {expandedBookmarks.has(bookmark.id)
                          ? "Weniger"
                          : "Mehr ..."}
                      </button>
                    )}
                    <span
                      className="edit-link"
                      onClick={() => handleEditBookmark(bookmark.id)}
                    >
                      <img
                        src={editIcon}
                        alt="Edit"
                        className="action-icon"
                      />
                    </span>
                  </div>
                  <span
                    className="delete-link"
                    onClick={() => handleRemoveBookmark(bookmark.id)}
                  >
                    <img
                      src = {deleteIcon}
                      alt="X"
                      className="action-icon"
                    />
                  </span>
                </div>
              )}
            </div>
          ))}
        </div>
      )}
      {isModalOpen && (
        <div className="modal-overlay" onClick={() => setIsModalOpen(false)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <h2>Lesezeichen hinzufügen</h2>
            <input
              onFocus={handleFocus}
              type="text"
              value={bookmarkName}
              onChange={(e) => setBookmarkName(e.target.value)}
              className="bookmark-name-input"
              onKeyDown={handleKeyDown}
            />
            <button onClick={addNewBookmark}>Speichern</button>
            <button onClick={handleClose}>Abbrechen</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Bookmarks;

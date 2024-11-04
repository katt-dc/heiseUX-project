import React, { useState, useRef, useEffect } from "react";
import "./bookmarks.css";
import InfoIcon from "./InfoIcon"; // Import der InfoIcon-Komponente
import infoIcon from "../img/infoicon.png"; // Pfad zum InfoIcon-Bild
import infoboxImage from "../img/BookMarkInfoBox.png"; // Pfad zur neuen Infobox-Bilddatei
import { useBookmarkContext } from "./BookmarkContext";

const Bookmarks: React.FC = () => {
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

  // Ref für das Dropdown-Element und Button
  const dropdownRef = useRef<HTMLDivElement | null>(null);
  const buttonRef = useRef<HTMLButtonElement | null>(null);

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

    if (isDropdownOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    // Cleanup Listener bei Schließen des Dropdowns
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isDropdownOpen]);

  const openModal = () => {
    const selectedText = window.getSelection()?.toString();
    const range = window.getSelection()?.getRangeAt(0);
    if (selectedText && range) {
      setSelectedText(selectedText);
      setRange(range);
      setBookmarkName(`Bookmark ${bookmarks.length + 1}`);
      setIsModalOpen(true);
    }
  };

  const createAndInsertHighlight = (
    range: Range,
    id: string
  ): HTMLSpanElement | null => {
    const span = document.createElement("span");
    span.id = id;
    span.classList.add("highlighted");

    if (
      range.startContainer.nodeType === Node.TEXT_NODE &&
      range.endContainer.nodeType === Node.TEXT_NODE
    ) {
      try {
        range.surroundContents(span);
      } catch (error) {
        console.error("Fehler beim Umgeben des Inhalts:", error);
        return null;
      }
    } else {
      const docFrag = range.extractContents();
      span.appendChild(docFrag);
      range.insertNode(span);
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

  const addNewBookmark = () => {
    const id = `bookmark-${new Date().getTime()}`;
    if (range && selectedText) {
      const selection = window.getSelection();

      if (selection != null) {
        const range = selection.getRangeAt(0); // Der ausgewählte Bereich
        const startNode = range.startContainer;
        const endNode = range.endContainer;
        const startOffset = range.startOffset;
        const endOffset = range.endOffset; // Das Element, das den Textknoten enthält
        // Das Element, das den Textknoten enthält

        if (startNode == endNode) {
          const span = createAndInsertHighlight(range, id);

          if (!span) return;

          const { start, end } = getHighlightPositions(span);

          addBookmark({
            text: selectedText,
            id,
            name: bookmarkName,
            start,
            end,
          });

          setSelectedText(null);
          setBookmarkName("");
          setRange(null);
          setIsModalOpen(false);
          return;
        }

        console.log("Ausgewählter Text:", selection.toString());
        console.log("Zugehöriges DOM-Element Start:", startNode);
        console.log("Zugehöriges DOM-Element Ende:", endNode);

        const walker = document.createTreeWalker(
          range.commonAncestorContainer,
          NodeFilter.SHOW_TEXT,
          {
            acceptNode: (node) => {
              if (range.intersectsNode(node)) {
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

        console.log("Ausgewählte Knoten:", selectedNodes);

        selectedNodes.forEach((textNode) => {
          const newRange = document.createRange();
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
          createAndInsertHighlight(newRange, id);
        });

        const start = startOffset;
        const end = endOffset;

        addBookmark({
          text: selectedText,
          id,
          name: bookmarkName,
          start,
          end,
        });

        setSelectedText(null);
        setBookmarkName("");
        setRange(null);
        setIsModalOpen(false);
      }
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
      while (span.firstChild) {
        parent?.insertBefore(span.firstChild, span);
      }
      parent?.removeChild(span);
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
    }
  };

  const saveBookmarkName = () => {
    if (editingBookmarkId) {
      editBookmarkName(editingBookmarkId, newBookmarkName);
      setEditingBookmarkId(null);
      setNewBookmarkName("");
    }
  };

  return (
    <div className="bookmarks-container">
      <div className="bookmarks-header">
        <InfoIcon
          additionalClass="bookmarkbar"
          imageSrc={infoIcon}
          infoboxImage={infoboxImage}
        />
        <button
          className="bookmarks-toggle"
          onClick={toggleDropdown}
          ref={buttonRef} // Ref zum Button hinzugefügt
        >
          My Bookmarks {isDropdownOpen ? "▲" : "▼"}
        </button>
        <button className="bookmark-button" onClick={openModal}>
          Add Bookmark
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
                  <p>{bookmark.text}</p>
                  <span
                    className="back-link"
                    onClick={() => scrollToBookmark(bookmark.id)}
                  >
                    Go to text
                  </span>
                  <span
                    className="edit-link"
                    onClick={() => handleEditBookmark(bookmark.id)}
                  >
                    Edit
                  </span>
                  <span
                    className="delete-link"
                    onClick={() => handleRemoveBookmark(bookmark.id)}
                  >
                    ✖
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
            <h2>Add Bookmark</h2>
            <input
              type="text"
              value={bookmarkName}
              onChange={(e) => setBookmarkName(e.target.value)}
              className="bookmark-name-input"
            />
            <button onClick={addNewBookmark}>Save</button>
            <button onClick={() => setIsModalOpen(false)}>Cancel</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Bookmarks;

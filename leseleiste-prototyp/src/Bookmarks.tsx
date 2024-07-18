import React, { useState, useEffect } from "react";
import "./bookmarks.css";
import InfoIcon from "./InfoIcon"; // Import der InfoIcon-Komponente
import infoIcon from "./images/infoicon.png"; // Pfad zum InfoIcon-Bild
import infoboxImage from "./images/BookMarkInfoBox.png"; // Pfad zur neuen Infobox-Bilddatei

const Bookmarks: React.FC = () => {
  const [bookmarks, setBookmarks] = useState<
    { text: string; id: string; name: string }[]
  >([]);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [bookmarkName, setBookmarkName] = useState("");
  const [selectedText, setSelectedText] = useState<string | null>(null);
  const [range, setRange] = useState<Range | null>(null);
  const [editingBookmarkId, setEditingBookmarkId] = useState<string | null>(
    null
  );
  const [newBookmarkName, setNewBookmarkName] = useState("");

  // Cleanup für Event Listener
  useEffect(() => {
    return () => {
      window.getSelection()?.removeAllRanges();
    };
  }, []);

  // Funktion zum Öffnen des Modals und Speichern des markierten Texts und Range
  const openModal = () => {
    const selection = window.getSelection();
    if (!selection?.rangeCount) {
      return;
    }
    const selectedText = selection.toString();
    const range = selection.getRangeAt(0);
    
    if (selectedText && range) {
      setSelectedText(selectedText);
      setRange(range);
      setBookmarkName(`Bookmark ${bookmarks.length + 1}`);
      setIsModalOpen(true);
    }
  };

  // Funktion zum Hinzufügen eines Bookmarks
  const addBookmark = () => {
    const id = `bookmark-${new Date().getTime()}`;
    if (range && selectedText) {
      const span = document.createElement("span");
      span.id = id;
      span.classList.add("highlighted"); // Hinzufügen der Klasse für das Hervorheben/Markieren von Bookmark Texten
      
      // Sicherstellen, dass der Range keine nicht-Text-Knoten teilweise auswählt
      if (range.startContainer.nodeType === Node.TEXT_NODE && range.endContainer.nodeType === Node.TEXT_NODE) {
        try {
          range.surroundContents(span);
        } catch (error) {
          console.error('Fehler beim Umgeben des Inhalts:', error);
          return;
        }
      } else {
        const docFrag = range.extractContents();
        span.appendChild(docFrag);
        range.insertNode(span);
      }

      setBookmarks([
        ...bookmarks,
        {
          text: selectedText,
          id,
          name: bookmarkName,
        },
      ]);
      setSelectedText(null); // Zurücksetzen des ausgewählten Textes
      setBookmarkName(""); // Zurücksetzen des Modalfelds
      setRange(null); // Zurücksetzen des Range
      setIsModalOpen(false); // Modal schließen
    }
  };

  // Funktion zum Umschalten des Dropdown-Menüs
  const toggleDropdown = () => {
    setIsDropdownOpen((prevState) => !prevState);
  };

  // Funktion zum Scrollen zu einem bestimmten Bookmark
  const scrollToBookmark = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      window.scrollTo({
        top: element.getBoundingClientRect().top + window.scrollY - 150, // Offset wenn man über den Bookmark zurückspringen möchte
        behavior: "smooth",
      });
      setIsDropdownOpen(false); // Dropdown schließen
    }
  };

  // Funktion zum Entfernen eines Bookmarks
  const removeBookmark = (id: string) => {
    setBookmarks(bookmarks.filter((bookmark) => bookmark.id !== id));
    const element = document.getElementById(id);
    if (element) {
      element.replaceWith(...element.childNodes); // Entfernen der Hervorhebung und Wiederherstellung des Textes
    }
  };

  // Funktion zum Bearbeiten eines Bookmarks
  const editBookmark = (id: string) => {
    setEditingBookmarkId(id);
    const bookmark = bookmarks.find((bookmark) => bookmark.id === id);
    if (bookmark) {
      setNewBookmarkName(bookmark.name);
    }
  };

  // Funktion zum Speichern des geänderten Bookmark-Namens
  const saveBookmarkName = () => {
    setBookmarks(
      bookmarks.map((bookmark) =>
        bookmark.id === editingBookmarkId
          ? { ...bookmark, name: newBookmarkName }
          : bookmark
      )
    );
    setEditingBookmarkId(null);
    setNewBookmarkName("");
  };

  return (
    <div className="bookmarks-container">
      <div className="bookmarks-header">
        <InfoIcon
          additionalClass="bookmarkbar"
          imageSrc={infoIcon}
          infoboxImage={infoboxImage}
        />{" "}
        {/* InfoIcon-Komponente hier hinzugefügt */}
        <button className="bookmarks-toggle" onClick={toggleDropdown}>
          My Bookmarks ▼
        </button>
        <button className="bookmark-button" onClick={openModal}>
          Add Bookmark
        </button>
      </div>
      {isDropdownOpen && (
        <div className="bookmarks-list">
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
                    onClick={() => editBookmark(bookmark.id)}
                  >
                    Edit
                  </span>
                  <span
                    className="delete-link"
                    onClick={() => removeBookmark(bookmark.id)}
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
            <button onClick={addBookmark}>Save</button>
            <button onClick={() => setIsModalOpen(false)}>Cancel</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Bookmarks;

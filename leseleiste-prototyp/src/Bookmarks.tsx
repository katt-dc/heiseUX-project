import React, { useState } from "react";
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

  // Typen für die Funktionen definieren
  const createAndInsertHighlight = (
    range: Range,
    id: string
  ): HTMLSpanElement | null => {
    const span = document.createElement("span");
    span.id = id;
    span.classList.add("highlighted");

    // Sicherstellen, dass der Range keine nicht-Text-Knoten teilweise auswählt
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

  // Funktion zum Abrufen der Start- und Endpositionen des markierten Bereichs
  const getHighlightPositions = (
    element: HTMLElement
  ): { start: number; end: number } => {
    const start = element.getBoundingClientRect().top + window.scrollY;
    const end = element.getBoundingClientRect().bottom + window.scrollY;
    return { start, end };
  };

  // Hauptfunktion zum Hinzufügen eines neuen Lesezeichens
  const addNewBookmark = () => {
    const id = `bookmark-${new Date().getTime()}`;
    if (range && selectedText) {
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
    }
  };

  const toggleDropdown = () => {
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

  const handleRemoveBookmark = (id: string) => {
    removeBookmark(id);
    const element = document.getElementById(id);
    if (element) {
      element.classList.remove("highlighted");
    }
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

import React, { createContext, useContext, useState, ReactNode } from "react";

// Definiere das Interface für ein Lesezeichen (Bookmark)
interface Bookmark {
  text: string;
  id: string;
  name: string;
  start: number;
  end: number;
}

// Definiere das Interface für den Kontexttyp, der die Lesezeichen und die zugehörigen Funktionen enthält
interface BookmarkContextType {
  bookmarks: Bookmark[];
  addBookmark: (bookmark: Bookmark) => void; // Funktion zum Hinzufügen eines Lesezeichens
  removeBookmark: (id: string) => void; // Funktion zum Entfernen eines Lesezeichens anhand der ID
  editBookmarkName: (id: string, newName: string) => void; // Funktion zum Bearbeiten des Namens eines Lesezeichens anhand der ID
}

// Erstellen des Kontextes für Lesezeichen
const BookmarkContext = createContext<BookmarkContextType | undefined>(
  undefined
);

// Custom Hook zum Verwenden des BookmarkContext
export const useBookmarkContext = () => {
  const context = useContext(BookmarkContext);
  // Wenn der Kontext nicht innerhalb eines BookmarkProviders verwendet wird, wird ein Fehler geworfen
  if (!context) {
    throw new Error(
      "useBookmarkContext must be used within a BookmarkProvider"
    );
  }
  return context;
};

// Komponente für den BookmarkProvider
export const BookmarkProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  // Zustand für die Lesezeichen
  const [bookmarks, setBookmarks] = useState<Bookmark[]>([]);
  // Funktion zum Hinzufügen eines neuen Lesezeichens
  const addBookmark = (bookmark: Bookmark) => {
    setBookmarks((prevBookmarks) => [...prevBookmarks, bookmark]);
  };

  // Funktion zum Entfernen eines Lesezeichens anhand der ID
  const removeBookmark = (id: string) => {
    setBookmarks((prevBookmarks) =>
      prevBookmarks.filter((bookmark) => bookmark.id !== id)
    );
  };

  // Funktion zum Bearbeiten des Namens eines Lesezeichens anhand der ID
  const editBookmarkName = (id: string, newName: string) => {
    setBookmarks((prevBookmarks) =>
      prevBookmarks.map((bookmark) =>
        bookmark.id === id ? { ...bookmark, name: newName } : bookmark
      )
    );
  };

  // Bereitstellen des Kontextes für die Kinderkomponenten
  return (
    <BookmarkContext.Provider
      value={{ bookmarks, addBookmark, removeBookmark, editBookmarkName }}
    >
      {children}
    </BookmarkContext.Provider>
  );
};

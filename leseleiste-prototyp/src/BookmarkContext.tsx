import React, { createContext, useContext, useState, ReactNode } from "react";

interface Bookmark {
  text: string;
  id: string;
  name: string;
  start: number;
  end: number;
}

interface BookmarkContextType {
  bookmarks: Bookmark[];
  addBookmark: (bookmark: Bookmark) => void;
  removeBookmark: (id: string) => void;
  editBookmarkName: (id: string, newName: string) => void;
}

const BookmarkContext = createContext<BookmarkContextType | undefined>(
  undefined
);

export const useBookmarkContext = () => {
  const context = useContext(BookmarkContext);
  if (!context) {
    throw new Error(
      "useBookmarkContext must be used within a BookmarkProvider"
    );
  }
  return context;
};

export const BookmarkProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [bookmarks, setBookmarks] = useState<Bookmark[]>([]);

  const addBookmark = (bookmark: Bookmark) => {
    setBookmarks((prevBookmarks) => [...prevBookmarks, bookmark]);
  };

  const removeBookmark = (id: string) => {
    setBookmarks((prevBookmarks) =>
      prevBookmarks.filter((bookmark) => bookmark.id !== id)
    );
  };

  const editBookmarkName = (id: string, newName: string) => {
    setBookmarks((prevBookmarks) =>
      prevBookmarks.map((bookmark) =>
        bookmark.id === id ? { ...bookmark, name: newName } : bookmark
      )
    );
  };

  return (
    <BookmarkContext.Provider
      value={{ bookmarks, addBookmark, removeBookmark, editBookmarkName }}
    >
      {children}
    </BookmarkContext.Provider>
  );
};

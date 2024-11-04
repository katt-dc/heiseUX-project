import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App1";
import "./index.css";
import { BookmarkProvider } from "./BookmarkContext";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BookmarkProvider>
      <App />
    </BookmarkProvider>
  </React.StrictMode>
);

import React, { useState } from "react";
import "./lightbox.css";

interface Image {
  url: string;
  caption: string;
}

interface LightboxProps {
  image: Image;
}

const Lightbox: React.FC<LightboxProps> = ({ image }) => {
  const [isOpen, setIsOpen] = useState(false);

  const openLightbox = () => setIsOpen(true);
  const closeLightbox = () => setIsOpen(false);

  return (
    <div className="lightbox-container">
      {/* Thumbnail */}
      <img
        src={image.url}
        alt={image.caption}
        onClick={openLightbox}
        className="thumbnail"
      />

      {/* Lightbox Modal */}
      {isOpen && (
        <div className="lightbox-overlay" onClick={closeLightbox}>
          <div
            className="lightbox-content"
            onClick={(e) => e.stopPropagation()}
          >
            <button className="close-btn" onClick={closeLightbox}>
              &times;
            </button>
            <img
              src={image.url}
              alt={image.caption}
              className="lightbox-image"
            />
            <p className="caption">{image.caption}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Lightbox;

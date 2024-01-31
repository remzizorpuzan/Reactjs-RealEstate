import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { properties } from "../../data/propertiesData";
import { FiChevronLeft, FiChevronRight, FiX } from "react-icons/fi";
import "./propertyDetailsPage.css";

const PropertyDetailsPage = () => {
  const { id } = useParams();
  const property = properties.find((prop) => prop.id === parseInt(id));

  const [isFullScreen, setIsFullScreen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const toggleFullScreen = (image) => {
    setIsFullScreen(!isFullScreen);
    setSelectedImage(image);
  };

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === property.images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? property.images.length - 1 : prevIndex - 1
    );
  };

  if (!property) {
    return <div>Property Not Found.</div>;
  }

  return (
    <div className="property-details-container">
      <div className="content-container">
        <div className="image-gallery">
          <button className="arrow prev" onClick={prevImage}>
            <FiChevronLeft />
          </button>
          <img
            className="property-image"
            src={property.images[currentImageIndex]}
            alt={`${property.name}-${currentImageIndex}`}
            onClick={() => toggleFullScreen(property.images[currentImageIndex])}
          />
          <button className="arrow next" onClick={nextImage}>
            <FiChevronRight />
          </button>
        </div>
        <div className={`image-popup ${isFullScreen ? "visible" : ""}`}>
          <img
            src={selectedImage}
            alt={`${property.name}-fullscreen`}
            className="popup-image"
          />
          <button className="close-btn" onClick={() => toggleFullScreen(null)}>
            <FiX />
          </button>
        </div>
        <div className="features">
          <ul className="feature-list">
            <li>
              <strong>{property.name}</strong>
            </li>
            <li>
              <strong>Fiyat:</strong> {property.price}
            </li>
            <li>
              <strong>Tip:</strong> {property.type}
            </li>
            <li>
              <strong>Açıklama:</strong> {property.description}
            </li>
            <li>
              <strong>İlan No: </strong>
              {property.id}
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default PropertyDetailsPage;

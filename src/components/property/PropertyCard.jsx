// PropertyCard.jsx
import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
import "./propertycard.css";

const PropertyCard = ({ property }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const scrollLeft = () => {
    if (currentImageIndex > 0) {
      setCurrentImageIndex(currentImageIndex - 1);
    }
  };

  const scrollRight = () => {
    if (currentImageIndex < property.images.length - 1) {
      setCurrentImageIndex(currentImageIndex + 1);
    }
  };

  return (
    <Card className="property-card">
      <Card.Body className="card-body">
        <Card.Title className="card-title">{property.name}</Card.Title>
        <Card.Text className="card-text">{property.description}</Card.Text>
        <p>Fiyat: {property.price}</p>
        <p>Tipi: {property.type}</p>
        <p>İlan numarası: {property.id}</p>
        <div className="property-images-container">
          <div className="property-images">
            {property.images && property.images.length > 0 && (
              <img
                className="property-image"
                src={property.images[currentImageIndex]}
                alt={`Property ${currentImageIndex + 1}`}
              />
            )}
          </div>
          <div className="navigation-arrows">
            <span className="arrow-nav left-arrow" onClick={scrollLeft}>
              &#8249;
            </span>
            <span className="arrow-nav right-arrow" onClick={scrollRight}>
              &#8250;
            </span>
          </div>
        </div>
        <Link to={`/ilanlar/${property.id}`} className="details-link">
          <Button
            variant="primary"
            style={{ backgroundColor: "#ff9700", color: "#fff" }}
          >
            Detaylar
          </Button>
        </Link>
      </Card.Body>
    </Card>
  );
};

export default PropertyCard;

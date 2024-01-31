import React, { useState, useEffect } from "react";
import { properties } from "../../data/propertiesData";
import PropertyCard from "../../components/property/PropertyCard";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Pagination from "react-bootstrap/Pagination";
import "./propertyListPage.css"; // Import the CSS file

const PropertyListPage = () => {
  const itemsPerPage = 9; // Number of items to display per page
  const [currentPage, setCurrentPage] = useState(1);
  const [displayProperties, setDisplayProperties] = useState([]);

  const indexOfLastProperty = currentPage * itemsPerPage;
  const indexOfFirstProperty = indexOfLastProperty - itemsPerPage;
  const slicedProperties = properties
    .sort((a, b) => a.id - b.id) // Sort properties based on ID
    .slice(indexOfFirstProperty, indexOfLastProperty);

  useEffect(() => {
    setDisplayProperties(slicedProperties);
  }, [currentPage, slicedProperties]);

  const totalItems = properties.length;
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const renderProperties = displayProperties.map((property) => (
    <Col key={property.id} className="property-list-col">
      <PropertyCard property={property} className="property-card" />
    </Col>
  ));

  const paginationItems = [];
  for (let number = 1; number <= totalPages; number++) {
    paginationItems.push(
      <Pagination.Item
        key={number}
        active={number === currentPage}
        onClick={() => handlePageChange(number)}
      >
        {number}
      </Pagination.Item>
    );
  }

  return (
    <div className="property-list-container">
      <Row xs={1} md={2} lg={3} className="g-4 property-list-row">
        {renderProperties}
      </Row>
      {totalPages > 1 && (
        <div className="pagination-container">
          <Pagination>{paginationItems}</Pagination>
        </div>
      )}
    </div>
  );
};

export default PropertyListPage;

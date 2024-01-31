import React, { useState, useEffect, useCallback } from "react";
import HeadPhoto from "../../styles/Header/HeadPhoto";
import HeadPhoto2 from "../../styles/Header/HeadPhoto2";
import HeadPhoto3 from "../../styles/Header/HeadPhoto3";

export default function Header() {
  const imageComponents = [<HeadPhoto />, <HeadPhoto3 />, <HeadPhoto2 />];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const goToPreviousImage = useCallback(() => {
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentImageIndex(
        currentImageIndex === 0
          ? imageComponents.length - 1
          : currentImageIndex - 1
      );
      setIsTransitioning(false);
    }, 600);
  }, [currentImageIndex, imageComponents.length]);

  const goToNextImage = useCallback(() => {
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentImageIndex(
        currentImageIndex === imageComponents.length - 1
          ? 0
          : currentImageIndex + 1
      );
      setIsTransitioning(false);
    }, 600);
  }, [currentImageIndex, imageComponents.length]);

  useEffect(() => {
    const interval = setInterval(goToNextImage, 5000);

    return () => {
      clearInterval(interval);
    };
  }, [currentImageIndex, goToNextImage]);

  return (
    <div
      style={{
        position: "relative",
        width: "100%",
        overflow: "hidden",
        height: "100%", // Set a fixed height for the image container
      }}
    >
      {/* Display the current image */}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          transition: "opacity 0.5s ease-in-out",
          opacity: isTransitioning ? 0 : 1,
          height: "100%",
          width: "100%", // Ensure the image occupies the entire container
        }}
      >
        <div
          style={{
            width: "100%",
            height: "100%",
            overflow: "hidden", // Hide any overflowing content
          }}
        >
          {imageComponents[currentImageIndex]}
        </div>
      </div>

      {/* Styled arrow buttons */}
      <button
        onClick={goToPreviousImage}
        style={{
          position: "absolute",
          top: "50%",
          left: "10px",
          transform: "translateY(-50%)",
          border: "none",
          background: "rgba(0, 0, 0, 0.5)",
          borderRadius: "50%",
          width: "40px",
          height: "40px",
          fontSize: "24px",
          color: "white",
        }}
      >
        &#8592; {/* Left arrow */}
      </button>
      <button
        onClick={goToNextImage}
        style={{
          position: "absolute",
          top: "50%",
          right: "10px",
          transform: "translateY(-50%)",
          border: "none",
          background: "rgba(0, 0, 0, 0.5)",
          borderRadius: "50%",
          width: "40px",
          height: "40px",
          fontSize: "24px",
          color: "white",
        }}
      >
        &#8594; {/* Right arrow */}
      </button>
    </div>
  );
}

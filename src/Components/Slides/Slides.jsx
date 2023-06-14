import React, { useState } from "react";
import "./Slides.css";
import NavigateBeforeIcon from "@mui/icons-material/NavigateBefore";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";

const slides = [
  { url: "https://www.meethomeopharmacy.com/image/slides/fiestbanner.jpg" },
  { url: "https://www.meethomeopharmacy.com/image/slides/3rdbanner.jpg" },
  { url: "https://www.meethomeopharmacy.com/image/slides/secondbanner.jpg" },
];

const Slides = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const slideStyles = {
    width: "100%",
    height: "100%",
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundImage: `url(${slides[currentIndex].url})`,
  };

  const goToPrevious = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };
  const goToNext = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  return (
    <div className="slider">
      <div className="left-arrow" onClick={goToPrevious}>
        <NavigateBeforeIcon className="left-arrow-main" />
      </div>
      <div className="right-arrow" onClick={goToNext}>
        <NavigateNextIcon className="right-arrow-main" />
      </div>
      <div style={slideStyles}></div>
    </div>
  );
};

export default Slides;

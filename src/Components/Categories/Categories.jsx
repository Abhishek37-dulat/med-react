import React from "react";
import "./Categories.css";
import NavigateBeforeIcon from "@mui/icons-material/NavigateBefore";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import { useState } from "react";

const CateImages = [
  [
    "https://www.meethomeopharmacy.com/image/category/bone-joint-muscles-care.png",
    "https://www.meethomeopharmacy.com/image/category/chronic-diseases.png",
    "https://www.meethomeopharmacy.com/image/category/cold-cough.png",
    "https://www.meethomeopharmacy.com/image/category/diabetes-care.png",
    "https://www.meethomeopharmacy.com/image/category/eye-and-ear.png",
    "https://www.meethomeopharmacy.com/image/category/face-beauty.png",
    "https://www.meethomeopharmacy.com/image/category/fever-flu.png",
    "https://www.meethomeopharmacy.com/image/category/headache-migrain.png",
  ],
  [
    "https://www.meethomeopharmacy.com/image/category/health-growth.png",
    "https://www.meethomeopharmacy.com/image/category/heart-care.png",
    "https://www.meethomeopharmacy.com/image/category/kids-care.png",
    "https://www.meethomeopharmacy.com/image/category/kidney-care.png",
    "https://www.meethomeopharmacy.com/image/category/liver-stomach-care.png",
    "https://www.meethomeopharmacy.com/image/category/mens-care.png",
    "https://www.meethomeopharmacy.com/image/category/nerve-and-brain.png",
    "https://www.meethomeopharmacy.com/image/category/nose-throat.png",
  ],
  [
    "https://www.meethomeopharmacy.com/image/category/oral-care.png",
    "https://www.meethomeopharmacy.com/image/category/personal-care.png",
    "https://www.meethomeopharmacy.com/image/category/piles-fissure-fistula.png",
    "https://www.meethomeopharmacy.com/image/category/respiratory-wellness.png",
    "https://www.meethomeopharmacy.com/image/category/sedentary-lifestyle.png",
    "https://www.meethomeopharmacy.com/image/category/womens-care.png",
    "https://www.meethomeopharmacy.com/image/category/personal-care.png",
    "https://www.meethomeopharmacy.com/image/category/piles-fissure-fistula.png",
  ],
];

const CartName = [
  [
    "Bone, Joint & Muscles Care",
    "Chronic Diseases",
    "Cold & Cough Care",
    "Diabetes Care",
    "Eye & Ear Care",
    "Face & Beauty Care",
    "Fever & Flu Care",
    "Hair & Skin Care",
  ],
  [
    "Headache & Migrain Care",
    "Health & Growth CAre",
    "Heart Care",
    "Kid's & Baby Care",
    "Kidney Care",
    "Liver & Stomach Care",
    "Men's Care",
    "Nerve & Brain Care",
  ],
  [
    "Nose & Throat Care",
    "Oral Care",
    "Personal Care",
    "Piles Fissure & Fistula Care",
    "Respiratory Wellness",
    "Sedentary Lifestyle Care",
    "Weight Management",
    "Women's Care",
  ],
];

const Categories = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const goToPrevious = () => {
    console.log("hello");
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? CartName.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };
  const goToNext = () => {
    console.log("bye");
    const isLastSlide = currentIndex === CartName.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };
  return (
    <div className="categories">
      <div className="categories-all">
        <div className="categories-1">
          <p>Shop By Categories</p>
        </div>
        <div className="categories-2">
          {CartName[0].map((data, index) => {
            return (
              <div>
                <div>
                  <img src={CateImages[currentIndex][index]} alt="cate" />
                </div>
                <div style={{ height: "20%" }}>
                  <p>{CartName[currentIndex][index]}</p>
                </div>
              </div>
            );
          })}
        </div>
        <div className="categories-3">
          <p onClick={goToPrevious}>
            <NavigateBeforeIcon />
          </p>
          <p onClick={goToNext}>
            <NavigateNextIcon />
          </p>
        </div>
      </div>
    </div>
  );
};

export default Categories;

import React from "react";
import "./Brands.css";
import NavigateBeforeIcon from "@mui/icons-material/NavigateBefore";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";

const BrandImage = [
  "https://www.meethomeopharmacy.com/image/logo/adven.jpg",
  "https://www.meethomeopharmacy.com/image/logo/adelmar.jpg",
  "https://www.meethomeopharmacy.com/image/logo/schwabe.jpg",
  "https://www.meethomeopharmacy.com/image/logo/wheezal.jpg",
  "https://www.meethomeopharmacy.com/image/logo/adven.jpg",
  "https://www.meethomeopharmacy.com/image/logo/adelmar.jpg",
  "https://www.meethomeopharmacy.com/image/logo/schwabe.jpg",
  "https://www.meethomeopharmacy.com/image/logo/wheezal.jpg",
];

const Brands = () => {
  return (
    <div className="brands">
      <div className="brands-all">
        <div className="brands-1">
          <p>Shop By Categories</p>
        </div>
        <div className="brands-2">
          {BrandImage.map((data, index) => {
            return (
              <div>
                <div>
                  <img src={BrandImage[index]} alt="cate" />
                </div>
              </div>
            );
          })}
        </div>
        <div className="brands-3">
          <p>
            <NavigateBeforeIcon />
          </p>
          <p>
            <NavigateNextIcon />
          </p>
        </div>
      </div>
    </div>
  );
};

export default Brands;

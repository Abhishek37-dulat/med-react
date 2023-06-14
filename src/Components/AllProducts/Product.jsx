import React from "react";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";

const Product = ({ image, name }) => {
  return (
    <>
      <div>
        <div>
          <img src={image} alt="cate" />
        </div>
        <div style={{ height: "40%" }}>
          <p>{name}</p>
          <p>
            <span>₹124 </span>
            <span
              style={{
                textDecorationLine: "line-through",
                color: "rgba(0,0,0,0.5)",
              }}
            >
              {" "}
              ₹155
            </span>
            <span>
              <button className="add-to-bag-cart-button">
                <p>ADD TO BAG</p>
                <p>
                  <ShoppingBagIcon />
                </p>
              </button>
            </span>
          </p>
        </div>
        <div
          style={{
            position: "absolute",
            padding: "5px",
            width: "50px",
            height: " 20px",
            backgroundColor: "#16a086",
            color: "#fff",
            top: "24%",
            marginLeft: "18.5%",
          }}
        >
          <p>20%</p>
        </div>
      </div>
    </>
  );
};

export default Product;

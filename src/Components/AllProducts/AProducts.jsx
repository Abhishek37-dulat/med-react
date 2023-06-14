import React from "react";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";

const AProducts = ({ image, name, data, addItemToCart }) => {
  return (
    <div className="aproducts">
      <div className="aproducts-img">
        <img src={image} alt="cate" />
      </div>
      <div style={{ height: "40%" }} className="aproducts-lower-box">
        <p>{name}</p>
        <p style={{ flexDirection: "row" }}>
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
            <button
              className="add-to-bag-cart-button"
              onClick={() => addItemToCart(data)}
            >
              <p>ADD TO BAG</p>
              <p>
                <ShoppingBagIcon />
              </p>
            </button>
          </span>
        </p>
      </div>
    </div>
  );
};

export default AProducts;

import React from "react";
import CartDetails from "../Components/CartDetails/CartDetails";

const Cart = () => {
  const token = sessionStorage.getItem("accessToken");
  return (
    <div>
      <CartDetails token={token} />
    </div>
  );
};

export default Cart;

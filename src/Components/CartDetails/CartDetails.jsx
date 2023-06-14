import React, { useEffect, useState } from "react";
import "./CartDetails.css";
import HomeIcon from "@mui/icons-material/Home";
import KeyboardDoubleArrowRightIcon from "@mui/icons-material/KeyboardDoubleArrowRight";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { removeFromCart } from "../../reducer/actions/cartAction";

const CartDetails = ({ token }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [qnt, setQnt] = useState(1);
  const { cartItems } = useSelector((state) => state.cart);
  const [price, setPrice] = useState(0);
  const [weight, setWeight] = useState(0);
  const handlecheckout = () => {
    if (token) {
      navigate("/thankyou");
    } else {
      navigate("/login");
    }
  };

  const handleAdd = (data) => {
    if (qnt > 0) {
      setQnt(qnt + 1);
      data.qnt = data.qnt + 1;
    }
  };
  const handleSub = (data) => {
    if (qnt > 1) {
      setQnt(qnt - 1);
      data.qnt--;
    } else {
      dispatch(removeFromCart(data.id));
      data.qnt = 0;
    }
  };
  const handleRemove = (data) => {
    dispatch(removeFromCart(data.id));
    data.qnt = 0;
  };

  useEffect(() => {
    TotalAmount();
  }, [cartItems]);

  const TotalAmount = () => {
    let price = 0,
      weight = 0;
    cartItems.map((item) => {
      price += item.price.cost;
      weight += 100;
    });
    setPrice(price);
    setWeight(weight);
  };

  console.log(cartItems);
  return (
    <div className="cartdetails">
      <div className="cart-link-bar">
        <div style={{ justifyContent: "flex-start" }}>
          <p style={{ marginLeft: "10px", fontWeight: "500" }}>Shopping Cart</p>
        </div>
        <div style={{ justifyContent: "flex-end" }}>
          <p style={{ marginRight: "10px", fontWeight: "500" }}>
            <p style={{ marginRight: "2px" }}>
              <HomeIcon />
            </p>
            <p style={{ marginRight: "2px" }}>
              <KeyboardDoubleArrowRightIcon />
            </p>
            <p style={{ marginRight: "2px" }}>Shopping Cart</p>
          </p>
        </div>
      </div>
      {/* ------------------------------------ */}
      <div className="cart-table">
        <table>
          <tr>
            <th>Image</th>
            <th>Product Name</th>
            <th>Unit Price</th>
            <th>Unit Weight</th>
            <th>Quantity</th>
            <th>Total Price</th>
            <th>Total Weight</th>
          </tr>
          {cartItems?.map((data, index) => {
            return (
              <tr>
                <td>
                  <img style={{ width: "50px" }} src={data.url} alt="product" />
                </td>
                <td>{data.title}</td>
                <td>₹ {data.price.cost}</td>
                <td>{98} ml</td>
                <td>
                  <div>
                    <div>{qnt}</div>
                    <div>
                      <button
                        style={{ borderRadius: "3px 0px 0px 3px" }}
                        onClick={() => handleSub(data)}
                      >
                        <RemoveIcon />
                      </button>
                      <button
                        style={{ backgroundColor: "#C9302C" }}
                        onClick={() => handleRemove(data)}
                      >
                        <HighlightOffIcon />
                      </button>
                      <button
                        style={{ borderRadius: "0px 3px 3px 0px" }}
                        onClick={() => handleAdd(data)}
                      >
                        <AddIcon />
                      </button>
                    </div>
                  </div>
                </td>
                <td>₹ {data.price.cost * qnt}</td>
                <td>{98 * qnt} ml</td>
              </tr>
            );
          })}
        </table>
      </div>
      {/* ------------------------------------ */}
      <div className="cart-table-total">
        <table>
          <tr>
            <th>Total Qty: </th>
            <td>{cartItems.length}</td>
          </tr>
          <tr>
            <th>Total Weight: </th>
            <td>{weight} gm</td>
          </tr>
          <tr>
            <th>Total Price: </th>
            <td>₹ {price}</td>
          </tr>
        </table>
      </div>
      {/* --------------------------------------- */}
      <div className="cart-last-button">
        <div>
          <button onClick={() => navigate("/")}>CONTINUE SHOPPING</button>
        </div>
        <div style={{ justifyContent: "flex-end" }}>
          <button onClick={() => handlecheckout()}>CHECKOUT</button>
        </div>
      </div>
    </div>
  );
};

export default CartDetails;

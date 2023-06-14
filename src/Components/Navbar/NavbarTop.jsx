import React, { useContext, useState } from "react";
import CallIcon from "@mui/icons-material/Call";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { useNavigate } from "react-router-dom";
import { DataContext } from "../../context/DataProvider";
import { useSelector } from "react-redux";

const NavbarTop = () => {
  const navigate = useNavigate();
  const [accountBox, setAccountBox] = useState("none");
  const { account } = useContext(DataContext);
  const { cartItems } = useSelector((state) => state.cart);
  const handleAccountBox = () => {
    if (accountBox === "none") {
      setAccountBox("block");
    } else {
      setAccountBox("none");
    }
  };
  const handleLogin = () => {
    navigate("/login");
    setAccountBox("none");
  };
  const handleRegister = () => {
    navigate("/register");
    setAccountBox("none");
  };
  const handlelogout = () => {
    sessionStorage.removeItem("accessToken");
    sessionStorage.removeItem("refreshToken");
    navigate("/");
  };
  return (
    <>
      <div className="navbar-top">
        <div>
          <p style={{ marginLeft: "2%", marginTop: "0.3%" }}>
            <CallIcon />
          </p>
          <p style={{ marginLeft: "2%", marginTop: "0.3%" }}>
            Call Us: +91 98144 66017
          </p>
        </div>
        <div style={{ justifyContent: "flex-end" }}>
          {account ? (
            <>
              <div className="account-box-name">
                <p>{account}</p>
              </div>
              <div className="account-box" onClick={() => handlelogout()}>
                <div>
                  <p>Logout</p>
                </div>
              </div>
            </>
          ) : (
            <div className="account-box" onClick={() => handleAccountBox()}>
              <div>
                <p>My Account</p>
                <p>
                  <ExpandMoreIcon />
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
      <div className="my-account-box" style={{ display: `${accountBox}` }}>
        <div>
          <div onClick={() => handleLogin()}>Login</div>
          <div onClick={() => handleRegister()}>Register</div>
        </div>
      </div>
    </>
  );
};

export default NavbarTop;

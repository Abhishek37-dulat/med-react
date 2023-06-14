import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import { useNavigate } from "react-router-dom";

const NavbarMid = () => {
  const navigate = useNavigate();
  return (
    <div className="navbar-mid">
      <div className="mid-left">
        <img
          src="https://www.meethomeopharmacy.com/image/meet-homeo-pharmacy-logo.png"
          alt="logo"
          onClick={() => navigate("/")}
        />
      </div>
      <div className="mid-right">
        <div className="m-r-top">
          <p style={{ marginLeft: "10%" }} onClick={() => navigate("/")}>
            HOME
          </p>
          <p>ABOUT US</p>
          <p>CONTACT US</p>
          <p>UPLOAD PRESCRIPTION</p>
        </div>
        <div className="m-r-bottom">
          <form>
            <div className="form-all">
              <div className="form-input">
                <input
                  type="text"
                  placeholder="Type product name or description..."
                />
              </div>
              <div className="form-button">
                <button>
                  <SearchIcon />
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default NavbarMid;

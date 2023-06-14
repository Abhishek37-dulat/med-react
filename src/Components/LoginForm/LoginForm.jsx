import React, { useContext, useState } from "react";
import "./LoginForm.css";
import HomeIcon from "@mui/icons-material/Home";
import KeyboardDoubleArrowRightIcon from "@mui/icons-material/KeyboardDoubleArrowRight";
import { TextField } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { DataContext } from "../../context/DataProvider";
import { authenticatesLogin, authenticatesSignup } from "../../service/api";

const LoginForm = () => {
  const navigate = useNavigate();
  const [details, setDetails] = useState({
    email: "",
    password: "",
  });
  const { setAccount } = useContext(DataContext);
  const handleChange = (e) => {
    e.preventDefault();
    setDetails((data) => ({ ...data, [e.target.name]: e.target.value }));
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await authenticatesLogin(details);
    if (response.status === 200) {
      sessionStorage.setItem(
        "accessToken",
        `Bearer ${response.data.accessToken}`
      );
      sessionStorage.setItem(
        "refreshToken",
        `Bearer ${response.data.refreshToken}`
      );
      setAccount(response.data.data.firstname);
      setDetails({
        email: "",
        password: "",
      });
      navigate("/");
    } else {
      alert("Please Enter Valid Email or password");
    }
  };
  return (
    <div className="registerform-page">
      <div className="registerform-page-all">
        <div className="registerform-page-contant">
          {/* -------------------------- */}
          <div className="register-link-bar">
            <div style={{ justifyContent: "flex-start" }}>
              <p style={{ marginLeft: "10px", fontWeight: "500" }}>Login</p>
            </div>
            <div style={{ justifyContent: "flex-end" }}>
              <p style={{ marginRight: "10px", fontWeight: "500" }}>
                <p style={{ marginRight: "2px" }}>
                  <HomeIcon />
                </p>
                <p style={{ marginRight: "2px" }}>
                  <KeyboardDoubleArrowRightIcon />
                </p>
                <p style={{ marginRight: "2px" }}>Login</p>
              </p>
            </div>
          </div>
          {/* -------------------------- */}
          <div className="register-details-form">
            <form onSubmit={handleSubmit}>
              <div className="register-detail-title">
                <p>Returning Customer</p>
              </div>

              <div className="register-detail-box-2">
                <TextField
                  required
                  id="outlined-required"
                  label="E-Mail"
                  placeholder="E-Mail"
                  sx={{ width: "100%" }}
                  type="email"
                  name="email"
                  value={details.email}
                  onChange={(e) => handleChange(e)}
                />
              </div>
              <div className="register-detail-box-4">
                <TextField
                  required
                  id="outlined-required"
                  label="Password"
                  placeholder="Password"
                  sx={{ width: "100%" }}
                  type="password"
                  name="password"
                  value={details.password}
                  onChange={(e) => handleChange(e)}
                />
              </div>
              <div className="register-detail-box-5">
                <button onClick={(e) => handleSubmit(e)}>Login</button>
              </div>
              <div className="register-detail-box-6">
                <p>
                  If you don't have an account please register at the{" "}
                  <span
                    style={{ fontWeight: "500", cursor: "pointer" }}
                    onClick={() => navigate("/register")}
                  >
                    Register page
                  </span>
                  .
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;

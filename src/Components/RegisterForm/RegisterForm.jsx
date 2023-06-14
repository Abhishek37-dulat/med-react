import React, { useState } from "react";
import "./RegisterForm.css";
import HomeIcon from "@mui/icons-material/Home";
import KeyboardDoubleArrowRightIcon from "@mui/icons-material/KeyboardDoubleArrowRight";
import { TextField } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { authenticatesLogin, authenticatesSignup } from "../../service/api";
import { DataContext } from "../../context/DataProvider";

const RegisterForm = () => {
  const navigate = useNavigate();
  const [details, setDetails] = useState({
    firstname: "",
    lastname: "",
    email: "",
    mobile: "",
    password: "",
  });
  const [confirmPassword, setConfirmPassword] = useState("");
  const handleChange = (e) => {
    e.preventDefault();
    setDetails((data) => ({ ...data, [e.target.name]: e.target.value }));
    if (e.target.name === "confirmPassword") {
      setConfirmPassword(e.target.value);
    }
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (
      details.firstname === "" ||
      details.lastname === "" ||
      details.email === "" ||
      details.mobile === "" ||
      details.password === "" ||
      confirmPassword === ""
    ) {
      console.log(details);
      return alert("fill all the details carefully!");
    } else {
      if (details.password !== confirmPassword) {
        console.log(details.password, confirmPassword);
        return alert("password and confirmPassword should match!");
      } else {
        await authenticatesSignup(details);
        setDetails({
          firstname: "",
          lastname: "",
          email: "",
          mobile: "",
          password: "",
        });
        setConfirmPassword("");
        navigate("/login");
      }
    }
  };
  return (
    <div className="registerform-page">
      <div className="registerform-page-all">
        <div className="registerform-page-contant">
          {/* -------------------------- */}
          <div className="register-link-bar">
            <div style={{ justifyContent: "flex-start" }}>
              <p style={{ marginLeft: "10px", fontWeight: "500" }}>
                Register Account
              </p>
            </div>
            <div style={{ justifyContent: "flex-end" }}>
              <p style={{ marginRight: "10px", fontWeight: "500" }}>
                <p style={{ marginRight: "2px" }}>
                  <HomeIcon />
                </p>
                <p style={{ marginRight: "2px" }}>
                  <KeyboardDoubleArrowRightIcon />
                </p>
                <p style={{ marginRight: "2px" }}>Register</p>
              </p>
            </div>
          </div>
          {/* -------------------------- */}
          <div className="register-details-form">
            <form onSubmit={handleSubmit}>
              <div className="register-detail-title">
                <p>Your Personal Details</p>
              </div>
              <div className="register-detail-box-1">
                <TextField
                  required
                  id="outlined-required"
                  label="First Name"
                  placeholder="First Name"
                  type="text"
                  name="firstname"
                  value={details.firstname}
                  onChange={(e) => handleChange(e)}
                />
                <TextField
                  required
                  id="outlined-required"
                  label="Last Name"
                  placeholder="Last Name"
                  sx={{ marginLeft: "17%" }}
                  type="text"
                  name="lastname"
                  value={details.lastname}
                  onChange={(e) => handleChange(e)}
                />
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
              <div className="register-detail-box-3">
                <TextField
                  required
                  id="outlined-required"
                  label="Mobile"
                  placeholder="Enter Your 10 Digit Mobile Number"
                  sx={{ width: "100%" }}
                  type="number"
                  name="mobile"
                  value={details.mobile}
                  onChange={(e) => handleChange(e)}
                />
              </div>
              <div className="register-detail-title">
                <p>Your Password</p>
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
              <div className="register-detail-box-4">
                <TextField
                  required
                  id="outlined-required"
                  label="Password Confirm"
                  placeholder="Password Confirm"
                  sx={{ width: "100%" }}
                  type="text"
                  name="confirmPassword"
                  value={confirmPassword}
                  onChange={(e) => handleChange(e)}
                />
              </div>
              <div className="register-detail-box-5">
                <button>REGISTER</button>
              </div>
              <div className="register-detail-box-6">
                <p>
                  If you already have an account with us, please login at the{" "}
                  <span
                    style={{ fontWeight: "500", cursor: "pointer" }}
                    onClick={() => navigate("/login")}
                  >
                    Login page
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

export default RegisterForm;

import React from "react";
import "./Footer.css";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-all">
        <div className="footer-part-1">
          <div className="footer-part-1-box-1">
            <div style={{ marginTop: "5%", marginBottom: "3%" }}>
              <p>
                <p style={{ fontSize: "20px", fontWeight: "400" }}>
                  CONTACT INFO
                </p>
              </p>
            </div>
            <div>
              <p>
                <h5 style={{ marginTop: "-5%" }}>Address: </h5>
                <h6>
                  Sandhu Colony G. T. Road Chheherta Near OCM mill
                  <br /> Amritsar, Punjab 143001
                </h6>
              </p>
            </div>
            <div>
              <p>
                <h5>Contact: </h5>
                <h6>0183-5016017</h6>
              </p>
            </div>
            <div>
              <p>
                <h5>Mobile: </h5>
                <h6>+91 98144 66017</h6>
              </p>
            </div>
            <div>
              <p>
                <h5>Email: </h5>
                <h6>meethomeopharmacy@gmail.com</h6>
              </p>
            </div>
          </div>
          <div className="footer-part-1-box-2">
            <p
              style={{
                marginTop: "5%",
                marginBottom: "3%",
                fontSize: "20px",
                fontWeight: "400",
              }}
            >
              INFORMATION
            </p>
            <p>About Us</p>
            <p>Contact Us</p>
            <p>Privacy Policy</p>
            <p>Terms & Conditions</p>
            <p>Return Policy</p>
            <p>Grievance Redressal Policy</p>
          </div>
          <div className="footer-part-1-box-3">
            <p
              style={{
                marginTop: "5%",
                marginBottom: "3%",
                fontSize: "20px",
                fontWeight: "400",
              }}
            >
              MY ACCOUNT
            </p>
            <p>Login</p>
            <p>Register</p>
            <p>Forgotten Password</p>
            <p>My Account</p>
            <p>Order History</p>
            <p>Upload Perscription</p>
            <p>Address Book</p>
          </div>
          <div className="footer-part-1-box-4">
            <p
              style={{
                marginTop: "5%",
                marginBottom: "3%",
                fontSize: "20px",
                fontWeight: "400",
              }}
            >
              DOWNLOAD APP
            </p>
            <p>
              <img
                style={{ width: "150px" }}
                src="https://static.oxinis.com/healthmug/image/healthmug/google-play.png"
                alt="play store"
              />
            </p>
            <p>FOLLOW US</p>
            <p>
              <span>
                <FacebookIcon />
              </span>
              <span>
                <InstagramIcon />
              </span>
              <span>
                <YouTubeIcon />
              </span>
            </p>
            <p
              style={{
                marginTop: "5%",
                marginBottom: "3%",
                fontSize: "20px",
                fontWeight: "400",
              }}
            >
              PAYMENT OPTION
            </p>
            <p>
              <img
                src="https://www.meethomeopharmacy.com/image/catalog/payment.png"
                alt="bank"
              />
            </p>
          </div>
        </div>
        <div className="footer-part-2">
          <img
            src="https://www.meethomeopharmacy.com/image/iso1.png"
            alt="iso"
          />
          <p>ISO 27001:2013 certified online homeopathy pharmacy platform</p>
        </div>
        <div className="footer-part-3">
          <p>Powered By Meet Homeopathic Pharmacy © 2023.</p>
          <img
            src="https://www.meethomeopharmacy.com/image/logo/icon-logo.png"
            alt="loog"
          />
        </div>
      </div>
    </div>
  );
};

export default Footer;

import React, { useState } from "react";
import PlaylistPlayIcon from "@mui/icons-material/PlaylistPlay";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const NavbarBottom = () => {
  const navigate = useNavigate();
  const { cartItems } = useSelector((state) => state.cart);
  const [medBox, setMedBox] = useState("none");
  const [part1, setPart1] = useState("none");
  const [part2, setPart2] = useState("none");
  const [part3, setPart3] = useState("none");
  const [part4, setPart4] = useState("none");
  const [part5, setPart5] = useState("none");
  const handleMedBox = () => {
    if (medBox === "none") {
      setMedBox("block");
    } else {
      setMedBox("none");
    }
  };
  return (
    <div className="navbar-bottom">
      <div className="bottom-left">
        <div className="b-l-box" onClick={() => handleMedBox()}>
          <p
            style={{
              marginLeft: "4%",
              marginTop: "1.3%",
            }}
          >
            <PlaylistPlayIcon />
          </p>
          <p
            style={{
              marginLeft: "2%",
              marginTop: "0%",
            }}
          >
            HOMEOPATHY MEDICINES
          </p>
          <p
            style={{
              marginLeft: "25%",
              marginTop: "0.8%",
            }}
          >
            <KeyboardArrowDownIcon />
          </p>
        </div>
        <div className="b-l-box-down" style={{ display: `${medBox}` }}>
          <div className="b-l-box-down-all">
            <div
              className="b-l-box-down-part1"
              onMouseEnter={() => setPart1("block")}
              onMouseLeave={() => setPart1("none")}
            >
              <div className="part-left">
                <p>Homeopathy Top Brands</p>
              </div>
              <div className="part-right">
                <p>
                  <ChevronRightIcon />
                </p>
              </div>
            </div>
            <div
              className="b-l-box-down-part2"
              onMouseEnter={() => setPart2("block")}
              onMouseLeave={() => setPart2("none")}
            >
              <div className="part-left">
                <p>Homeopathy Categories</p>
              </div>
              <div className="part-right">
                <p>
                  <ChevronRightIcon />
                </p>
              </div>
            </div>
            <div
              className="b-l-box-down-part3"
              onMouseEnter={() => setPart3("block")}
              onMouseLeave={() => setPart3("none")}
            >
              <div className="part-left">
                <p>Homeopathy Medicines</p>
              </div>
              <div className="part-right">
                <p>
                  <ChevronRightIcon />
                </p>
              </div>
            </div>
            <div
              className="b-l-box-down-part4"
              onMouseEnter={() => setPart4("block")}
              onMouseLeave={() => setPart4("none")}
            >
              <div className="part-left">
                <p>Homeopathy Wellness Combos</p>
              </div>
              <div className="part-right">
                <p>
                  <ChevronRightIcon />
                </p>
              </div>
            </div>
            <div
              className="b-l-box-down-part5"
              onMouseEnter={() => setPart5("block")}
              onMouseLeave={() => setPart5("none")}
            >
              <div className="part-left">
                <p>Ayurvedic Medicines</p>
              </div>
              <div className="part-right">
                <p>
                  <ChevronRightIcon />
                </p>
              </div>
            </div>
          </div>
        </div>
        <div
          className="b-l-box-down-down-1"
          style={{ display: `${part1}`, zIndex: "1" }}
          onMouseEnter={() => setPart1("block")}
          onMouseLeave={() => setPart1("none")}
        >
          <div className="b-l-box-down-down-1-all">
            <div className="b-l-box-down-down-1-left">
              <p onClick={() => navigate("/products")}>SBL</p>
              <p onClick={() => navigate("/products")}>Dr.Reckeweg</p>
              <p onClick={() => navigate("/products")}>Allen</p>
              <p onClick={() => navigate("/products")}>Bhargava Phytolab</p>
              <p onClick={() => navigate("/products")}>HSL</p>
              <p onClick={() => navigate("/products")}>
                Willmar Schwabe German
              </p>
              <p onClick={() => navigate("/products")}>New Life</p>
              <p onClick={() => navigate("/products")}>Dr.John</p>
              <p onClick={() => navigate("/products")}>Ralson</p>
            </div>
            <div className="b-l-box-down-down-1-mid">
              <p onClick={() => navigate("/products")}>Bakson's</p>
              <p onClick={() => navigate("/products")}>Willmar Schwabe India</p>
              <p onClick={() => navigate("/products")}>Lord's</p>
              <p onClick={() => navigate("/products")}>
                German Homeo Care And Cure
              </p>
              <p onClick={() => navigate("/products")}>Hapdco</p>
              <p onClick={() => navigate("/products")}>Adelmar</p>
              <p onClick={() => navigate("/products")}>Bharat Homeo Pharmacy</p>
              <p onClick={() => navigate("/products")}>St.George's</p>
              <p onClick={() => navigate("/products")}>HHP</p>
            </div>
            <div className="b-l-box-down-down-1-right">
              <p onClick={() => navigate("/products")}>Wheezal</p>
              <p onClick={() => navigate("/products")}>REPL</p>
              <p onClick={() => navigate("/products")}>Medisynth</p>
              <p onClick={() => navigate("/products")}>Indo-German</p>
              <p onClick={() => navigate("/products")}>HHPL</p>
              <p onClick={() => navigate("/products")}>JVS</p>
              <p onClick={() => navigate("/products")}>Adven</p>
              <p onClick={() => navigate("/products")}>LDD Bioscience</p>
              <p onClick={() => navigate("/products")}>Ayurvedic Medicines</p>
            </div>
          </div>
        </div>
        <div
          className="b-l-box-down-down-2"
          style={{
            marginTop: "6.3%",
            height: "330px",
            display: `${part2}`,
            zIndex: "1",
          }}
          onMouseEnter={() => setPart2("block")}
          onMouseLeave={() => setPart2("none")}
        >
          <div className="b-l-box-down-down-2-all">
            <div className="b-l-box-down-down-2-left">
              <p onClick={() => navigate("/products")}>Hair & Skin Care</p>
              <p onClick={() => navigate("/products")}>Men's Care</p>
              <p onClick={() => navigate("/products")}>Kidney Care</p>
              <p onClick={() => navigate("/products")}>
                Bone, Joint & Muscles Care
              </p>
              <p onClick={() => navigate("/products")}>Nerve & Brain Care</p>
              <p onClick={() => navigate("/products")}>Nose & Throat Care</p>
              <p onClick={() => navigate("/products")}>
                Sedentary Lifestyle Care
              </p>
              <p onClick={() => navigate("/products")}>Chronic Diseases</p>
            </div>
            <div className="b-l-box-down-down-2-mid">
              <p onClick={() => navigate("/products")}>Diabetes Care</p>
              <p onClick={() => navigate("/products")}>Women's Care</p>
              <p onClick={() => navigate("/products")}>Liver & Stomach Care</p>
              <p onClick={() => navigate("/products")}>Respiratory Wellness</p>
              <p onClick={() => navigate("/products")}>
                Piles Fissure & Fistula Care
              </p>
              <p onClick={() => navigate("/products")}>Face & Beauty Care</p>
              <p onClick={() => navigate("/products")}>Health & Growth Care</p>
              <p onClick={() => navigate("/products")}>Oral Care</p>
            </div>
            <div className="b-l-box-down-down-2-right">
              <p onClick={() => navigate("/products")}>Cold & Cough Care</p>
              <p onClick={() => navigate("/products")}>Kid's & Baby Care</p>
              <p onClick={() => navigate("/products")}>Heart Care</p>
              <p onClick={() => navigate("/products")}>Personal Care</p>
              <p onClick={() => navigate("/products")}>Eye & Ear Care</p>
              <p onClick={() => navigate("/products")}>Fever & Flu Care</p>
              <p onClick={() => navigate("/products")}>
                Headache & Migrain Care
              </p>
              <p onClick={() => navigate("/products")}>Weight Management</p>
            </div>
          </div>
        </div>
        <div
          className="b-l-box-down-down-3"
          style={{
            marginTop: "9.6%",
            height: "180px",
            display: `${part3}`,
            zIndex: "1",
          }}
          onMouseEnter={() => setPart3("block")}
          onMouseLeave={() => setPart3("none")}
        >
          <div className="b-l-box-down-down-3-all">
            <div className="b-l-box-down-down-3-left">
              <p onClick={() => navigate("/products")}>Dilutions</p>
              <p onClick={() => navigate("/products")}>Bach Flowers Remedies</p>
              <p onClick={() => navigate("/products")}>Triturations</p>
              <p onClick={() => navigate("/products")}>Adel No</p>
            </div>
            <div className="b-l-box-down-down-3-mid">
              <p onClick={() => navigate("/products")}>Mother Tinctures</p>
              <p onClick={() => navigate("/products")}>Electro Homeopathic</p>
              <p onClick={() => navigate("/products")}>Veterinary</p>
              <p onClick={() => navigate("/products")}>Philes And Globules</p>
            </div>
            <div className="b-l-box-down-down-3-right">
              <p onClick={() => navigate("/products")}>
                Bio Chemics & Combinations
              </p>
              <p onClick={() => navigate("/products")}>Nutraceuticals</p>
              <p onClick={() => navigate("/products")}>R No</p>
              <p></p>
            </div>
          </div>
        </div>
        <div
          className="b-l-box-down-down-4"
          style={{
            marginTop: "12.9%",
            height: "50px",
            display: `${part4}`,
            zIndex: "1",
          }}
          onMouseEnter={() => setPart4("block")}
          onMouseLeave={() => setPart4("none")}
        >
          <div className="b-l-box-down-down-4-all">
            <div className="b-l-box-down-down-4-left">
              <p onClick={() => navigate("/products")}>
                Homeopathy Wellness Combos
              </p>
            </div>
          </div>
        </div>
        <div
          className="b-l-box-down-down-5"
          style={{
            marginTop: "16.1%",
            height: "50px",
            display: `${part5}`,
            zIndex: "1",
          }}
          onMouseEnter={() => setPart5("block")}
          onMouseLeave={() => setPart5("none")}
        >
          <div className="b-l-box-down-down-5-all">
            <div className="b-l-box-down-down-5-left">
              <p onClick={() => navigate("/products")}>
                Rajasthan Ayushdhalaya
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="bottom-right">
        <button onClick={() => navigate("/cart")}>
          <p style={{ marginRight: "3%", marginTop: "4%" }}>
            <ShoppingBagIcon />
          </p>
          <p style={{ marginRight: "10%" }}>My Bag: {cartItems.length} /₹ 0</p>
        </button>
      </div>
    </div>
  );
};

export default NavbarBottom;

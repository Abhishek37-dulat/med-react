import React from "react";
import "./CardsFunds.css";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet";
import CardGiftcardIcon from "@mui/icons-material/CardGiftcard";
import HeadsetMicIcon from "@mui/icons-material/HeadsetMic";

const CardsFunds = () => {
  return (
    <div className="cardsfunds">
      <div className="cardsfunds-all">
        <div className="cardsfunds-1">
          <div className="cards-icon">
            <ShoppingBagIcon />
          </div>
          <div className="cards-title">100% SECURED & TRUSTED</div>
          <div className="cards-discription">Secure payments by Razorpay</div>
        </div>
        <div className="cardsfunds-2">
          <div className="cards-icon">
            <AccountBalanceWalletIcon />
          </div>
          <div className="cards-title">REWARDS ON ORDER</div>
          <div className="cards-discription">5% Cashback on every order</div>
        </div>
        <div className="cardsfunds-3">
          <div className="cards-icon">
            <CardGiftcardIcon />
          </div>
          <div className="cards-title">SPECIAL</div>
          <div className="cards-discription">
            5% Special Discount on every order
            <br />
            *Order Value greater than ₹1000
          </div>
        </div>
        <div className="cardsfunds-4">
          <div className="cards-icon">
            <HeadsetMicIcon />
          </div>
          <div className="cards-title">CUSTOMER SERVICE</div>
          <div className="cards-discription">
            Working Days: mon to Sat
            <br />
            Timing: 10:00AM to 08:00PM
            <br />
            Call us at +91 98144 66017
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardsFunds;

import React from "react";
import "./DownRow.css";
import ForwardToInboxIcon from "@mui/icons-material/ForwardToInbox";
import ScheduleSendOutlinedIcon from "@mui/icons-material/ScheduleSendOutlined";

const DownRow = () => {
  return (
    <div className="downrow">
      <div className="downrow-all">
        <div className="downrow-left">
          <p>
            <ForwardToInboxIcon fontSize="inherit" />
          </p>
        </div>
        <div className="downrow-mid">
          <h3>
            Create An Account To Get The Instant Discount & Cashback On Orders
          </h3>
          <h5>Get 5% Instant Discount and 5% Cashback on your every order.</h5>
        </div>
        <div className="downrow-right">
          <button>
            <p style={{ transform: "rotate(-45deg)", marginTop: "-2%" }}>
              <ScheduleSendOutlinedIcon />
            </p>
            <p>Create an Account</p>
          </button>
        </div>
      </div>
    </div>
  );
};

export default DownRow;

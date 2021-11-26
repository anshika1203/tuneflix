import React, { useContext } from "react";
import "./topbar.css";
import { logout } from "../../context/authContext/AuthActions";
import { AuthContext } from "../../context/authContext/AuthContext";
import Logo from "./logo.png";
export default function Topbar() {
  const { dispatch } = useContext(AuthContext);
  return (
    <div className="topbar">
      <div className="topbarWrapper">
        <div className="topLeft">
          <img className="logo" src={Logo} alt="logo" />
          {/* <span className="logo">TuneFlix</span> */}
        </div>

        <div className="topRight">
          <div className="profile">
            <div className="options">
              <span onClick={() => dispatch(logout())}>Logout</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

import React, { useContext } from "react";
import "./topbar.css";
import { logout } from "../../context/authContext/AuthActions";
import { AuthContext } from "../../context/authContext/AuthContext";
import Logo from "./logo.png";
import { useHistory } from "react-router";
export default function Topbar() {
  const history = new useHistory();
  const { dispatch } = useContext(AuthContext);

  const handleLogout = () => {
    dispatch(logout());
    history.push("/login");
  };
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
              <span onClick={handleLogout}>Logout</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

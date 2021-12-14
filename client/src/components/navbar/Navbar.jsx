import { useContext, useState } from "react";
import "./navbar.scss";
import { Link } from "react-router-dom";
import { AuthContext } from "../../authContext/AuthContext";
import { logout } from "../../authContext/AuthActions";
import Logo from ".././../logo.png";
import axios from "axios";
import { Input, Button, Space } from "antd";
const { Search } = Input;
const Navbar = ({ setSearchLists }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const { dispatch } = useContext(AuthContext);
  const [search, setSearch] = useState("");

  window.onscroll = () => {
    setIsScrolled(window.pageYOffset === 0 ? false : true);
    return () => (window.onscroll = null);
  };


  const getSearchCall = async () => {
    const res = await axios.get("movies/search", {
      headers: {
        token: "Bearer " + JSON.parse(localStorage.getItem("user")).accessToken,
      },
      params: {
        search,
      },
    });

    console.log(res?.data, "serach");
    setSearchLists(res?.data);
    setSearch("");
  };
  const onSearch = (value) => console.log(value);
  console.log(search);
  return (
    <div className={isScrolled ? "navbar scrolled" : "navbar"}>
      <div className="container">
        <div className="left">
          <img src={Logo} alt="" />
          <Link to="/" className="link">
            <span>Home</span>
          </Link>
          <Link to="/series" className="link">
            <span className="navbarmainLinks">Series</span>
          </Link>
          <Link to="/movies" className="link">
            <span className="navbarmainLinks">Movies</span>
          </Link>
        </div>

        <div className="right">
          <Space>
            <Search
              placeholder="input search text"
              allowClear
              enterButton="Search"
              onSearch={getSearchCall}
              style={{backgroundColor:'red',color:'white'}}
            />
            <Button
              style={{ backgroundColor: "red", color: "white" }}
              onClick={() => dispatch(logout())}
              danger
            >
              Logout
            </Button>
          </Space>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

import { AiOutlineSearch } from "react-icons/ai";
import { useContext, useState, useEffect } from "react";
import "./navbar.scss";
import { Link } from "react-router-dom";
import { AuthContext } from "../../authContext/AuthContext";
import { logout } from "../../authContext/AuthActions";
import Logo from ".././../logo.png";
import axios from "axios";

const Navbar = ({ setSearchLists }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const { dispatch } = useContext(AuthContext);
  const [search, setSearch] = useState("");

  window.onscroll = () => {
    setIsScrolled(window.pageYOffset === 0 ? false : true);
    return () => (window.onscroll = null);
  };
  const handleChange = (e) => {
    e.preventDefault();
    console.log(e.target.value);
    setSearch(e.target.value);
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
          <input
            class="form-control mr-sm-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
            name="search"
            onChange={handleChange}
            value={search}
          />
          <button
            class="btn btn-outline-success my-2 my-sm-0"
            onClick={getSearchCall}
          >
            <AiOutlineSearch />
          </button>

          <div className="profile">
            <div className="options">
              <span onClick={() => dispatch(logout())}>Logout</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

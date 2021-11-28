import Navbar from "../../components/navbar/Navbar";
import Featured from "../../components/featured/Featured";
import "./home.scss";
import Searched from "../../components/search/Searched";
import List from "../../components/list/List";
import { useEffect, useState } from "react";
import axios from "axios";
import { Divider } from "antd";
const Home = ({ type }) => {
  const [lists, setLists] = useState([]);
  const [searchLists, setSearchLists] = useState([]);
  const [genre, setGenre] = useState(null);

  useEffect(() => {
    const getRandomLists = async () => {
      try {
        const res = await axios.get("lists/getList", {
          headers: {
            token:
              "Bearer " + JSON.parse(localStorage.getItem("user")).accessToken,
          },
          params: {
            type,
            genre: genre ? genre : "",
          },
        });
        console.log(res, "response");
        setLists(res?.data);
      } catch (err) {
        console.log(err);
      }
    };
    getRandomLists();
  }, [type, genre]);

  return (
    <div className="home">
      <Navbar setSearchLists={setSearchLists} />
      <Featured type={type} setGenre={setGenre} />
      <Searched list={searchLists} />
      {lists.map((list) => {
        return (
          <>
            <List list={list} />
            <Divider />
          </>
        );
      })}
    </div>
  );
};

export default Home;

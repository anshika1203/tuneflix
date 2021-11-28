import "./listItem.scss";
import {PlayCircleFilled } from "@ant-design/icons";
import { useEffect, useState } from "react";
import axios from "axios";
import { Card } from "antd";
import { Link } from "react-router-dom";

export default function ListItem({ index, item }) {
  const [movie, setMovie] = useState({});

  useEffect(() => {
    if (index === 1) {
      setMovie(item);
    } else {
      const getMovie = async () => {
        try {
          const res = await axios.get("/movies/find/" + item, {
            headers: {
              token:
                "Bearer " +
                JSON.parse(localStorage.getItem("user")).accessToken,
            },
          });
          setMovie(res.data);
        } catch (err) {
          console.log(err);
        }
      };
      getMovie();
    }
  }, [item, index]);
  return movie?.imgSm ? (
    <Card
      style={{ width: 300, height: "100%", backgroundColor: "black"}}
      cover={<img alt="example" src={movie?.imgSm} width="250" height="200" />}
    >
      <div className="itemInfo">
        <div className="icons">
          <Link to={{ pathname: "/watch", movie: movie }}>
            <PlayCircleFilled style={{fontSize:36,color:'red'}} />
          </Link>
        </div>
        <div className="itemInfoTop">
          <h2 className="title">{movie?.title}</h2>
        </div>
        <div className="itemInfoTop">
          <div className="limit">Age: {movie?.limit}+</div>
          <div>Released on: {movie?.year}</div>
        </div>
        <div className="genre">Type: {movie?.genre}</div>
        <div className="desc">{movie?.desc}</div>
      </div>
    </Card>
  ) : null;
}

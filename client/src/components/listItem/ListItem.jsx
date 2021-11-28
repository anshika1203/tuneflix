import "./listItem.scss";
import {
  PlayArrow
} from "@material-ui/icons";
import { useEffect, useState } from "react";
import axios from "axios";
import {Card} from 'antd';
import { Link } from "react-router-dom";


export default function ListItem({ index, item }) {
  console.log("item rendered", item)
  const [isHovered, setIsHovered] = useState(false);
  const [movie, setMovie] = useState({});

  useEffect(() => {
   
    const getMovie = async () => {
      try {
        const res = await axios.get("/movies/find/" + item, {
          headers: {
            token:
              "Bearer " + JSON.parse(localStorage.getItem("user")).accessToken,
          },
        });
        setMovie(res.data);
        console.log(res.data, '##');
      } catch (err) {
        console.log(err);
      }
    };
    getMovie();
  
  }, [item]);

  console.log(movie);
  return (

    <Card
    style={{ width: 300 }}
    cover={
      <img
        alt="example"
        src={movie?.imgSm}
        width='250'
        height='200'
      />
    }
    
  >
  
  <div className="itemInfo">
            <div className="icons">
            <Link to={{ pathname: "/watch", movie: movie }}>  <PlayArrow className="icon" /> </Link>
            </div>
            <div  className="itemInfoTop"><h3>{movie?.title}</h3></div>
            <div className="itemInfoTop">
              <div className="limit">Age: {movie?.limit}+</div>
              <div>Released on: {movie?.year}</div>
            </div>
            <div className="genre">Type: {movie?.genre}</div>
            <div className="desc">{movie?.desc}</div>
            
            </div>
  
  </Card>
  
  );
}

import "./listItem.scss";
import {
  PlayArrow
} from "@material-ui/icons";
import { useEffect, useState } from "react";
import axios from "axios";
import {Card} from 'antd';
import { Link } from "react-router-dom";


export default function ListItem({ index, item }) {
  const [isHovered, setIsHovered] = useState(false);
  const [movie, setMovie] = useState({});
  
  useEffect(() => {
    if(index === 1){
      setMovie(item);
    }else{
    const getMovie = async () => {
      try {
        const res = await axios.get("/movies/find/" + item, {
          headers: {
            token:
              "Bearer " + JSON.parse(localStorage.getItem("user")).accessToken,
          },
        });
        setMovie(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    getMovie();
  }
  }, [item]);

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
    // <Link to={{ pathname: "/watch", movie: movie }}>
    //   <div
    //     className="listItem"
    //     style={{ left: isHovered && index * 225 - 50 + index * 2.5 }}
    //     onMouseEnter={() => setIsHovered(true)}
    //     onMouseLeave={() => setIsHovered(false)}
    //   >
    //     <img src={movie?.imgSm} alt="" />
    //     {isHovered && (
    //       <>
    //         <video src={movie?.trailer} autoPlay={true} loop />
    //         <div className="itemInfo">
    //           <div className="icons">
    //             <PlayArrow className="icon" />
               
    //           </div>
    //           <div  className="itemInfoTop"><h3>{movie?.title}</h3></div>
    //           <div className="itemInfoTop">
    //             <span>{movie?.duration}</span>
    //             <span className="limit">+{movie?.limit}</span>
    //             <span>{movie?.year}</span>
    //           </div>
    //           <div className="desc">{movie?.desc}</div>
    //           <div className="genre">{movie?.genre}</div>
    //         </div>
    //       </>
    //     )}
    //   </div>
    // </Link>
  );
}

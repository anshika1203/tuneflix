import { ArrowBackOutlined } from "@material-ui/icons";
import { Link, useLocation } from "react-router-dom";
import "./watch.scss";
import ReactPlayer from "react-player";
export default function Watch() {
  const location = useLocation();
  const movie = location.movie;
  console.log(movie.trailer);
  console.log(movie.video);
  return (
    <div className="watch">
      <Link to="/">
        <div className="back">
          <ArrowBackOutlined />
        </div>
      </Link>
      <ReactPlayer
        className="player"
        width="80vw"
        height="90vh"
        url={movie.trailer}
        playing="true"
        controls="true"
      />
    </div>
  );
}

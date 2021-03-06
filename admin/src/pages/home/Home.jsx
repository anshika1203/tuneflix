import Chart from "../../components/chart/Chart";
import "./home.css";
import WidgetSm from "../../components/widgetSm/WidgetSm";
import { useEffect, useMemo, useState } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";

const  Home=()=> {
  console.log("page rendered");
  const history = useHistory();
  const isAdmin = localStorage.getItem("user");

  const MONTHS = useMemo(
    () => [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Agu",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ],
    []
  );

  const [userStats, setUserStats] = useState([]);

  useEffect(() => {
    const getStats = async () => {
      try {
        const res = await axios.get("/users/stats", {
          headers: {
            token:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxOTJhNGVlOTMzNWNiMzg3Y2Y0NjAzZiIsImlzQWRtaW4iOnRydWUsImlhdCI6MTYzNzAwMzM5MiwiZXhwIjoxNjM3NDM1MzkyfQ.9QcQaWd6U4LvgCLrCEtoYKlpP843U3ojU2PMX1Qu_9A",
          },
        });
        const statsList = res.data.sort(function (a, b) {
          return a._id - b._id;
        });
        statsList.map((item) =>
          setUserStats((prev) => [
            ...prev,
            { name: MONTHS[item._id - 1], "New User": item.total },
          ])
        );
      } catch (err) {
        console.log(err);
      }
    };
    getStats();
  }, [MONTHS]);

  return (
    <div className="home">
      <Chart data={userStats} title="User Analytics" grid dataKey="New User" />
      <div className="homeWidgets">
        <WidgetSm />
      </div>
    </div>
  );
}
export default Home;
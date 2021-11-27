import React from "react";
import List from "../list/List";

function Searched({ list }) {
  console.log("search list======", list);
  return (
    <div>
      {list.length >= 1 && (
        <div>
          <h3 style={{ color: "#fff" }}>Search Results</h3>
          <List list={list} />
        </div>
      )}
    </div>
  );
}

export default Searched;

import React from "react";

const SearchBox = (props) => {
  return (
    <div
      style={{ position: "relative", right: "-1200px", background: "#d7ede2" }}
    >
      <input
        style={{ background: "beige", color: "black" }}
        className="input "
        value={props.value}
        onChange={(event) => props.setSearchValue(event.target.value)}
        placeholder="Search Movie.."
      ></input>
    </div>
  );
};
export default SearchBox;

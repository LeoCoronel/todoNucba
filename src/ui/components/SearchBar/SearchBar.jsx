import React, { useState } from "react";
import Search from "../../../assets/img/search.svg";
import PokeIcon from "../../../assets/img/pokebola.svg";

const SearchBar = ({ setSearch, handleSubmit }) => {
  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  return (
    <div className="searchBar">
      <img src={Search} alt="" />
      <input
        type="text"
        name="searchBar"
        id="searchBar"
        onChange={handleChange}
      />
      <button onClick={handleSubmit}>
        <img src={PokeIcon} alt="" />
      </button>
    </div>
  );
};

export default SearchBar;

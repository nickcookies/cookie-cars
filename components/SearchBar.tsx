"use client";

import React, { useState } from "react";
import { SerachManufacturer } from "./";

const SearchBar = () => {
  const [manuFacturer, setManuFacturer] = useState("");
  const handleSearch = () => {};
  return (
    <form className="searchbar" onSubmit={handleSearch}>
      <div className="searchbar__item">
        <SerachManufacturer
          manufacturer={manuFacturer}
          setManuFacturer={setManuFacturer}
        />
      </div>
    </form>
  );
};

export default SearchBar;

import React from "react";
import { useGlobalContext } from "./context";
const SearchForm = () => {
  const { searchValue, setSearchValue, error } = useGlobalContext();
  return (
    <form className="search-form" onSubmit={(e) => e.preventDefault()}>
      <h2>Search movies</h2>
      <input
        type="text"
        className="form-input"
        value={searchValue}
        onChange={(e) => setSearchValue(e.target.value)}
      ></input>
      <div className="error">{error.isError && error.message}</div>
    </form>
  );
};

export default SearchForm;

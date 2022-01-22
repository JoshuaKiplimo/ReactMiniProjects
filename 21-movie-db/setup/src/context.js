import React, { useState, useContext, useEffect } from "react";
import { useFetch } from "./useFetch";
export const API_ENDPOINT = "https://www.omdbapi.com/?apikey=5325b077";

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  console.log(useFetch);
  const [searchValue, setSearchValue] = useState("batman");
  const { loading, error, posters: data } = useFetch(`&s=${searchValue}`);

  return (
    <AppContext.Provider
      value={{ searchValue, setSearchValue, loading, data, error }}
    >
      {children}
    </AppContext.Provider>
  );
};
// make sure use
export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };

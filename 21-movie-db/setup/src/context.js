import React, { useState, useContext, useEffect } from "react";
// make sure to use https

export const API_ENDPOINT = `https://www.omdbapi.com/?apikey=5325b077`;
console.log(process.env.REACT_APP_MOVIE_API_KEY);
const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [posters, setPosters] = useState([]);
  const [loading, setLoading] = useState(false);
  const [searchValue, setSearchValue] = useState("batman");
  const [error, setError] = useState({ isError: false, message: "" });
  const fetchPosters = async () => {
    try {
      setLoading(true);

      if (searchValue) {
        console.log("searchvAALUE", searchValue);
        const search = `&s=${searchValue}`;
        let url = `${API_ENDPOINT}${search}`;
        const response = await fetch(url);
        const data = await response.json();
        console.log(data);
        if (data.Response === "True") {
          console.log(data.Response);
          setPosters(data.Search);
          setError({ isError: false, message: "" });
        } else if (data.Response === "False") {
          setError({ isError: true, message: data.Error });
        }
      }
      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };

  useEffect(() => {
    fetchPosters();
  }, [searchValue]);

  return (
    <AppContext.Provider
      value={{
        searchValue,
        setSearchValue,
        loading,
        posters,
        error,
        setError,
      }}
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

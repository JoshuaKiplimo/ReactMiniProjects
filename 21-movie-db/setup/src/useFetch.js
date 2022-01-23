import React, { useState, useEffect } from "react";

const API_ENDPOINT = `https://www.omdbapi.com/?apikey=5325b077`;

const useFetch = (urlParams) => {
  console.log(urlParams);
  const [posters, setPosters] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState({ isError: false, message: "" });

  const fetchMovies = async (url) => {
    setLoading(true);

    try {
      const response = await fetch(url);
      const data = await response.json();

      if (data.Response == "True") {
        console.log("data", data);
        setPosters(data);
        setError({ isError: false, message: "" });
      } else if (data.Response == "False") {
        setError({ isError: true, message: data.Error });
      }
      setLoading(false);
    } catch (error) {
      setLoading(false);
    }
  };

  useEffect(() => {
    console.log("here");
    fetchMovies(`${API_ENDPOINT}${urlParams}`);
  }, [urlParams]);
  console.log(loading, error, posters);
  return { loading, error, posters };
};
export default useFetch;

import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { API_ENDPOINT } from "./context";
const SingleMovie = () => {
  const { imdbID } = useParams();
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);

  const fetchMovieDetails = async () => {
    try {
      setLoading(true);
      let id = `&i=${imdbID}`;
      let url = `${API_ENDPOINT}${id}`;
      const response = await fetch(url);
      const movie = await response.json();
      console.log(movie);
      setData(movie);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };
  useEffect(() => {
    fetchMovieDetails();
  }, []);
  if (loading) {
    return <h3>loading...</h3>;
  }
  return (
    <section className="single-movie">
      <img src={data.Poster}></img>
      <div className="single-movie-info">
        <h2>{data.Title}</h2>
        <p>{data.Plot}</p>
        <p>{data.Year}</p>
        <Link className="btn" to="/">
          Back to Movies
        </Link>
      </div>
    </section>
  );
};

export default SingleMovie;

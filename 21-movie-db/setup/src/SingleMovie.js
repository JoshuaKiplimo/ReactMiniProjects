import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import useFetch from "./useFetch";

const SingleMovie = () => {
  const { imdbID } = useParams();
  const { loading, error, posters: movie } = useFetch(`&i=${imdbID}`);

  if (loading || movie == null) {
    return <h3>loading...</h3>;
  }
  if (error) {
  }
  const { Poster, Title, Plot, Year } = movie;
  return (
    <section className="single-movie">
      <img src={Poster}></img>
      <div className="single-movie-info">
        <h2>{Title}</h2>
        <p>{Plot}</p>
        <p>{Year}</p>
        <Link className="btn" to="/">
          Back to Movies
        </Link>
      </div>
    </section>
  );
};

export default SingleMovie;

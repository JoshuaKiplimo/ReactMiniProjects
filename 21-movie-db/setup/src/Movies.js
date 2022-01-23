import React from "react";
import { useGlobalContext } from "./context";
import { Link } from "react-router-dom";
const url =
  "https://upload.wikimedia.org/wikipedia/commons/f/fc/No_picture_available.png";
//Get data
const Movies = () => {
  const { loading, posters } = useGlobalContext();

  if (loading || posters == null) {
    return <h2>Loading ...</h2>;
  }
  return (
    <section className="movies">
      {posters.Search.map((poster) => {
        const { Title, Year, imdbID, Poster } = poster;
        return (
          <Link to={`${"/movies/"}${imdbID}`} className="movie" key={imdbID}>
            <article>
              <img src={Poster === "N/A" ? url : Poster} alt={Title}></img>
              <div className="movie-info">
                <h4 className="title">{Title}</h4>
                <p>{Year}</p>
              </div>
            </article>
          </Link>
        );
      })}
    </section>
  );
};

export default Movies;

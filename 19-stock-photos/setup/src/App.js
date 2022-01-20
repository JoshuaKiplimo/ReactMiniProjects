import React, { useState, useEffect, useRef } from "react";
import { FaSearch } from "react-icons/fa";
import Photo from "./Photo";
const clientID = `?client_id=${process.env.REACT_APP_ACCESS_KEY}`;
const mainUrl = `https://api.unsplash.com/photos/`;
const searchUrl = `https://api.unsplash.com/search/photos/`;

function App() {
  const [loading, setLoading] = useState(false);
  const [photos, setPhotos] = useState([]);
  const [page, setPage] = useState(0);
  const searchRef = useRef();
  const [query, setQuery] = useState("");

  const fetchData = async () => {
    try {
      setLoading(true);
      let url;
      const urlPage = `&page=${page}`;
      const queryUrl = `&query=`;
      if (query) {
        url = `${searchUrl}${clientID}${queryUrl}${query}`;
      } else {
        url = `${mainUrl}${clientID}${urlPage}`;
      }
      const response = await fetch(url);
      const data = await response.json();
      setPhotos((oldPhotos) => {
        if (query && page === 1) {
          return data.results;
        } else if (query) {
          return [...oldPhotos, ...data.results];
        } else {
          return [...oldPhotos, ...data];
        }
      });
      setLoading(false);
    } catch (error) {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (loading) return;
    fetchData();
  }, [page]);
  useEffect(() => {
    const event = window.addEventListener("scroll", () => {
      let innerHeight = parseInt(window.innerHeight);
      let scrollHeight = parseInt(window.scrollY);
      let bodyHeight = parseInt(document.body.scrollHeight);
      if (!loading && innerHeight + scrollHeight >= bodyHeight - 5) {
        setPage((oldPage) => {
          return oldPage + 1;
        });
      }
    });
    return () => window.removeEventListener("scroll", event);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    //fetchData();
    setPage(1);
  };

  return (
    <main>
      <section className="search">
        <form className="search-form">
          <input
            type="text"
            className="form-input"
            placeholder="search"
            ref={searchRef}
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          ></input>
          <button type="submit" className="submit-btn" onClick={handleSubmit}>
            <FaSearch />
          </button>
        </form>
      </section>
      <section className="photos">
        <div className="photos-center">
          {photos.map((photo) => {
            return <Photo key={photo.id} {...photo}></Photo>;
          })}
        </div>
      </section>
    </main>
  );
}

export default App;

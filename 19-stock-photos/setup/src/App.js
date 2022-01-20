import React, { useState, useEffect } from "react";
import { FaSearch } from "react-icons/fa";
import Photo from "./Photo";
const clientID = `?client_id=${process.env.REACT_APP_ACCESS_KEY}`;
const mainUrl = `https://api.unsplash.com/photos/`;
const searchUrl = `https://api.unsplash.com/search/photos/`;

function App() {
  const [loading, setLoading] = useState(false);
  const [photos, setPhotos] = useState([]);
  const [page, setPage] = useState(1);
  const fetchData = async () => {
    try {
      setLoading(true);
      let url;
      const urlPage = `&page=${page}`;
      url = `${mainUrl}${clientID}${urlPage}`;
      const response = await fetch(url);
      const data = await response.json();
      setPhotos((oldPhotos) => {
        return [...oldPhotos, ...data];
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

  return (
    <main>
      <section className="search">
        <form className="search-form">
          <input
            type="text"
            className="form-input"
            placeholder="search"
          ></input>
          <button type="submit" className="submit-btn">
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

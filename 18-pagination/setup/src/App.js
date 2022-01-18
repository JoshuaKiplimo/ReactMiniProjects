import React, { useState, useEffect, forwardRef } from "react";
import { useFetch } from "./useFetch";
import Follower from "./Follower";

function App() {
  //const processData = () => {
  const { loading, data } = useFetch();
  const [paginate, setPaginate] = useState([]);
  const [currentPage, setCurrentPage] = useState([]);
  const [page, setPage] = useState(0);

  console.log(loading);
  const paginateData = () => {
    const itemPerPage = 10;
    const pages = Math.ceil(data.length / itemPerPage);
    const newItems = Array.from({ length: pages }, (_, index) => {
      const start = index * itemPerPage;
      const tempItems = data.slice(start, start + itemPerPage);
      return tempItems;
    });
    return newItems;
  };
  const foward = () => {
    page >= 9 ? setPage(0) : setPage(page + 1);
  };
  const back = () => {
    page <= 0 ? setPage(9) : setPage(page - 1);
  };
  const manageClick = (e) => {
    const targetPage = parseInt(e.target.innerText) - 1;
    console.log("target", targetPage);
    setPage(targetPage);
    setCurrentPage(paginate[page]);
  };

  useEffect(() => {
    if (loading) return;
    setPaginate(paginateData());
    setCurrentPage(data.slice(0, 10));
  }, [loading]);

  useEffect(() => {
    if (loading) return;
    setCurrentPage(paginate[page]);
  }, [page]);

  //console.log("paginated values", paginate);
  console.log("current page last console log", currentPage);
  return (
    <>
      <main>
        <div className="section-title ">
          <h1>Pagination</h1>
          <div className="underline"></div>
        </div>
        <section className="followers">
          <div className="container">
            {currentPage.map((follower) => {
              return <Follower key={follower.id} {...follower} />;
            })}
          </div>
          <div className="btn-container">
            <button className="prev-btn" onClick={back}>
              Prev
            </button>
            {paginate.map((_, index) => {
              return (
                <button
                  className={`${
                    index == page ? `page-btn active-btn` : `page-btn`
                  }`}
                  onClick={(e) => manageClick(e)}
                  key={index + 1}
                >
                  {index + 1}
                </button>
              );
            })}

            <button className="next-btn" onClick={foward}>
              Next
            </button>
          </div>
        </section>
      </main>
    </>
  );
}

export default App;

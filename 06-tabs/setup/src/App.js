import React, { useState, useEffect } from "react";
import { FaAngleDoubleRight } from "react-icons/fa";
const url = "https://course-api.com/react-tabs-project";

function App() {
  const [jobs, UseJobs] = useState([]);
  const [isLoading, useisLoading] = useState(true);
  const [companies, UseCompanies] = useState([]);
  const [value, setValue] = useState(1);
  const FetchData = async () => {
    try {
      const data = await fetch(url);
      const jobs = await data.json();
      UseJobs(jobs);
      useisLoading(false);
    } catch (error) {
      useisLoading(false);
    }
  };
  useEffect(() => {
    FetchData();
  }, []);

  if (isLoading) {
    return (
      <>
        <h3 className="loading">Loading</h3>
      </>
    );
  }
  const { id, order, title, dates, duties, company } = jobs[value];

  return (
    <>
      <section className="section">
        <header>
          <h2 className="title">Experience</h2>
          <div className="underline"></div>
        </header>

        <section className="btn-container">
          {jobs.map((job, index) => {
            return (
              <button
                key={job.id}
                className={`job-btn ${index === value && "active-btn"}`}
                onClick={() => setValue(index)}
              >
                {job.company}
              </button>
            );
          })}
        </section>

        <section className="jobs-center">
          <article key={id}>
            <h3>{title}</h3>
            <h4 className="job-icon">{company}</h4>
            <p className="job-date">{dates}</p>
            {duties.map((duty, index) => {
              return (
                <div key={index} className="job-desc">
                  <FaAngleDoubleRight className="job-icon" />
                  <p>{duty}</p>
                </div>
              );
            })}
          </article>
        </section>
        <section className="jobsinfo"></section>
      </section>
    </>
  );
}

export default App;

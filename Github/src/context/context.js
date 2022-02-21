import React, { useState, useEffect, useContext } from "react";
import mockUser from "./mockData.js/mockUser";
import mockRepos from "./mockData.js/mockRepos";
import mockFollowers from "./mockData.js/mockFollowers";
import axios from "axios";

const rootUrl = "https://api.github.com";

const GithubContext = React.createContext(); //with this we have access to provider and consumer

//create a sepatrate container whose role would be a container for more logic

const GithubProvider = ({ children }) => {
  const [githubUser, setGithubUser] = useState(mockUser);
  const [repos, setRepos] = useState(mockRepos);
  const [followers, setFollowers] = useState(mockFollowers);
  const [request, setRequest] = useState(0);
  const [loading, setIsLoading] = useState(false);
  const fetchData = async (url) => {
    const data = await fetch(url);
    const languages = await data.json();
    return languages;
  };
  //check rate
  const checkRequests = () => {
    axios(`${rootUrl}/rate_limit`)
      .then(({ data }) => {
        let {
          rate: { remaining },
        } = data;
        setRequest(remaining);
        console.log(remaining);
        if (remaining === 0) {
          //throw error
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };
  useEffect(() => {
    checkRequests();
    console.log("loaded");
  }, []);
  return (
    <GithubContext.Provider
      value={{ repos, githubUser, followers, fetchData, request }}
    >
      {children}
    </GithubContext.Provider>
  );
};

export { GithubProvider, GithubContext };

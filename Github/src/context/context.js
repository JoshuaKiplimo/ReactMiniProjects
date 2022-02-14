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
  const fetchData = async (url) => {
    const data = await fetch(url);
    const languages = await data.json();
    return languages;
  };
  return (
    <GithubContext.Provider value={{ repos, githubUser, followers, fetchData }}>
      {children}
    </GithubContext.Provider>
  );
};

export { GithubProvider, GithubContext };

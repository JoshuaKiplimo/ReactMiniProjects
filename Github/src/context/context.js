import React, { useState, useEffect } from "react";
import mockUser from "./mockData.js/mockUser";
import mockRepos from "./mockData.js/mockRepos";
import mockFollowers from "./mockData.js/mockFollowers";
import axios from "axios";

const rootUrl = "https://api.github.com";

const GithubContext = React.createContext(); //with this we have access to provider and consumer

//create a sepatrate container whose role would be a container for more logic

const GithubProvider = ({ children }) => {
  return (
    <GithubContext.Provider value={mockUser}>{children}</GithubContext.Provider>
  );
};

export { GithubProvider, GithubContext };

import React from "react";
import styled from "styled-components";
import mockUser from "../context/mockData.js/mockUser";
import { RiGitRepositoryLine } from "react-icons/ri";
import { FiUsers, FiUserPlus } from "react-icons/fi";
import { GoFileCode } from "react-icons/go";
import { GithubContext } from "../context/context";
import { ExampleChart, Pie3D, Column3D, Bar3D, Doughnut2D } from "./Charts";

const Repos = () => {
  const { repos, fetchData } = React.useContext(GithubContext);
  //console.log(repos);
  const languagesMap = new Map();
  const languages = repos.map((repo) => {
    //console.log(language.language);
    if (repo.language) {
      if (languagesMap.has(repo.language)) {
        languagesMap.set(repo.language, languagesMap.get(repo.language) + 1); //languagesMap.set(repolanguage, value + 1);
      } else {
        languagesMap.set(repo.language, 1);
      }
    }
  });
  console.log(languagesMap);
  const chartData = [];

  languagesMap.forEach((val, key) => {
    chartData.push({
      label: key,
      value: val.toString(),
    });
  });

  console.log(chartData);
  // {
  //   label: "HTML",
  //   value: "13",
  // },
  // {
  //   label: "CSS",
  //   value: "270",
  // },
  // {
  //   label: "Javascript",
  //   value: "45",
  // },

  //Find most used languages. And pass it into ChartData

  return (
    <section className="section">
      <Wrapper className="section-center">
        {/* <ExampleChart data={chartData} /> */}
        <Pie3D data={chartData} />
      </Wrapper>
    </section>
  );
};

const Wrapper = styled.div`
  display: grid;
  justify-items: center;
  gap: 2rem;
  @media (min-width: 800px) {
    grid-template-columns: 1fr 1fr;
  }

  @media (min-width: 1200px) {
    grid-template-columns: 2fr 3fr;
  }

  div {
    width: 100% !important;
  }
  .fusioncharts-container {
    width: 100% !important;
  }
  svg {
    width: 100% !important;
    border-radius: var(--radius) !important;
  }
`;

export default Repos;

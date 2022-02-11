import React from "react";
import styled from "styled-components";
import { GithubContext } from "../context/context";
import mockUser from "../context/mockData.js/mockUser";
import { RiGitRepositoryLine } from "react-icons/ri";
import { FiUsers, FiUserPlus } from "react-icons/fi";
import { GoFileCode } from "react-icons/go";
import { ExampleChart, Pie3D, Column3D, Bar3D, Doughnut2D } from "./Charts";
const Repos = () => {
  const { public_repos, followers, following, public_gists } = mockUser;
  return (
    <Wrapper>
      <section className="section">
        <section className="section-center">
          <article className="item">
            <span className="pink">
              <RiGitRepositoryLine />
            </span>
            <div>
              <h3>{public_repos} </h3>
              <p>Repos</p>
            </div>
          </article>
          <article className="item">
            <span className="green">
              <FiUsers />
            </span>
            <div>
              <h3>{followers} </h3>
              <p>Followers</p>
            </div>
          </article>
          <article className="item">
            <span className="purple">
              <FiUserPlus />
            </span>
            <div>
              <h3>{following} </h3>
              <p>Following</p>
            </div>
          </article>
          <article className="item">
            <span className="yellow">
              <GoFileCode />
            </span>
            <div>
              <h3>{public_gists} </h3>
              <p>Gists</p>
            </div>
          </article>
        </section>
      </section>
    </Wrapper>
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

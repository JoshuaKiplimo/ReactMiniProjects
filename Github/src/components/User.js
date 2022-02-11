import React from "react";
import styled from "styled-components";
import Card from "./Card";
import Followers from "./Followers";
import { GithubContext } from "../context/context";

const User = () => {
  const data = React.useContext(GithubContext);
  console.log(data.mockUser);

  return (
    <Wrapper>
      <section className="section">
        <div className="section-center">
          <article>
            <header>
              <img></img>
              <div>
                <h4></h4>
                <p></p>
              </div>
            </header>
          </article>
        </div>
      </section>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  padding-top: 2rem;
  display: grid;
  gap: 3rem 2rem;
  @media (min-width: 992px) {
    grid-template-columns: 1fr 1fr;
  }
  /* align-items: start; */
`;

export default User;

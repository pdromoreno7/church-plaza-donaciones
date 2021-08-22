import React from "react";
import styled from "styled-components";

const ButtonStyle = styled.div`
  margin-top: 2rem;
  .button {
    display: flex;
    /* flex-direction: row; */
    justify-content: center;
    align-items: center;
    font-size: 1rem;
    background-color: var(--secun-color);
    color: var(--white);
    /* padding: 0.7em 2em; */
    padding: 10px;
    max-width: 209px;
    height: 50px;
    border-radius: 5px;
  }
`;

export function Button({ btnLink, btnText }) {
  return (
    <ButtonStyle>
      <a href={btnLink} className="button">
        {btnText}
      </a>
    </ButtonStyle>
  );
}

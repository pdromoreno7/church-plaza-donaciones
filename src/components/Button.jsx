import React from "react";
import styled from "styled-components";

const ButtonStyle = styled.div`
  margin-top: 2rem;
  .button {
    /* display: flex;
    /* flex-direction: row; */
    /* justify-content: center;
    align-items: center; */
    /* display: inline-block; */
    font-size: 1rem;
    background-color: ${(props) =>
      props.outline ? "var(--white)" : "var(--secun-color)"};
    /* var(--secun-color); */
    color: ${(props) =>
      props.outline ? "var(--font-color-1)" : "var(--white)"};
    padding: 0.7em 1em;

    /* max-width: 209px;
    height: 50px; */
    border-radius: 5px;
  }
`;

export function Button({
  btnLink = "test",
  btnText = "Boton",
  outline = false,
}) {
  return (
    <ButtonStyle outline={outline}>
      <a href={btnLink} className="button">
        {btnText}
      </a>
    </ButtonStyle>
  );
}

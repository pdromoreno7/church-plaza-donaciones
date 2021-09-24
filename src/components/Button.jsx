import React from "react";
import styled from "styled-components";

const ButtonStyle = styled.div`
  margin-top: 2rem;
  .button {
    font-size: 1rem;
    background-color: ${(props) =>
      props.outline ? "var(--white)" : "var(--secun-color)"};

    color: ${(props) =>
      props.outline ? "var(--font-color-1)" : "var(--white)"};
    padding: 0.7em 1em;

    border-radius: 5px;
    :hover {
      -webkit-box-shadow: 5px 14px 17px -4px #898989;
      box-shadow: 5px 14px 17px -4px #898989;
      transition: 1s;
    }
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

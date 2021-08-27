import React from "react";
import styled from "styled-components";

const FooterStyles = styled.footer`
  width: 100%;
  border-top: 1px solid #979797;
`;

export function Footer() {
  return (
    <FooterStyles>
      <div className="bd-container">
        <h1>Footer</h1>
      </div>
    </FooterStyles>
  );
}

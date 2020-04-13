import React from "react";
import styled from "styled-components";

const Credits = styled.div`
  position: absolute;
  display: inline-block;
  text-align: center;
  bottom: 4.16%;
  margin: auto;
  left: 0;
  right: 0;
  z-index: 11;
`;

export default function Footer() {
  return (
    <Credits>
      <span>
        Feito por{" "}
        <a href="https://hugoas.dev" target="_blank" rel="noopener noreferrer">
          Hugo Azevedo
        </a>
      </span>
    </Credits>
  );
}

import React from "react";
import styled from "styled-components";
import { MainTitle, SubTitle, MainContainer } from "../../styles";

const Quote = styled.q`
  border-left: 0.25em solid #33c488;
  display: block;
  padding-left: 1em;
`;

export default function About() {
  return (
    <MainContainer>
      <MainTitle>Sobre</MainTitle>
      <p>
        Os dígitos verificadores estão presentes em grande parte dos códigos que
        utilizamos para identificação, como por exemplo o CPF e os códigos de
        barras. Esses dígitos são resultados de um cálculo matemático
        padronizado, utilizados pelos órgãos responsáveis por gerar tais códigos
        de identificação e, de certo modo, verificam se os outros dígitos
        (previamente definidos) desses códigos estão corretos, como por exemplo,
        no caso dos códigos de barras ao serem digitados por um atendente de um
        caixa de supermercado.
      </p>
      <SubTitle>Referências</SubTitle>
      <Quote>
        Ensino aprendizagem de matemática [recurso eletrônico] / Organizador
        Eliel Constantino da Silva. – Ponta Grossa (PR): Atena Editora, 2019. p.
        204-217.{" "}
        <a
          href="https://www.atenaeditora.com.br/post-ebook/2564"
          target="__blank"
        >
          https://www.atenaeditora.com.br/post-ebook/2564
        </a>
      </Quote>
    </MainContainer>
  );
}

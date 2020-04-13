import React from "react";
import { MainTitle, MainContainer } from "../../styles";

export default function Home() {
  return (
    <MainContainer>
      <MainTitle>Bem vindo!</MainTitle>
      <p>Neste site você pode descobrir mais sobre dígitos verificadores.</p>
      <p>
        Navegue pelas seções e descubra como estes dígitos funcionam e afetam a
        sua vida.
      </p>
      <p>
        Não se preocupe, nenhuma de suas informações será salva ou
        compartilhada. Na verdade, elas nunca irão deixar o seu computador, pois
        todos os cálculos que utilizamos são realizados no seu navegador.
      </p>
    </MainContainer>
  );
}

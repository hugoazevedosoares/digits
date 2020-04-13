import React from "react";
import { MainTitle, MainContainer } from "../../styles";
import { NavLink } from "react-router-dom";

export default function Home() {
  return (
    <MainContainer>
      <MainTitle>Bem vindo!</MainTitle>
      <p>
        Neste site você pode descobrir mais sobre dígitos verificadores e como
        são utilizados em diversas partes do seu dia a dia. Para mais
        informações e referências bibliográficas, verifique a seção{" "}
        <NavLink to={"/about"}>Sobre</NavLink>.
      </p>
      <p>
        Navegue pelas seções e descubra como estes dígitos funcionam e afetam a
        sua vida. Um dica, começe pela seção <NavLink to={"/cpf"}>CPF</NavLink>.
      </p>
      <p>
        Não se preocupe, nenhuma de suas informações será salva ou
        compartilhada. Na verdade, elas nunca irão deixar o seu computador, pois
        todos os cálculos que utilizamos são realizados no seu navegador.
      </p>
    </MainContainer>
  );
}

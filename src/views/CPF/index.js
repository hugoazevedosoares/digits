import React, { useState } from "react";
import MaskedInput from "react-text-mask";
import { MainTitle, MainContainer, Input, Result } from "../../styles";
import { calculateCPFDigits, formatCPFWithDigits } from "../../services/cpf";

const CPF_LENGTH = 9;

export default function CPF() {
  const [cpf, setCPF] = useState("");
  const [result, setResult] = useState("");

  function handleInput(e) {
    let value = e.target.value || "";
    value = value.replace(/\./g, "").replace(/_/g, "");

    if (value === cpf) {
      return;
    }

    setCPF(value);

    if (value.length === CPF_LENGTH) {
      const verificationDigits = calculateCPFDigits(value);
      const cpfWithDigits = formatCPFWithDigits(value, verificationDigits);
      return setResult(cpfWithDigits);
    }

    setResult("");
  }

  return (
    <MainContainer>
      <MainTitle>CPF</MainTitle>
      <p>
        No campo abaixo, digite o seu CPF e descubra quais são os seus dígitos
        verificadores.
      </p>
      <MaskedInput
        value={cpf}
        mask={[/\d/, /\d/, /\d/, ".", /\d/, /\d/, /\d/, ".", /\d/, /\d/, /\d/]}
        guide={true}
        placeholder="Digite o seu CPF"
        type="text"
        onChange={handleInput}
        render={(ref, props) => <Input ref={ref} {...props} />}
      />
      {result && <Result>O seu CPF é: {result}</Result>}
    </MainContainer>
  );
}

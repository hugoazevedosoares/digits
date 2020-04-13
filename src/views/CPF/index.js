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

    console.log(value);
    setCPF(value);

    if (value.length === CPF_LENGTH) {
      try {
        const verificationDigits = calculateCPFDigits(value);
        const cpfWithDigits = formatCPFWithDigits(value, verificationDigits);
        return setResult(cpfWithDigits);
      } catch (e) {
        console.error(e);
      }
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
        className="form-control input"
        guide={true}
        placeholder="Digite o seu CPF"
        id="input-cpf"
        type="text"
        onChange={handleInput}
        render={(ref, props) => <Input ref={ref} {...props} />}
      />
      {result && <Result>O seu CPF é: {result}</Result>}
    </MainContainer>
  );
}

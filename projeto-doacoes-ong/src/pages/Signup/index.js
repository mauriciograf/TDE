import React, { useState } from "react";
import Input from "../../components/Input";
import Button from "../../components/Button";
import * as C from "./styles";
import { Link, useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [emailConf, setEmailConf] = useState("");
  const [senha, setSenha] = useState("");
  const [tipo, setTipo] = useState("");
  const [nrocel, setNrocel] = useState("");
  const [rua, setRua] = useState("");
  const [numero, setNumero] = useState("");
  const [bairro, setBairro] = useState("");
  const [cidade, setCidade] = useState("");
  const [estado, setEstado] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const { signup } = useAuth();

  const handleSignup = () => {
    if (!email | !emailConf | !senha | !tipo | !nrocel | !rua | !numero | !bairro | !cidade | !estado) {
      setError("Preencha todos os campos");
      return;
    } else if (email !== emailConf) {
      setError("Os e-mails não são iguais");
      return;
    }

    if (tipo !== "Doador" && tipo !== "ONG"){
      setError("Tipo deve ser Doador ou ONG");
      return;
    }

    const res = signup({email, senha, tipo, nrocel, rua, numero, bairro, cidade, estado});

    if (res) {
      setError(res);
      return;
    }

    alert("Usuário cadatrado com sucesso!");
    navigate("/");
  };

  return (
    <C.Container>
      <C.Label>CADASTRO</C.Label>
      <C.Content>
        <Input
          type="email"
          placeholder="Digite seu E-mail"
          value={email}
          onChange={(e) => [setEmail(e.target.value), setError("")]}
        />
        <Input
          type="email"
          placeholder="Confirme seu E-mail"
          value={emailConf}
          onChange={(e) => [setEmailConf(e.target.value), setError("")]}
        />
        <Input
          type="password"
          placeholder="Digite sua Senha"
          value={senha}
          onChange={(e) => [setSenha(e.target.value), setError("")]}
        />
        <Input
          type="tipo"
          placeholder="Tipo de Usuário. Ex: Doador, ONG"
          value={tipo}
          onChange={(e) => [setTipo(e.target.value), setError("")]}
        />
        <Input
          type="nrocel"
          placeholder="Número celular"
          value={nrocel}
          onChange={(e) => [setNrocel(e.target.value), setError("")]}
        />
        <Input
          type="rua"
          placeholder="Rua"
          value={rua}
          onChange={(e) => [setRua(e.target.value), setError("")]}
        />
        <Input
          type="numero"
          placeholder="Número"
          value={numero}
          onChange={(e) => [setNumero(e.target.value), setError("")]}
        />
        <Input
          type="bairro"
          placeholder="Bairro"
          value={bairro}
          onChange={(e) => [setBairro(e.target.value), setError("")]}
        />
        <Input
          type="cidade"
          placeholder="Cidade"
          value={cidade}
          onChange={(e) => [setCidade(e.target.value), setError("")]}
        />
        <Input
          type="estado"
          placeholder="Estado"
          value={estado}
          onChange={(e) => [setEstado(e.target.value), setError("")]}
        />
        <C.labelError>{error}</C.labelError>
        <Button onClick={handleSignup}>Cadastrar-se</Button>
        <C.LabelSignin>
          Já tem uma conta?
          <C.Strong>
            <Link to="/">&nbsp;Entre</Link>
          </C.Strong>
        </C.LabelSignin>
      </C.Content>
    </C.Container>
  );
};

export default Signup;

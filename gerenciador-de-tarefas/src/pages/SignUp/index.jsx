import { Link, useNavigate } from "react-router-dom";
import { Button } from "../../components/Button";
import { Input } from "../../components/Input";
import { Container } from "./styles";
import { useState } from "react";
import { api } from "../../services/api";

export function SignUp() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  function Register() {
    if (!name | !email | !password) {
      return alert("Deixou campos vazios");
    }

    api
      .post("/users", { name, email, password })
      .then(() => {
        alert("Usuário cadastrado com sucesso!");
        navigate("/");
      })
      .catch((error) => {
        if (error.response) {
          alert(error.response.data.message);
        } else {
          alert("Não foi possivel cadastrar");
        }
      });
  }

  return (
    <Container>
      <h1>Gerenciador de Tarefas</h1>
      <h2>Cadastro</h2>
      <form>
        <Input
          type="text"
          placeholder="Nome"
          onChange={(e) => setName(e.target.value)}
        />
        <Input
          type="email"
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <Input
          type="text"
          placeholder="Senha"
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button title="Cadastrar" onClick={Register} />
        <Link to={"/"}>Voltar</Link>
      </form>
    </Container>
  );
}

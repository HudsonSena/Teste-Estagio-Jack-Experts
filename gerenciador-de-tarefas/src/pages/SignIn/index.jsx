import { Container } from "./styles";
import { Button } from "../../components/Button";
import { Input } from "../../components/Input";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../hooks/auth";
import { useState } from "react";

export function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const data = useAuth();
  const navigate = useNavigate();
  const { signIn } = useAuth();

  function Login() {
    signIn({ email, password });
    navigate("/");
  }

  return (
    <Container>
      <h1>Gerenciador de Tarefas</h1>

      <h2>Login</h2>

      <form>
        <Input
          type="email"
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <Input
          type="password"
          placeholder="Senha"
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button title="Entrar" onClick={Login} />
        <Link to={"/register"}>Cadastre-se</Link>
      </form>
    </Container>
  );
}

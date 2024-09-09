import { Container } from "./styles";
import { Button } from "../../components/Button";
import { Input } from "../../components/Input";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../hooks/auth";

export function SignIn() {
  const data = useAuth();
  const navigate = useNavigate();

  function Login(event) {
    event.default;
    navigate("/");
  }
  return (
    <Container>
      <h1>Gerenciador de Tarefas</h1>

      <h2>Login</h2>

      <form>
        <Input type="email" placeholder="Email" />
        <Input type="password" placeholder="Senha" />
        <Button title="Entrar" onClick={Login} />
        <Link to={"/register"}>Cadastre-se</Link>
      </form>
    </Container>
  );
}

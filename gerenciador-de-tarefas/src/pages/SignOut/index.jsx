import { Link, useNavigate } from "react-router-dom";
import { Button } from "../../components/Button";
import { Input } from "../../components/Input";
import { Container } from "./styles";
export function SignOut() {
  const navigate = useNavigate();

  function Register(event) {
    event.default;
    navigate("/login");
  }
  return (
    <Container>
      <h1>Gerenciador de Tarefas</h1>
      <h2>Cadastro</h2>
      <form>
        <Input type="text" placeholder="Nome" />
        <Input type="email" placeholder="Email" />
        <Input type="text" placeholder="Senha" />
        <Button type="submit" title="Cadastrar" onClick={Register} />
        <Link to={"/login"}>Voltar</Link>
      </form>
    </Container>
  );
}

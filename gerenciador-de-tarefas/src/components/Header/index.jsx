import { Link } from "react-router-dom";
import { Container } from "./styles";

export function Header() {
  return (
    <Container>
      <div>
        <h2>Gerenciador de Tarefas</h2>
        <h3>Bem vindo(a), Hudson!</h3>
      </div>

      <Link to={"/login"}>Sair</Link>
    </Container>
  );
}

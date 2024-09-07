import { Container } from "./styles";
import { ButtonText } from "../ButtonText";

export function Header() {
  return (
    <Container>
      <div>
        <h2>Gerenciador de Tarefas</h2>
        <h3>Bem vindo(a), Hudson!</h3>
      </div>

      <ButtonText title="Sair" to="/" />
    </Container>
  );
}

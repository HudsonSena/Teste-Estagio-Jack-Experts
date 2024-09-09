import { Container } from "./styles";
import { ButtonText } from "../ButtonText";
import { useAuth } from "../../hooks/auth";

export function Header() {
  const { signOut, user } = useAuth();
  return (
    <Container>
      <div>
        <h2>Gerenciador de Tarefas</h2>
        <h3>Bem vindo(a), {user.name}!</h3>
      </div>

      <ButtonText title="Sair" onClick={signOut} />
    </Container>
  );
}

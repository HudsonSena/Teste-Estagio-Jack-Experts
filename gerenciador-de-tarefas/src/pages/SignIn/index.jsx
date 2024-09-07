import { Container } from "./styles";
import { Button } from "../../components/Button";
import { Input } from "../../components/Input";
import { ButtonText } from "../../components/ButtonText";

export function SignIn() {
  return (
    <Container>
      <h1>Gerenciador de Tarefas</h1>

      <h2>Login</h2>

      <form action="submit">
        <Input type="email" placeholder="Email" />
        <Input type="password" placeholder="Senha" />
        <Button title="Entrar" type="submit" />
        <ButtonText title="Cadastre-se" type="button" />
      </form>
    </Container>
  );
}

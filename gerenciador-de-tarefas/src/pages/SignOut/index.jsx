import { Button } from "../../components/Button";
import { ButtonText } from "../../components/ButtonText";
import { Input } from "../../components/Input";
import { Container } from "./styles";
export function SignOut() {
  return (
    <Container>
      <h1>Gerenciador de Tarefas</h1>
      <h2>Cadastro</h2>
      <form action="submit">
        <Input type="text" placeholder="Nome" />
        <Input type="email" placeholder="Email" />
        <Input type="text" placeholder="Senha" />
        <Button type="submit" title="Cadastrar" />
        <ButtonText type="button" title="Voltar" />
      </form>
    </Container>
  );
}

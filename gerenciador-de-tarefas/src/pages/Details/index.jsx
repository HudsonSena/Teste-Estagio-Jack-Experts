import { Container } from "./styles";
import { Button } from "../../components/Button";
import { Input } from "../../components/Input";
import { TextArea } from "../../components/textArea";
import { Link } from "react-router-dom";

export function Details() {
  return (
    <Container>
      <div>
        <h2>Detalhes da Tarefa</h2>
        <Link to={"/"}>Voltar</Link>
      </div>

      <form action="submit">
        <Input />
        <TextArea />

        <nav>
          <Button type="submit" title="Atualizar" />
          <Button type="button" title="Deletar" />
        </nav>
      </form>
    </Container>
  );
}

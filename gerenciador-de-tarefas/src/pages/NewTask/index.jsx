import { Container } from "./styles";
import { Button } from "../../components/Button";
import { Input } from "../../components/Input";
import { TextArea } from "../../components/textArea";
import { Link } from "react-router-dom";

export function NewTask() {
  return (
    <Container>
      <div>
        <h1>Nova Tarefa</h1>
        <Link to={"/"}>Voltar</Link>
      </div>

      <h3>Aqui você pode criar uma nova tarefa</h3>
      <form action="submit">
        <Input placeholder="Título da tarefa" />
        <TextArea placeholder="Descrição da tarefa" />

        <Button type="submit" title="Criar" />
      </form>
    </Container>
  );
}

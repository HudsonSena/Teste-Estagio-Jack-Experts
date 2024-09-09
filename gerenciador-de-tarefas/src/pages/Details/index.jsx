import { Container } from "./styles";
import { Button } from "../../components/Button";
import { Input } from "../../components/Input";
import { TextArea } from "../../components/textArea";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { api } from "../../services/api";

export function Details() {
  const { id } = request;
  const navigate = useNavigate();
  const [title, setTitle] = useState(task.title);
  const [description, setDescription] = useState(task.description);

  function UpdateTask() {
    if (!setTitle | !setDescription) {
      return alert("Deixou campos vazios");
    }

    api
      .post("/tasks", { title, description })
      .then(() => {
        alert("Tarefa Atualizada!");
        navigate("/");
      })
      .catch((error) => {
        if (error.response) {
          alert(error.response.data.message);
        } else {
          alert("Não foi possivel cadastrar");
        }
      });
  }
  return (
    <Container>
      <div>
        <h2>Detalhes da Tarefa</h2>
        <Link to={"/"}>Voltar</Link>
      </div>

      <form>
        <Input value={title} onChange={(e) => setTitle(e.target.value)} />
        <TextArea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />

        <nav>
          <Button title="Atualizar" />
          <Button title="Deletar" />
        </nav>
      </form>
    </Container>
  );
}

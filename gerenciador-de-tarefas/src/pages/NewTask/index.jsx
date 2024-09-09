import { Container } from "./styles";
import { Button } from "../../components/Button";
import { Input } from "../../components/Input";
import { TextArea } from "../../components/textArea";
import { Link } from "react-router-dom";
import { useState } from "react";
import { api } from "../../services/api.js";
import { useNavigate } from "react-router-dom"

export function NewTask() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const navigate = useNavigate();

  async function handleNewTask() {
    try {
      if (!title) {
        return alert("Titulo em branco");
      }
      if (!description) {
        return alert("Title em branco");
      }

      await api.post("/tasks", {
        title,
        description
      });

      alert("Tarefa Criada");
      navigate("/");
    } catch (error) {
      alert(error.response.data.message);
    }

  }

  return (
    <Container>
      <div className="header">
        <h1>Nova Tarefa</h1>
        <Link to={"/"}>Voltar</Link>
      </div>

      <h3>Aqui você pode criar uma nova tarefa</h3>
      <form action="submit">
        <label htmlFor="title">Título</label>
        <Input type="text" placeholder="Digite título da tarefa" onChange={e => setTitle(e.target.value)} id="title" />
        <label htmlFor="description">Descrição</label>
        <TextArea type="text" placeholder="Digite a descrição da tarefa" onChange={e => setDescription(e.target.value)} id="description" />

        <Button title="Criar" onClick={handleNewTask} />
      </form>
    </Container>
  );
}

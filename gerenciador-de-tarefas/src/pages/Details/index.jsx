import { Container } from "./styles";
import { Button } from "../../components/Button";
import { Input } from "../../components/Input";
import { TextArea } from "../../components/textArea";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { api } from "../../services/api";

export function Details() {
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const [data, setData] = useState(null);
  const params = useParams();

  useEffect(() => {
    async function fetchTask() {
      try {
        const response = await api.get(`/tasks/${params.id}`);
        setData(response.data);

        setTitle(response.data.title);
        setDescription(response.data.description);
      } catch (error) {
        alert("Erro ao buscar a tarefa", error);
      }
    }

    fetchTask();
  }, [params.id]);

  async function UpdateTask() {
    if (!title.trim() || !description.trim()) {
      return alert("O título ou a descrição não podem estar vazios!");
    }

    try {
      if (data.title !== title) {
        const response = await api.get(`/tasks?title=${title}`);
        if (response.data.length > 0) {
          return alert("Este título já existe. Escolha um título diferente.");
        }
      }

      await api.put(`/tasks/${params.id}`, { title, description });
      alert("Tarefa Atualizada!");
      navigate("/");
    } catch (error) {
      if (error.response) {
        alert(error.response.data.message);
      } else {
        alert("Não foi possível atualizar a tarefa.");
      }
    }
  }


  async function DeleteTask() {
    const confirm = window.confirm("Deseja realmente deletar a tarefa?");

    if (confirm) {
      try {
        await api.delete(`/tasks/${params.id}`);
        navigate("/");
      } catch (error) {
        console.error("Erro ao deletar a tarefa:", error);
        alert("Erro ao deletar a tarefa. Tente novamente.");
      }
    }
  }

  return (
    <Container>
      <div>
        <h2>Detalhes da Tarefa</h2>
        <Link to={"/"}>Voltar</Link>
      </div>

      {
        data && <form>
          <label htmlFor="title">Título</label>
          <Input value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Digite o título da tarefa" id="title" />
          <label htmlFor="description">Descrição</label>
          <TextArea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Digite a descrição da tarefa"
            id="description"
          />

          <nav>
            <Button title="Atualizar" onClick={UpdateTask} />
            <Button title="Deletar" onClick={DeleteTask} />
          </nav>
        </form>
      }


    </Container>
  );
}

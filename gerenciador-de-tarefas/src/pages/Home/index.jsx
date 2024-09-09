import { Container, Content } from "./styles";
import { Header } from "../../components/Header";
import { Button } from "../../components/Button";
import { Task } from "../../components/Task";
import { useNavigate } from "react-router-dom";
import { Input } from "../../components/Input";
import { ButtonText } from "../../components/ButtonText";
import { useEffect, useState } from "react";
import { api } from "../../services/api";

export function Home() {
  const navigate = useNavigate();
  const [search, setSearch] = useState("");
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    async function fetchSearch() {
      const response = await api.get(`/tasks?title=${search}`);
      setTasks(response.data);
    }

    fetchSearch();
  }, [search]);

  function NewTask(event) {
    event.default;
    navigate("/newtask");
  }
  return (
    <div>
      <Container>
        <Header />

        <main>
          <Content>
            {" "}
            <Button title="Nova Tarefa" onClick={NewTask} />
            <div className="btntasks">
              <ButtonText title="Tarefas" />
            </div>
            <Input placeholder="Pesquisar Tarefa" onChange={e => setSearch(e.target.value)} />

            <section>
              {
                tasks.map(task => (
                  <Task
                    key={String(task.id)}
                    data={task}
                  />
                ))
              }
            </section>
          </Content>
        </main>
      </Container>
    </div>
  );
}

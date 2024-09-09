import { Container, Content } from "./styles";
import { Header } from "../../components/Header";
import { Button } from "../../components/Button";
import { Task } from "../../components/Task";
import { useNavigate } from "react-router-dom";
import { Input } from "../../components/Input";
import { ButtonText } from "../../components/ButtonText";

export function Home() {
  const navigate = useNavigate();

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
            <Input placeholder="Pesquisar Tarefa" />
            <section>
              <Task
                data={{
                  title: "Tarefa 1",
                  description: "Colocar a descrição no banco de dados",
                }}
              />
              <Task
                data={{
                  title: "Tarefa 1",
                  description: "Colocar a descrição no banco de dados",
                }}
              />
            </section>
          </Content>
        </main>
      </Container>
    </div>
  );
}

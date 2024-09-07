import { Container, Content } from "./styles";
import { Header } from "../../components/Header";
import { Button } from "../../components/Button";
import { Task } from "../../components/Task";

export function Home() {
  return (
    <div>
      <Container>
        <Header />

        <main>
          <Content>
            <nav>
              <Button title="Nova Tarefa" />
            </nav>

            <h2>Tarefas</h2>
            <section>
              <Task />
              <Task />
              <Task />
              <Task />
              <Task />
            </section>
            <h2>Tarefas Concluídas</h2>
          </Content>
        </main>
      </Container>
    </div>
  );
}

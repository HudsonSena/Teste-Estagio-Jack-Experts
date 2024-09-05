export function Home() {
  return (
    <div>
      <h1>Gerenciador de Tarefas</h1>
      <section>
        <input type="button" value="Criar Tarefa" />
      </section>
      <div>
        <h2>Tarefas</h2>
        <li>
          Tarefa 1 <input type="button" value="A" />{" "}
          <input type="button" value="C" /> <input type="button" value="D" />
        </li>
        <li>
          Tarefa 2 <input type="button" value="A" />{" "}
          <input type="button" value="C" /> <input type="button" value="D" />
        </li>
        <li>
          Tarefa 3 <input type="button" value="A" />{" "}
          <input type="button" value="C" /> <input type="button" value="D" />
        </li>
        <li>
          Tarefa 4 <input type="button" value="A" />{" "}
          <input type="button" value="C" /> <input type="button" value="D" />
        </li>
      </div>
      <div>
        <h2>Tarefas Conluídas</h2>
        <li>
          Tarefa 1 <input type="button" value="D" />
        </li>
        <li>
          Tarefa 2 <input type="button" value="D" />
        </li>
        <li>
          Tarefa 3 <input type="button" value="D" />
        </li>
        <li>
          Tarefa 4 <input type="button" value="D" />
        </li>
      </div>
    </div>
  );
}

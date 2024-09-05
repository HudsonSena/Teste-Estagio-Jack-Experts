export function NewTask() {
  return (
    <div>
      <h1>Nova Tarefa</h1>
      <p>Aqui você pode criar uma nova tarefa</p>
      <form action="submit">
        <input type="text" placeholder="Título da tarefa" /> <br />
        <input type="textarea" placeholder="Descrição da tarefa" /> <br />
        <input type="button" value="Voltar" />
        <input type="submit" value="Criar" />
      </form>
    </div>
  );
}

export function UpdateTask() {
  return (
    <div>
      <h1>Atualizar Tarefa</h1>
      <p>Aqui você pode criar uma nova tarefa</p>
      <form action="submit">
        <input type="text" placeholder="Título da tarefa" /> <br />
        <input type="text" placeholder="Descrição da tarefa" /> <br />
        <input type="submit" value="Atualizar" />
        <input type="button" value="Deletar" /> <br />
        <input type="button" value="Voltar" />
      </form>
    </div>
  );
}

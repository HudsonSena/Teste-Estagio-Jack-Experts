export function SignOut() {
  return (
    <div>
      <h1>Gerenciador de Tarefas</h1>
      <h2>Cadastro</h2>
      <form action="submit">
        <input type="text" placeholder="Nome" /> <br />
        <input type="email" placeholder="Email" /> <br />
        <input type="text" placeholder="Senha" /> <br />
        <input type="button" value="Voltar" />
        <input type="submit" value="Cadastrar" />
      </form>
    </div>
  );
}

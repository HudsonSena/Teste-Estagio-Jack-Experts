import "./styles.css";

export function SignIn() {
  return (
    <div>
      <h1>Gerenciador de Tarefas</h1>
      <h2>Login</h2>

      <form action="submit">
        <input type="email" placeholder="Email" /> <br />
        <input type="password" placeholder="Senha" /> <br />
        <input type="submit" value="Entrar" /> <br />
        <input type="button" value="Cadastre-se" />
      </form>
    </div>
  );
}

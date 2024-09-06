import { Button } from "../../components/Button";
import { Input } from "../../components/Input";

export function SignIn() {
  return (
    <div>
      <h1>Gerenciador de Tarefas</h1>
      <h2>Login</h2>

      <form action="submit">
        <Input type="email" placeholder="Email" />
        <Input type="password" placeholder="Senha" />
        <Button value="Entrar" type="submit" />
        <Button value="Cadastre-se" type="button" />
      </form>
    </div>
  );
}

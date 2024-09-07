import { ButtonText } from "../ButtonText";
import { Container } from "./styles";

export function Task() {
  return (
    <Container>
      <div>
        <ButtonText title="Tarefa número 1" />
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestiae
          minima dolore repellendus debitis deleniti voluptate praesentium
          expedita consequatur mollitia quam. Accusamus totam necessitatibus
          eaque ut voluptas quaerat at. Minima, eveniet!
        </p>
      </div>
      <div>
        <ButtonText title="Atualizar" />
        <ButtonText title="Deletar" />
        <ButtonText title="Concluir" />
      </div>
    </Container>
  );
}

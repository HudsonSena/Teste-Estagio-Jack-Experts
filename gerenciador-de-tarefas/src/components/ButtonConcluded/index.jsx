import { Container } from "./styles";

export function ButtonConcluded({ title, concluded = false, ...rest }) {
  return (
    <Container type="button" disabled={concluded} {...rest}>
      {concluded ? "Concluído!" : title}
    </Container>
  );
}

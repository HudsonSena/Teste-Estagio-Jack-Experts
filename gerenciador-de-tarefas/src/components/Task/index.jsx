import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ButtonConcluded } from "../ButtonConcluded";
import { ButtonText } from "../ButtonText";
import { Container } from "./styles";

export function Task({ data, ...rest }) {
  const [isConcluded, setIsConcluded] = useState(data.concluded || false); // Estado de conclusão inicial
  const navigate = useNavigate();

  function GoToDetails(event) {
    event.preventDefault();
    navigate(`/details/${data.id}`); // Use o ID da tarefa dinamicamente
  }

  function Concluded(event) {
    event.preventDefault();
    setIsConcluded(true); // Atualiza o estado de conclusão
  }

  return (
    <Container {...rest}>
      <div>
        <ButtonText title={data.title} onClick={GoToDetails} />
        <p>{data.description}</p>
      </div>
      <div>
        {/* Altera o estado de "Concluído" ao clicar no botão */}
        <ButtonConcluded
          title={isConcluded ? "Concluído" : "Concluir"}
          onClick={Concluded}
          disabled={isConcluded} // Desabilita o botão após ser concluído
        />
      </div>
    </Container>
  );
}

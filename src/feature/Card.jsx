import styled from "@emotion/styled";
import { useDraggable } from "@dnd-kit/core";
import { CSS } from "@dnd-kit/utilities";

const StyledCard = styled.div`
  width: 200px;
  height: 50px;
  margin: 10px;
  padding: 10px;
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  transform: ${props => CSS.Translate.toString(props.transform)};
`;

const Text = styled.p`
  font-size: 16px;
  color: #333;
`;

const Card = ({
  data
}) => {

  const {
    transform,
    attributes,
    listeners,
    setNodeRef
  } = useDraggable({
    id: data.cardId
  })

  return (
    <StyledCard transform={transform} ref={setNodeRef} {...attributes} {...listeners}>
      <Text>{data.cardTitle}</Text>
    </StyledCard>
  )
}

export default Card;

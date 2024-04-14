import styled from "@emotion/styled";
import CardContainer from "./CardContainer";
import Card from "./Card";
import { DndContext, useDraggable } from "@dnd-kit/core";
import { CSS } from "@dnd-kit/utilities";

const StyledBoard = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  width: 300px;
  height: 500px;
  padding: 10px;
  background-color: #f0f0f0;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  transform: ${props => CSS.Translate.toString(props.transform)};
`;

const Heading1 = styled.h1`
  font-size: 24px;
  font-weight: bold;
  color: #333;
`;

const Board = ({
  data
}) => {

  const {
    transform,
    attributes,
    listeners,
    setNodeRef
  } = useDraggable({
    id: data.boardId
  })

  const handleDragMove = (event) => {
    console.log(event.over?.id)
  }

  return (
    <StyledBoard ref={setNodeRef} {...attributes} {...listeners} transform={transform}>
      <Heading1>{data.boardTitle}</Heading1>
      <DndContext onDragMove={handleDragMove}>
        <CardContainer boardId={data.boardId}>
          {data.cardList.map((card) => (
            <Card key={card.cardId} data={card} />
          ))}
        </CardContainer>
      </DndContext>
    </StyledBoard>
  )
}

export default Board;

import styled from "@emotion/styled";
import { DndContext } from "@dnd-kit/core";
import BoardContainer from "./BoardContainer";
import Board from "./Board";
import * as json from "./mock.json";

const Container = styled.div`
  position: relative;
  width: 100%;
  height: 100vh;
  margin: 0;
  padding: 0;
`;

const Trello = () => {
  const {data} = json;

  const handleDragEnd = (event) => {
    console.log(event.over);
  }

  return (
    <Container>
      <DndContext onDragEnd={handleDragEnd}>
        <BoardContainer>
          {data.map((item) => (
            <Board key={item.boardId} data={item} />
          ))}
        </BoardContainer>
      </DndContext>
    </Container>
  )
}

export default Trello;

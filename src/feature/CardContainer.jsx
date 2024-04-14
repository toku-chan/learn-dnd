import styled from "@emotion/styled";
import { useDroppable } from "@dnd-kit/core";
import { useEffect } from "react";

const StyledCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
`;


const CardContainer = ({
  boardId,
  children
}) => {

  console.log(boardId)

  const { isOver, setNodeRef } = useDroppable({
    id: "card-container" + boardId
  });

  useEffect(() => {
    console.log(isOver);
  }, [isOver]);

  return (
    <StyledCardContainer ref={setNodeRef}>
      {children}
    </StyledCardContainer>
  )
}

export default CardContainer;

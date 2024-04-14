import { useDroppable } from "@dnd-kit/core";
import styled from "@emotion/styled";
import { useEffect } from "react";

const StyledBoardContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  padding-top: 60px;
`;

const BoardContainer = ({
  children
}) => {

  // NOTE: boardはboard-container内でしかDnDしないので、idはboard-containerに設定する
  const { isOver, setNodeRef } = useDroppable({
    id: "board-container"
  });

  useEffect(() => {
    console.log(isOver)
  }, [isOver]);

  return (
    <StyledBoardContainer ref={setNodeRef}>
      {children}
    </StyledBoardContainer>
  )
}

export default BoardContainer;

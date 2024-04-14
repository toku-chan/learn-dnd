import styled from "@emotion/styled";
import { useDroppable } from "@dnd-kit/core";
import { useEffect } from "react";

const Container = styled.div`
  color: ${props => props.color};
`;

// ドロップが可能なコンポーネント
export const Droppable = ({
  id,
  children
}) => {

  const { isOver, setNodeRef } = useDroppable({
    id // ドロップ可能なコンポーネントを識別するためのID
  })

  // NOTE: Dropされる要素の上に、ドラッグしている要素があるかどうか
  useEffect(() => {
    console.log(isOver)
  }, [isOver]);

  return (
    <Container
      ref={setNodeRef}
      color={isOver ? 'green' : undefined}
    >
      {children}
    </Container>
  )
}

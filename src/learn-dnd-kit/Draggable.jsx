import styled from "@emotion/styled";
import { useDraggable } from "@dnd-kit/core";
import { CSS } from "@dnd-kit/utilities";
import { useEffect } from "react";

const Button = styled.button`
  transform: ${props => CSS.Translate.toString(props.transform)};
`;

export const Draggable = ({
  children
}) => {
  const { attributes, listeners, setNodeRef, transform } = useDraggable({
    id: "draggable"
  })

  // NOTE: HTMLの属性を表示
  // useEffect(() => {
  //   console.log(attributes)
  // }, [attributes])

  // NOTE: イベントをリスナーとして登録していそう
  // useEffect(() => {
  //   console.log(listeners)
  // }, [listeners])

  // NOTE: ドラッグしている要素の位置情報
  // useEffect(() => {
  //   console.log(transform)
  // }, [transform])

  return (
    <Button
      ref={setNodeRef}
      transform={transform}
      {...listeners}
      {...attributes}
    >
      Drag Me
    </Button>
  )
}

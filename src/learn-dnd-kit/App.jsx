import { useState } from "react";
import { DndContext } from "@dnd-kit/core";
import { Draggable } from "./Draggable";
import { Droppable } from "./Droppable";

const container = ["A", "B", "C"];

function App() {
  const [parent, setParent] = useState(null);

  const handleDragEnd = (e) => {
    console.log(e.over);
    setParent(e.over ? e.over.id : null);
  }

  return (
    /**
     * NOTE: DnDを有効にするためにDndContextを使用する
     * DndContextに囲まれたコンポーネントはDnDが有効になる
     */
    <DndContext onDragEnd={handleDragEnd}>
      {parent === null ? <Draggable /> : null}
      {container.map((id) => (
        <Droppable key={id} id={id}>
          {parent === id ? <Draggable /> : "Drop Here"}
        </Droppable>
      ))}
    </DndContext>
  )
}

export default App;

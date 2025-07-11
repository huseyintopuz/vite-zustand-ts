import { useMemo, useState } from "react";
import { useStore } from "../store";
import type { TaskProps } from "../store";
import Task from "./Task";
import Modal from "./Modal";

type ColumnProps = {
  state: string;
  background: string;
};

const Column = ({ state, background }: ColumnProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [drop, setDrop] = useState(false);

  const tasks: TaskProps[] = useStore((store) => store.tasks);
  const setDraggedTask = useStore((store) => store.setDraggedTask);
  const draggedTask = useStore((store) => store.draggedTask);
  const moveTask = useStore((store) => store.moveTask);

  const filteredTasks = useMemo(
    () => tasks.filter((task: TaskProps) => task.state === state),
    [tasks, state]
  );
  return (
    <div
      onDragOver={(e) => {
        setDrop(true);
        e.preventDefault();
      }}
      onDragLeave={(e) => {
        setDrop(false);
        e.preventDefault();
      }}
      onDrop={() => {
        if (draggedTask !== null) {
          moveTask(draggedTask, state);
        }
        setDraggedTask(null);
        setDrop(false);
      }}
      className={`${background} ${
        drop ? "border-white" : "border-transparent"} border-dashed border-4 flex flex-col items-center p-4 rounded-lg`}
    >
      <div className="w-full flex justify-between items-center mb-4">
        <span className="w-3/4 text-3xl text-white text-center">{state}</span>
        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          className="bg-white px-2 py-1 rounded-lg text-sm text-gray-500 hover:bg-gray-100 hover:text-gray-700"
        >
          Add
        </button>
      </div>
      {filteredTasks.map((item) => (
        <Task key={item.id} {...item} />
      ))}
      {isOpen && <Modal setIsOpen={setIsOpen} state={state} />}
    </div>
  );
};

export default Column;

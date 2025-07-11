import TrashIcon from "../assets/icons/TrashIcon";
import { useStore, type TaskProps } from "../store";

const Task = ({ title, state, id }: TaskProps) => {
  const setDraggedTask = useStore((store) => store.setDraggedTask);
  const removeTask = useStore((store) => store.removeTask);
  return (
    <div
      draggable
      onDragStart={() => setDraggedTask(id)}
      className="bg-white px-6 py-4 w-full mt-4 rounded-lg shadow-lg cursor-move"
    >
      <span className="text-2xl">{title}</span>
      <div className="flex justify-between items-center mt-2">
        <button type="button" onClick={() => removeTask(id)}>
          <TrashIcon />
        </button>
        <div className="text-right">{state}</div>
      </div>
    </div>
  );
};

export default Task;

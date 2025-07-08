import TrashIcon from "../assets/icons/TrashIcon";
import { useStore, type TaskProps } from "../store";

const Task = ({ title, state, id }: TaskProps) => {
  const removeTask = useStore((store) => store.removeTask);
  return (
    <div className="bg-white px-6 py-4 w-full mt-4 rounded-lg shadow-lg">
      <span className="text-2xl">{title}</span>
      <div className="flex justify-between items-center mt-2">
        <button
          type="button"
          onClick={() => removeTask(id)}
        >
          <TrashIcon />
        </button>
        <div className="text-right">{state}</div>
      </div>
    </div>
  );
};

export default Task;

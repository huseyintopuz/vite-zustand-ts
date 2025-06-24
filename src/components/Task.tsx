type TaskProps = {
  content: string;
};

const STATUS = "Planned";

const Task = ({ content }: TaskProps) => {
  return (
    <div className="bg-white p-4 w-full mt-4 rounded-lg shadow-lg">
      <div className="text-2xl">{content}</div>
      <div>
        <div></div>
        <div className="text-right">{STATUS}</div>
      </div>
    </div>
  );
};

export default Task;

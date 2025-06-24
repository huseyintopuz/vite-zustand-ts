import Task from "./Task";

type ColumnProps = {
  title: string;
  background: string;
};

const Column = ({ title, background }: ColumnProps) => {
  return (
    <div
      className={`${background}  flex flex-col justify-center items-center p-4 rounded-lg`}
    >
      <span className="text-4xl text-white">{title}</span>
      <Task content="Todo" />
    </div>
  );
};

export default Column;

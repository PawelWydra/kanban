import useEscape from "./helpers/useEscapeFunction";

type subtask = {
  title: string;
  isCompleted: boolean;
}[];

const Task = ({
  title,
  description,
  status,
  subtasks,
}: {
  title: String;
  description: String;
  status: string;
  subtasks: subtask;
}) => {

  const subtaskCompleted = subtasks.filter(subtask => subtask.isCompleted === true);

  return (
      <div className="min-h-[88px] w-full bg-white flex flex-col justify-center shadow-lg rounded-md p-4">
        <h2 className="heading-md text-black">{title}</h2>
        <p className="text-body-md text-gray-medium">{subtaskCompleted.length} of {subtasks.length} subtask</p>
      </div>
  );
};

export default Task;

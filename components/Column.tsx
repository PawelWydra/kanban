import data from "@/data.json";
import Task from "@/components/Task";

const Column = ({ boardName, name }: { boardName: String; name: String }) => {
  const board = data.boards.find((board) => board.name === boardName);
  const columnArray = board?.columns.find(
    (columnName) => columnName.name === name
  );
  const tasksArray = columnArray?.tasks;

  return (
    <div className="w-[19rem]">
      <div className="flex gap-2 mb-4">
        <div className="bg-[#49C4E5] rounded-full size-4"></div>
        <span className="text-gray-medium heading-sm">{name}</span>
      </div>
      <div className="flex flex-col gap-4">
        {tasksArray?.map((task, index) => (
          <Task {...task} key={index}></Task>
        ))}
      </div>
    </div>
  );
};

export default Column;

import Task from "@/components/Task";
import { ITask } from "@/types/index";

const Column = ({ name, tasks }: { name: String; tasks?: ITask[] }) => {
  return (
    <div className="w-[19rem]">
      <div className="flex gap-2 mb-4">
        <div className="bg-[#49C4E5] rounded-full size-4"></div>
        <span className="text-gray-medium heading-sm">{name}</span>
      </div>
      <div className="flex flex-col gap-4">
        {tasks?.map((task: ITask, index: number) => (
          <Task {...task} key={task.id}></Task>
        ))}
      </div>
    </div>
  );
};

export default Column;

import { Checkbox } from "@/components/ui/checkbox";

const TaskPopUp = () => {
  return (
    <div className="absolute h-screen w-screen bg-gray-900/60 flex justify-center items-center ">
      <div className="bg-white w-[30rem] h-[32.7rem] flex flex-col items-center gap-4 p-4">
        <h1 className="heading-lg">
          Research pricing points of various competitors and trial different
          business models
        </h1>
        <p className="text-body-md text-gray-medium">
          We know what we're planning to build for version one. Now we need to
          finalise the first pricing model we'll use. Keep iterating the
          subtasks until we have a coherent proposition.
        </p>
        <p className="heading-sm text-gray-medium">Subtask (2 of 3)</p>

        <div className="w-full rounded-xl  py-2">
          <div className="flex items-center gap-4 h-12 px-4 bg-gray-light rounded-lg">
            <Checkbox />
            <label className="text-body-md" htmlFor="task1">
              Research competitor pricing and business models
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TaskPopUp;

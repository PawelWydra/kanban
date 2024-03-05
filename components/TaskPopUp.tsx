

const TaskPopUp = () => {
  return (
    <div className="absolute h-screen w-screen bg-black opacity-60 flex justify-center items-center ">
      <div className="bg-white flex flex-col items-center gap-4 p-4">
        <h1 className="heading-lg"></h1>
        <p className="text-body-md text-gray-medium"></p>
        <div>
          <p className="heading-sm text-gray-medium">Subtask (2 of 3)</p>
          <div className="bg-gray-light">
            <input type="checkbox" id="task1" name="task1" />
            <label className="text-body-md" htmlFor="task1">
              I have a bike
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TaskPopUp;

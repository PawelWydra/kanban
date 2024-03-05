import useEscape from "./helpers/useEscapeFunction";

const Task = () => {
    const isVisible: boolean = useEscape();

  return (
    isVisible &&
    <div className="h-[88px] w-full bg-white flex flex-col justify-center shadow-lg rounded-md px-4">
      <h2 className="heading-md text-black">task title</h2>
      <p className="text-body-md text-gray-medium">sub task info</p>
    </div>
  );
};

export default Task;

import useEscape from "./helpers/useEscapeFunction";

type DeleteBoardProps = {
  title: string;
  description: string;
};

function DeleteWarning({ title, description }: DeleteBoardProps) {
  const isVisible: boolean = useEscape();

  return (
    isVisible && (
      <div className="absolute h-screen w-screen bg-gray-900/60 flex justify-center items-center">
        <div className="bg-white w-[30rem] flex flex-col gap-4 p-8 rounded-2xl">
          <h1 className="heading-lg text-destructive">{title}</h1>
          <p className="text-body-md text-gray-medium">{description}</p>
          <div className="flex gap-4 *:flex-1">
            <button className="h-10 bg-destructive hover:bg-destructive-hover text-white text-body-md rounded-3xl">
              Delete
            </button>
            <button className="h-10 bg-gray-light hover:bg-gray-100 text-purple text-body-md rounded-3xl">
              Cancel
            </button>
          </div>
        </div>
      </div>
    )
  );
}

export default DeleteWarning;

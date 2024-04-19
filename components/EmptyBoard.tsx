import { useModalContext } from "@/context/ModalContext";

function EmptyBoard() {
  const { setEditBoard } = useModalContext();

  return (
    <>
      <div className="w-full h-full flex flex-col gap-10 justify-center items-center">
        <h3 className="heading-lg text-gray-medium">
          This board is empty. Create a new column to get started.
        </h3>
        <button
          onClick={() => {
            setEditBoard(true);
          }}
          className="h-12 w-48 bg-purple hover:bg-purple-hover duration-300 rounded-3xl heading-md text-white p-1"
        >
          + Add New Column
        </button>
      </div>
    </>
  );
}

export default EmptyBoard;

import { useHomeContext } from "@/context/HomeContext";
import { useModalContext } from "@/context/ModalContext";
import { Type } from "@/types";

type DeleteBoardProps = {
  type: Type | string;
  title: string;
  id: string;
};

function DeleteWarning({ type, title, id }: DeleteBoardProps) {
  let paragraph: string;

  const { setDeleteWarning } = useModalContext();
  const { boards, setBoards, setBoardSelectedId } = useHomeContext();

  if (type === Type.Task) {
    paragraph = `Are you sure you want to delete the ‘${title}’ task and its subtasks? This action cannot be reversed.`;
  } else if (type === Type.Board) {
    paragraph = `Are you sure you want to delete the ‘${title}’ board? This action will remove all columns and tasks and cannot be reversed.`;
  } else if (type === Type.Column) {
    paragraph = `Are you sure you want to delete the ‘${title}’? This action cannot be reversed.`;
  } else {
    paragraph = "No type provided.";
  }

  const handleDelete = () => {
    fetch(`/api/${type}`, {
      method: "DELETE",
      body: JSON.stringify({ id }),
    });
    if (type === Type.Board) {
      const newBoards = boards.filter((board) => board.id !== id);
      setBoards(newBoards);
      setBoardSelectedId(boards[0].id);
      setDeleteWarning({ type: "", title: "", id: "", active: false });
    }
  };

  const closeModal = () => {
    setDeleteWarning({ type: "", title: "", id: "", active: false });
  };

  return (
    <div className="absolute h-screen w-screen bg-gray-900/60 flex justify-center items-center z-50">
      <div className="bg-white w-[30rem] flex flex-col gap-4 p-8 rounded-2xl">
        <h1 className="heading-lg text-destructive">Delete this {type}</h1>
        <p className="text-body-md text-gray-medium">{paragraph}</p>
        <div className="flex gap-4 *:flex-1">
          <button
            onClick={handleDelete}
            className="h-10 bg-destructive hover:bg-destructive-hover text-white text-body-md rounded-3xl"
          >
            Delete
          </button>
          <button
            onClick={closeModal}
            className="h-10 bg-gray-light hover:bg-gray-100 text-purple text-body-md rounded-3xl"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
}

export default DeleteWarning;

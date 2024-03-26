enum Type {
  Board = "board",
  Column = "column",
  Task = "task",
}

type DeleteBoardProps = {
  type: Type;
  title: string;
  id: string;
};

function DeleteWarning({ type, title, id }: DeleteBoardProps) {
  let paragraph: string;

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
          <button className="h-10 bg-gray-light hover:bg-gray-100 text-purple text-body-md rounded-3xl">
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
}

export default DeleteWarning;

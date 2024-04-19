import { useModalContext } from "@/context/ModalContext";

const NewColumn = () => {
  const { setEditBoard } = useModalContext();
  return (
    <div className="max-h-fit flex justify-center items-center mt-8 w-[19rem] py-10 px-4 bg-[#E9EFFA]">
      <h1
        onClick={() => {
          setEditBoard(true);
        }}
        className="heading-xl text-gray-medium hover:text-purple-hover hover:cursor-pointer"
      >
        + New Column
      </h1>
    </div>
  );
};

export default NewColumn;

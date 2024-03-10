export type Subtask = {
  title: string;
  isCompleted: boolean;
};

export type Task = {
  id: string;
  title: string;
  description: string;
  status: string;
  columnId: string;
  subtasks?: Subtask[];
};

export type Column = {
  id: string;
  name: string;
  tasks?: Task[];
  boardId: string | null;
};

export type Board = {
  id: string;
  name: string;
  columns: Column[];
  userId?: string;
};

export type HomeContextType = {
  boards: Board[];
  boardSelected: string;
  showSidebar: boolean;
  darkMode: boolean;
  setBoards: React.Dispatch<React.SetStateAction<Board[]>>;
  setBoardSelected: React.Dispatch<React.SetStateAction<string>>;
  setShowSidebar: React.Dispatch<React.SetStateAction<boolean>>;
  setDarkMode: React.Dispatch<React.SetStateAction<boolean>>;
};

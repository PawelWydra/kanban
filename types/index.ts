export type Subtask = {
  title: string;
  isCompleted: boolean;
};

export type ITask = {
  id: string;
  title: string;
  description: string;
  status: string;
  columnId: string;
  subtasks?: Subtask[];
};

export type IColumn = {
  id: string;
  name: string;
  tasks?: ITask[];
  boardId: string | null;
};

export type IBoard = {
  id: string;
  name: string;
  columns: IColumn[];
};

export type HomeContextType = {
  boards: IBoard[];
  boardSelectedId: string;
  showSidebar: boolean;
  darkMode: boolean;
  setBoards: React.Dispatch<React.SetStateAction<IBoard[]>>;
  setBoardSelectedId: React.Dispatch<React.SetStateAction<string>>;
  setShowSidebar: React.Dispatch<React.SetStateAction<boolean>>;
  setDarkMode: React.Dispatch<React.SetStateAction<boolean>>;
};

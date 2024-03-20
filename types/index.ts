export type Subtask = {
  title: string;
  isCompleted: boolean;
};

export type ITask = {
  id: string;
  title: string;
  description: string;
  status: string;
  columnId?: string;
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

export type TaskInfo = {
  active: boolean;
  id: string;
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

export type ModalContextType = {
  addNewBoard: boolean;
  addNewTask: boolean;
  deleteWarning: boolean;
  editBoard: boolean;
  editTask: boolean;
  taskInfo: TaskInfo;
  setAddNewBoard: React.Dispatch<React.SetStateAction<boolean>>;
  setAddNewTask: React.Dispatch<React.SetStateAction<boolean>>;
  setDeleteWarning: React.Dispatch<React.SetStateAction<boolean>>;
  setEditBoard: React.Dispatch<React.SetStateAction<boolean>>;
  setEditTask: React.Dispatch<React.SetStateAction<boolean>>;
  setTaskInfo: React.Dispatch<React.SetStateAction<TaskInfo>>;
};

import { Task } from "@prisma/client";

export enum Type {
  Board = "board",
  Task = "task",
}

export type Subtask = {
  title: string;
  isCompleted: boolean;
};

export interface ITask {
  id: string;
  title: string;
  description: string;
  status: string;
  columnId: string | null;
  subtasks: {
    title: string;
    isCompleted: boolean;
  }[];
}

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

export type EditTask = {
  active: boolean;
  task: Task;
};

export type DeleteModal = {
  type: Type | string;
  title: string;
  id: string;
  active: boolean;
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
  deleteWarning: DeleteModal;
  editBoard: boolean;
  editTask: EditTask;
  taskInfo: TaskInfo;
  setAddNewBoard: React.Dispatch<React.SetStateAction<boolean>>;
  setAddNewTask: React.Dispatch<React.SetStateAction<boolean>>;
  setDeleteWarning: React.Dispatch<React.SetStateAction<DeleteModal>>;
  setEditBoard: React.Dispatch<React.SetStateAction<boolean>>;
  setEditTask: React.Dispatch<React.SetStateAction<EditTask>>;
  setTaskInfo: React.Dispatch<React.SetStateAction<TaskInfo>>;
  closeModal: () => void;
};

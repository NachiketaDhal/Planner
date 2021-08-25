export interface ITask {
  id: string;
  value: string;
  status: string;
}

export interface ITaskProps {
  id: string;
  value: string;
  status?: string;
  draggable?: any;
}

export interface IState {
  tasks: Array<ITask>;
  activeStatus: string;
  inputValue: string;
  edit: boolean;
  editedItem: ITask;
}

export type TStatus = "pending" | "progress" | "done";

export interface IAction {
  type: any;
  payload: any;
}

export interface IGlobalState {
  todo: IState;
}

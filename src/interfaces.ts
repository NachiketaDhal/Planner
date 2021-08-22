export interface ITask {
  id: string;
  value: string;
  status: string;
}

export interface ITaskProps {
  id: string;
  value: string;
  status?: string;
}

export interface IState {
  tasks: Array<ITask>;
  activeStatus: string;
  inputValue: string;
  // filteredTasks: Array<ITask>;
  edit: boolean;
  editedItem: ITask;
}

export interface IAction {
  type: any;
  payload: any;
}

export interface IGlobalState {
  todo: IState;
}

import { TaskStatus } from './enums/task-status';

export interface TaskItem {
  id: number;
  task: string;
  status: TaskStatus;
}

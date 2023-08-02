import { TaskStatus } from 'store/enums/task-status';

export interface TodolistItem {
  id: number;
  task: string;
  status: TaskStatus;
}

import { TodolistItem } from 'models/todolist-item';
import { defineStore } from 'pinia';
import { TaskStatus } from './enums/task-status';

export const useTodolistStore = defineStore('todolist', {
  state: () => {
    return {
      tasks: [] as TodolistItem[],
    };
  },
  actions: {
    addTask(task: string) {
      this.tasks.push({
        id: this.tasks.length + 1,
        task,
        status: TaskStatus.New,
      });
    },
    updateTaskStatus(id: number, status: TaskStatus) {
      const task = this.tasks.find((task) => task.id === id);
      if (task) {
        task.status = status;
      }
    },
    updateTask(id: number, task: string) {
      const taskToUpdate = this.tasks.find((task) => task.id === id);
      if (taskToUpdate) {
        taskToUpdate.task = task;
      }
    },
    removeTask(id: number) {
      this.tasks = this.tasks.filter((task) => task.id !== id);
    },
  },
  getters: {
    tasks: (state) => state.tasks,
  },
});

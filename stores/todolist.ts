import { defineStore } from 'pinia';
import { TaskStatus } from '../enums/task-status';
import { task } from '@prisma/client';

export const useTodolistStore = defineStore('todolist', {
  state: () => {
    return {
      tasks: [] as task[],
    };
  },
  actions: {
    async addTask(task: string, email: string) {
      await $fetch('/api/tasks/create', {
        method: 'POST',
        body: { task },
      });

      this.tasks.push({
        id: this.tasks.length + 1,
        task,
        status: TaskStatus.New,
        email,
      });
    },
    async updateTaskStatus(id: number, status: TaskStatus) {
      const task = this.tasks.find((task) => task.id === id);

      if (task) {
        task.status = status;
        await $fetch('/api/tasks/update', {
          method: 'PUT',
          body: { id, task: task.task, status },
        });
      }
    },
    async updateTask(id: number, task: string) {
      const taskToUpdate = this.tasks.find((task) => task.id === id);
      if (taskToUpdate) {
        taskToUpdate.task = task;
        await $fetch('/api/tasks/update', {
          method: 'PUT',
          body: { id, task, status: taskToUpdate.status },
        });
      }
    },
    async removeTask(id: number) {
      await $fetch('/api/tasks/delete', { method: 'DELETE', body: { id } });
      this.tasks = this.tasks.filter((task) => task.id !== id);
    },
    async loadTasks() {
      const { data } = await useFetch<task[]>('/api/tasks/all');
      this.tasks = data.value || [];
    },
  },
  getters: {
    allTasks: (state) => state.tasks,
  },
});

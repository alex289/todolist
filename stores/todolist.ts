import { task } from '@prisma/client';
import { defineStore } from 'pinia';
import { useToast } from 'vue-toastification';
import { TaskStatus } from '../enums/task-status';

const toast = useToast();
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
        onResponse: (response) => {
          if (response.response.status !== 200) {
            toast.error('Failed to create task');
            return;
          }
          this.tasks.push({
            id: this.tasks.length + 1,
            task,
            status: TaskStatus.New,
            email,
          });
        },
      });
    },
    async updateTaskStatus(id: number, status: TaskStatus) {
      const task = this.tasks.find((task) => task.id === id);

      if (task) {
        await $fetch('/api/tasks/update', {
          method: 'PUT',
          body: { id, task: task.task, status },
          onResponse: (response) => {
            if (response.response.status !== 200) {
              toast.error('Failed to update task status');
              return;
            }
            toast.success('Task status updated');
            task.status = status;
          },
        });
      }
    },
    async updateTask(id: number, task: string) {
      const taskToUpdate = this.tasks.find((task) => task.id === id);
      if (taskToUpdate) {
        await $fetch('/api/tasks/update', {
          method: 'PUT',
          body: { id, task, status: taskToUpdate.status },
          onResponse: (response) => {
            if (response.response.status !== 200) {
              toast.error('Failed to update task');
              return;
            }
            toast.success('Task updated');
            taskToUpdate.task = task;
          },
        });
      }
    },
    async removeTask(id: number) {
      await $fetch('/api/tasks/delete', {
        method: 'DELETE',
        body: { id },
        onResponse: (response) => {
          if (response.response.status !== 200) {
            toast.error('Failed to delete task');
            return;
          }
          this.tasks = this.tasks.filter((task) => task.id !== id);
        },
      });
    },
    async loadTasks() {
      const { data, error } = await useFetch<task[]>('/api/tasks/all');

      if (error.value) {
        toast.error('Failed to load tasks');
        return;
      }
      this.tasks = data.value || [];
    },
  },
  getters: {
    allTasks: (state) => state.tasks,
  },
});

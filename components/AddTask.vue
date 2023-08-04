<script setup lang="ts">
import { useTodolistStore } from '../stores/todolist';

const { data } = useAuth();
const store = useTodolistStore();

const active = useState('active', () => false);
const taskInput = useState('taskInput', () => '');
</script>

<template>
  <div>
    <button
      class="m-4 rounded-lg bg-blue-700 px-5 py-2.5 text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
      type="button"
      @click="active = !active">
      Add Task
    </button>

    <form
      :class="{ hidden: !active }"
      class="fixed inset-0 z-50 flex items-center justify-center bg-gray-700 bg-opacity-75"
      @submit.prevent="
        (event) => {
          store.addTask((event.target as any).task.value, data!.user!.email!);
          active = false;
          taskInput = '';
        }
      ">
      <div class="m-4 flex w-96 flex-col rounded bg-white p-6 dark:bg-gray-800">
        <div class="mb-6">
          <label
            for="task"
            class="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
            >Default input</label
          >
          <input
            id="task"
            name="task"
            type="text"
            placeholder="Enter task"
            v-model="taskInput"
            required
            class="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500" />
        </div>

        <div class="mb-2 flex justify-between">
          <button
            type="button"
            class="mt-6 rounded-lg bg-blue-700 px-5 py-2.5 text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            @click="active = !active">
            Cancel
          </button>

          <button
            type="submit"
            class="mt-6 rounded-lg bg-blue-700 px-5 py-2.5 text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            Save
          </button>
        </div>
      </div>
    </form>
  </div>
</template>

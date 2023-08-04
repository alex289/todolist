<script setup lang="ts">
import { TaskStatus } from '../models/enums/task-status';
import { useTodolistStore } from '../stores/todolist';

const store = useTodolistStore();
</script>

<template>
  <h5
    v-if="store.allTasks.length === 0"
    class="text-center text-xl font-bold dark:text-white">
    No tasks yet!
  </h5>
  <div
    v-for="task in store.allTasks"
    :key="task.id"
    :class="{
      'border-gray-700': task.status === TaskStatus.New,
      'border-blue-800': task.status === TaskStatus.InProgress,
      'border-green-800': task.status === TaskStatus.Done,
    }"
    class="mx-auto mb-6 block max-w-sm rounded-lg border bg-white p-6 shadow dark:bg-gray-800">
    <input
      :value="task.task"
      disabled
      class="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
      @input="
        (event) =>
          store.updateTask(task.id, (event.target as HTMLSelectElement).value)
      " />

    <div class="mb-2 mt-6 flex justify-between">
      <button
        @click="() => store.removeTask(task.id)"
        type="button"
        class="mr-6 rounded-lg bg-red-700 px-5 py-2.5 text-sm font-medium text-white hover:bg-red-800 focus:outline-none focus:ring-4 focus:ring-red-300 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900">
        <Icon name="octicon:trash-24" class="h-5 w-5" />
      </button>

      <select
        class="ml-6 block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
        :value="task.status"
        @input="
          (event) =>
            store.updateTaskStatus(
              task.id,
              Number((event.target as HTMLSelectElement).value) as TaskStatus,
            )
        ">
        <option :value="TaskStatus.New">New</option>
        <option :value="TaskStatus.InProgress">In Progress</option>
        <option :value="TaskStatus.Done">Done</option>
      </select>
    </div>
  </div>
</template>

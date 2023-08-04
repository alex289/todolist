<script setup lang="ts">
import { TaskStatus } from '../models/enums/task-status';
import { useTodolistStore } from '../stores/todolist';

const store = useTodolistStore();
</script>

<template>
  <div>
    <Head><Title>Todolist</Title></Head>

    <button>Add Task</button>

    <div class="hidden">
      <input />
      <button>Save</button>
    </div>

    <div v-for="task in store.allTasks" :key="task.id">
      <button @click="() => store.removeTask(task.id)">Delete</button>

      <select
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

      <input
        :value="task.task"
        @input="
          (event) =>
            store.updateTask(task.id, (event.target as HTMLSelectElement).value)
        " />
    </div>
  </div>
</template>

<script setup lang="ts">
import { TaskStatus } from '../enums/task-status';
const { status } = useAuth();
</script>

<template>
  <div>
    <h5
      v-if="status === 'unauthenticated'"
      class="mt-4 text-center text-xl font-bold dark:text-white">
      Login to see your tasks!
    </h5>

    <div v-if="status === 'authenticated'">
      <AddTask />
      <TaskDisplay :status="TaskStatus.New" show-empty-message />
      <TaskDisplay :status="TaskStatus.InProgress" />
      <TaskDisplay :status="TaskStatus.Done" />
    </div>
  </div>
</template>

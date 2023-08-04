<script setup lang="ts">
const { status } = useAuth();
</script>

<template>
  <div>
    <Head><Title>Todolist</Title></Head>

    <h5
      v-if="status === 'unauthenticated'"
      class="mt-4 text-center text-xl font-bold dark:text-white">
      Login to see your tasks!
    </h5>

    <div v-if="status === 'authenticated'">
      <AddTask />
      <TaskDisplay />
    </div>
  </div>
</template>

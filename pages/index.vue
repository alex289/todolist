<script setup lang="ts">
import { useTodolistStore } from 'store/todolist';

const todolist = useTodolistStore();
</script>

<template>
  <div>
    <Head><Title>Todolist</Title></Head>
    <div class="font-bold">Home</div>
  </div>
</template>

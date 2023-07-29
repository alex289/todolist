<script setup lang="ts">
const { status, signIn, signOut } = useAuth();
</script>

<template>
  <div class="dark:bg-slate-700 dark:text-gray-200">
    {{ status }}
    <slot />
    <button @click="signIn('github', { callbackUrl: '/' })">
      sign in (github)
    </button>
    <button class="ml-4" @click="signOut()">sign out</button>
  </div>
</template>

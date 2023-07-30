<script setup lang="ts">
import { ref } from 'vue';

const { status, data, signIn, signOut } = useAuth();
const isUserMenuOpen = ref(false);
</script>

<template>
  <div>
    <nav class="bg-white border-gray-200 dark:bg-gray-900">
      <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <a href="/" class="flex items-center">
          <img src="https://flowbite.com/docs/images/logo.svg" class="h-8 mr-3" alt="Todolist logo">
          <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Todolist</span>
        </a>
        <div class="flex items-center md:order-2 relative">
          <button v-if="status === 'authenticated'" type="button" class="flex mr-3 text-sm bg-gray-800 rounded-full md:mr-0 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600" @click="isUserMenuOpen = !isUserMenuOpen">
            <img class="w-8 h-8 rounded-full" :src="data?.user?.image ?? 'https://flowbite.com/docs/images/logo.svg'" alt="user photo">
          </button>
          <button v-if="status === 'unauthenticated'" type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800" @click="signIn('github')">
            Sign in
          </button>
          <!-- Dropdown menu -->
          <div v-if="isUserMenuOpen" class="z-50 my-4 text-base list-none bg-white divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-700 dark:divide-gray-600 absolute top-full right-0">
            <div class="px-4 py-3">
              <span class="block text-sm text-gray-900 dark:text-white">{{ data?.user?.name }}</span>
              <span class="block text-sm  text-gray-500 truncate dark:text-gray-400">{{ data?.user?.email }}</span>
            </div>
            <ul class="py-2">
              <li>
                <a href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white" @click="signOut()">Sign out</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>

    <slot />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const { status, data, signIn, signOut } = useAuth();
const isUserMenuOpen = ref(false);
</script>

<template>
  <div>
    <Body class="dark:bg-slate-800"></Body>
    <nav class="border-gray-200 bg-white dark:bg-gray-900">
      <div
        class="mx-auto flex max-w-screen-xl flex-wrap items-center justify-between p-4">
        <a href="/" class="flex items-center">
          <img
            src="https://flowbite.com/docs/images/logo.svg"
            class="mr-3 h-8"
            alt="Todolist logo" />
          <span
            class="self-center whitespace-nowrap text-2xl font-semibold dark:text-white"
            >Todolist</span
          >
        </a>
        <div class="relative flex items-center md:order-2">
          <button
            v-if="status === 'authenticated'"
            type="button"
            class="mr-3 flex rounded-full bg-gray-800 text-sm focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600 md:mr-0"
            @click="isUserMenuOpen = !isUserMenuOpen">
            <img
              class="h-8 w-8 rounded-full"
              :src="
                data?.user?.image ?? 'https://flowbite.com/docs/images/logo.svg'
              "
              alt="user photo" />
          </button>
          <button
            v-if="status === 'unauthenticated'"
            type="button"
            class="mb-2 mr-2 rounded-lg bg-blue-700 px-5 py-2.5 text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            @click="signIn('github')">
            Sign in
          </button>
          <!-- Dropdown menu -->
          <div
            v-if="isUserMenuOpen"
            class="absolute right-0 top-full z-50 my-4 list-none divide-y divide-gray-100 rounded-lg bg-white text-base shadow dark:divide-gray-600 dark:bg-gray-700">
            <div class="px-4 py-3">
              <span class="block text-sm text-gray-900 dark:text-white">{{
                data?.user?.name
              }}</span>
              <span
                class="block truncate text-sm text-gray-500 dark:text-gray-400"
                >{{ data?.user?.email }}</span
              >
            </div>
            <ul class="py-2">
              <li>
                <a
                  href="#"
                  class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-600 dark:hover:text-white"
                  @click="signOut()"
                  >Sign out</a
                >
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>

    <slot />
  </div>
</template>

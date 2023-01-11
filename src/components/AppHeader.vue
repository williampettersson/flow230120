<script setup>
import { Bars3Icon } from "@heroicons/vue/24/outline";
import { RouterLink } from "vue-router";
</script>

<script>
export default {
  data() {
    return {
      sidebarOpen: false,
    };
  },
  methods: {
    toggleSidebar() {
      this.sidebarOpen = !this.sidebarOpen;
    },
  },
};
</script>

<template>
  <header class="z-10">
    <nav class="flex justify-between items-center text-xl font-strong">
      <slot
        ><RouterLink
          to="/"
          class="flex items-center p-1 bg-neutral-900 bg-opacity-75 rounded-lg shadow whitespace-nowrap"
          >TE4</RouterLink
        ></slot
      >
      <div
        class="space-x-8 flex-col right-3 top-9 items-end absolute md:flex-row md:items-center md:static p-1 bg-neutral-900 bg-opacity-75 rounded-lg shadow whitespace-nowrap"
        :class="sidebarOpen ? 'flex' : 'hidden md:flex'"
      >
        <RouterLink
          class="p-1 hover:bg-neutral-800 w-full rounded-lg shadow"
          to="/"
          >Home</RouterLink
        >
        <RouterLink
          class="p-1 hover:bg-neutral-800 w-full rounded-lg shadow"
          to="/wood-ridge"
          >Wood-Ridge</RouterLink
        >
        <RouterLink
          class="p-1 hover:bg-neutral-800 w-full rounded-lg shadow"
          to="/sp-aice"
          >SP-AICE</RouterLink
        >
      </div>
      <button class="w-8 h-8 md:hidden" @click="toggleSidebar">
        <Bars3Icon />
      </button>
    </nav>
  </header>
</template>

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
  <header>
    <nav class="flex justify-between items-center text-xl font-bold">
      <slot><RouterLink to="/">TE4</RouterLink></slot>
      <div
        class="space-x-8 flex-col right-3 top-9 items-end absolute md:flex-row md:static p-1 bg-neutral-900 rounded-lg shadow"
        :class="sidebarOpen ? 'flex' : 'hidden md:flex'"
      >
        <RouterLink class="p-1" to="/">Home</RouterLink>
        <RouterLink class="p-1" to="/wood-ridge">Wood-Ridge</RouterLink>
        <RouterLink class="p-1" to="/sp-aice">SP-AICE</RouterLink>
      </div>
      <button class="w-8 h-8 md:hidden" @click="toggleSidebar">
        <Bars3Icon />
      </button>
    </nav>
  </header>
</template>

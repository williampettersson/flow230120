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
        class="space-x-8 flex-col right-4 top-8 items-end absolute md:flex-row md:static"
        :class="sidebarOpen ? 'flex' : 'hidden md:flex'"
      >
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/wood-ridge">Wood-Ridge</RouterLink>
        <RouterLink to="/sp-aice">SP-AICE</RouterLink>
      </div>
      <button class="w-8 h-8 md:hidden" @click="toggleSidebar">
        <Bars3Icon />
      </button>
    </nav>
  </header>
</template>

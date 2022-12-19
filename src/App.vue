<script setup>
import { RouterView } from "vue-router";
import AppHeader from "./components/AppHeader.vue";
import AppFooter from "./components/AppFooter.vue";
</script>

<template>
  <AppHeader class="flex-grow-0 flex-shrink-0" />
  <main class="flex-grow">
    <RouterView />
  </main>
  <AppFooter class="flex-grow-0 flex-shrink-0" />
</template>

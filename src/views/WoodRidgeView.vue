<script setup>
import AppHeader from "../components/AppHeader.vue";
import { RouterLink } from "vue-router";
</script>

<template>
  <AppHeader class="flex-grow-0 flex-shrink-0"
    ><RouterLink to="/wood-ridge">Wood-Ridge</RouterLink></AppHeader
  >
  <main class="flex-grow">
    <h1>Hello from team Wood-Ridge!</h1>
  </main>
</template>

<script setup>
import { RouterView } from "vue-router";
</script>

<template>
  <header class="flex-grow-0 flex-shrink-0">Header</header>
  <main class="flex-grow">
    <RouterView />
  </main>
  <footer class="flex-grow-0 flex-shrink-0">Footer</footer>
</template>

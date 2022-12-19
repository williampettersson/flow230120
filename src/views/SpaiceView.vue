<script setup>
import AppHeader from "../components/AppHeader.vue";
import { RouterLink } from "vue-router";
</script>

<template>
  <AppHeader class="flex-grow-0 flex-shrink-0"
    ><RouterLink to="/sp-aice">SP-AICE</RouterLink></AppHeader
  >
  <main class="flex-grow">
    <h1>Hello from team Sp-aice!</h1>
  </main>
</template>

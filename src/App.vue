<script setup>
import { RouterView } from "vue-router";
import AppFooter from "./components/AppFooter.vue";
</script>

<template>
  <RouterView />
  <AppFooter class="flex-grow-0 flex-shrink-0" />
</template>

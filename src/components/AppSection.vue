<script setup>
import AppSectionTitle from "./AppSectionTitle.vue";
</script>

<script>
export default {
  props: {
    name: String,
  },
};
</script>

<template>
  <section class="border-white border-2 rounded-lg p-4">
    <AppSectionTitle :name="name" />
    <slot />
  </section>
</template>

<script>
import AppSectionTitle from "./AppSectionTitle.vue";

export default {
  props: {
    name: String,
  },
  components: {
    AppSectionTitle,
  }
};
</script>

<template>
  <section class="shadow-xl bg-slate-700 rounded-lg p-4 space-y-2">
    <AppSectionTitle :name="name" />
    <slot />
  </section>
</template>

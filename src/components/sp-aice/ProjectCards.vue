<script setup>
import AppSection from "../AppSection.vue";
</script>

<script>
export default {
  props: {
    name: String,
    description: String,
    images: Array,
  },
  components: { AppSection },
};
</script>

<template>
  <AppSection>
    <div class="text-center">
      <h2 class="font-bold text-xl">{{ name }}</h2>
      <p class="min-w-[175px] my-2">
        {{ description }}
      </p>
    </div>
    <div class="items-center flex overflow-auto">
      <img v-for="image in images" :src="image" :key="image" class="mx-auto" />
    </div>
  </AppSection>
</template>

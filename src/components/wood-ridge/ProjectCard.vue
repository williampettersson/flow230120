<script setup>
import AppSection from "../AppSection.vue";
</script>

<script>
export default {
  props: {
    name: String,
    description: String,
    githubLink: String,
    images: Array,
  },
  components: { AppSection },
};
</script>

<template>
  <AppSection class="sm:flex">
    <div>
      <a :href="githubLink" class="text-center font-bold text-xl">{{ name }}</a>
      <p class="min-w-[175px] my-2 sm:mr-2">
        {{ description }}
      </p>
    </div>
    <div
      class="h-[410px] items-center sm:flex overflow-auto space-y-4 sm:space-y-0 sm:space-x-4"
    >
      <img v-for="image in images" :src="image" :key="image" class="mx-auto" />
    </div>
  </AppSection>
</template>

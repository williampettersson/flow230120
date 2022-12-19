<script setup>
import GithubIcon from "../icons/GithubIcon.vue";
</script>

<script>
export default {
  props: {
    name: String,
    description: String,
    githubLink: String,
    imageName: String,
  },
};
</script>

<template>
  <div class="border-white border-2 rounded-lg w-[380px] p-4">
    <p class="text-center font-bold text-xl">{{ name }}</p>
    <div class="flex mt-2">
      <img :src="imageName" class="rounded-lg mr-2 w-[150px] h-[150px]" />
      <div class="w-full flex flex-col justify-between">
        <p class="text-center">{{ description }}</p>
        <a
          :href="githubLink"
          class="flex bg-white rounded-lg text-black font-bold items-center w-fit p-1 mx-auto px-2"
          ><GithubIcon class="mr-2" />Github</a
        >
      </div>
    </div>
  </div>
</template>

<script setup>
import GithubIcon from "../icons/GithubIcon.vue";
</script>

<script>
export default {
  props: {
    memberName: String,
    description: String,
    imageName: String,
    imageAlt: String,
    githubLink: String,
  },
};
</script>

<template>
  <div class="w-[340px] mx-auto m-8">
    <div class="w-[100%] h-[100%] rounded-xl border-2 border-white">
      <div class="w-[300px] h-[300px] -mt-8 mx-auto">
        <img
          class="absolute rounded-xl"
          :src="imageName"
          :alt="`${imageAlt}`"
        />
      </div>

      <div class="text-white p-4">
        <p class="text-3xl font-semibold text-center">{{ memberName }}</p>
        <p class="text-center">{{ description }}</p>
        <a
          :href="githubLink"
          class="flex bg-white rounded-lg text-black font-bold w-fit py-1 px-2 mt-3"
          ><GithubIcon class="mr-2" />Github</a
        >
      </div>
    </div>
  </div>
</template>

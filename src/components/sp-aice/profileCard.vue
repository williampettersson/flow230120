<script setup>
import GithubIcon from "../icons/GithubIcon.vue";
</script>

<script>
export default {
  data() {
    return {
      toggled: false,
    };
  },
  methods: {
    flipCard() {
      this.toggled = !this.toggled;
    },
  },
  props: {
    memberName: String,
    description: String,
    imageName: String,
    imageAlt: String,
    summary: String,
    githubLink: String,
  },
};
</script>

<template>
  <div class="w-[340px] mx-auto m-8">
    <div
      class="w-[100%] h-[100%] rounded-xl border-2 border-white"
      
    >
      <div
        class="innerCard cursor-pointer transition transform duration-1000 w-[300px] h-[300px] -mt-8 mx-auto" @click="flipCard"
        :class="toggled ? 'isFlipped' : ''"
      >
        <div class="cardface rounded-xl">
          <img class="absolute" :src="`${imageName}`" :alt="`${imageAlt}`" />
        </div>
        <div
          class="cardface cardfaceBack bg-white h-full rounded-xl text-black p-4 text-center"
        >
          <p>{{ summary }}</p>
          
        </div>
      </div>

      <div class="text-white p-4">
        <p class="text-3xl font-semibold">{{ memberName }}</p>
        <p>{{ description }}</p>
        <a
          :href="githubLink"
          class="flex bg-white rounded-lg text-black font-bold w-fit py-1 px-2 mt-3"
          ><GithubIcon class="mr-2" />Github</a
        >
      </div>
    </div>
  </div>
</template>

<style>
.innerCard {
  transform-style: preserve-3d;
}

.innerCard.isFlipped {
  transform: rotateY(180deg);
}

.cardface {
  backface-visibility: hidden;
  -webkit-backface-visibility: hidden;
}

.cardfaceBack {
  transform: rotateY(180deg);
}
</style>

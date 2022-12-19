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
  },
};
</script>

<template>
  <div class="h-[28rem] w-[360px] mx-auto m-8">
    <div
      class="w-[100%] h-[100%] rounded-xl border-2 border-white"
      @click="flipCard"
    >
      <div
        class="innerCard cursor-pointer transition transform duration-1000 w-[300px] h-[300px] -mt-8 mx-auto"
        :class="toggled ? 'isFlipped' : ''"
      >
        <div class="cardface rounded-xl">
          <img class="absolute" :src="`${imageName}`" :alt="`${imageAlt}`" />
        </div>
        <div
          class="cardface cardfaceBack bg-white h-full rounded-xl text-black p-4"
        >
          <p>{{ summary }}</p>
        </div>
      </div>

      <div class="text-white p-4">
        <p class="text-3xl font-semibold">{{ memberName }}</p>
        <p>{{ description }}</p>
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

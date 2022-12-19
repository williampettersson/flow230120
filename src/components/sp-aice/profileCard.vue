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
  },
};
</script>

<template>
  <div class="h-[28rem] w-[360px] mx-auto text-white">
    <div
      class="w-[100%] h-[100%] relative mt-20 mx-auto rounded-xl border-2 border-white"
      @click="flipCard"
    >
      <div
        class="innerCard cursor-pointer transition transform duration-1000"
        :class="toggled ? 'isFlipped' : ''"
      >
        <div class="cardface bg-red-700 rounded-xl">
          <img
            class="-mt-8 absolute"
            :src="`${imageName}`"
            :alt="`${imageAlt}`"
          />
        </div>
        <div class="cardface cardfaceBack">
          <p>snopp</p>
        </div>
      </div>

      <div>
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
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
  -webkit-backface-visibility: hidden;
}

.cardfaceBack {
  background-color: blue;
  transform: rotateY(180deg);
}
</style>

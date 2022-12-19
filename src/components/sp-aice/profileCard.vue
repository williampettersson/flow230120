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
  props: {},
};
</script>

<template>
  <div class="w-[300px] h-[300px] mx-auto" @click="flipCard">
    <div
      class="innerCard cursor-pointer w-[100%] h-[100%] transition transform duration-1000 relative"
      :class="toggled ? 'isFlipped' : ''"
    >
      <div class="cardface bg-red-700">Axel</div>
      <div class="cardface cardfaceBack">Inte Axel</div>
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

<script setup>
import AppHeader from "../components/AppHeader.vue";
import AppSectionTitle from "../components/AppSectionTitle.vue";
import { RouterLink } from "vue-router";
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
};
</script>
<template>
  <AppHeader class="flex-grow-0 flex-shrink-0"
    ><RouterLink to="/sp-aice">SP-AICE</RouterLink></AppHeader
  >
  <main class="flex-grow">
    <AppSectionTitle name="Team" />

    <div class="card">
      <div
        class="innerCard cursor-pointer"
        :class="toggled ? 'isFlipped' : ''"
        @click="flipCard"
      >
        <div class="cardface cardfaceFront">Axel</div>
        <div class="cardface cardfaceBack">Inte Axel</div>
      </div>
    </div>
  </main>
</template>

<style>
.card {
  margin: 100px auto 0;
  width: 400px;
  height: 600px;
}

.innerCard {
  width: 100%;
  height: 100%;
  transition: transform 1s;
  transform-style: preserve-3d;
  cursor: pointer;
  position: relative;
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

.cardfaceFront {
  background-color: red;
}

.cardfaceBack {
  background-color: blue;
  transform: rotateY(180deg);
}
</style>

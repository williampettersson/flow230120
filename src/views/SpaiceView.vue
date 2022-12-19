<script setup>
import AppHeader from "../components/AppHeader.vue";
import AppSectionTitle from "../components/AppSectionTitle.vue";
import profileCard from "../components/sp-aice/profileCard.vue";
import { RouterLink } from "vue-router";
</script>

<template>
  <AppHeader class="flex-grow-0 flex-shrink-0"
    ><RouterLink to="/sp-aice">SP-AICE</RouterLink></AppHeader
  >
  <main class="flex-grow">
    <AppSectionTitle name="Team" />
    <div class="grid grid-cols-2 w-[50%] mx-auto">
      <profileCard />
      <profileCard />
      <profileCard />
      <profileCard />
    </div>
  </main>
</template>

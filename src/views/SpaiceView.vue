<script setup>
import AppHeader from "../components/AppHeader.vue";
import AppSectionTitle from "../components/AppSectionTitle.vue";
import profileCard from "../components/sp-aice/profileCard.vue";
import axelPicture from "../assets/axel.svg";
import { RouterLink } from "vue-router";
</script>

<template>
  <AppHeader class="flex-grow-0 flex-shrink-0"
    ><RouterLink to="/sp-aice">SP-AICE</RouterLink></AppHeader
  >
  <main class="flex-grow">
    <AppSectionTitle name="Team" />
    <div class="grid grid-cols-2 w-[50%] mx-auto">
      <profileCard
        memberName="Axel"
        description="HEHHEHE"
        :imageName="`${axelPicture}`"
        imageAlt="Picture of member Axel"
      />
      <profileCard />
      <profileCard />
      <profileCard />
    </div>
  </main>
</template>

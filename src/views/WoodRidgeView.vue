<script setup>
import AppHeader from "../components/AppHeader.vue";
import { RouterLink } from "vue-router";
import WoodRidgeIcon from "../components/wood-ridge/icons/WoodRidgeIcon.vue";
import MemberCard from "../components/wood-ridge/MemberCard.vue";
import ProjectCard from "../components/wood-ridge/ProjectCard.vue";
import AppSectionTitle from "../components/AppSectionTitle.vue";
</script>

<template>
  <AppHeader class="flex-grow-0 flex-shrink-0"
    ><RouterLink to="/wood-ridge" class="flex items-center"
      ><WoodRidgeIcon class="mr-2" />Wood-Ridge</RouterLink
    ></AppHeader
  >
  <main class="flex-grow">
    <section class="w-fit space-y-4 mx-auto">
      <AppSectionTitle name="Team" />
      <div
        class="grid grid-flow-row gap-4 sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4"
      >
        <MemberCard
          name="Enok E"
          description="Average M.I.A Guy.
      En commit om dagen är bra för magen!"
          githubLink="https://github.com/Enokek"
          imageName="enok.png"
        />
        <MemberCard
          name="Hampus W"
          description="Historia, träning och tv-spel. Vue3 och Tailwind förgyller livet!"
          githubLink="https://github.com/Hamwa03"
          imageName="hampus.png"
        />
        <MemberCard
          name="Lucas S"
          description="Average Java Enjoyer
      Älskar att programmera och spela datorspel."
          githubLink="https://github.com/Olivoz/"
          imageName="lucas.png"
        />
        <MemberCard
          name="William P"
          description="Tycker om att hänga i skidbacken. Har även blivit ett stort fan av Vue3 & Tailwind CSS"
          githubLink="https://github.com/williampettersson"
          imageName="william.png"
        />
      </div>
    </section>
    <section
      class="space-y-4 mx-auto w-[380px] md:w-[776px] xl:w-[1172px] 2xl:w-[1568px]"
    >
      <h1 class="text-center font-bold underline text-4xl">Projekt</h1>
      <div>
        <ProjectCard
          name="Notes"
          description="Notes är en anteckningsapp byggd med Vue 3, Tailwind CSS, Express och
        Airtable."
          githubLink="https://github.com/Olivoz/Notes-Wood-Ridge"
          :images="[
            'notes/1.png',
            'notes/2.png',
            'notes/3.png',
            'notes/4.png',
            'notes/5.png',
            'notes/6.png',
            'notes/7.png',
            'notes/8.png',
            'notes/9.png',
            'notes/10.png',
            'notes/11.png',
            'notes/12.png',
          ]"
        />
      </div>
    </section>
  </main>
</template>

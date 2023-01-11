<script setup>
import { RouterLink } from "vue-router";
import AppHeader from "../components/AppHeader.vue";
import AppSection from "../components/AppSection.vue";
import WoodRidgeIcon from "../components/wood-ridge/icons/WoodRidgeIcon.vue";
</script>

<template>
  <AppHeader class="flex-grow-0 flex-shrink-0" />
  <main class="flex-grow space-y-8 mt-8 mx-auto md:w-[768px] max-w-full">
    <h1 class="text-center text-4xl font-bold">TE4 Academy</h1>

    <AppSection>
      <p>
        TE4 är en utbildning där vi lär oss om programmering med fokus inom
        informationsteknik med utgång inom mjukvarudesign samt entréprenörskap.
        Med tydliga mål och riktlinjer från kunden tar vi oss framåt i arbetet
        självständigt. Vi är angelägna om att utvecklas och är inte rädda för
        utmaningar. TE4 består av två individuella team om fyra, Wood-Ridge och
        SP-AICE, som arbetar enskilt men kan jobba tillsammans.
      </p></AppSection
    >
    <div class="sm:flex sm:space-x-16">
      <AppSection name="Gemensamma projekt">
        <p>
          Tillsammans har vi i TE4 utvecklat en webbapplikation vid namn: Östra
          Gymnasiets Nobel quiz.
        </p>
      </AppSection>
      <AppSection name="Kompetens" class="mt-8 sm:mt-0">
        <p>
          Kort om vår kompetens på TE4, vi kan jobba självständigt om vi får ett
          tydligt mål att jobba mot, jobba agilt, vi på TE4 är T-shaped,
          (specialisering kommer naturligt). <br /><br />Tekniker vi använder:
        </p>
        <ul class="ml-4 text-white list-disc">
          <li>HTML, CSS, JS</li>
          <li>Vue 3</li>
          <li>Pinia</li>
          <li>Tailwind CSS</li>
          <li>Axios</li>
          <li>Express</li>
          <li>Passport.js</li>
          <li>Bcrypt</li>
          <li>MongoDB</li>
          <li>Git</li>
        </ul>
      </AppSection>
    </div>
    <AppSection name="Våra Team">
      <div class="flex justify-center items-center">
        <RouterLink to="/wood-ridge" class="flex items-center text-2xl"
          ><WoodRidgeIcon class="mr-2" />Wood-Ridge</RouterLink
        >
      </div>
    </AppSection>
  </main>
</template>

<script setup>
import { RouterLink } from "vue-router";
import AppHeader from "../components/AppHeader.vue";
import AppSection from "../components/AppSection.vue";
import WoodRidgeIcon from "../components/wood-ridge/icons/WoodRidgeIcon.vue";
</script>

<template>
  <AppHeader class="flex-grow-0 flex-shrink-0" />
  <main
    class="flex-grow space-y-8 mt-8 mx-auto md:w-[768px] xl:w-[1156px] 2xl:w-[1544px] max-w-full"
  >
    <h1 class="text-center text-4xl font-bold">TE4 Academy</h1>

    <AppSection>
      <p>
        Vi studerar vid Östra Gymnasiet och läser just nu utbildningen TE4.
        Detta är ett fjärde år teknik med fokus inom ininformationsteknik, med
        utgång i mjukvarudesign samt då en åtskild kurs inom entréprenörskap.
        Kurserna är i stora drag inriktade mot programmering. Vad som gäller
        praktik arbetar vi oftast i två olika teams. Generellt för hela TE4 är
        att vi lär oss att arbeta agilt tillsammans med andra och jobbar
        ständigt med att planera och effektivisera vår tid. Vi är även
        transparenta och diskuterar ofta med varandra samt med kunder och
        projektledare för att minska risken för missförstånd.
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

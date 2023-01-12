<script setup>
import { RouterLink } from "vue-router";
import AppHeader from "../components/AppHeader.vue";
import AppSection from "../components/AppSection.vue";
import WoodRidgeIcon from "../components/wood-ridge/icons/WoodRidgeIcon.vue";
import ProjectCard from "../components/wood-ridge/ProjectCard.vue";
import { Disclosure, DisclosureButton, DisclosurePanel } from "@headlessui/vue";
import { ChevronUpIcon } from "@heroicons/vue/20/solid";
import SpaiceIcon from "../components/icons/SpaiceIcon.vue";
import DisclosureComponent from "../components/DisclosureComponent.vue";
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
    <AppSection name="Gemensamma projekt">
      <p>
        Tillsammans har vi i TE4 utvecklat en webbapplikation vid namn: Östra
        Gymnasiets Nobel quiz.
      </p>
      <ProjectCard
        name="Nobel"
        description="Nobel applicationen är ett quiz om nobel som byggdes inför Östra Gymnasiets Nobeltävling 2022."
        githubLink="https://github.com/TE42223/Nobel2022"
        :images="[
          'nobel/1.jpg',
          'nobel/2.jpg',
          'nobel/3.jpg',
          'nobel/4.jpg',
          'nobel/5.jpg',
          'nobel/6.jpg',
          'nobel/7.jpg',
          'nobel/8.jpg',
          'nobel/9.jpg',
        ]"
      />
    </AppSection>
    <AppSection name="Kompetens" class="mt-8 sm:mt-0">
      <p>
        Vi på TE4 är specialiserade inom JavaScript ES6 och duktiga inom HTML5
        och CSS3. Utöver de språken använder vi ramverket Vue 3 för att
        underlätta arbetsprocessen och förbättra kodstrukturen. Vanliga verktyg
        vi använder är Node.js, Visual Studio Code, Git och Github. Utbildningen
        har dessutom förbättrat vår förmåga att anpassa oss till kunder. Vi
        uppskattar att involvera kunder i vår produktutveckling och kommunicera
        för att nå bättre resultat kring slutprodukten.
      </p>

      <Disclosure v-slot="{ open }">
        <DisclosureButton
          class="flex w-full justify-between rounded-lg bg-slate-600 px-4 py-2 text-left text-sm font-medium hover:bg-slate-400"
        >
          <span>Tekniker vi använder</span>
          <ChevronUpIcon
            :class="open ? 'rotate-180 transform' : ''"
            class="h-5 w-5"
          />
        </DisclosureButton>
        <DisclosurePanel class="px-4 pt-4 pb-2 text-sm">
          <DisclosureComponent
            title="HTML5"
            description="Hyper Text Markup Language 5 används för att skapa strukturen för en webbapplikation."
          />
          <DisclosureComponent
            title="CSS3"
            description="Cascading Style Sheet 3 används för att anpassa gränssnitt till applikationen."
          />
          <DisclosureComponent
            title="JavaScript ES6"
            description="JavaScript är det programeringsspråk vi huvudsakligen använder."
          />
          <DisclosureComponent
            title="Vue3"
            description="Vue används för att skapa användargränssnitt för webbapplikationer och bygger på HTML, CSS och JavaScript.
            Vue är komponentbaserat, lätt att komma igång med och lära sig tack vare den omfattande dokumentationen."
          />
          <DisclosureComponent
            title="TailwindCSS"
            description="Tailwind är ett CSS ramverk som används för att underlätta appliceringen av olika stilar genom att sätta färdiga klasser på HTML element."
          />
          <DisclosureComponent
            title="Pinia"
            description="Pinia är ett “store bibliotek” för vue. Det används för att dela ett tillstånd mellan t.ex. komponenter."
          />
          <DisclosureComponent
            title="Axios"
            description="Axios förenklar processen att göra “requests” och ta emot “responses”."
          />
          <DisclosureComponent
            title="Node.js"
            description="Node är en exekveringsmiljö för JavaScript."
          />
          <DisclosureComponent
            title="Express.js"
            description="Express är ett ramverk för Node som har många funktioner för att bygga webbapplikationer som hantera servrar och routes."
          />
          <DisclosureComponent
            title="Passport.js"
            description="Passport är ett mellanprogram för Node som hanterar autentisering.
            Det kan även användas i vilken Expressbaserad webbapplikation som helst.
            Passport stödjer autentisering med användarnamn och lösenord, Google, Facebook med flera."
          />
          <DisclosureComponent
            title="MongoDB"
            description="MongoDB är ett databasprogram som främst är dokument orienterat."
          />
          <DisclosureComponent
            title="Bcrypt"
            description="Detta verktyg används för att kryptera lösenord."
          />
          <DisclosureComponent
            title="Git"
            description="Git är ett versionshanteringsprogram som är Open Source skapat för att hantera allt från stora till små projekt."
          />
          <DisclosureComponent
            title="Figma"
            description="Designverktyg vi ofta använder i planeringsfasen i början av våra projekt. Vi skapar då skisser, prototyper samt testar olika designs och färgteman som kan passa produkten."
          />
        </DisclosurePanel>
      </Disclosure>
    </AppSection>
    <AppSection name="Hur vi arbetar">
      <p>
        Med tydliga mål och riktlinjer kan vi planera noggrant och sedan arbeta
        självständigt med ett agilt arbetssätt för att nå målet. När vi sätter
        upp projekt analyserar vi planeringen för att bestämma optimala tekniker
        och ramverk i relation till uppgiften. Vi delar sedan upp projektet i
        mindre bitar och bearbetar arbetsuppgifterna efter dess prioritet. I
        vårt arbete applicerar vi en metod kallad “Minimal Viable Product”. Det
        innebär en tidig release med precis nog mängd funktioner för att
        produkten ska fungera. Syftet är att kunden då kan ge användarfeedback
        tidigt och validera produktideér för att nå en gemensam förståelse av
        slutprodukten. Vi publicerar våra ändringar i koden på Github med hjälp
        av Git, för att varje person ska kunna ta del av de senaste.
      </p>
    </AppSection>
    <AppSection name="Teams">
      <div class="flex justify-center items-center">
        <div class="bg-slate-500 hover:bg-slate-400 rounded-lg p-2 mx-2 mt-2">
          <RouterLink to="/wood-ridge" class="flex items-center text-2xl">
            <WoodRidgeIcon class="mr-2" />Wood-Ridge</RouterLink
          >
        </div>

        <div class="bg-slate-500 hover:bg-slate-400 rounded-lg p-2 mx-2 mt-2">
          <RouterLink to="/sp-aice" class="flex items-center text-2xl">
            <SpaiceIcon class="mr-2" />SP-AICE</RouterLink
          >
        </div>
      </div>
    </AppSection>
  </main>
</template>

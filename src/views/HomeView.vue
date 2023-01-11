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
          Vi på TE4 är specialiserade inom JavaScript ES6 och duktiga inom HTML5
          och CSS3. Utöver de språken använder vi ramverket Vue 3 för att
          underlätta arbetsprocessen och förbättra kodstrukturen. Vanliga
          verktyg vi använder är Node.js, Visual Studio Code, Git och Github.
          Utbildningen har dessutom förbättrat vår förmåga att anpassa oss till
          kunder. Vi uppskattar att involvera kunder i vår produktutveckling och
          kommunicera för att nå bättre resultat kring slutprodukten.
          <br /><br />Tekniker vi använder:
        </p>
        <ul class="ml-4 text-white list-disc">
          <li>HTML5</li>
          <li>CSS3</li>
          <li>JavaScript ES6</li>
          <li>Vue 3</li>
          <li>Tailwind CSS</li>
          <li>Pinia</li>
          <li>Axios</li>
          <li>Node.js</li>
          <li>Express</li>
          <li>Passport.js</li>
          <li>MongoDB</li>
          <li>Bcrypt</li>
          <li>Git</li>
          <li>Figma</li>
        </ul>
      </AppSection>
    </div>
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
    <AppSection name="Våra Team">
      <div class="flex justify-center items-center">
        <RouterLink to="/wood-ridge" class="flex items-center text-2xl"
          ><WoodRidgeIcon class="mr-2" />Wood-Ridge</RouterLink
        >
      </div>
    </AppSection>
  </main>
</template>

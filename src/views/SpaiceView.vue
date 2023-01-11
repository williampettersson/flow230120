<script setup>
import AppHeader from "../components/AppHeader.vue";
import AppSectionTitle from "../components/AppSectionTitle.vue";
import profileCard from "../components/sp-aice/profileCard.vue";
import axelPicture from "../assets/axel.svg";
import isacPicture from "../assets/isac.svg";
import elliotPicture from "../assets/elliot.svg";
import casperPicture from "../assets/casper.svg";
import { RouterLink } from "vue-router";
import ProjectCard from "../components/wood-ridge/ProjectCard.vue";
</script>

<template>
  <AppHeader class="flex-grow-0 flex-shrink-0"
    ><RouterLink to="/sp-aice">SP-AICE</RouterLink></AppHeader
  >
  <main>
    <AppSectionTitle name="Team" />
    <div
      class="grid grid-flow-row md:grid-cols-2 2xl:grid-cols-4 mx-auto gap-12"
    >
      <profileCard
        memberName="Axel"
        description="Musik är något Axel tycker förgyller livet. Dela gärna med dig vilken musik du gillar och om du själv spelar något instrument."
        :imageName="`${axelPicture}`"
        imageAlt="Picture of member Axel"
        githubLink="https://github.com/axelhagerback"
      />
      <profileCard
        memberName="Isac"
        description="Om du börjar prata  träning med Isac kommer du inte bli av med honom på ett tag"
        :imageName="`${isacPicture}`"
        imageAlt="Picture of member Isac"
        summary="Hej hej jag heter Isac"
        githubLink="https://github.com/isacchr"
      />
      <profileCard
        memberName="Casper"
        description="Casper är norsk, han är dansk, han är lite allt möjligt. Precis som hans intressen och ämnen att diskutera."
        :imageName="`${casperPicture}`"
        imageAlt="Picture of member Casper"
        githubLink="https://github.com/CasperHogstrom"
      />
      <profileCard
        memberName="Elliot"
        description="En bra arbetsplats kan variera för Elliot, antingen kontor eller vid hans hund Milo."
        :imageName="`${elliotPicture}`"
        imageAlt="Picture of member Elliot"
        githubLink="https://github.com/elliotabrahamsson"
      />
    </div>

    <section
      class="space-y-4 mx-auto w-[150px] md:w-[450px] xl:w-[750px] 2xl:w-[1000px] max-w-full"
    >
      <h1 class="text-center font-bold text-4xl">Projekt</h1>
      <ProjectCard
        class="text-center"
        name="Mind Dump"
        description="Mind Dump är en webbapplikation
    som man kan skapa anteckningar för sina behov. Den erbjuder funktioner som att
    ta bort och redigera nuvarande anteckningar."
      />
    </section>
  </main>
</template>

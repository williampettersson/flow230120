<script setup>
import AppHeader from "../components/AppHeader.vue";
import AppSectionTitle from "../components/AppSectionTitle.vue";
import profileCard from "../components/sp-aice/profileCard.vue";
import axelPicture from "../assets/axel.svg";
import isacPicture from "../assets/isac.svg";
import elliotPicture from "../assets/elliot.svg";
import casperPicture from "../assets/casper.svg";
import { RouterLink } from "vue-router";
</script>

<template>
  <AppHeader class="flex-grow-0 flex-shrink-0"
    ><RouterLink to="/sp-aice">SP-AICE</RouterLink></AppHeader
  >
  <main class="flex-grow">
    <AppSectionTitle name="Team" />
    <div class="grid grid-cols-2 w-[50%] mx-auto gap-12">
      <profileCard
        memberName="Axel"
        description="Musik är något Axel tycker förgyller livet. Dela gärna med dig vilken musik du gillar"
        :imageName="`${axelPicture}`"
        imageAlt="Picture of member Axel"
      />
      <profileCard
        memberName="Isac"
        description="Om du börjar prata  träning med Isac kommer du inte bli av med honom på ett tag"
        :imageName="`${isacPicture}`"
        imageAlt="Picture of member Isac"
        summary="Hej hej jag heter Isac"
      />
      <profileCard
        memberName="Casper"
        description="Casper är norsk, han är dansk, han är lite allt möjligt. Precis som hans intressen och ämnen att diskutera."
        :imageName="`${casperPicture}`"
        imageAlt="Picture of member Casper"
      />
      <profileCard
        memberName="Elliot"
        description="En bra arbetsplats kan variera för Elliot, antingen ett kontor eller vid hans hund Milo."
        :imageName="`${elliotPicture}`"
        imageAlt="Picture of member Elliot"
      />
    </div>
  </main>
</template>

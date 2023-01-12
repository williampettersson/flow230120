<script setup>
import { Disclosure, DisclosureButton, DisclosurePanel } from "@headlessui/vue";
import { ChevronUpIcon } from "@heroicons/vue/20/solid";
</script>

<script>
export default {
  props: {
    title: String,
    description: String,
  },
};
</script>

<template>
  <div class="mb-4">
    <Disclosure v-slot="{ open }">
      <DisclosureButton
        class="flex w-full justify-between rounded-lg bg-slate-600 px-4 py-2 text-left text-sm font-medium hover:bg-slate-400"
      >
        <span>{{ title }}</span>
        <ChevronUpIcon
          :class="open ? 'rotate-180 transform' : ''"
          class="h-5 w-5"
        />
      </DisclosureButton>
      <DisclosurePanel class="mx-4 pt-2">{{ description }}</DisclosurePanel>
    </Disclosure>
  </div>
</template>

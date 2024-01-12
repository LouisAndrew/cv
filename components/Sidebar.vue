<script setup lang="ts">
import type { ContactInfo } from "~/types/resume";

const { contactInfo } = defineProps<{
  contactInfo: ContactInfo;
}>();
</script>

<template>
  <div class="sidebar">
    <div class="contact">
      <Subheading>Contact</Subheading>
      <NuxtLink :to="`mailto:${contactInfo.email}`">
        {{ contactInfo.email }}
      </NuxtLink>

      <NuxtLink :to="contactInfo.url" target="_blank">{{
        contactInfo.url
      }}</NuxtLink>
    </div>
  </div>
</template>

<style scoped lang="postcss">
.sidebar {
  @apply w-[30%] flex-nowrap shrink-0 border-solid border-0 border-gray-300 border-l pl-6 flex flex-col mt-28 mb-16;

  .contact {
    @apply flex flex-col space-y-1;
  }

  span,
  a,
  li {
    @apply text-sm font-light tracking-wide;
  }

  :deep(.subheading) {
    @apply !text-xs !mb-2;
  }
}
</style>

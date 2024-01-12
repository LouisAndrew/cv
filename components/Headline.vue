<script setup lang="ts">
import { CONFIG } from "~/config";
import type { HeadlineInfo } from "~/types/resume";

const { headlineInfo } = defineProps<{
  headlineInfo: HeadlineInfo;
}>();
</script>

<template>
  <div class="headline">
    <div class="hero">
      <NuxtImg class="avatar" src="/avatar.jpg" />

      <h1>
        {{ headlineInfo.name }}
      </h1>

      <h2>
        {{ headlineInfo.label }}
      </h2>
    </div>

    <p v-if="CONFIG.DISPLAY_PROFILE_SUMMARY" class="content-body">
      {{ headlineInfo.summary }}
    </p>
  </div>
</template>

<style scoped lang="postcss">
.headline {
  @apply mb-6;

  .hero {
    grid-template-columns: auto 1fr;
    @apply grid grid-rows-2 w-fit gap-x-5 content-end;

    .avatar {
      @apply rounded-full row-start-1 row-span-2 col-start-1 w-24;
    }

    h1 {
      @apply text-3xl font-bold tracking-wider self-end;
    }

    h2 {
      @apply font-light inline-block text-lg;
    }
  }
}
</style>

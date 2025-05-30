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

    <section class="contact">
      <NuxtLink class="sidebar-item" :to="`mailto:${headlineInfo.email}`">
        {{ headlineInfo.email }}
      </NuxtLink>

      <NuxtLink class="sidebar-item" :to="headlineInfo.url" target="_blank">
        {{ headlineInfo.url }}
      </NuxtLink>

      <NuxtLink
        v-for="{ url, network } in headlineInfo.profiles"
        :key="url"
        class="sidebar-item"
        :to="url"
        target="_blank"
      >
        {{ network }}
      </NuxtLink>
    </section>

    <p
      v-if="CONFIG.DISPLAY_PROFILE_SUMMARY"
      class="content-body mt-3 col-span-2"
    >
      {{ headlineInfo.summary }}
    </p>
  </div>
</template>

<style scoped lang="postcss">
.headline {
  grid-template-columns: 1fr auto;
  grid-template-rows: repeat(2, auto);
  @apply mb-4 grid;

  .hero {
    grid-template-columns: auto 1fr;
    @apply grid grid-rows-2 w-fit gap-x-5 content-end;

    .avatar {
      @apply rounded-full row-start-1 row-span-2 col-start-1 w-20;
    }

    h1 {
      @apply text-3xl font-bold tracking-wider self-end;
    }

    h2 {
      @apply font-light inline-block text-lg;
    }
  }

  .contact {
    @apply text-sm flex-col flex items-end;
  }
}
</style>

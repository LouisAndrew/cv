<script setup lang="ts">
import type { Resume } from "~/types/resume";

defineProps<{ resume: Resume }>();
</script>

<template>
  <div class="page">
    <div class="main">
      <Headline :headline-info="resume.basics" />

      <slot />
    </div>
    <slot name="sidebar" />
  </div>
</template>

<style scoped lang="postcss">
.page {
  @apply flex w-[21cm] h-[29.7cm] overflow-hidden p-[1cm] mx-auto my-[1cm]
    border border-solid border-[#d3d3d3] rounded bg-white border-t-4 border-t-black shadow-lg;

  &:last-child {
    @apply break-after-auto;
  }

  @media print {
    & {
      margin: 0;
      border: initial;
      border-radius: initial;
      width: initial;
      min-height: initial;
      box-shadow: initial;
      background: initial;
      page-break-after: always;
    }
  }

  .main {
    @apply w-[70%] pr-8;
  }
}
</style>

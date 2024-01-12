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
  @apply flex;
  width: 21cm;
  height: 29.7cm;
  overflow: hidden;
  padding: 1cm;
  margin: 1cm auto;
  border: 1px #d3d3d3 solid;
  border-radius: 5px;
  background: white;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);

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

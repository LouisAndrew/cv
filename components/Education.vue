<script setup lang="ts">
import type { EducationInfo } from "~/types/resume";

const { education } = defineProps<{ education: EducationInfo }>();
const contentBody = computed(() =>
  ["Score: ", education.score, "\n", education.summary].join(""),
);
</script>

<template>
  <Content
    :heading="education.area"
    :subheading="education.institution"
    :resource-url="education.url"
    :date="{
      start: education.startDate,
      end: education.endDate,
    }"
    :body="contentBody"
    :highlights="[]"
    :location="education.location"
  />
</template>

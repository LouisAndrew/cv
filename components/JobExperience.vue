<script setup lang="ts">
import { CONFIG } from "~/config";
import type { Job } from "~/types/resume";

const { jobExperience } = defineProps<{ jobExperience: Job }>();
const jobSummary = computed(() => {
  if (!CONFIG.DISPLAY_JOB_SUMMARY) {
    return null;
  }

  return jobExperience.summary;
});
</script>

<template>
  <Content
    :heading="jobExperience.position"
    :subheading="jobExperience.name"
    :resourceUrl="jobExperience.url"
    :date="{
      start: jobExperience.startDate,
      end: jobExperience.endDate,
    }"
    :body="jobSummary"
    :highlights="jobExperience.highlights"
    :location="jobExperience.location"
  />
</template>

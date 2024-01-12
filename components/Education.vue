<script setup lang="ts">
import type { EducationInfo } from "~/types/resume";

defineProps<{ education: EducationInfo }>();
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
    :body="education.summary"
    :highlights="[]"
    :location="education.location"
  />
</template>

<script setup lang="ts">
import resume from "./resume.json";
const PAGE_BREAK_AFTER = 3;
</script>

<template>
  <div class="root">
    <PdfPage :resume="resume">
      <template #sidebar>
        <Sidebar
          :contact-info="resume.basics"
          :skill-info="resume.skills"
          :language-info="resume.languages"
          :certification-info="resume.certificates"
          :network-info="resume.basics.profiles"
        />
      </template>

      <Subheading>Work Experience</Subheading>
      <div class="space-y-4">
        <JobExperience
          v-for="(jobExperience, index) in resume.work.slice(
            0,
            PAGE_BREAK_AFTER,
          )"
          :key="`${jobExperience.url}__${index}`"
          :job-experience="jobExperience"
        />
      </div>
    </PdfPage>

    <PdfPage :resume="resume">
      <JobExperience
        v-for="(jobExperience, index) in resume.work.slice(PAGE_BREAK_AFTER)"
        :key="`${jobExperience.url}__${index}`"
        :job-experience="jobExperience"
      />

      <Subheading class="mt-8">Education</Subheading>
      <div class="space-y-4">
        <Education
          v-for="(education, index) in resume.education"
          :key="`${education.url}__${index}`"
          :education="education"
        />
      </div>
    </PdfPage>
  </div>
</template>

<style scoped lang="postcss">
.root {
  @apply flex flex-col items-center w-screen;
}
</style>

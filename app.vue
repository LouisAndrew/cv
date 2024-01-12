<script setup lang="ts">
import resume from "./resume.json";
const PAGE_BREAK_AFTER = 3;
</script>

<template>
  <div class="root">
    <PdfPage :resume="resume">
      <template #sidebar>
        <Sidebar :contact-info="resume.basics" />
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

<style lang="postcss">
* {
  box-sizing: border-box;
  -moz-box-sizing: border-box;
}

body {
  margin: 0;
  padding: 0;
  background-color: #fafafa;
  font: 12pt "Tahoma";
}

@page {
  size: A4;
  margin: 0;
}
</style>

<style lang="postcss">
.root {
  @apply flex flex-col items-center w-screen;
}

.subpage {
  padding: 1cm;
  border: 5px red solid;
  height: 237mm;
  outline: 2cm #ffeaea solid;
}
</style>

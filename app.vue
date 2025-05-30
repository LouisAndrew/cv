<script setup lang="ts">
import SkillsAndCertifications from "./components/SkillsAndCertifications.vue";
import resume from "./resume.json";

useHead({
  title: "Louis Andrew | Resume",
  meta: [
    {
      name: "description",
      content: "Louis Andrew's Resume Site",
    },
  ],
});
</script>

<template>
  <div class="root">
    <PdfPage :resume="resume">
      <Section>
        <template #subheading> Work Experience </template>

        <JobExperience
          v-for="(jobExperience, index) in resume.work"
          :key="`${jobExperience.url}__${index}`"
          :job-experience="jobExperience"
        />
      </Section>

      <Section>
        <template #subheading>Skills & Certifications</template>

        <div class="grid grid-cols-[auto_1fr] gap-x-8 mb-5">
          <SkillsAndCertifications>
            <template #title>Skills</template>

            {{ resume.skills.map((s) => s.name).join(", ") }}
          </SkillsAndCertifications>
          <SkillsAndCertifications>
            <template #title>Languages</template>

            {{
              resume.languages
                .map((s) => `${s.language} (${s.fluency})`)
                .join(", ")
            }}
          </SkillsAndCertifications>
          <SkillsAndCertifications>
            <template #title>Certificates</template>

            <div>
              <span
                class="certificate"
                v-for="({ name, issuer, url }, i) in resume.certificates"
                :key="i"
              >
                <NuxtLink :to="url" target="_blank">
                  {{ name }} ({{ issuer }})</NuxtLink
                >
              </span>
            </div>
          </SkillsAndCertifications>
        </div>
      </Section>

      <Section>
        <template #subheading>Education</template>
        <Education
          v-for="(education, index) in resume.education"
          :key="`${education.url}__${index}`"
          :education="education"
        />
      </Section>
    </PdfPage>
  </div>
</template>

<style scoped lang="postcss">
.root {
  @apply flex flex-col items-center relative;
}

.certificate:not(:first-child):before {
  content: ", ";
}
</style>

<script setup lang="ts">
import type {
  CertificationInfo,
  ContactInfo,
  LanguageInfo,
  NetworkInfo,
  SkillInfo,
} from "~/types/resume";

const { contactInfo, skillInfo, languageInfo, certificationInfo, networkInfo } =
  defineProps<{
    contactInfo: ContactInfo;
    skillInfo: SkillInfo;
    languageInfo: LanguageInfo;
    certificationInfo: CertificationInfo;
    networkInfo: NetworkInfo;
  }>();
</script>

<template>
  <div class="sidebar">
    <section class="contact">
      <Subheading>Contact</Subheading>

      <NuxtLink class="sidebar-item" :to="`mailto:${contactInfo.email}`">
        {{ contactInfo.email }}
      </NuxtLink>

      <NuxtLink class="sidebar-item" :to="contactInfo.url" target="_blank">
        {{ contactInfo.url }}
      </NuxtLink>

      <NuxtLink
        v-for="{ url, network } in networkInfo"
        :key="url"
        class="sidebar-item"
        :to="url"
        target="_blank"
      >
        {{ network }}
      </NuxtLink>
    </section>

    <SidebarSection class="skills" :list-items="skillInfo">
      <template #subheading> Skills </template>

      <template #default="{ item: { name } }">
        {{ name }}
      </template>
    </SidebarSection>

    <SidebarSection class="languages" :list-items="languageInfo">
      <template #subheading> Languages </template>
      <template #default="{ item: { language, fluency } }">
        {{ language }} ({{ fluency }})
      </template>
    </SidebarSection>

    <SidebarSection class="certifications" :list-items="certificationInfo">
      <template #subheading> Certifications </template>
      <template #default="{ item: { name, issuer, url } }">
        <NuxtLink :to="url" target="_blank">
          {{ name }} ({{ issuer }})
        </NuxtLink>
      </template>
    </SidebarSection>
  </div>
</template>

<style scoped lang="postcss">
.sidebar {
  @apply w-[30%] flex-nowrap shrink-0 border-solid border-0 border-gray-300 border-l pl-6 flex flex-col mt-28 mb-16
    space-y-6;

  section {
    @apply flex flex-col space-y-1;

    &.contact a {
      @apply text-sm w-fit;
    }
  }

  :deep(.subheading) {
    @apply !text-xs !mb-1;
  }
}
</style>

<style lang="postcss">
.sidebar-item {
  @apply font-light tracking-wide;
}
</style>

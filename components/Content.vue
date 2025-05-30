<script setup lang="ts">
import type { Content } from "~/types/content";
import { padNumber } from "~/utils";

const { heading, subheading, resourceUrl, body, date, highlights, location } =
  defineProps<Content>();

const formatDate = (dateString?: string) => {
  if (!dateString) return "PRESENT";

  const d = new Date(dateString);
  const year = d.getFullYear();
  if (date.excludeMonth) {
    return year;
  }

  const month = d.getMonth() + 1;
  return `${padNumber(month)}.${year}`;
};

const bodyContent = computed(() => {
  if (!body) {
    return "";
  }
  const urlRegex =
    /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&//=]*)/gi;
  const hasUrl = new RegExp(urlRegex).test(body);

  if (hasUrl) {
    let output = body;
    const matches = body.matchAll(urlRegex);
    for (const match of matches) {
      const [url] = match;
      const link = `<a style="text-decoration: underline;" href="${url}" target="_blank">${url}</a>`;
      output = output.replace(url, link);
    }

    return output;
  }

  return body;
});
</script>

<template>
  <div class="content">
    <h2 class="shrink-0">
      {{ heading }}
    </h2>

    <h3>
      <NuxtLink :to="resourceUrl" target="_blank">
        {{ subheading }}
      </NuxtLink>

      <div class="location-and-date">
        {{ location }} ({{ formatDate(date.start) }} -
        {{ formatDate(date.end) }})
      </div>
    </h3>

    <p v-if="body" class="content-body" v-html="bodyContent" />

    <ul class="mt-2" v-if="highlights.length > 0">
      <li
        v-for="(highlight, index) in highlights"
        :key="index"
        class="content-body"
      >
        {{ highlight }}
      </li>
    </ul>
  </div>
</template>

<style scoped lang="postcss">
.content {
  h2 {
    @apply font-semibold text-base;
  }

  h3 {
    @apply font-light text-sm tracking-widest inline-flex items-center justify-between text-gray-800 flex-wrap w-full;

    a {
      @apply mr-3;
    }

    span {
      @apply text-xs inline-block;
    }
  }

  .location-and-date {
    @apply text-sm font-light text-gray-700 whitespace-nowrap;
  }

  p {
    @apply inline-block mt-3 whitespace-pre-line;
  }
}
</style>

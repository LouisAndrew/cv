<script setup lang="ts">
import type { Content } from "~/types/content";
import { padNumber } from "~/utils";

const { heading, subheading, resourceUrl, body, date, highlights, location } =
  defineProps<Content>();

const formatDate = (dateString?: string) => {
  if (!dateString) return "PRESENT";

  const date = new Date(dateString);
  const month = date.getMonth() + 1;
  const year = date.getFullYear();

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
    <h2>
      {{ heading }}
    </h2>

    <h3>
      <NuxtLink :to="resourceUrl" target="_blank">
        {{ subheading }}
      </NuxtLink>
    </h3>

    <div class="location-and-date">
      {{ location }}
      ({{ formatDate(date.start) }} - {{ formatDate(date.end) }})
    </div>

    <p v-if="body" class="content-body" v-html="bodyContent" />

    <ul v-if="highlights.length > 0">
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
    @apply font-semibold text-lg tracking-widest;
  }

  h3 {
    @apply font-light text-sm tracking-widest inline-flex items-center text-gray-700 flex-wrap;

    a {
      @apply mr-3;
    }

    span {
      @apply text-xs inline-block;
    }
  }

  .location-and-date {
    @apply text-sm font-light text-gray-500;
  }

  p {
    @apply inline-block mt-3 whitespace-pre-line;
  }
}
</style>

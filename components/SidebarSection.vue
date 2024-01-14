<script setup lang="ts" generic="T">
defineProps<{
  listItems: T[];
}>();
</script>

<template>
  <section>
    <Subheading>
      <slot name="subheading" />
    </Subheading>

    <ul>
      <li v-for="(item, i) in listItems" :key="i" class="sidebar-item">
        <slot :item="item" />
      </li>
    </ul>
  </section>
</template>

<style scoped lang="postcss">
ul {
  @apply space-y-1;

  li {
    @apply text-xs;
  }
}
</style>

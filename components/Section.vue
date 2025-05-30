<template>
  <h2>
    <slot name="subheading" />
  </h2>
  <div class="space-y-2 mb-5">
    <slot />
  </div>
</template>

<style scoped lang="postcss">
h2 {
  @apply font-bold text-lg tracking-widest uppercase text-gray-800 inline-block;
}
</style>

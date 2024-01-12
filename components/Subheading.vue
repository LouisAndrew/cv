<template>
  <h2 class="subheading">
    <slot />
  </h2>
</template>

<style scoped lang="postcss">
h2 {
  @apply font-light text-sm uppercase text-gray-800 tracking-[.3rem] inline-block mb-1;
}
</style>

<script setup>
import { computed } from "vue";
import { RouterView, useRoute } from "vue-router";
const route = useRoute();
const layout = computed(() => {
  return route.meta.layout;
});
</script>

<template>
  <component :is="layout">
    <RouterView />
  </component>
</template>

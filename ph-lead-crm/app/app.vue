<!-- app/app.vue -->
<script setup lang="ts">
// Global page head settings or meta tags can go here if needed
</script>

<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<!-- Unscoped global styles for reset -->
<style>
*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

html,
body {
  width: 100%;
  min-height: 100vh;
  background-color: #020617;
  color: #f8fafc;
  font-family:
    system-ui,
    -apple-system,
    BlinkMacSystemFont,
    "Segoe UI",
    Roboto,
    Oxygen,
    Ubuntu,
    Cantarell,
    sans-serif;
  overflow-x: hidden;
}
</style>

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
  /* background-color should probably be #f8fafc to match the new light theme body, 
     while the header and footer provide the dark accents. I will set it to light. */
  background-color: #f8fafc;
  color: #0f172a;
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

  /* ❌ REMOVE THIS LINE BELOW ❌ */
  /* overflow-x: hidden; */

  /* ✅ ADD THIS LINE BELOW INSTEAD ✅ */
  overflow-x: visible; /* CSS default, ensures sticky works */
}
</style>

<!-- app/app.vue -->
<script setup lang="ts">
// Global page head settings or meta tags can go here if needed
</script>

<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<!-- Unscoped global styles for reset and typography -->
<style>
:root {
  --font-sans:
    "Plus Jakarta Sans", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    sans-serif;
  --font-display: "Outfit", var(--font-sans);
}

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
  background-color: #f8fafc;
  color: #0f172a;
  font-family: var(--font-sans);
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  overflow-x: visible;
}

/* Make headings automatically use the high-impact display font */
h1,
h2,
h3,
h4,
h5,
h6 {
  font-family: var(--font-display);
}

/* Ensure interactive controls inherit font settings */
button,
input,
select,
textarea {
  font-family: inherit;
}
</style>

<!-- app/layouts/default.vue -->
<template>
  <div :class="$style.layout">
    <LandingHeader />
    <main :class="$style.mainContent">
      <slot />
    </main>
    <LandingFooter />
  </div>
</template>

<style module>
.layout {
  min-height: 100vh;
  width: 100%;
  background-color: #f8fafc;
  color: #0f172a;
}

.mainContent {
  width: 100%;
  min-height: calc(
    100vh - 80px
  ); /* Keeps footer at bottom without flex wrapper issues */
}
</style>

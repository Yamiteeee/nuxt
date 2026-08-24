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
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  width: 100%;
  max-width: 100vw;
  background-color: #020617;
  color: #f8fafc;
  overflow-x: hidden;
}

.mainContent {
  flex: 1;
  width: 100%;
}
</style>

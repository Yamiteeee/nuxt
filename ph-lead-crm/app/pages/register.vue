<!-- app/pages/register.vue -->
<script setup>
import { ref } from "vue";

const email = ref("");
const isSubmitted = ref(false);

const handleSubscribe = () => {
  if (email.value.trim()) {
    isSubmitted.value = true;
    email.value = "";
  }
};
</script>

<template>
  <div :class="$style.pageWrapper">
    <!-- Background Gradient Glows -->
    <div :class="$style.glowTop"></div>
    <div :class="$style.glowBottom"></div>

    <main :class="$style.card">
      <!-- Logo Component -->
      <div :class="$style.logoContainer">
        <LandingLogo size="48px" />
      </div>

      <!-- Badge -->
      <div :class="$style.badge">
        <span :class="$style.badgeDot"></span>
        <span>Early Access</span>
      </div>

      <!-- Main Headline -->
      <h1 :class="$style.title">
        Registration is <span :class="$style.gradientText">Coming Soon</span>
      </h1>

      <p :class="$style.subtitle">
        We are currently building the registration portal.
      </p>

      <!-- Back Link -->
      <NuxtLink to="/" :class="$style.backLink">
        <Icon name="lucide:arrow-left" size="16" />
        <span>Return to Homepage</span>
      </NuxtLink>
    </main>
  </div>
</template>

<style module>
.pageWrapper {
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1.5rem;
  background-color: #0f172a;
  color: #f8fafc;
  position: relative;
  overflow: hidden;
  font-family:
    "Outfit",
    system-ui,
    -apple-system,
    sans-serif;
}

/* Background Ambient Glows */
.glowTop {
  position: absolute;
  top: -10%;
  left: 50%;
  transform: translateX(-50%);
  width: 500px;
  height: 500px;
  background: radial-gradient(
    circle,
    rgba(34, 197, 94, 0.15) 0%,
    rgba(15, 23, 42, 0) 70%
  );
  pointer-events: none;
}

.glowBottom {
  position: absolute;
  bottom: -10%;
  right: 10%;
  width: 400px;
  height: 400px;
  background: radial-gradient(
    circle,
    rgba(6, 182, 212, 0.12) 0%,
    rgba(15, 23, 42, 0) 70%
  );
  pointer-events: none;
}

/* Glassmorphic Card */
.card {
  position: relative;
  z-index: 10;
  width: 100%;
  max-width: 520px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: 3rem 2rem;
  background: rgba(30, 41, 59, 0.7);
  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 1.5rem;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
}

.logoContainer {
  margin-bottom: 2rem;
}

/* Early Access Badge */
.badge {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.375rem 0.875rem;
  border-radius: 9999px;
  background: rgba(34, 197, 94, 0.1);
  border: 1px solid rgba(34, 197, 94, 0.25);
  color: #4ade80;
  font-size: 0.875rem;
  font-weight: 600;
  margin-bottom: 1.5rem;
}

.badgeDot {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background-color: #22c55e;
  box-shadow: 0 0 8px #22c55e;
}

/* Headings */
.title {
  font-size: 2.25rem;
  font-weight: 800;
  line-height: 1.2;
  letter-spacing: -0.02em;
  margin-bottom: 1rem;
}

.gradientText {
  background: linear-gradient(135deg, #22c55e 0%, #06b6d4 100%);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
}

.subtitle {
  font-size: 1rem;
  line-height: 1.6;
  color: #94a3b8;
  margin-bottom: 2rem;
}

/* Form Styles */
.form {
  width: 100%;
  margin-bottom: 1.5rem;
}

.inputGroup {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  width: 100%;
}

@media (min-width: 480px) {
  .inputGroup {
    flex-direction: row;
  }
}

.input {
  flex: 1;
  padding: 0.875rem 1.25rem;
  border-radius: 0.75rem;
  background: rgba(15, 23, 42, 0.6);
  border: 1px solid rgba(255, 255, 255, 0.12);
  color: #ffffff;
  font-size: 0.95rem;
  outline: none;
  transition:
    border-color 0.2s ease,
    box-shadow 0.2s ease;
}

.input:focus {
  border-color: #22c55e;
  box-shadow: 0 0 0 3px rgba(34, 197, 94, 0.15);
}

.input::placeholder {
  color: #64748b;
}

.button {
  padding: 0.875rem 1.5rem;
  border-radius: 0.75rem;
  background: linear-gradient(135deg, #22c55e 0%, #06b6d4 100%);
  color: #0f172a;
  font-weight: 700;
  font-size: 0.95rem;
  border: none;
  cursor: pointer;
  transition:
    transform 0.2s ease,
    opacity 0.2s ease;
  white-space: nowrap;
}

.button:hover {
  opacity: 0.92;
  transform: translateY(-1px);
}

/* Success State */
.successMessage {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding: 1rem 1.25rem;
  border-radius: 0.75rem;
  background: rgba(34, 197, 94, 0.1);
  border: 1px solid rgba(34, 197, 94, 0.3);
  color: #4ade80;
  font-size: 0.925rem;
  margin-bottom: 1.5rem;
}

.successIcon {
  flex-shrink: 0;
}

/* Back Link */
.backLink {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  color: #64748b;
  font-size: 0.875rem;
  font-weight: 500;
  text-decoration: none;
  transition: color 0.2s ease;
}

.backLink:hover {
  color: #f8fafc;
}
</style>

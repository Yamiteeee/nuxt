<!-- app/components/landing/Header.vue -->
<script setup>
import { ref } from "vue";
import Logo from "./Logo.vue";

const isMobileMenuOpen = ref(false);

const toggleMobileMenu = () => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value;
};
</script>

<template>
  <header :class="$style.header">
    <div :class="$style.container" data-aos="fade-down" data-aos-duration="600">
      <!-- Brand Logo -->
      <Logo size="32px" />

      <!-- Desktop Nav Links -->
      <nav :class="$style.desktopNav">
        <NuxtLink to="#how-it-works" :class="$style.navLink"
          >How It Works</NuxtLink
        >
        <NuxtLink to="#pricing" :class="$style.navLink">Pricing</NuxtLink>
        <NuxtLink to="#contact" :class="$style.navLink">Contact</NuxtLink>
      </nav>

      <!-- Desktop CTA Buttons -->
      <div :class="$style.desktopActions">
        <NuxtLink to="/login" :class="$style.loginBtn"> Log In </NuxtLink>
        <NuxtLink to="/register" :class="$style.signupBtn">
          <span>Get Started</span>
          <Icon name="lucide:arrow-right" :class="$style.btnIcon" />
        </NuxtLink>
      </div>

      <!-- Mobile Hamburger / Close Button -->
      <button
        type="button"
        :class="$style.mobileMenuBtn"
        @click="toggleMobileMenu"
        :aria-expanded="isMobileMenuOpen"
        aria-label="Toggle Navigation Menu"
      >
        <Icon
          :name="isMobileMenuOpen ? 'lucide:x' : 'lucide:menu'"
          :class="$style.menuToggleIcon"
        />
      </button>
    </div>

    <!-- Mobile Menu Drawer -->
    <div
      :class="[$style.mobileMenu, isMobileMenuOpen && $style.mobileMenuVisible]"
    >
      <nav :class="$style.mobileNav">
        <NuxtLink
          to="#how-it-works"
          :class="$style.mobileNavLink"
          @click="isMobileMenuOpen = false"
        >
          How It Works
        </NuxtLink>
        <NuxtLink
          to="#pricing"
          :class="$style.mobileNavLink"
          @click="isMobileMenuOpen = false"
        >
          Pricing
        </NuxtLink>
        <NuxtLink
          to="#contact"
          :class="$style.mobileNavLink"
          @click="isMobileMenuOpen = false"
        >
          Contact
        </NuxtLink>
        <div :class="$style.mobileActions">
          <NuxtLink
            to="/login"
            :class="$style.loginBtn"
            @click="isMobileMenuOpen = false"
          >
            Log In
          </NuxtLink>
          <NuxtLink
            to="/register"
            :class="$style.signupBtn"
            @click="isMobileMenuOpen = false"
          >
            <span>Get Started</span>
            <Icon name="lucide:arrow-right" :class="$style.btnIcon" />
          </NuxtLink>
        </div>
      </nav>
    </div>
  </header>
</template>

<style module>
.header {
  position: sticky;
  top: 0;
  z-index: 50;
  width: 100%;
  background-color: rgba(2, 6, 23, 0.85);
  backdrop-filter: blur(12px);
  border-bottom: 1px solid #1e293b;
}

.container {
  max-width: 64rem;
  margin: 0 auto;
  padding: 1rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

/* Desktop Nav */
.desktopNav {
  display: none;
  align-items: center;
  gap: 2rem;
}

.navLink {
  color: #94a3b8;
  text-decoration: none;
  font-size: 0.875rem;
  font-weight: 500;
  transition: color 0.2s ease;
}

.navLink:hover {
  color: #ffffff;
}

.desktopActions {
  display: none;
  align-items: center;
  gap: 1rem;
}

.loginBtn {
  color: #cbd5e1;
  text-decoration: none;
  font-size: 0.875rem;
  font-weight: 600;
  padding: 0.5rem 1rem;
  transition: color 0.2s ease;
  display: inline-flex;
  align-items: center;
  justify-content: center;
}

.loginBtn:hover {
  color: #ffffff;
}

.signupBtn {
  background-color: #10b981;
  color: #020617;
  text-decoration: none;
  font-size: 0.875rem;
  font-weight: 700;
  padding: 0.5rem 1.25rem;
  border-radius: 0.5rem;
  transition: background-color 0.2s ease;
  display: inline-flex;
  align-items: center;
  gap: 0.375rem;
}

.signupBtn:hover {
  background-color: #34d399;
}

.btnIcon {
  font-size: 1rem;
}

/* Mobile Toggle Button */
.mobileMenuBtn {
  display: flex;
  align-items: center;
  justify-content: center;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0.25rem;
  color: #f8fafc;
}

.menuToggleIcon {
  font-size: 1.5rem;
}

/* Mobile Nav Drawer */
.mobileMenu {
  display: none;
  background-color: #020617;
  border-bottom: 1px solid #1e293b;
  padding: 1.5rem 1rem;
}

.mobileMenuVisible {
  display: block;
}

.mobileNav {
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
}

.mobileNavLink {
  color: #cbd5e1;
  text-decoration: none;
  font-size: 1rem;
  font-weight: 500;
}

.mobileActions {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  margin-top: 1rem;
  padding-top: 1rem;
  border-top: 1px solid #1e293b;
}

/* Breakpoints */
@media (min-width: 768px) {
  .desktopNav,
  .desktopActions {
    display: flex;
  }

  .mobileMenuBtn,
  .mobileMenu {
    display: none !important;
  }
}
</style>

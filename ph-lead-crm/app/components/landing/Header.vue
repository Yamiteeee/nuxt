<!-- app/components/landing/Header.vue -->
<script setup>
import { ref, watch } from "vue";
import Logo from "./Logo.vue";

const isMobileMenuOpen = ref(false);

const toggleMobileMenu = () => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value;
};

// Prevent page background scroll when mobile menu is open
watch(isMobileMenuOpen, (isOpen) => {
  if (typeof window !== "undefined") {
    document.body.style.overflow = isOpen ? "hidden" : "";
  }
});
</script>

<template>
  <header :class="$style.header">
    <div :class="$style.container" data-aos="fade-down" data-aos-duration="600">
      <!-- Brand Logo -->
      <Logo size="32px" />

      <!-- Desktop Nav Links -->
      <nav :class="$style.desktopNav">
        <a href="#how-it-works" :class="$style.navLink">How It Works</a>
        <a href="#pricing" :class="$style.navLink">Pricing</a>
        <a href="#contact" :class="$style.navLink">Contact</a>
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

    <!-- Mobile Menu Drawer (Fixed Overlay to Prevent Layout Lock) -->
    <Transition name="fade-slide">
      <div v-if="isMobileMenuOpen" :class="$style.mobileMenu">
        <nav :class="$style.mobileNav">
          <a
            href="#how-it-works"
            :class="$style.mobileNavLink"
            @click="isMobileMenuOpen = false"
          >
            How It Works
          </a>
          <a
            href="#pricing"
            :class="$style.mobileNavLink"
            @click="isMobileMenuOpen = false"
          >
            Pricing
          </a>
          <a
            href="#contact"
            :class="$style.mobileNavLink"
            @click="isMobileMenuOpen = false"
          >
            Contact
          </a>
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
    </Transition>
  </header>
</template>

<style module>
.header {
  position: sticky;
  top: 0;
  z-index: 100;
  width: 100%;
  background-color: rgba(15, 23, 42, 0.9);
  backdrop-filter: blur(12px);
  border-bottom: 1px solid #1e293b;
}

.container {
  max-width: 64rem;
  margin: 0 auto;
  padding: 1rem 1.5rem;
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
  color: #cbd5e1;
  text-decoration: none;
  font-size: 0.875rem;
  font-weight: 500;
  transition: color 0.2s ease;
}

.navLink:hover {
  color: #22c55e;
}

.desktopActions {
  display: none;
  align-items: center;
  gap: 1rem;
}

.loginBtn {
  color: #f8fafc;
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
  color: #22c55e;
}

.signupBtn {
  background: linear-gradient(135deg, #22c55e 0%, #16a34a 100%);
  color: #ffffff;
  text-decoration: none;
  font-size: 0.875rem;
  font-weight: 700;
  padding: 0.5rem 1.25rem;
  border-radius: 0.5rem;
  transition:
    transform 0.2s ease,
    opacity 0.2s ease;
  display: inline-flex;
  align-items: center;
  gap: 0.375rem;
  box-shadow: 0 4px 12px rgba(34, 197, 94, 0.3);
}

.signupBtn:hover {
  opacity: 0.95;
  transform: translateY(-1px);
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

/* Mobile Nav Drawer overlay fixed position */
.mobileMenu {
  position: absolute;
  top: 100%;
  left: 0;
  right: 0;
  background-color: rgba(15, 23, 42, 0.98);
  border-bottom: 1px solid #1e293b;
  padding: 1.5rem;
  backdrop-filter: blur(16px);
  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.3);
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

.mobileNavLink:hover {
  color: #22c55e;
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

<!-- app/components/landing/Footer.vue -->
<script setup>
import Logo from "./Logo.vue";
</script>

<template>
  <footer :class="$style.footer">
    <div :class="$style.container" data-aos="fade-up">
      <div :class="$style.grid">
        <!-- Brand Info -->
        <div :class="$style.brandCol">
          <Logo size="32px" />
          <p :class="$style.brandDesc">
            Simple lead capture and instant notification workflow for local
            Philippine caterers, photographers, cake makers, and event vendors.
          </p>
        </div>

        <!-- Links Column 1 -->
        <div :class="$style.linkCol">
          <div :class="$style.colTitle">Product</div>
          <ul :class="$style.linkList">
            <li>
              <NuxtLink to="#how-it-works" :class="$style.link">
                How It Works
              </NuxtLink>
            </li>
            <li>
              <NuxtLink to="#pricing" :class="$style.link"> Pricing </NuxtLink>
            </li>
            <li>
              <NuxtLink to="#contact" :class="$style.link">
                Contact Support
              </NuxtLink>
            </li>
          </ul>
        </div>

        <!-- Links Column 2 -->
        <div :class="$style.linkCol">
          <div :class="$style.colTitle">Account</div>
          <ul :class="$style.linkList">
            <li>
              <NuxtLink to="/login" :class="$style.link">
                Vendor Log In
              </NuxtLink>
            </li>
            <li>
              <NuxtLink to="/register" :class="$style.link">
                Sign Up Free
              </NuxtLink>
            </li>
          </ul>
        </div>
      </div>

      <!-- Bottom Bar -->
      <div :class="$style.bottomBar">
        <div :class="$style.copyright">
          © {{ new Date().getFullYear() }} InquiryTracker PH. All rights
          reserved.
        </div>
        <div :class="$style.locationTag">
          <span>🇵🇭</span> Made with
          <Icon name="lucide:heart" :class="$style.heartIcon" />
          for PH Local Businesses
        </div>
      </div>
    </div>
  </footer>
</template>

<style module>
.footer {
  background-color: #020617;
  border-top: 1px solid #1e293b;
  padding: 4rem 1rem 2rem 1rem;
}

.container {
  max-width: 64rem;
  margin: 0 auto;
}

.grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 2.5rem;
  margin-bottom: 3.5rem;
}

@media (min-width: 768px) {
  .grid {
    grid-template-columns: 2fr 1fr 1fr;
  }
}

/* Brand */
.brandCol {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.brandDesc {
  color: #64748b;
  font-size: 0.875rem;
  line-height: 1.6;
  max-width: 24rem;
}

/* Link Columns */
.linkCol {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.colTitle {
  color: #f8fafc;
  font-size: 0.875rem;
  font-weight: 700;
}

.linkList {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

.link {
  color: #94a3b8;
  text-decoration: none;
  font-size: 0.875rem;
  transition: color 0.2s ease;
}

.link:hover {
  color: #34d399;
}

/* Bottom Bar */
.bottomBar {
  border-top: 1px solid #1e293b;
  padding-top: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
}

@media (min-width: 640px) {
  .bottomBar {
    flex-direction: row;
  }
}

.copyright {
  color: #64748b;
  font-size: 0.8125rem;
}

.locationTag {
  display: flex;
  align-items: center;
  gap: 0.375rem;
  color: #64748b;
  font-size: 0.8125rem;
}

.heartIcon {
  font-size: 0.875rem;
  color: #ef4444;
  display: inline-block;
}
</style>

<!-- app/components/landing/Hero.vue -->
<script setup></script>

<template>
  <section :class="$style.hero">
    <div :class="$style.container">
      <!-- Tag Badge -->
      <div :class="$style.badge" data-aos="fade-down" data-aos-delay="100">
        <Icon name="twemoji:flag-philippines" :class="$style.flagIcon" />
        <span>Built for PH Caterers, Photographers & Event Vendors</span>
      </div>

      <!-- Main Headline -->
      <h1 :class="$style.title" data-aos="fade-up" data-aos-delay="200">
        Turn lost <span :class="$style.highlight">"PM Sent"</span> inquiries
        into paid bookings.
      </h1>

      <!-- Short, Punchy Subtitle -->
      <p :class="$style.subtitle" data-aos="fade-up" data-aos-delay="300">
        One bio link to capture event dates, budgets, and contact info—not
        clutter. Reply directly on Viber or WhatsApp in seconds.
      </p>

      <!-- Action Buttons -->
      <div :class="$style.actions" data-aos="fade-up" data-aos-delay="400">
        <NuxtLink to="/register" :class="[$style.btn, $style.btnPrimary]">
          <span>Start Free — 20 Leads/mo</span>
          <Icon name="lucide:arrow-right" :class="$style.btnIcon" />
        </NuxtLink>
        <a href="#how-it-works" :class="[$style.btn, $style.btnSecondary]">
          <span>See How It Works</span>
        </a>
      </div>

      <!-- Micro Trust Metrics -->
      <div :class="$style.trustRow" data-aos="fade-up" data-aos-delay="500">
        <div :class="$style.trustItem">
          <Icon name="lucide:zap" :class="$style.trustIcon" />
          <span>60-Sec Setup</span>
        </div>
        <div :class="$style.trustDivider">•</div>
        <div :class="$style.trustItem">
          <Icon name="lucide:shield-check" :class="$style.trustIcon" />
          <span>No Credit Card</span>
        </div>
        <div :class="$style.trustDivider">•</div>
        <div :class="$style.trustItem">
          <Icon name="lucide:smartphone" :class="$style.trustIcon" />
          <span>Viber & FB Ready</span>
        </div>
      </div>
    </div>
  </section>
</template>

<style module>
.hero {
  min-height: calc(100vh - 65px);
  min-height: calc(100dvh - 65px);
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 3rem 1rem;
  box-sizing: border-box;
  overflow: hidden;
  position: relative;
  background: radial-gradient(
    circle at 50% 30%,
    rgba(52, 211, 153, 0.15),
    transparent 70%
  );
}

.container {
  max-width: 52rem;
  width: 100%;
  margin: 0 auto;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

/* Badge */
.badge {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.35rem 0.85rem;
  border-radius: 9999px;
  background-color: rgba(16, 185, 129, 0.1);
  border: 1px solid rgba(16, 185, 129, 0.25);
  color: #34d399;
  font-size: 0.8125rem;
  font-weight: 600;
  margin-bottom: 1.5rem;
}

.flagIcon {
  font-size: 1rem;
}

/* Typography */
.title {
  font-size: 2.25rem;
  font-weight: 900;
  letter-spacing: -0.03em;
  color: #ffffff;
  line-height: 1.15;
  margin-bottom: 1.25rem;
}

@media (min-width: 768px) {
  .title {
    font-size: 3.5rem;
  }
}

.highlight {
  background: linear-gradient(135deg, #34d399 0%, #06b6d4 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.subtitle {
  font-size: 1.0625rem;
  line-height: 1.55;
  color: #94a3b8;
  max-width: 38rem;
  margin-bottom: 2rem;
}

@media (min-width: 768px) {
  .subtitle {
    font-size: 1.1875rem;
  }
}

/* Actions */
.actions {
  display: flex;
  flex-direction: column;
  gap: 0.875rem;
  width: 100%;
  max-width: 26rem;
  margin-bottom: 2.5rem;
}

@media (min-width: 640px) {
  .actions {
    flex-direction: row;
    max-width: none;
    justify-content: center;
  }
}

.btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  font-weight: 700;
  padding: 0.875rem 1.5rem;
  border-radius: 0.75rem;
  font-size: 0.9375rem;
  text-decoration: none;
  box-sizing: border-box;
  transition: all 0.2s ease;
}

.btnPrimary {
  background: linear-gradient(135deg, #10b981 0%, #059669 100%);
  color: #020617;
  box-shadow: 0 8px 20px -4px rgba(16, 185, 129, 0.4);
}

.btnPrimary:hover {
  background: linear-gradient(135deg, #34d399 0%, #10b981 100%);
  transform: translateY(-1px);
}

.btnSecondary {
  background-color: #0f172a;
  color: #cbd5e1;
  border: 1px solid #1e293b;
}

.btnSecondary:hover {
  background-color: #1e293b;
  color: #ffffff;
}

.btnIcon {
  font-size: 1rem;
}

/* Trust Bar */
.trustRow {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  gap: 0.75rem;
  color: #64748b;
  font-size: 0.8125rem;
  font-weight: 600;
}

.trustItem {
  display: flex;
  align-items: center;
  gap: 0.375rem;
}

.trustIcon {
  font-size: 0.9375rem;
  color: #34d399;
}

.trustDivider {
  color: #334155;
  display: none;
}

@media (min-width: 640px) {
  .trustDivider {
    display: inline;
  }
}
</style>

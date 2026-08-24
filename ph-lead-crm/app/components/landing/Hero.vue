<!-- app/components/landing/Hero.vue -->
<template>
  <section :class="$style.hero">
    <div :class="$style.container">
      <!-- Tag Badge -->
      <div :class="$style.badge" data-aos="fade-down" data-aos-delay="100">
        <Icon name="twemoji:flag-philippines" :class="$style.flagIcon" />
        <span>Built for Local PH Vendors & Caterers</span>
      </div>

      <!-- Main Headline -->
      <h1 :class="$style.title" data-aos="fade-up" data-aos-delay="200">
        Tired of losing
        <span :class="$style.highlight">"PM Sent"</span>
        leads in your FB & IG inbox?
      </h1>

      <!-- Subtitle -->
      <p :class="$style.subtitle" data-aos="fade-up" data-aos-delay="300">
        Turn social media inquiries into booked deals. Put one custom link in
        your bio, capture structured customer details, and reply instantly via
        Viber or WhatsApp.
      </p>

      <!-- Action Buttons -->
      <div :class="$style.actions" data-aos="fade-up" data-aos-delay="400">
        <a href="#pricing" :class="[$style.btn, $style.btnPrimary]">
          Get Started for Free (20 Leads/mo)
        </a>
        <a href="#how-it-works" :class="[$style.btn, $style.btnSecondary]">
          <span>See How It Works</span>
          <Icon name="lucide:arrow-down" :class="$style.btnIcon" />
        </a>
      </div>

      <!-- Micro Trust Metrics -->
      <div :class="$style.trustRow" data-aos="fade-up" data-aos-delay="500">
        <div :class="$style.trustItem">
          <Icon name="lucide:zap" :class="$style.trustIcon" />
          <span>Setup in 60 seconds</span>
        </div>
        <div :class="$style.trustDivider">•</div>
        <div :class="$style.trustItem">
          <Icon name="lucide:credit-card" :class="$style.trustIcon" />
          <span>No Credit Card Needed</span>
        </div>
        <div :class="$style.trustDivider">•</div>
        <div :class="$style.trustItem">
          <Icon name="lucide:smartphone" :class="$style.trustIcon" />
          <span>Mobile-Optimized</span>
        </div>
      </div>
    </div>
  </section>
</template>

<style module>
.hero {
  padding: 5rem 1rem 4rem 1rem;
  background: radial-gradient(
    circle at 50% 20%,
    rgba(16, 185, 129, 0.08),
    transparent 70%
  );
}

.container {
  max-width: 56rem;
  margin: 0 auto;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
}

/* Badge */
.badge {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.375rem 0.875rem;
  border-radius: 9999px;
  background-color: rgba(16, 185, 129, 0.1);
  border: 1px solid rgba(16, 185, 129, 0.25);
  color: #34d399;
  font-size: 0.8125rem;
  font-weight: 600;
  margin-bottom: 1.75rem;
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
  line-height: 1.2;
  margin-bottom: 1.5rem;
}

@media (min-width: 768px) {
  .title {
    font-size: 3.75rem;
  }
}

.highlight {
  background: linear-gradient(135deg, #60a5fa 0%, #34d399 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.subtitle {
  font-size: 1.125rem;
  line-height: 1.6;
  color: #94a3b8;
  max-width: 42rem;
  margin-bottom: 2.5rem;
}

@media (min-width: 768px) {
  .subtitle {
    font-size: 1.25rem;
  }
}

/* Actions */
.actions {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 100%;
  max-width: 28rem;
  margin-bottom: 3rem;
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
  padding: 1rem 1.75rem;
  border-radius: 0.75rem;
  font-size: 1rem;
  text-decoration: none;
  transition: all 0.2s ease;
}

.btnPrimary {
  background-color: #10b981;
  color: #020617;
  box-shadow: 0 10px 20px -5px rgba(16, 185, 129, 0.3);
}

.btnPrimary:hover {
  background-color: #34d399;
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
  font-size: 1.125rem;
}

/* Trust Bar */
.trustRow {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  gap: 0.75rem;
  color: #64748b;
  font-size: 0.875rem;
  font-weight: 500;
}

.trustItem {
  display: flex;
  align-items: center;
  gap: 0.375rem;
}

.trustIcon {
  font-size: 1rem;
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

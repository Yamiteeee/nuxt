<!-- app/components/landing/Hero.vue -->
<script setup></script>

<template>
  <section :class="$style.hero">
    <div :class="$style.container">
      <!-- Left Column: Content -->
      <div :class="$style.contentCol">
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

      <!-- Right Column: Visual Image Container -->
      <div :class="$style.visualCol" data-aos="fade-left" data-aos-delay="300">
        <div :class="$style.imageWrapper">
          <img
            src="https://images.unsplash.com/vector-1760347890380-12ac425e8fe9?q=80&w=1133&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Event Catering Setup"
            :class="$style.heroImage"
          />
          <div :class="$style.imageOverlay"></div>

          <!-- Floating Status Badge -->
          <div :class="$style.floatingBadge">
            <span :class="$style.pulseDot"></span>
            <span>Live Bookings Active</span>
          </div>
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
  padding: 4rem 1.5rem;
  box-sizing: border-box;
  overflow: hidden;
  position: relative;
  /* Light mode palette with soft slate-green & soft indigo glows */
  background:
    radial-gradient(
      circle at 15% 20%,
      rgba(74, 222, 128, 0.18),
      transparent 45%
    ),
    radial-gradient(
      circle at 85% 70%,
      rgba(167, 139, 250, 0.18),
      transparent 50%
    ),
    #f8fafc;
}

.container {
  max-width: 80rem;
  width: 100%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 3.5rem;
  align-items: center;
}

@media (min-width: 1024px) {
  .container {
    flex-direction: row;
    justify-content: space-between;
    gap: 4rem;
  }
}

/* Content Column (Left) */
.contentCol {
  flex: 1;
  text-align: left;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
}

.badge {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.4rem 0.9rem;
  border-radius: 9999px;
  background-color: #f0fdf4;
  border: 1px solid #bbf7d0;
  color: #15803d;
  font-size: 0.8125rem;
  font-weight: 600;
  margin-bottom: 1.25rem;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.04);
}

.flagIcon {
  font-size: 1rem;
}

.title {
  font-size: 2.25rem;
  font-weight: 900;
  letter-spacing: -0.03em;
  color: #0f172a; /* Slate 900 for high-contrast light theme readable text */
  line-height: 1.15;
  margin-bottom: 1.25rem;
}

@media (min-width: 768px) {
  .title {
    font-size: 3.5rem;
  }
}

.highlight {
  /* Matching the image's vibrant emerald-green gradient */
  background: linear-gradient(135deg, #10b981 0%, #059669 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.subtitle {
  font-size: 1.0625rem;
  line-height: 1.6;
  color: #475569; /* Slate 600 */
  max-width: 34rem;
  margin-bottom: 2rem;
}

@media (min-width: 768px) {
  .subtitle {
    font-size: 1.2rem;
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
  /* Green matching vector character shirt color */
  background: linear-gradient(135deg, #22c55e 0%, #16a34a 100%);
  color: #ffffff;
  box-shadow: 0 8px 20px -4px rgba(34, 197, 94, 0.4);
}

.btnPrimary:hover {
  background: linear-gradient(135deg, #16a34a 0%, #15803d 100%);
  transform: translateY(-1px);
}

.btnSecondary {
  background-color: #ffffff;
  color: #1e293b;
  border: 1px solid #cbd5e1;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);
}

.btnSecondary:hover {
  background-color: #f8fafc;
  border-color: #94a3b8;
  color: #0f172a;
}

.btnIcon {
  font-size: 1rem;
}

/* Trust Bar */
.trustRow {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
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
  color: #16a34a;
}

.trustDivider {
  color: #cbd5e1;
  display: none;
}

@media (min-width: 640px) {
  .trustDivider {
    display: inline;
  }
}

/* Visual Column (Right) */
.visualCol {
  flex: 1.1;
  width: 100%;
  display: flex;
  justify-content: center;
}

@media (min-width: 1024px) {
  .visualCol {
    justify-content: flex-end;
  }
}

.imageWrapper {
  position: relative;
  width: 100%;
  max-width: 36rem;
  height: 22rem;
  border-radius: 1.5rem;
  overflow: hidden;
  border: 1px solid rgba(226, 232, 240, 0.9);
  box-shadow: 0 20px 40px -15px rgba(100, 116, 139, 0.15);
  background-color: #ffffff;
}

@media (min-width: 768px) {
  .imageWrapper {
    height: 28rem;
  }
}

.heroImage {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}

.imageOverlay {
  position: absolute;
  inset: 0;
  /* Light subtle bottom gradient instead of dark overlay */
  background: linear-gradient(
    to top,
    rgba(255, 255, 255, 0.4) 0%,
    transparent 40%
  );
}

.floatingBadge {
  position: absolute;
  bottom: 1.5rem;
  left: 1.5rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.6rem 1rem;
  background: rgba(255, 255, 255, 0.92);
  border: 1px solid #e2e8f0;
  backdrop-filter: blur(8px);
  border-radius: 9999px;
  color: #0f172a;
  font-size: 0.875rem;
  font-weight: 600;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
}

.pulseDot {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background-color: #22c55e;
  box-shadow: 0 0 0 3px rgba(34, 197, 94, 0.25);
}
</style>

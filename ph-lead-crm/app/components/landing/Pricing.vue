<!-- app/components/landing/Pricing.vue -->
<template>
  <section id="pricing" :class="$style.pricingSection">
    <div :class="$style.container">
      <!-- Section Header -->
      <div :class="$style.headerGroup" data-aos="fade-up">
        <h2 :class="$style.sectionTitle">Simple Local Pricing</h2>
        <p :class="$style.sectionSubtitle">
          Start 100% free with no credit card required. Upgrade as your business
          grows.
        </p>
      </div>

      <!-- Pricing Cards Grid -->
      <div :class="$style.pricingGrid">
        <!-- Free Tier -->
        <div
          :class="[$style.card, $style.pricingCard]"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          <div>
            <div :class="$style.tierBadge">Free Starter</div>
            <div :class="$style.price">
              ₱0 <span :class="$style.pricePeriod">/ forever</span>
            </div>
            <p :class="$style.tierDescription">
              Ideal for home bakers, solo caterers, and new vendors getting
              started.
            </p>
            <ul :class="$style.featureList">
              <li :class="$style.featureItem">
                <span :class="$style.checkIcon">✓</span> Up to 20 inquiries /
                month
              </li>
              <li :class="$style.featureItem">
                <span :class="$style.checkIcon">✓</span> 1 Custom Lead Capture
                Form
              </li>
              <li :class="$style.featureItem">
                <span :class="$style.checkIcon">✓</span> 1-Click Viber &
                WhatsApp buttons
              </li>
              <li :class="$style.featureItem">
                <span :class="$style.checkIcon">✓</span> Mobile-friendly lead
                dashboard
              </li>
            </ul>
          </div>
          <NuxtLink to="/login" :class="[$style.btn, $style.btnSecondary]">
            Create Free Account
          </NuxtLink>
        </div>

        <!-- Pro Tier -->
        <div
          :class="[$style.card, $style.pricingCard, $style.pricingCardPro]"
          data-aos="fade-up"
          data-aos-delay="150"
        >
          <div :class="$style.popularTag">POPULAR</div>
          <div>
            <div :class="$style.tierBadgePro">Pro Vendor</div>
            <div :class="$style.price">
              ₱499 <span :class="$style.pricePeriod">/ month</span>
            </div>
            <p :class="$style.tierDescription">
              For established PH vendors handling high inquiry volume.
            </p>
            <ul :class="$style.featureList">
              <li :class="$style.featureItem">
                <span :class="$style.checkIcon">✓</span>
                <b>Unlimited inquiries / month</b>
              </li>
              <li :class="$style.featureItem">
                <span :class="$style.checkIcon">✓</span> Multiple custom lead
                forms
              </li>
              <li :class="$style.featureItem">
                <span :class="$style.checkIcon">✓</span> Remove "InquiryTracker"
                branding
              </li>
              <li :class="$style.featureItem">
                <span :class="$style.checkIcon">✓</span> GCash & Maya payment
                setup
              </li>
            </ul>
          </div>
          <NuxtLink to="/login" :class="[$style.btn, $style.btnPrimary]">
            Start 14-Day Free Trial
          </NuxtLink>
        </div>
      </div>
    </div>
  </section>
</template>

<style module>
.pricingSection {
  padding: 5rem 1rem;
  overflow: hidden;
}

.container {
  max-width: 64rem;
  margin: 0 auto;
}

.headerGroup {
  text-align: center;
  margin-bottom: 3.5rem;
}

.sectionTitle {
  font-size: 1.875rem;
  font-weight: 800;
  color: #ffffff;
  margin-bottom: 0.75rem;
  letter-spacing: -0.02em;
}

@media (min-width: 768px) {
  .sectionTitle {
    font-size: 2.25rem;
  }
}

.sectionSubtitle {
  color: #94a3b8;
  font-size: 1rem;
}

/* Grid */
.pricingGrid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 2.5rem;
  max-width: 50rem;
  margin: 0 auto;
  padding-top: 0.75rem; /* Space for absolute popularTag badge */
}

@media (min-width: 768px) {
  .pricingGrid {
    grid-template-columns: repeat(2, 1fr);
    gap: 2rem;
  }
}

/* Cards */
.card {
  padding: 2.25rem;
  border-radius: 1.25rem;
  background-color: #0f172a;
}

.pricingCard {
  border: 1px solid #1e293b;
  display: flex;
  flex-direction: column;
  justify-space: space-between;
}

.pricingCardPro {
  background: linear-gradient(180deg, #0f172a 0%, rgba(6, 78, 59, 0.25) 100%);
  border: 2px solid #10b981;
  position: relative;
}

.popularTag {
  position: absolute;
  top: -0.75rem;
  right: 1.5rem;
  background-color: #10b981;
  color: #020617;
  font-size: 0.6875rem;
  font-weight: 800;
  letter-spacing: 0.05em;
  padding: 0.25rem 0.75rem;
  border-radius: 9999px;
  z-index: 10;
}

/* Details */
.tierBadge {
  color: #94a3b8;
  font-weight: 700;
  font-size: 1.125rem;
  margin-bottom: 0.5rem;
}

.tierBadgePro {
  color: #34d399;
  font-weight: 700;
  font-size: 1.125rem;
  margin-bottom: 0.5rem;
}

.price {
  font-size: 2.5rem;
  font-weight: 900;
  color: #ffffff;
  margin-bottom: 0.75rem;
}

.pricePeriod {
  font-size: 0.875rem;
  font-weight: 500;
  color: #64748b;
}

.tierDescription {
  color: #94a3b8;
  font-size: 0.875rem;
  margin-bottom: 1.75rem;
  line-height: 1.5;
}

/* Features List */
.featureList {
  list-style: none;
  padding: 0;
  margin: 0 0 2rem 0;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

.featureItem {
  display: flex;
  align-items: center;
  gap: 0.625rem;
  color: #cbd5e1;
  font-size: 0.875rem;
}

.checkIcon {
  color: #10b981;
  font-weight: 900;
}

/* Buttons */
.btn {
  display: block;
  width: 100%;
  box-sizing: border-box;
  text-align: center;
  font-weight: 700;
  padding: 0.875rem 1.25rem;
  border-radius: 0.75rem;
  font-size: 0.9375rem;
  text-decoration: none;
  transition: all 0.2s ease;
}

.btnPrimary {
  background-color: #10b981;
  color: #020617;
  box-shadow: 0 10px 15px -3px rgba(16, 185, 129, 0.2);
}

.btnPrimary:hover {
  background-color: #34d399;
}

.btnSecondary {
  background-color: #1e293b;
  color: #ffffff;
}

.btnSecondary:hover {
  background-color: #334155;
}
</style>

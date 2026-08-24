<!-- app/components/landing/About.vue -->
<template>
  <section id="how-it-works" :class="$style.aboutSection">
    <div :class="$style.container">
      <!-- Section Header -->
      <div :class="$style.headerGroup" data-aos="fade-up">
        <h2 :class="$style.sectionTitle">
          Why PH Service Vendors Lose Revenue
        </h2>
        <p :class="$style.sectionSubtitle">
          The manual FB & IG DM routine costs you booked clients every single
          day.
        </p>
      </div>

      <!-- Side-by-Side Comparison Grid -->
      <div :class="$style.grid">
        <!-- Old DM Workflow -->
        <div
          :class="[$style.card, $style.cardDanger]"
          data-aos="fade-right"
          data-aos-delay="100"
        >
          <div :class="$style.cardHeader">
            <span :class="$style.badgeDanger">OLD WAY</span>
            <h3 :class="$style.cardTitleDanger">
              <Icon name="lucide:x-circle" :class="$style.titleIconDanger" />
              <span>Standard Messenger & IG DMs</span>
            </h3>
          </div>
          <ul :class="$style.featureList">
            <li :class="$style.featureItem">
              <Icon name="lucide:x" :class="$style.iconDanger" />
              <span
                >Customers send vague <i>"HM po?"</i> inquiries without
                details.</span
              >
            </li>
            <li :class="$style.featureItem">
              <Icon name="lucide:x" :class="$style.iconDanger" />
              <span
                >You waste 15 minutes asking for event dates, locations, and
                specs.</span
              >
            </li>
            <li :class="$style.featureItem">
              <Icon name="lucide:x" :class="$style.iconDanger" />
              <span>Inquiries get buried under personal chats and spam.</span>
            </li>
            <li :class="$style.featureItem">
              <Icon name="lucide:x" :class="$style.iconDanger" />
              <span
                >The customer books with another vendor who answered
                faster.</span
              >
            </li>
          </ul>
        </div>

        <!-- New Workflow -->
        <div
          :class="[$style.card, $style.cardSuccess]"
          data-aos="fade-left"
          data-aos-delay="200"
        >
          <div :class="$style.cardHeader">
            <span :class="$style.badgeSuccess">NEW WAY</span>
            <h3 :class="$style.cardTitleSuccess">
              <Icon
                name="lucide:check-circle"
                :class="$style.titleIconSuccess"
              />
              <span>The InquiryTracker PH Link</span>
            </h3>
          </div>
          <ul :class="$style.featureList">
            <li :class="$style.featureItem">
              <Icon name="lucide:check" :class="$style.iconSuccess" />
              <span
                >Customer clicks your bio link and submits a 30-second
                form.</span
              >
            </li>
            <li :class="$style.featureItem">
              <Icon name="lucide:check" :class="$style.iconSuccess" />
              <span
                >You instantly get complete details (Date, Pax, Location,
                Service).</span
              >
            </li>
            <li :class="$style.featureItem">
              <Icon name="lucide:check" :class="$style.iconSuccess" />
              <span
                >Lead stores neatly inside your phone dashboard in real
                time.</span
              >
            </li>
            <li :class="$style.featureItem">
              <Icon name="lucide:check" :class="$style.iconSuccess" />
              <span
                >1-click Viber or WhatsApp button opens a direct chat with
                quote.</span
              >
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>

<style module>
.aboutSection {
  padding: 5rem 1rem;
  background-color: rgba(15, 23, 42, 0.6);
  border-top: 1px solid #1e293b;
  border-bottom: 1px solid #1e293b;
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

/* Comparison Grid */
.grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;
}

@media (min-width: 768px) {
  .grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

.card {
  padding: 2rem;
  border-radius: 1.25rem;
  display: flex;
  flex-direction: column;
}

.cardDanger {
  background-color: rgba(69, 10, 10, 0.15);
  border: 1px solid rgba(127, 29, 29, 0.4);
}

.cardSuccess {
  background-color: rgba(6, 78, 59, 0.15);
  border: 1px solid rgba(6, 95, 70, 0.4);
}

.cardHeader {
  margin-bottom: 1.5rem;
}

.badgeDanger {
  display: inline-block;
  background-color: rgba(239, 68, 68, 0.15);
  color: #f87171;
  font-size: 0.6875rem;
  font-weight: 800;
  letter-spacing: 0.05em;
  padding: 0.25rem 0.625rem;
  border-radius: 0.375rem;
  margin-bottom: 0.75rem;
}

.badgeSuccess {
  display: inline-block;
  background-color: rgba(16, 185, 129, 0.15);
  color: #34d399;
  font-size: 0.6875rem;
  font-weight: 800;
  letter-spacing: 0.05em;
  padding: 0.25rem 0.625rem;
  border-radius: 0.375rem;
  margin-bottom: 0.75rem;
}

.cardTitleDanger {
  color: #fca5a5;
  font-size: 1.25rem;
  font-weight: 700;
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.cardTitleSuccess {
  color: #6ee7b7;
  font-size: 1.25rem;
  font-weight: 700;
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.titleIconDanger {
  font-size: 1.25rem;
  color: #ef4444;
}

.titleIconSuccess {
  font-size: 1.25rem;
  color: #10b981;
}

.featureList {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.featureItem {
  display: flex;
  align-items: flex-start;
  gap: 0.75rem;
  color: #cbd5e1;
  font-size: 0.9375rem;
  line-height: 1.5;
}

.iconDanger {
  color: #f87171;
  font-size: 1.125rem;
  flex-shrink: 0;
  margin-top: 0.125rem;
}

.iconSuccess {
  color: #34d399;
  font-size: 1.125rem;
  flex-shrink: 0;
  margin-top: 0.125rem;
}
</style>

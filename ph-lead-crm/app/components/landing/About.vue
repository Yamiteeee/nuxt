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

      <!-- Live SaaS Workflow Pipeline -->
      <div
        :class="$style.workflowWrapper"
        data-aos="fade-up"
        data-aos-delay="300"
      >
        <h3 :class="$style.workflowHeading">How The Automation Flow Works</h3>
        <div :class="$style.workflowGrid">
          <!-- Step 1 -->
          <div :class="$style.stepCard">
            <div :class="$style.stepBadge">Step 1</div>
            <div :class="$style.stepIconWrapper">
              <Icon name="lucide:link" :class="$style.stepIcon" />
            </div>
            <h4 :class="$style.stepTitle">Share Your Link</h4>
            <p :class="$style.stepDesc">
              Put your personalized form link in your FB page, IG bio, or
              auto-reply.
            </p>
          </div>

          <div :class="$style.stepConnector">
            <Icon name="lucide:chevron-right" :class="$style.connectorIcon" />
          </div>

          <!-- Step 2 -->
          <div :class="$style.stepCard">
            <div :class="$style.stepBadge">Step 2</div>
            <div :class="$style.stepIconWrapper">
              <Icon name="lucide:file-text" :class="$style.stepIcon" />
            </div>
            <h4 :class="$style.stepTitle">Capture Structured Leads</h4>
            <p :class="$style.stepDesc">
              Clients input event dates, guest count, location, and specific
              service needs.
            </p>
          </div>

          <div :class="$style.stepConnector">
            <Icon name="lucide:chevron-right" :class="$style.connectorIcon" />
          </div>

          <!-- Step 3 -->
          <div :class="$style.stepCard">
            <div :class="$style.stepBadge">Step 3</div>
            <div :class="$style.stepIconWrapper">
              <Icon name="lucide:message-circle" :class="$style.stepIcon" />
            </div>
            <h4 :class="$style.stepTitle">1-Click Viber / WhatsApp</h4>
            <p :class="$style.stepDesc">
              Hit respond to open a pre-filled quote straight in Viber or
              WhatsApp.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style module>
.aboutSection {
  min-height: 100vh;
  min-height: 100dvh;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 4rem 1.5rem;
  box-sizing: border-box;
  background-color: #f8fafc;
  border-top: 1px solid #e2e8f0;
  border-bottom: 1px solid #e2e8f0;
}

.container {
  max-width: 68rem;
  width: 100%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.headerGroup {
  text-align: center;
  margin-bottom: 2.5rem;
}

.sectionTitle {
  font-size: 1.875rem;
  font-weight: 800;
  color: #0f172a;
  margin-bottom: 0.5rem;
  letter-spacing: -0.02em;
}

@media (min-width: 768px) {
  .sectionTitle {
    font-size: 2.25rem;
  }
}

.sectionSubtitle {
  color: #64748b;
  font-size: 1.0625rem;
}

/* Comparison Grid */
.grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.5rem;
  margin-bottom: 2.5rem;
}

@media (min-width: 768px) {
  .grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

.card {
  padding: 1.75rem;
  border-radius: 1.25rem;
  display: flex;
  flex-direction: column;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.03);
}

.cardDanger {
  background-color: #fef2f2;
  border: 1px solid #fecaca;
}

.cardSuccess {
  background-color: #f0fdf4;
  border: 1px solid #bbf7d0;
}

.cardHeader {
  margin-bottom: 1.25rem;
}

.badgeDanger {
  display: inline-block;
  background-color: #fee2e2;
  color: #dc2626;
  font-size: 0.6875rem;
  font-weight: 800;
  letter-spacing: 0.05em;
  padding: 0.25rem 0.625rem;
  border-radius: 0.375rem;
  margin-bottom: 0.5rem;
}

.badgeSuccess {
  display: inline-block;
  background-color: #dcfce7;
  color: #16a34a;
  font-size: 0.6875rem;
  font-weight: 800;
  letter-spacing: 0.05em;
  padding: 0.25rem 0.625rem;
  border-radius: 0.375rem;
  margin-bottom: 0.5rem;
}

.cardTitleDanger {
  color: #991b1b;
  font-size: 1.125rem;
  font-weight: 700;
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.cardTitleSuccess {
  color: #166534;
  font-size: 1.125rem;
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
  color: #16a34a;
}

.featureList {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 0.875rem;
}

.featureItem {
  display: flex;
  align-items: flex-start;
  gap: 0.625rem;
  color: #334155;
  font-size: 0.9375rem;
  line-height: 1.5;
}

.iconDanger {
  color: #ef4444;
  font-size: 1.125rem;
  flex-shrink: 0;
  margin-top: 0.125rem;
}

.iconSuccess {
  color: #16a34a;
  font-size: 1.125rem;
  flex-shrink: 0;
  margin-top: 0.125rem;
}

/* SaaS Workflow Section */
.workflowWrapper {
  background: #ffffff;
  border: 1px solid #e2e8f0;
  border-radius: 1.25rem;
  padding: 2rem 1.5rem;
  box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.03);
}

.workflowHeading {
  text-align: center;
  font-size: 1.125rem;
  font-weight: 800;
  color: #0f172a;
  margin-bottom: 1.75rem;
  text-transform: uppercase;
  letter-spacing: 0.05em;
}

.workflowGrid {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
}

@media (min-width: 768px) {
  .workflowGrid {
    flex-direction: row;
    justify-content: space-between;
    align-items: stretch;
    gap: 0.75rem;
  }
}

.stepCard {
  flex: 1;
  background: #f8fafc;
  border: 1px solid #e2e8f0;
  border-radius: 1rem;
  padding: 1.5rem 1.25rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  position: relative;
}

.stepBadge {
  position: absolute;
  top: 0.75rem;
  left: 0.75rem;
  font-size: 0.6875rem;
  font-weight: 700;
  color: #15803d;
  background: #dcfce7;
  padding: 0.15rem 0.5rem;
  border-radius: 0.375rem;
}

.stepIconWrapper {
  width: 3rem;
  height: 3rem;
  border-radius: 50%;
  background: #dcfce7;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 0.5rem;
  margin-bottom: 0.875rem;
}

.stepIcon {
  font-size: 1.35rem;
  color: #16a34a;
}

.stepTitle {
  font-size: 1rem;
  font-weight: 700;
  color: #0f172a;
  margin-bottom: 0.375rem;
}

.stepDesc {
  font-size: 0.8438rem;
  color: #64748b;
  line-height: 1.45;
}

.stepConnector {
  display: flex;
  align-items: center;
  justify-content: center;
  color: #cbd5e1;
}

@media (max-width: 767px) {
  .connectorIcon {
    transform: rotate(90deg);
  }
}
</style>

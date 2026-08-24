<!-- app/components/landing/About.vue -->
<template>
  <section id="how-it-works" :class="$style.aboutSection">
    <div :class="$style.container">
      <!-- Section Header -->
      <div :class="$style.headerGroup" data-aos="fade-up">
        <h2 :class="$style.sectionTitle">
          Why Event Service Vendors Lose Revenue
        </h2>
        <p :class="$style.sectionSubtitle">
          The manual social media DM routine costs you booked clients every
          single day.
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
                >Customers send vague <i>"How much?"</i> inquiries without
                details.</span
              >
            </li>
            <li :class="$style.featureItem">
              <Icon name="lucide:x" :class="$style.iconDanger" />
              <span
                >You waste 15 minutes back-and-forth asking for dates,
                locations, and specs.</span
              >
            </li>
            <li :class="$style.featureItem">
              <Icon name="lucide:x" :class="$style.iconDanger" />
              <span
                >Inquiries get buried under personal messages and spam.</span
              >
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
              <span>The Dedicated Inquiry Link</span>
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
                >You instantly get complete details (Date, Guest Count,
                Location, Service).</span
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
                >1-click WhatsApp or Chat button opens a direct message with a
                quote.</span
              >
            </li>
          </ul>
        </div>
      </div>

      <!-- Enhanced Live Workflow Steps with Unsplash Visuals -->
      <div
        :class="$style.workflowWrapper"
        data-aos="fade-up"
        data-aos-delay="300"
      >
        <h3 :class="$style.workflowHeading">The Modern Client Journey</h3>

        <div :class="$style.workflowSteps">
          <!-- Step 1 -->
          <div :class="$style.stepRow" data-aos="fade-up">
            <div :class="$style.stepContent">
              <div :class="$style.stepHeader">
                <span :class="$style.stepNumber">1</span>
                <Icon name="lucide:link" :class="$style.stepTitleIcon" />
                <h4 :class="$style.stepTitle">Share Your Link Everywhere</h4>
              </div>
              <p :class="$style.stepDesc">
                Transform your Instagram bio, Facebook page, and auto-replies
                into an active booking channel. Instead of getting stuck in
                endless "How much?" message chains, direct clients straight to
                your customized link.
              </p>
            </div>

            <div :class="$style.imageSlotWrapper">
              <div :class="$style.imageSlot">
                <img
                  src="https://images.unsplash.com/vector-1786329856157-0289f0ec1fe1?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="Social media link sharing on mobile"
                  :class="$style.stepImage"
                  loading="lazy"
                />
              </div>
            </div>
          </div>

          <!-- Step 2 -->
          <div :class="$style.stepRow" data-aos="fade-up">
            <div :class="$style.stepContent">
              <div :class="$style.stepHeader">
                <span :class="$style.stepNumber">2</span>
                <Icon name="lucide:file-text" :class="$style.stepTitleIcon" />
                <h4 :class="$style.stepTitle">
                  Receive Complete Event Details
                </h4>
              </div>
              <p :class="$style.stepDesc">
                Clients fill out a seamless 30-second mobile form. You receive
                guest counts, event dates, locations, and specific service
                preferences delivered straight into your dashboard with zero
                effort.
              </p>
            </div>

            <div :class="$style.imageSlotWrapper">
              <div :class="$style.imageSlot">
                <img
                  src="https://images.unsplash.com/vector-1786329854419-7ff5aedc0a95?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="Client filling out digital form on mobile"
                  :class="$style.stepImage"
                  loading="lazy"
                />
              </div>
            </div>
          </div>

          <!-- Step 3 -->
          <div :class="$style.stepRow" data-aos="fade-up">
            <div :class="$style.stepContent">
              <div :class="$style.stepHeader">
                <span :class="$style.stepNumber">3</span>
                <Icon
                  name="lucide:message-square"
                  :class="$style.stepTitleIcon"
                />
                <h4 :class="$style.stepTitle">
                  Instant 1-Click WhatsApp & Chat Quotes
                </h4>
              </div>
              <p :class="$style.stepDesc">
                Review lead details on the fly and tap a single button to launch
                a direct chat. Send pre-populated, tailored quotes in seconds
                before your prospective client browses anywhere else.
              </p>
            </div>

            <div :class="$style.imageSlotWrapper">
              <div :class="$style.imageSlot">
                <img
                  src="https://images.unsplash.com/vector-1786329675758-e518b4201de8?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="Sending instant client quotation on smartphone"
                  :class="$style.stepImage"
                  loading="lazy"
                />
              </div>
            </div>
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

/* Enhanced Workflow Section */
.workflowWrapper {
  background: #ffffff;
  border: 1px solid #e2e8f0;
  border-radius: 1.25rem;
  padding: 2.25rem 1.5rem;
  box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.03);
}

.workflowHeading {
  text-align: center;
  font-size: 1.25rem;
  font-weight: 800;
  color: #0f172a;
  margin-bottom: 2.5rem;
  text-transform: uppercase;
  letter-spacing: 0.08em;
}

.workflowSteps {
  display: flex;
  flex-direction: column;
  gap: 2.5rem;
}

@media (min-width: 768px) {
  .workflowSteps {
    gap: 3.5rem;
  }
}

.stepRow {
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.5rem;
  align-items: center;
}

@media (min-width: 1024px) {
  .stepRow {
    grid-template-columns: 1.2fr 1.5fr;
    gap: 3.5rem;
  }
}

.stepContent {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.stepHeader {
  display: flex;
  align-items: center;
  gap: 0.875rem;
}

.stepNumber {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 2.5rem;
  height: 2.5rem;
  font-size: 1.125rem;
  font-weight: 800;
  color: #ffffff;
  background-color: #10b981;
  border-radius: 50%;
  box-shadow: 0 4px 10px rgba(16, 185, 129, 0.3);
  flex-shrink: 0;
}

.stepTitleIcon {
  font-size: 1.35rem;
  color: #16a34a;
  flex-shrink: 0;
}

.stepTitle {
  font-size: 1.25rem;
  font-weight: 700;
  color: #0f172a;
}

.stepDesc {
  font-size: 0.9375rem;
  color: #64748b;
  line-height: 1.65;
}

/* Image Slots */
.imageSlotWrapper {
  position: relative;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
}

@media (min-width: 1024px) {
  .imageSlotWrapper {
    align-items: flex-start;
  }
}

.imageSlot {
  width: 100%;
  max-width: 32rem;
  aspect-ratio: 16 / 9;
  background-color: #f1f5f9;
  border: 1px solid #e2e8f0;
  border-radius: 1rem;
  box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.08);
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1rem; /* Padding so illustration graphics don't hit borders */
  box-sizing: border-box;
}

.stepImage {
  width: 100%;
  height: 100%;
  object-fit: contain; /* Scale down vector art inside container without cutting off edges */
  object-position: center;
  display: block;
}
</style>

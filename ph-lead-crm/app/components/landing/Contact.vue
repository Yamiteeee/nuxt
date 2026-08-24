<!-- app/components/landing/Contact.vue -->
<script setup>
import { ref } from "vue";

const form = ref({
  name: "",
  businessName: "",
  email: "",
  phone: "",
  message: "",
});

const isSubmitted = ref(false);

const handleSubmit = () => {
  // Logic to process inquiry submission
  isSubmitted.value = true;
};
</script>

<template>
  <section id="contact" :class="$style.contactSection">
    <div :class="$style.container">
      <div :class="$style.headerGroup" data-aos="fade-up">
        <h2 :class="$style.sectionTitle">
          Have Questions or Need Help Setting Up?
        </h2>
        <p :class="$style.sectionSubtitle">
          We’re here to help you get your inquiry link set up in minutes. Reach
          out directly or send us a message below.
        </p>
      </div>

      <div :class="$style.grid">
        <!-- Direct Quick Connect Channels -->
        <div :class="$style.infoCard" data-aos="fade-up" data-aos-delay="100">
          <div>
            <h3 :class="$style.infoTitle">Fast Support Channels</h3>
            <p :class="$style.infoDesc">
              Prefer talking directly? Message our local support team on your
              favorite app:
            </p>

            <div :class="$style.contactLinks">
              <a
                href="https://viber.com"
                target="_blank"
                rel="noopener"
                :class="[$style.channelBtn, $style.viberBtn]"
              >
                <Icon name="simple-icons:viber" :class="$style.channelIcon" />
                <span>Chat via Viber</span>
              </a>
              <a
                href="https://m.me"
                target="_blank"
                rel="noopener"
                :class="[$style.channelBtn, $style.messengerBtn]"
              >
                <Icon
                  name="simple-icons:facebookmessenger"
                  :class="$style.channelIcon"
                />
                <span>Message on FB Messenger</span>
              </a>
            </div>
          </div>

          <div :class="$style.hoursBlock">
            <div :class="$style.hoursTitle">
              <Icon name="lucide:clock" :class="$style.hoursIcon" />
              <span>Support Hours:</span>
            </div>
            <div :class="$style.hoursText">
              Mon – Sat: 8:00 AM – 7:00 PM (PHT)
            </div>
          </div>
        </div>

        <!-- Contact Form -->
        <div :class="$style.formCard" data-aos="fade-up" data-aos-delay="150">
          <div v-if="isSubmitted" :class="$style.successBox">
            <Icon name="lucide:party-popper" :class="$style.successIcon" />
            <h4 :class="$style.successTitle">Message Sent!</h4>
            <p :class="$style.successText">
              Salamat! We received your message and will reply to your phone or
              email within 1 hour during support hours.
            </p>
          </div>

          <form v-else @submit.prevent="handleSubmit" :class="$style.form">
            <div :class="$style.inputGroup">
              <label for="name" :class="$style.label">Your Name</label>
              <input
                id="name"
                v-model="form.name"
                type="text"
                placeholder="Juan dela Cruz"
                required
                :class="$style.input"
              />
            </div>

            <div :class="$style.inputGroup">
              <label for="businessName" :class="$style.label"
                >Business Name</label
              >
              <input
                id="businessName"
                v-model="form.businessName"
                type="text"
                placeholder="e.g. Manila Events Catering"
                required
                :class="$style.input"
              />
            </div>

            <div :class="$style.inputRow">
              <div :class="$style.inputGroup">
                <label for="phone" :class="$style.label"
                  >Mobile / Viber No.</label
                >
                <input
                  id="phone"
                  v-model="form.phone"
                  type="tel"
                  placeholder="09171234567"
                  required
                  :class="$style.input"
                />
              </div>

              <div :class="$style.inputGroup">
                <label for="email" :class="$style.label">Email Address</label>
                <input
                  id="email"
                  v-model="form.email"
                  type="email"
                  placeholder="juan@gmail.com"
                  required
                  :class="$style.input"
                />
              </div>
            </div>

            <div :class="$style.inputGroup">
              <label for="message" :class="$style.label"
                >How can we help?</label
              >
              <textarea
                id="message"
                v-model="form.message"
                rows="4"
                placeholder="Ask us anything about setting up your form..."
                required
                :class="$style.textarea"
              ></textarea>
            </div>

            <button type="submit" :class="[$style.btn, $style.btnPrimary]">
              <span>Send Inquiry</span>
              <Icon name="lucide:send" :class="$style.btnIcon" />
            </button>
          </form>
        </div>
      </div>
    </div>
  </section>
</template>

<style module>
.contactSection {
  padding: 5rem 1.5rem;
  background-color: #f8fafc;
  border-top: 1px solid #e2e8f0;
  overflow: hidden; /* Prevents AOS transform overflow */
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
  color: #0f172a;
  margin-bottom: 0.75rem;
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
  max-width: 36rem;
  margin: 0 auto;
}

.grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;
}

@media (min-width: 768px) {
  .grid {
    grid-template-columns: 1fr 1.25fr;
  }
}

/* Direct Channels Card */
.infoCard {
  background-color: #ffffff;
  border: 1px solid #e2e8f0;
  border-radius: 1.25rem;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.03);
}

.infoTitle {
  color: #0f172a;
  font-size: 1.25rem;
  font-weight: 700;
  margin-bottom: 0.75rem;
}

.infoDesc {
  color: #64748b;
  font-size: 0.875rem;
  line-height: 1.5;
  margin-bottom: 2rem;
}

.contactLinks {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-bottom: 2rem;
}

.channelBtn {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding: 0.875rem 1.25rem;
  border-radius: 0.75rem;
  font-weight: 600;
  font-size: 0.9375rem;
  text-decoration: none;
  transition:
    transform 0.2s ease,
    opacity 0.2s ease;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
}

.channelBtn:hover {
  opacity: 0.92;
  transform: translateY(-1px);
}

.viberBtn {
  background-color: #7360f2;
  color: #ffffff;
}

.messengerBtn {
  background-color: #0084ff;
  color: #ffffff;
}

.channelIcon {
  font-size: 1.25rem;
}

.hoursBlock {
  border-top: 1px solid #f1f5f9;
  padding-top: 1.25rem;
}

.hoursTitle {
  color: #334155;
  font-size: 0.8125rem;
  font-weight: 600;
  margin-bottom: 0.25rem;
  display: flex;
  align-items: center;
  gap: 0.375rem;
}

.hoursIcon {
  font-size: 0.9375rem;
  color: #16a34a;
}

.hoursText {
  color: #64748b;
  font-size: 0.8125rem;
}

/* Form Card */
.formCard {
  background-color: #ffffff;
  border: 1px solid #e2e8f0;
  border-radius: 1.25rem;
  padding: 2rem;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.03);
}

.form {
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
}

.inputRow {
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.25rem;
}

@media (min-width: 640px) {
  .inputRow {
    grid-template-columns: repeat(2, 1fr);
  }
}

.inputGroup {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.label {
  color: #334155;
  font-size: 0.8125rem;
  font-weight: 600;
}

.input,
.textarea {
  width: 100%;
  box-sizing: border-box;
  background-color: #f8fafc;
  border: 1px solid #cbd5e1;
  border-radius: 0.5rem;
  padding: 0.75rem 1rem;
  color: #0f172a;
  font-size: 0.875rem;
  outline: none;
  transition:
    border-color 0.2s ease,
    box-shadow 0.2s ease;
}

.input::placeholder,
.textarea::placeholder {
  color: #94a3b8;
}

.input:focus,
.textarea:focus {
  background-color: #ffffff;
  border-color: #22c55e;
  box-shadow: 0 0 0 3px rgba(34, 197, 94, 0.15);
}

.textarea {
  resize: vertical;
}

.btn {
  width: 100%;
  font-weight: 700;
  padding: 0.875rem 1.25rem;
  border-radius: 0.75rem;
  font-size: 0.9375rem;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
}

.btnPrimary {
  background: linear-gradient(135deg, #22c55e 0%, #16a34a 100%);
  color: #ffffff;
  box-shadow: 0 8px 20px -4px rgba(34, 197, 94, 0.4);
}

.btnPrimary:hover {
  background: linear-gradient(135deg, #16a34a 0%, #15803d 100%);
  transform: translateY(-1px);
}

.btnIcon {
  font-size: 1rem;
}

/* Success Box */
.successBox {
  text-align: center;
  padding: 2rem 1rem;
}

.successIcon {
  font-size: 2.5rem;
  color: #16a34a;
  display: block;
  margin: 0 auto 1rem auto;
}

.successTitle {
  color: #16a34a;
  font-size: 1.25rem;
  font-weight: 700;
  margin-bottom: 0.5rem;
}

.successText {
  color: #475569;
  font-size: 0.875rem;
  line-height: 1.5;
}
</style>

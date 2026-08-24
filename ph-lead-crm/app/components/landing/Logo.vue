<!-- app/components/landing/Logo.vue -->
<script setup>
defineProps({
  size: {
    type: String,
    default: "32px",
  },
});
</script>

<template>
  <NuxtLink to="/" :class="$style.logoGroup">
    <div :style="{ width: size, height: size }" :class="$style.svgWrapper">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 512 512"
        fill="none"
        width="100%"
        height="100%"
      >
        <defs>
          <linearGradient id="pmGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stop-color="#34d399" />
            <stop offset="100%" stop-color="#06b6d4" />
          </linearGradient>

          <linearGradient id="bubbleBg" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stop-color="#ffffff" />
            <stop offset="100%" stop-color="#f8fafc" />
          </linearGradient>

          <filter id="pmGlow" x="-20%" y="-20%" width="140%" height="140%">
            <feDropShadow
              dx="0"
              dy="10"
              stdDeviation="14"
              flood-color="#34d399"
              flood-opacity="0.35"
            />
          </filter>

          <filter id="cardShadow" x="-20%" y="-20%" width="140%" height="140%">
            <feDropShadow
              dx="0"
              dy="6"
              stdDeviation="8"
              flood-color="#0f172a"
              flood-opacity="0.12"
            />
          </filter>
        </defs>

        <circle
          cx="256"
          cy="256"
          r="210"
          stroke="url(#pmGrad)"
          stroke-width="4"
          stroke-dasharray="10 10"
          opacity="0.4"
        />

        <g filter="url(#cardShadow)">
          <path
            d="M120 140 C120 117.9 137.9 100 160 100 L320 100 C342.1 100 360 117.9 360 140 L360 220 C360 242.1 342.1 260 320 260 L240 260 L180 300 L195 260 L160 260 C137.9 260 120 242.1 120 220 Z"
            fill="#e2e8f0"
            opacity="0.85"
          />
        </g>

        <g filter="url(#pmGlow)">
          <path
            d="M150 190 C150 167.9 167.9 150 190 150 L370 150 C392.1 150 410 167.9 410 190 L410 290 C410 312.1 392.1 330 370 330 L310 330 L240 380 L255 330 L190 330 C167.9 330 150 312.1 150 290 Z"
            fill="url(#bubbleBg)"
            stroke="#e2e8f0"
            stroke-width="3"
          />
          <text
            x="280"
            y="260"
            font-family="system-ui, -apple-system, sans-serif"
            font-weight="900"
            font-size="82"
            fill="url(#pmGrad)"
            text-anchor="middle"
            letter-spacing="2"
          >
            PM
          </text>
          <circle cx="380" cy="320" r="22" fill="url(#pmGrad)" />
          <path
            d="M371 320L377 326L389 313"
            stroke="#ffffff"
            stroke-width="3.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </g>

        <g filter="url(#pmGlow)">
          <circle cx="360" cy="130" r="28" fill="#ffffff" />
          <circle cx="360" cy="130" r="20" fill="url(#pmGrad)" />
          <circle cx="360" cy="130" r="7" fill="#ffffff" />
        </g>
      </svg>
    </div>

    <span :class="$style.brandText">
      <span :class="$style.logoAccent">InquiryTracker</span>
      <span :class="$style.logoBadge">PH</span>
    </span>
  </NuxtLink>
</template>

<style module>
.logoGroup {
  display: inline-flex;
  align-items: center;
  gap: 0.625rem;
  text-decoration: none;
}

.svgWrapper {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}

.brandText {
  font-weight: 800;
  font-size: 1.125rem;
  display: flex;
  align-items: center;
  gap: 0.375rem;
}

.logoAccent {
  color: #ffffff;
  letter-spacing: -0.01em;
}

.logoBadge {
  background: linear-gradient(
    135deg,
    rgba(52, 211, 153, 0.2),
    rgba(6, 182, 212, 0.2)
  );
  border: 1px solid rgba(52, 211, 153, 0.4);
  color: #34d399;
  font-size: 0.75rem;
  font-weight: 800;
  padding: 0.125rem 0.375rem;
  border-radius: 0.375rem;
}
</style>

<template>
  <div class="parallax-container">
    <img :src="image" :alt="image" class="parallax" loading="lazy" />
    <div class="overlay" />
    <div class="content">
      <slot />
    </div>
  </div>
</template>

<script setup lang="ts">
import { defineProps } from 'vue'

defineProps({
  image: {
    type: String,
    required: true
  }
})
</script>

<style scoped>
.parallax-container {
  height: 500px;
  overflow: hidden;
  position: relative;
  margin: 0 auto;
}

.parallax {
  height: 150%;
  width: 100%;
  position: absolute;
  top: -25%;
  left: 0;
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}

.overlay {
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  background: rgba(0, 0, 0, 0.4);
  z-index: 5;
}

.content {
  position: relative;
  z-index: 10;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  color: white;
}

@media (prefers-reduced-motion: no-preference) {
  .parallax-container {
    perspective: 1px;
    perspective-origin: 0 0;
  }
}
</style>

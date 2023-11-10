<template>
  <button class="redirect-button" @click="$router.push(to)">
    <slot />
  </button>
</template>

<script setup lang="ts">
import { defineProps } from 'vue'

defineProps({
  to: {
    type: String,
    required: true
  }
})

</script>

<style scoped lang="less">
.redirect-button {
  padding: 0.5rem 1rem;
  border-radius: 0.5rem;
  background-color: var(--zomp);
  text-decoration: none;
  margin-top: 1rem;
  cursor: pointer;

  &:hover {
    background-color: #000;

    p {
      color: #fff;
    }
  }

  &:active {
    transform: scale(0.95);
  }

  &:focus {
    outline: none;
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
}
</style>

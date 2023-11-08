<template>
  <div class="redirect-button">
    <NuxtLink :to="to">
      <p>About</p>
    </NuxtLink>
  </div>
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

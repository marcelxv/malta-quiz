<template>
  <li>
    <label>
      <input type="radio" :value="text" @input="$emit('input', $event)">
      {{ text }}
    </label>
  </li>
</template>

<script setup lang="ts">
import { defineProps } from 'vue'

defineProps({
  text: {
    type: String,
    required: true
  }
})

</script>

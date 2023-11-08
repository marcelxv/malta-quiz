<template>
  <div>
  <h3>Results</h3>
  <p>You got {{ totalCorrect }} out of {{ totalQuestions }} correct!</p>
  <div class="progress-bar">
    <div class="progress" :style="{ width: (totalCorrect / totalQuestions * 100) + '%' }"></div>
  </div>
  </div>
 </template>

<script setup lang="ts">
import { defineProps } from 'vue'

defineProps({
  totalCorrect: {
    type: Number,
    required: true
  },
  totalQuestions: {
    type: Number,
    required: true
  }
})

</script>

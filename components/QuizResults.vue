<!-- <UserResults :total-correct="totalCorrect" :total-questions="totalQuestions" /> -->

<template>
  <div>
    <h2>Results</h2>
    <p>
      You got {{ totalCorrect }} out of {{ totalQuestions }} correct!
    </p>
  </div>
</template>

<script setup lang="ts">
import { defineProps } from 'vue'

defineProps({
  totalCorrect: Number,
  totalQuestions: Number
})

</script>

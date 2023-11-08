<template>
  <div>
    <QuizForm v-if="!isFinished" :total-correct="totalCorrect" @finish="handleSubmission" />
    <ResultsForm v-else :user-points="totalCorrect" />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const isFinished = ref(true)
const totalCorrect = ref(0)

const handleSubmission = () => {
  isFinished.value = true
}

</script>

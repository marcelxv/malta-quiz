<template>
  <div>
    <QuizForm v-if="!isFinished" :total-correct="totalCorrect" @finish="handleSubmission" />
    <ResultsForm v-else :user-points="totalCorrect" />
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import { useUserStore } from '../stores/user'

const store = useUserStore()

const isFinished = ref(false)
const totalCorrect = computed(() => store.$state.points)

const handleSubmission = () => {
  isFinished.value = true
}

</script>

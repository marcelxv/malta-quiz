<template>
  <div class="quiz__container">
    <QuizForm v-if="!isFinished" :total-correct="totalCorrect" @finish="handleSubmission" />
    <ResultSummary v-else :user-points="totalCorrect" />
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

<style scoped lang="less">
.quiz__container {
  max-width: 600px;
  margin: 0 auto;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
}

</style>

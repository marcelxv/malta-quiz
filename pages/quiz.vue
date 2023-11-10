<template>
  <main class="quiz__container safe-bottom">
    <QuizIntro v-show="!isStarted" @start="isStarted = true" />
    <QuizForm v-if="!isFinished && isStarted" :total-correct="totalCorrect" @finish="handleSubmission" />
    <ResultSummary v-if="isFinished" :user-points="totalCorrect" />
  </main>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import { useUserStore } from '../stores/user'

useSeoMeta({
  title: 'Malta Trivia - Quiz Game',
  ogTitle: 'Malta Trivia - Quiz Game',
  description: 'Test your knowledge of Malta with this fun quiz!',
  ogDescription: 'Test your knowledge of Malta with this fun quiz!',
  ogImage: '/img/malta_004.jpg',
  twitterCard: 'summary_large_image'
})

const store = useUserStore()

store.$state.points = null
const isFinished = ref(false)
const isStarted = ref(false)
const totalCorrect = computed(() => store.$state.points)

const handleSubmission = () => {
  isFinished.value = true
}

</script>

<style scoped lang="less">
.quiz__intro {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
}

.quiz__container {
  margin: 0 auto;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  height: 100vh;
}
</style>

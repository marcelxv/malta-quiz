<template>
  <div class="quiz__container">
    <div v-show="!isStarted" class="quiz__intro">
      <h1>Quiz</h1>
      <p>Test your knowledge of Malta!</p>
      <button @click="isStarted = true">
        Start
      </button>
    </div>
    <QuizForm v-if="!isFinished && isStarted" :total-correct="totalCorrect" @finish="handleSubmission" />
    <ResultSummary v-if="isFinished" :user-points="totalCorrect" />
  </div>
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

  h1 {
    font-size: 2rem;
    margin-bottom: 0.5rem;
  }

  p {
    font-size: 1rem;
    margin-bottom: 1rem;
  }

  button {
    padding: 0.5rem 1rem;
    border-radius: 0.25rem;
    border: none;
    background: var(--sunglow);
    color: #fff;
    font-size: 1rem;
    font-weight: 700;
    cursor: pointer;
    transition: all 0.2s ease-in-out;

    &:hover {
      background: var(--sunglow-dark);
    }
  }
}

.quiz__container {
  // background: url('https://media.gq.com/photos/5bc4b85c6f8daa7dae417db4/16:9/w_2240,c_limit/travel-guide-gq-malta.jpg');
  margin: 0 auto;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
}
</style>

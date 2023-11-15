<template>
  <div class="quiz-container">
    <div class="parallax bg">
      /
    </div>
    <QuestionItem
      :question-number="currentQuestion"
      :total-questions="totalQuestions"
      :current-question="currentQuestion"
      :rendered-question="renderedQuestion"
      @update-answer="handleUpdateAnswer"
    />
    <button :disabled="!userAnswers[currentQuestion]" @click="handleNext">
      Next
    </button>
    <QuizProgress :total-correct="totalCorrect" :total-questions="totalQuestions" @next="handleNext" />
  </div>
</template>

<script setup lang="ts">
import { ref, defineEmits, computed } from 'vue'
import { useUserStore } from '../stores/user'
import { useQuestions } from '../composables/useQuestions'

const store = useUserStore()
const totalCorrect = computed(() => store.$state.points)

const { questions, totalQuestions, currentQuestion, rightAnswer, renderedQuestion, shuffleOptionsOrder } = useQuestions('/data/questions.json')

const userAnswers = ref<string[]>([])

const emit = defineEmits(['finish'])

const handleUpdateAnswer = (answer: string) => {
  userAnswers.value[currentQuestion.value] = answer
}

const handleNext = () => {
  checkAnswer() && store.addPoints(1)

  currentQuestion.value++

  if (currentQuestion.value === totalQuestions.value) {
    emit('finish', true)
    return
  }

  const shuffledOptions = shuffleOptionsOrder(questions.value[currentQuestion.value].options)
  questions.value[currentQuestion.value].options = shuffledOptions
  renderedQuestion.value = questions.value[currentQuestion.value]
  rightAnswer.value = renderedQuestion.value.answer
}

const checkAnswer = () => {
  return userAnswers.value[currentQuestion.value] === rightAnswer.value
}
</script>

<style scoped lang="less">
.quiz-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.bg {
  background-image: url('/img/malta_004.jpg');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  width: 100%;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  z-index: -1;
}
</style>

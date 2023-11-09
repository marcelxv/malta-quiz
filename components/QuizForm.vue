<template>
  <div class="quiz-container">
    <div class="parallax" />
    <QuestionItem
      :question-number="currentQuestion"
      :total-questions="totalQuestions"
      :current-question="currentQuestion"
      :rendered-question="renderedQuestion"
      @update-answer="handleUpdateAnswer"
      @next="handleNext"
    />
    <QuizProgress :total-correct="totalCorrect" :total-questions="totalQuestions" @next="handleNext" />
  </div>
</template>

<script setup lang="ts">
import { ref, defineEmits, computed } from 'vue'
import { useUserStore } from '../stores/user'
import { useQuestions } from '../composables/useQuestions'

const store = useUserStore()
const totalCorrect = computed(() => store.$state.points)

const { questions, totalQuestions, currentQuestion, rightAnswer, renderedQuestion, fetchData, shuffleOptionsOrder } = useQuestions('/data/questions.json')

const userAnswers = ref<string[]>([])

const emit = defineEmits(['finish'])

const handleUpdateAnswer = (answer : string) => {
  userAnswers.value[currentQuestion.value] = answer
}

const handleNext = () => {
  if (checkAnswer()) {
    alert('Correct!')
    store.addPoints(1)
  } else {
    alert('Wrong!')
  }
  currentQuestion.value++

  if (currentQuestion.value === totalQuestions.value) {
    alert(`You got ${totalCorrect.value} out of ${totalQuestions.value} correct!`)
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
</style>
../composables/useQuestions

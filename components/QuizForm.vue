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
import { ref, onMounted, defineEmits, computed } from 'vue'
import { useUserStore } from '../stores/user'

type IQuestion = {
  text: string
  options: string[]
  answer: string
}

const store = useUserStore()

// general quiz data
const questions: IQuestion[] = []
const totalQuestions = ref(questions.length)
const currentQuestion = ref(0)
const userAnswers: Record<number, string> = {}
const totalCorrect = computed(() => store.$state.points)

// current question data
const rightAnswer = ref('')
const renderedQuestion = ref<IQuestion>({
  text: '',
  options: [],
  answer: ''
})

const emit = defineEmits(['finish'])

const handleUpdateAnswer = (answer: string) => {
  userAnswers[currentQuestion.value] = answer
}

const handleNext = () => {
  if (checkAnswer()) {
    alert('Correct!') // TODO: create and render component
    store.addPoints(1)
  } else {
    alert('Wrong!') // TODO: create and render component
  }
  currentQuestion.value++

  if (currentQuestion.value === totalQuestions.value) {
    alert(`You got ${totalCorrect.value} out of ${totalQuestions.value} correct!`) // TODO: create and render component
    emit('finish', true)
    return
  }

  renderedQuestion.value = questions[currentQuestion.value]
  rightAnswer.value = renderedQuestion.value.answer
}

const checkAnswer = () => {
  return userAnswers[currentQuestion.value] === rightAnswer.value
}

// mounted
onMounted(async () => {
  try {
    const response = await fetch('/data/questions.json')
    questions.push(...(await response.json()))

    totalQuestions.value = questions.length
    renderedQuestion.value = questions[currentQuestion.value]
    rightAnswer.value = renderedQuestion.value.answer
  } catch (error) {
    console.error(error)
  }
})

</script>

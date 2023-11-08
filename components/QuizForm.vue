<template>
  <div class="quiz-container">
    <div class="parallax" />
    <h2>Question {{ currentQuestion + 1 }} of {{ totalQuestions }}</h2>
    <p>{{ questionText }}</p>
    <ul class="options">
      <li v-for="option in options" :key="option">
        <label>
          <input v-model="userAnswers[currentQuestion]" type="radio" :value="option">
          {{ option }}
        </label>
      </li>
    </ul>
    <button @click="handleNext">
      Next
    </button>
    <UserResults :total-correct="totalCorrect" :total-questions="totalQuestions" />
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, defineEmits } from 'vue'
import questions from '../data/questions.json'

// general quiz data
const totalQuestions = ref(questions.length)
const currentQuestion = ref(0)
const userAnswers = ref([]) // array of user answers
const totalCorrect = ref(0)

// current question data
const rightAnswer = ref('')
const questionText = ref('')
const options = ref([])

const emit = defineEmits(['finish'])

// methods
const handleNext = () => {
  // should check if user has selected the right answer
  if (checkAnswer()) {
    alert('Correct!')
    totalCorrect.value++
  } else {
    alert('Wrong!')
  }
  // and increment currentQuestion
  currentQuestion.value++

  // if we are on the last question, show the results
  if (currentQuestion.value === totalQuestions.value) {
    alert(`You got ${totalCorrect.value} out of ${totalQuestions.value} correct!`)
    // navigate to the home page
    emit('finish', true)
    return
  }

  // otherwise, show the next question
  questionText.value = questions[currentQuestion.value].text
  options.value = questions[currentQuestion.value].options
  rightAnswer.value = questions[currentQuestion.value].answer
}

const checkAnswer = () => {
  return userAnswers.value[currentQuestion.value] === rightAnswer.value
}

// mounted
onMounted(() => {
  questionText.value = questions[currentQuestion.value].text
  options.value = questions[currentQuestion.value].options
  rightAnswer.value = questions[currentQuestion.value].answer
})

</script>

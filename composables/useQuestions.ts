import { ref, onMounted, computed } from 'vue'

export function useQuestions (url) {
  const questions = ref([])
  const totalQuestions = computed(() => questions.value.length)
  const currentQuestion = ref(0)
  const rightAnswer = ref('')
  const renderedQuestion = ref({
    text: '',
    options: [],
    answer: ''
  })

  const fetchData = async () => {
    try {
      const response = await fetch(url)
      questions.value = await response.json()

      const shuffledOptions = shuffleOptionsOrder(questions.value[currentQuestion.value].options)
      questions.value[currentQuestion.value].options = shuffledOptions
      renderedQuestion.value = questions.value[currentQuestion.value]
      rightAnswer.value = renderedQuestion.value.answer
    } catch (error) {
      console.error(error)
    }
  }

  const shuffleOptionsOrder = (options) => {
    return options.sort(() => Math.random() - 0.5)
  }

  onMounted(fetchData)

  return {
    questions,
    totalQuestions,
    currentQuestion,
    rightAnswer,
    renderedQuestion,
    fetchData,
    shuffleOptionsOrder
  }
}

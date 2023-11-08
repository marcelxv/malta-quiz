<template>
  <div>
    <h2>Question {{ questionNumber + 1 }} of {{ totalQuestions }}</h2>
    <p>{{ renderedQuestion.text }}</p>
    <li v-for="option in renderedQuestion.options" :key="option" class="option-list">
      <label>
        <input type="radio" :value="option" name="answer" @change="updateAnswer">
        {{ option }}
      </label>
    </li>
    <button @click="handleNext">
      Next
    </button>
  </div>
</template>

<script setup lang="ts">
import { defineProps, defineEmits } from 'vue'

type IQuestion = {
  text: string
  options: string[]
  answer: string
}

defineProps({
  questionNumber: {
    type: Number,
    required: true
  },
  totalQuestions: {
    type: Number,
    required: true
  },
  renderedQuestion: {
    type: Object as () => IQuestion,
    required: true
  }
})

const emit = defineEmits(['update-answer', 'next'])

const updateAnswer = (event: Event) => {
  emit('update-answer', (event.target as HTMLInputElement).value)
}

const handleNext = () => {
  emit('next')
}

</script>

<style scoped lang="less">
.option-list {
  list-style: none;
  padding: 0;
  margin: 0.5rem 0;
  display: flex;
}

</style>

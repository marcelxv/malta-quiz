<template>
  <div class="question-item_container">
    <h2>Question {{ questionNumber + 1 }} of {{ totalQuestions }}</h2>
    <p>{{ renderedQuestion.text }}</p>
    <ClientOnly>
      <div class="question-item__option-list">
        <li v-for="option in renderedQuestion.options" :key="option">
          <label>
            <input type="radio" :value="option" name="answer" @change="updateAnswer">
            {{ option }}
          </label>
        </li>
      </div>
      <template #fallback>
        <div class="question-item__skeleton" />
        <div class="question-item__skeleton" />
      </template>
    </ClientOnly>
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
.question-item__option-list {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: 0;
  list-style: none;
  padding: 0;
  margin: 0.5rem 0;
  display: flex;

  input {
    margin: 1rem;
    background: var(--pumpkin);
    padding: 1rem;
    border-radius: var(--border-radius);
    color: var(--white);

    &:checked {
      background: var(--zomp);
    }
  }

  input[type="radio"] {
    appearance: none;
    -webkit-appearance: none;
    -moz-appearance: none;
    height: 1rem;
    width: 1rem;
    border-radius: 50%;
    border: 2px solid var(--white);
    outline: none;
    transition: all 0.2s ease-in-out;
    cursor: pointer;

    &:checked {
      background-color: var(--zomp);
    }
  }

  li {
    margin: 0 1rem;
    text-align: center;
  }

}

.question-item_container {
  background: var(--white);
  height: 320px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 1rem;
  border-radius: var(--border-radius);
  margin: 1rem auto;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
}

.question-item_container h2 {
  margin: 0;
}

.question-item__skeleton {
  margin: 0.5rem 0;
  animation: pulse 1s infinite;
  background-color: #ccc;
  border-radius: var(--border-radius);
  height: 20px;
  width: 100%;

  @keyframes pulse {
    0% {
      opacity: 0.4;
    }

    50% {
      opacity: 0.8;
    }

    100% {
      opacity: 0.4;
    }
  }

}
</style>

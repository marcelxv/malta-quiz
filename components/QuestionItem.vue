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
    <DefaultButton @click="handleNext">
      Next
    </DefaultButton>
  </div>
</template>

<script setup lang="ts">
import { defineProps, defineEmits } from 'vue'
import DefaultButton from './DefaultButton.vue'

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
  flex-direction: column; // stack options vertically for better readability
  align-items: flex-start; // align radio buttons to the start of the container
  list-style: none;
  padding: 0;
  margin: 0.5rem 0;

  li {
    margin: 0.5rem 0; // give some space between options
  }
}

input[type="radio"] {
  margin-right: 0.5rem; // space out the radio button from the label text
  cursor: pointer;
  &:focus {
    outline: 2px solid var(--blue); // clear focus indicator
  }
  &:checked {
    accent-color: var(--zomp); // use accent-color for better support
  }
}

.question-item_container {
  background-color: #fff;
  position: relative; // to position pseudo-elements
  transition: transform 0.3s ease; // smooth transformation on hover
  border: 1px solid hsl(0, 0%, 80%);
  padding: 2rem;
  width: 300px;
  height: 400px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;

  // Pseudo-element for the effect of additional cards behind
  &:before,
  &:after {
    content: '';
    background-color: #fff;
    border: 1px solid hsl(0, 0%, 80%);
    // box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
    transition: transform 0.3s ease;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
  }

  &:before {
    transform: translate(-10px, -10px); // move the pseudo-element to the top left
    z-index: -1;
  }

  &:after {
    transform: translate(10px, 10px); // move the pseudo-element to the bottom right
    z-index: -2;
  }

  // Hover effect to lift the card up
  &:hover {
    transform: translate(0, -10px); // move the card up

    &:before {
      transform: translate(-15px, -15px); // move further to exaggerate the effect
    }

    &:after {
      transform: translate(15px, 15px); // move further to exaggerate the effect
    }
  }
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

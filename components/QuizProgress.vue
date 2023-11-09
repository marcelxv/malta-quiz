<template>
  <div class="quiz-progress__wrapper">
    <h3>Results</h3>
    <p>You got {{ totalCorrect }} out of {{ totalQuestions }} correct!</p>
    <div class="progress-bar">
      <div class="progress" :style="{ width: (totalCorrect / totalQuestions * 100) + '%' }" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { defineProps } from 'vue'

defineProps({
  totalCorrect: {
    type: Number,
    required: true
  },
  totalQuestions: {
    type: Number,
    required: true
  }
})

</script>

<style scoped lang="less">
.quiz-progress__wrapper {
  background-color: #fff;
  padding: 1rem;
  border-radius: 5px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  margin: 1rem;
  text-align: center;
  width: 100%;
  max-width: 500px;
}

.progress-bar {
  width: 100%;
  background-color: #f3f3f3;
  border-radius: 5px;

}

.progress {
  height: 20px;
  background-color: var(--pumpkin);
  border-radius: 5px;
  animation: progress 1s ease-in-out;
  transition: width 1s ease-in-out;

  @keyframes progress {
    from {
      width: 0;
    }
  }
}
</style>

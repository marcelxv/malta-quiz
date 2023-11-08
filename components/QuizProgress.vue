<template>
  <div>
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
.progress-bar {
  width: 100%;
  background-color: #f3f3f3;
  border-radius: 5px;
}

.progress {
  height: 20px;
  background-color: #4caf50;
  border-radius: 5px;
}
</style>

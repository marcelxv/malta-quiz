<template>
  <div class="result-summary__container">
    <div class="result-summary__card">
      <h2 class="result-summary__title">
        You got {{ props.userPoints }} points!
      </h2>
      <h4 class="result-summary__ranking-title">
        You are better than {{ percentageBetterThanOthers }}% of the players!
      </h4>
      <div class="result-summary__ranking-list">
        <li
          v-for="item in sortedRanking"
          :key="item.username"
          :class="[{ 'result-summary__user-item': item.username === 'You' }, 'result-summary__ranking-item']"
        >
          {{ item.username }} -
          {{ item.score }} points
        </li>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { defineProps } from 'vue'
import { useRanking } from '../composables/useRanking'

const props = defineProps<{
  userPoints: number
}>()

const { sortedRanking, percentageBetterThanOthers } = useRanking(props.userPoints)

</script>

<style scoped lang="less">
.result-summary_container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
}

.result-summary__title {
  font-size: 2rem;
  margin: 0.5rem 0;
}

.result-summary__card {
  background-color: var(--white);
  padding: 2rem;
  border-radius: var(--border-radius);
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
}

.result-summary__ranking-title {
  font-size: 1.5rem;
  margin: 0.5rem 0;
}

.result-summary__ranking-list {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 0;
  list-style: none;
  margin: 0.5rem 0;
  width: 100%;
  padding: 2rem;
}

.result-summary__ranking-item {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 0.5rem 1rem;
  border-radius: var(--border-radius);
  margin: 0.5rem 0;

  animation: fadeIn 0.5s ease-in-out;
}

.result-summary__user-item {
  background-color: var(--zomp);
  color: white;
  // transition effect sliding up when it appears
  animation: slide-up 0.5s ease-in-out;

  @keyframes slide-up {
    0% {
      transform: translateY(100%);
    }

    100% {
      transform: translateY(0);
    }
  }
}
</style>

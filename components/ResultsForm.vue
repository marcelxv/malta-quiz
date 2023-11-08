<template>
  <div>
    Results!
    <p>You got {{ userPoints }} points!</p>
    <ol>
      <li
        v-for="item in sortedRanking"
        :key="item.username"
        :class="[{ 'user-item': item.username === 'You' }, 'ranking-item']"
      >
        {{ item.username }}
        {{ item.score }} points
      </li>
    </ol>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onBeforeMount } from 'vue'
import results from '../data/ranking.json'

type RankingItem = {
  score: number
  username: string
  position?: number
}

const userPoints = ref(10)
const ranking = ref<RankingItem[]>([])

function calculateRanking (rankingData: RankingItem[]): RankingItem[] {
  // Copy the array to avoid mutations on reactive data
  const rankingWithUser = [...rankingData]

  // Check if user is already in the ranking
  const userIndex = rankingWithUser.findIndex(item => item.username === 'You')

  if (userIndex === -1) {
    // Add the user if they're not in the ranking
    rankingWithUser.push({ score: userPoints.value, username: 'You' })
  } else {
    // Update the user's score if they are
    rankingWithUser[userIndex].score = userPoints.value
  }

  // Sort the ranking by score
  rankingWithUser.sort((a, b) => b.score - a.score)

  // Assign positions
  return rankingWithUser.map((item, index) => ({
    ...item,
    position: index + 1
  }))
}

const sortedRanking = computed(() => calculateRanking(ranking.value))

onBeforeMount(() => {
  ranking.value = JSON.parse(JSON.stringify(results))
})

</script>

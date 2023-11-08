<template>
  <div>
    Results!
    <p>You got {{ props.userPoints }} points!</p>
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
    <p>You were better then {{ percentageBetterThanOthers }}% of other users!</p>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, defineProps } from 'vue'

type RankingItem = {
  score: number
  username: string
  position?: number
}

const props = defineProps<{
  userPoints: number
}>()

const ranking = ref<RankingItem[]>([])

const calculateRanking = (rankingData: RankingItem[]): RankingItem[] => {
  const rankingWithUser = [...rankingData]
  const userIndex = rankingWithUser.findIndex(item => item.username === 'You')

  if (userIndex === -1) {
    rankingWithUser.push({ score: props.userPoints, username: 'You' })
  } else {
    rankingWithUser[userIndex].score = props.userPoints
  }

  rankingWithUser.sort((a, b) => b.score - a.score)

  return rankingWithUser.map((item, index) => ({
    ...item,
    position: index + 1
  }))
}
const sortedRanking = computed(() => calculateRanking(ranking.value))

const percentageBetterThanOthers = computed(() => {
  const userIndex = sortedRanking.value.findIndex(item => item.username === 'You')
  const totalUsers = sortedRanking.value.length

  return Math.round((totalUsers - userIndex - 1) / (totalUsers - 1) * 100)
})

onMounted(async () => {
  try {
    const response = await fetch('/data/ranking.json')
    const results: RankingItem[] = await response.json()
    ranking.value = results
  } catch (error) {
    console.error(error)
  }
})
</script>

<style scoped lang="less">
.ranking-item {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 200px;
  padding: 0.5rem 1rem;
  // border-radius: (--border-radius);
  background-color: #fff;
  margin: 0.5rem 0;

  animation: fadeIn 0.5s ease-in-out;
}

.user-item {
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

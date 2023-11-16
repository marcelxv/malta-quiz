import { ref, computed, onMounted } from 'vue'

export const useRanking = (userPoints) => {
  const ranking = ref([])

  const calculateRanking = (rankingData) => {
    const rankingWithUser = [...rankingData]
    const userIndex = rankingWithUser.findIndex(item => item.username === 'You')

    if (userIndex === -1) {
      rankingWithUser.push({ score: userPoints, username: 'You' })
    } else {
      rankingWithUser[userIndex].score = userPoints
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

  onMounted(async() => {
    try {
      const response = await fetch('/data/ranking.json')
      const results = await response.json()
      ranking.value = results
    } catch (error) {
      console.error(error) // eslint-disable-line no-console
    }
  })

  return {
    sortedRanking,
    percentageBetterThanOthers
  }
}

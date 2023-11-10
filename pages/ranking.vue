<template>
  <div class="container">
    <ResultSummary :user-points="totalCorrect" />
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useUserStore } from '../stores/user'

useSeoMeta({
  title: 'Ranking - Malta Trivia',
  ogTitle: 'Ranking - Malta Trivia',
  description: 'Check your ranking among other players.',
  ogDescription: 'Check your ranking among other players.',
  ogImage: '/img/malta_004.jpg',
  twitterCard: 'summary_large_image'
})

const store = useUserStore()

const totalCorrect = computed(() => store.$state.points)

</script>

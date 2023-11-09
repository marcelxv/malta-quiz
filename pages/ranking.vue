<template>
  <ResultSummary :user-points="totalCorrect" />
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useUserStore } from '../stores/user'

const store = useUserStore()

const totalCorrect = computed(() => store.$state.points)

</script>

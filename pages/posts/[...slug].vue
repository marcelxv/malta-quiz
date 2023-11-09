<template>
  <main class="container safe-bottom ">
    <h1>{{ title }}</h1>
    <ContentDoc v-slot="{ doc }">
      <article>
        <h1>{{ doc.title }}</h1>
        <img :src="doc.image" :alt="doc.title" class="img-fluid" />
        <ContentRenderer :value="doc" />
      </article>
    </ContentDoc>
    <RedirectButton to="/quiz">
      Start Quiz
    </RedirectButton>
  </main>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const slug = ref<string[]>([])

const content = ref<string>('')

const toc = ref<TocItem[]>([])

const title = ref<string>('')

</script>

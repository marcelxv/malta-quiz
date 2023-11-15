<template>
  <main class="container safe-bottom ">
    <ContentDoc v-slot="{ doc }">
      <article>
        <h1>{{ doc.title }}</h1>
        <img :src="doc.image" :alt="doc.title" loading="eager">
        <ContentRenderer :value="doc" />
      </article>
    </ContentDoc>
    <RedirectButton to="/quiz">
      Start Quiz
    </RedirectButton>
  </main>
</template>

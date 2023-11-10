<template>
  <main class="container safe-bottom">
    <h1>Blog</h1>
    <section class="blog-list">
      <div v-for="blog in content" :key="blog.id" class="blog-item">
        <div class="blog-item__image">
          <img :src="blog.image">
        </div>
        <div class="blog-item__content">
          <h2>{{ blog.title }}</h2>
          <p>{{ blog.description }}</p>
          <router-link :to="`/posts/${blog.path}`">
            Read More
          </router-link>
        </div>
      </div>
    </section>
  </main>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const content = ref([
  {
    id: '1',
    title: 'A Great Place to Visit',
    description: 'Discover why Malta is a great place to visit.',
    image: '/img/malta_001.jpg',
    path: 'great-place-to-visit'
  },
  {
    id: '2',
    title: 'A Festive Heartbeat',
    description: 'Discover why Malta is a great place to visit.',
    image: '/img/malta_002.jpg',
    path: 'festive-heartbeat'
  },
  {
    id: '3',
    title: 'Leisure and Luxury',
    description: 'Discover why Malta is a great place to visit.',
    image: '/img/malta_003.jpg',
    path: 'leisure-and-luxury'
  },
  {
    id: '4',
    title: 'Historical Tapestry',
    description: 'Discover why Malta is a great place to visit.',
    image: '/img/malta_004.jpg',
    path: 'historical-tapestry'
  },
  {
    id: '5',
    title: 'Underwater Wonderland',
    description: 'Discover why Malta is a great place to visit.',
    image: '/img/malta_004.jpg',
    path: 'underwater-wonderland'
  }
])

</script>

<style scoped lang="less">
.blog-list {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}

.blog-item {
  width: 100%;
  margin-bottom: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.blog-item__image {
  width: 100%;
  height: 200px;
  overflow: hidden;
  margin-bottom: 1rem;
}

.blog-item__image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.blog-item__content {
  width: 100%;
  text-align: center;
}
</style>

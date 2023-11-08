<template>
  <div>
    <div class="section">
      <ParallaxSection image="/img/malta_001.jpg">
        <div class="container">
          <h1>Try Malta's Quiz</h1>
          <p>Test your knowledge of Malta with this fun quiz!</p>
          <RedirectButton to="/quiz">
            Start Quiz
          </RedirectButton>
        </div>
      </ParallaxSection>
    </div>

    <div class="section">
      <ParallaxSection image="/img/malta_002.jpg">
        <div class="container">
          <h1>Know more about Malta</h1>
          <p>
            Malta is a small island in the Mediterranean Sea. It is a popular tourist destination, and is known for its
            beautiful beaches and rich history.
          </p>
          <RedirectButton to="/about">
            Learn More
          </RedirectButton>
        </div>
      </ParallaxSection>
    </div>
    <div class="section">
      <ParallaxSection image="/img/malta_001.jpg">
        <div class="container">
          <h1>Ranking</h1>
          <p>
            Get to know your ranking among other players. You can also see the top 10 players.
          </p>
          <RedirectButton to="/about">
            Check Ranking
          </RedirectButton>
        </div>
      </ParallaxSection>
    </div>
  </div>
</template>

<style scoped lang="less">

.container {
  max-width: 800px;
  text-align: center;
}

</style>

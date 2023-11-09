<template>
  <div class="bottom-bar-nav">
    <div class="bottom-bar-nav__item">
      <router-link to="/">
        <span class="bottom-bar-nav__link">Home</span>
      </router-link>
    </div>
    <div class="bottom-bar-nav__item">
      <router-link to="/quiz" exact>
        <span class="bottom-bar-nav__link">Quiz</span>
      </router-link>
    </div>
    <div class="bottom-bar-nav__item">
      <router-link to="/ranking">
        <span class="bottom-bar-nav__link">Ranking</span>
      </router-link>
    </div>
  </div>
</template>

<style scoped lang="less">
.bottom-bar-nav {
  display: flex;
  justify-content: space-around;
  align-items: center;
  background: #fff;
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 3rem;
  border-top: 1px solid #ccc;
}

.bottom-bar-nav__item {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 100%;
  text-align: center;
  font-size: 0.75rem;
  font-weight: 700;
  color: #000;
  text-decoration: none;
  transition: all 0.2s ease-in-out;
}

.bottom-bar-nav__link {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 100%;
  text-align: center;
  font-size: 1rem;
  font-weight: 700;
  color: #000;
  text-decoration: none;
  transition: all 0.2s ease-in-out;
}
</style>

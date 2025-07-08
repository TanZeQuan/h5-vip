<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()

function handleMoreClick() {
  router.push('/more-games') // Replace with your actual route path
}
// Hot game images
import hotGame1 from '@/assets/hot-games/hot-gm1.png'
import hotGame2 from '@/assets/hot-games/hot-gm2.png'
import hotGame3 from '@/assets/hot-games/hot-gm3.png'
import hotGame4 from '@/assets/hot-games/hot-gm4.png'
import hotGame5 from '@/assets/hot-games/hot-gm5.png'
import hotGame6 from '@/assets/hot-games/hot-gm6.png'
import hotGame7 from '@/assets/hot-games/hot-gm7.png'
import hotGame8 from '@/assets/hot-games/hot-gm8.png'

const games = [
  { id: 1, title: 'Songkran S...', img: hotGame1, badge: 'PG' },
  { id: 2, title: 'Mahjong Wa...', img: hotGame2, badge: 'PG' },
  { id: 3, title: 'Thai Hi Lo', img: hotGame3, badge: 'SEXY' },
  { id: 4, title: 'Happy Fishing', img: hotGame4, badge: 'JILI' },
  { id: 5, title: 'Lucky Neko', img: hotGame5, badge: 'PG' },
  { id: 6, title: 'Rich Mahjong', img: hotGame6, badge: 'RSG' },
  { id: 7, title: 'Thai River...', img: hotGame7, badge: 'PG' },
  { id: 8, title: 'Golden Empire', img: hotGame8, badge: 'JILI' }
]
</script>

<template>
<div class="hot-games-wrapper">
  <div class="hot-games-inner">
    <div class="hot-games-section">
      <div class="section-title">
        <img src="@/assets/hot-games/fire-i.svg" alt="Hot" class="fire-icon" />
        <span>Hot Games</span>
      </div>

      <div class="games-grid">
        <div class="game-card" v-for="game in games" :key="game.id" style="cursor: pointer;">
          <div class="game-badge" v-if="game.badge" style="cursor: pointer;">{{ game.badge }}</div>
          <img v-if="game.img" :src="game.img" class="game-img" :alt="game.title" style="cursor: pointer;" />
          <div class="game-title" style="cursor: pointer;">{{ game.title }}</div>
        </div>

        <div class="game-card more-card" style="cursor: pointer;" @click="handleMoreClick">
          <van-icon name="apps-o" class="more-icon" />
          <div class="game-title">MORE</div>
        </div>
      </div>
    </div>
  </div>
</div>
</template>

<style scoped>
.hot-games-wrapper{
  margin:6px;
}

.hot-games-section {
  position: relative;
  padding: 1rem;
  max-width: 480px;
  margin: auto;
  font-family: 'Noto Sans', sans-serif;
  overflow: hidden;
  background-image: url('@/assets/hot-games/game-bg.png'); 
}

.hot-tab-bg {
  position: absolute;
  top: 0;
  left: 0;
  width: 180px;
  height: 60px;
  background-color: #0e1524;
  border-bottom-right-radius: 30px;
  z-index: 0;
}

.section-title {
  position: relative;
  z-index: 1;
  display: flex;
  align-items: center;
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 1rem;
  /* Text gradient styling */
  background: linear-gradient(90deg, rgba(255, 245, 226, 0.99), hsla(33, 72%, 79%, 0.99));
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  color: transparent;
}

.fire-icon {
  width: 20px;
  margin-right: 8px;
}

/* 🟦 Game Grid Layout */
.games-grid {
  position: relative;
  z-index: 1;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 12px;
}

/* 🃏 Game Card */
.game-card {
  position: relative;
  text-align: center;
  border-radius: 6px 2px 6px 6px; 
  overflow: hidden;
  padding-bottom: 5px;
}

/* 📷 Game Image */
.game-img {
  width: 100%;
  height: auto;
  display: block;
  border-bottom: 2px solid transparent;
}

/* 🏷 Game Badge (Top-Right) */
.game-badge {
  position: absolute;
  right: 0px;
  z-index: 1;
  background: linear-gradient(90deg, rgba(255, 245, 226, 0.99), hsla(33, 72%, 79%, 0.99));
  color: #1d212d;
  font-size: 13px;
  font-weight:bold;
  padding: 3px 10px;
  border-radius: 3px;
}

/* 🎮 Game Title Text */
.game-title {
  margin-top: 8px;
  padding: 0 4px;
  font-size: 15px;
  font-weight: bold;
   background: linear-gradient(90deg, rgba(255, 245, 226, 0.99), hsla(33, 72%, 79%, 0.99));
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  text-align: left;
  color: transparent;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

/* ➕ "More" Game Card */
.more-card {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #282b34;
  border-radius: 1.2rem;
  border: 1px solid #707070;
}

.games-grid{
  padding-top:10px;
}

/* ➕ Icon Inside "More" Card */
.more-icon {
  color: white;
  font-size: 30px;
  cursor: pointer;
}

</style>
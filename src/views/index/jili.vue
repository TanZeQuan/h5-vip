<script setup>
import { ref, computed } from 'vue'
import { Icon } from 'vant'
// Hot game images
import hotGame1 from '@/assets/hot-games/jili1.png'
import hotGame2 from '@/assets/hot-games/jili2.png'
import hotGame3 from '@/assets/hot-games/jili3.png'
import hotGame4 from '@/assets/hot-games/jili4.png'
import hotGame5 from '@/assets/hot-games/jili5.png'
import hotGame6 from '@/assets/hot-games/jili6.png'
import hotGame7 from '@/assets/hot-games/jili7.png'
import hotGame8 from '@/assets/hot-games/jili8.png'
import hotGame9 from '@/assets/hot-games/jili9.png'
import hotGame10 from '@/assets/hot-games/jili10.png'
import hotGame11 from '@/assets/hot-games/jili11.png'
import hotGame12 from '@/assets/hot-games/jili12.png'

// Sample game data - expanded to multiple pages
const allGames = [
  // Page 1
  [
    { id: 1, title: 'Golden Empire 2', img: hotGame1, badge: 'JILI' },
    { id: 2, title: 'Mines Grand', img: hotGame2, badge: 'JILI' },
    { id: 3, title: 'Clover Coins 3x3', img: hotGame3, badge: 'JILI' },
    { id: 4, title: 'Bikini Lady', img: hotGame4, badge: 'JILI' },
    { id: 5, title: '3 Witch Lamp', img: hotGame5, badge: 'JILI' },
    { id: 6, title: 'Money Pot Deluxe', img: hotGame6, badge: 'JILI' },
    // { id: 7, title: 'Thai River...', img: hotGame7, badge: 'PG' },
    // { id: 8, title: 'Golden Empire', img: hotGame8, badge: 'JILI' }
  ],
  // Page 2
  [
    { id: 7, title: 'JILL JILL', img: hotGame7, badge: 'JILI' },
    { id: 8, title: 'CLEVER', img: hotGame8, badge: 'JILI' },
    { id: 9, title: 'COINS&YO', img: hotGame9, badge: 'JILI' },
    { id: 10, title: 'PIRATE', img: hotGame10, badge: 'JILI' },
    { id: 11, title: 'PERFECT', img: hotGame11, badge: 'JILI' },
    { id: 12, title: 'HIT THIS CASHIN', img: hotGame12, badge: 'JILI' },
  ],
  // Page 3
  [
    { id: 13, title: 'COLDEN', img: hotGame1, badge: 'PG' },
    { id: 14, title: 'JOKER', img: hotGame2, badge: 'JILI' },
    { id: 15, title: 'TREASURE', img: hotGame3, badge: 'SEXY' },
    { id: 16, title: 'COINS', img: hotGame4, badge: 'PG' },
    { id: 17, title: 'HIT THIS CASHIN', img: hotGame5, badge: 'RSG' },
    { id: 18, title: 'Money Pot D...', img: hotGame6, badge: 'JILI' },
  ]
]

const currentPage = ref(0)
const totalPages = allGames.length

const games = computed(() => allGames[currentPage.value])

const nextPage = () => {
  if (currentPage.value < totalPages - 1) {
    currentPage.value++
  }
}

const prevPage = () => {
  if (currentPage.value > 0) {
    currentPage.value--
  }
}
</script>

<template>
<div class="my-games-container">
  <div class="my-games-content">
    <div class="my-games-section">
      <div class="my-section-header">
        <div class="my-section-title">
          <img src="@/assets/hot-games/jili-i.png" alt="Hot" class="my-jili-icon" />
          <span>JILI</span>
        </div>
        <div class="my-pagination" v-if="totalPages > 1">
          <van-button 
            round 
            size="mini" 
            class="my-page-btn" 
            :disabled="currentPage === 0"
            @click="prevPage"
          >
            <Icon name="arrow-left" size="14" />
          </van-button>
          <van-button 
            round 
            size="mini" 
            class="my-page-btn" 
            :disabled="currentPage === totalPages - 1"
            @click="nextPage"
          >
            <Icon name="arrow" size="14" />
          </van-button>
        </div>
      </div>

      <div class="my-games-grid">
        <div class="my-game-item" v-for="game in games" :key="game.id">
          <div class="my-game-tag" v-if="game.badge">{{ game.badge }}</div>
          <img v-if="game.img" :src="game.img" class="my-game-image" :alt="game.title" />
          <div class="my-game-name">{{ game.title }}</div>
        </div>
      </div>
    </div>
  </div>
</div>
</template>

<style scoped>
.my-games-container {
  margin: 30px 6px 6px 6px; /* top, right, bottom, left */
  margin-bottom:30px;
}

/* Main games section */
.my-games-section {
  position: relative;
  padding: 1rem;
  max-width: 480px;
  margin: auto;
  font-family: 'Noto Sans', sans-serif;
  overflow: hidden;
  background-image: url('@/assets/hot-games/game-bg.png'); 
}

/* Section header */
.my-section-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
}

.my-section-title {
  position: relative;
  z-index: 1;
  display: flex;
  align-items: center;
  font-size: 18px;
  font-weight: bold;
  background: linear-gradient(90deg, rgba(255, 245, 226, 0.99), hsla(33, 72%, 79%, 0.99));
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  color: transparent;
}

.my-jili-icon {
  width: 30px;
  margin-right: 8px;
}

/* Pagination controls */
.my-pagination {
  display: flex;
  gap: 8px;
  align-items: center;
}

.my-page-btn {
  width: 15px;
  height: 18px;
  min-width: 20px;
  padding: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #283046 !important; /* Dark blue background */
  border: none !important;
  border-radius: 0 !important; /* Square corners */
}


/* Make the icon gold */
.my-page-btn .van-icon {
  color: #ffee8d !important; /* Gold color */
  font-size: 14px;
}

.my-page-btn:disabled {
  opacity: 0.5;
}

/* Games grid layout */
.my-games-grid {
  position: relative;
  z-index: 1;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 12px;
  padding-top: 10px;
}

/* Game card */
.my-game-item {
  position: relative;
  text-align: center;
  border-radius: 6px 2px 6px 6px; 
  overflow: hidden;
  padding-bottom: 5px;
  cursor: pointer;
}

/* Game image */
.my-game-image {
  width: 100%;
  height: auto;
  display: block;
  border-bottom: 2px solid transparent;
}

/* Game badge */
.my-game-tag {
  position: absolute;
  right: 0px;
  z-index: 1;
  background: linear-gradient(90deg, rgba(255, 245, 226, 0.99), hsla(33, 72%, 79%, 0.99));
  color: #1d212d;
  font-size: 13px;
  font-weight: bold;
  padding: 3px 10px;
  border-radius: 3px;
}

/* Game title */
.my-game-name {
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

/* More game card */
.my-more-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #282b34;
  border-radius: 1.2rem;
  border: 1px solid #707070;
}

.my-more-icon {
  font-size: 15px;
  color: #fff;
  line-height: 1;
}
</style>
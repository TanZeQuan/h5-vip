<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { showToast } from 'vant'

const router = useRouter()

// Tab icons
import popularIcon from '@/assets/img/tab-fire.png'
import favoriteIcon from '@/assets/img/tab-star.svg'
import jillIcon from '@/assets/img/tab-jili.png'
import sigisIcon from '@/assets/img/tab-slot.svg'
import fishIcon from '@/assets/img/tab-fish.svg'
import tabBadge from '@/assets/img/badge-i.png'

// Game images
import hotGame1 from '@/assets/hot-games/hot-gm1.png'
import hotGame2 from '@/assets/hot-games/hot-gm2.png'
import hotGame3 from '@/assets/hot-games/hot-gm3.png'
import hotGame4 from '@/assets/hot-games/hot-gm4.png'
import hotGame5 from '@/assets/hot-games/hot-gm5.png'
import hotGame6 from '@/assets/hot-games/hot-gm6.png'
import hotGame7 from '@/assets/hot-games/hot-gm7.png'
import hotGame8 from '@/assets/hot-games/hot-gm8.png'

// Tabs
const tabs = ref([
  { id: 'popular', label: 'Popular', icon: popularIcon },
  { id: 'favorite', label: 'My favorite', icon: favoriteIcon },
  { id: 'jill', label: 'JILL', icon: jillIcon },
  { id: 'sigis', label: 'SIGIs', icon: sigisIcon },
  { id: 'fish', label: 'Fish', icon: fishIcon }
])
const activeTab = ref('popular')

// Games
const games = [
  { id: 1, title: 'Songkran S...', img: hotGame1, badge: 'PG' },
  { id: 2, title: 'Mahjong Wa...', img: hotGame2, badge: 'PG' },
  { id: 3, title: 'Thai Hi Lo', img: hotGame3, badge: 'SEXY' },
  { id: 4, title: 'Happy Fishing', img: hotGame4, badge: 'JILI' },
  { id: 5, title: 'Lucky Neko', img: hotGame5, badge: 'PG' },
  { id: 6, title: 'Rich Mahjong', img: hotGame6, badge: 'RSG' },
  { id: 7, title: 'Thai River...', img: hotGame7, badge: 'PG' },
  { id: 8, title: 'Golden Empire', img: hotGame8, badge: 'JILI' },
  { id: 5, title: 'Lucky Neko', img: hotGame5, badge: 'PG' },
  { id: 6, title: 'Rich Mahjong', img: hotGame6, badge: 'RSG' },
  { id: 7, title: 'Thai River...', img: hotGame7, badge: 'PG' },
  { id: 8, title: 'Golden Empire', img: hotGame8, badge: 'JILI' },
  { id: 5, title: 'Lucky Neko', img: hotGame5, badge: 'PG' },
  { id: 6, title: 'Rich Mahjong', img: hotGame6, badge: 'RSG' },
  { id: 7, title: 'Thai River...', img: hotGame7, badge: 'PG' },
  { id: 8, title: 'Golden Empire', img: hotGame8, badge: 'JILI' },
  { id: 8, title: 'Golden Empire', img: hotGame8, badge: 'JILI' },
  { id: 5, title: 'Lucky Neko', img: hotGame5, badge: 'PG' },
  { id: 6, title: 'Rich Mahjong', img: hotGame6, badge: 'RSG' },
  { id: 7, title: 'Thai River...', img: hotGame7, badge: 'PG' },
  { id: 8, title: 'Golden Empire', img: hotGame8, badge: 'JILI' },
  { id: 8, title: 'Golden Empire', img: hotGame8, badge: 'JILI' },
  { id: 5, title: 'Lucky Neko', img: hotGame5, badge: 'PG' },
  { id: 6, title: 'Rich Mahjong', img: hotGame6, badge: 'RSG' },
  { id: 7, title: 'Thai River...', img: hotGame7, badge: 'PG' },
  { id: 8, title: 'Golden Empire', img: hotGame8, badge: 'JILI' }
]

// Header actions
const goBack = () => router.push('/')
const onSearch = () => showToast('Search clicked')
const onMenu = () => showToast('Menu clicked')
</script>

<template>
  <div class="game-center">
    <!-- Header -->
    <div class="header">
      <button class="back-btn" @click="goBack">‹</button>
      <h1 class="header-title">Game Center</h1>
      <div class="right-icons">
        <van-icon name="search" size="20" @click="onSearch" />
        <van-icon name="wap-nav" size="20" @click="onMenu" />
      </div>
    </div>

    <!-- Sticky Tabs -->
    <div class="tab-sticky">
      <div class="category-tabs">
        <button 
        v-for="tab in tabs" 
        :key="tab.id"
        @click="activeTab = tab.id"
        :class="{ active: activeTab === tab.id }"
        >
        <div class="icon-wrapper">
            <!-- Always visible badge -->
            <span 
                class="tab-badge-bg"
                :class="{ active: activeTab === tab.id }"
                :style="{ backgroundImage: `url(${tabBadge})` }"
            />
            <!-- Icon -->
            <img :src="tab.icon" class="tab-icon" :alt="tab.label" />
        </div>
        <span>{{ tab.label }}</span>
        </button>
      </div>
    </div>

    <!-- Games -->
    <div class="hot-games-section">
      <div class="games-grid">
        <div class="game-card" v-for="game in games" :key="game.id">
          <div class="game-badge" v-if="game.badge">{{ game.badge }}</div>
          <img :src="game.img" class="game-img" :alt="game.title" />
          <div class="game-title">{{ game.title }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.game-center {
  font-family: 'Noto Sans', sans-serif;
  color: white;
  min-height: 100vh;
}

/* Header */
.header {
  background: #181f2b;
  color: white;
  padding: 16px;
  height: 36px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: sticky;
  top: 0;
  z-index: 1000;
  border-bottom: 1px solid #fff;
}

.back-btn {
  background: none;
  border: none;
  color: white;
  font-size: 45px;
  cursor: pointer;
  margin-top:-3px;
}

.header-title {
  flex-grow: 1;
  text-align: center;
  font-size: 20px;
  font-weight: 700;
  margin: 0 20px;
  color: white;
}

.right-icons {
  display: flex;
  gap: 12px;
}

.van-icon {
  color: white;
  cursor: pointer;
}

/* Tabs (Sticky) */
/* Tabs (Sticky) */
.tab-sticky {
  position: sticky;
  top: 69px;
  display: flex;
  justify-content: center; /* center align the tab container */
  z-index: 999;
  padding: 10px 0;
   background-color: #1d212d;
}

.category-tabs {
  display: flex;
  justify-content: center;
  gap: 10px; /* spacing between tabs */
  
}

/* Optional: To avoid full stretch buttons */
.category-tabs button {
  border: none;
  background: none;
  font-size: 13px;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-weight: bold;
  color: transparent;
  background: linear-gradient(90deg, rgba(255, 245, 226, 0.99), hsla(33, 72%, 79%, 0.99));
  -webkit-background-clip: text;
  background-clip: text;
  padding: 8px;
}

.tab-icon {
  width: 40px;
  height: 40px;
  object-fit: contain;
  margin-bottom: 2px;
  transition: all 0.3s ease;
}

/* Games */
.hot-games-section {
  padding: 1rem;
  max-width: 480px;
  margin: 1rem auto 0;
}

.games-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 12px;
}

.game-card {
  position: relative;
  text-align: center;
  background-color: #1e1e1e;
  border-radius: 6px;
  overflow: hidden;
  padding-bottom: 5px;
}

.game-img {
  width: 100%;
  display: block;
}

.game-badge {
  position: absolute;
  top: 0;
  right: 0;
  background: linear-gradient(90deg, rgba(255, 245, 226, 0.99), hsla(33, 72%, 79%, 0.99));
  color: #1d212d;
  font-size: 13px;
  font-weight: bold;
  padding: 3px 10px;
  border-radius: 3px;
}

.game-title {
  margin-top: 8px;
  padding: 0 4px;
  font-size: 14px;
  font-weight: bold;
  text-align: left;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  background: linear-gradient(90deg, rgba(255, 245, 226, 0.99), hsla(33, 72%, 79%, 0.99));
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  color: transparent;
}
.icon-wrapper {
  position: relative;
  width: 40px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.tab-badge-bg {
  position: absolute;
  top: 80%;
  left: 50%;
  z-index: -1;
  width: 50px;
  height: 50px;
  background-repeat: no-repeat;
  background-position: center;
  background-size: contain;
  transform: translate(-50%, -70%);
  transition: filter 0.3s ease, opacity 0.3s ease;
}

/* When the tab is active, glow the badge */
.tab-badge-bg.active {
  opacity: 1;
  filter: brightness(1.6) drop-shadow(0 0 6px #fff8cc);
}


/* Glowing hover effect */
.category-tabs button.active:hover .tab-badge-bg {
  filter: brightness(1.6) drop-shadow(0 0 6px #fff8cc);
  opacity: 1;
}

.category-tabs button.active span {
  text-shadow: 0 0 4px #fff3c1;
}

</style>

<script setup>
import { ref, watch, nextTick } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import { showToast } from 'vant'

const router = useRouter()
const route = useRoute() // ✅ useRoute is required to access query/hash
const activeTab = ref('default')

// Watch for tab in query
watch(
  () => route.query.tab,
  (newTab) => {
    if (newTab) {
      activeTab.value = newTab
      scrollToHash()
    }
  },
  { immediate: true }
)

function scrollToHash() {
  nextTick(() => {
    const el = document.querySelector(route.hash)
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' })
    }
  })
}

// Tab icons
import popularIcon from '@/assets/img/tab-fire.png'
import favoriteIcon from '@/assets/img/tab-star.svg'
import jiliIcon from '@/assets/img/tab-jili.png'
import slotIcon from '@/assets/img/tab-slot.svg'
import fishIcon from '@/assets/img/tab-fish.svg'
import liveIcon from '@/assets/subpage/live-i.svg'
import pokerIcon from '@/assets/subpage/poker-i.svg'
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

import hoGame1 from '@/assets/hot-games/jili1.png'
import hoGame2 from '@/assets/hot-games/jili2.png'
import hoGame3 from '@/assets/hot-games/jili3.png'
import hoGame4 from '@/assets/hot-games/jili4.png'
import hoGame5 from '@/assets/hot-games/jili5.png'
import hoGame6 from '@/assets/hot-games/jili6.png'
import hoGame7 from '@/assets/hot-games/jili7.png'
import hoGame8 from '@/assets/hot-games/jili8.png'
import hoGame9 from '@/assets/hot-games/jili9.png'
import hoGame10 from '@/assets/hot-games/jili10.png'
import hoGame11 from '@/assets/hot-games/jili11.png'
import hoGame12 from '@/assets/hot-games/jili12.png'

// Tabs
const tabs = ref([
  { id: 'popular', label: 'Popular', icon: popularIcon },
  { id: 'favorite', label: 'My favorite', icon: favoriteIcon },
  { id: 'jili', label: 'JILL', icon: jiliIcon },
  { id: 'slot', label: 'Slot', icon: slotIcon },
  { id: 'fish', label: 'Fish', icon: fishIcon },
  { id: 'live', label: 'Live', icon: liveIcon },
  { id: 'poker', label: 'Poker', icon: pokerIcon },
])

// Games
const popularGames = [
  { id: 1, title: 'Songkran S...', img: hotGame1, badge: 'PG' },
  { id: 2, title: 'Mahjong Wa...', img: hotGame2, badge: 'PG' },
  { id: 3, title: 'Thai Hi Lo', img: hotGame3, badge: 'SEXY' },
  { id: 4, title: 'Happy Fishing', img: hotGame4, badge: 'JILI' },
  { id: 5, title: 'Lucky Neko', img: hotGame5, badge: 'PG' },
  { id: 6, title: 'Rich Mahjong', img: hotGame6, badge: 'RSG' },
  { id: 7, title: 'Thai River...', img: hotGame7, badge: 'PG' },
  { id: 8, title: 'Golden Empire', img: hotGame8, badge: 'JILI' }
]
const allGames = [
  // Page 1
  [
    { id: 1, title: 'Golden Empire 2', img: hoGame1, badge: 'JILI' },
    { id: 2, title: 'Mines Grand', img: hoGame2, badge: 'JILI' },
    { id: 3, title: 'Clover Coins 3x3', img: hoGame3, badge: 'JILI' },
    { id: 4, title: 'Bikini Lady', img: hoGame4, badge: 'JILI' },
    { id: 5, title: '3 Witch Lamp', img: hoGame5, badge: 'JILI' },
    { id: 6, title: 'Money Pot Deluxe', img: hoGame6, badge: 'JILI' },
    // { id: 7, title: 'Thai River...', img: hotGame7, badge: 'PG' },
    // { id: 8, title: 'Golden Empire', img: hotGame8, badge: 'JILI' }
  ],
  // Page 2
  [
    { id: 7, title: 'JILL JILL', img: hoGame7, badge: 'JILI' },
    { id: 8, title: 'CLEVER', img: hoGame8, badge: 'JILI' },
    { id: 9, title: 'COINS&YO', img: hoGame9, badge: 'JILI' },
    { id: 10, title: 'PIRATE', img: hoGame10, badge: 'JILI' },
    { id: 11, title: 'PERFECT', img: hoGame11, badge: 'JILI' },
    { id: 12, title: 'HIT THIS CASHIN', img: hoGame12, badge: 'JILI' },
  ],
]

const jiliGames = allGames.flat().filter(g => g.badge === 'JILI')
const slotGames = popularGames.filter(g => g.badge === 'PG')
const fishGames = popularGames.filter(g => g.badge === 'JILI')
const liveGames = popularGames.filter(g => g.badge === 'SEXY')


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
      <div class="tab-scroll-container">
        <div class="category-tabs">
          <button 
            v-for="tab in tabs" 
            :key="tab.id"
            @click="activeTab = tab.id"
            :class="{ active: activeTab === tab.id }"
          >
            <div class="icon-wrapper">
              <span 
                class="tab-badge-bg"
                :class="{ active: activeTab === tab.id }"
                :style="{ backgroundImage: `url(${tabBadge})` }"
              />
              <img :src="tab.icon" class="tab-icon" :alt="tab.label" />
            </div>
            <span>{{ tab.label }}</span>
          </button>
        </div>
      </div>
    </div>

    <!-- Tab Content -->
    <div class="tab-content">
      <div v-if="activeTab === 'popular'" class="hot-games-section" id="popular-section">
        <div class="games-grid">
          <div class="game-card" v-for="game in popularGames" :key="game.id">
            <div class="game-badge" v-if="game.badge">{{ game.badge }}</div>
            <img :src="game.img" class="game-img" :alt="game.title" />
            <div class="game-title">{{ game.title }}</div>
          </div>
        </div>
      </div>

      <div v-else-if="activeTab === 'favorite'" class="hot-games-section">
        <p class="no-favorite">You haven't added any favorites yet.</p>
      </div>

      <div v-else-if="activeTab === 'jili'" class="hot-games-section" id="jili-section">
        <div class="games-grid">
          <div class="game-card" v-for="game in jiliGames" :key="game.id">
            <div class="game-badge">{{ game.badge }}</div>
            <img :src="game.img" class="game-img" :alt="game.title" />
            <div class="game-title">{{ game.title }}</div>
          </div>
        </div>
      </div>

      <div v-else-if="activeTab === 'slot'" class="hot-games-section" id="slot-section">
        <div class="games-grid">
          <div class="game-card" v-for="game in slotGames" :key="game.id">
            <div class="game-badge">{{ game.badge }}</div>
            <img :src="game.img" class="game-img" :alt="game.title" />
            <div class="game-title">{{ game.title }}</div>
          </div>
        </div>
      </div>

      <div v-else-if="activeTab === 'fish'" class="hot-games-section" id="fish-section">
        <div class="games-grid">
          <div class="game-card" v-for="game in fishGames" :key="game.id">
            <div class="game-badge">{{ game.badge }}</div>
            <img :src="game.img" class="game-img" :alt="game.title" />
            <div class="game-title">{{ game.title }}</div>
          </div>
        </div>
      </div>

      <div v-else-if="activeTab === 'live'" class="hot-games-section" id="live-section">
        <div class="games-grid">
          <div class="game-card" v-for="game in liveGames" :key="game.id">
            <div class="game-badge">{{ game.badge }}</div>
            <img :src="game.img" class="game-img" :alt="game.title" />
            <div class="game-title">{{ game.title }}</div>
          </div>
        </div>
      </div>

      <div v-else-if="activeTab === 'poker'" class="hot-games-section" id="poker-section">
        <div class="games-grid">
          <div class="game-card" v-for="game in fishGames" :key="game.id">
            <div class="game-badge">{{ game.badge }}</div>
            <img :src="game.img" class="game-img" :alt="game.title" />
            <div class="game-title">{{ game.title }}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
/* Layout Wrapper */
.game-center {
  max-width: 500px;
  margin: 0 auto;
  background: #181f2b;
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
  margin-top: -3px;
}
.header-title {
  flex-grow: 1;
  text-align: center;
  font-size: 20px;
  font-weight: 700;
  margin: 0 20px;
}
.right-icons {
  display: flex;
  gap: 12px;
}
.van-icon {
  color: white;
  cursor: pointer;
}

/* Tab Bar */
.tab-sticky {
  position: sticky;
  top: 69px;
  z-index: 999;
  background-color: #1d212d;
  padding: 10px 0;
  overflow: hidden;
}
.tab-scroll-container {
  display: flex;
  justify-content: flex-start;
  overflow-x: auto;
  scroll-behavior: smooth;
  -webkit-overflow-scrolling: touch;
  padding: 0 1rem;
  width: 100%;
}
.tab-scroll-container::-webkit-scrollbar {
  display: none;
}
.category-tabs {
  display: inline-flex;
  gap: 6px;
  min-width: max-content;
}
.category-tabs button {
  border: none;
  background: none;
  font-size: 13px;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-weight: bold;
  background: linear-gradient(90deg, rgba(255,245,226,0.99), hsla(33,72%,79%,0.99));
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  padding: 8px 6px;
  white-space: nowrap;
  min-width: 60px;
}
.tab-icon {
  width: 40px;
  height: 40px;
  object-fit: contain;
  margin-bottom: 2px;
  transition: all 0.3s ease;
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
.tab-badge-bg.active {
  opacity: 1;
  filter: brightness(1.6) drop-shadow(0 0 6px #fff8cc);
}
.category-tabs button.active:hover .tab-badge-bg {
  filter: brightness(1.6) drop-shadow(0 0 6px #fff8cc);
  opacity: 1;
}
.category-tabs button.active span {
  text-shadow: 0 0 4px #fff3c1;
}

/* Game Grid */
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
  background: linear-gradient(90deg, rgba(255,245,226,0.99), hsla(33,72%,79%,0.99));
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
  background: linear-gradient(90deg, rgba(255,245,226,0.99), hsla(33,72%,79%,0.99));
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  color: transparent;
}

/* Empty State */
.no-favorite {
  text-align: center;
  color: #fff;
}
</style>

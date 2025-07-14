<script setup>
import { ref, computed } from 'vue'

import KPLogo from '@/assets/subpage/poker-pic1.png'
import jiliLogo from '@/assets/subpage/poker-pic2.png'
import cq9Logo from '@/assets/subpage/poker-pic3.png'
import swgLogo from '@/assets/subpage/poker-pic4.png'
import kaLogo from '@/assets/subpage/poker-pic5.png'

// KP SESSION
import PokerImage1 from '@/assets/poker/poker-lot1.png'
import PokerImage2 from '@/assets/poker/poker-lot2.png'
import PokerImage3 from '@/assets/poker/poker-lot3.png'
import PokerImage4 from '@/assets/poker/poker-lot4.png'
import PokerImage5 from '@/assets/poker/poker-lot5.png'
import PokerImage6 from '@/assets/poker/poker-lot6.png'

// KM SESSION
import PokerKM1 from '@/assets/poker/poker-km1.png'
import PokerKM2 from '@/assets/poker/poker-km2.png'
import PokerKM3 from '@/assets/poker/poker-km3.png'
import PokerKM4 from '@/assets/poker/poker-km4.png'
import PokerKM5 from '@/assets/poker/poker-km5.png'
import PokerKM6 from '@/assets/poker/poker-km6.png'

// MP SESSION
import PokerMP1 from '@/assets/poker/poker-mp1.png'
import PokerMP2 from '@/assets/poker/poker-mp2.png'
import PokerMP3 from '@/assets/poker/poker-mp3.png'
import PokerMP4 from '@/assets/poker/poker-mp4.png'
import PokerMP5 from '@/assets/poker/poker-mp5.png'
import PokerMP6 from '@/assets/poker/poker-mp6.png'


const providers = [
  { key: 'KP', name: 'KP', logo: KPLogo },
  { key: 'KM', name: 'JILI', logo: jiliLogo },
  { key: 'MP', name: 'CQ9', logo: cq9Logo },
  { key: '365', name: 'SWG', logo: swgLogo },
  { key: 'V8', name: 'KA', logo: kaLogo }
]

const selectedProvider = ref('KP')
const gamesPerPage = 6

const pageState = ref({
  KP: 1,
  JILI: 1,
  CQ9: 1,
  SWG: 1,
  KA: 1
})

const games = ref([
  { id: 1, title: 'Fortune King...', provider: 'KP', image: PokerImage1, badge: 'KP' },
  { id: 2, title: 'Dinosaur Tyc...', provider: 'KP', image: PokerImage2, badge: 'KP' },
  { id: 3, title: 'Happy Fishing', provider: 'KP', image: PokerImage3, badge: 'KP' },
  { id: 4, title: 'Ocean King ...', provider: 'KP', image: PokerImage4, badge: 'KP' },
  { id: 5, title: 'All-Star Fish...', provider: 'KP', image: PokerImage5, badge: 'KP' },
  { id: 6, title: 'Boom Legend', provider: 'KP', image: PokerImage6, badge: 'KP' },
  

  { id: 1, title: 'FC Game 1', provider: 'KM', image: PokerKM1, badge: 'KM' },
    { id: 2, title: 'FC Game 2', provider: 'KM', image: PokerKM2, badge: 'KM' },
    { id: 3, title: 'FC Game 3', provider: 'KM', image: PokerKM3, badge: 'KM' },
    { id: 4, title: 'FC Game 4', provider: 'KM', image: PokerKM4, badge: 'KM' },
    { id: 5, title: 'FC Game 5', provider: 'KM', image: PokerKM5, badge: 'KM' },
    { id: 6, title: 'FC Game 6', provider: 'KM', image: PokerKM6, badge: 'KM' },
    { id: 7, title: 'FC Game 7', provider: 'KM', image: PokerKM1, badge: 'KM' },
    { id: 8, title: 'FC Game 8', provider: 'KM', image: PokerKM2, badge: 'KM' },
    { id: 9, title: 'FC Game 9', provider: 'KM', image: PokerKM4, badge: 'KM' },
    { id: 10, title: 'FC Game 10', provider: 'KM', image: PokerKM6, badge: 'KM' },
    { id: 11, title: 'FC Game 11', provider: 'KM', image: PokerKM5, badge: 'KM' },


  { id: 1, title: 'CQ9 Game 1', provider: 'MP', image: PokerMP1, badge: 'MP' },
  { id: 2, title: 'CQ9 Game 2', provider: 'MP', image: PokerMP2, badge: 'MP' },
  { id: 3, title: 'CQ9 Game 3', provider: 'MP', image: PokerMP3, badge: 'MP' },
  { id: 4, title: 'CQ9 Game 4', provider: 'MP', image: PokerMP4, badge: 'MP' },
  { id: 5, title: 'CQ9 Game 4', provider: 'MP', image: PokerMP5, badge: 'MP' },
  { id: 6, title: 'CQ9 Game 4', provider: 'MP', image: PokerMP6, badge: 'MP' },

  { id: 1, title: 'SWG Game 1', provider: '365', image: PokerImage2, badge: '365' },
  { id: 2, title: 'SWG Game 2', provider: '365', image: PokerImage2, badge: '365' },
  { id: 3, title: 'SWG Game 3', provider: '365', image: PokerImage3, badge: '365' },
  { id: 4, title: 'SWG Game 4', provider: '365', image: PokerImage4, badge: '365' },
  
  { id: 1, title: 'KA Game 1', provider: 'V8', image: PokerImage2, badge: 'V8' },
  { id: 2, title: 'KA Game 2', provider: 'V8', image: PokerImage4, badge: 'V8' },
  { id: 3, title: 'KA Game 3', provider: 'V8', image: PokerImage5, badge: 'V8' },
  { id: 4, title: 'KA Game 4', provider: 'V8', image: PokerImage1, badge: 'V8' }
])

function changeProvider(provider) {
  selectedProvider.value = provider
  if (!pageState.value[provider]) {
    pageState.value[provider] = 1
  }
}

const filteredGames = computed(() =>
  games.value.filter(game => game.provider === selectedProvider.value)
)

const paginatedGames = computed(() => {
  const page = pageState.value[selectedProvider.value] || 1
  const start = (page - 1) * gamesPerPage
  return filteredGames.value.slice(start, start + gamesPerPage)
})

function nextPage() {
  const current = pageState.value[selectedProvider.value]
  const total = Math.ceil(filteredGames.value.length / gamesPerPage)
  if (current < total) pageState.value[selectedProvider.value]++
}

function prevPage() {
  const current = pageState.value[selectedProvider.value]
  if (current > 1) pageState.value[selectedProvider.value]--
}
</script>

<template>
  <div class="fish-section">
    <div class="fish-container">
      <div class="section-header">
        <div class="section-title">
          <img src="@/assets/subpage/poker-i.svg" alt="Slots Icon" class="title-icon" />
          Poker
        </div>

        <div class="section-actions">
          <button class="nav-btn" @click="prevPage">
            <svg viewBox="0 0 24 24"><polyline points="15,18 9,12 15,6"/></svg>
          </button>

          <!-- <button class="nav-btn see-all">See all</button> -->

          <button class="nav-btn" @click="nextPage">
            <svg viewBox="0 0 24 24"><polyline points="9,18 15,12 9,6"/></svg>
          </button>
        </div>
      </div>

      <div class="provider-tabs-img">
        <div
          v-for="provider in providers"
          :key="provider.key"
          :class="['provider-item', { active: selectedProvider === provider.key }]"
          @click="changeProvider(provider.key)"
        >
          <img v-if="provider.logo" :src="provider.logo" class="provider-logo" alt="logo" />
          <div class="provider-labels">
            <div class="provider-main">{{ provider.key }}</div>
          </div>
          <div v-if="selectedProvider === provider.key" class="arrow-down"></div>
        </div>
      </div>

        <div class="my-games-grid">
          <div class="my-game-item" v-for="game in paginatedGames" :key="game.id">
            <div v-if="game.badge" class="my-game-tag">{{ game.badge }}</div>
            <img :src="game.image" class="my-game-image" :alt="game.title" />
            <div class="my-game-name">{{ game.title }}</div>
          </div>
        </div>
    </div>
  </div>
</template>

<style scoped>
.fish-section {
  margin: 30px 6px 6px 6px; /* top, right, bottom, left */
  margin-bottom:30px;
}

.fish-container{
  position: relative;
  padding: 1rem;
  max-width: 480px;
  margin: auto;
  font-family: 'Noto Sans', sans-serif;
  overflow: hidden;
  background-image: url('@/assets/hot-games/game-bg.png'); 
}

.section-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.section-actions {
  display: flex;
  align-items: center;
  gap: 6px;
}
.section-title {
  font-size: 18px;
  font-weight: bold;
  background: linear-gradient(90deg, rgba(255, 245, 226, 0.99), hsla(33, 72%, 79%, 0.99));
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  display: flex;
  align-items: center;
  gap: 6px;
}

.title-icon {
  width: 30px;
  height: 30px;
  object-fit: contain;
  margin-top:-6px;
}

.nav-btn {
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

.nav-btn svg {
  stroke: #ffed8a;
  stroke-width: 2;
  width: 12px;
  height: 12px;
}
.nav-btn.see-all {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 12px 26px;
  font-size: 12px;
  font-weight: bold;
  border-radius: 4px;
  background: linear-gradient(90deg, rgba(255, 245, 226, 0.99), hsla(33, 72%, 79%, 0.99));
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  border: none;
  white-space: nowrap; /* 防止文字换行 */
}

.provider-tabs-img {
  display: flex;
  gap: 6px;
  margin: 25px 0;
}

.provider-item {
  background-color: #282b34;
  border: 1px solid #484b5a;
  border-radius: 4px;
  width: 90px;
  text-align: center;
  padding: 0 2px 8px;
  cursor: pointer;
  position: relative;
  color: white;
  transition: all 0.3s;
}

.provider-item.active {
  background: linear-gradient(90deg, rgba(255, 245, 226, 0.99), hsla(33, 72%, 79%, 0.99));
  color: black;
}

.provider-logo {
  width: 60px;
  height: 30px;
  object-fit: contain;
  margin: 0 auto 4px;
}

.provider-main {
  font-size: 14px;
  font-weight: bold;
  margin-top:-8px;
}

.arrow-down {
  position: absolute;
  bottom: -8px;
  left: 50%;
  transform: translateX(-50%);
  width: 0;
  height: 0;
  border-left: 6px solid transparent;
  border-right: 6px solid transparent;
  border-top: 8px solid #f5dcb0;
}
.my-games-grid {
  position: relative;
  z-index: 1;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 12px;
  padding-top: 10px;
}


/* Placeholder Fallback */
.placeholder-img {
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #333;
  height: 100%;
  color: #ccc;
  font-size: 12px;
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
  text-align: left;
  font-weight: bold;
  background: linear-gradient(90deg, rgba(255, 245, 226, 0.99), hsla(33, 72%, 79%, 0.99));
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
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

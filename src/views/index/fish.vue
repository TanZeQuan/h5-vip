<script setup>
import { ref, computed } from 'vue'

import pgLogo from '@/assets/subpage/fish-pic3.png'
import jiliLogo from '@/assets/subpage/slot-sp1.png'
import cq9Logo from '@/assets/subpage/fish-pic2.png'
import swgLogo from '@/assets/subpage/fish-pic4.png'
import kaLogo from '@/assets/subpage/fish-pic5.png'

// JILI SESSION
import fishImage1 from '@/assets/subpage/fish-slot1.png'
import fishImage2 from '@/assets/subpage/fish-slot2.png'
import fishImage3 from '@/assets/subpage/fish-slot3.png'
import fishImage4 from '@/assets/subpage/fish-slot4.png'
import fishImage5 from '@/assets/subpage/fish-slot5.png'
import fishImage6 from '@/assets/subpage/fish-slot6.png'

// FC SESSION
import fishFC1 from '@/assets/fish/fish-fc1.png'
import fishFC2 from '@/assets/fish/fish-fc2.png'
import fishFC3 from '@/assets/fish/fish-fc3.png'
import fishFC4 from '@/assets/fish/fish-fc4.png'
import fishFC5 from '@/assets/fish/fish-fc5.png'

// CQ9 SESSION
import fishCQ91 from '@/assets/fish/fish-cq91.png'
import fishCQ92 from '@/assets/fish/fish-cq92.png'
import fishCQ93 from '@/assets/fish/fish-cq93.png'
import fishCQ94 from '@/assets/fish/fish-cq94.png'
import fishCQ95 from '@/assets/fish/fish-cq95.png'

// SWG SESSION
import fishSWG1 from '@/assets/fish/fish-swg1.png'
import fishSWG2 from '@/assets/fish/fish-swg2.png'
import fishSWG3 from '@/assets/fish/fish-swg3.png'
import fishSWG4 from '@/assets/fish/fish-swg4.png'
import fishSWG5 from '@/assets/fish/fish-swg5.png'
import fishSWG6 from '@/assets/fish/fish-swg6.png'

// KA SESSION
import fishKA1 from '@/assets/fish/fish-ka1.png'
import fishKA2 from '@/assets/fish/fish-ka2.png'
import fishKA3 from '@/assets/fish/fish-ka3.png'
import fishKA4 from '@/assets/fish/fish-ka4.png'
import fishKA5 from '@/assets/fish/fish-ka5.png'
import fishKA6 from '@/assets/fish/fish-ka6.png'

const providers = [
  { key: 'JILI', name: 'JILI', logo: jiliLogo },
  { key: 'FC', name: 'FC', logo: cq9Logo },
  { key: 'CQ9', name: 'CQ9', logo: pgLogo },
  { key: 'SWG', name: 'SWG', logo: swgLogo },
  { key: 'KA', name: 'KA', logo: kaLogo }
]

const selectedProvider = ref('JILI')
const gamesPerPage = 6

const pageState = ref({
  PG: 1,
  JILI: 1,
  CQ9: 1,
  SWG: 1,
  KA: 1
})

const games = ref([
  { id: 1, title: 'Fortune King Jackpot', provider: 'JILI', image: fishImage1, badge: 'JILI' },
  { id: 2, title: 'Dainosaur Tycoon II', provider: 'JILI', image: fishImage2, badge: 'JILI' },
  { id: 3, title: 'Happy Fishing', provider: 'JILI', image: fishImage3, badge: 'JILI' },
  { id: 4, title: 'Ocean King Jackpot', provider: 'JILI', image: fishImage4, badge: 'JILI' },
  { id: 5, title: 'All-Star Fishing', provider: 'JILI', image: fishImage5, badge: 'JILI' },
  { id: 6, title: 'Boom Legend', provider: 'JILI', image: fishImage6, badge: 'JILI' },
  

  { id: 1, title: 'Gods Grant Fortune', provider: 'FC', image: fishFC1, badge: 'FC' },
    { id: 2, title: 'Star Hunter', provider: 'FC', image: fishFC2, badge: 'FC' },
    { id: 3, title: 'Fierce Fishing', provider: 'FC', image: fishFC3, badge: 'FC' },
    { id: 4, title: 'Bao Chuan Fishing', provider: 'FC', image: fishFC4, badge: 'FC' },
    { id: 5, title: 'Monkey King Fishing', provider: 'FC', image: fishFC5, badge: 'FC' },
    { id: 6, title: 'Star Hunter', provider: 'FC', image: fishFC2, badge: 'FC' },
    { id: 7, title: 'Monkey King Fishing', provider: 'FC', image: fishFC5, badge: 'FC' },
    { id: 8, title: 'Fierce Fishing', provider: 'FC', image: fishFC3, badge: 'FC' },
    { id: 9, title: 'Star Hunter', provider: 'FC', image: fishFC2, badge: 'FC' },
    { id: 10, title: 'Bao Chuan Fishing', provider: 'FC', image: fishFC4, badge: 'FC' },
    { id: 11, title: 'Gods Grant Fortune', provider: 'FC', image: fishFC1, badge: 'FC' },


  { id: 1, title: 'Onestick Fishing', provider: 'CQ9', image: fishCQ91, badge: 'CQ9' },
  { id: 2, title: 'Hero Fishing', provider: 'CQ9', image: fishCQ92, badge: 'CQ9' },
  { id: 3, title: 'Lucky Fishing', provider: 'CQ9', image: fishCQ93, badge: 'CQ9' },
  { id: 4, title: 'Oneshot Fishing', provider: 'CQ9', image: fishCQ94, badge: 'CQ9' },
  { id: 5, title: 'Paradise', provider: 'CQ9', image: fishCQ95, badge: 'CQ9' },

  { id: 1, title: 'Cash Cow', provider: 'SWG', image: fishSWG1, badge: 'SWG' },
  { id: 2, title: 'Genesis Fish', provider: 'SWG', image: fishSWG2, badge: 'SWG' },
  { id: 3, title: 'Vintage Fish', provider: 'SWG', image: fishSWG3, badge: 'SWG' },
  { id: 4, title: 'Likui Fishing', provider: 'SWG', image: fishSWG4, badge: 'SWG' },
  { id: 5, title: 'Arcade Fishing', provider: 'SWG', image: fishSWG5, badge: 'SWG' },
  { id: 6, title: 'Dragon Treasure', provider: 'SWG', image: fishSWG6, badge: 'SWG' },
  
  { id: 1, title: 'Road Hunting', provider: 'KA', image: fishKA1, badge: 'JILI' },
  { id: 2, title: 'Legend Of Monkey', provider: 'KA', image: fishKA2, badge: 'JILI' },
  { id: 3, title: 'Ocean Vacation', provider: 'KA', image: fishKA3, badge: 'JILI' },
  { id: 4, title: 'Crazy Party', provider: 'KA', image: fishKA4, badge: 'JILI' },
  { id: 5, title: 'Dragon Palace Adventure', provider: 'KA', image: fishKA5, badge: 'JILI' },
  { id: 6, title: 'Undersea Killer', provider: 'KA', image: fishKA6, badge: 'JILI' }
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
          <img src="@/assets/subpage/fish.svg" alt="Slots Icon" class="title-icon" />
          Fish
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

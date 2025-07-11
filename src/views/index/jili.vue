<script setup>
import { ref, computed, onMounted } from 'vue'

// State
const allGames = ref([])
const currentPage = ref(0)
const gamesPerPage = 6

const fetchGames = async () => {
  try {
    const res = await fetch('http://192.168.0.122/silver/user/game_list.php?status=1')
    const data = await res.json()

    if (data.success && Array.isArray(data.data)) {
      // 只保留 JILI 分类的游戏
      allGames.value = data.data.filter(game => game.category_name === 'JILI')
    } else {
      console.error('加载失败：', data.message)
    }
  } catch (err) {
    console.error('API 请求错误:', err)
  }
}

onMounted(fetchGames)


const getGameImageUrl = (path) => {
  if (!path || typeof path !== 'string') return ''
  return path.startsWith('http')
    ? path
    : `http://192.168.0.122/${path.replace(/^\/+/, '')}`
}


onMounted(fetchGames)

const totalPages = computed(() => Math.ceil(allGames.value.length / gamesPerPage))
const games = computed(() => {
  const start = currentPage.value * gamesPerPage
  return allGames.value.slice(start, start + gamesPerPage)
})

const nextPage = () => {
  if (currentPage.value < totalPages.value - 1) {
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
    <div class="my-games-section">
      <div class="my-section-header">
        <div class="my-section-title">
          <img src="@/assets/hot-games/jili-i.png" alt="Hot" class="my-jili-icon" />
          <span>JILI</span>
        </div>
        <div class="section-actions">
          <button class="nav-btn" @click="prevPage">
            <svg viewBox="0 0 24 24"><polyline points="15,18 9,12 15,6" /></svg>
          </button>
          <button class="nav-btn" @click="nextPage">
            <svg viewBox="0 0 24 24"><polyline points="9,18 15,12 9,6" /></svg>
          </button>
        </div>
      </div>

      <div class="my-games-grid">
        <div class="my-game-item" v-for="game in games" :key="game.id">
          <div class="my-game-tag" v-if="game.category_name">{{ game.category_name }}</div>
          <a :href="game.url" target="_blank" v-if="game.url">
          <img
            :src="getGameImageUrl(game.image_url)"
            class="my-game-image"
            :alt="game.game_name"
            style="cursor: pointer"
          />
          </a>
          <img
            v-else
            :src="getGameImageUrl(game.image_url)"
            class="my-game-image"
            :alt="game.game_name"
          />
          <div class="my-game-name">{{ game.game_name }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.my-games-container {
  margin: 30px 6px;
}

.my-games-section {
  padding: 1rem;
  max-width: 480px;
  margin: auto;
  font-family: 'Noto Sans', sans-serif;
  background-image: url('@/assets/hot-games/game-bg.png');
}

/* Header */
.my-section-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
}

.my-section-title {
  display: flex;
  align-items: center;
  font-size: 18px;
  font-weight: bold;
  background: linear-gradient(90deg, #fff5e2, #f1d2a8);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}


.my-jili-icon {
  width: 30px;
  margin-right: 8px;
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

/* Grid */
.my-games-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 12px;
  padding-top: 10px;
}

/* Game Item */
.my-game-item {
  position: relative;
  text-align: center;
  border-radius: 6px;
  overflow: hidden;
  padding-bottom: 5px;
}

.my-game-image {
  width: 100%;
  display: block;
}

.my-game-tag {
  position: absolute;
  right: 0;
  top: 0;
  background: linear-gradient(90deg, #fff5e2, #f1d2a8);
  color: #1d212d;
  font-size: 13px;
  font-weight: bold;
  padding: 3px 10px;
  border-radius: 3px;
  z-index: 2;
}

.my-game-name {
  margin-top: 8px;
  font-size: 15px;
  font-weight: bold;
  background: linear-gradient(90deg, #fff5e2, #f1d2a8);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  text-align: left;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
</style>

<script setup>
import { computed } from 'vue'

const winners = [
  {
    game: 'Mahjong Ways 2',
    username: '********043',
    amount: '11,250',
    date: '2025-07-01 05:19:30'
  },
  {
    game: 'Jack the Giant Hunter',
    username: '********333',
    amount: '10,440',
    date: '2025-07-01 05:14:40'
  },
  {
    game: 'Wild Ape',
    username: '********t9',
    amount: '10,320',
    date: '2025-07-01 02:04:57'
  },
  {
    game: 'Zombie Party',
    username: '********987',
    amount: '9,100',
    date: '2025-07-01 01:54:33'
  }
]

// 克隆两次内容用于跑马灯动画
const loopWinners = computed(() => [...winners, ...winners])
</script>

<template>
  <div class="sports-section">
    <!-- Sport Title -->
    <div class="sports-header">
      <img src="@/assets/subpage/ball-i.svg" alt="Icon" class="ball-icon" />
      <span class="sports-title">Sports</span>
    </div>

    <!-- Sport Background Image -->
    <div class="sports-banner">
      <img src="@/assets/subpage/sport-bg.png" class="banner-img" />
    </div>

    <!-- Latest Winners Marquee -->
    <div class="latest-winners">
      <h2 class="section-title">Latest Winners</h2>
      <div class="marquee-container">
        <div class="marquee-content">
          <div
            class="winner-item"
            v-for="(winner, index) in loopWinners"
            :key="index"
          >
            <img src="@/assets/subpage/marquee-i.png" class="user-photo" />
              <div class="winner-info">
                <p class="game-name">{{ winner.game }}</p>
                <p class="username">Username: {{ winner.username }}</p>
                <p class="amount">Won: ฿{{ winner.amount }}</p>
                <p class="date">{{ winner.date }}</p>
              </div>
            <button class="play-btn">PLAY NOW</button>
          </div>
        </div>
      </div>
    </div>
    <hr />
  </div>
</template>


<style scoped>
.sports-section {
  color: #fffbe6;
  padding: 10px;
  max-width: 520px;
  margin: 0 auto;
  font-family: Arial, sans-serif;
}

/* Sport Title */
.sports-header {
  display: flex;
  align-items: center;
  font-size: 22px;
  font-weight: bold;
   background: linear-gradient(90deg, rgba(255, 245, 226, 0.99), hsla(33, 72%, 79%, 0.99));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  color: transparent;
}

.ball-icon {
  width: 22px;
  margin-right: 8px;
  margin-top:-6px;
}

.sports-title {
  font-size: 20px;
  margin-bottom:5px;
}

/* Banner Image */
.sports-banner .banner-img {
  width: 100%;
  border-radius: 6px;
}

/* Latest Winners Section */
.latest-winners {
  text-align: center;
}

.section-title {
  font-size: 25px;
  font-weight: bold;
  margin-bottom: 16px;
  background: linear-gradient(90deg, rgba(255, 245, 226, 0.99), hsla(33, 72%, 79%, 0.99));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  color: transparent;
}



.marquee-container {
  height: 300px;
  overflow: hidden;
  position: relative;
}

.marquee-content {
  display: flex;
  flex-direction: column;
  animation: scroll-up 5s linear infinite;
}

@keyframes scroll-up {
  0% {
    transform: translateY(0%);
  }
  100% {
    transform: translateY(-50%);
  }
}

hr {
  width: 100%;
  margin-top: 1rem;
  border: none;
  height: 1px;
  background-color: rgb(83, 83, 83); /* 红色横线 */
}

.winner-item {
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: linear-gradient(180deg,#21283b,#2a3249 52.6%,#21283b);
  border-radius: 10px;
  padding: 10px;
  margin-bottom: 10px;
}

/* Avatar */
.user-photo {
  width: 50px;
  height: 50px;
  background-color: #888;
  border-radius: 50%;
  margin-right: 10px;
  flex-shrink: 0;
}

/* Info */
.winner-info {
  flex: 1;
  margin-left: 10px;
  text-align: left;
   background: linear-gradient(90deg, rgba(255, 245, 226, 0.99), hsla(33, 72%, 79%, 0.99));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  color: transparent;
}

.game-name {
  font-size: 16px;
  font-weight: bold;
  margin: 0 0 4px;
}

.username,
.amount,
.date {
  font-size: 12px;
  margin: 0;
}

/* Button */
.play-btn {
  background: linear-gradient(90deg, rgba(255, 245, 226, 0.99), hsla(33, 72%, 79%, 0.99));
  border: none;
  color: #000;
  font-weight: bold;
  padding: 4px 8px;
  border-radius: 6px;
  cursor: pointer;
  font-size: 12px;
}
</style>

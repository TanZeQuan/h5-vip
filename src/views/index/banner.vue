<script setup>
import { ref } from 'vue'
import games from "@/views/index/games.vue"
import jili from "@/views/index/jili.vue"
import slots from "@/views/index/slot.vue"
import fish from "@/views/index/fish.vue"

// Banner images
import img1 from '@/assets/img/slide1.jpg'
import img2 from '@/assets/img/slide2.jpg'
import img3 from '@/assets/img/slide3.jpg'
import img4 from '@/assets/img/slide4.jpg'

// Tab icons
import popularIcon from '@/assets/img/tab-fire.png'
import favoriteIcon from '@/assets/img/tab-star.svg'
import jillIcon from '@/assets/img/tab-jili.png'
import sigisIcon from '@/assets/img/tab-slot.svg'
import fishIcon from '@/assets/img/tab-fish.svg'
import tabBadge from '@/assets/img/badge-i.png'

const bannerList = ref([
  { id: 1, imgUrl: img1 },
  { id: 2, imgUrl: img2 },
  { id: 3, imgUrl: img3 },
  { id: 4, imgUrl: img4 },
])

const tabs = ref([
  { id: 'popular', label: 'Popular', icon: popularIcon, path: '/index/games'},
  { id: 'favorite', label: 'My favorite', icon: favoriteIcon, path: '/index/games' },
  { id: 'jill', label: 'JILL', icon: jillIcon, path: '/index/jili' },
  { id: 'slots', label: 'Slots', icon: sigisIcon, path: '/index/slot' },
  { id: 'fish', label: 'Fish', icon: fishIcon, path: '/index/fish' }
])


const activeTab = ref('popular')

function goToCategory(tab) {
  activeTab.value = tab.id

  // Wait DOM ready in case section is not rendered instantly
  setTimeout(() => {
    const section = document.getElementById(tab.id)
    if (section) {
      section.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }, 100)
}

</script>

<template>
  <div class="banner-container">
    <router-link to="/promotion">
      <van-swipe class="promo-swipe" :autoplay="3000" indicator-color="transparent">
        <van-swipe-item v-for="item in bannerList" :key="item.id">
          <img :src="item.imgUrl" class="swipe-image" alt="Promotion Banner" />
        </van-swipe-item>
      </van-swipe>
    </router-link>
  </div>

  <div class="marquee-container">
    <img src="@/assets/img/ring.png" alt="bell" class="bell-icon shake" />
    <div class="marquee-wrapper">
      <div class="marquee-content">
        <span class="marquee-text">Your scrolling text here</span>
        <span class="marquee-text">More announcements here</span>
        <span class="marquee-text">Repeat news and info</span>
      </div>
    </div>
    <img src="@/assets/img/arrow-down.png" alt="bell" class="bell-icon2" />
  </div>

  <!-- Sticky Tabs -->
  <div class="tab-sticky">
    <div class="category-tabs">
      <button
        v-for="tab in tabs"
        :key="tab.id"
        @click="goToCategory(tab)"
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
   <!-- Scroll Target Section: Popular -->
    <div id="popular">
      <games />
    </div>

    <!-- Scroll Target Section: JILL -->
    <div id="jill">
      <jili />
    </div>

    <!-- Scroll Target Section: Slots -->
    <div id="slots">
      <slots />
    </div>

    <!-- Scroll Target Section: Fish -->
    <div id="fish">
      <fish />
    </div>
</template>


<style scoped>
.banner-container {
  width: 100%;
  margin-top: 3.75rem;
  overflow: hidden;
}

/* 高度使用 vw 单位，响应式适配所有屏幕 */
.promo-swipe {
  width: 100%;
  height: 35vw; /* 例如宽度是 100vw，高度为其 45% */
  max-height: 280px; /* 防止大屏幕过高，可选 */
  cursor: pointer;
}

.swipe-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}

/* Custom indicator styling */
:deep(.van-swipe__indicators) {
  bottom: 10px;
  display: flex;
  justify-content: center;
}

:deep(.van-swipe__indicator) {
  width: 8px;
  height: 8px;
  margin: 0 3px;
  opacity: 0.6;
  background-color: #fff; /* 灰色 */
  border-radius: 50%;
  transition: all 0.3s;
}

:deep(.van-swipe__indicator--active) {
  width: 16px;
  background-color: #fff;
  opacity: 1;
  border-radius: 6px;
}

/* marquee */
.marquee-container {
  width: 100%;
  overflow: hidden;
  white-space: nowrap;
  padding: 10px 0;
  display: flex;
  align-items: center;
  position: relative;
}

.bell-icon {
  color: linear-gradient(90deg, rgba(255, 245, 226, .99), hsla(33, 72%, 79%, .99));;
  font-size: 23px;
  padding: 0 15px;
  flex-shrink: 0;
  height: 18px;
  margin-right: 8px; /* Increased spacing */
  display: flex;
  align-items: center;
  margin-left:-8px;
  z-index: 2; /* Ensure icon stays above marquee */
}
.bell-icon2 {
  margin-left:8px;
  width:18px;
}

.marquee-wrapper {
  flex-grow: 1;
  overflow: hidden;
  position: relative;
  margin-left: -1rem;
  padding:5px;
  padding-right: 20px;
  border-radius: 10px;
  background-color: #282b34; /* transparent black background */
  /* You can change rgba(0,0,0,0.3) to any color you want */
}

.marquee-content {
  display: inline-block;
  animation: marquee 15s linear infinite;
  padding-left: 10px; /* Starting gap */
}

.marquee-text {
  display: inline-block;
  color: rgb(255, 246, 197);
  font-size: 13px;
  font-weight: bold;
  text-transform: uppercase;
  letter-spacing: 1px;
  padding: 0 30px;
  position: relative;
}


.marquee-text:after {
  content: "•";
  color: #b7aff3;
  position: absolute;
  right: -5px;
}

@keyframes marquee {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(calc(-30% - 20px)); /* Adjusted for padding */
  }
}

/* tab game */
.game-categories {
  margin: 20px 0;
}

.category-tabs {
  display: flex;
  margin-bottom: 10px;
}
.category-tabs button {
  flex: 1;
  padding: 12px 0 8px;
  background: none;
  border: none;
  font-size: 13px;
  cursor: pointer;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2px;
  font-weight:bold;
  color: transparent;
  background: linear-gradient(90deg, rgba(255, 245, 226, 0.99), hsla(33, 72%, 79%, 0.99));
  -webkit-background-clip: text;
  background-clip: text;
}
.tab-icon {
  width: 40px;
  height: 40px;
  object-fit: contain;
  margin-bottom: 2px;
  transition: all 0.3s ease;
  margin-top: -1rem;
}
/* Tabs (Sticky) */

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
</style>

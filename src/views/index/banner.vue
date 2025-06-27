<script setup>
import { ref } from 'vue'

import img1 from '@/assets/img/slide1.jpg'
import img2 from '@/assets/img/slide2.jpg'
import img3 from '@/assets/img/slide3.jpg'
import img4 from '@/assets/img/slide4.jpg'
import popularIcon from '@/assets/img/tab-fire.png';
import favoriteIcon from '@/assets/img/tab-star.svg';
import jillIcon from '@/assets/img/tab-jili.png';
import sigisIcon from '@/assets/img/tab-slot.svg';
import fishIcon from '@/assets/img/tab-fish.svg';

const bannerList = ref([
  { id: 1, imgUrl: img1 },
  { id: 2, imgUrl: img2 },
  { id: 3, imgUrl: img3 },
  { id: 4, imgUrl: img4 }
])


const tabs = ref([
  { id: 'popular', label: 'Popular', icon: popularIcon },
   { id: 'favorite', label: 'My favorite', icon: favoriteIcon },
  { id: 'jill', label: 'JILL', icon: jillIcon },
  { id: 'sigis', label: 'SIGIs', icon: sigisIcon },
  { id: 'fish', label: 'Fish', icon: fishIcon }
]);

const activeTab = ref('popular');
</script>

<template>
<div class="container-bg">
  <div class="banner-container">
    <van-swipe
      class="promo-swipe"
      :autoplay="3000"
      indicator-color="transparent"
    >
      <van-swipe-item v-for="item in bannerList" :key="item.id">
        <img
          :src="item.imgUrl"
          class="swipe-image"
          alt="Promotion Banner"
        />
      </van-swipe-item>
    </van-swipe>
  </div>
  
    <div class="marquee-container">
    <van-icon name="bell" class="bell-icon shake" />
    <div class="marquee-wrapper">
      <div class="marquee-content">
        <span class="marquee-text">a nsiéuwu uagaaufizdu 0.99% danrisdin } Dpsuiua</span>
        <span class="marquee-text">a nsiéuwu uagaaufizdu 0.99% danrisdin } Dpsuiua</span>
        <span class="marquee-text">a nsiéuwu uagaaufizdu 0.99% danrisdin } Dpsuiua</span>
      </div>
    </div>
  </div>

   <<div class="game-categories">
    <div class="category-tabs">
      <button 
        v-for="tab in tabs" 
        :key="tab.id"
        :class="{ active: activeTab === tab.id }"
        @click="activeTab = tab.id"
      >
        <div class="icon-wrapper">
          <img :src="tab.icon" class="tab-icon" :alt="tab.label" />
          <div class="icon-decoration"></div>
        </div>
        <span>{{ tab.label }}</span>
      </button>
    </div>
  </div>
</div>
</template>

<style scoped>
.container-bg{
    
}
.banner-container {
  width: 100%;
  margin-top: 3.75rem;
  overflow: hidden;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
}

/* 高度使用 vw 单位，响应式适配所有屏幕 */
.promo-swipe {
  width: 100%;
  height: 45vw; /* 例如宽度是 100vw，高度为其 45% */
  max-height: 280px; /* 防止大屏幕过高，可选 */
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
  background: linear-gradient(90deg, #1a1a2e, #16213e);
  padding: 10px 0;
  display: flex;
  align-items: center;
  position: relative;
}

.bell-icon {
  color: rgb(255, 246, 197);
  font-size: 23px;
  padding: 0 15px;
  flex-shrink: 0;
  height: 100%;
  margin-right: 15px; /* Increased spacing */
  display: flex;
  align-items: center;
  z-index: 2; /* Ensure icon stays above marquee */
}

.marquee-wrapper {
  flex-grow: 1;
  overflow: hidden;
  position: relative;
  margin-left:-1rem;
  padding-right: 20px; /* Prevents text from touching edge */
  border-radius: 10px;
}

.marquee-content {
  display: inline-block;
  animation: marquee 15s linear infinite;
  padding-left: 10px; /* Starting gap */
}

.marquee-text {
  display: inline-block;
  color: rgb(255, 246, 197);
  font-size: 16px;
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
    transform: translateX(calc(-50% - 20px)); /* Adjusted for padding */
  }
}

.bell-icon.shake {
  animation: shake 2s infinite;
}
@keyframes shake {
  0%, 100% { transform: rotate(0deg); }
  10%, 30%, 50%, 70%, 90% { transform: rotate(-15deg); }
  20%, 40%, 60%, 80% { transform: rotate(15deg); }
}

/* tab game */
.game-categories {
  margin: 20px 0;
  font-family: 'Noto Sans', sans-serif;
}

.category-tabs {
  display: flex;
  border-bottom: 2px solid #e6e6e6;
  margin-bottom: 15px;
}

.category-tabs button {
  flex: 1;
  padding: 12px 0 8px;
  background: none;
  border: none;
  font-size: 13px;
  color: rgb(255, 246, 197);
  cursor: pointer;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4px;
}

.category-tabs button.active {
  color: rgb(255, 246, 197);
}

.category-tabs button.active::after {
  content: '';
  position: absolute;
  bottom: -2px;
  left: 0;
  right: 0;
  height: 2px;
}

.tab-icon {
  width: 40px;
  height: 40px;
  object-fit: contain;
  margin-bottom: 2px;
  transition: all 0.3s ease;
  margin-top: -1rem;
}

.category-tabs button.active .tab-icon {
  filter: none;
  transform: scale(1.1);
}

.placeholder {
  height: 200px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #f5f5f5;
  border-radius: 8px;
  color: #999;
  font-size: 18px;
}
</style>

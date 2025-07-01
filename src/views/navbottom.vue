<script setup>
import { ref } from 'vue'

// 静态导入图片路径
import homeIcon from '@/assets/img/home-i.svg'
import promotionIcon from '@/assets/img/promo-i.svg'
import rewardIcon from '@/assets/img/reward-i.svg'
import shareIcon from '@/assets/img/share-i.png'
import accountIcon from '@/assets/img/member-i.png'

const footerList = ref([
  { title: 'Home', icon: homeIcon, path: '/index' },
  { title: 'Promotion', icon: promotionIcon, path: '/promotion' },
  { title: 'Share', icon: shareIcon, path: '/share' },
  { title: 'Reward', icon: rewardIcon, path: '/reward' },
  { title: 'Account', icon: accountIcon, path: '/account' }
])
</script>

<template>
  <div class="footer">
    <div class="footer-seat">
      <div class="footer-list">
        <ul>
          <li v-for="(item, index) in footerList" :key="index" 
              :class="['footer-item', { 'share-item': item.title === 'Share' }]">
            <router-link :to="item.path" class="link">
              <img :src="item.icon" :alt="item.title" class="icon" 
                  :class="{ 'share-icon': item.title === 'Share' }" />
              <p>{{ item.title }}</p>
              <div v-if="item.title === 'Share'" class="promo-badge"></div>
            </router-link>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>


<style scoped>
/* Special Share button styles */
.share-item {
  position: relative;
  z-index: 2;
}

.share-item .link {
  background: linear-gradient(135deg, #ffefc4, #f3bea4);
  border-radius: 50%;
  width: 80px;
  height: 80px;
  margin-top: -2rem;
  box-shadow: 0 2px 8px rgba(247, 229, 74, 0.4);
  position: relative;
  transform-origin: center;
}
@keyframes breath {
  0%, 100% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.05);
  }
}

.share-item .link {
  animation: breath 0.5s infinite ease-in-out; /* Changed from 3s to 1.5s */
}

.share-icon {
  width: 50px !important;
  height: 50px !important;
  margin-top:-10px;
}

.share-item p {
  color: #000;
  position: absolute;
  bottom: 12px;
  width: 100%;
}
@media screen and (min-width: 768px) {
  .share-item .link {
    width: 120px;
    height: 120px;
    margin-top:-5rem;
  }

  .share-icon {
    width: 80px !important;
    height: 80px !important;
    margin-top: -1rem;
  }

  .share-item p {
    font-size: 1.0rem;
    bottom: 1rem;
  }
}

@media screen and (min-width: 1024px) {
  .share-item .link {
    width: 150px;
    height: 150px;
    margin-top:-6rem;
  }

  .share-icon {
    width: 100px !important;
    height: 100px !important;
    margin-top: -2rem;
  }

  .share-item p {
    font-size: 2.2rem;
    bottom: 1rem;
  }
}

</style>
<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()

const handleProtectedRoute = (path) => {
  const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true'

  if (!isLoggedIn) {
    router.push({ path: '/login', query: { redirect: path } })
  } else {
    router.push(path)
  }
}
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
          <li
          v-for="(item, index) in footerList"
          :key="index"
          :class="['footer-item', { 'share-item': item.title === 'Share' }]"
        >
          <div
            v-if="item.title === 'Rewards'"
            class="link"
            @click="handleProtectedRoute(item.path)"
          >
            <img
              :src="item.icon"
              :alt="item.title"
              class="icon"
              :class="{ 'share-icon': item.title === 'Share' }"
            />
            <p>{{ item.title }}</p>
          </div>

          <!-- Normal link for others -->
          <router-link
            v-else
            :to="item.path"
            class="link"
          >
            <img
              :src="item.icon"
              :alt="item.title"
              class="icon"
              :class="{ 'share-icon': item.title === 'Share' }"
            />
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
/* Animation keyframes */
@keyframes heartbeat {
  0% {
    transform: scale(1);
  }
  14% {
    transform: scale(1.3);
  }
  28% {
    transform: scale(1);
  }
  42% {
    transform: scale(1.2);
  }
  70% {
    transform: scale(1);
  }
  100% {
    transform: scale(1);
  }
}

.share-item .link {
  animation: heartbeat 1.4s infinite ease-in-out;
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

</style>
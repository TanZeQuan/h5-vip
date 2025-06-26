<script setup>
import { ref } from 'vue'

// 静态导入图片路径
import homeIcon from '@/assets/img/home-i.svg'
import promotionIcon from '@/assets/img/promo-i.svg'
import rewardIcon from '@/assets/img/reward-i.svg'
import accountIcon from '@/assets/img/member-i.png'

const footerList = ref([
  { title: 'Home', icon: homeIcon },
  { title: 'Promotion', icon: promotionIcon },
  { title: 'Reward', icon: rewardIcon },
  { title: 'Account', icon: accountIcon }
])
</script>


<template>
  <div class="footer">
    <div class="footer-seat">
      <div class="footer-list">
        <ul>
          <li v-for="(item, index) in footerList" :key="index">
            <img :src="item.icon" alt="icon" class="icon" />
            <p>{{ item.title }}</p>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
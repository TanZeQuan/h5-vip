<script setup>
import { ref } from 'vue'
import { Button as VanButton, Collapse as VanCollapse, CollapseItem as VanCollapseItem } from 'vant'

import promo1 from '@/assets/promo-img/promo1.png'
import promo2 from '@/assets/promo-img/promo2.png'
import promo3 from '@/assets/promo-img/promo3.png'
import promo4 from '@/assets/promo-img/promo4.png'
import promo5 from '@/assets/promo-img/promo5.png'
import promo6 from '@/assets/promo-img/promo6.png'
import promo7 from '@/assets/promo-img/promo7.png'
import promoDetail1 from '@/assets/promo-img/promo-info.png'

import { useRouter } from 'vue-router'
import { Icon as VanIcon } from 'vant'

const router = useRouter()

function goBack() {
  router.push('/') // or router.back() if you want to return to previous page
}


const promotions = ref([
  {
    image: promo1,
    title: 'โบนัสฝากครั้งแรก 145%',
    description: '',
    moreImage: promoDetail1
  },
  {
    image: promo2,
    title: '4ค่าคอมมิชชั่นสุดพิเศษสำหรับตัวแทน',
    description: 'ค่าคอมฯ สูงสุด 0.99% และรับรายได้มากขึ้น!'
  },
  {
    image: promo3,
    title: 'ดาวน์โหลดแอปพิเศษรับโบนัส',
    description: 'ดาวน์โหลดแอป THVIP และรับโบนัสสูงสุด 6,888฿'
  },
   {
    image: promo4,
    title: 'ดาวน์โหลดแอปพิเศษรับโบนัส',
    description: 'ดาวน์โหลดแอป THVIP และรับโบนัสสูงสุด 6,888฿'
  },
   {
    image: promo5,
    title: 'ดาวน์โหลดแอปพิเศษรับโบนัส',
    description: 'ดาวน์โหลดแอป THVIP และรับโบนัสสูงสุด 6,888฿'
  },
   {
    image: promo6,
    title: 'ดาวน์โหลดแอปพิเศษรับโบนัส',
    description: 'ดาวน์โหลดแอป THVIP และรับโบนัสสูงสุด 6,888฿'
  },
  {
    image: promo7,
    title: 'ดาวน์โหลดแอปพิเศษรับโบนัส',
    description: 'ดาวน์โหลดแอป THVIP และรับโบนัสสูงสุด 6,888฿'
  },
])


const expandedIndexes = ref(null)

function toggleMore(index) {
  expandedIndexes.value = expandedIndexes.value === index ? null : index
}

</script>

<template>
  <div class="header-container">
    <div class="header">
      <van-icon name="arrow-left" @click="goBack" />
      <div class="header-title">Promotion</div>
    </div>

    <div class="tabs">
      <div class="tab-active">All</div>
    </div>

    <div class="promotion-list">
      <div v-for="(item, index) in promotions" :key="index" class="promotion-card">
        <img :src="item.image" class="promo-img" />
        <div class="promo-header">
          <div class="promo-title">{{ item.title }}</div>
          <van-button size="small" class="more-btn" @click="toggleMore(index)">
            More
          </van-button>
        </div>
        <div v-if="expandedIndexes === index" class="more-info">
          <div class="more-content">{{ item.description }}</div>
          <img :src="item.moreImage" class="more-img" />
        </div>
      </div>
    </div>
  </div>
</template>


<style scoped>
.header-container{
    margin-bottom:4rem;
}
.header {
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  height: 80px;
  font-weight: bold;
  font-size: 22px;
}

/* Gradient title */
.header-title {
  font-size: 30px;
  font-weight: bold;
  background: linear-gradient(90deg, #fff5e2, #f0cda3);
  background-clip: text;
  -webkit-background-clip: text;
  color: transparent;
  -webkit-text-fill-color: transparent;
  text-shadow: none;
  padding-top:10px;
}

.van-icon {
  position: absolute;
  left: 16px;
  font-size: 30px;
  cursor: pointer;
  font-weight: bold;
  background: linear-gradient(90deg, #fff5e2, #f0cda3);
  background-clip: text;
  -webkit-background-clip: text;
  color: transparent;
  -webkit-text-fill-color: transparent;
  text-shadow: none;
  background-color: transparent;
  outline: none;
  padding-top:10px;
}

/* Tab below header */
.tabs {
  margin: 10px 0 16px 16px;
}

.tab-active {
  position: relative;
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 20px;
  width: fit-content;
  padding-bottom: 5px;
  background: linear-gradient(90deg, #fff5e2, #f0cda3);
  background-clip: text;
  -webkit-background-clip: text;
  color: transparent;
  -webkit-text-fill-color: transparent;
}

.tab-active::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  height: 2px;
  width: 100%;
  background: linear-gradient(90deg, #fff5e2, #f0cda3);
  border-radius: 1px;
}

.promotion-list {
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding: 0 15px;
}

.promotion-card {
  background: #282b34;
  border-radius: 12px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
}

.promo-img {
  width: 100%;
  height: 180px; /* consistent height */
  object-fit: cover;
  border-radius: 10px; /* top rounded only */
  display: block;
}

.promo-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 16px 0; /* spacing around title/button */
  margin:10px 0px 5px 0px;
}

.promo-title {
  font-size: 18px;
  font-weight: bold;
  color: white;
  flex: 1;
  margin:none;
  margin-bottom:10px;
}

.more-btn {
  background: linear-gradient(180deg, #fff5e2, #f0cda3 50.21%, #fff5e2);
  border: none;
  color: #000;
  font-weight: bold;
  padding: 0 20px;
  height: 30px;
  line-height: 30px;
  border-radius: 16px;
  margin-left: 12px;
  white-space: nowrap;
}

.more-info {
  background-color: #2a2a2a;
  margin: 8px 16px 12px;
  padding: 10px;
  border-radius: 8px;
  color: #ccc;
  font-size: 14px;
  transition: all 0.3s ease;
}
/* expand content inside */
.more-img {
  width: 100%;
  margin-top: 12px;
  border-radius: 8px;
  object-fit: cover;
}

@media (max-width: 768px) {
  .header-title {
    font-size: 25px;
  }

  .van-icon {
    font-size: 24px;
  }

  .promo-title {
    font-size: 16px;
  }

  .more-btn {
    padding: 0 30px;
    font-size: 15px;
    height: 30px;
    line-height: 28px;
    margin-top:-10px;
  }

  .promo-img {
    height: 160px;
  }

  .more-info {
    font-size: 13px;
    padding: 8px;
  }

  .more-img {
    border-radius: 6px;
  }

  .tab-active {
    font-size: 16px;
  }
}

@media (max-width: 480px) {
  .header-title {
    font-size: 18px;
  }

  .promo-title {
    font-size: 15px;
  }

  .more-btn {
    font-size: 12px;
    padding: 0 12px;
  }

  .promo-img {
    height: 140px;
  }
}

</style>

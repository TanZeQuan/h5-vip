<script setup>
import { reactive } from 'vue'
import medal1 from '@/assets/share/medal1.png'
import medal2 from '@/assets/share/medal2.png'
import medal3 from '@/assets/share/medal3.png'
import medal4 from '@/assets/share/medal4.png'
import medal5 from '@/assets/share/medal5.png'
import medal6 from '@/assets/share/medal6.png'

const referralItems = reactive([
  {
    title: 'Over 5 valid referral in total.',
    amount: '₹ 199.00',
    progress: '0/5',
    medalClass: 'medal-pink',
    icon: medal1,
    claimed: false
  },
  {
    title: 'Over 20 valid referral in total.',
    amount: '₹ 999.00',
    progress: '0/20',
    medalClass: 'medal-green',
    icon: medal2,
    claimed: false
  },
  {
    title: 'Over 50 valid referral in total.',
    amount: '₹ 1,999.00',
    progress: '0/50',
    medalClass: 'medal-blue',
    icon: medal3,
    claimed: false
  },
  {
    title: 'Over 100 valid referral in total.',
    amount: '₹ 5,999.00',
    progress: '0/100',
    medalClass: 'medal-purple',
    icon: medal4,
    claimed: false
  },
  {
    title: 'Over 200 valid referral in total.',
    amount: '₹ 19,999.00',
    progress: '0/200',
    medalClass: 'medal-teal',
    icon: medal5,
    claimed: false
  },
  {
    title: 'Over 500 valid referral in total.',
    amount: '₹ 49,999.00',
    progress: '0/500',
    medalClass: 'medal-gold',
    icon: medal6,
    claimed: false
  }
])

function claimReward(index) {
  referralItems[index].claimed = true
  setTimeout(() => {
    referralItems[index].claimed = false
  }, 2000)
}

function openChat() {
  alert('Chat support coming soon!')
}

function shakeGiftBox() {
  console.log('Gift box clicked!')
}
</script>

<template>
  <!-- Header Banner -->
  <div class="header-banner">
    <img src="@/assets/share/share-reward-banner.png" alt="THVIP Header Banner" class="header-img" />
  </div>

  <!-- Expiration Notice -->
  <div class="expiration-notice">
    no expiration
  </div>

  <!-- Referral List -->
  <div class="referral-list">
      <div 
        v-for="(item, index) in referralItems" 
        :key="index"
        :class="['referral-item', item.medalClass]"
      >
      <div class="referral-left">
        <div :class="['medal-icon', item.medalClass]">
          <div class="medal-top">
            <img :src="item.icon" alt="medal" class="medal-img" />
          </div>
        </div>
        <div class="referral-text">
          <div class="referral-title">{{ item.title }}</div>
          <div class="referral-amount">{{ item.amount }}</div>
        </div>
      </div>
      <div class="referral-right">
        <div class="progress-circle">{{ item.progress }}</div>
        <button 
          :class="['available-btn', { 'claimed': item.claimed }]"
          @click="claimReward(index)"
        >
          {{ item.claimed ? 'Claimed!' : 'Available' }}
        </button>
      </div>
    </div>
  </div>
</template>

<style scoped>
.header-banner {
  position: relative;
  overflow: hidden;
}

.header-img {
  width: 100%;
  height: 100%;
  display: block;
  object-fit: cover;
  margin-bottom: 20px;
}

.header-banner::before {
  content: '';
  position: absolute;
  top: -50%;
  left: -50%;
  width: 200%;
  height: 200%;
  background-image: 
    radial-gradient(circle at 20% 20%, rgba(255,255,255,0.1) 1px, transparent 1px),
    radial-gradient(circle at 80% 80%, rgba(255,255,255,0.1) 1px, transparent 1px);
  background-size: 50px 50px;
  animation: float 20s linear infinite;
}

@keyframes float {
  0% { transform: translateX(0) translateY(0); }
  100% { transform: translateX(-50px) translateY(-50px); }
}

.expiration-notice {
  text-align: right;
  color: #999;
  font-size: 12px;
  padding: 10px 3px;
  font-weight: bold;
}

.referral-list {
  padding: 0 0 10px;
}

.referral-item:last-child {
  border-bottom: none;
}

.referral-left {
  display: flex;
  align-items: center;
  gap: 15px;
}

.medal-icon {
  width: 80px;
  height: 80px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  margin-left:-13px;
}

.medal-top {
  width: 100%;
  height: 100%;
  border-radius: 50%;
  margin-bottom: 5px;
  overflow: hidden;
}

.medal-img {
  width: 100%;
  height: 100%;
  object-fit: contain;
}

.referral-text {
  flex: 1;
}

.referral-title {
  font-size: 13px;
  color: #333;
  margin-bottom: 5px;
}

.referral-amount {
  font-size: 15px;
  color: #666;
}

.referral-right {
  display: flex;
  align-items: center;
  gap: 10px;
}

.progress-circle {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: #f0f0f0;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 12px;
  font-weight: bold;
  color: #999;
}

.available-btn {
  background: linear-gradient(45deg, #667eea, #764ba2);
  color: white;
  border: none;
  padding: 8px 16px;
  border-radius: 20px;
  font-size: 12px;
  cursor: pointer;
  transition: all 0.3s ease;
}

.available-btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(102, 126, 234, 0.4);
}

.available-btn.claimed {
  background: linear-gradient(45deg, #28a745, #20c997);
}

.referral-item {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 15px 10px;
  border-left: 6px solid transparent;
  border-radius: 6px;
  margin-bottom: 10px;
  background-color: #fff;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.05);
}
/* Each tier gets a unique border color */
.medal-pink {
  background-image: linear-gradient(180deg, #f3f7fb 0, #e0e9f1);
  opacity: 0.7; /* Half transparent */
  pointer-events: none; /* Optional: disables clicking */
}


.medal-green {
  background-image: linear-gradient(180deg, #f3f7fb 0, #e0e9f1);
   opacity: 0.7; /* Half transparent */
  pointer-events: none; /* Optional: disables clicking */
}

.medal-blue {
  background-image: linear-gradient(180deg, #f3f7fb 0, #e0e9f1);
   opacity: 0.7; /* Half transparent */
  pointer-events: none; /* Optional: disables clicking */
}

.medal-purple {
  background-image: linear-gradient(180deg, #f3f7fb 0, #e0e9f1);
   opacity: 0.7; /* Half transparent */
  pointer-events: none; /* Optional: disables clicking */
}

.medal-teal {
  background-image: linear-gradient(180deg, #f3f7fb 0, #e0e9f1);
   opacity: 0.7; /* Half transparent */
  pointer-events: none; /* Optional: disables clicking */
}

.medal-gold {
  background-image: linear-gradient(180deg, #f3f7fb 0, #e0e9f1);
   opacity: 0.7; /* Half transparent */
  pointer-events: none; /* Optional: disables clicking */
}


</style>

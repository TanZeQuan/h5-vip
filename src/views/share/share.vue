<script setup>
import { ref, computed, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import ShareReward from '@/views/share/share-reward.vue'
import ShareIncome from '@/views/share/share-income.vue'
import ShareRecord from '@/views/share/share-record.vue'

const router = useRouter()

// ✅ Redirect if not logged in
onMounted(() => {
  const user = localStorage.getItem('user')
  if (!user) {
    router.push('/login')
  }
})
const goBack = () => {
  router.push('/') // Navigate to home page
}
const activeTab = ref('Overview')

// ✅ Check login status
// onMounted(() => {
//   const user = localStorage.getItem('user')
//   if (!user) {
//     router.push('/login') // redirect to login if not logged in
//   }
// })

const copyToClipboard = () => {
  navigator.clipboard.writeText(referralLink.value)
}

const setTab = (tab) => {
  activeTab.value = tab
}

// Leaderboard data
const users = [
  { name: 'k***********g', amount: '139.00' },
  { name: 'a***********g', amount: '139.00' },
  { name: 'g***********g', amount: '139.00' },
  { name: 'q***********g', amount: '139.00' },
  { name: 'k***********g', amount: '139.00' },
  { name: 'a***********g', amount: '139.00' },
]

const loopedUsers = computed(() => [...users, ...users])
const scrollSpeed = 20

// ✅ Example referral link (update this based on actual logic if needed)
// const referralLink = ref('http://vip999.113thvip.com/?referralCode=pix8455')
</script>


<template>
  <div class="container">
    <!-- Header -->
    <div class="header">
      <button class="back-button"@click="goBack">‹</button>
      <h1 class="header-title">Invite Friends</h1>
    </div>

    <!-- Navigation Tabs -->
    <div class="nav-tabs">
      <button
        class="nav-tab"
        :class="{ 'active-tab': activeTab === 'Overview' }"
        @click="setTab('Overview')"
      >
        Overview
      </button>
      <button
        class="nav-tab"
        :class="{ 'active-tab': activeTab === 'Rewards' }"
        @click="setTab('Rewards')"
      >
        Rewards
      </button>
      <button
        class="nav-tab"
        :class="{ 'active-tab': activeTab === 'Incomes' }"
        @click="setTab('Incomes')"
      >
        Incomes
      </button>
      <button
        class="nav-tab"
        :class="{ 'active-tab': activeTab === 'Records' }"
        @click="setTab('Records')"
      >
        Records
      </button>
    </div>

    <!-- Main Content -->
    <div class="main-content" v-if="activeTab === 'Overview'">
      <!-- Share Section -->
      <div class="share-section">
        <h2 class="share-title">Share to your friends</h2>
        <div class="share-buttons">
          <button class="social-button facebook">f</button>
          <button class="social-button whatsapp">💬</button>
          <button class="social-button twitter">X</button>
          <button class="social-button telegram">✈</button>
          <button class="social-button line">📞</button>
          <button class="social-button messenger">📧</button>
        </div>

        <!-- Referral Link -->
        <div class="link-container">
          <span class="link-icon">🔗</span>
          <span class="link-text">http://vip999.113thvip.com/?referralCode=pix8455 {{ referralLink }}</span>
          <button class="copy-button" @click="copyToClipboard">Copy</button>
        </div>
      </div>

      <!-- Stats Cards -->
      <div class="stats-grid">
        <div class="stat-card today-income">
          <h3 class="stat-title">Today's Income</h3>
          <p class="stat-value">₿ 0.00</p>
        </div>
        <div class="stat-card yesterday-income">
          <h3 class="stat-title">Yesterday's Income</h3>
          <p class="stat-value">₿ 0.00</p>
        </div>
        <div class="stat-card registers">
          <h3 class="stat-title">Registers</h3>
          <p class="stat-value">0</p>
        </div>
        <div class="stat-card valid-referral">
          <h3 class="stat-title">Valid Referral</h3>
          <p class="stat-value">0</p>
        </div>
      </div>

      <!-- Rewards Section -->
      <div class="rewards-section">
        <h2 class="rewards-title">Rewards Released to Date</h2>

        <div class="reward-card invitation-card">
          <div class="reward-icon invitation-icon">
            <img src="@/assets/share/achievement-icon1.png" alt="Achievement Icon" class="reward-img" />
          </div>
          <div class="reward-content">
            <h3 class="reward-type">Invitation Rewards</h3>
            <p class="reward-amount">₿ 240,044,013.00</p>
            <p class="reward-claimed">281248 claimed</p>
          </div>
        </div>

        <div class="reward-card achievement-card">
          <div class="reward-icon achievement-icon">
            <img src="@/assets/share/achievement-icon2.png" alt="Achievement Icon" class="reward-img" />
          </div>
          <div class="reward-content">
            <h3 class="reward-type">Achievement Rewards</h3>
            <p class="reward-amount">₿ 100,759,439.00</p>
            <p class="reward-claimed">162008 claimed</p>
          </div>
        </div>

        <div class="reward-card achievement-card">
          <div class="reward-icon achievement-icon">
            <img src="@/assets/share/achievement-icon3.png" alt="Achievement Icon" class="reward-img" />
          </div>
          <div class="reward-content">
            <h3 class="reward-type">Deposit Rebate</h3>
            <p class="reward-amount">₿ 100,759,439.00</p>
            <p class="reward-claimed">162008 claimed</p>
          </div>
        </div>

        <div class="reward-card achievement-card">
          <div class="reward-icon achievement-icon">
            <img src="@/assets/share/achievement-icon4.png" alt="Achievement Icon" class="reward-img" />
          </div>
          <div class="reward-content">
            <h3 class="reward-type">Betting Rebate</h3>
            <p class="reward-amount">₿ 100,759,439.00</p>
            <p class="reward-claimed">162008 claimed</p>
          </div>
        </div>
      </div>
      
      <div class="second-container">   
        <span>ค่านายหน้าจากการแนะนำ</span>
        <div class="container-banner">
            <img src="@/assets/share/overview-banner1.png" alt="Achievement Icon" class="overview-img" />
        </div>
      </div>

      <!-- VIP Section -->
      <div class="vip-card">
        <div class="vip-icon-container">
          <img src="@/assets/share/overview-logo1.png" alt="VIP Icon" class="vip-icon" />
        </div>
        <div class="vip-content">
          <div class="vip-title">
            <span class="vip-thai">ค่านายหน้า</span>
            <span class="vip-thai">หน้าจาก</span>
            <span class="vip-thai">การเดิมพัน</span>
          </div>
          <div class="vip-amount">฿ 6,000.00</div>
          <div class="vip-subtitle">ค่านายหน้าจากการเดิมพัน</div>
          <div class="vip-info-icon">ⓘ</div>
        </div>
      </div>

      <!-- Leaderboard -->
      <h3 class="leaderboard-title">Leaderboard</h3>
      <div class="leaderboard-container">
        <div class="leaderboard-header">
          <span class="leaderboard-subtitle">Who received the rewards</span>
        </div>
        <div class="leaderboard-wrapper">
          <div class="leaderboard-list" :style="{ animationDuration: `${scrollSpeed}s` }">
            <div class="leaderboard-item" v-for="(user, index) in loopedUsers" :key="index">
              <div class="user-info">
                <div class="user-avatar">
                  <span class="avatar-text">{{ user.name.charAt(0) }}</span>
                </div>
                <div class="user-details">
                  <span class="user-name">{{ user.name }}</span>
                  <span class="user-status">Received</span>
                </div>
              </div>
              <div class="user-amount">
                <span class="amount-text">฿ {{ user.amount }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Income Calculator -->
      <div class="income-calculator">
        <div class="income-icon-container">
          <div class="income-icon">
            <img src="@/assets/share/overview-logo2.png" alt="VIP Icon" class="vip-icon" />
          </div>
        </div>
        <div class="income-content">
          <h3 class="income-title">Income<br/>calculator</h3>
          <div class="income-amount">฿ 6,000.00</div>
          <div class="income-subtitle">Invite <strong>1</strong> active users, expected revenue</div>
        </div>
      </div>
        <div class="container-banner2">
            <img src="@/assets/share/overview-banner2.png" alt="Achievement Icon" class="overview-img" />
        </div>
    </div>
       <!-- Share subpage Section -->
    <div class="main-content" v-if="activeTab === 'Rewards'">
      <ShareReward/>
    </div>
    <div class="main-content" v-if="activeTab === 'Incomes'">
      <ShareIncome />
    </div>
    <div class="main-content" v-if="activeTab === 'Records'">
  <ShareRecord />
    </div>
  </div>
</template>

<style scoped>
.container {
  min-height: 100vh;
  background-color: #fff;
  font-family: Arial, sans-serif;
}

.header {
  background: #180836;
  color: white;
  padding: 16px;
  height: 36px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: sticky;
  top: 0;
  z-index: 1000;
}

.back-button {
  position: absolute;
  left: 16px;
  top: 50%;
  transform: translateY(-50%);
  background: none;
  border: none;
  color: white;
  font-size: 40px;
  cursor: pointer;
}

.header-title {
  font-size: 20px;
  font-weight: 600;
  margin: 0;
}

.nav-tabs {
  position: sticky;
  top: 68px;
  background-color: #fff;
  display: flex;
  border-bottom: 1px solid #e0e0e0;
  z-index: 999;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.05);
}

.nav-tab {
  flex: 1;
  padding: 10px;
  text-align: center;
  border: none;
  background: transparent;
  font-size: 17px;
  cursor: pointer;
  font-weight: 600;
  color: #030303;
}

.active-tab {
  color: #3b82f6;
  border-bottom: 2px solid #3b82f6;
}

.main-content {
  padding: 16px;
}

.share-section {
  background: linear-gradient(180deg, #f3f7fb, #e0e9f1);
  border-radius: 8px;
  padding: 16px;
  margin-bottom: 16px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
}

.share-title {
  font-size: 18px;
  font-weight: bold;
  color: #6b46c1;
  margin-bottom: 16px;
  text-align: center;
}

.share-buttons {
  display: flex;
  justify-content: center;
  gap: 12px;
  margin-bottom: 16px;
}

.social-button {
  width: 40px;
  height: 40px;
  border-radius: 8px;
  border: none;
  color: white;
  font-size: 16px;
  font-weight: bold;
  display: flex;
  align-items: center;
  justify-content: center;
}

.facebook { background-color: #1877f2; }
.whatsapp { background-color: #25d366; }
.twitter { background-color: #000; }
.telegram { background-color: #0088cc; }
.line { background-color: #00c300; }
.messenger { background-color: #0084ff; }

.link-container {
  display: flex;
  align-items: center;
  background-color: #f9f9f9;
  border-radius: 8px;
  padding: 12px;
  border: 1px solid #e0e0e0;
}

.link-icon {
  margin-right: 8px;
  color: #6b7280;
}

.link-text {
  flex: 1;
  font-size: 14px;
  color: #6b7280;
  word-break: break-word;
}

.copy-button {
  background-color: #3b82f6;
  color: white;
  border: none;
  border-radius: 6px;
  padding: 8px 16px;
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
}

.copy-button:hover {
  background-color: #2563eb;
}

.stats-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 16px;
  margin-bottom: 16px;
}

.stat-card {
  border-radius: 8px;
  padding: 16px;
  color: white;
}

.today-income { background: linear-gradient(135deg, #60a5fa, #3b82f6); }
.yesterday-income { background: linear-gradient(135deg, #a78bfa, #8b5cf6); }
.registers { background: linear-gradient(135deg, #8b5cf6, #7c3aed); }
.valid-referral { background: linear-gradient(135deg, #3b82f6, #1d4ed8); }

.stat-title {
  font-size: 14px;
  font-weight: 500;
  margin-bottom: 8px;
}

.stat-value {
  font-size: 24px;
  font-weight: bold;
  margin: 0;
}

.rewards-section {
  border-radius: 8px;
  padding: 16px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
}

.rewards-title {
  font-size: 1.5rem;
  font-weight: bold;
  color: #374151;
  margin-bottom: 16px;
  text-align: center;
}

.reward-card {
  display: flex;
  align-items: center;
  border-radius: 8px;
  padding: 16px;
  margin-bottom: 16px;
  background: linear-gradient(180deg, #f3f7fb, #e0e9f1);
}

.reward-icon {
  width: 80px;
  height: 80px;
  border-radius: 50%;
  margin-right: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.reward-img {
  width: 100%;
  height: 100%;
  object-fit: contain;
}

.reward-content {
  flex: 1;
}

.reward-type {
  font-size: 16px;
  font-weight: 600;
  color: #374151;
  margin-bottom: 4px;
}

.reward-amount {
  font-size: 20px;
  font-weight: bold;
  color: #374151;
  margin-bottom: 4px;
}

.reward-claimed {
  font-size: 14px;
  color: #6b7280;
  margin: 0;
}

/* second container */
.second-container {
  margin: 16px 0;
  text-align: center;
}

.second-container > span {
  display: block;
  font-size: 20px;
  font-weight: 800;
  color: #4b5563;
  margin-bottom: 12px;
}

.container-banner {
  display: flex;
  justify-content: center;
  align-items: center;
}
.container-banner2 {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom:2rem;
}

.overview-img {
  width: 100%;
  max-width: 500px;
  height: auto;
  object-fit: cover;
}

/* VIP Card - Updated Design */
.vip-card {
  background: linear-gradient(118deg, rgb(151, 171, 255) 0%, rgb(18, 53, 151));
  border-radius: 8px;
  padding: 20px;
  color: white;
  display: flex;
  align-items: center;
  margin-bottom: 24px;
  position: relative;
}

.vip-icon-container {
  margin-right: 16px;
}

.vip-icon {
  width: 80px;
  height: 80px;
  margin-top:-2rem;
  padding: 8px;
}

.vip-content {
  flex: 1;
  position: relative;
}

.vip-title {
  display: flex;
  flex-direction: column;
  font-size: 20px;
  font-weight: 500;
  margin-bottom: 8px;
}

.vip-thai {
  line-height: 1.2;
}

.vip-amount {
  font-size:28px;
  font-weight: bold;
  color: #ffb800;
  margin-bottom: 4px;
}

.vip-subtitle {
  font-size: 12px;
  opacity: 0.8;
}

.vip-info-icon {
  position: absolute;
  top: 0;
  right: 0;
  width: 20px;
  height: 20px;
  background: rgba(255, 255, 255, 0.2);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 12px;
}

/* Leaderboard - Updated Design */
.leaderboard-title {
  font-weight: bold;
  font-size: 24px;
  margin: 16px 0 16px;
  text-align: center;
  color: #1f2937;
}

.leaderboard-container {
  background-image: linear-gradient(140deg, #43cbff, #9708cc);
  border-radius: 5px;
  padding: 20px;
  margin-bottom: 24px;
  color: white;
}

.leaderboard-header {
  text-align: center;
  margin-bottom: 16px;
}

.leaderboard-subtitle {
  font-size: 20px;
  font-weight: 600;
  color: white;
}

.leaderboard-wrapper {
  height: 200px;
  overflow: hidden;
  border-radius: 16px;
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
}

.leaderboard-list {
  display: flex;
  flex-direction: column;
  animation: scroll-up linear infinite;
}

.leaderboard-item {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 12px 16px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
}

.user-info {
  display: flex;
  align-items: center;
}

.user-avatar {
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.2);
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 12px;
}

.avatar-text {
  font-size: 14px;
  font-weight: bold;
  color: white;
}

.user-details {
  display: flex;
  flex-direction: column;
}

.user-name {
  font-size: 14px;
  font-weight: 500;
  color: white;
  margin-bottom: 2px;
}

.user-status {
  font-size: 12px;
  color: rgba(255, 255, 255, 0.7);
}

.user-amount {
  background: rgba(255, 255, 255, 0.2);
  padding: 4px 12px;
  border-radius: 16px;
}

.amount-text {
  font-size: 14px;
  font-weight: 600;
  color: white;
}

@keyframes scroll-up {
  0% {
    transform: translateY(0%);
  }
  100% {
    transform: translateY(-50%);
  }
}

/* Income Calculator - Updated Design */
.income-calculator {
  background-image: linear-gradient(122deg, #fd6585, #0d25b9);
  border-radius: 8px;
  padding: 20px;
  color: white;
  display: flex;
  align-items: center;
  margin-bottom: 24px;
  position: relative;
}

.income-icon-container {
  margin-right: 16px;
}

.income-icon {
  width: 56px;
  height: 56px;
  border-radius: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left:20px;
}

.dollar-sign {
  font-size: 24px;
  font-weight: bold;
  color: white;
}

.income-content {
  flex: 1;
  margin-top:-25px;
}

.income-title {
  font-size: 25px;
  font-weight: 600;
  margin-bottom: 10px;
  color: white;
  margin-left:20px;
  
}

.income-amount {
  font-size: 28px;
  font-weight: bold;
  color: #ffb800;
  margin-bottom: 10px;
  margin-left:20px;
}

.income-subtitle {
  font-size: 14px;
  opacity: 0.9;
  color: white;
  margin-left:-20px;
}

.income-subtitle strong {
  color: #ffb800;
}
</style>
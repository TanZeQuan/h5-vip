
<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { onMounted } from 'vue'

const router = useRouter()

const user = ref({
  username: '',
  nickname: '',
  balance: {
    bitcoin: 0
  }
})

onMounted(() => {
  const storedUser = localStorage.getItem('user')
  if (!storedUser) {
    router.push('/login')
    return
  }

  try {
    const parsed = JSON.parse(storedUser)
    user.value.username = parsed.username || ''
    user.value.nickname = parsed.nickname || ''
    user.value.balance.bitcoin = parsed.balance?.bitcoin ?? 0
  } catch (err) {
    console.error('Failed to parse user:', err)
    router.push('/login')
  }
})


function handleLoginSuccess(data) {
  user.value = data
  localStorage.setItem('user', JSON.stringify(data))
}

const goBack = () => {
  router.push('/')
}

const avatarUrl =
  "data:image/svg+xml,%3Csvg xmlns='https://www.w3.org/2000/svg' viewBox='0 0 100 100'%3E%3Ccircle cx='50' cy='35' r='15' fill='%23ddd'/%3E%3Cpath d='M25 75 Q50 60 75 75' fill='%23ddd'/%3E%3C/svg%3E"

const signedInDays = ref([])

const rewards = [
  "วันที่ 1: ลงปากส์คืน",
  "วันที่ 2: ลงปาก<br>ส์คืน2%กำไร",
  "วันที่ 3: ลงปาก<br>ส์คืนมากกว่า",
  "วันที่ 4: ลงปาก<br>สุทธิต่อเนื่อง",
  "วันที่ 5: ลงปาก<br>ส์คืนมาก",
  "วันที่ 6: ลงปาก<br>มากขึ้นเรื่อย",
  "วันที่ 7: ลงปาก<br>ส์คืนมากกว่า"
]

function signIn(index) {
  if (!signedInDays.value.includes(index)) {
    signedInDays.value.push(index)
  }
}
</script>

<template>
  <div class="container">
    <div class="header">
      <button class="back-btn" @click="goBack">‹</button>
      <h1 class="header-title">My Account</h1>
    </div>

    <div class="decorative-bg">
      <div class="profile-section">
        <div class="profile-avatar">
          <img src="@/assets/img/man.png" alt="Avatar">
        </div>
        <div class="profile-info">
          <div class="profile-name">{{ user.username || 'Guest' }}</div>
          <div class="profile-balance">฿ {{ user.balance.bitcoin.toFixed(2) }}</div>
        </div>
      </div>
    </div>


    <div class="stats-container">
      <div class="stats-row">
        <div class="stat-item">
          <div class="stat-number blue">0</div>
          <div class="stat-label">Last sign in</div>
        </div>
        <div class="divider"></div>
        <div class="stat-item">
          <div class="stat-number red">0</div>
          <div class="stat-label">Sign in total bonus</div>
        </div>
      </div>
    </div>

    <div class="main-content">
      <div class="title">ลงชื่อเข้าสู่ระบบทุกวันเพื่อรับอันปากส์คืน</div>

      <div class="bonus-info">
        <div class="gift-icon">🎁</div>
        <div class="bonus-text">
          <div class="bonus-title">ลงชื่อเข้าสู่ระบบทุกวันเพื่อรับอันปาก</div>
          <div class="bonus-subtitle">
            Not checked in today <span class="error-icon">⚠️</span>
          </div>
        </div>
      </div>

      <div class="deposit-info">
        <div class="deposit-item">
          <div>Minimum deposit</div>
          <div>amount:</div>
          <div class="deposit-amount">฿ 700.00</div>
        </div>
        <div class="deposit-item">
          <div>Betting conditions:</div>
          <div class="deposit-amount">฿ 7,000.00</div>
        </div>
      </div>

      <div class="days-grid">
        <div
          class="day-card"
          v-for="(reward, index) in rewards"
          :key="index"
          :class="{ 'special-day': index === 6 }"
        >
          <div class="day-header">Day {{ index + 1 }}</div>
          <div class="reward-icon"></div>
          <div
            class="reward-text"
            v-html="reward"
          ></div>
          <button
            class="sign-in-btn"
            :disabled="signedInDays.includes(index)"
            @click="signIn(index)"
          >
            {{ signedInDays.includes(index) ? "Signed In" : "Sign In" }}
          </button>
        </div>
      </div>

      <div class="rules-section">
        <div class="rules-title">Sign-in rules</div>
        <div class="rules-subtitle">ลงชื่อเข้าสู่ระบบทุกวันเพื่อรับอันปากส์คืน</div>

        <div class="rule-item">
          <span class="rule-number">1.</span>
          เพียงฝากเงินขั้นต่ำ <strong>700</strong> บาทให้ครบและฝึดลองเพื่อรับเงินโบนัสร้อย
          <strong>7,000</strong> เพื่อให้ได้เข้าสู่ระบบรายวัน
        </div>
        <div class="rule-item">
          <span class="rule-number">2.</span>
          ให้เลือกเล่นเพื่อตามฐานางานเข้าสู่ระบบต่อต่อสกุลการเพิ่มเติม...
        </div>
        <div class="rule-item">
          <span class="rule-number">3.</span>
          ให้มีความระมัดระวังเรื่องข้อมูลฐานเอมีเอกสารใหม่...
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.container {
  max-width: 500px;
  margin: 0 auto;
  background: white;
  min-height: 100vh;
  position: relative;
}

.header {
  background: #180836;
  color: white;
  padding: 5px;
  text-align: center;
  position: relative;
}

.back-btn {
  background: none;
  border: none;
  color: white;
  font-size: 50px;
  cursor: pointer;
  margin-left: 10px;
  margin-right: 15px;
  margin-top: -10px;
  transition: opacity 0.2s;
}

.header-title {
  font-size: 20px;
  font-weight: 600;
  flex-grow: 1;
  text-align: center;
  margin-right: 39px;
}

.decorative-bg {
  background: url('@/assets/rewards/sign-banner.png');
  height: 160px;
  position: relative;
  overflow: hidden;
  z-index: 1;
  display: flex;
  align-items: center;
  padding: 0 20px;
}

.decorative-bg::before,
.decorative-bg::after {
  content: '';
  position: absolute;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.2);
}

.decorative-bg::before {
  top: -50%;
  right: -10%;
  width: 100px;
  height: 100px;
}

.decorative-bg::after {
  top: 20%;
  left: 60%;
  width: 80px;
  height: 80px;
  background: rgba(255, 255, 255, 0.15);
}

.profile-section {
  display: flex;
  align-items: center;
  gap: 15px;
  z-index: 2;
  position: relative;
  margin-top: -40px;
}

.profile-avatar {
  width: 60px;
  height: 60px;
  border-radius: 50%;
  border: 3px solid white;
  background: #f0f0f0;
  overflow: hidden;
}

.profile-avatar img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.profile-info {
  color: white;
}

.profile-name {
  font-size: 16px;
  font-weight: 600;
  margin-bottom: 5px;
}

.profile-balance {
  font-size: 14px;
  opacity: 0.9;
}

.stats-container {
  background: white;
  margin: -40px 20px 20px;
  border-radius: 15px;
  padding: 20px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  position: relative;
  z-index: 2;
}

.stats-row {
  display: flex;
  justify-content: space-around;
  margin-bottom: 15px;
}

.stat-item {
  text-align: center;
  flex: 1;
}

.stat-number {
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 5px;
}

.blue {
  color: #3b82f6;
}

.red {
  color: #ef4444;
}

.stat-label {
  font-size: 12px;
  color: #666;
}

.divider {
  width: 1px;
  height: 40px;
  background: #e5e7eb;
  margin: 0 20px;
}

.main-content {
  padding: 0 20px;
}

.title {
  color: #3b82f6;
  font-size: 14px;
  margin-bottom: 10px;
  text-align: center;
  border-bottom: 2px solid #ef4444;
  padding-bottom: 5px;
}

.bonus-info {
  background: #fef2f2;
  padding: 15px;
  border-radius: 10px;
  margin-bottom: 20px;
  display: flex;
  align-items: center;
  gap: 10px;
}

.gift-icon {
  width: 40px;
  height: 40px;
  background: linear-gradient(135deg, #ff6b6b, #ff8e8e);
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 20px;
}

.bonus-title {
  color: #ef4444;
  font-size: 14px;
  font-weight: 600;
  margin-bottom: 5px;
}

.bonus-subtitle {
  color: #666;
  font-size: 12px;
  display: flex;
  align-items: center;
  gap: 5px;
}

.error-icon {
  color: #ef4444;
}

.deposit-info {
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
  font-size: 12px;
}

.deposit-item {
  color: #666;
}

.deposit-amount {
  color: #ef4444;
  font-weight: bold;
}

.days-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 10px;
  margin-bottom: 20px;
}

.day-card {
  background: white;
  border-radius: 10px;
  padding: 15px;
  text-align: center;
  border: 1px solid #e5e7eb;
  transition: transform 0.2s;
}

.day-card:hover {
  transform: translateY(-2px);
}

.day-card.special-day .sign-in-btn {
  background: #ef4444;
}

.day-card.special-day .sign-in-btn:hover {
  background: #dc2626;
}

.day-header {
  background: #3b82f6;
  color: white;
  padding: 5px 10px;
  border-radius: 5px;
  font-size: 12px;
  margin-bottom: 10px;
}

.reward-icon {
  width: 50px;
  height: 50px;
  background: linear-gradient(135deg, #fbbf24, #f59e0b);
  border-radius: 50%;
  margin: 0 auto 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 20px;
  position: relative;
}

.reward-icon::before {
  content: '🎁';
  font-size: 24px;
}

.reward-text {
  font-size: 11px;
  color: #666;
  margin-bottom: 10px;
  line-height: 1.2;
}

.sign-in-btn {
  background: #ef4444;
  color: white;
  border: none;
  padding: 8px 15px;
  border-radius: 20px;
  font-size: 12px;
  cursor: pointer;
  transition: background 0.3s;
}

.sign-in-btn:hover {
  background: #dc2626;
}

.rules-section {
  background: white;
  padding: 20px;
  margin-top: 20px;
}

.rules-title {
  color: #ef4444;
  font-size: 14px;
  font-weight: bold;
  margin-bottom: 10px;
}

.rules-subtitle {
  color: #3b82f6;
  font-size: 12px;
  margin-bottom: 15px;
}

.rule-item {
  margin-bottom: 15px;
  font-size: 12px;
  color: #333;
  line-height: 1.4;
}

.rule-number {
  color: #ef4444;
  font-weight: bold;
}
</style>

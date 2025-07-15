<script setup>
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const username = ref('')
const balance = ref(0.00)
const userData = ref(null)

const goBack = () => {
  router.back()
}

const gold = ref(0)

onMounted(() => {
  const userStr = localStorage.getItem('user')
  if (userStr) {
    try {
      const user = JSON.parse(userStr)
      gold.value = user.game_data?.gold || 0
    } catch (e) {
      console.error('解析用户数据失败:', e)
    }
  }
})

const user = ref({
  username: '',
  nickname: '',
  balance: {
    bitcoin: 0
  }
})

// Load user data from API response stored in localStorage
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
</script>

<template>
  <div class="container">
    <!-- Header -->
    <div class="header">
      <div class="back-arrow" @click="goBack">‹</div>
      <div class="header-title">Bonus</div>
      <div class="header-icon">📋</div>
    </div>

    <!-- Main Content -->
    <div class="main-content">
      <!-- Blue Profile Section -->
      <div class="profile-section">
        <div class="profile-info">
          <div class="profile-avatar">
            <img src="@/assets/img/man.png" alt="Profile" class="avatar-img" />
          </div>
          <div class="profile-details">
            <div class="user-id">{{ user.username || 'Guest' }}</div>
             <div class="balance">฿ {{ gold }}</div>
            <div v-if="userData?.vip_level > 0" class="vip-badge">VIP {{ userData.game_data.vip_level }}</div>
          </div>
        </div>
        <div class="blue-circles">
          <div class="circle circle-1"></div>
          <div class="circle circle-2"></div>
          <div class="circle circle-3"></div>
          <div class="circle circle-4"></div>
        </div>
      </div>

      <!-- Bonus Card Section -->
      <div class="bonus-card-section">
        <div class="bonus-card">
          <div class="bonus-left">
            <div class="bonus-label">Bonus</div>
            <div class="bonus-sublabel">Permanent</div>
          </div>
          
          <div class="bonus-content">
            <div class="bonus-text">
              <div class="bonus-title">โบนัสสำหรับ ลูกค้าลง</div>
              <div class="bonus-subtitle">ทะเบียนใหม่</div>
              <div class="reward-label">Reward :</div>
              <div class="reward-description">โบนัสสำหรับ ลูกค้าลง ทะเบียนใหม่</div>
            </div>
            
            <div class="bonus-right">
              <div class="due-date">Due Date</div>
              <div class="permanent-label">Permanent</div>
              <button class="claim-btn" @click="claimBonus">Claim</button>
            </div>
          </div>
        </div>
      </div>

      <!-- Empty Space -->
      <div class="empty-space"></div>
    </div>
  </div>
</template>

<style scoped>
.container {
  max-width: 500px;
  margin: 0 auto;
  height: 100vh;
  display: flex;
  flex-direction: column;
  background: #f5f5f5;
  font-family: 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
}

.header {
  background: #2d1b4e;
  color: white;
  padding: 5px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: sticky;
  top: 0;
  z-index: 100;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
}

.back-arrow {
  font-size: 40px;
  margin-left:10px;
  margin-top:-10px;
  cursor: pointer;
}

.back-arrow:hover {
  transform: translateX(-3px);
}

.header-title {
  flex: 1;
  text-align: center;
  font-size: 20px;
  font-weight: 600;
  letter-spacing: 0.5px;
}

.header-icon {
  font-size: 1.5rem;
  padding: 0 10px;
}

.main-content {
  flex: 1;
  overflow-y: auto;
  background: #f5f5f5;
}

.profile-section {
  background: linear-gradient(135deg, #4fc3f7 0%, #29b6f6 50%, #03a9f4 100%);
  padding: 30px 20px;
  position: relative;
  overflow: hidden;
}

.profile-info {
  display: flex;
  align-items: center;
  gap: 15px;
  position: relative;
  z-index: 2;
}

.profile-avatar {
  width: 60px;
  height: 60px;
  border-radius: 50%;
  overflow: hidden;
  border: 3px solid white;
  box-shadow: 0 4px 12px rgba(0,0,0,0.2);
  transition: transform 0.3s;
}

.profile-avatar:hover {
  transform: scale(1.05);
}

.avatar-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.profile-details {
  color: white;
}

.user-id {
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 5px;
  text-shadow: 0 1px 3px rgba(0,0,0,0.3);
}

.balance {
  font-size: 24px;
  font-weight: 800;
  text-shadow: 0 2px 4px rgba(0,0,0,0.3);
}

.blue-circles {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  overflow: hidden;
}

.circle {
  position: absolute;
  border-radius: 50%;
  background: rgba(255,255,255,0.1);
  animation: float 6s ease-in-out infinite;
  filter: blur(1px);
}

.circle-1 {
  width: 80px;
  height: 80px;
  top: 20px;
  right: 30px;
  animation-delay: 0s;
}

.circle-2 {
  width: 60px;
  height: 60px;
  top: 80px;
  right: 80px;
  animation-delay: 2s;
}

.circle-3 {
  width: 40px;
  height: 40px;
  top: 40px;
  right: 150px;
  animation-delay: 4s;
}

.circle-4 {
  width: 100px;
  height: 100px;
  top: 60px;
  right: 200px;
  animation-delay: 1s;
}

.bonus-card-section {
  padding: 20px;
  background: #f5f5f5;
}

.bonus-card {
  background: white;
  border-radius: 15px;
  padding: 20px;
  box-shadow: 0 4px 15px rgba(0,0,0,0.1);
  display: flex;
  flex-direction: column;
  gap: 15px;
  transition: transform 0.3s, box-shadow 0.3s;
}

.bonus-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 20px rgba(0,0,0,0.15);
}

.bonus-left {
  background: linear-gradient(135deg, #00bcd4, #0097a7);
  color: white;
  padding: 15px;
  border-radius: 10px;
  text-align: center;
  width: 100px;
  align-self: flex-start;
  box-shadow: 0 2px 8px rgba(0,0,0,0.1);
}

.bonus-label {
  font-size: 16px;
  font-weight: bold;
  margin-bottom: 5px;
}

.bonus-sublabel {
  font-size: 12px;
  opacity: 0.9;
}

.bonus-content {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 15px;
}

.bonus-text {
  flex: 1;
}

.bonus-title {
  font-size: 16px;
  font-weight: bold;
  color: #333;
  margin-bottom: 5px;
}

.bonus-subtitle {
  font-size: 16px;
  font-weight: bold;
  color: #333;
  margin-bottom: 10px;
}

.reward-label {
  font-size: 14px;
  color: #666;
  margin-bottom: 5px;
}

.reward-description {
  font-size: 14px;
  color: #666;
  line-height: 1.4;
}

.bonus-right {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  min-width: 100px;
}

.due-date {
  font-size: 12px;
  color: #999;
  text-align: center;
}

.permanent-label {
  font-size: 16px;
  font-weight: bold;
  color: #333;
  text-align: center;
}

.claim-btn {
  background: linear-gradient(135deg, #4caf50, #45a049);
  color: white;
  border: none;
  padding: 12px 24px;
  border-radius: 25px;
  font-size: 14px;
  font-weight: bold;
  cursor: pointer;
  box-shadow: 0 4px 10px rgba(76,175,80,0.3);
  transition: all 0.3s ease;
  width: 100%;
}

.claim-btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 6px 15px rgba(76,175,80,0.4);
}

.claim-btn:active {
  transform: translateY(0);
}

.empty-space {
  flex: 1;
  background: #f5f5f5;
  min-height: 200px;
}

@keyframes float {
  0%, 100% { transform: translateY(0px) scale(1); }
  50% { transform: translateY(-20px) scale(1.1); }
}

@media (max-width: 400px) {
  .container {
    max-width: 100%;
  }
  
  .bonus-content {
    flex-direction: column;
    align-items: stretch;
  }
  
  .bonus-right {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    min-width: auto;
  }
  
  .claim-btn {
    padding: 10px 20px;
    font-size: 13px;
  }
  
  .profile-avatar {
    width: 50px;
    height: 50px;
  }
  
  .user-id {
    font-size: 16px;
  }
  
  .balance {
    font-size: 20px;
  }
}
</style>
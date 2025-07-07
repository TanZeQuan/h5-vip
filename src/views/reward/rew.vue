<script setup>
import { ref, reactive, computed, onMounted } from 'vue'
import { useRouter } from 'vue-router'


const router = useRouter()

onMounted(() => {
  const user = localStorage.getItem('user')
  if (!user) {
    router.push('/login')
  }
})

const emit = defineEmits(['back', 'action-clicked', 'sign-in'])

const user = reactive({
  username: 'kelvin21',
  nickname: 'kelvin21',
  balance: { bitcoin: 0.0, coins: 0.0 },
  vipLevel: 0,
  benefits: { current: 0, total: 2 }
})

const actions = reactive([
  { id: 'bonus', title: 'Bonus', icon: '🎁', color: 'bonus', hasNotification: true, notificationCount: 1,},
  { id: 'signin', title: 'Sign In', icon: '📅', color: 'signin', hasNotification: false },
  { id: 'invite', title: 'Invite Friends', icon: '👥', color: 'invite', hasNotification: false },
  { id: 'ticket', title: 'TEMU Ticket', icon: '🎫', color: 'ticket', hasNotification: false }
])

const avatarImage = computed(() =>
  "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='60' height='60' viewBox='0 0 60 60'%3E%3Crect width='60' height='60' fill='%23ff8f6b'/%3E%3Ccircle cx='30' cy='25' r='12' fill='%23fff'/%3E%3Cpath d='M10 50c0-11 9-20 20-20s20 9 20 20' fill='%23fff'/%3E%3C/svg%3E"
)

const goBack = () => router.push('/')

const handleActionClick = (action) => {
  switch (action.id) {
    case 'bonus':
      handleBonus(action)
      break
    case 'signin':
      handleSignIn()
      break
    case 'invite':
      handleInvite()
      break
    case 'ticket':
      handleTicket()
      break
  }
  emit('action-clicked', action)
}

const handleSignIn = () => emit('sign-in')
const handleBonus = (action) => {
  action.hasNotification = false
  action.notificationCount = 0
  user.balance.bitcoin += 0.01
}
const handleInvite = () => {}
const handleTicket = () => {}
const getCardClass = (action) => `action-card ${action.color}-card`
const refreshBalance = () => console.log('Refreshing balance...')
</script>

<template>
  <div class="reward-center">
    <div class="background-shapes">
      <div class="shape shape1"></div>
      <div class="shape shape2"></div>
      <div class="shape shape3"></div>
    </div>

    <div class="main-content">
      <div class="header">
        <button class="back-btn" @click="goBack">‹</button>
        <h1 class="header-title">Reward Center</h1>
      </div>

      <div class="user-card">
        <div class="user-card-overlay">
        <div class="sign-in-badge" @click="handleSignIn">Sign In</div>
        <div class="user-info">
          <div class="avatar">
            <img :src="avatarImage" alt="Avatar" />
          </div>
          <div class="user-details">
            <h3>{{ user.username }} 📱</h3>
            <div class="nickname">Nickname: {{ user.nickname }} ✏️</div>
            <div class="balance">
              <span class="coin-icon">₿</span>
              <span>{{ user.balance.bitcoin.toFixed(2) }}</span>
              <button class="refresh-btn" @click="refreshBalance">⟲</button>
            </div>
          </div>
        </div>

        <div class="vip-section">
          <div class="vip-status">
            <span class="crown-icon">👑</span>
            <span>VIP{{ user.vipLevel }}</span>
          </div>
          <div class="benefits">
            Benefits ⚙️
            <span>{{ user.benefits.current }} / {{ user.benefits.total }}</span>
          </div>
        </div>
      </div>
      </div>

      <div class="action-grid">
        <a
          v-for="action in actions"
          :key="action.title"
          href="#"
          :class="getCardClass(action)"
          @click.prevent="handleActionClick(action)"
        >
          <div v-if="action.hasNotification" class="notification-badge">
            {{ action.notificationCount }}
          </div>
          <div class="card-icon">{{ action.icon }}</div>
          <div class="card-title">{{ action.title }}</div>
          <div class="card-decoration"></div>
        </a>
      </div>
    </div>
  </div>
</template>

<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.reward-center {
  max-width: 500px;
  min-height: 100vh;
  background-color: white;
  margin: 0 auto;
  position: relative;
  overflow: hidden;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  /* ✅ Background image is set here (so it includes header + main content) */
  background-image: url('@/assets/rewards/reward-bg.png');
  background-repeat: no-repeat;
  background-size: 100% auto;
  background-position: top center;
}


.background-shapes {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0.3;
  z-index: 1;
}

.shape {
  position: absolute;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.1);
}

.shape1 {
  width: 120px;
  height: 120px;
  top: 60px;
  left: -30px;
  background: rgba(255, 200, 100, 0.3);
}

.shape2 {
  width: 80px;
  height: 80px;
  top: 20px;
  right: 20px;
  background: rgba(255, 255, 100, 0.2);
}

.shape3 {
  width: 60px;
  height: 60px;
  bottom: 200px;
  right: -20px;
  background: rgba(255, 150, 100, 0.3);
}

.header {
  position: relative;
  z-index: 0; /* ✅ Keep header above background */
  background-color: transparent;
  display: flex;
  align-items: center;
  margin-top:-6rem;
  padding: 5px 20px;
  color: white;
}

.back-btn {
  background: none;
  border: none;
  color: white;
  font-size: 50px;
  cursor: pointer;
  margin-right: 15px;
  margin-top: -10px;
}

.header-title {
  font-size: 20px;
  font-weight: 600;
  flex-grow: 1;
  text-align: center;
  margin-right: 39px;
}

.main-content {
  position: relative;
  z-index: 10;
  padding: 20px;
  margin-top:80px;
  background-repeat: no-repeat;
  background-size: 100% auto;
  background-position: top center;
  position: relative;
  padding-top: 100px; /* ✅ Push down to not overlap banner */
}

.user-card {
  background: rgba(255, 255, 255, 0.95);
  border-radius: 20px;
  padding: 20px;
  margin-top:3rem;
  position: relative;
  background-image: url('@/assets/rewards/rw-badge.png');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}
.user-card-overlay {
  background: rgba(255, 255, 255, 0.9); /* or rgba(0, 0, 0, 0.3) for darker */
  border-radius: 20px;
  padding: 40px;
}

.sign-in-badge {
  position: absolute;
  top: -8px;
  right: 15px;
  background: #e74c3c;
  color: white;
  padding: 8px 15px;
  border-radius: 20px;
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
}

.sign-in-badge::before {
  content: '✓';
  background: white;
  color: #e74c3c;
  width: 16px;
  height: 16px;
  border-radius: 50%;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-size: 10px;
  font-weight: bold;
  margin-right: 5px;
}

.user-info {
  display: flex;
  align-items: center;
  gap: 15px;
  margin-bottom: 20px;
}

.avatar {
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background: linear-gradient(45deg, #ff6b47, #ffb347);
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
}

.avatar img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.user-details h3 {
  font-size: 18px;
  font-weight: 700;
  color: #333;
  margin-bottom: 5px;
}

.nickname {
  font-size: 14px;
  color: #666;
  margin-bottom: 8px;
}

.balance {
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 16px;
  color: #333;
}

.coin-icon {
  width: 20px;
  height: 20px;
  background: #ffd700;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 12px;
}

.vip-section {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 15px;
  border-top: 1px solid #eee;
}

.vip-status,
.benefits {
  font-size: 14px;
  color: #666;
}

.crown-icon {
  color: #ffd700;
  margin-right: 5px;
}

.refresh-btn {
  border: none;
  border-radius: 50%;
  width: 32px;
  height: 32px;
  font-size: 16px;
  color: #666;
  cursor: pointer;
}

.action-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 15px;
}

.action-card {
  border-radius: 20px;
  padding: 30px 20px;
  text-align: center;
  color: white;
  position: relative;
  overflow: hidden;
  cursor: pointer;
}

.bonus-card {
  background-image: url('@/assets/rewards/rewards-bonus.png');
}

.signin-card {
  background-image: url('@/assets/rewards/rewards-invite.png');
}

.invite-card {
  background-image: url('@/assets/rewards/rewards-sign.png');
}

.ticket-card {
  background-image: url('@/assets/rewards/rewards-ticket.png');
}

.card-icon {
  width: 50px;
  height: 50px;
  margin: 0 auto 15px;
  background: rgba(255, 255, 255, 0.2);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 24px;
}

.card-title {
  font-size: 16px;
  font-weight: 600;
}

.notification-badge {
  position: absolute;
  top: 15px;
  right: 15px;
  background: #e74c3c;
  color: white;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  font-size: 12px;
  font-weight: bold;
  display: flex;
  align-items: center;
  justify-content: center;
}

@media (max-width: 480px) {
  .reward-center {
    max-width: 100%;
  }
  .main-content {
    padding: 15px;
  }
  .action-card {
    padding: 25px 15px;
  }
}
</style>

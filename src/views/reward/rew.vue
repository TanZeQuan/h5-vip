<script setup>
import { reactive, computed, onMounted } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()

// ✅ Redirect to login if not authenticated
onMounted(() => {
  const user = localStorage.getItem('user')
  if (!user) {
    router.push('/login')
  }
})

// Emits
const emit = defineEmits(['back', 'action-clicked', 'sign-in'])

// User reactive state
const user = reactive({
  username: 'kelvin21',
  nickname: 'kelvin21',
  balance: {
    bitcoin: 0.00,
    coins: 0.00
  },
  vipLevel: 0,
  benefits: {
    current: 0,
    total: 2
  }
})

// Action cards
const actions = reactive([
  {
    id: 'bonus',
    title: 'Bonus',
    icon: '🎁',
    color: 'bonus',
    hasNotification: true,
    notificationCount: 1
  },
  {
    id: 'signin',
    title: 'Sign In',
    icon: '📅',
    color: 'signin',
    hasNotification: false
  },
  {
    id: 'invite',
    title: 'Invite Friends',
    icon: '👥',
    color: 'invite',
    hasNotification: false
  },
  {
    id: 'ticket',
    title: 'TEMU Ticket',
    icon: '🎫',
    color: 'ticket',
    hasNotification: false
  }
])

// Computed avatar and notifications
const avatarImage = computed(() => {
  return "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='60' height='60' viewBox='0 0 60 60'%3E%3Crect width='60' height='60' fill='%23ff8f6b'/%3E%3Ccircle cx='30' cy='25' r='12' fill='%23fff'/%3E%3Cpath d='M10 50c0-11 9-20 20-20s20 9 20 20' fill='%23fff'/%3E%3C/svg%3E"
})

const totalNotifications = computed(() => {
  return actions.reduce((total, action) => {
    return total + (action.hasNotification ? action.notificationCount : 0)
  }, 0)
})

// Navigation
const goBack = () => {
  router.push('/')
}

// Handle action clicks
const handleActionClick = (action) => {
  console.log(`Clicked on ${action.title}`)
  switch(action.id) {
    case 'bonus':
      handleBonus(action)
      break
    case 'signin':
      handleSignIn()
      break
    case 'invite':
      handleInvite(action)
      break
    case 'ticket':
      handleTicket(action)
      break
  }
  emit('action-clicked', action)
}

const handleSignIn = () => {
  console.log('Sign in clicked')
  emit('sign-in')
}

const handleBonus = (action) => {
  console.log('Bonus clicked')
  action.hasNotification = false
  action.notificationCount = 0
  user.balance.bitcoin += 0.01
}

const handleInvite = () => {
  console.log('Invite friends clicked')
}

const handleTicket = () => {
  console.log('TEMU Ticket clicked')
}

const getCardClass = (action) => {
  return `action-card ${action.color}-card`
}
</script>



<template>
  <div class="reward-center">
    <div class="background-shapes">
      <div class="shape shape1"></div>
      <div class="shape shape2"></div>
      <div class="shape shape3"></div>
    </div>
    
    <div class="header">
      <button class="back-btn" @click="goBack">‹</button>
      <h1 class="header-title">Reward Center</h1>
    </div>
    
    <div class="main-content">
      <div class="user-card">
        <div class="sign-in-badge" @click="handleSignIn">
          Sign In 
        </div>
        
        <div class="user-info">
          <div class="avatar">
            <img :src="avatarImage" alt="Avatar">
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
            <span style="margin-left: 10px;">{{ user.benefits.current }} / {{ user.benefits.total }}</span>
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
          <div 
            v-if="action.hasNotification" 
            class="notification-badge"
          >
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
  background-color: #f5f5f5;
  margin: 0 auto;
  min-height: 100vh;
  position: relative;
  overflow: hidden;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
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
  z-index: 10;
  display: flex;
  align-items: center;
  padding: 15px 20px;
  color: white;
}

.back-btn {
  background: none;
  border: none;
  color: white;
  font-size: 50px;
  cursor: pointer;
  margin-right: 15px;
  margin-top:-10px;
  transition: opacity 0.2s;
}

.back-btn:hover {
  opacity: 0.8;
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
  margin-top:1.5rem;
}

.user-card {
  background: rgba(255, 255, 255, 0.95);
  border-radius: 20px;
  padding: 20px;
  margin-bottom: 30px;
  position: relative;
  backdrop-filter: blur(10px);
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
  display: flex;
  align-items: center;
  gap: 5px;
  cursor: pointer;
  transition: transform 0.2s;
}

.sign-in-badge:hover {
  transform: scale(1.05);
}

.sign-in-badge::before {
  content: '✓';
  background: white;
  color: #e74c3c;
  width: 16px;
  height: 16px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 10px;
  font-weight: bold;
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

.vip-status {
  display: flex;
  align-items: center;
  gap: 8px;
  color: #888;
  font-size: 14px;
}

.crown-icon {
  color: #ffd700;
  font-size: 16px;
}

.benefits {
  display: flex;
  align-items: center;
  gap: 5px;
  color: #666;
  font-size: 14px;
}

.refresh-btn {
  border: none;
  border-radius: 50%;
  width: 32px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
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
  text-decoration: none;
  transition: transform 0.2s, box-shadow 0.2s;
  position: relative;
  overflow: hidden;
  cursor: pointer;
}

.action-card:hover {
  transform: translateY(-3px);
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);
}

.bonus-card {
  background: linear-gradient(135deg, #2ecc71, #27ae60);
}

.signin-card {
  background: linear-gradient(135deg, #3498db, #2980b9);
}

.invite-card {
  background: linear-gradient(135deg, #e74c3c, #c0392b);
}

.ticket-card {
  background: linear-gradient(135deg, #ff6b47, #e74c3c);
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
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 12px;
  font-weight: bold;
  animation: pulse 2s infinite;
}

@keyframes pulse {
  0% { transform: scale(1); }
  50% { transform: scale(1.1); }
  100% { transform: scale(1); }
}

.card-decoration {
  position: absolute;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.1);
}

.bonus-card .card-decoration {
  bottom: 10px;
  left: 10px;
}

.signin-card .card-decoration {
  bottom: 15px;
  right: 20px;
  width: 20px;
  height: 20px;
}

.invite-card .card-decoration {
  top: 20px;
  left: 15px;
  width: 25px;
  height: 25px;
}

.ticket-card .card-decoration {
  top: 10px;
  right: 10px;
  width: 15px;
  height: 15px;
}

/* Responsive design */
@media (max-width: 480px) {
  .reward-center {
    max-width: 100%;
  }
  
  .main-content {
    padding: 15px;
  }
  
  .action-grid {
    gap: 12px;
  }
  
  .action-card {
    padding: 25px 15px;
  }
}
</style>
<script setup>
import { ref, reactive, onMounted } from 'vue'
import { useRouter } from 'vue-router'

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

// Reactive data
const user = ref({
  username: '',
  nickname: '',
  balance: ''
})

onMounted(() => {
  const storedUser = localStorage.getItem('user')
  if (storedUser) {
    try {
      const parsed = JSON.parse(storedUser)
      user.value.username = parsed.username || ''
      user.value.nickname = parsed.nickname || ''
      user.value.balance.bitcoin = parsed.balance?.bitcoin || 0
    } catch (err) {
      console.error('Failed to parse user:', err)
    }
  }
})

const quickActions = ref([
  { name: 'Deposit' },
  { name: 'Withdrawal' },
  { name: 'My Cards' }
])

const menuItems = ref([
  {
    title: 'Reward Center',
    icon: '🏆',
    iconClass: 'trophy-icon',
    hasNotification: true,
    notificationCount: 1
  },
  {
    title: 'Betting Record',
    icon: '⚡',
    iconClass: 'betting-icon',
    hasNotification: false
  },
  {
    title: 'Profit And Loss',
    icon: '💰',
    iconClass: 'profit-icon',
    hasNotification: false
  },
  {
    title: 'Deposit Record',
    icon: '💳',
    iconClass: 'deposit-icon',
    hasNotification: false
  },
  {
    title: 'Withdrawal Record',
    icon: '📋',
    iconClass: 'withdrawal-icon',
    hasNotification: false
  },
  {
    title: 'Account Record',
    icon: '🔍',
    iconClass: 'account-icon',
    hasNotification: false
  },
  {
    title: 'My Account',
    icon: '👤',
    iconClass: 'myaccount-icon',
    hasNotification: false
  },
  {
    title: 'Security Center',
    icon: '🔒',
    iconClass: 'security-icon',
    hasNotification: false
  },
  {
    title: 'Invite Friends',
    icon: '👥',
    iconClass: 'invite-icon',
    hasNotification: false
  },
  {
    title: 'Manual Rebate',
    icon: '💵',
    iconClass: 'rebate-icon',
    hasNotification: false
  },
  {
    title: 'Internal Message',
    icon: '📧',
    iconClass: 'message-icon',
    hasNotification: false
  },
  {
    title: 'Suggestion',
    icon: '💬',
    iconClass: 'suggestion-icon',
    hasNotification: false
  },
  {
    title: 'Download APP',
    icon: '📲',
    iconClass: 'suggestion-icon',
    hasNotification: false
  },
  {
    title: 'Customer Service',
    icon: '📞',
    iconClass: 'suggestion-icon',
    hasNotification: false
  },
  {
    title: 'Help Center',
    icon: '❓',
    iconClass: 'suggestion-icon',
    hasNotification: false
  }
])

// Methods
const handleSignIn = () => {
  console.log('Sign in clicked')
}

const refreshBalance = () => {
  console.log('Refreshing balance...')
}

const handleQuickAction = (action) => {
  console.log(`${action.name} clicked`)
}

const handleMenuClick = (item) => {
  console.log(`${item.title} clicked`)
}
</script>


<template>
  <div class="my-account">
    <div class="header">
      <button class="back-btn" @click="goBack">‹</button>
      <h1 class="header-title">My Account</h1>
    </div>
    
    <div class="main-content">
      <div class="user-card">
        <div class="sign-in-badge" @click="handleSignIn">
          <span class="check-icon">✓</span>
          Sign In 
        </div>
        
        <div class="user-info">
          <div class="avatar">
            <img src="@/assets/img/man.png" alt="Avatar">
          </div>
          
          <div class="user-details">
            <div class="vip-badge">
              <span class="vip-icon">👤</span>
              <span>VIP0</span>
            </div>
            
            <h3>{{ user.username }} 📱</h3>
            <div class="nickname">Nickname: {{ user.username }} ✏️</div>
            
            <div class="balance-section">
              <div class="balance">
                <span class="coin-icon">₿</span>
                <span class="balance-amount">{{ user.balance }}</span>
              </div>
              <button class="refresh-btn" @click="refreshBalance">⟲</button>
            </div>
          </div>
        </div>
        
        <div class="action-buttons">
          <button 
            v-for="action in quickActions" 
            :key="action.name"
            class="action-btn"
            @click="handleQuickAction(action)"
          >
            {{ action.name }}
          </button>
        </div>
      </div>
      
      <div class="member-center">
        <h2 class="section-title">Member Center</h2>
        
        <div class="menu-grid">
          <div 
            v-for="item in menuItems" 
            :key="item.title"
            class="menu-item"
            @click="handleMenuClick(item)"
          >
            <div class="menu-icon" :class="item.iconClass">
              <span class="icon">{{ item.icon }}</span>
            </div>
            <div class="menu-title">{{ item.title }}</div>
          </div>
        </div>
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

.my-account {
  max-width: 500px;
  min-height: 100vh;
  background-color: #f5f5f5;
  margin: 0 auto;
  min-height: 100vh;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  color: white;
   /* ✅ Background image is set here (so it includes header + main content) */
  background-image: url('@/assets/rewards/rw-badge2.png');
  background-repeat: no-repeat;
  background-size: 100% auto;
  background-position: top center;
}

.header {
  padding: 15px 20px;
  background: transparent;
  position: relative;
  z-index: 10;
  display: flex;
  align-items: center;
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

.header-title {
  font-size: 20px;
  font-weight: 600;
  flex-grow: 1;
  text-align: center;
  margin-right: 39px;
}

.main-content {
  padding: 25px;
}
.user-card {
  background: rgba(236, 236, 236, 0.767);
  background-image: 
    url('@/assets/rewards/rw-badge-top.png'), /* Small badge */
    url('@/assets/rewards/rw-bg.png');        /* Main background */
  background-repeat: no-repeat, no-repeat;
  background-size: 80px auto, 100% auto;
  background-position: top right 10px, top center;

  border-radius: 20px;
  padding: 10px;
  margin: 0.6rem 0 30px;
  color: #333;
  position: relative;
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
}

.check-icon {
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
  width: 80px;
  height: 80px;
  border-radius: 50%;
  overflow: hidden;
  flex-shrink: 0;
}

.avatar img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.user-details {
  flex-grow: 1;
}

.vip-badge {
  background: #666;
  color: white;
  padding: 4px 8px;
  border-radius: 12px;
  font-size: 12px;
  display: inline-flex;
  align-items: center;
  gap: 4px;
  margin-bottom: 8px;
}

.vip-icon {
  font-size: 10px;
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
  margin-bottom: 12px;
}

.balance-section {
  display: flex;
  align-items: center;
  gap: 10px;
}

.balance {
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 24px;
  font-weight: 700;
  color: #333;
}

.coin-icon {
  width: 24px;
  height: 24px;
  background: #ffd700;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
}

.balance-amount {
  font-size: 24px;
}

.refresh-btn {
  background: #f0f0f0;
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

.action-buttons {
  display: flex;
  gap: 10px;
}

.action-btn {
  flex: 1;
  background: #f8f8f8;
  border: none;
  border-radius: 20px;
  margin-left: -5px;
  padding: 6px 10px; /* ⬅️ Smaller padding */
  margin:8px;
  font-size: 14px;
  font-weight: 500;
  color: #333;
  cursor: pointer;
  transition: all 0.2s ease;
  box-shadow: 0 3px 0 #ccc, 0 5px 8px rgba(0, 0, 0, 0.1);
  position: relative;
  top: 0;
}

.action-btn:hover {
  background: #e8e8e8;
}

.action-btn:active {
  top: 2px;
  box-shadow: 0 2px 0 #bbb, 0 3px 6px rgba(0, 0, 0, 0.08);
}

.member-center {
  color: white;
}

.section-title {
  font-size: 16px;
  font-weight: 600;
  margin-bottom: 20px;
  color: #252525;
}

.menu-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
}

.menu-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  cursor: pointer;
  transition: transform 0.2s;
}

.menu-icon {
  width: 50px;
  height: 50px;
  background: #d1a24f;
  border-radius: 25px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 24px;
  position: relative;
  margin-left:-10px;
}

.menu-title {
  font-size: 13px;
  text-align: center;
  font-weight: 600;
  color: #696969;
  line-height: 1.2;
  max-width: 80px;
  margin-left:-10px;
}

/* Specific icon colors */
.trophy-icon { background: rgba(255, 193, 107, 0.3); }
.betting-icon { background: rgba(255, 193, 107, 0.25); }
.profit-icon { background: rgba(255, 193, 107, 0.25); }
.deposit-icon { background: rgba(255, 193, 107, 0.25); }
.withdrawal-icon { background: rgba(255, 193, 107, 0.25); }
.account-icon { background: rgba(255, 193, 107, 0.25); }
.myaccount-icon { background: rgba(255, 193, 107, 0.25); }
.security-icon { background: rgba(255, 193, 107, 0.25); }
.invite-icon { background: rgba(255, 193, 107, 0.25); }
.rebate-icon { background: rgba(255, 193, 107, 0.25); }
.message-icon { background: rgba(255, 193, 107, 0.25); }
.suggestion-icon { background: rgba(255, 193, 107, 0.25); }
</style>
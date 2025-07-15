<script setup>
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
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
  },
  vip_level: 0 // ✅ Add this line
})


const goToNicknamePage = () => {
  router.push('/nickname') // Navigate to nickname page
}

const goBack = () => {
  router.push('/') // Navigate to home page
}

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
    user.value.balance.bitcoin = parsed.balance?.bitcoin || 0
    user.value.vip_level = parsed.game_data?.vip_level || 0 // ✅ extract from game_data
  } catch (err) {
    console.error('Failed to parse user:', err)
  }
})


const quickActions = ref([
  { name: 'Deposit', url: '/deposit' },
  { name: 'Withdrawal', url: '/withdraw' },
  { name: 'My Cards', url: '/mycard'}
])


const menuItems = ref([
  { title: 'Reward Center', icon: '🏆', iconClass: 'trophy-icon', hasNotification: false, url: '/reward' },
  { title: 'Betting Record', icon: '⚡', iconClass: 'betting-icon', hasNotification: false, url: '/betting-record' },
  { title: 'Profit And Loss', icon: '💰', iconClass: 'profit-icon', hasNotification: false, url: '/profit' },
  { title: 'Deposit Record', icon: '💳', iconClass: 'deposit-icon', hasNotification: false, url: '/deposit-record' },
  { title: 'Withdrawal Record', icon: '📋', iconClass: 'withdrawal-icon', hasNotification: false, url: '' }, //notyet
  { title: 'Account Record', icon: '🔍', iconClass: 'account-icon', hasNotification: false, url: '/acc-record' },
  { title: 'My Account', icon: '👤', iconClass: 'myaccount-icon', hasNotification: false, url: '/my-account' },
  { title: 'Security Center', icon: '🔒', iconClass: 'security-icon', hasNotification: false, url: '/security-center' },
  { title: 'Invite Friends', icon: '👥', iconClass: 'invite-icon', hasNotification: false, url: '/share' },
  { title: 'Manual Rebate', icon: '💵', iconClass: 'rebate-icon', hasNotification: false, url: '' }, //not yet
  { title: 'Internal Message', icon: '📧', iconClass: 'message-icon', hasNotification: false, url: '/mail' },
  { title: 'Suggestion', icon: '💬', iconClass: 'suggestion-icon', hasNotification: false, url: '' }, // not yet
  { title: 'Download APP', icon: '📲', iconClass: 'suggestion-icon', hasNotification: false, url: '' }, // not yet
  { title: 'Customer Service', icon: '📞', iconClass: 'suggestion-icon', hasNotification: false, url: '' },// not yet
  { title: 'Help Center', icon: '❓', iconClass: 'suggestion-icon', hasNotification: false, url: '' }// not yet
])


const handleSignIn = () => {
  router.push('/sign') // navigate to /deposit
}

const refreshBalance = () => {
  console.log('Refreshing balance...')
}

function handleQuickAction(action) {
  if (action.url) {
    router.push(action.url)
  } else {
    console.warn('No URL for', action.name)
  }
}

const handleMenuClick = (item) => {
  if (item.url) {
    router.push(item.url)
  } else {
    console.warn(`${item.title} has no URL defined`)
  }
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
              <span>VIP {{ user.vip_level }}</span>
            </div>

            <h3>{{ user.username }} 📱</h3>
            <div class="nickname" @click="goToNicknamePage">
              Nickname: {{ user.nickname }} ✏️
            </div>

            <div class="balance-section">
              <div class="balance">
                <span class="coin-icon">₿</span>
                <span>{{ gold }}</span>
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
        <h2 class="section-title">Member Center</h2>>
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
  width: 100px;
  height: 100px;
  border-radius: 50%;
  overflow: hidden;
  flex-shrink: 0;
  border-radius: 50%;
  background: linear-gradient(45deg, #555454, #e7ddd0);
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

.user-details {
  flex-grow: 1;
}

.vip-badge {
  background: #949494;
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
  cursor: pointer;
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
  width: 25px;
  height: 25px;
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
  margin-left: -3px;
  padding: 6px 6px; /* ⬅️ Smaller padding */
  margin:5px;
  font-size: 13px;
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
  display: inline-block;
  padding: 5px 13px;
  background-color: #dfdfdf; /* light gray background */
  border-radius: 999px; /* fully rounded pill shape */
  font-size: 12px;
  font-weight: 600;
  color: #000;
  position: relative;
  margin-bottom: 20px;
  line-height: 1;
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
.menu-item:hover {
  background: transparent !important;
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
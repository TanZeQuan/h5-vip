<script setup>
import { ref, reactive, computed, onMounted, onActivated } from 'vue'
import { useRouter } from 'vue-router'
import giftIcon from '@/assets/rewards/rw-gift.png'
import inviteIcon from '@/assets/rewards/rw-invite.png'
import signIcon from '@/assets/rewards/rw-sign.png'
import temuIcon from '@/assets/rewards/rw-temu.png'
import avatar from '@/assets/img/man.png'

const router = useRouter()
const emit = defineEmits(['back', 'action-clicked', 'sign-in'])

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
  vip_level: 0,
  benefits: {
    current: 0,
    total: 100
  }
})

const goToNicknamePage = () => {
  router.push('/nickname')
}

const loadUser = () => {
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

    // ✅ 从 game_data 提取 VIP 等级
    user.value.vip_level = parsed.game_data?.vip_level || 0

    // ✅ 提取当前福利数据（你可根据后端结构自定义）
    user.value.benefits = {
      current: parsed.game_data?.vip_level || 0,
      total: 10 // 假设总 VIP 10 级，如果有准确字段就替换
    }
  } catch (err) {
    console.error('Failed to parse user:', err)
  }
}


onMounted(loadUser)
onActivated(loadUser)

const actions = reactive([
  { 
    id: 'bonus', 
    title: 'Bonus', 
    icon: giftIcon, 
    color: 'bonus', 
    route: '/bonus',
    hasNotification: true,
  },
  { 
    id: 'signin', 
    title: 'Sign In', 
    icon: signIcon, 
    color: 'signin', 
    hasNotification: false,
    route: '/sign'
  },
  { 
    id: 'invite', 
    title: 'Invite Friends', 
    icon: inviteIcon, 
    color: 'invite', 
    hasNotification: false,
    route: '/share'
  },
  { 
    id: 'ticket', 
    title: 'TEMU Ticket', 
    icon: temuIcon, 
    color: 'ticket', 
    hasNotification: false,
    route: '/ticket'
  }
])

const avatarImage = computed(() => avatar)
const goBack = () => router.push('/')

const handleActionClick = (action) => {
  if (action.route) {
    router.push(action.route)
  } else if (action.action) {
    action.action()
  }
  emit('action-clicked', action)
}

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
          <div class="sign-in-badge" @click="() => router.push('/sign')">Sign In</div>
          <div class="user-info">
            <div class="avatar">
              <img :src="avatarImage" alt="Avatar" />
            </div>
            <div class="user-details">
              <h3>{{ user.username }} 📱</h3>
              <div class="nickname" @click="goToNicknamePage">
                Nickname: {{ user.nickname }} ✏️
              </div>
              <div class="balance">
                <span class="coin-icon">₿</span>
                <span>{{ gold }}</span>
                <button class="refresh-btn" @click="refreshBalance">⟲</button>
              </div>
            </div>
          </div>

          <div class="vip-section">
            <div class="vip-status">
              <span class="crown-icon">👑</span>
              <span>VIP{{ user.vip_level }}</span>
            </div>
            <div class="benefits">
              Benefits ⚙️
              <span>{{ user.benefits.current }} / {{ user.benefits.total }}</span>
            </div>
          </div>
        </div>
      </div>

      <div class="action-grid">
        <div 
          v-for="action in actions"
          :key="action.id"
          :class="getCardClass(action)"
          @click="handleActionClick(action)"
        >
          <div class="card-content">
            <div class="card-icon">
              <img :src="action.icon" :alt="action.title + ' Icon'" />
            </div>
            <div class="card-title">{{ action.title }}</div>
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

.reward-center {
  max-width: 500px;
  min-height: 100vh;
  margin: 0 auto;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  background-color: #fff;
  color: white;
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
  opacity: 0.2;
  z-index: 1;
}

.header {
  padding: 15px 20px;
  background: transparent;
  position: relative;
  z-index: 10;
  display: flex;
  align-items: center;
  margin-top:-10px;
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
  padding: 25px;
}

.user-card {
  background: rgba(236, 236, 236, 0.767);
  border-radius: 20px;
  padding: 10px;
  margin-top: 3rem;
  position: relative;
  background-image: url('@/assets/rewards/rw-badge.png');
  background-repeat: no-repeat;
  background-size: 40% auto;
  background-position: top right 30px;
}

.user-card-overlay {
  background-image: url('@/assets/rewards/rw-border.png');
  background-repeat: no-repeat;
  background-size: 100% auto;
  background-position: top center;
  padding: 20px;
}

.sign-in-badge {
  position: absolute;
  z-index: 1;
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
  width: 100px;
  height: 100px;
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
  position: relative;
  z-index: 2;
  padding: 4px;
  font-size: 14px;
  color: #666;
  margin-bottom: 12px;
  cursor: pointer;
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
  margin-top: 30px;
}

.action-card {
  border-radius: 20px;
  padding: 30px 20px;
  text-align: center;
  color: white;
  position: relative;
  overflow: hidden;
  cursor: pointer;
  transition: transform 0.2s;
}

.action-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 1;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
}

.bonus-card {
  background-image: url('@/assets/rewards/rewards-bonus.png');
  background-size: cover;
}

.signin-card {
  background-image: url('@/assets/rewards/rewards-invite.png');
  background-size: cover;
}

.invite-card {
  background-image: url('@/assets/rewards/rewards-sign.png');
  background-size: cover;
}

.ticket-card {
  background-image: url('@/assets/rewards/rewards-ticket.png');
  background-size: cover;
}

.card-icon {
  width: 50px;
  height: 50px;
  margin: 0 auto 15px;
  background: #fff;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 24px;
}

.card-icon img {
  width: 30px;
}

.card-title {
  font-size: 16px;
  font-weight: 600;
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
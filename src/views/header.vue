<script setup>
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const expandedSection = ref(null)
const isPopoutOpen = ref(false)

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


const goToAccountRecord = () => {
  router.push('/acc-record')
}
const goToBettingRecord = () => {
  router.push('/betting-record')
}
const goToSecurityRecord = () => {
  router.push('/security-center')
}
const goToDepositRecord = () => {
  router.push('/deposit-record')
}
const goToProfitRecord = () => {
  router.push('/profit')
}
const goToMailRecord = () => {
  router.push('/mail')
}

const openWallet = () => {
  router.push('/deposit')
}
const openWithdraw = () => {
  router.push('/withdraw')
}

/* game-categories link */
const goToGamePopular= () => {
  router.push({
    path: '/more-games',
    query: { tab: 'popular' },
    hash: '#popular-section'
  })
}
const goToGameJili= () => {
  router.push({
    path: '/more-games',
    query: { tab: 'jili' },
    hash: '#jili-section'
  })
}
const goToGameSlot = () => {
  router.push({
    path: '/more-games',
    query: { tab: 'slot' },
    hash: '#slot-section'
  })
}
const goToGameFish= () => {
  router.push({
    path: '/more-games',
    query: { tab: 'fish' },
    hash: '#fish-section'
  })
}
const goToGameLive = () => {
  router.push({
    path: '/more-games',
    query: { tab: 'live' },
    hash: '#live-section'
  })
}
const goToGamePoker = () => {
  router.push({
    path: '/more-games',
    query: { tab: 'poker' },
    hash: '#poker-section'
  })
}

const nickname = ref('')
// Load user from localStorage
const loadUser = () => {
  const storedUser = localStorage.getItem('user')
  user.value = storedUser ? JSON.parse(storedUser) : null
}

onMounted(loadUser)

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value
}

// Menu state
const isMenuOpen = ref(false)

// Profile dropdown
const isProfileOpen = ref(false)
const toggleProfile = () => {
  isProfileOpen.value = !isProfileOpen.value
}

// Mock login state
const isLoggedIn = ref(localStorage.getItem('isLoggedIn') === 'true')

// Mock user info
const user = ref({
  username: '',
  id: '',
  vip_level: '',
  avatar: '' // fallback default avatar
})

// Click outside to close
const profileRef = ref(null)
const handleClickOutside = (e) => {
  if (profileRef.value && !profileRef.value.contains(e.target)) {
    isProfileOpen.value = false
  }
}
// Default avatar
const defaultAvatar = new URL('@/assets/img/man.png', import.meta.url).href

const toggleSection = (section) => {
  expandedSection.value = expandedSection.value === section ? null : section
}

const goTo = (path) => {
  router.push(path)
}

const logout = () => {
  localStorage.removeItem('user')
  user.value = null
  isMenuOpen.value = false
  router.push('/')
   // Clear login state
  localStorage.setItem('isLoggedIn', 'false')

  // Update reactive state
  isLoggedIn.value = false
  isProfileOpen.value = false

  // Redirect to login page
  router.push('/')
}


const goToRegister = () => router.push('/register')
const goToLogin = () => router.push('/login')
const goToDep = () => router.push('/deposit')
const goToWithdraw = () => router.push('/withdraw')
const goToPromo = () => router.push('/promotion')
const goToShare = () => router.push('/share')
const goToReward = () => router.push('/reward')
const goToCashback = () => router.push('/reward')
</script>


<template>
  <div class="header-container">
    <!-- Header -->
    <header class="header">
      <button class="menu-toggle" @click="toggleMenu" aria-label="Toggle menu">
        <img src="@/assets/img/toggle-i.png" alt="Menu" class="menu-icon" />
      </button>

      <div class="logo">
        <img src="@/assets/img/logo-hd.png" alt="THVIP Logo" />
      </div>

      <div class="auth-buttons" v-if="!user">
        <button class="btn register" @click="goTo('/register')">
          <div class="border-img-wrapper1">
            <img src="@/assets/img/register-br.png" class="btn-border" />
            <span class="btn-content">Register</span>
          </div>
        </button>
        <button class="btn login" @click="goTo('/login')">
          <div class="border-img-wrapper2">
            <img src="@/assets/img/login-br.png" class="btn-border" />
            <span class="btn-content">Login</span>
          </div>
        </button>
      </div>
      
        <div class="user-info right" v-if="user">
          <div class="wallet-am">
          <span class="wallet-amount">₿ {{ gold }}</span>
        </div>
        <!-- Wallet and Withdraw Buttons -->
        <div class="wallet-section">
          <button class="wallet-btn" @click="openWallet">
            <img src="@/assets/img/wallet.png" class="wallet-icon" />
            <span class="wallet-amount">{{ user.balance }}</span>
          </button>
          
          <button class="withdraw-btn" @click="openWithdraw">
            <img src="@/assets/img/money.png" class="withdraw-icon" />
          </button>
        </div>

        <!-- Profile Info -->
        <div class="avatar-section clickable" @click="toggleProfile">
          <img :src="user.avatar || defaultAvatar" class="avatar-img" />
        </div>
      </div>

      <!-- Profile Dropdown -->
        <div class="profile-dropdown" v-if="isProfileOpen">
        <div class="avatar-section">
          <img :src="user.avatar || defaultAvatar" class="avatar-img" />
          <div class="vip-badge">VIP{{ user.vip_level }}</div>
          <div class="user-info">
            <div class="username">{{ user.nickname }}</div>
            <div class="userid">
              ID:{{ user.user_id }}
            </div>
          </div>
        </div>

        <div class="menu-buttons">
        <button class="dropdown-item" type="button" @click="goTo('/my-account')">
          <span class="dropdown-content">
            <van-icon name="contact" class="dropdown-icon" />
            <span>My Account</span>
          </span>
        </button>
      <button class="dropdown-item" @click="goTo('/betting-record')">
        <span class="dropdown-content">
          <van-icon name="records" class="dropdown-icon" />
          <span>Betting Record</span>
        </span>
      </button>
      
      <button class="dropdown-item" @click="goTo('/mail')">
        <span class="dropdown-content">
          <van-icon name="envelop-o" class="dropdown-icon" />
          <span>Mail</span>
        </span>
      </button>
      
      <button class="dropdown-item" @click="goTo('/support')">
        <span class="dropdown-content">
          <van-icon name="service" class="dropdown-icon" />
          <span>Customer Service</span>
        </span>
      </button>
      
      <button class="dropdown-item logout" @click="logout">
        <span class="dropdown-content">
          <van-icon name="arrow-left" class="dropdown-icon" />

          <span>Logout</span>
        </span>
      </button>
    </div>
  </div>
    </header>

    <!-- Overlay -->
    <div class="overlay" v-show="isMenuOpen" @click="toggleMenu"></div>

    <!-- Sidebar -->
    <aside class="sidebar-wrapper">
      <nav class="sidebar" :class="{ open: isMenuOpen }">
        <!-- Top Menu -->
        <div class="menu-group">
          <div class="menu-item active" @click="goToDep">
            <img src="@/assets/img/deposit.png" alt="Deposit" class="menu-img" />
            <span>Deposit</span>
          </div>
          <div class="menu-item active" @click="goToWithdraw">
            <img src="@/assets/img/withdraw.png" alt="Withdraw" class="menu-img" />
            <span>Withdraw</span>
          </div>
          <div class="menu-item" @click="goToPromo">
            <img src="@/assets/img/promotion.png" alt="Promotion" class="menu-img" />
            <span>Promotion</span>
          </div>
          <div class="menu-item" @click="goToShare">
            <img src="@/assets/img/invite.png" alt="Invite & Earn" class="menu-img" />
            <span>Invite & Earn</span>
          </div>
          <div class="menu-item" @click="goToReward">
            <img src="@/assets/img/reward.png" alt="Reward Center" class="menu-img" />
            <span>Reward Center</span>
          </div>
          <div class="menu-item" @click="goToCashback">
            <img src="@/assets/img/cashback.png" alt="Cash Back" class="menu-img" />
            <span>Cash Back</span>
          </div>
        </div>

        <!-- Member Section -->
        <div class="menu-group">
          <div class="menu-item collapsible" @click="toggleSection('member')">
            <img src="@/assets/img/member.png" alt="Member" class="menu-img" />
            <span>Member</span>
            <van-icon :name="expandedSection === 'member' ? 'arrow-up' : 'arrow-down'" class="van-icon" />
          </div>
          <div v-show="expandedSection === 'member'" class="submenu">
            <div class="menu-item-sub" @click="goToBettingRecord">
              <img src="@/assets/img/bet-record.png" alt="Betting Record" class="menu-img" />
              <span>Betting Record</span>
            </div>
           <div class="menu-item-sub" @click="goToAccountRecord">
              <img src="@/assets/img/acc-record.png" alt="Account Record" class="menu-img" />
              <span>Account Record</span>
            </div>
            <div class="menu-item-sub" @click="goToSecurityRecord">
              <img src="@/assets/img/security.png" alt="Security Center" class="menu-img" />
              <span>Security Center</span>
            </div>
            <div class="menu-item-sub" @click="goToDepositRecord">
              <img src="@/assets/img/dep-record.png" alt="Deposit Record" class="menu-img" />
              <span>Deposit Record</span>
            </div>
            <div class="menu-item-sub" @click="goToProfitRecord">
              <img src="@/assets/img/profit.png" alt="Profit and Loss" class="menu-img" />
              <span>Profit and Loss</span>
            </div>
            <div class="menu-item-sub" @click="goToMailRecord">
              <img src="@/assets/img/mail.png" alt="Mail" class="menu-img" />
              <span>Mail</span>
            </div>
          </div>

          <!-- Game Section -->
          <div class="menu-item collapsible" @click="toggleSection('game')">
            <img src="@/assets/img/game-center.png" alt="Game Center" class="menu-img" />
            <span>Game Center</span>
            <van-icon :name="expandedSection === 'game' ? 'arrow-up' : 'arrow-down'" class="van-icon" />
          </div>
          <div v-show="expandedSection === 'game'" class="submenu">
            <div class="menu-item-sub" @click="goToGamePopular">
              <img src="@/assets/img/tab-fire.png" alt="Hot games" class="menu-img" />
              <span>Hot games</span>
            </div>
            <div class="menu-item-sub" @click="goToGameJili">
              <img src="@/assets/hot-games/jili-i.png" alt="Jili" class="menu-img" />
              <span>Jili</span>
            </div>
            <div class="menu-item-sub" @click="goToGameSlot">
              <img src="@/assets/img/tab-slot.svg" alt="Slots" class="menu-img" />
              <span>Slots</span>
            </div>
            <div class="menu-item-sub" @click="goToGameFish">
              <img src="@/assets/img/tab-fish.svg" alt="Fish" class="menu-img" />
              <span>Fish</span>
            </div>
            <div class="menu-item-sub" @click="goToGameLive">
              <img src="@/assets/subpage/live-i.svg" alt="Live" class="menu-img" />
              <span>Live</span>
            </div>
            <div class="menu-item-sub" @click="goToGamePoker">
              <img src="@/assets/subpage/poker-i.svg" alt="Poker" class="menu-img" />
              <span>Poker</span>
            </div>
          </div>
        </div>

        <!-- sidebar footer Section -->
        <br />
        <div class="menu-group footer-section">
          <div class="menu-item secondary">
            <img src="@/assets/img/help.png" alt="Help Center" class="menu-img" />
            <span>Help Center</span>
          </div>
          <div class="menu-item secondary">
            <img src="@/assets/img/english.png" alt="Language" class="menu-img" />
            <span>English</span>
          </div>
          <div class="menu-item secondary" v-if="user" @click="logout">
            <img src="@/assets/img/logout.png" alt="Logout" class="menu-img" />
            <span>Logout</span>
          </div>
        </div>
      </nav>
    </aside>
  </div>
</template>

<style scoped>
.header-container{
  margin-bottom:3vh;
}
.logo {
  width: 130px;
  height: auto;
  margin-right: auto;
  margin-left: 10px;
}
.logo img {
  width: 100%;
  height: auto;
  display: block;
}
/* Toggle Button */
.menu-toggle {
  background: transparent;
  border: none;
  padding: 0;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
}
.menu-icon {
  width: 30px;
  height: 30px;
  display: block;
}

/* Icon beside text */
.menu-img {
  width: 24px;
  height: 24px;
  object-fit: contain;
  cursor: pointer;
}
.btn{
  margin-right:-15px;
}
.border-img-wrapper1{
  padding:0px 0px;
}
.border-img-wrapper2{
  padding:0px 8px;
}
.btn-content{
  font-size:13px;
}
.sidebar {
  background-color: #0d1120;
  color: #fff;
  width: 15rem;
  overflow-y: auto;
  overflow-x: hidden;
  height: calc(100vh - 8.98rem); /* taller sidebar */
  position: fixed;
  top: 3.75rem;
  left: 0;
  transform: translateX(-100%);
  transition: transform 0.3s ease;
  z-index: 95;
  padding-top: 0.5rem;
  display: flex;
  flex-direction: column;
  gap: 0.3rem;
}
.sidebar.open {
  transform: translateX(0);
}

.van-icon {
  margin-left: auto;
  font-size: 14px;
  cursor: pointer;
  background: linear-gradient(90deg, #fff5e2, #f0cda3);
  background-clip: text;
  -webkit-background-clip: text;
  color: transparent;
  -webkit-text-fill-color: transparent;
}

.menu-group {
  display: flex;
  flex-direction: column;
  margin:12px;
  gap: 0.5rem;
  padding: 0 1rem;
  cursor: pointer;
}
.menu-group.footer-section {
    margin-top: -10px;
  }
.menu-item {
  display: flex;
  align-items: center;
  background: linear-gradient(180deg, #21283b, #2a3249 52.6%, #21283b);
  color: white;
  padding: 0.40rem 1rem;
  border-radius: 8px;
  font-size: 14px;
  font-weight: 600;
  gap: 1rem;
}
.menu-item.active {
  background: linear-gradient(180deg, #fff5e2, #f0cda3);
  color: #000;
}
.menu-item:hover {
  background-color: #2c2c36;
}
.menu-item.secondary {
  background-color: transparent;
  border: 1px solid #636161;
}
.menu-item-sub {
  display: flex;
  align-items: center;
  color: white;
  padding: 0.40rem 1rem;
  font-size: 14px;
  font-weight: 600;
  gap: 1rem;
  border-bottom: 1px solid rgba(255, 255, 255, 0.2); /* 👈 subtle white line */
}

.submenu {
  display: flex;
  flex-direction: column;
  gap: 0.3rem;
}

@media screen and (min-width: 768px) {
  .sidebar {
    width: 16rem;
    padding-top:2rem;
  }
  .menu-item {
    font-size: 15px;
    padding: 0.55rem 1.25rem;
  }
  .menu-img {
    width: 26px;
    height: 26px;
  }
}

@media screen and (min-width: 1024px) {
  .sidebar {
    width: 20rem;
  }
  .menu-item {
    font-size: 1rem;
    padding: 1rem 1.5rem;
  }
  .menu-img {
    width: 28px;
    height: 28px;
  }
}

/* profile icon */

.menu-toggle {
  background: none;
  border: none;
  cursor: pointer;
}

.menu-icon {
  width: 24px;
  height: 24px;
}

.logo-img {
  height: 36px;
}

.user-section {
  position: relative;
  display: flex;
  align-items: center;
  gap: 16px;
}

.avatar-section {
  text-align: center;
  margin-bottom: 20px;
  position: relative;
  cursor: pointer;
}

.avatar-img {
  width: 35px;
  height: 35px;
  border-radius: 50%;
  margin-top:10px;
  border: 3px solid #ffc107;
  object-fit: cover;
}

.vip-badge {
  position: absolute;
  top: 40px;
  left: 50%;
  transform: translateX(-50%);
  background: #ffc107;
  color: black;
  font-weight: bold;
  font-size: 10px;
  padding: 2px 6px;
  border-radius: 10px;
  z-index: 1;
}

.profile-dropdown {
  position: absolute;
  top: 100%;
  right: 0;
  margin-top: 5px;
  margin:10px;
  background: #1f2937;
  border: 1px solid #374151;
  border-radius: 10px;
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.3);
  z-index: 100;
  min-width: 200px;
  padding: 20px 16px;
}

.dropdown-item {
  display: flex;
  align-items: center;
  gap: 10px;
  background-color: #2c3d5c;
  border: none;
  padding: 10px 16px; /* Reduced from 30px to 16px for left alignment */
  border-radius: 8px;
  width: 100%;
  margin-bottom: 8px;
  font-size: 14px;
  color: #fff;
  cursor: pointer;
  transition: background 0.2s;
  font-family: inherit;
  text-align: left;
  justify-content: flex-start; /* ensures content stays left-aligned */
}

.dropdown-content {
  gap: 10px;
  flex: 1;
}
.dropdown-icon{
  margin-right:20px;
}
.dropdown-item:hover {
  background-color: #3a4f6f;
}

.logout {
  background-color: #3a2b45;
}

.logout:hover {
  background-color: #5a3e65;
}

.user-info {
  margin-top: 12px;
  text-align: center;
}

.username {
  font-weight: bold;
  font-size: 16px;
}

.userid {
  font-size: 13px;
  color: #ccc;
  display: flex;
  justify-content: center;
  align-items: center;
}

.wallet-section {
  display: flex;
  align-items: center;
  margin-right: 15px;
}

.wallet-btn {
  display: flex;
  align-items: center;
  background: linear-gradient(to right, #f8491df8, #ffa57ec9);
  border: none;
  border-radius: 8px;
  padding: 5px 10px;
  color: white;
  font-weight: bold;
  margin-right: 10px;
  margin-top:-10px;
  position: relative;
  overflow: hidden;
  width:35px;
  height:auto;
  animation: heartbeat 1.4s infinite ease-in-out;
  transform-origin: center;
  cursor: pointer;
}

.wallet-am{
  display: flex;
  align-items: center;
  font-weight: bold;
  margin-top:-10px;
  position: relative;
  overflow: hidden;
  width:40px;
  height:auto;
  cursor:pointer;
}
.wallet-icon {
  width:20px;
  height:20px;
}

/* Wallet amount */
.wallet-amount {
  font-size: 15px;
  color: rgba(230, 240, 255, 0.89);
  margin-right:20px;
}

.withdraw-btn {
  display: flex;
  align-items: center;
  background: linear-gradient(to right, #0741ff, #e9f5ffc5);
  border: none;
  border-radius: 8px;
  padding: 5px 10px;
  color: white;
  font-weight: bold;
  margin-right: 10px;
  margin-top:-10px;
  position: relative;
  overflow: hidden;
  width:35px;
  height:auto;
  margin-right:-8px;
  cursor: pointer;
}

.withdraw-icon {
  margin-right: 6px;
  width:20px;
  height:20px;
}
/* Animation keyframes */
@keyframes heartbeat {
  0% {
    transform: scale(1);
  }
  14% {
    transform: scale(1.3);
  }
  28% {
    transform: scale(1);
  }
  42% {
    transform: scale(1.2);
  }
  70% {
    transform: scale(1);
  }
  100% {
    transform: scale(1);
  }
}

/* Add these to your existing styles */
.user-info.right {
  display: flex;
  align-items: center;
}

</style>
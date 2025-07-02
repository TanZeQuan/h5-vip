<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()

const isMenuOpen = ref(false)
const windowWidth = ref(window.innerWidth)
const expandedSection = ref(null) // track which section is expanded

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value
}

const toggleSection = (section) => {
  expandedSection.value = expandedSection.value === section ? null : section
}

const handleResize = () => {
  windowWidth.value = window.innerWidth
}

onMounted(() => {
  window.addEventListener('resize', handleResize)
})
onUnmounted(() => {
  window.removeEventListener('resize', handleResize)
})

// ✅ Route functions
function goToLogin() {
  router.push('/login')
}

function goToRegister() {
  router.push('/register')
}
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

      <div class="auth-buttons">
      <button class="btn register" @click="goToRegister">
        <div class="border-img-wrapper1">
          <img src="@/assets/img/register-br.png" class="btn-border" aria-hidden="true">
          <span class="btn-content">Register</span>
        </div>
      </button>
      <button class="btn login" @click="goToLogin">
        <div class="border-img-wrapper2">
          <img src="@/assets/img/login-br.png" class="btn-border" aria-hidden="true">
          <span class="btn-content">Login</span>
        </div>
      </button>
    </div>
    </header>

    <!-- Overlay -->
    <div class="overlay" v-show="isMenuOpen" @click="toggleMenu"></div>
 </div>
    <!-- Sidebar -->
    <aside class="sidebar-wrapper">
      <nav class="sidebar" :class="{ open: isMenuOpen }">
        <!-- Top -->
        <div class="menu-group">
          <div class="menu-item active">
            <img src="@/assets/img/deposit.png" alt="Deposit" class="menu-img" />
            <span>Deposit</span>
          </div>
          <div class="menu-item">
            <img src="@/assets/img/withdraw.png" alt="Withdraw" class="menu-img" />
            <span>Withdraw</span>
          </div>
          <div class="menu-item">
            <img src="@/assets/img/promotion.png" alt="Promotion" class="menu-img" />
            <span>Promotion</span>
          </div>
          <div class="menu-item">
            <img src="@/assets/img/invite.png" alt="Invite & Earn" class="menu-img" />
            <span>Invite & Earn</span>
          </div>
          <div class="menu-item">
            <img src="@/assets/img/reward.png" alt="Reward Center" class="menu-img" />
            <span>Reward Center</span>
          </div>
          <div class="menu-item">
            <img src="@/assets/img/cashback.png" alt="Cash Back" class="menu-img" />
            <span>Cash Back</span>
          </div>
        </div>
      
        <!-- Expandable -->
        <div class="menu-group">
          <div class="menu-item collapsible" @click="toggleSection('member')">
            <img src="@/assets/img/member.png" alt="Member" class="menu-img" />
            <span>Member</span>
            <van-icon :name="expandedSection === 'member' ? 'arrow-up' : 'arrow-down'" class="van-icon" />
          </div>
          <div v-show="expandedSection === 'member'" class="submenu">
            <div class="menu-item">Member Info</div>
            <div class="menu-item">VIP Status</div>
          </div>
          <div class="menu-item collapsible" @click="toggleSection('game')">
            <img src="@/assets/img/game-center.png" alt="Game Center" class="menu-img" />
            <span>Game Center</span>
            <van-icon :name="expandedSection === 'game' ? 'arrow-up' : 'arrow-down'" class="van-icon" />
          </div>
          <div v-show="expandedSection === 'game'" class="submenu">
            <div class="menu-item">Slots</div>
            <div class="menu-item">Live Casino</div>
          </div>
        </div>
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
          <div class="menu-item secondary">
            <img src="@/assets/img/logout.png" alt="Logout" class="menu-img" />
            <span>Logout</span>
          </div>
        </div>
      </nav>
    </aside>
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
  height: calc(100vh - 3.75rem);
  overflow-y: auto;
  overflow-x: hidden;
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
  margin:5px;
  gap: 0.5rem;
  padding: 0 1rem;
}
.menu-group.footer-section {
    margin-top: -10px;
  }
.menu-item {
  display: flex;
  align-items: center;
  background-color: #1a1f30;
  color: white;
  padding: 0.35rem 1rem;
  border-radius: 8px;
  font-size: 14px;
  font-weight: 600;
  gap: 0.75rem;
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
</style>
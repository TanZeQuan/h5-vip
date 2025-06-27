<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const isMenuOpen = ref(false)
const windowWidth = ref(window.innerWidth)

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value
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
</script>

<template>
  <div class="layout-container">
    <!-- Header -->
    <header class="header">
     <button class="menu-toggle" @click="toggleMenu" aria-label="Toggle menu">
        <img src="@/assets/img/toggle-i.png" alt="Menu" class="menu-icon" />
    </button>

      <div class="logo">
        <img src="@/assets/img/logo-hd.png" alt="THVIP Logo" />
      </div>

      <div class="auth-buttons">
        <button class="btn register">
            <div class="border-img-wrapper">
                <img src="@/assets/img/register-br.png" class="btn-border" aria-hidden="true">
                <span class="btn-content">Register</span>
            </div>
        </button>
        
        <button class="btn login">
            <div class="border-img-wrapper">
                <img src="@/assets/img/login-br.png" class="btn-border" aria-hidden="true">
                <span class="btn-content">Login</span>
            </div>
        </button>
        </div>
    </header>

    <!-- Sidebar Overlay -->
    <div class="overlay" v-show="isMenuOpen" @click="toggleMenu"></div>

    <!-- Sidebar -->
    <aside class="sidebar-wrapper">
      <nav class="sidebar" :class="{ open: isMenuOpen }">
        <div class="menu-group">
          <div class="menu-item active">Deposit</div>
          <div class="menu-item">Withdraw</div>
        </div>

        <div class="menu-group">
          <div class="menu-item">Promotion</div>
          <div class="menu-item">Invite & Earn</div>
          <div class="menu-item">Reward Center</div>
          <div class="menu-item">Cash Back</div>
        </div>

        <div class="menu-group">
          <div class="menu-item">Member</div>
          <div class="menu-item">Game Center</div>
          <div class="menu-item">Help Center</div>
        </div>

        <div class="sidebar-footer">
          <div class="language-selector">
            <span>English</span>
            <van-icon name="arrow-down" size="16" color="#fff" />
          </div>
        </div>
      </nav>
    </aside>

    <!-- Main Content -->
    <main class="main-content" :class="{ shift: isMenuOpen }">
      <!-- Your page content -->
      <p style="color: white;">Main content here</p>
    </main>
  </div>
</template>

<style scoped>
.logo {
  width: 120px; /* Adjust this value to make logo smaller/larger */
  height: auto; /* Maintain aspect ratio */
  margin-right: auto; /* Pushes everything else to the right */
  margin-left:20px;
}

.logo img {
  width: 100%; /* Make image fill its container */
  height: auto; /* Maintain aspect ratio */
  display: block; /* Remove extra space below image */
}
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
  width: 24px; /* Same size as your original icon */
  height: 24px;
  display: block;
}
</style>

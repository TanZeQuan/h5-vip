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
  </div>
</template>

<style scoped>
.logo {
  width: 130px; /* Adjust this value to make logo smaller/larger */
  height: auto; /* Maintain aspect ratio */
  margin-right: auto; /* Pushes everything else to the right */
  margin-left:10px;
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
/* Sidebar */
.sidebar-wrapper {
  position: relative;
}

.overlay {
  position: fixed;
  top: 3.75rem;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 90;
}

.sidebar {
  background-color: #1a1a1f;
  color: #fff;
  width: 15rem;
  height: calc(100vh - 3.75rem);
  overflow-y: auto;
  position: fixed;
  top: 3.75rem;
  left: 0;
  transform: translateX(-100%);
  transition: transform 0.3s ease;
  z-index: 95;
}

.sidebar.open {
  transform: translateX(0);
}

.sidebar.desktop {
  transform: translateX(0) !important;
  z-index: 80;
}

.menu-group {
  padding: 1rem 0;
}

.menu-item {
  padding: 0.75rem 1.25rem;
  cursor: pointer;
  font-size: 15px;
  transition: background-color 0.2s;
}

.menu-item:hover,
.menu-item.active {
  background-color: #2c2c36;
  color: #f5e7cc;
}

.sidebar-footer {
  padding: 1rem;
  border-top: 1px solid #333;
}

.language-selector {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #2c2c36;
  padding: 0.625rem;
  border-radius: 4px;
  cursor: pointer;
  font-size:15px;
}

/* Medium Devices */
@media screen and (min-width: 768px) {
  .sidebar {
    width: 18rem;
  }

  .menu-item {
    font-size: 1.3rem;
    padding: 1rem 1.5rem;
  }

  .language-selector {
    font-size: 1.1rem;
  }
}

/* Large Devices */
@media screen and (min-width: 1024px) {
  .sidebar {
    width: 22rem;
  }

  .menu-item {
    font-size: 1.5rem;
    padding: 1.25rem 2rem;
  }

  .language-selector {
    font-size: 1.25rem;
  }
}
.sidebar {
  background-color: #1a1a1f;
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
}
</style>

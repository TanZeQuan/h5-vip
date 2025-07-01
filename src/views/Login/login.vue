<template>
  <div class="login-page">
    <!-- Back Arrow -->
    <van-icon name="arrow-left" class="back-arrow" @click="goHome" />

    <!-- Logo -->
    <div class="logo">
      <img src="@/assets/login-img/login-logo.png" alt="THVIP Logo" class="logo-img" />
    </div>

    <!-- Login Title -->
    <h2 class="login-title">Login</h2>

    <!-- Username -->
    <div class="input-group">
      <!-- <img src="@/assets/img/user-icon.svg" alt="User" class="input-icon" /> -->
      <input type="text" placeholder="Username" />
    </div>

    <!-- Password -->
    <div class="input-group">
      <!-- <img src="@/assets/img/lock-icon.svg" alt="Password" class="input-icon" /> -->
      <input type="password" placeholder="Password" />
    </div>

    <!-- Remember + Forgot -->
    <div class="options">
      <label class="remember">
        <input type="checkbox" />
        <span>Remember</span>
      </label>
      <a href="#" class="forgot">Forgot password?</a>
    </div>

    <!-- Login Button -->
    <button class="login-button">Login</button>

    <!-- Register -->
    <div class="register">
      No account yet? <span class="register-link">Register</span>
    </div>

    <!-- Divider -->
    <div class="divider">
      <span></span>
      <p>Or log in with</p>
      <span></span>
    </div>

    <!-- Google Button -->
    <button class="google-button">
      <!-- <img src="@/assets/img/google-icon.svg" alt="Google" /> -->
      <span>Google</span>
    </button>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router'

const router = useRouter()

const goHome = () => {
  router.push('/') // or your actual home route name
}
</script>

<style scoped>
html, body {
  margin: 0;
  padding: 0;
  height: 100%;
  
  font-family: Arial, sans-serif;
}

.login-page {
  min-height: 90vh;
  display: flex;
  flex-direction: column;
  justify-content: flex-start; 
  padding: 40px 30px 20px;      
  max-width: 500px;
  margin: 0 auto;
  color: white;
  box-sizing: border-box;
}

.back-arrow {
  font-size: 24px;
  color: white;
  margin-bottom: 20px;
}

.logo {
  text-align: center;
  margin-bottom: 20px;
}

.logo-img {
  max-width: 300px;
  width: 100%;
  height: auto;
}


.domain {
  font-size: 14px;
  color: #dcdcdc;
}

.login-title {
  text-align: center;
  font-size: 28px;
  font-weight: bold;
  font-family: Georgia, serif;
  margin-bottom: 20px;
}

.input-group {
  display: flex;
  align-items: center;
  border: 1px solid white;
  border-radius: 10px;
  padding: 10px 15px;
  margin-bottom: 15px;
}

.input-group input {
  flex: 1;
  background: transparent;
  border: none;
  color: white;
  outline: none;
  padding-left: 10px;
}

.input-icon {
  width: 20px;
  height: 20px;
}

.options {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
}

.remember {
  display: flex;
  align-items: center;
  gap: 6px;
  font-size: 14px;
}

.forgot {
  color: #ff5cb1;
  font-size: 14px;
  text-decoration: none;
}

.login-button {
  width: 100%;
  background: linear-gradient(to right, #f7d9b9, #e9c392);
  color: white;
  font-weight: bold;
  border: none;
  border-radius: 30px;
  padding: 12px;
  font-size: 16px;
  margin-bottom: 20px;
  cursor: pointer;
}

.register {
  text-align: center;
  margin-bottom: 20px;
  font-size: 14px;
}

.register-link {
  color: #ffd700;
  font-weight: bold;
  cursor: pointer;
}

.divider {
  display: flex;
  align-items: center;
  text-align: center;
  margin-bottom: 20px;
  color: #aaa;
  font-size: 14px;
}

.divider span {
  flex: 1;
  height: 1px;
  background: #444;
  margin: 0 10px;
}

.google-button {
  display: flex;
  align-items: center;
  justify-content: center;
  background: white;
  color: #333;
  border-radius: 30px;
  padding: 10px;
  font-weight: bold;
  font-size: 14px;
  border: none;
  cursor: pointer;
  gap: 10px;
}

.google-button img {
  width: 20px;
  height: 20px;
}
</style>

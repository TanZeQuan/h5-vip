<template>
  <div class="register-page">
    <!-- Back Arrow -->
    <van-icon name="arrow-left" class="back-arrow" @click="goHome" />

    <!-- Logo -->
    <div class="logo">
      <!-- Uncomment and replace with your actual logo -->
      <!-- <img src="@/assets/img/logo.png" alt="THVIP Logo" class="logo-img" /> -->
      <h1><span class="logo-yellow">TH</span>VIP</h1>
      <p class="domain">thvip.vip</p>
    </div>

    <!-- Title -->
    <h2 class="form-title">Register</h2>

    <!-- Form -->
    <form class="form">
      <div class="form-group">
        <span class="required">*</span>
        <div class="input-wrapper">
          <!-- <img src="@/assets/img/user-icon.svg" class="input-icon" /> -->
          <input type="text" placeholder="Username" />
        </div>
      </div>

      <div class="form-group">
        <span class="required">*</span>
        <div class="input-wrapper">
          <!-- <img src="@/assets/img/lock-icon.svg" class="input-icon" /> -->
          <input type="password" placeholder="Password" />
        </div>
      </div>

      <div class="form-group">
        <div class="input-wrapper">
          <!-- <img src="@/assets/img/lock-icon.svg" class="input-icon" /> -->
          <input type="password" placeholder="Confirm password" />
        </div>
      </div>

      <div class="form-group">
        <span class="required">*</span>
        <div class="input-wrapper">
          <!-- <img src="@/assets/img/phone-icon.svg" class="input-icon" /> -->
          <input type="text" placeholder="Mobile number" />
        </div>
      </div>

      <div class="form-group captcha-group">
        <span class="required">*</span>
        <div class="input-wrapper captcha-wrapper">
          <input type="text" placeholder="Enter a captcha" />
          <div class="captcha-box">44212</div>
        </div>
      </div>

      <!-- Buttons -->
      <div class="button-group">
        <button type="submit" class="btn-register">Register</button>
        <button type="reset" class="btn-reset">Reset</button>
      </div>
    </form>

    <!-- Divider -->
    <div class="divider">
      <span></span>
      <p>Or</p>
      <span></span>
    </div>

    <!-- Google Button -->
    <div class="google-button-wrapper">
      <button class="google-button">
        <span>Google</span>
      </button>
    </div>
  </div>
</template>

<script setup>
import { Icon } from 'vant'
import 'vant/es/icon/style'
import { useRouter } from 'vue-router'

const router = useRouter()
const goHome = () => router.push('/')
</script>

<style scoped>
html, body {
  height: 100%;
  margin: 0;
}

.register-page {
  min-height: 100vh;
  color: white;
  max-width: 400px;
  margin: 0 auto;
  padding: 40px 20px;
  box-sizing: border-box;
  font-family: Arial, sans-serif;
}

.back-arrow {
  font-size: 24px;
  color: white;
  margin-bottom: 10px;
}

.logo {
  text-align: center;
  margin-bottom: 20px;
}

.logo-yellow {
  color: #ffd700;
}

.domain {
  font-size: 14px;
  color: #dcdcdc;
}

.logo-img {
  max-width: 160px;
  width: 100%;
  height: auto;
}

.form-title {
  text-align: center;
  font-size: 26px;
  font-weight: bold;
  font-family: Georgia, serif;
  margin-bottom: 20px;
}

.form-group {
  margin-bottom: 15px;
  display: flex;
  align-items: center;
}

.required {
  color: red;
  margin-right: 6px;
}

.input-wrapper {
  flex: 1;
  display: flex;
  align-items: center;
  border: 1px solid white;
  border-radius: 10px;
  padding: 10px 15px;
}

.input-wrapper input {
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

.captcha-group .captcha-wrapper {
  justify-content: space-between;
}

.captcha-box {
  background: white;
  color: #030b1f;
  padding: 4px 8px;
  border-radius: 5px;
  font-weight: bold;
  font-size: 16px;
  margin-left: 10px;
}

.button-group {
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
  gap: 10px;
}

.btn-register {
  flex: 1;
  background: linear-gradient(to right, #f7d9b9, #e9c392);
  color: white;
  font-weight: bold;
  border: none;
  border-radius: 30px;
  padding: 12px;
  font-size: 16px;
  cursor: pointer;
}

.btn-reset {
  flex: 1;
  background: transparent;
  border: 1px solid #e9c392;
  border-radius: 30px;
  color: #e9c392;
  font-weight: bold;
  padding: 12px;
  font-size: 16px;
  cursor: pointer;
}

.divider {
  display: flex;
  align-items: center;
  text-align: center;
  margin: 20px 0;
  color: #aaa;
  font-size: 14px;
}

.divider span {
  flex: 1;
  height: 1px;
  background: #444;
  margin: 0 10px;
}

.google-button-wrapper {
  display: flex;
  justify-content: center;
}

.google-button {
  background: white;
  color: #333;
  border-radius: 30px;
  padding: 10px 30px;
  font-weight: bold;
  font-size: 14px;
  border: none;
  cursor: pointer;
}
</style>

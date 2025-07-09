<script setup>
import { ref, computed, onMounted } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()

const username = ref('')
const nickname = ref('')
const birthday = ref('')
const email = ref('')
const fullName = ref('')
const phone = ref('1239876543')

const maskedPhone = computed(() => {
  return phone.value.slice(0, 5) + '****'
})

const goBack = () => {
  router.back()
}

const handleSubmit = () => {
  console.log('Form submitted', {
    username: username.value,
    nickname: nickname.value,
    birthday: birthday.value,
    email: email.value,
    fullName: fullName.value,
  })
}

// Load username from localStorage
onMounted(() => {
  const user = JSON.parse(localStorage.getItem('user'))
  if (user && user.username) {
    username.value = user.username
  }
})
</script>

<template>
  <div class="container">
    <div class="header">
      <span class="back-arrow" @click="goBack">‹</span>
      <div class="header-title">My Account</div>
    </div>

    <div class="content">
      <div class="username-section">
        <span class="username-label">Username:</span>
        <span class="username-value">{{ username }}</span>
      </div>

      <div class="form-group">
        <div class="input-container">
          <span class="input-icon">👤</span>
          <input v-model="nickname" class="input-field" placeholder="Please enter your nickname" />
        </div>
      </div>

      <div class="form-group">
        <div class="input-container">
          <span class="input-icon">📅</span>
          <input v-model="birthday" type="date" class="input-field" />
        </div>
      </div>

      <div class="form-group">
        <div class="input-container">
          <span class="input-icon">✉️</span>
          <input v-model="email" class="input-field" placeholder="Please enter your email" />
        </div>
      </div>

      <div class="form-group">
        <div class="input-container">
          <span class="input-icon">📄</span>
          <input v-model="fullName" class="input-field" placeholder="Please enter your Full Name" />
        </div>
      </div>

      <div class="name-warning">
        <div class="warning-text">
          Please enter your correct name as it appears on your National Identity card. Do not use any wrong username, as it may cause problems for you.
        </div>
      </div>

      <div class="phone-container">
        <span class="phone-icon">📱</span>
        <span class="phone-number">{{ maskedPhone }}</span>
      </div>

      <div class="privacy-section">
        <div class="privacy-title">We care about your privacy</div>
        <div class="privacy-text">
          All the user data are encrypted to ensure your personal privacy is protected.
        </div>
      </div>

      <button class="submit-button" @click="handleSubmit">Submit</button>
    </div>
  </div>
</template>

<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.container {
  max-width: 500px;
  margin: 0 auto;
  background-color: white;
  min-height: 100vh;
}

.header {
  background: #180836;
  color: white;
  padding: 10px 20px;
  display: flex;
  align-items: center;
  position: relative;
}

.back-arrow {
  font-size: 40px;
  margin-left:10px;
  margin-top:-10px;
  cursor: pointer;
}

.header-title {
  font-size: 18px;
  font-weight: 600;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
}

.content {
  padding: 20px;
}

.username-section {
  margin-bottom: 25px;
}

.username-label {
  font-size: 16px;
  font-weight: 600;
  color: #333;
  margin-bottom: 8px;
}

.username-value {
  font-size: 16px;
  color: #333;
  margin-left: 20px;
  font-weight:bold;
}

.form-group {
  margin-bottom: 15px;
}

.input-container {
  position: relative;
  background-color: #f0f0f0;
  border-radius: 8px;
  padding: 12px;
  display: flex;
  align-items: center;
}

.input-icon {
  margin-right: 12px;
  color: #999;
  font-size: 16px;
}

.input-field {
  border: none;
  background: transparent;
  outline: none;
  font-size: 14px;
  color: #333;
  flex: 1;
}

.name-warning {
  background-color: #fff3cd;
  border: 1px solid #ffeaa7;
  border-radius: 8px;
  padding: 12px;
  margin-bottom: 15px;
}

.warning-text {
  color: #d63031;
  font-size: 13px;
  line-height: 1.4;
}

.phone-container {
  background-color: #f0f0f0;
  border-radius: 8px;
  padding: 15px;
  display: flex;
  align-items: center;
  margin-bottom: 20px;
}

.phone-icon {
  margin-right: 12px;
  color: #999;
  font-size: 16px;
}

.phone-number {
  color: #333;
  font-size: 14px;
}

.privacy-section {
  margin-bottom: 25px;
}

.privacy-title {
  color: #3498db;
  font-size: 14px;
  font-weight: 600;
  margin-bottom: 8px;
}

.privacy-text {
  color: #666;
  font-size: 13px;
  line-height: 1.4;
}

.submit-button {
  width: 100%;
  background-color: #ff4757;
  color: white;
  border: none;
  border-radius: 8px;
  padding: 15px;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  transition: background-color 0.2s;
}

.submit-button:hover {
  background-color: #ff3838;
}

.submit-button:active {
  background-color: #e33e4a;
}
</style>

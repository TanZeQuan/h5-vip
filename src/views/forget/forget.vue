<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()

const username = ref('')
const email = ref('')
const errorMessage = ref('')
const successMessage = ref('')
const isLoading = ref(false)

const goHome = () => {
  router.push('/')
}

const handleReset = async () => {
  errorMessage.value = ''
  successMessage.value = ''

  if (!username.value || !email.value) {
    errorMessage.value = 'Username and email are required.'
    return
  }

  isLoading.value = true

  try {
    const formData = new FormData()
    formData.append('username', username.value)
    formData.append('email', email.value)

    const response = await fetch('http://192.168.0.122/silver/user/forgot_password.php', {
      method: 'POST',
      body: formData,
    })

    const result = await response.json()

    if (result.success) {
      successMessage.value = result.message || 'Reset instructions sent to your email.'
    } else {
      errorMessage.value = result.message || 'Reset failed.'
    }
  } catch (error) {
    errorMessage.value = 'Network error. Please try again.'
  } finally {
    isLoading.value = false
  }
}
</script>

<template>
  <div class="login-page">
    <van-icon name="arrow-left" class="back-arrow" @click="goHome" />

    <div class="logo">
      <img src="@/assets/login-img/login-logo.png" alt="THVIP Logo" class="logo-img" />
    </div>

    <h2 class="form-title">Forgot Password</h2>
    <span class="form-title2">Please retrieve your password in the following ways</span>

    <div class="input-group">
      <van-icon name="user-o" class="input-icon" />
      <input v-model="username" type="text" placeholder="Username" required />
    </div>

    <div class="input-group">
      <van-icon name="envelop-o" class="input-icon" />
      <input v-model="email" type="email" placeholder="Email" required />
    </div>

    <div v-if="errorMessage" class="error-message">{{ errorMessage }}</div>
    <div v-if="successMessage" class="success-message">{{ successMessage }}</div>

    <button class="login-button" @click="handleReset" :disabled="isLoading">
      {{ isLoading ? 'Sending...' : 'Reset' }}
    </button>
  </div>
</template>

<style scoped>
.login-page {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
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

.form-title {
  text-align: center;
  font-size: 2rem;
  font-weight: bold;
  font-family: Georgia, serif;
  margin: -5px 0 20px;
  color: #d6e2f4;
  letter-spacing: -1px;
  line-height: 1.1;
}

.form-title2 {
  text-align: center;
  font-size: 15px;
  font-weight: bold;
  font-family: Georgia, serif;
  color: #d6e2f4;
  margin-bottom: 20px;
  line-height: 1.1;
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

.login-button {
  width: 100%;
  background: linear-gradient(90deg, #fff5e2, #f0cda3);
  color: white;
  font-weight: bold;
  border: none;
  border-radius: 30px;
  padding: 12px;
  font-size: 25px;
  font-family: Georgia, serif;
  margin-top: 20px;
  margin-bottom: 20px;
  cursor: pointer;
}

.error-message,
.success-message {
  font-size: 14px;
  margin-bottom: 10px;
  text-align: center;
}
.error-message {
  color: #ff4d4f;
}
.success-message {
  color: #4caf50;
}
</style>

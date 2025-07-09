<script setup>
import { ref, computed } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()

const email = ref('')
const code = ref('')
const newPassword = ref('')
const errorMessage = ref('')
const successMessage = ref('')
const isLoading = ref(false)
const showPassword = ref(false)
const isSendingCode = ref(false)

const passwordFieldType = computed(() => showPassword.value ? 'text' : 'password')

const togglePasswordVisibility = () => {
  showPassword.value = !showPassword.value
}

const goHome = () => {
  router.push('/')
}

const sendCode = async () => {
  errorMessage.value = ''
  successMessage.value = ''

  if (!email.value) {
    errorMessage.value = 'Please enter your email first.'
    return
  }

  isSendingCode.value = true

  try {
    const bodyData = `email=${encodeURIComponent(email.value)}`
    const response = await fetch('http://192.168.0.122/silver/reset/request_reset.php', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: bodyData
    })

    const result = await response.json()
    if (result.success) {
      successMessage.value = result.message || 'Verification code sent.'
    } else {
      errorMessage.value = result.message || 'Failed to send code.'
    }
  } catch (error) {
    errorMessage.value = 'Network error. Please try again.'
  } finally {
    isSendingCode.value = false
  }
}

const handleResetPassword = async () => {
  errorMessage.value = ''
  successMessage.value = ''

  if (!email.value || !code.value || !newPassword.value) {
    errorMessage.value = 'All fields are required.'
    return
  }

  if (newPassword.value.length < 6) {
    errorMessage.value = 'Password must be at least 6 characters.'
    return
  }

  isLoading.value = true

  try {
    const bodyData = `email=${encodeURIComponent(email.value)}&code=${encodeURIComponent(code.value)}&new_password=${encodeURIComponent(newPassword.value)}`

    const response = await fetch('http://192.168.0.122/silver/reset/reset_password.php', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: bodyData
    })

    const result = await response.json()

    if (result.success) {
      successMessage.value = result.message || 'Password reset successful.'
      setTimeout(() => {
        router.push('/login')
      }, 1500)
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
      <van-icon name="envelop-o" class="input-icon" />
      <input v-model="email" type="email" placeholder="Email" required />
    </div>

    <button class="send-code-button" @click="sendCode" :disabled="isSendingCode">
      {{ isSendingCode ? 'Sending...' : 'Send Code' }}
    </button>

    <div class="input-group">
      <van-icon name="certificate" class="input-icon" />
      <input v-model="code" type="text" placeholder="Verification Code" />
    </div>

    <div class="input-group">
      <van-icon name="lock" class="input-icon" />
      <input 
        v-model="newPassword" 
        :type="passwordFieldType" 
        placeholder="New Password (min 6 chars)" 
      />
      <van-icon 
        @click="togglePasswordVisibility" 
        :name="showPassword ? 'eye-o' : 'closed-eye'" 
        class="password-toggle" 
      />
    </div>

    <div v-if="errorMessage" class="error-message">{{ errorMessage }}</div>
    <div v-if="successMessage" class="success-message">{{ successMessage }}</div>

    <button class="login-button" @click="handleResetPassword" :disabled="isLoading">
      {{ isLoading ? 'Resetting...' : 'Reset' }}
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
  cursor: pointer;
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

.password-toggle {
  margin-left: 10px;
  cursor: pointer;
}

.send-code-button {
  width: 100%;
  background: #ffffff20;
  color: white;
  border: 1px solid white;
  border-radius: 20px;
  padding: 8px;
  font-size: 16px;
  font-family: Georgia, serif;
  margin-bottom: 15px;
  cursor: pointer;
  transition: background 0.3s;
}

.send-code-button:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

.send-code-button:hover{
  background:#596275;
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

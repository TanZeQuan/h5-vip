<script setup>
import { ref, computed } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()

const username = ref('')
const password = ref('')
const errorMessage = ref('')
const successMessage = ref('')
const isLoading = ref(false)
const rememberMe = ref(false)
const showPassword = ref(false) // 👈 Add this line

const passwordFieldType = computed(() => showPassword.value ? 'text' : 'password')

const togglePasswordVisibility = () => {
  showPassword.value = !showPassword.value
}

// ✅ Load saved username if "Remember Me" was checked previously
const savedUsername = localStorage.getItem('rememberedUsername')
if (savedUsername) {
  username.value = savedUsername
  rememberMe.value = true
}

const goHome = () => {
  router.push('/')
}

const handleLogin = async () => {
  errorMessage.value = ''
  successMessage.value = ''

  if (!username.value || !password.value) {
    errorMessage.value = '用户名和密码不能为空'
    return
  }

  isLoading.value = true

  // ✅ Simulated user database (can replace with anything)
  const dummyUser = {
    username: 'demo',
    password: '123456',
    name: 'Demo User',
    role: 'admin'
  }

  await new Promise(resolve => setTimeout(resolve, 800)) // Fake delay

  if (username.value === dummyUser.username && password.value === dummyUser.password) {
    // ✅ Store user data
    localStorage.setItem('user', JSON.stringify(dummyUser))

    if (rememberMe.value) {
      localStorage.setItem('rememberedUsername', username.value)
    } else {
      localStorage.removeItem('rememberedUsername')
    }

    successMessage.value = '登录成功，正在跳转...'

    setTimeout(() => {
      router.push('/')
    }, 800)
  } else {
    errorMessage.value = '用户名或密码错误'
  }

  isLoading.value = false
}

</script>


<template>
  <div class="login-page">
    <van-icon name="arrow-left" class="back-arrow" @click="goHome" />

    <div class="logo">
      <img src="@/assets/login-img/login-logo.png" alt="THVIP Logo" class="logo-img" />
    </div>

    <h2 class="form-title">Login</h2>

    <div class="input-group">
      <van-icon name="user-o" class="input-icon" />
      <input v-model="username" type="text" placeholder="Username" required/>
    </div>

    <div class="input-group">
      <van-icon name="lock" class="input-icon" />
      <input
        v-model="password"
        :type="passwordFieldType"
        placeholder="Password"
        required
      />
      <van-icon
        @click="togglePasswordVisibility"
        :name="showPassword ? 'eye-o' : 'closed-eye'"
        class="password-toggle"
      />
    </div>


    <div v-if="errorMessage" class="error-message">{{ errorMessage }}</div>
    <div v-if="successMessage" class="success-message">{{ successMessage }}</div>

    <div class="options">
      <label class="remember">
        <input type="checkbox" v-model="rememberMe" />
        <span>Remember</span>
      </label>
      <router-link to="/forget" class="forgot">Forgot password?</router-link>
    </div>

    <button class="login-button" @click="handleLogin" :disabled="isLoading">
      {{ isLoading ? '登录中...' : 'Login' }}
    </button>

    <div class="register">
      No account yet? <router-link to ="/register" class="register-link">Register</router-link>
    </div>

    <div class="divider">
      <span></span>
      <p>Or log in with</p>
      <span></span>
    </div>

    <div class="google-button-wrapper">
      <button class="google-button">
        <img src="@/assets/login-img/google.png" alt="Google" class="google-icon" />
        <span>Google</span>
      </button>
    </div>
  </div>
</template>



<style scoped>
html, body {
  margin: 0;
  padding: 0;
  height: 100%;
}

.login-page {
  min-height: 100vh;
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


.domain {
  font-size: 14px;
  color: #dcdcdc;
}

.login-title {
  text-align: center;
  font-size: 2rem;
  font-weight: bold;
  margin-bottom: 20px;
  color: #d6e2f4;
  font-family: Georgia, serif;
  margin-top:-5px;
  letter-spacing: -1.0px;
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
  background: linear-gradient(90deg, #fff5e2, #f0cda3);
  color: white;
  font-weight: bold;
  border: none;
  border-radius: 30px;
  padding: 12px;
  font-size: 25px;
  font-family: Georgia, serif;
  margin-bottom: 20px;
  cursor: pointer;
}

.form-title {
  text-align: center;
  font-size: 2rem;
  font-weight: bold;
  font-family: Georgia, serif;
  margin-bottom: 20px;
  color: #d6e2f4;
  margin-top:-5px;
  letter-spacing: -1.0px;
  line-height: 1.1;
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
.google-button-wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top:-10px;
}

.google-button {
  display: flex;
  align-items: center;
  gap: 8px;
  background-color: #db4437;
  color: white;
  border: 2px solid white;
  border-radius: 30px;
  padding: 10px 20px;
  font-weight: bold;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.google-button:hover {
  background-color: #c33d2f;
}

.google-icon {
  width: 20px;
  height: 20px;
}
.error-message {
  color: #ff4d4f;
  font-size: 14px;
  margin-bottom: 10px;
  text-align: center;
}
.success-message {
  color: #4caf50;
  font-size: 14px;
  margin-bottom: 10px;
  text-align: center;
}
</style>

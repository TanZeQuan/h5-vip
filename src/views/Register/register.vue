<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { showToast } from 'vant'
import axios from 'axios'

const router = useRouter()
const goHome = () => router.push('/')

const username = ref('')
const password = ref('')
const confirmPassword = ref('')
const phone = ref('')
const captcha = ref('')

const captchaCode = '44212'

const handleRegister = async () => {
  if (!username.value || !password.value || !confirmPassword.value) {
    return showToast('用户名和密码不能为空')
  }
  if (username.value.length < 3 || username.value.length > 20) {
    return showToast('用户名长度必须在3-20个字符之间')
  }
  if (!/^[a-zA-Z0-9_]+$/.test(username.value)) {
    return showToast('用户名只能包含字母、数字和下划线')
  }
  if (password.value.length < 6) {
    return showToast('密码长度至少6位')
  }
  if (password.value !== confirmPassword.value) {
    return showToast('两次密码输入不一致')
  }
  if (captcha.value !== captchaCode) {
    return showToast('验证码错误')
  }

  try {
    const params = new URLSearchParams()
    params.append('username', username.value)
    params.append('password', password.value)
    if (phone.value) params.append('phone', phone.value)

    const res = await axios.post('http://192.168.0.122/silver/user/user_register.php', params, {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      }
    })

    if (res.data.success) {
      showToast('注册成功')
      setTimeout(() => {
        router.push('/login') // Replace with actual path
      }, 1000)
    } else {
      showToast(res.data.message)
    }
  } catch (err) {
    showToast('网络错误或服务器异常')
    console.error(err)
  }
}
</script>


<template>
  <div class="register-page">
    <!-- Back Arrow -->
    <van-icon name="arrow-left" class="back-arrow" @click="goHome" />

    <!-- Logo -->
    <div class="logo">
      <img src="@/assets/login-img/login-logo.png" alt="THVIP Logo" class="logo-img" />
    </div>

    <!-- Title -->
    <h2 class="form-title">Register</h2>

    <!-- Form -->
<form class="form" @submit.prevent="handleRegister">
  <div class="form-group">
    <span class="required">*</span>
    <div class="input-wrapper">
      <van-icon name="user-o" class="input-icon" />
      <input type="text" placeholder="Username" v-model="username" required />
    </div>
  </div>

  <div class="form-group">
    <span class="required">*</span>
    <div class="input-wrapper">
      <van-icon name="lock" class="input-icon" />
      <input type="password" placeholder="Password" v-model="password" required />
    </div>
  </div>

  <div class="form-group">
    <span class="required">*</span>
    <div class="input-wrapper">
      <van-icon name="lock" class="input-icon" />
      <input type="password" placeholder="Confirm password" v-model="confirmPassword" required />
    </div>
  </div>

  <div class="form-group">
    <span class="required">*</span>
    <div class="input-wrapper">
      <van-icon name="phone-o" class="input-icon" />
      <input type="text" placeholder="Mobile number" v-model="phone" />
    </div>
  </div>

  <div class="form-group captcha-group">
    <span class="required">*</span>
    <div class="input-wrapper captcha-wrapper">
      <van-icon name="shield-o" class="input-icon" />
      <input type="text" placeholder="Enter a captcha" v-model="captcha" required />
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

.register-page {
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
  max-width: 300px;
  width: 100%;
  height: auto;
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
  margin-left:-20px;
}

.button-group {
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
  gap: 10px;
  margin-left:20px;
}

.btn-register {
  flex: 1;
  background: linear-gradient(90deg, #fff5e2, #f0cda3);
  color: white;
  font-weight: bold;
  border: none;
  border-radius: 30px;
  font-family: Georgia, serif;
  padding: 12px;
  font-size: 18px;
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

</style>

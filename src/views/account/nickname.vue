<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const nickname = ref('')

const goBack = () => {
  router.back()
}

const handleSubmit = async () => {
  if (!nickname.value.trim()) {
    alert('请输入昵称')
    return
  }

  const stored = localStorage.getItem('user')
  if (!stored) {
    alert('请先登录')
    return
  }

  const user = JSON.parse(stored)
  const userId = user.user_id

  try {
    const response = await fetch('https://192.168.0.122/silver/user/user_update_nickname.php', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: `user_id=${encodeURIComponent(userId)}&nickname=${encodeURIComponent(nickname.value)}`
    })

    const result = await response.json()

    if (result.success) {
      // 更新 localStorage 中的 nickname
      user.nickname = nickname.value
      localStorage.setItem('user', JSON.stringify(user))
      alert('昵称修改成功')
      router.push('/account')
    } else {
      alert('修改失败：' + result.message)
    }
  } catch (error) {
    console.error('请求错误', error)
    alert('网络错误，请稍后重试')
  }
}
</script>


<template>
  <div class="container">
    <div class="header">
      <div class="back-arrow" @click="goBack">‹</div>
      <div class="header-title">Nickname</div>
    </div>

    <div class="content">
      <div class="input-container">
        <div class="input-wrapper">
          <div class="input-icon">
            <div class="user-icon"></div>
          </div>
          <input
            type="text"
            class="nickname-input"
            placeholder="Please enter your nickname"
            v-model="nickname"
            @keypress.enter="handleSubmit"
          />
        </div>
      </div>
    </div>

    <div class="submit-wrapper">
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

body {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Arial, sans-serif;
  background-color: #f5f5f5;
  height: 100vh;
  overflow: hidden;
}

.container {
  width: 100%;
  max-width: 500px;
  margin: 0 auto;
  height: 100vh;
  background-color: #f5f5f5;
  display: flex;
  flex-direction: column;
}

.header {
  background: #180836;
  color: white;
  padding: 20px;
  display: flex;
  align-items: center;
  position: relative;
  height: 80px;
  flex-shrink: 0;
}

.back-arrow {
  font-size: 40px;
  font-weight: bold;
  cursor: pointer;
  margin-right: 20px;
  margin-left:10px;
  margin-top:-10px;
}

.header-title {
  font-size: 20px;
  font-weight: 600;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
}

.content {
  flex: 1;
  padding: 40px 20px 20px;
  overflow-y: auto;
}

.input-container {
  margin-bottom: auto;
}

.input-wrapper {
  position: relative;
  margin-bottom: 20px;
}

.input-icon {
  position: absolute;
  left: 15px;
  top: 50%;
  transform: translateY(-50%);
  color: #999;
  font-size: 18px;
}

.nickname-input {
  width: 100%;
  padding: 18px 15px 18px 50px;
  border: none;
  border-radius: 8px;
  background-color: #e8e8e8;
  font-size: 16px;
  color: #333;
  outline: none;
}

.nickname-input::placeholder {
  color: #999;
  font-size: 16px;
}

.submit-wrapper {
  padding: 0 20px 20px;
  background: #f5f5f5;
  position: sticky;
  bottom: 0;
  z-index: 5;
}

.submit-button {
  width: 100%;
  padding: 18px;
  background-color: #ff4757;
  color: white;
  border: none;
  border-radius: 8px;
  font-size: 18px;
  font-weight: 600;
  cursor: pointer;
  transition: background-color 0.2s ease;
}

.submit-button:hover {
  background-color: #ff3742;
}

.submit-button:active {
  transform: translateY(1px);
}

/* User icon styling */
.user-icon {
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: #999;
  position: relative;
}

.user-icon::before {
  content: '';
  position: absolute;
  top: 3px;
  left: 50%;
  transform: translateX(-50%);
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background-color: #f5f5f5;
}

.user-icon::after {
  content: '';
  position: absolute;
  bottom: 2px;
  left: 50%;
  transform: translateX(-50%);
  width: 10px;
  height: 6px;
  border-radius: 5px 5px 0 0;
  background-color: #f5f5f5;
}
</style>

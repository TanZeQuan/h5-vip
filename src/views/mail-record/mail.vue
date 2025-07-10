<template>
  <div class="internal-message">
    <!-- Header -->
    <div class="header">
      <span class="back-arrow" @click="goBack">‹</span>
      <div class="header-title">Internal Message</div>
    </div>

    <!-- Tabs -->
    <div class="tab-container">
      <div class="tab-nav">
        <div
          class="tab-item"
          :class="{ active: activeTab === 'Inbox' }"
          @click="activeTab = 'Inbox'"
        >
          Inbox
        </div>
      </div>
    </div>

    <!-- Main Content -->
    <div class="main-content">
      <div class="empty-state">
        <div class="sad-emoji">
          <div class="sad-mouth"></div>
        </div>
        <div class="no-messages-text">No messages</div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const activeTab = ref('Inbox')

const goBack = () => {
  router.back()
}
</script>

<style scoped>
.internal-message {
   max-width: 500px;
  margin: 0 auto;
  background-color: white;
  min-height: 100vh
}

.header {
  background: #180836;
  color: white;
  padding: 3px 20px;
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
  flex: 1;
  text-align: center;
  margin-right: 33px;
}

.tab-container {
  background: white;
  border-bottom: 1px solid #e5e7eb;
}

.tab-nav {
  display: flex;
  justify-content: center;
  padding: 0 20px;
}

.tab-item {
  font-size: 16px;
  font-weight: 500;
  color: #3b82f6;
  cursor: pointer;
  padding: 16px 20px;
  position: relative;
  transition: color 0.2s;
}

.tab-item.active {
  color: #3b82f6;
}

.tab-item.active::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 2px;
  background: #3b82f6;
}

.main-content {
  flex: 1;
  background: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px 20px;
  min-height: 500px;
}

.empty-state {
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.sad-emoji {
  width: 80px;
  height: 80px;
  border: 3px solid #d1d5db;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 40px;
  color: #d1d5db;
  margin-bottom: 20px;
  position: relative;
}

.sad-emoji::before {
  content: '';
  position: absolute;
  top: 20px;
  left: 20px;
  width: 8px;
  height: 8px;
  background: #d1d5db;
  border-radius: 50%;
}

.sad-emoji::after {
  content: '';
  position: absolute;
  top: 20px;
  right: 20px;
  width: 8px;
  height: 8px;
  background: #d1d5db;
  border-radius: 50%;
}

.sad-mouth {
  position: absolute;
  bottom: 18px;
  left: 50%;
  transform: translateX(-50%);
  width: 24px;
  height: 12px;
  border: 2px solid #d1d5db;
  border-top: none;
  border-radius: 0 0 24px 24px;
}

.no-messages-text {
  font-size: 16px;
  font-weight: 500;
  color: #9ca3af;
  margin-top: 10px;
}
</style>

<script setup>
import { useRouter } from 'vue-router'

const router = useRouter()

const goBack = () => {
  router.back()
}

const settings = [
  {
    title: 'Personal information',
    description: 'Complete personal information.',
    icon: '👤',
    iconClass: 'icon-personal',
    status: 'error',
    editable: true
  },
  {
    title: 'Change login password',
    description: 'Recommended letter and number combination',
    icon: '🔒',
    iconClass: 'icon-password',
    status: 'success',
    editable: true
  },
  {
    title: 'Transaction Password',
    description: 'Set a fund password to improve the security of fund operations',
    icon: '🏔️',
    iconClass: 'icon-transaction',
    status: 'error',
    editable: true
  },
  {
    title: 'Bank Account Number',
    description: 'Please use a real bank account number',
    icon: '💳',
    iconClass: 'icon-bank',
    status: 'error',
    editable: true
  },
  {
    title: 'Logout',
    description: 'Logout safely',
    icon: '⏰',
    iconClass: 'icon-logout',
    editable: false
  }
]

const onClickSetting = (item) => {
  // Add your navigation or logic here
  console.log('Clicked setting:', item.title)
}
</script>

<template>
  <div class="security-center">
    <div class="header">
      <span class="back-arrow" @click="goBack">‹</span>
      <div class="header-title">Security Center</div>
    </div>

    <div class="safety-card">
      <div class="safety-header">
        Safety percentage: <span class="safety-low">Low</span>
      </div>

      <div class="percentage-container">
        <div class="percentage-circle">
          <span class="percentage-text">33%</span>
        </div>
        <div class="lightning-icons">
          <span class="lightning active">⚡</span>
          <span class="lightning active">⚡</span>
          <span class="lightning inactive">⚡</span>
          <span class="lightning inactive">⚡</span>
          <span class="lightning inactive">⚡</span>
        </div>
      </div>

      <div class="login-info">
        <strong>Last login</strong><br />
        <strong>Ip:</strong> 2001:e68:6360:5400:b183:ea55:4<br />
        390:176c<br />
        <strong>Last login time:</strong> 2025-07-10 12:42:53
      </div>
    </div>

    <div class="warning-text">
      Your account security level is Low. Please improve your safety information
    </div>

    <div class="settings-list">
      <div class="setting-item" v-for="(item, index) in settings" :key="index" @click="onClickSetting(item)">
        <div :class="['setting-icon', item.iconClass]">{{ item.icon }}</div>
        <div class="setting-content">
          <div class="setting-title">
            {{ item.title }}
            <div v-if="item.status" :class="['status-indicator', item.status === 'success' ? 'status-success' : 'status-error']">
              {{ item.status === 'success' ? '✓' : '!' }}
            </div>
            <span class="edit-icon" v-if="item.editable">✏️</span>
          </div>
          <div class="setting-description">{{ item.description }}</div>
        </div>
        <span class="chevron">›</span>
      </div>
    </div>
  </div>
</template>

<style scoped>
.security-center {
  max-width: 500px;
  margin: 0 auto;
  background-color: white;
  min-height: 100vh;
}

.header {
  background: #180836;
  color: white;
  padding: 5px 20px;
  display: flex;
  align-items: center;
  position: relative;
}

.back-arrow {
  font-size: 35px;
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

.safety-card {
  background: white;
  margin: 20px 16px;
  padding: 20px;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  text-align: center;
}

.safety-header {
  font-size: 16px;
  font-weight: 600;
  color: #333;
  margin-bottom: 15px;
}

.safety-low {
  color: #ff6b6b;
}

.percentage-container {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 15px;
}

.percentage-circle {
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background: conic-gradient(#60a5fa 0deg 118deg, #e5e7eb 118deg 360deg);
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 15px;
  position: relative;
}

.percentage-circle::before {
  content: '';
  width: 45px;
  height: 45px;
  background: white;
  border-radius: 50%;
  position: absolute;
}

.percentage-text {
  font-size: 18px;
  font-weight: 700;
  color: #60a5fa;
  position: relative;
  z-index: 1;
}

.lightning-icons {
  display: flex;
  gap: 2px;
}

.lightning {
  font-size: 20px;
}

.lightning.active {
  color: #fbbf24;
}

.lightning.inactive {
  color: #d1d5db;
}

.login-info {
  text-align: left;
  font-size: 12px;
  color: #666;
  line-height: 1.4;
}

.login-info strong {
  color: #333;
}

.warning-text {
  color: #ff4444;
  font-size: 14px;
  font-weight: 600;
  margin: 16px;
  text-align: center;
}

.settings-list {
  background: white;
  margin: 0 16px;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  overflow: hidden;
}

.setting-item {
  display: flex;
  align-items: center;
  padding: 16px 20px;
  border-bottom: 1px solid #f0f0f0;
  cursor: pointer;
  transition: background-color 0.2s;
}

.setting-item:last-child {
  border-bottom: none;
}

.setting-item:hover {
  background-color: #f9f9f9;
}

.setting-icon {
  width: 40px;
  height: 40px;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 15px;
  font-size: 20px;
}

.icon-personal {
  background: #e0e7ff;
  color: #6366f1;
}

.icon-password {
  background: #dcfce7;
  color: #16a34a;
}

.icon-transaction {
  background: #fef3c7;
  color: #d97706;
}

.icon-bank {
  background: #dbeafe;
  color: #3b82f6;
}

.icon-logout {
  background: #fee2e2;
  color: #dc2626;
}

.setting-content {
  flex: 1;
}

.setting-title {
  font-size: 16px;
  font-weight: 600;
  color: #333;
  margin-bottom: 4px;
  display: flex;
  align-items: center;
  gap: 8px;
}

.setting-description {
  font-size: 12px;
  color: #666;
  line-height: 1.3;
}

.chevron {
  color: #ccc;
  font-size: 16px;
}

.status-indicator {
  width: 16px;
  height: 16px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 10px;
  color: white;
  font-weight: bold;
}

.status-error {
  background: #ef4444;
}

.status-success {
  background: #22c55e;
}

.edit-icon {
  color: #ccc;
  font-size: 14px;
  margin-left: 8px;
}
</style>

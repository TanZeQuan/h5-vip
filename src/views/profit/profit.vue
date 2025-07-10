<template>
  <div class="personal-report">
    <!-- Header -->
    <div class="header">
      <span class="back-arrow" @click="goBack">‹</span>
      <div class="header-title">Personal Report</div>
    </div>

    <!-- Filter Tabs -->
    <div class="filter-container">
      <div
        v-for="(tab, index) in tabs"
        :key="tab"
        class="filter-button"
        :class="{ active: activeTab === tab, outlined: activeTab !== tab }"
        @click="selectTab(tab)"
      >
        <span v-if="tab === 'Today'">✓</span>
        {{ tab }}
      </div>
      <div
        class="filter-button outlined"
        @click="showCalendar = true"
      >
        <span class="calendar-icon"></span>
        {{ selectedDate }}
      </div>
    </div>

    <!-- Simulated Calendar Popup -->
    <div v-if="showCalendar" class="calendar-popup-overlay" @click.self="showCalendar = false">
      <div class="calendar-popup">
        <div class="popup-header">Select Date</div>
        <div class="popup-body">📅 Date picker here</div>
        <div class="popup-footer">
          <button class="confirm-btn" @click="onConfirmDate">Confirm</button>
        </div>
      </div>
    </div>

    <!-- Empty State -->
    <div class="main-content">
      <div class="decorative-elements">
        <div class="star">✦</div>
        <div class="star">●</div>
        <div class="star">✦</div>
        <div class="star">●</div>
        <div class="star">●</div>
        <div class="star">●</div>
      </div>

      <div class="empty-state">
        <div class="empty-icon">
          <div class="folder-icon"></div>
          <div class="paper-plane"></div>
          <div class="dotted-line"></div>
        </div>
        <div class="no-data-text">No data</div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const tabs = ['Today', 'Yesterday', '7-days']
const activeTab = ref('Today')
const selectedDate = ref('07/10 - 07/10')
const showCalendar = ref(false)

const selectTab = (tab) => {
  activeTab.value = tab
}

const onConfirmDate = () => {
  selectedDate.value = '07/07 - 07/10' // simulate date selection
  showCalendar.value = false
}

const goBack = () => {
  router.back()
}
</script>

<style scoped>
.personal-report {
  max-width: 500px;
  margin: 0 auto;
  background-color: white;
  min-height: 100vh;
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
.filter-container {
  background: white;
  padding: 16px 20px;
  display: flex;
  gap: 12px;
  align-items: center;
  flex-wrap: wrap;
}
.filter-button {
  border: 1px solid #d1d5db;
  border-radius: 20px;
  padding: 8px 16px;
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 6px;
  transition: 0.2s;
}
.filter-button.outlined {
  background: white;
  border-color: #3b82f6;
  color: #3b82f6;
}
.filter-button.active {
  background: #3b82f6;
  color: white;
  border-color: #3b82f6;
}
.main-content {
  background: white;
  margin-top: 8px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px 20px;
  min-height: 500px;
  position: relative;
}
.decorative-elements {
  position: absolute;
  inset: 0;
  pointer-events: none;
}
.star {
  color: #60a5fa;
  font-size: 16px;
  opacity: 0.7;
  position: absolute;
}
.star:nth-child(1) {
  top: 20%;
  left: 15%;
  transform: rotate(45deg);
}
.star:nth-child(2) {
  top: 35%;
  right: 20%;
  font-size: 12px;
}
.star:nth-child(3) {
  bottom: 40%;
  left: 20%;
  transform: rotate(45deg);
}
.star:nth-child(4) {
  bottom: 25%;
  right: 15%;
  font-size: 14px;
}
.star:nth-child(5) {
  top: 15%;
  right: 30%;
  font-size: 10px;
}
.star:nth-child(6) {
  bottom: 35%;
  left: 30%;
  font-size: 8px;
}
.empty-icon {
  width: 120px;
  height: 100px;
  margin: 0 auto 20px;
  position: relative;
}
.folder-icon {
  width: 80px;
  height: 60px;
  border: 2px solid #60a5fa;
  border-radius: 8px;
  background: white;
  margin: 0 auto;
  position: relative;
}
.folder-icon::before {
  content: '';
  position: absolute;
  top: -8px;
  left: 15px;
  width: 20px;
  height: 8px;
  background: #60a5fa;
  border-radius: 4px 4px 0 0;
}
.folder-icon::after {
  content: '';
  position: absolute;
  top: 15px;
  left: 10px;
  right: 10px;
  height: 1px;
  background: #60a5fa;
}
.paper-plane {
  position: absolute;
  top: -10px;
  right: -10px;
  width: 40px;
  height: 40px;
  background: #60a5fa;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 18px;
  transform: rotate(45deg);
}
.paper-plane::before {
  content: '✈';
  transform: rotate(-45deg);
}
.dotted-line {
  position: absolute;
  top: 20px;
  right: 20px;
  width: 30px;
  height: 30px;
  border: 2px dashed #60a5fa;
  border-radius: 50%;
  opacity: 0.6;
}
.no-data-text {
  font-size: 18px;
  font-weight: 500;
  color: #60a5fa;
  margin-top: 20px;
}
.calendar-icon {
  width: 16px;
  height: 16px;
  background: #60a5fa;
  border-radius: 2px;
  position: relative;
}
.calendar-icon::before {
  content: '';
  position: absolute;
  top: -2px;
  left: 3px;
  right: 3px;
  height: 2px;
  background: #60a5fa;
  border-radius: 1px;
}
.calendar-icon::after {
  content: '';
  position: absolute;
  top: 4px;
  left: 2px;
  right: 2px;
  bottom: 2px;
  background: white;
  border-radius: 1px;
}

/* calendar popup */
.calendar-popup-overlay {
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.4);
  z-index: 999;
  display: flex;
  align-items: flex-end;
  justify-content: center;
}
.calendar-popup {
  background: white;
  width: 100%;
  max-width: 375px;
  border-top-left-radius: 16px;
  border-top-right-radius: 16px;
  padding: 20px;
  animation: slideUp 0.3s ease-out;
}
.popup-header {
  font-size: 16px;
  font-weight: 600;
  text-align: center;
  margin-bottom: 20px;
}
.popup-body {
  text-align: center;
  padding: 20px 0;
}
.popup-footer {
  text-align: center;
}
.confirm-btn {
  background-color: #3b82f6;
  color: white;
  border: none;
  padding: 10px 24px;
  border-radius: 8px;
  font-size: 14px;
  cursor: pointer;
}
@keyframes slideUp {
  from {
    transform: translateY(100%);
  }
  to {
    transform: translateY(0);
  }
}
</style>

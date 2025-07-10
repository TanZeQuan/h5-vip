<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()

const tabs = ['Today', 'Yesterday', '7-days']
const activeTab = ref('Today')
const showCalendarPicker = ref(false)

const toggleCalendar = () => {
  showCalendarPicker.value = !showCalendarPicker.value
}

const confirmDate = () => {
  showCalendarPicker.value = false
  // You can update the filter label or store the selected date here
}

const filters = [
  { label: 'All' },
  { label: 'Types' },
  { label: '07/10 - 07/10', icon: true }
]
const activeFilter = ref(0)

const goBack = () => {
  router.back()
}
</script>

<template>
  <div class="deposit-record">
    <!-- Header -->
    <div class="header">
      <span class="back-arrow" @click="goBack">‹</span>
      <div class="header-title">Deposit Record</div>
      <span class="header-icon">📋</span>
    </div>

    <!-- Tabs -->
    <div class="tab-container">
      <div class="tab-nav">
        <div
          class="tab-item"
          v-for="tab in tabs"
          :key="tab"
          :class="{ active: activeTab === tab }"
          @click="activeTab = tab"
        >
          {{ tab }}
        </div>
      </div>
    </div>

    <!-- Filter Buttons -->
    <div class="filter-container">
      <div
        v-for="(filter, index) in filters"
        :key="index"
        class="filter-button"
        :class="{ active: activeFilter === index }"
        @click="activeFilter = index"
      >
        <span v-if="filter.icon" class="calendar-icon"></span>
        {{ filter.label }}
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

<style scoped>
.deposit-record {
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
}

.header-icon {
  font-size: 18px;
  cursor: pointer;
}

.tab-container {
  background: white;
  padding: 0 20px;
  border-bottom: 1px solid #e5e7eb;
}

.tab-nav {
  display: flex;
  justify-content: center;
  gap: 40px;
  padding: 16px 0;
}

.tab-item {
  font-size: 16px;
  font-weight: 500;
  color: #6b7280;
  cursor: pointer;
  padding: 8px 0;
  position: relative;
  transition: color 0.2s;
}

.tab-item.active {
  color: #3b82f6;
}

.tab-item.active::after {
  content: '';
  position: absolute;
  bottom: -16px;
  left: 0;
  right: 0;
  height: 2px;
  background: #3b82f6;
}

.filter-container {
  background: white;
  padding: 16px 20px;
  display: flex;
  gap: 12px;
  align-items: center;
}

.filter-button {
  background: white;
  border: 1px solid #d1d5db;
  border-radius: 20px;
  padding: 8px 16px;
  font-size: 14px;
  color: #374151;
  cursor: pointer;
  transition: all 0.2s;
  display: flex;
  align-items: center;
  gap: 6px;
}

.filter-button:hover {
  background: #f9fafb;
  border-color: #9ca3af;
}

.filter-button.active {
  background: #eff6ff;
  border-color: #3b82f6;
  color: #3b82f6;
}

.main-content {
  flex: 1;
  background: white;
  margin-top: 8px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 60px 20px;
  min-height: 500px;
  position: relative;
}

.empty-state {
  text-align: center;
  position: relative;
  z-index: 2;
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
  position: relative;
  margin: 0 auto;
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

.decorative-elements {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  pointer-events: none;
}

.star {
  position: absolute;
  color: #60a5fa;
  font-size: 16px;
  opacity: 0.7;
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

.calendar-icon {
  width: 16px;
  height: 16px;
  background: #60a5fa;
  border-radius: 2px;
  position: relative;
  display: inline-block;
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
</style>

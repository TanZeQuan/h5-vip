<script setup>
import { ref } from 'vue'

const selectedType = ref('Invitation Rewards')
const selectedDateRange = ref('07/07 - 07/07')
const showTypePopup = ref(false)
const showCalendar = ref(false)

const rewardTypes = [
  'Invitation Rewards',
  'Achievement Rewards',
  'Deposit Rebate',
  'Betting Rebate'
]

function selectType(type) {
  selectedType.value = type
  showTypePopup.value = false
}

function onDateConfirm(dates) {
  const [start, end] = dates
  const formatDate = (date) => `${date.getMonth() + 1}/${date.getDate()}`
  selectedDateRange.value = `${formatDate(start)} - ${formatDate(end)}`
  showCalendar.value = false
}
</script>

<template>
  <div class="record-page">
    <!-- Content area -->
    <div class="content-wrap">
      <!-- Tabs & Filters -->
      <div class="filter-bar">
        <button class="filter-btn" @click="showTypePopup = true">
          {{ selectedType }}
          <span class="arrow-down"></span>
        </button>
        <button class="date-btn" @click="showCalendar = true">
          🗓️ {{ selectedDateRange }}
        </button>
      </div>

      <!-- Table Headers -->
      <div class="table-header">
        <span>Registration date</span>
        <span>Username</span>
        <span>Amount</span>
      </div>

      <!-- No Data -->
      <div class="no-data">
        <img src="@/assets/share/no-data.png" alt="No data" class="no-data-img" />
        <p class="no-data-text">No data</p>
      </div>
    </div>

    <!-- Popup Selector -->
    <transition name="popup">
      <div class="popup-wrapper" v-if="showTypePopup" @click.self="showTypePopup = false">
        <div class="popup-content">
          <div class="popup-header">
            <span>Types</span>
            <button class="close-btn" @click="showTypePopup = false">❌</button>
          </div>
          <ul class="type-list">
            <li
              v-for="(type, index) in rewardTypes"
              :key="index"
              @click="selectType(type)"
              :class="{ selected: type === selectedType }"
            >
              {{ type }}
              <span v-if="type === selectedType" class="check-mark">✓</span>
            </li>
          </ul>
        </div>
      </div>
    </transition>

    <!-- Date Range Calendar -->
    <van-calendar v-model:show="showCalendar" type="range" @confirm="onDateConfirm" />
  </div>
</template>

<style scoped>
.record-page {
  display: flex;
  flex-direction: column;
  background: #fff;
  font-family: Arial, sans-serif;
  box-sizing: border-box;
}

.content-wrap {
  flex: 1;
  padding: 10px;
  padding-bottom: 80px;
}

.filter-bar {
  display: flex;
  justify-content: space-between;
  margin-bottom: 12px;
}

.filter-btn,
.date-btn {
  border: 2px solid #1992e6;
  background: #fff;
  color: #1992e6;
  font-weight: bold;
  border-radius: 6px;
  padding: 8px 12px;
  display: flex;
  align-items: center;
  gap: 6px;
  font-size: 14px;
}

.arrow-down {
  width: 0;
  height: 0;
  border-left: 4px solid transparent;
  border-right: 4px solid transparent;
  border-top: 6px solid #1992e6;
}

.table-header {
  display: flex;
  justify-content: space-between;
  background: #f3f4f6;
  padding: 10px 12px;
  border-radius: 6px;
  font-weight: bold;
  font-size: 14px;
  color: #555;
}

.no-data {
  text-align: center;
  margin-top: 60px;
}

.no-data-img {
  width: 120px;
  margin-bottom: 12px;
}

.no-data-text {
  font-size: 16px;
  font-weight: bold;
  color: #1992e6;
}


/* Popup */
.popup-wrapper {
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: flex-end;
  z-index: 50;
}

.popup-content {
  width: 100%;
  background: #fff;
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
  padding: 16px;
}

.popup-header {
  display: flex;
  justify-content: space-between;
  font-size: 16px;
  font-weight: bold;
  margin-bottom: 12px;
}

.close-btn {
  background: none;
  border: none;
  font-size: 20px;
}

.type-list li {
  padding: 12px 0;
  border-bottom: 1px solid #eee;
  font-weight: bold;
  color: #444;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.type-list li.selected {
  color: #1992e6;
}

.check-mark {
  color: #1992e6;
  font-size: 18px;
}

/* Popup Animations */
.popup-enter-active,
.popup-leave-active {
  transition: transform 0.3s ease;
}

.popup-enter-from,
.popup-leave-to {
  transform: translateY(100%);
}
</style>

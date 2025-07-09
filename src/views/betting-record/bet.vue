<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const goBack = () => router.back()

const tabs = ['Slot', 'Fish', 'Live', 'Poker', 'Sports']
const activeTab = ref('Slot')

const dateRange = '07/09 00:00:00 - 07/09 23:59:59'
const hover = ref(false)

const stats = [
  { label: 'Bet amount', value: '0.00' },
  { label: 'Valid bet', value: '0.00' },
  { label: 'Winnings', value: '0.00' },
  { label: 'Profit and loss', value: '0.00' },
]
</script>

<template>
  <div class="container">
    <div class="header">
      <div class="header-left">
        <span class="back-arrow" @click="goBack">‹</span>
        <span class="header-title">Betting Record</span>
      </div>
      <button class="exclusion-btn" @mouseenter="hover = true" @mouseleave="hover = false">
        Exclusion <br/>turnover list
      </button>
    </div>

    <div class="tab-container">
      <div class="tabs">
        <div
          class="tab"
          v-for="t in tabs"
          :key="t"
          :class="{ active: activeTab === t }"
          @click="activeTab = t"
        >
          {{ t }}
        </div>
      </div>
      <div class="date-filter">
      <div class="date-picker">
        <span class="date-icon">📅</span>
        <span>{{ dateRange }}</span>
      </div>
      <div class="filter-dropdown">
        <span>All</span>
        <span class="dropdown-icon">▼</span>
      </div>
    </div>
    </div>


    <div class="main-content">
      <div class="no-data-illustration">
        <div class="decorative-dots">
          <div class="dot" v-for="n in 4" :key="n"></div>
          <div class="star" v-for="n in 3" :key="'s' + n">✦</div>
        </div>
        <div class="box"></div>
        <div class="paper-plane"></div>
      </div>
      <div class="no-data-text">No data</div>
    </div>

    <div class="bottom-stats">
      <div class="stat-item" v-for="stat in stats" :key="stat.label">
        <div class="stat-label">{{ stat.label }}</div>
        <div class="stat-value">{{ stat.value }}</div>
      </div>
    </div>
  </div>
</template>

<style scoped>
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

.container {
  max-width: 500px;
  margin: 0 auto;
  background-color: white;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

.header {
  background: #180836;
  color: white;
  padding: 10px 20px;
  display: flex;
  align-items: center;
  position: relative;
}

.header-left {
    display: flex;
    align-items: center;
    margin-left:20px;
}

.back-arrow {
    font-size: 40px;
    margin-right: 15px;
    margin-top:-10px;
    cursor: pointer;
}

.header-title {
    font-size: 18px;
    font-weight: 600;
    margin-left:30px;
}

.exclusion-btn {
    background-color: #3498db;
    color: white;
    border: none;
    padding: 5px 16px;
    border-radius: 20px;
    font-size: 12px;
    cursor: pointer;
    white-space: nowrap;
}

.tab-container {
    background-color: white;
    border-bottom: 1px solid #e0e0e0;
    overflow-x: auto;
}

.tabs {
    display: flex;
    min-width: 100%;
}

.tab {
    flex: 1;
    text-align: center;
    padding: 15px 10px;
    font-size: 16px;
    font-weight: 700;
    color: #0f0f0f;
    cursor: pointer;
    border-bottom: 2px solid transparent;
    white-space: nowrap;
}

.tab.active {
    color: #3498db;
    border-bottom-color: #3498db;
}

.date-filter {
    padding: 10px 20px;
    display: flex;
    gap: 10px;
    align-items: center;
}

.date-picker {
    flex: 1;
    display: flex;
    align-items: center;
    background-color: #f0f8ff;
    border: 1px solid #3498db;
    border-radius: 8px;
    padding: 5px 10px;
    color: #3498db;
    font-size: 14px;
}

.date-icon {
    margin-right: 8px;
    font-size: 16px;
}

.filter-dropdown {
    background-color: white;
    border: 1px solid #ddd;
    border-radius: 8px;
    padding: 10px 12px;
    color: #666;
    font-size: 14px;
    display: flex;
    align-items: center;
    gap: 5px;
    cursor: pointer;
}

.main-content {
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 60px 20px;
    min-height: 400px;
}

.no-data-illustration {
    position: relative;
    margin-bottom: 30px;
}

.box {
    width: 80px;
    height: 60px;
    border: 3px solid #3498db;
    border-radius: 8px;
    position: relative;
    background-color: white;
}

.box::before {
    content: '';
    position: absolute;
    top: -5px;
    left: 20px;
    right: 20px;
    height: 3px;
    background-color: #3498db;
    border-radius: 2px;
}

.box::after {
    content: '';
    position: absolute;
    bottom: 15px;
    left: 15px;
    right: 15px;
    height: 20px;
    border: 2px solid #3498db;
    border-radius: 0 0 8px 8px;
    background-color: white;
}

.paper-plane {
    position: absolute;
    top: -25px;
    right: -20px;
    width: 0;
    height: 0;
    border-left: 12px solid transparent;
    border-right: 12px solid transparent;
    border-bottom: 20px solid #3498db;
    transform: rotate(45deg);
}

.paper-plane::before {
    content: '';
    position: absolute;
    top: 5px;
    left: -6px;
    width: 0;
    height: 0;
    border-left: 6px solid transparent;
    border-right: 6px solid transparent;
    border-bottom: 10px solid white;
}

.decorative-dots {
    position: absolute;
    top: -30px;
    left: -30px;
    right: -30px;
    bottom: -30px;
}

.dot {
    position: absolute;
    width: 4px;
    height: 4px;
    background-color: #3498db;
    border-radius: 50%;
}

.dot:nth-child(1) { top: 10px; left: 20px; }
.dot:nth-child(2) { top: 30px; right: 30px; }
.dot:nth-child(3) { bottom: 20px; left: 10px; }
.dot:nth-child(4) { bottom: 40px; right: 20px; }

.star {
    position: absolute;
    color: #3498db;
    font-size: 12px;
}

.star:nth-child(5) { top: 0px; left: 50px; }
.star:nth-child(6) { top: 50px; left: 0px; }
.star:nth-child(7) { bottom: 10px; right: 40px; }

.no-data-text {
    font-size: 24px;
    color: #3498db;
    font-weight: 600;
}

.bottom-stats {
    background-color: #e8e8e8;
    padding: 5px 20px 5px;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 2px;
    margin-top: auto;
}

.stat-item {
    text-align: left;
    margin-left:10px;
}

.stat-label {
    font-size: 13px;
    color: #333;
    font-weight: 600;
    margin-bottom: 5px;
}

.stat-value {
    font-size: 12px;
    font-weight: 800;
    color: #4CAF50;
    margin-top:-8px;
}

.dropdown-icon {
    font-size: 12px;
    color: #999;
}
</style>
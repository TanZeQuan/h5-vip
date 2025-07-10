<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()

const showOverlay = ref(false)
const showTransactionModal = ref(false)
const showCalendarModal = ref(false)
const goBack = () => {
  router.push('/')
}

const selectedTransaction = ref('All')
const searchText = ref('')
const selectedDate = ref('9')
const dateRange = ref('07/09 - 07/09')

const transactionTypes = ['All', 'Deposit', 'Withdrawal', 'Betting', 'Winning', 'Bonus']
const days = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT']

const calendarCells = [
  { label: '29', other: true, date: '29' },
  { label: '30', other: true, date: '30' },
  { label: '1', other: false, date: '1' },
  { label: '2', other: false, date: '2' },
  { label: '3', other: false, date: '3' },
  { label: '4', other: false, date: '4' },
  { label: '5', other: false, date: '5' },
  { label: '6', other: false, date: '6' },
  { label: '7', other: false, date: '7' },
  { label: '8', other: false, date: '8' },
  { label: '9', other: false, date: '9' },
  // ...add remaining days as in original
]

function openTransactionModal() {
  showOverlay.value = true
  showTransactionModal.value = true
}

function openCalendarModal() {
  showOverlay.value = true
  showCalendarModal.value = true
}

function closeModals() {
  showOverlay.value = false
  showTransactionModal.value = false
  showCalendarModal.value = false
}

function selectTransactionType(type) {
  selectedTransaction.value = type
  closeModals()
}

function changeMonth(dir) {
  console.log('Change month:', dir)
}

function selectDate(date, isOther) {
  if (!isOther) {
    selectedDate.value = date
    dateRange.value = `07/${date.padStart(2, '0')} - 07/${date.padStart(2, '0')}`
  }
}

function clearDate() {
  selectedDate.value = ''
  dateRange.value = ''
}
</script>

<template>
  <div class="container">
    <!-- Header -->
    <div class="header">
      <button class="back-btn" @click="goBack">‹</button>
      <div class="header-title">Account Record</div>
      <div style="width: 28px;"></div>
    </div>

    <!-- Filter Bar -->
    <div class="filter-bar">
      <div class="filter-dropdown" @click="openTransactionModal">
        <span>{{ selectedTransaction }}</span>
        <span>▼</span>
      </div>
      <div class="date-filter" @click="openCalendarModal">
        <span>📅</span>
        <span>{{ dateRange }}</span>
      </div>
      <div class="search-container">
        <input v-model="searchText" type="text" class="search-input" placeholder="🔍 Subordinate name" />
      </div>
    </div>

    <!-- No Data State -->
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

    <!-- Modal Overlay -->
    <div class="modal-overlay" v-if="showOverlay" @click="closeModals"></div>

    <!-- Transaction Type Modal -->
    <div class="transaction-modal" :class="{ active: showTransactionModal }">
      <div class="modal-header">
        <div class="modal-title">Please select the transaction type</div>
        <button class="close-btn" @click="closeModals">×</button>
      </div>
      <div class="transaction-options">
        <div class="transaction-option" v-for="type in transactionTypes" :key="type" @click="selectTransactionType(type)">
          <div class="option-icon"></div>
          <div class="option-text">{{ type }}</div>
        </div>
      </div>
    </div>

    <!-- Calendar Modal -->
    <div class="calendar-modal" :class="{ active: showCalendarModal }">
      <div class="calendar-header">
        <div class="date-display">
          {{ dateRange }}
          <button class="clear-btn" @click="clearDate">Clear</button>
        </div>
        <div class="calendar-nav">
          <button class="nav-btn" @click="changeMonth(-1)">‹</button>
          <div class="month-year">JUL 2025</div>
          <button class="nav-btn" @click="changeMonth(1)">›</button>
        </div>
        <div class="calendar-grid">
          <div class="day-header" v-for="day in days" :key="day">{{ day }}</div>
          <div
            v-for="cell in calendarCells"
            :key="cell.date"
            class="day-cell"
            :class="{ 'other-month': cell.other, selected: cell.date === selectedDate }"
            @click="selectDate(cell.date, cell.other)"
          >
            {{ cell.label }}
          </div>
        </div>
      </div>
      <button class="ok-btn" @click="closeModals">OK</button>
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
}

/* Header */
.header {
  background: #180836;
  color: white;
  padding: 10px 20px;
  display: flex;
  align-items: center;
  position: relative;
}

.back-btn {
  background: none;
  border: none;
  color: white;
  width: 2.5rem;     /* Increased from 1.5rem */
  height: 2.5rem;
  font-size: 2.5rem; /* Optional: makes icon/text inside bigger */
  cursor: pointer;
  margin-top:-10px;
  padding: 0;
}


.header-title {
    font-size: 18px;
  font-weight: 600;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
}

/* Filter Bar */
.filter-bar {
    padding: 15px 20px;
    background: white;
    border-bottom: 1px solid #e0e0e0;
    display: flex;
    align-items: center;
    gap: 15px;
}

.filter-dropdown {
    display: flex;
    align-items: center;
    gap: 5px;
    padding: 8px 12px;
    border: 1px solid #ddd;
    border-radius: 6px;
    background: white;
    cursor: pointer;
    font-size: 14px;
}

.date-filter {
    display: flex;
    align-items: center;
    gap: 5px;
    padding: 8px 12px;
    border: 1px solid #ddd;
    border-radius: 6px;
    background: white;
    cursor: pointer;
    font-size: 14px;
}

.search-container {
    flex: 1;
    position: relative;
}

.search-input {
    width: 100%;
    padding: 8px 12px;
    border: 1px solid #ddd;
    border-radius: 6px;
    font-size: 14px;
    background: #f8f8f8;
}

.search-input::placeholder {
    color: #999;
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

/* Modal Overlay */
.modal-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0,0,0,0.5);
    display: none;
    z-index: 1000;
}

.modal-overlay.active {
    display: block;
}

/* Transaction Type Modal */
.transaction-modal {
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    background: white;
    border-radius: 20px 20px 0 0;
    transform: translateY(100%);
    transition: transform 0.3s ease;
    z-index: 1001;
}

.transaction-modal.active {
    transform: translateY(0);
}

.modal-header {
    padding: 20px;
    border-bottom: 1px solid #e0e0e0;
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.modal-title {
    font-size: 16px;
    font-weight: 600;
    color: #666;
}

.close-btn {
    background: none;
    border: none;
    font-size: 20px;
    color: #999;
    cursor: pointer;
}

.transaction-options {
    padding: 0;
}

.transaction-option {
    display: flex;
    align-items: center;
    gap: 12px;
    padding: 16px 20px;
    border-bottom: 1px solid #f0f0f0;
    cursor: pointer;
    transition: background-color 0.2s;
}

.transaction-option:hover {
    background-color: #f8f8f8;
}

.transaction-option:last-child {
    border-bottom: none;
}

.option-icon {
    width: 20px;
    height: 20px;
    background: #666;
    border-radius: 3px;
}

.option-text {
    font-size: 16px;
    color: #333;
}

/* Calendar Modal */
.calendar-modal {
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    background: white;
    border-radius: 20px 20px 0 0;
    transform: translateY(100%);
    transition: transform 0.3s ease;
    z-index: 1001;
}

.calendar-modal.active {
    transform: translateY(0);
}

.calendar-header {
    padding: 20px;
    text-align: center;
    border-bottom: 1px solid #e0e0e0;
}

.calendar-nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 20px;
}

.nav-btn {
    background: none;
    border: none;
    font-size: 20px;
    color: #666;
    cursor: pointer;
    padding: 5px;
}

.month-year {
    font-size: 18px;
    font-weight: 600;
    color: #333;
}

.calendar-grid {
    display: grid;
    grid-template-columns: repeat(7, 1fr);
    gap: 1px;
    margin-bottom: 20px;
}

.day-header {
    padding: 10px;
    text-align: center;
    font-size: 12px;
    color: #999;
    font-weight: 600;
}

.day-cell {
    padding: 12px;
    text-align: center;
    cursor: pointer;
    font-size: 14px;
    transition: background-color 0.2s;
}

.day-cell:hover {
    background-color: #f0f0f0;
}

.day-cell.other-month {
    color: #ccc;
}

.day-cell.selected {
    background-color: #2196F3;
    color: white;
    border-radius: 50%;
}

.ok-btn {
    width: 100%;
    padding: 16px;
    background: #2196F3;
    color: white;
    border: none;
    font-size: 16px;
    font-weight: 600;
    cursor: pointer;
    border-radius: 0 0 20px 20px;
}

.date-display {
    text-align: center;
    padding: 10px;
    font-size: 14px;
    color: #666;
}

.clear-btn {
    background: none;
    border: none;
    color: #2196F3;
    font-size: 14px;
    cursor: pointer;
}
</style>
<template>
  <div class="container">
    <!-- Header -->
    <div class="header">
      <button class="back-btn">‹</button>
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
    <div class="no-data-container">
      <!-- SVG omitted for brevity -->
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

<script setup>
import { ref } from 'vue'

const showOverlay = ref(false)
const showTransactionModal = ref(false)
const showCalendarModal = ref(false)

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
    max-width: 400px;
    margin: 0 auto;
    background: white;
    height: 100vh;
    position: relative;
}

/* Header */
.header {
    background: linear-gradient(135deg, #4a3c7a 0%, #2d1b69 100%);
    color: white;
    padding: 15px 20px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    box-shadow: 0 2px 10px rgba(0,0,0,0.1);
}

.back-btn {
    background: none;
    border: none;
    color: white;
    font-size: 18px;
    cursor: pointer;
    padding: 5px;
}

.header-title {
    font-size: 18px;
    font-weight: 600;
    flex: 1;
    text-align: center;
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

/* No Data State */
.no-data-container {
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 40px 20px;
    color: #666;
}

.no-data-icon {
    width: 120px;
    height: 120px;
    margin-bottom: 20px;
}

.no-data-text {
    font-size: 22px;
    font-weight: 600;
    color: #2196F3;
    margin-bottom: 10px;
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
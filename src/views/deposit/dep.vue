<script setup>
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()

onMounted(() => {
  const user = localStorage.getItem('user')
  if (!user) {
    router.push('/login')
  }
})

const selectedMethod = ref('promptpay')
const selectedAmount = ref(null)
const customAmount = ref('')

const amounts = ref([
  100, 200, 500, 1000, 5000,
  10000, 50000, 100000, 150000, 200000
])

const goBack = () => {
  router.push('/')
}

const selectMethod = (method) => {
  selectedMethod.value = method
}

const selectAmount = (amount) => {
  selectedAmount.value = amount
  customAmount.value = amount.toString()
  console.log('Selected amount:', amount)
}

const handleCustomAmount = () => {
  selectedAmount.value = null
  customAmount.value = customAmount.value.replace(/[^\d]/g, '')
}

const formatAmount = (amount) => {
  return amount.toLocaleString()
}

const proceed = () => {
  const amount = customAmount.value || selectedAmount.value
  console.log('Proceeding with:', {
    method: selectedMethod.value,
    amount
  })
}
</script>

<template>
  <div class="app-container">
    <!-- Header -->
    <div class="header">
      <button class="back-button" @click="goBack">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"/>
        </svg>
      </button>
      <h1 class="header-title">Deposit</h1>
      <div class="header-actions">
        <div class="notification-badge">
          <span class="badge-count">1</span>
        </div>
        <button class="menu-button">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
            <circle cx="12" cy="12" r="3"/>
            <circle cx="12" cy="5" r="3"/>
            <circle cx="12" cy="19" r="3"/>
          </svg>
        </button>
      </div>
    </div>

    <!-- Content -->
    <div class="content">
      <!-- Deposit Method -->
      <div class="section">
        <h2 class="section-title">
          <span class="bullet">•</span> Deposit method
        </h2>
        <div class="payment-methods">
          <div v-for="method in [
              { key: 'bank-qr', label: 'Bank QR Pay', icon: 'M3 5h18v2H3V5zm0 4h18v2H3V9zm0 4h18v2H3v-2zm0 4h18v2H3v-2z' },
              { key: 'online-banking', label: 'โอนเงิน /ธนาคาร โอเลต', icon: 'M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z' },
              { key: 'promptpay', label: 'PromptPay', text: 'promptpay' },
              { key: 'true-wallet', label: 'True Wallet', text: 'T' }
            ]" :key="method.key"
            class="payment-method"
            :class="{ active: selectedMethod === method.key }"
            @click="selectMethod(method.key)"
          >
            <div class="method-icon" :class="method.key + '-icon'">
              <svg v-if="method.icon" viewBox="0 0 24 24" fill="currentColor">
                <path :d="method.icon" />
              </svg>
              <span v-else>{{ method.text }}</span>
            </div>
            <span class="method-text">{{ method.label }}</span>
          </div>
        </div>
      </div>

      <!-- Payment Channel -->
      <div class="section">
        <h2 class="section-title">
          <span class="bullet">•</span> Payment channels
        </h2>
        <div class="payment-channel">
          <button class="channel-button">
            โอนเงิน /ธนาคาร<br>โอเลต 9
          </button>
        </div>
      </div>

      <!-- Deposit Amount -->
      <div class="section">
        <h2 class="section-title">
          <span class="bullet">•</span> Deposit Amounts
        </h2>
        <div class="amount-grid">
          <button 
            v-for="amount in amounts" 
            :key="amount"
            class="amount-button"
            :class="{ active: selectedAmount === amount }"
            @click="selectAmount(amount)"
          >
            {{ formatAmount(amount) }}
          </button>
        </div>

        <!-- Custom Amount Input -->
        <div class="custom-amount">
          <div class="amount-input-container">
            <span class="currency-symbol">฿</span>
            <input 
              type="text" 
              v-model="customAmount"
              placeholder="100 - 200,000"
              class="amount-input"
              @input="handleCustomAmount"
            >
          </div>
        </div>

        <!-- Amount Limits -->
        <div class="amount-limits">
          <span class="limit-text">*Minimum Amount : ฿ 100</span>
          <span class="limit-text">Maximum Amount : ฿ 200,000</span>
        </div>
      </div>
    </div>

    <!-- Next Button -->
    <div class="footer">
      <button class="next-button" @click="proceed">Next</button>
    </div>
  </div>
</template>


<style scoped>
/* App Container */
.app-container {
  min-height: 100vh;
  background: #f5f5f5;
  display: flex;
  flex-direction: column;
}

/* Header */
.header {
  background: #180836;
  color: white;
  padding: 3px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.back-button {
  background: none;
  border: none;
  color: white;
  margin-left:10px;
  width: 1.5rem;
  height: 1.5rem;
  cursor: pointer;
  padding: 0;
}

.back-button svg {
  width: 100%;
  height: 100%;
}

.header-title {
  font-size: 1.125rem;
  font-weight: 600;
  margin: 0;
}

.header-actions {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.notification-badge {
  position: relative;
  background: #ef4444;
  border-radius: 50%;
  width: 1.5rem;
  height: 1.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
}

.badge-count {
  font-size: 0.75rem;
  font-weight: bold;
}

.menu-button {
  background: none;
  border: none;
  color: white;
  width: 1.5rem;
  height: 1.5rem;
  cursor: pointer;
  padding: 0;
}

/* Content */
.content {
  flex: 1;
  padding: 1rem;
  margin-top:20px;
}

.section {
  margin-bottom: 1.5rem;
}

.section-title {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 1rem;
  font-weight: 600;
  color: #333;
  margin-bottom: 1rem;
  margin-top:3rem;
}

.bullet {
  color: #f59e0b;
  font-size: 1.5rem;
}

/* Payment Methods */
.payment-methods {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 0.75rem;
}

.payment-method {
  background: white;
  border: 2px solid #e5e7eb;
  border-radius: 0.5rem;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
  cursor: pointer;
  transition: all 0.2s;
}

.payment-method.active {
  border-color: #ef4444;
  background: #fef2f2;
}

.method-icon {
  width: 2rem;
  height: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #1f2937;
  color: white;
  border-radius: 0.25rem;
  font-size: 0.75rem;
}

.promptpay-icon {
  background: #0066cc;
  color: white;
  font-weight: bold;
  font-size: 0.6rem;
}

.true-wallet-icon {
  background: #ff6b35;
  color: white;
  font-weight: bold;
  font-size: 1rem;
}

.method-text {
  font-size: 0.75rem;
  text-align: center;
  color: #333;
}

/* Payment Channel */
.payment-channel {
  display: flex;
  gap: 0.5rem;
}

.channel-button {
  background: white;
  border: 2px solid #ef4444;
  border-radius: 0.5rem;
  padding: 0.75rem 1rem;
  color: #ef4444;
  font-size: 0.875rem;
  cursor: pointer;
  transition: all 0.2s;
}

.channel-button:hover {
  background: #fef2f2;
}

/* Amount Grid */
.amount-grid {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 0.5rem;
  margin-bottom: 1rem;
}

.amount-button {
  background: white;
  border: 1px solid #d1d5db;
  border-radius: 0.25rem;
  padding: 0.75rem 0.5rem;
  font-size: 0.875rem;
  cursor: pointer;
  transition: all 0.2s;
}

.amount-button:hover {
  border-color: #6b7280;
}

.amount-button.active {
  background: #3b82f6;
  color: white;
  border-color: #3b82f6;
}

/* Custom Amount */
.custom-amount {
  margin-bottom: 1rem;
}

.amount-input-container {
  position: relative;
  display: flex;
  align-items: center;
}

.currency-symbol {
  position: absolute;
  left: 1rem;
  color: #6b7280;
  font-weight: 600;
  z-index: 1;
}

.amount-input {
  width: 100%;
  padding: 0.75rem 1rem 0.75rem 2rem;
  border: 1px solid #d1d5db;
  border-radius: 0.5rem;
  font-size: 1rem;
  outline: none;
}

.amount-input:focus {
  border-color: #3b82f6;
  box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);
}

.amount-input::placeholder {
  color: #9ca3af;
}

/* Amount Limits */
.amount-limits {
  display: flex;
  justify-content: space-between;
  gap: 1rem;
}

.limit-text {
  font-size: 0.75rem;
  color: #ef4444;
}

/* Footer */
.footer {
  padding: 1rem;
  background: white;
  border-top: 1px solid #e5e7eb;
}

.next-button {
  width: 100%;
  background: #9ca3af;
  color: white;
  border: none;
  border-radius: 0.5rem;
  padding: 1rem;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: background 0.2s;
}

.next-button:hover {
  background: #db3333;
}

/* Responsive */
@media (max-width: 640px) {
  .payment-methods {
    grid-template-columns: repeat(2, 1fr);
  }
  
  .amount-grid {
    grid-template-columns: repeat(3, 1fr);
  }
  
  .amount-limits {
    flex-direction: column;
    gap: 0.25rem;
  }
}

@media (max-width: 480px) {
  .amount-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}
</style>
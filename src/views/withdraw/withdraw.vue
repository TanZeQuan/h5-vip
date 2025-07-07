<script setup>
import { ref, computed } from 'vue';
import { useRouter } from 'vue-router'

const router = useRouter()
const goBack = () => {
  router.push('/') // Navigate to home page
}

const bankAccounts = ref([]);
const withdrawalTime = ref('24 hours');
const dailyLimit = ref(90);
const remainingLimit = ref(90);
const mainWallet = ref(0.0);
const availableAmount = ref(0.0);
const withdrawalAmount = ref('');
const transactionPassword = ref('');
const showPassword = ref(false);

const isFormValid = computed(() => {
  return (
    withdrawalAmount.value &&
    transactionPassword.value &&
    withdrawalAmount.value >= 100 &&
    withdrawalAmount.value <= 49999
  );
});

function openHistory() {
  alert('Opening transaction history...');
}

function addBankAccount() {
  alert('Add bank account functionality would be implemented here');
}

function recallBalance() {
  alert('Recalling balance...');
  setTimeout(() => {
    mainWallet.value = Math.random() * 1000;
    availableAmount.value = mainWallet.value * 0.9;
  }, 1000);
}

function togglePassword() {
  showPassword.value = !showPassword.value;
}

function submitWithdrawal() {
  if (isFormValid.value) {
    alert(`Withdrawal request submitted for $${withdrawalAmount.value}`);
    withdrawalAmount.value = '';
    transactionPassword.value = '';
  }
}
</script>

<template>
  <div class="header">
    <button class="back-btn" @click="goBack">‹</button>
    <div class="header-title">Withdrawal</div>
    <button class="history-btn" @click="openHistory">📋</button>
  </div>

  <div class="tab-section">
    <div class="tab">
      <div class="tab-icon">🏦</div>
      Bank Accounts
    </div>
  </div>

  <div class="content">
    <div class="bank-accounts-section">
      <div class="bank-accounts-title">My bank accounts ({{ bankAccounts.length }}/3)</div>
      <div class="empty-account">
        <div class="card-placeholder"></div>
        <div class="empty-text">Empty bank account</div>
        <button class="add-btn" @click="addBankAccount">+</button>
      </div>
    </div>

    <div class="withdrawal-info">
      <div class="withdrawal-time">Withdrawal time: {{ withdrawalTime }}</div>
      <div class="withdrawal-limits">
        Daily withdrawal {{ dailyLimit }} (Times), Remaining withdrawal {{ remainingLimit }} (Times)
      </div>
    </div>

    <div class="balance-info">
      <div class="balance-item">
        <span>Main Wallet :</span>
        <span>$ {{ mainWallet.toFixed(2) }}</span>
      </div>
      <div class="balance-item">
        <span>Available Amount :</span>
        <span>$ {{ availableAmount.toFixed(2) }}</span>
      </div>
    </div>

    <button class="recall-btn" @click="recallBalance">🔄 Recall Balance</button>

    <div class="withdrawal-form">
      <div class="form-title">Withdrawal Amount:</div>

      <div class="form-group">
        <label class="form-label">Amount</label>
        <input
          type="number"
          class="form-input"
          placeholder="100 ~ 49,999"
          min="100"
          max="49999"
          v-model="withdrawalAmount"
        />
      </div>

      <div class="form-group">
        <label class="form-label">Transaction Password</label>
        <div class="password-input">
          <input
            :type="showPassword ? 'text' : 'password'"
            class="form-input"
            placeholder="Transaction Password"
            v-model="transactionPassword"
          />
          <button class="password-toggle" @click="togglePassword">
            {{ showPassword ? '🙈' : '👁️' }}
          </button>
        </div>
      </div>

      <button
        class="submit-btn"
        :disabled="!isFormValid"
        @click="submitWithdrawal"
      >
        Submit
      </button>
    </div>
  </div>
</template>

<style scoped>
.header {
    background: #180836;
    color: white;
    padding: 3px 20px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: relative;
}

.back-btn {
    background: none;
    border: none;
    color: white;
    font-size: 40px;
    cursor: pointer;
}

.header-title {
    font-size: 18px;
    font-weight: 600;
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
}

.history-btn {
    background: none;
    border: none;
    color: white;
    font-size: 18px;
    cursor: pointer;
}

.tab-section {
    background: white;
    border-bottom: 1px solid #e0e0e0;
}

.tab {
    display: flex;
    align-items: center;
    padding: 15px 20px;
    color: #e74c3c;
    font-weight: 600;
    border-bottom: 2px solid #e74c3c;
}

.tab-icon {
    width: 20px;
    height: 20px;
    background: #e74c3c;
    border-radius: 50%;
    margin-right: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 12px;
    color: white;
}

.content {
    background: white;
    padding: 20px;
    min-height: calc(100vh - 120px);
}

.bank-accounts-section {
    margin-bottom: 30px;
}

.bank-accounts-title {
    color: #666;
    font-size: 16px;
    margin-bottom: 20px;
}

.empty-account {
    background: #f8f8f8;
    border-radius: 12px;
    padding: 40px 20px;
    text-align: center;
    margin-bottom: 20px;
    position: relative;
}

.card-placeholder {
    width: 80px;
    height: 50px;
    background: #ddd;
    border-radius: 8px;
    margin: 0 auto 15px;
    position: relative;
}

.card-placeholder::after {
    content: '';
    position: absolute;
    right: 8px;
    top: 8px;
    width: 20px;
    height: 15px;
    background: #bbb;
    border-radius: 3px;
}

.empty-text {
    color: #aaa;
    font-size: 14px;
}

.add-btn {
    position: absolute;
    bottom: -15px;
    right: 20px;
    width: 40px;
    height: 40px;
    background: #e74c3c;
    border: none;
    border-radius: 50%;
    color: white;
    font-size: 24px;
    cursor: pointer;
    box-shadow: 0 2px 10px rgba(231, 76, 60, 0.3);
}

.withdrawal-info {
    margin-bottom: 20px;
}

.withdrawal-time {
    color: #999;
    font-size: 12px;
    margin-bottom: 10px;
}

.withdrawal-limits {
    color: #999;
    font-size: 12px;
    margin-bottom: 15px;
}

.balance-info {
    margin-bottom: 20px;
}

.balance-item {
    display: flex;
    justify-content: space-between;
    margin-bottom: 5px;
    font-size: 14px;
}

.balance-item:first-child {
    font-weight: 600;
}

.recall-btn {
    background: #e3f2fd;
    border: 1px solid #2196f3;
    color: #2196f3;
    padding: 8px 16px;
    border-radius: 20px;
    font-size: 12px;
    cursor: pointer;
    margin: 15px 0;
}

.withdrawal-form {
    margin-top: 20px;
}

.form-title {
    font-size: 16px;
    font-weight: 600;
    margin-bottom: 20px;
}

.form-group {
    margin-bottom: 15px;
}

.form-label {
    display: block;
    margin-bottom: 5px;
    font-weight: 600;
    color: #333;
}

.form-input {
    width:90%;
    padding: 15px;
    border: 1px solid #ddd;
    border-radius: 8px;
    font-size: 16px;
    background: white;
}

.form-input::placeholder {
    color: #ccc;
}

.password-input {
    position: relative;
}

.password-toggle {
    position: absolute;
    right: 15px;
    top: 50%;
    transform: translateY(-50%);
    background: none;
    border: none;
    color: #999;
    cursor: pointer;
}

.submit-btn {
    width: 100%;
    padding: 15px;
    border: none;
    border-radius: 8px;
    font-size: 16px;
    font-weight: 600;
    margin-top: 20px;
    transition: all 0.3s ease;
}

.submit-btn:disabled {
    background: #ddd;
    color: #999;
    cursor: not-allowed;
}

.submit-btn:not(:disabled) {
    background: #4CAF50;
    color: white;
    cursor: pointer;
}

.submit-btn:not(:disabled):hover {
    background: #45a049;
}
</style>

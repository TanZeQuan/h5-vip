<script setup>
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const cardCount = ref(0)

const goBack = () => {
  router.back()
}
const addCard = () => {
  console.log('Adding new card...')
  // You can navigate to a new route or open modal here
}


onMounted(() => {
  const emptyState = document.querySelector('.empty-state')
  if (emptyState) {
    emptyState.style.opacity = '0'
    emptyState.style.transform = 'translateY(20px)'
    setTimeout(() => {
      emptyState.style.transition = 'all 0.5s ease'
      emptyState.style.opacity = '1'
      emptyState.style.transform = 'translateY(0)'
    }, 200)
  }
})
</script>

<template>
  <div class="container">
    <div class="header">
      <div class="back-arrow" @click="goBack">‹</div>
      <div class="header-title">My Cards</div>
    </div>

    <div class="content">
      <div class="bank-count">Bank account added : {{ cardCount }}</div>

      <div class="empty-state" v-if="cardCount === 0">
        <div class="empty-icon">🏦</div>
        <div class="empty-text">Empty bank account</div>
      </div>
    </div>

    <button class="add-button" @click="addCard">
      <div class="add-icon">+</div>
    </button>
  </div>
</template>

<style scoped>
.container {
  max-width: 500px;
  margin: 0 auto;
  height: 100vh;
  background: white;
  position: relative;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
}

.header {
   background: #180836;
  color: white;
  padding: 5px;
  text-align: center;
  position: relative;
}

.back-arrow {
  background: none;
  border: none;
  color: white;
  font-size: 40px;
  cursor: pointer;
  margin-left: 10px;
  margin-right: 15px;
  margin-top: -10px;
  transition: opacity 0.2s;
}

.back-arrow:hover {
  background-color: rgba(255, 255, 255, 0.1);
}

.header-title {
  font-size: 20px;
  font-weight: 600;
  flex: 1;
  text-align: center;
  margin-right: 50px;
}

.content {
  padding: 20px;
  background: #f8f9fa;
  min-height: calc(100vh - 80px);
}

.bank-count {
  color: #666;
  font-size: 14px;
  margin-bottom: 20px;
}

.bank-count::before {
  content: "\2022";
  color: #007bff;
  margin-right: 8px;
}

.empty-state {
  background: white;
  border-radius: 12px;
  padding: 30px 20px;
  text-align: center;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
  margin-bottom: 20px;
}

.empty-icon {
  width: 60px;
  height: 60px;
  background: #e9ecef;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 15px;
  font-size: 24px;
  color: #6c757d;
}

.empty-text {
  color: #495057;
  font-size: 16px;
  font-weight: 500;
}

.add-button {
  position: fixed;
  bottom: 30px;
  left: 50%;
  transform: translateX(-50%);
  width: 56px;
  height: 56px;
  background: linear-gradient(135deg, #ff4757, #ff3838);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  box-shadow: 0 4px 12px rgba(255, 71, 87, 0.4);
  transition: scale 0.2s ease;
  border: none;
  z-index: 1000;
}

.add-button:hover {
  transform: translateX(-50%) scale(1.1);
}
.add-button:active {
  transform: translateX(-50%) scale(0.95);
}


.add-icon {
  color: white;
  font-size: 24px;
  font-weight: 300;
}

@media (max-width: 400px) {
  .container {
    max-width: 100%;
  }

  .add-button {
    bottom: 20px;
  }
}
</style>

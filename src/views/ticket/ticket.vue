<template>
  <div class="container">
    <!-- Header -->
    <div class="header">
      <div class="back-arrow" @click="goBack">‹</div>
      <div class="header-title">TEMU Ticket History</div>
    </div>

    <!-- Main Content -->
    <div class="main-content">
      <!-- Treasure Chest Section -->
      <div class="treasure-section">
        <div class="sparkle" v-for="n in 8" :key="n"></div>
        <div class="treasure-wrapper">
          <img src="@/assets/rewards/ticket-i.gif" alt="Treasure Chest" class="chest-gif" />
          <div class="amount-banner">
            <div class="amount-content">
              <div class="amount-label">Total Claimed Amount</div>
              <div class="amount-value">₿ {{ claimedAmount.toFixed(2) }}</div>
            </div>
          </div>
        </div>
      </div>

      <!-- No Data Section -->
      <div class="content-area">
        <div class="no-data-container">
          <div class="floating-dots" v-for="n in 6" :key="n" :class="'dot' + n"></div>
          <div class="no-data-icon">
            <div class="box-icon"></div>
            <div class="paper-plane"></div>
            <div class="plane-trail"></div>
          </div>
          <div class="no-data-text">No data</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const claimedAmount = ref(0.0)

const goBack = () => {
  router.back()
}

const createSparkle = () => {
  const sparkle = document.createElement('div')
  sparkle.className = 'sparkle'
  sparkle.style.left = Math.random() * 100 + '%'
  sparkle.style.top = Math.random() * 80 + 10 + '%'
  sparkle.style.animationDelay = Math.random() * 2 + 's'

  document.querySelector('.treasure-section')?.appendChild(sparkle)
  setTimeout(() => sparkle.remove(), 3000)
}

onMounted(() => {
  setInterval(createSparkle, 1500)
})
</script>

<style scoped>
.container {
  max-width: 500px;
  margin: 0 auto;
  height: 100vh;
  display: flex;
  flex-direction: column;
  background: #fdf9f3;
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
  flex: 1;
  text-align: center;
  font-size: 18px;
  font-weight: bold;
  margin-right: 50px;
}

.main-content {
  flex: 1;
  overflow-y: auto;
  background-image: url('@/assets/rewards/ticket-banner.png');
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center top;
  position: relative;
}

.treasure-section {
  position: sticky;
  top: 0;
  background: url('@/assets/rewards/ticket-banner.png') no-repeat center top;
  background-size: cover;
  padding: 20px 20px 60px;
  text-align: center;
  z-index: 5;
}

.treasure-wrapper {
  position: relative;
  z-index: 2;
}

.chest-gif {
  width: 220px;
  display: block;
  margin: 0 auto 12px;
  animation: float 3s ease-in-out infinite;
  filter: drop-shadow(0 6px 10px rgba(0,0,0,0.2));
}

.amount-banner {
  position: relative;
}

.amount-content {
  background: linear-gradient(135deg, #ffc107, #ff9800);
  border-radius: 12px;
  padding: 12px 20px;
  display: inline-block;
  box-shadow: 0 4px 12px rgba(0,0,0,0.15);
  color: #fff;
  font-weight: bold;
  animation: pulse 2s infinite;
}

.amount-label {
  font-size: 14px;
  margin-bottom: 5px;
}

.amount-value {
  font-size: 26px;
  font-weight: 800;
  text-shadow: 0 2px 4px rgba(0,0,0,0.3);
}

.content-area {
  background: #fff;
  margin: 0 20px 20px;
  border-radius: 20px;
  padding: 60px 30px;
  position: relative;
  min-height: 200px;
  box-shadow: 0 -4px 20px rgba(0,0,0,0.05);
}

.no-data-container {
  text-align: center;
  position: relative;
  padding: 20px;
}

.no-data-icon {
  width: 80px;
  height: 80px;
  margin: 0 auto 30px;
  position: relative;
}

.box-icon {
  width: 60px;
  height: 40px;
  background: linear-gradient(145deg, #4A90E2, #357ABD);
  border-radius: 8px;
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  border: 2px solid #2E5C8A;
  box-shadow: 0 2px 8px rgba(0,0,0,0.2);
}

.box-icon::before {
  content: '';
  position: absolute;
  top: -10px;
  left: 50%;
  transform: translateX(-50%);
  width: 70px;
  height: 10px;
  background: linear-gradient(145deg, #4A90E2, #357ABD);
  border-radius: 5px;
  border: 2px solid #2E5C8A;
}

.paper-plane {
  position: absolute;
  top: 5px;
  right: 0;
  width: 0;
  height: 0;
  border-left: 15px solid #4A90E2;
  border-top: 8px solid transparent;
  border-bottom: 8px solid transparent;
  animation: planeFloat 3s ease-in-out infinite;
  z-index: 2;
}

.paper-plane::before {
  content: '';
  position: absolute;
  top: -4px;
  left: -10px;
  width: 3px;
  height: 8px;
  background: #357ABD;
  transform: rotate(45deg);
}

.plane-trail {
  position: absolute;
  top: 13px;
  right: 18px;
  width: 40px;
  height: 2px;
  background: linear-gradient(90deg, transparent, #4A90E2, transparent);
  animation: trailMove 3s ease-in-out infinite;
  border-radius: 1px;
}

.no-data-text {
  color: #8B7355;
  font-size: 18px;
  font-weight: 600;
  margin-top: 10px;
}

.floating-dots {
  position: absolute;
  width: 6px;
  height: 6px;
  background: #4A90E2;
  border-radius: 50%;
  animation: dotFloat 4s ease-in-out infinite;
}

.dot1 { top: 20px; left: 30px; animation-delay: 0s; }
.dot2 { top: 40px; right: 40px; animation-delay: 1s; }
.dot3 { top: 80px; left: 50px; animation-delay: 2s; }
.dot4 { top: 30px; right: 60px; animation-delay: 3s; }
.dot5 { top: 60px; left: 20px; animation-delay: 0.5s; }
.dot6 { top: 90px; right: 30px; animation-delay: 1.5s; }

.sparkle {
  position: absolute;
  width: 4px;
  height: 4px;
  background: white;
  border-radius: 50%;
  animation: sparkle 2s ease-in-out infinite;
  z-index: 1;
}

.sparkle::before {
  content: '';
  position: absolute;
  top: -2px;
  left: -2px;
  width: 8px;
  height: 8px;
  border: 1px solid white;
  border-radius: 50%;
  opacity: 0.5;
}

@keyframes float {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-12px); }
}

@keyframes sparkle {
  0%, 100% { opacity: 0; transform: scale(0) rotate(0deg); }
  50% { opacity: 1; transform: scale(1) rotate(180deg); }
}

@keyframes planeFloat {
  0%, 100% { transform: translateY(0) rotate(0deg); }
  50% { transform: translateY(-10px) rotate(-8deg); }
}

@keyframes trailMove {
  0%, 100% { opacity: 0; transform: translateX(0); }
  50% { opacity: 1; transform: translateX(-15px); }
}

@keyframes dotFloat {
  0%, 100% { opacity: 0.4; transform: translateY(0) scale(1); }
  50% { opacity: 1; transform: translateY(-20px) scale(1.2); }
}

@keyframes pulse {
  0%, 100% { transform: scale(1); }
  50% { transform: scale(1.05); }
}

@media (max-width: 400px) {
  .container {
    max-width: 100%;
  }
  .chest-gif {
    width: 160px;
  }
  .amount-value {
    font-size: 22px;
  }
  .content-area {
    margin: 0 15px;
    padding: 30px 30px;
  }
}
</style>

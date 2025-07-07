<template>
  <div class="page-container">
    <div class="card-wrapper">

      <!-- Today's Income Card -->
      <div class="income-card">
        <h2 class="income-title">Today's Income: ฿ 0.00</h2>
        <img
          :src="bannerImage"
          alt="Mascot"
          class="mascot-image"
          @error="handleImageError"
        />
      </div>

      <!-- Total Income Card -->
      <div class="income-card">
        <h2 class="income-title">Total Income: ฿ 0.00</h2>
        <img
          :src="bannerImage"
          alt="Mascot"
          class="mascot-image"
          @error="handleImageError"
        />
      </div>

      <div class="note">Note: The system updates the data every 15 minutes.</div>
    </div>
  </div>
</template>

<script setup>
import bannerImage from '@/assets/share/share-reward-banner.png'

const handleImageError = (event) => {
  event.target.style.display = 'none'
  console.warn('Mascot image failed to load.')
}
</script>

<style scoped>
.page-container {
  padding: auto;
}

.card-wrapper {
  max-width: 500px;
  margin: 0 auto;
}

.income-card {
  background-color: #f6f6f6;
  border-radius: 10px;
  padding: 15px;
  text-align: center;
  padding-bottom: 2rem;
  margin-top: 20px;
}

.income-title {
  color: #4b5563;
  font-size: 16px;
  font-weight: 800;
  margin-bottom: 12px;
  letter-spacing: -1.2px;
}

.mascot-image {
  width: 100%;
  height: auto;
  object-fit: contain;
  margin-top: 12px;
}

.note {
  text-align: left;
  color: #6b7280;
  font-size: 16px;
  margin-top: 20px;
  font-weight: 600;
}
</style>

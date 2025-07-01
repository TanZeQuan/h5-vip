<script setup>
// No script logic required
</script>

<template>
  <footer class="footer-section">
    <div class="footer-container">
      <!-- License and Responsible Gaming -->
      <div class="footer-top">
        <div class="license-info">
            <div class="license-header">
                <p class="license-title"><strong>Gaming license</strong></p>
                <img src="@/assets/footer/footer-i-title.png" alt="Gaming License Icon" class="title-icon" />
            </div>
            <img src="@/assets/footer/footer-1.png" alt="Gaming License Badge" class="license-image" />
            <p class="license-description">
                Regulated & Licensed by PAGCOR<br />
                and operates under the Master License of Gaming Services<br />
                Provider. N.V. #365/JAZ
            </p>
            </div>
        <div class="responsible-gaming">
          <img src="@/assets/footer/footer2.png" alt="Responsible Gaming" class="icon" />
          <div>
            <p><strong>Responsible Gaming</strong></p>
            <p>Be Gamble Aware</p>
          </div>
        </div>
      </div>

      <!-- Game Provider Logos -->
      <div class="provider-logos">
        <img
          src="@/assets/footer/footer-i-bg.png"
          alt="Game Provider Logo"
          class="provider-icon"
        />
      </div>

      <!-- Payment Method Logos -->
      <div class="payment-methods">
        <p><strong>Payment Method</strong></p>
        <div class="payments">
          <img src="@/assets/footer/footer-payment.png" alt="Bank Transfer" />
        </div>
      </div>

      <!-- Certification and Security -->
      <div class="cert-security">
        <div class="certifications">
          <p><strong>Certification</strong></p>
          <img src="@/assets/footer/footer-cert1.png" alt="BMM" />
          <img src="@/assets/footer/footer-cert2.png" alt="iTech" />
          <img src="@/assets/footer/footer-cert3.png" alt="7Stars" />
        </div>
        <div class="security">
          <p><strong>Security</strong></p>
          <img src="@/assets/footer/footer-sec-1.png" alt="GamCare" />
          <img src="@/assets/footer/footer-sec-2.png" alt="Intel" />
        </div>
        <div class="follow-us">
          <p><strong>Follow us</strong></p>
          <!-- <img src="@/assets/subpage/slot-i.svg" alt="Social" /> -->
        </div>
      </div>

      <!-- Copyright -->
      <div class="copyright">
        <p>Copyright © 2023 THVIP All rights reserved.</p>
      </div>
    </div>
  </footer>
</template>

<style scoped>
.footer-section {
  color: #fff;
  font-size: 13px;
  padding: 10px;
  max-width: 500px;
  margin: 0 auto;
}

.footer-container {
  max-width: 1200px;
  margin: 0 auto;
}

.footer-top {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  margin-bottom: 30px;
}

.license-info,
.responsible-gaming {
  display: flex;
  gap: 10px;
  max-width: 48%;
}

.icon {
  width: 25px;
  height: 40px;
}
.license-info .icon{
  width:100px;
  height:50px;
  margin-bottom:-10px;
}
.provider-logos {
  display: flex;
  flex-wrap: wrap;
  gap: 15px;
  margin: 30px 0;
  justify-content: center;
}

.provider-icon {
  width: 100%;
  height: 100%;
}

.payment-methods {
  text-align: left;
  margin-bottom: 30px;
}

.payments img {
  height: 30px;
  margin: 0 10px;
}

.cert-security {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  margin-bottom: 30px;
  text-align: left;
}

.certifications,
.security,
.follow-us {
  flex: 1;
}

.certifications img,
.security img,
.follow-us img {
  height: 30px;
  margin: 0 10px;
}

.copyright {
  text-align: center;
  font-size: 13px;
  color: #ccc;
}

.license-info {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.license-header {
  display: flex;
  align-items: center;
  gap: 8px;
}

.license-title {
  margin: 0;
  font-size: 16px;
  color: #f0f0f0;
}

.title-icon {
  width: 20px;
  height: 20px;
}

.license-image {
  width: 80px;
  height: auto;
}

.license-description {
  margin: 0;
  font-size: 12px;
  color: #b0b0b0;
  line-height: 1.5;
}

/* Responsive adjustments */
@media (max-width: 480px) {
  .license-title {
    font-size: 14px;
  }
  
  .title-icon {
    width: 16px;
    height: 16px;
  }
  
  .license-image {
    width: 60px;
  }
  
  .license-description {
    font-size: 11px;
  }
}
</style>

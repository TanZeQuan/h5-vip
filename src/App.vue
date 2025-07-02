<script setup>
import Navbottom from './views/navbottom.vue'
</script>

<template>
    <transition name="slide-up" mode="out-in">
      <router-view />
    </transition>
  <Navbottom />
</template>


<style scoped>
.slide-up-enter-active,
.slide-up-leave-active {
  transition: all 0.4s ease;
}

.slide-up-enter-from {
  opacity: 0;
  transform: translateY(30px);
}
.slide-up-enter-to {
  opacity: 1;
  transform: translateY(0);
}
.slide-up-leave-from {
  opacity: 1;
  transform: translateY(0);
}
.slide-up-leave-to {
  opacity: 0;
  transform: translateY(30px);
}
</style>

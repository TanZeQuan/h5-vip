<script setup>
import { useRoute } from 'vue-router'
import NavBottom from './views/navbottom.vue'

const route = useRoute()
</script>

<template>
  <div>
    <!-- ✅ Only router-view is wrapped in transition -->
    <transition name="slide-up" mode="out-in">
      <router-view />
    </transition>

    <!-- NavBottom stays outside, static -->
    <NavBottom v-if="!route.meta.hideNavBottom" />
  </div>
</template>

<style scoped>
.slide-up-enter-active,
.slide-up-leave-active {
  transition: transform 0.5s ease, opacity 0.2s ease;
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

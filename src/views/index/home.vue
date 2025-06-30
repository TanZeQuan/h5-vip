<script setup>
import {ref} from 'vue'
import Header from '@/views/header.vue'
import Banner from '@/views/index/banner.vue'
import Games from '@/views/index/games.vue'
import Jili from '@/views/index/jili.vue'
</script>

<template>
    <div class="container">
        <Banner />
        <Games />
        <Jili />
        <Header />
    </div>
</template>

<style scoped>


</style>
<!-- 一级路由布局容器 -->
<script setup>
import RabbitTopNav from '../components/RabbitTopNav.vue';
import RabbitHearderVue from '@/components/RabbitHearder.vue';
</script>
<template>
  <RabbitTopNav></RabbitTopNav>
  <RabbitHearderVue></RabbitHearderVue>
  <main>
    <router-view></router-view>
  </main>
  <footer>底部</footer>
</template>
<style scoped lang="less"></style>

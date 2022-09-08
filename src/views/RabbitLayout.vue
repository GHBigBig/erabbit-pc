<!-- 一级路由布局容器 -->
<script setup>
import RabbitTopNav from '../components/RabbitTopNav.vue';
</script>
<template>
  <RabbitTopNav></RabbitTopNav>
  <header>头部</header>
  <main>
    <router-view></router-view>
  </main>
  <footer>底部</footer>
</template>
<style scoped lang="less"></style>

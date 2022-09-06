<script setup></script>

<template>
  <h1>小兔儿鲜</h1>
  <p>
    <router-link to="/home">Go to Home</router-link>
  </p>
  <p>{{ $store.state.user.profile.account }}</p>
  <button @click="$store.commit('user/setUser', { account: '小飞棍来喽~' })">
    更改用户信息
  </button>
  <router-view></router-view>
</template>

<style scoped lang="less">
h1 {
  color: @warnColor;
}
</style>

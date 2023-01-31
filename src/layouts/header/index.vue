<template>
  <div class="header-container">
    <div class="logo-container" @click="backToHome"><span>logo</span></div>
    <Menu></Menu>
    <div class="login-container"><span>login</span></div>
  </div>
</template>

<script lang="ts" setup>
import Menu from "../menu/index.vue";
import { useRouter } from 'vue-router';

const router = useRouter();

const backToHome = () => {
  router.push('/home');
}

</script>

<style lang="less">
.header-container {
  display: flex;
  height: 60px;
  .logo-container {
    width: 180px;
    height: 100%;
    display: flex;
    align-items: center;
    background: rgb(151, 163, 148);
    padding: 2px;
    cursor: pointer;
    box-sizing: border-box;
  }
  .login-container {
    width: 180px;
    height: 100%;
    display: flex;
    align-items: center;
  }
}
</style>
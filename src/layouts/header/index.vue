<template>
  <div class="header-container">
    <div @click="backToHome">logo</div>
    <Menu></Menu>
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
}
</style>
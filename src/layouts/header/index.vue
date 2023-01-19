<template>
    <div class="base-header">
      header
    </div>
  </template>

  <script lang="ts" setup>
  import { computed } from "vue";
  import { useUserStore } from '@/store'

  const userStore = useUserStore()
  const userinfo = computed(() => userStore.userInfo)


  </script>

  <style lang="less">
  
  </style>
<template>
    <el-menu
        :default-active="storeRouterPath.path.toString()"
        class="el-menu-con"
        mode="horizontal"
        background-color="#545c64"
        text-color="#fff"
        active-text-color="#ffd04b"
    >
        <menu-item v-for="route in menuRouterData" :item="route" :key="route.path" :base-path="route.path" />
    </el-menu>
</template>
  
<script lang="ts" setup>
  import { menuRouterData } from '../../router/routerData'
  import menuItem from './menuItem.vue';
  import { useRouterPath } from '@/store'
  import { onMounted, ref } from 'vue'
  import { useRouter, useRoute } from "vue-router";

  // 获取当前路由路径
  const router = useRouter()
  const storeRouterPath = useRouterPath();
  
//   const handleSelect = (key: string, keyPath: string[]) => {
//     console.log(key, keyPath)
//     storeRouterPath.setActivePath(key);
//   }
  // 动态设置激活的路由，刷新页面保持menu激活状态和路由一致
  onMounted(() => {
    let activeRouterName = router.currentRoute.value?.path?.split('/index')[0];
    console.log('router:', activeRouterName);
    storeRouterPath.setActivePath(activeRouterName);
  })
</script>

<style>
.el-menu-con {
    flex-grow: 1;
}
</style>
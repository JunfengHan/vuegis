<template>
    <div class="container">
        <el-container>
            <el-header class="header">
                <Header />
            </el-header>
            <el-container>
                <el-main class="main">
                  <router-view v-slot="{ Component }">
                    <keep-alive>
                      <component :is="Component" />
                    </keep-alive>
                  </router-view>
                </el-main>
            </el-container>
        </el-container>
    </div>
</template>

<script lang="ts" setup>
import Header from './header/index.vue'
</script>

<style lang="less" scoped>
.container {
    .header {
    }
}
</style>
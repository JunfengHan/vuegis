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
  .el-header {
    padding: 0;
  }
  .header {
  background: #545c64;
  }
  .el-container {
    width: 100%;
    height: calc(100vh);
    .main {
      height: 100%;
      padding: 0px;
      margin: 0 auto;
      display: flex;
      justify-content: center;
      .pageContainer {
        width: calc(100% - 360px);
        margin-top: 20px;
      }
    }
  }
  .mapboxgl-control-container {
    display: none !important;
  }
}
</style>
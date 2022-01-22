<template>
  <el-container>
    <el-aside width="auto">
      <nav-side :collapse="isCollapse"></nav-side>
    </el-aside>
    <el-container>
      <el-header>
        <!-- 通过v-model修改值 -->
        <nav-header v-model:collapse="isCollapse"></nav-header>
      </el-header>
      <el-main>
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>

<script lang="ts" setup>
import NavHeader from "./navHeader/index.vue";
import NavSide from "./navSide/index.vue";

import { ref } from "vue";
let isCollapse = ref<boolean>(false);
</script>

<style lang="scss" scope>
.el-header {
  padding: 0  !important;
  border-bottom: 1px solid #eee;
}
</style>

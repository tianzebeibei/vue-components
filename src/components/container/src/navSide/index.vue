<template>
  <el-menu default-active="2" class="el-menu-demo" :collapse="collapse">
    <el-menu-item index="1">
      <el-icon-timer></el-icon-timer>
      <span>导航一</span>
    </el-menu-item>
    <el-menu-item index="2">
      <el-icon-timer></el-icon-timer>
      <span>图标选择器</span>
    </el-menu-item>
    <el-menu-item index="3">
      <el-icon-timer></el-icon-timer>
      <span>导航三</span>
    </el-menu-item>
  </el-menu>
</template>

<script lang="ts" setup>
let props = defineProps<{
  collapse: boolean
}>()
</script>

<style lang="scss" scope>
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
}
</style>

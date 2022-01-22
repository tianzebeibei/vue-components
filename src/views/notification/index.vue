<template>
  <!-- <m-notification :value="50"></m-notification>
  <br />
  <br />
  <m-notification :value="50" :max="30"></m-notification>
  <br />
  <br />
  <m-notification :value="50" isDot></m-notification>
  <br />
  <br />
  <m-notification :value="50" icon="Menu"></m-notification> -->
  <m-notification :value="50">
    <m-list
      :list="list"
      :actions="actions"
      @clickItem="clickItem"
      @clickAction="clickAction"
    ></m-list>
  </m-notification>
</template>

<script lang="ts" setup>
import { list, actions } from "./data";
let clickItem = (val: any) => {
  console.log(val);
};
let clickAction = (val: any) => {
  console.log(val);
};
</script>

<style lang="scss" scope></style>

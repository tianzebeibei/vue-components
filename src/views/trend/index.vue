<template>
  <div class="flex">
    <div><m-trend text="营业额" upIcon="ArrowRightBold"></m-trend></div>
    <div><m-trend text="销售额" type="down" downIcon="ArrowLeftBold"></m-trend></div>
    <!-- <div><m-trend>aaaa</m-trend></div> -->
  </div>
</template>

<script lang="ts">

</script>

<style lang="scss" scope>
  .flex {
    display: flex;
    div {
      margin-right: 10px;
    }
  }
</style>

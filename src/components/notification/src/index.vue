<template>
  <el-popover
    placement="bottom-start"
    :width="300"
    trigger="click"
  >
    <slot>这是一段内搭</slot>
    <template #reference>
      <el-badge
        :value="value"
        :max="max"
        :is-dot="isDot"
        style="cursor: pointer"
      >
        <component :is="`el-icon-${toLine(icon)}`"> </component>
      </el-badge>
    </template>
  </el-popover>
</template>

<script lang="ts" setup>
import { toLine } from "../../../utils";

let props = defineProps({
  icon: {
    type: String,
    default: "Bell",
  },
  value: {
    type: [String, Number],
    default: "",
  },
  max: {
    type: Number,
  },
  // 是否显示小圆点
  isDot: {
    type: Boolean,
    default: false,
  },
});
</script>

<style lang="scss" scoped>
svg {
  width: 1em;
  height: 1em;
}
</style>

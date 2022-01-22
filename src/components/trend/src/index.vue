<template>
  <div class="trend">
    <div class="text" :style="{ color: textColor }">
      <slot v-if="slots.default"></slot>
      <div v-else>{{ text }}</div>
    </div>
    <div class="icon">
      <!-- 如果不需要修改图标的写法 -->
      <!-- <el-icon-arrowup
        :style="{ color: reverseColor ? upIconColor : '#52c41a' }"
        v-if="type === 'up'"
      ></el-icon-arrowup>
      <el-icon-arrowdown
        :style="{ color: reverseColor ? downIconColor : '#f5222d' }"
        v-else
      ></el-icon-arrowdown> -->
      <!-- 上升的动态图标 -->
      <component
        :is="`el-icon-${toLine(upIcon)}`"
        :style="{ color: !reverseColor ? upIconColor : '#52c41a' }"
        v-if="type === 'up'"
      ></component>
       <!-- 下降的动态图标 -->
      <component
        :is="`el-icon-${toLine(downIcon)}`"
       :style="{ color: !reverseColor ? downIconColor : '#f5222d' }"
        v-else
      ></component>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { computed, onMounted, useSlots } from "vue";
import { toLine } from "../../../utils";
let slots = useSlots();

let props = defineProps({
  type: {
    type: String,
    default: "up",
  },
  text: {
    type: String,
    default: "文字",
  },
  upIconColor: {
    type: String,
    default: "#f5222d",
  },
  downIconColor: {
    type: String,
    default: "#52c41a",
  },
  // 颜色翻转只在默认的颜色下生效 如果使用了自定义颜色 这个属性就不生效了
  reverseColor: {
    type: Boolean,
    default: false,
  },
  upTextColor: {
    type: String,
    default: "#999",
  },
  downTextColor: {
    type: String,
    default: "#999",
  },
  upIcon: {
    type: String,
    default: "ArrowUp",
  },
  downIcon: {
    type: String,
    default: "ArrowDown",
  },
});

let textColor = computed(() => {
  return (props.type = "up" ? props.upTextColor : props.downTextColor);
});
</script>

<style lang="scss" scope>
.trend {
  display: flex;
  align-items: center;
  .text {
    font-size: 12px;
    margin-right: 4px;
  }
  .icon {
    svg {
      width: 0.8em;
      height: 0.8em;
    }
  }
}
</style>

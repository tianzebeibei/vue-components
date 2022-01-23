<template>
  <el-form
    v-if="modal"
    :model="modal"
    :rules="rules"
    v-bind="$attrs"
    :validate-on-rule-change="false"
  >
    <template v-for="(item, index) in options" :key="index">
      <el-form-item
        v-if="!item.children || !item.children!.length"
        :prop="item.prop"
        :label="item.label"
      >
        <component
          v-model="modal[item.prop!]"
          v-bind="item.attrs"
          :is="`el-${item.type}`"
          :placeholder="item.placeholder"
        ></component>
      </el-form-item>
      <!-- 类似select这种有select的情况 -->
      <el-form-item
        v-if="item.children && item.children.length"
        :prop="item.prop"
        :label="item.label"
      >
        <component
          v-model="modal[item.prop!]"
          v-bind="item.attrs"
          :is="`el-${item.type}`"
          :placeholder="item.placeholder"
        >
          <component
            v-for="(child, idx) in item.children"
            :key="idx"
            :is="`el-${child.type}`"
            :label="child.label"
            :value="child.value"
          >
          </component>
        </component>
      </el-form-item>
    </template>
  </el-form>
</template>

<script lang="ts" setup>
import { PropType, ref, onMounted, watch } from "vue";
import { FormOptions } from "./types/types";
import cloneDeep from "lodash/cloneDeep";

let props = defineProps({
  options: {
    type: Array as PropType<FormOptions[]>,
    require: true,
  },
});
//  {username: '', password: ''}
let modal = ref<any>(null);
let rules = ref<any>(null);

let initForm = () => {
  if (props.options && props.options.length) {
    let m: any = {};
    let r: any = {};
    props.options?.map((item) => {
      m[item.prop!] = item.value;
      r[item.prop!] = item.rules;
      modal.value = cloneDeep(m);
      rules.value = cloneDeep(r);
    });
  }
  // console.log(modal.value,rules.value)
};
onMounted(() => {
  initForm();
});
// 监听父组件传入的options
watch(
  () => props.options,
  () => {
    initForm();
  },
  { deep: true }
);
</script>

<style lang="scss" scope></style>

<template>
  <el-form :validate-on-rule-change="false" :model="modal" :rules="rules" v-bind="$attrs">
    <el-form-item :prop="item.prop" :label="item.label" v-for="(item,index) in options" :key="index"> 
      <component v-model="modal[item.prop!]" v-bind="item.attrs" :is="`el-${item.type}`"></component>
    </el-form-item>
  </el-form>
</template>

<script lang="ts" setup>
import { PropType,ref,onMounted } from "vue";
import { FormOptions } from "./types/types";
import cloneDeep from 'lodash/cloneDeep'

let props = defineProps({
  options: {
    type: Array as PropType<FormOptions[]>,
    require:true
  },
});
//  {username: '', password: ''}
let modal = ref<any>({}) 
let rules = ref<any>({})

onMounted(()=>{
  let m:any = {} 
  let r:any = {}
  props.options?.map((item)=>{
    m[item.prop!] = item.value
    r[item.prop!] = item.rules
    modal.value = cloneDeep(m)
    rules.value = cloneDeep(r)
  })
  // console.log(modal.value,rules.value)
})
</script>

<style lang="scss" scope></style>

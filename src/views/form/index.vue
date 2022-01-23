<template>
  <m-form :options="options" label-width="200px"></m-form>
</template>

<script lang="ts" setup>
import { FormOptions } from "../../components/form/src/types/types";

let options: FormOptions[] = [
  {
    type: "input",
    value: "",
    placeholder: " 请输入",
    label: "用户名",
    prop: "username",
    rules: [
      {
        required: true,
        message: "用户名不能为空",
        trigger: "blur",
      },
      {
        min: 2,
        max: 6,
        message: "用户名在2～6位之间",
        trigger: "blur",
      },
    ],
    attrs: {
      clearable: true,
    },
  },
  {
    type: "input",
    value: "",
    placeholder: " 请输入密码",
    prop: "password",
    label: "密码",
    rules: [
      {
        required: true,
        message: "密码不能为空",
        trigger: "blur",
      },
      {
        min: 6,
        max: 15,
        message: "密码在6～15位之间",
        trigger: "blur",
      },
    ],
    attrs: {
      showPassword: true,
      clearable: true,
    },
  },
  {
    type: "select",
    value: "2",
    label:'职位',
    placeholder: "请选择职位",
    prop: "role",
    rules: [
      {
        required: true,
        message: "职位不能为空",
        trigger: "blur",
      },
    ],
    children: [
      { type: "option", label: "经理", value: "1" },
      { type: "option", label: "主管", value: "2" },
      { type: "option", label: "员工", value: "3" },
    ],
    attrs:{
      style:{
        width:'500px'
      }
    }
  },
  {
    type:'checkbox-group',
    value:[],
    prop:'like',
    label:'爱好',
    children:[
      {
        type:'checkbox',
        label:'足球',
        value:'1'
      },{
        type:'checkbox',
        label:'篮球',
        value:'2'
      },{
        type:'checkbox',
        label:'网球',
        value:'3'
      }
    ]
  },{
    type:'radio-group',
    value:[],
    prop:'like',
    label:'爱好',
    children:[
      {
        type:'radio',
        label:'足球',
        value:'1'
      },{
        type:'radio',
        label:'篮球',
        value:'2'
      },{
        type:'radio',
        label:'网球',
        value:'3'
      }
    ]
  }
];
</script>

<style lang="scss" scope></style>

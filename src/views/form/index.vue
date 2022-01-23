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
];
</script>

<style lang="scss" scope></style>

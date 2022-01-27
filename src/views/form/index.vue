<template>
  <div>
    <m-form
      :options="options"
      label-width="200px"
      @on-preview="handlePreview"
      @on-remove="handleRemove"
      @before-remove="beforeRemove"
      @on-success="handleSuccesee"
      @on-exceed="handleExceed"
      @on-error="handleError"
      multiple
    >
      <template #uploadArea>
        <el-button class="ml-3" type="success"
          >upload to server</el-button
        ></template
      >
      <template #uploadTip>
        <div style="color: #ccc">
          limit 1 file, new file will cover the old file
        </div>
      </template>
    </m-form>
  </div>
</template>

<script lang="ts" setup>
import { FormOptions } from "../../components/form/src/types/types";
import type { UploadFile } from "element-plus/es/components/upload/src/upload.type";
import { ElMessageBox } from "element-plus";
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
    label: "职位",
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
    attrs: {
      style: {
        width: "500px",
      },
    },
  },
  {
    type: "checkbox-group",
    value: [],
    prop: "like",
    label: "爱好",
    children: [
      {
        type: "checkbox",
        label: "足球",
        value: "1",
      },
      {
        type: "checkbox",
        label: "篮球",
        value: "2",
      },
      {
        type: "checkbox",
        label: "网球",
        value: "3",
      },
    ],
  },
  {
    type: "radio-group",
    value: "",
    prop: "gender",
    label: "性别",
    rules: [
      {
        required: true,
        message: "性别不能为空",
        trigger: "change",
      },
    ],
    children: [
      {
        type: "radio",
        label: "男",
        value: "male",
      },
      {
        type: "radio",
        label: "女",
        value: "female",
      },
      {
        type: "radio",
        label: "保密",
        value: "not",
      },
    ],
  },
  {
    type: "upload",
    label: "上传",
    prop: "pic",
    rules: [
      {
        required: true,
        message: "不能为空",
        trigger: "blur",
      },
    ],
    uploadAttrs: {
      action: "https://jsonplaceholder.typicode.com/posts/",
    },
  },
];

const handleRemove = (file: UploadFile, fileList: UploadFile[]) => {
  console.log(file, fileList);
};
const handlePreview = (file: UploadFile) => {
  console.log(file);
};
const beforeRemove = (file: UploadFile, fileList: UploadFile[]) => {
  return ElMessageBox.confirm(`Cancel the transfert of ${file.name} ?`);
};
const handleSuccesee = () => {
  console.log("success");
};
const handleError = (val: any) => {
  console.log("error", val);
};
const handleExceed = () => {};
</script>

<style lang="scss" scope></style>

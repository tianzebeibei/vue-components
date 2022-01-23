<template>
  <div style="width: 200px">
    <!-- <m-menu :data="data1" :defaultActive="1" a="1" b="2"></m-menu> -->
    <m-menu :data="data1" :defaultActive="1" name="a" icon="c" index="idx"></m-menu>
    <!-- <m-infinite-menu
      :data="data2"
      defaultActive="1"
      a="1"
      text-color="red"
    ></m-infinite-menu> -->
  </div>
</template>

<script lang="ts" setup>
let data1 = [
  {
    a: "导航一",
    idx: "1",
    c: "Document",
  },
  {
    name: "导航二",
    index: "2",
    icon: "Dessert",
  },
  {
    name: "导航三",
    index: "3",
    icon: "Discount",
    children: [{ name: "导航3-1", index: "3-1", icon: "DataBoard" }],
  },
];

let data2 = [
  {
    name: "导航一",
    index: "1",
    icon: "Document",
  },
  {
    name: "导航二",
    index: "2",
    icon: "Dessert",
  },
  {
    name: "导航三",
    index: "3",
    icon: "Discount",
    children: [
      {
        name: "导航3-1",
        index: "3-1",
        icon: "DataBoard",
        children: [
          {
            name: "导航3-1-1",
            index: "3-1-1",
            icon: "DataBoard",
            children: [
              {
                name: "导航3-1-1-1",
                index: "3-1-1-1",
                icon: "DataBoard",
                children: [
                  {
                    name: "导航3-1-1-1-1",
                    index: "3-1-1-1-1",
                    icon: "DataBoard",
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  },
];
</script>

<style lang="scss" scope></style>

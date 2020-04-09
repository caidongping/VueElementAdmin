<template>
  <el-menu
    class="el-menu-vertical"
    router
    unique-opened
    @open="handleOpen"
    @close="handleClose"
    :collapse="isCollapse"
    background-color="#545c64"
    text-color="#fff"
    active-text-color="#ffd04b"
  >
    <el-submenu v-for="item in menu" :index="item.id" :key="item.id">
      <template slot="title">
        <span v-text="item.name"></span>
      </template>
      <el-menu-item-group class="over-hide" v-for="sub in item.sub" :key="sub.componentName">
        <el-menu-item :index="sub.componentName" v-text="sub.name"></el-menu-item>
      </el-menu-item-group>
    </el-submenu>
  </el-menu>
</template>

<style scoped>
.over-hide {
  overflow: hidden;
}
</style>

<script>
import menu from "@/config/menu-config";

export default {
  data() {
    return {
      menu
    };
  },
  methods: {
    collapseOpen() {
      this.isCollapse = false;
    },
    collapseClose() {
      this.isCollapse = true;
    }
  }
};
</script>
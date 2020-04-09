<template>
    <el-container>
      <el-header>
        <el-col style="width: 250px;" v-if="showcollapseOpen">
          <div class="grid-content">CI-Vue+ElementUI</div>
        </el-col>

        <el-col style="width: 45px;" v-if="showcollapseClose">
          <div class="grid-content">CI</div>
        </el-col>

        <el-button
          icon="el-icon-s-fold"
          type="primary"
          class="elbutton"
          v-if="showcollapseOpen"
          @click="collapseClose"
        ></el-button>

        <el-button
          icon="el-icon-s-unfold"
          type="primary"
          class="elbutton"
          v-if="showcollapseClose"
          @click="collapseOpen"
        ></el-button>

        <div style="float: right;">
          <el-badge :value="200" :max="99">
            <el-button type="primary" class="elbadgeelbutton" icon="el-icon-bell"></el-button>
          </el-badge>
          <el-dropdown style="margin-left:25px">
            <el-button type="primary" class="elbutton" icon="el-icon-user"></el-button>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item>
                <i class="el-icon-user"></i>用户信息
              </el-dropdown-item>
              <el-dropdown-item>
                <i class="el-icon-lock"></i>密码修改
              </el-dropdown-item>
              <el-dropdown-item @click.native="loginout">
                <i class="el-icon-circle-close"></i>退出登录
              </el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
        </div>
      </el-header>

      <el-container>
        <el-aside>
          <el-menu class="el-menu-vertical" router unique-opened :collapse="isCollapse">
            <el-submenu v-for="item in menu" :index="item.id" :key="item.id">
              <template slot="title">
                <i :class="item.icon"></i>
                <span v-text="item.name"></span>
              </template>

              <el-submenu v-for="sub in item.sub" :index="sub.id" :key="sub.id">
                <template slot="title">
                  <i :class="sub.icon"></i>
                  <span v-text="sub.name"></span>
                </template>

                <el-menu-item
                  v-for="data in sub.data"
                  :index="data.componentName"
                  :key="data.componentName"
                >
                  <span v-text="data.name"></span>
                </el-menu-item>
              </el-submenu>
            </el-submenu>
          </el-menu>
        </el-aside>
        <el-main>

          <router-view></router-view>

        </el-main>

      </el-container>
    </el-container>
</template>

<style>
.el-menu-vertical:not(.el-menu--collapse) {
  width: 270px;
  height: calc(100% - 60px);
  min-height: calc(100vh - 60px);
}
.grid-content {
  line-height: 60px;
}

.elbutton {
  height: 60px;
  font-size: 20px;
}
.elbadgeelbutton {
  font-size: 18px;
}

.el-header {
  background-color: #409eff;
  color: #fff;
}
</style>

<script>
import menu from "@/config/menu-config";

export default {
  name: "app",
  data() {
    return {
      showcollapseOpen: true,
      showcollapseClose: false,
      isCollapse: false,
      menu
    };
  },
  methods: {
    collapseOpen() {
      this.showcollapseOpen = true;
      this.showcollapseClose = false;
      this.isCollapse = false;
    },
    collapseClose() {
      this.showcollapseOpen = false;
      this.showcollapseClose = true;
      this.isCollapse = true;
    },
    loginout() {
      this.$router.push({ path: "/" });
    }
  }
};
</script>

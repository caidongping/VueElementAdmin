<template>
  <el-container>
    <el-header class="elheader">
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
      <el-aside width="null">
        <!-- :default-active="'Basic'"  :default-openeds="['Basic','Basic1']"  -->
        <el-menu class="el-menu-vertical-demo" router :collapse="isCollapse">
          <el-submenu v-for="item in menu" :index="item.id" :key="item.id">
            <template slot="title">
              <i :class="item.icon"></i>
              <span v-text="item.name"></span>
            </template>

            <el-submenu v-if="item.level" v-for="sub in item.sub" :index="sub.id" :key="sub.id">
              <template slot="title">
                <i :class="sub.icon"></i>
                <span v-text="sub.name"></span>
              </template>

              <el-menu-item
                v-for="data in sub.data"
                :index="data.componentName"
                :key="data.componentName"
             
              >
                <i :class="data.icon"></i>
                <span v-text="data.name"></span>
              </el-menu-item>
            </el-submenu>

            <el-menu-item
              v-for="data in item.data"
              :index="data.componentName"
              :key="data.componentName"
             
            >
              <i :class="data.icon"></i>
              <span v-text="data.name"></span>
            </el-menu-item>
          </el-submenu>
        </el-menu>
      </el-aside>
      <el-main width="auto">
        <el-header style="padding:0px 0px">
          <el-row type="flex">
            <el-col :span="23">
              <el-tabs
                type="card"
                @tab-click="tabClick"
                v-if="options.length"
                @tab-remove="tabRemove"
                v-model="activeName"
                style="border-bottom:0px !important"
              >
                <el-tab-pane
                  :key="item.name"
                  v-for="(item, index) in options"
                  :label="item.name"
                  :name="item.route"
                  :closable="item.close"
                ></el-tab-pane>
              </el-tabs>
            </el-col>

            <el-col :span="1">
              <el-dropdown>
                <el-button>
                  <i class="el-icon-s-operation el-icon--right"></i>
                </el-button>
                <el-dropdown-menu slot="dropdown">
                  <el-dropdown-item @click.native="closeOther">
                    <i class="el-icon-user"></i>关闭其他选项卡
                  </el-dropdown-item>
                  <el-dropdown-item @click.native="closeAll">
                    <i class="el-icon-lock"></i>关闭全部选项卡
                  </el-dropdown-item>
                </el-dropdown-menu>
              </el-dropdown>
            </el-col>
          </el-row>
        </el-header>
        <keep-alive>
          <router-view />
          <!--这里是会被缓存的组件-->
        </keep-alive>
      </el-main>
    </el-container>
  </el-container>
</template>

<style>
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 270px;
}

.el-menu-vertical-demo {
  height: calc(100% - 60px);
  min-height: calc(100vh - 60px);
}
.el-main {
  padding: 0px;
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
.el-tag + .el-tag {
  margin-left: 10px;
}
.elheader {
  background-color: #409eff;
  color: #fff;
}
.tagselheader {
  height: 45px !important;
  border-bottom: 1px solid #d8dce5;
  border-top: 1px solid #d8dce5;
  padding: 6px;
}

/*定义滚动条高宽及背景 高宽分别对应横竖滚动条的尺寸*/
::-webkit-scrollbar {
  width: 7px;
  height: 7px;
  background-color: #f5f5f5;
}

/*定义滚动条轨道 内阴影+圆角*/
::-webkit-scrollbar-track {
  box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
  -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
  border-radius: 10px;
  background-color: #f5f5f5;
}

/*定义滑块 内阴影+圆角*/
::-webkit-scrollbar-thumb {
  border-radius: 10px;
  box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.1);
  -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.1);
  background-color: #c8c8c8;
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
      menu,
      activeName: "/Main",
      options: [{ route: "/Main", name: "首页", close: false }]
    };
  },
  beforeCreate() {
    this.$router.push({ path: "/Main" }).catch(data => {});
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
      sessionStorage.setItem("user", "");
      this.$router.push({ path: "/" });
    },

    closeOther() {
      if (this.activeName == "/Main") {
        this.options.splice(1, this.options.length);
        return;
      }
      let data = {};
      for (let option of this.options) {
        if (option.route === this.activeName) {
          data = option;
        }
      }
      this.options.splice(1, 1, data);
      this.options.splice(2, this.options.length);
    },

    closeAll() {
      this.options.splice(1, this.options.length);
      this.$router.push({ path: "/Main" }).catch(data => {});
    },

    tabClick(tab) {
      this.$router.push({ path: tab.name }).catch(data => {});
    },

    tabRemove(route) {
      let index = 0;
      for (let option of this.options) {
        if (option.route === route) {
          break;
        }
        index++;
      }
      this.options.splice(index, 1);
      this.activeName = this.options[this.options.length - 1].route;
      this.$router
        .push({ path: this.options[this.options.length - 1].route })
        .catch(data => {});
    }
  },
  watch: {
    $route(to) {
      let flag = false;
      this.activeName = to.path;
      for (let option of this.options) {
        if (option.name === to.name) {
          flag = true;
          break;
        }
      }
      if (!flag) {
        this.options.push({ route: to.path, name: to.name, close: true });
      }
    }
  }
};
</script>

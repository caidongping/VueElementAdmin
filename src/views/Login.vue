<template>
  <div class="login-container logincs">
    <el-form
      :model="ruleForm"
      :rules="rules"
      status-icon
      ref="ruleForm"
      label-position="left"
      label-width="0px"
      class="demo-ruleForm login-page"
    >
      <h3 class="title">系统登录</h3>
      <el-form-item prop="username">
        <el-input type="text" v-model="ruleForm.username" auto-complete="off" placeholder="用户名"></el-input>
      </el-form-item>
      <el-form-item prop="password">
        <el-input type="password" v-model="ruleForm.password" auto-complete="off" placeholder="密码"></el-input>
      </el-form-item>
      <el-checkbox v-model="checked" class="rememberme">记住密码</el-checkbox>

      <el-form-item style="width:100%;">
        <el-button type="primary" style="width:100%;" @click="handleSubmit" :loading="logining">登录</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>
<style>
.logincs {
  text-align: center;
  color: #2c3e50;
}
</style>
<script>
import md5 from "js-md5";

import axios from "axios";

export default {
  data() {
    return {
      logining: false,
      ruleForm: {
        username: "em989pl4",
        password: "d4ab875222774b61b07cf95cde2fad7b"
      },
      rules: {
        username: [
          {
            required: true,
            message: "请输入用户名",
            trigger: "blur"
          }
        ],
        password: [{ required: true, message: "请输入密码", trigger: "blur" }]
      },
      checked: false
    };
  },
  methods: {
    handleSubmit(event) {
      this.$refs.ruleForm.validate(valid => {
        if (valid) {
          this.logining = true;
          var timeSpan = new Date().getTime();
          var content =
            "licenseKey=" +
            this.ruleForm.username +
            "&timeSpan=" +
            timeSpan +
            "&secretKey=" +
            this.ruleForm.password;
          content = content.toUpperCase();
          var sign = md5(content).toUpperCase();
          var data = {
            licenseKey: this.ruleForm.username,
            timeSpan: timeSpan,
            sign: sign
          };

          let _this = this;
          axios
            .post("/api/Authorize/DeviceLogin", data)
            .then(function(res) {
              _this.$store.commit("setToken", res.data.data.token);
              _this.$store.commit("setExpiresTime", res.data.data.expiresTime);
              _this.$store.commit("setInvalidTime", res.data.data.invalidTime);
              console.log(_this.$router);
              _this.$router.push({ path: "Index" });

           
            })
            .catch(function(error) {
              console.log(error);
            });
          // if (
          //   this.ruleForm.username === "em989pl4" &&
          //   this.ruleForm.password === "d4ab875222774b61b07cf95cde2fad7b"
          // ) {
          //   this.logining = false;
          //   sessionStorage.setItem("user", this.ruleForm.username);
          //   sessionStorage.setItem("btnPermissions", ["admin"]);
          //   this.$router.push({ path: "Index" });
          // } else {
          //   this.logining = false;
          //   this.$alert("用户名或密码错误!", "提示", {
          //     confirmButtonText: "ok"
          //   });
          // }
        } else {
          console.log("登录失败!");
          return false;
        }
      });
    }
  }
};
</script>

<style scoped>
.login-container {
  width: 100%;
  height: 100%;
}
.login-page {
  -webkit-border-radius: 5px;
  border-radius: 5px;
  margin: 180px auto;
  width: 350px;
  padding: 35px 35px 15px;
  background: #fff;
  border: 1px solid #eaeaea;
  box-shadow: 0 0 25px #cac6c6;
}
label.el-checkbox.rememberme {
  margin: 0px 0px 15px;
  text-align: left;
}
</style>
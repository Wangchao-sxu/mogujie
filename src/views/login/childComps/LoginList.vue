<template>
  <div class="login-list">
        <el-form
          :model="formData"
          status-icon
          :rules="rules"
          ref="formData"
          class="demo-ruleForm"
        >
          <el-form-item label="用户名:" prop="username">
            <el-input
              placeholder="请输入用户名"
              v-model="formData.username"
            ></el-input>
          </el-form-item>

          <el-form-item class="last" label="密码" prop="password">
            <el-input
              placeholder="请输入密码"
              v-model="formData.password"
              show-password
              autocomplete="off"
            ></el-input>
          </el-form-item>
          <el-form-item>
            <el-button
              class="login-btn"
              type="primary"
              @click="submit('formData')"
              block
              >登录</el-button>
          </el-form-item>
        </el-form>
  </div>
</template>

<script>
import {login} from '../../../network/login'
export default {
  name:'LoginList',
  data(){
    return {
      formData: {
        username: "",
        password: "",
      },
      rules: {
        username: [
          { required: true, message: "请输入用户名", trigger: "blur" },
          { min: 3, max: 22, message: "长度应在3-22位之间", trigger: "blur" },
        ],
        password: [
          { required: true, message: "请输入密码", trigger: "blur" },
          { min: 6, max: 18, message: "密码不得少于6位", trigger: "blur" },
        ],
      },
    }
  },
  created(){
    this.login();
  },
  methods:{
    submit(formName) {
      console.log(this.formData);
      this.$refs[formName].validate((valid) => {
        if (valid) {
          login.post("/login", this.formData).then((res) => {
            console.log(res);
            // this.$message({
            //   type: "success",
            //   message: "用户登录成功",
            // });
            if (res.data.code == -1) {
              this.$toast.fail("用户不存在");
            } else if (res.data.code == 0) {
              this.$toast.fail("密码错误");
            } else {
              this.$toast.success("登录成功");
              localStorage.setItem("elementToken", "Bearer " + res.data);
              this.$router.push("/");
            }
          });
        } else {
          this.$toast.fail("登录出错");
          return false;
        }
      })
    }
  }
}
</script>

<style scoped>
  .el-form {
  width: 90%;
  margin: 0 auto;
}
.el-form-item {
  margin-bottom: 0.2rem;
}
.last {
  margin-bottom: 0.6rem;
}
.login-btn {
  background-color: pink;
  border: none;
  width: 80%;
  height: 30%;
  margin-left: 30px;
}
</style>
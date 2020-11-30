<template>
  <div class="login-list">
        <el-form
          :model="formData"
          status-icon
          :rules="rules"
          ref="formData"
          class="demo-ruleForm"
        >
          <el-form-item label="账号:" prop="name">
            <el-input
              placeholder="请输入账号"
              v-model="formData.name"
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
import axios from 'axios'
export default {
  name:'LoginList',
  data(){
    return {
      formData: {
        name: "",
        password: "",
      },
      rules: {
        name: [{ required: true, message: "请输入用户名", trigger: "blur" }],
        password: [
          { required: true, message: "请输入密码", trigger: "blur" },
          { min: 6, max: 18, message: "密码不得少于6位", trigger: "blur" },
        ],
      },
    }
  },
  
  methods:{
    submit(formName) {
      console.log(this.formData);
      this.$refs[formName].validate((valid) => {
        if (valid) {
          axios({
            url: 'http://localhost:3000/login',
            method: 'post',
            data: {
              ...this.formData
            }
          }).then(res=>{
            console.log(res.data)
            if (res.data.code == -1) {
              this.$toast.fail("用户不存在");
            } else if (res.data.code == 0) {
              this.$toast.fail("密码错误");
            } else {
              this.$toast.success("登录成功");
              localStorage.setItem("elementToken", "Bearer " + res.data);
              this.$router.push("/profile");
            }
          })

          // login("/login", this.formData).then((res) => {
          //   console.log(res);
          //   if (res.data.code == -1) {
          //     this.$toast.fail("用户不存在");
          //   } else if (res.data.code == 0) {
          //     this.$toast.fail("密码错误");
          //   } else {
          //     this.$toast.success("登录成功");
          //     localStorage.setItem("elementToken", "Bearer " + res.data);
          //     this.$router.push("/");
          //   }
          // });
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
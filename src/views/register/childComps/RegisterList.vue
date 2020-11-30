<template>
  <div class="register-list">
    <el-form
      :model="formData"
      status-icon
      :rules="rules"
      ref="formData"
      class="demo-ruleForm"
    >
      <el-form-item label="账号:" prop="username">
        <el-input
          placeholder="请输入账号"
          v-model="formData.username"
        ></el-input>
      </el-form-item>
      <el-form-item label="用户名:" prop="name">
        <el-input placeholder="请输入用户名" v-model="formData.name"></el-input>
      </el-form-item>

      <el-form-item label="密码" prop="password">
        <el-input
          placeholder="请输入密码"
          v-model="formData.password"
          show-password
          autocomplete="off"
        ></el-input>
      </el-form-item>
      <el-form-item label="确认密码" prop="checkPass">
        <el-input
          placeholder="请再次输入密码"
          type="password"
          v-model="formData.checkPass"
          show-password
          autocomplete="off"
        ></el-input>
      </el-form-item>

      <el-form-item>
        <el-button
          class="register-btn"
          type="primary"
          @click="submit('formData')"
          block
          >注册</el-button
        >
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import {register} from '../../../network/login'
export default {  
  name:"RegisterList",
  data() {
    var validatePass = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入密码"));
      } else if (value.length < 6) {
        callback(new Error("密码不得少于6位"));
      } else {
        if (this.formData.checkPass !== "") {
          this.$refs.formData.validateField("checkPass");
        }
        callback();
      }
    };
    var validatePass2 = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请再次输入密码"));
      } else if (value !== this.formData.password) {
        callback(new Error("两次输入密码不一致!"));
      } else {
        callback();
      }
    };
    return {
      formData: {
        username: "",
        name: "",
        password: "",
        checkPass: ""
      },
      rules: {
        username: [
          { required: true, message: "请输入账号", trigger: "blur" },
          { min: 3, max: 22, message: "长度应在3-22位之间", trigger: "blur" },
        ],
        name: [{ required: true, message: "请输入用户名", trigger: "blur" }],
        password: [
          { required: true, validator: validatePass, trigger: "blur" },
          { min: 6, max: 18, message: "密码不得少于6位", trigger: "blur" },
        ],
        checkPass: [
          { required: true, validator: validatePass2, trigger: "blur" },
        ]
      },
    };
  },
  created(){
    this.register();
    console.log(this.register());
  },
  methods:{
    submit(formName) {
      console.log(this.formData);

      this.$refs[formName].validate((valid) => {
        if (valid) {
          register.post("/register", this.formData).then((data) => {
            console.log(data);
            if (data.data.code == 0) {
              // alert(data.data.message);
              this.$toast.fail("账号已存在");
            } else {
              this.$toast.success("注册成功");
              this.$router.push("/login");
            }
          });
        } else {
          this.$toast.fail("注册出错");
          return false;
        }
      });
    },
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
  .register-btn {
    background-color: pink;
    border: none;
    width: 80%;
    height: 30%;
    margin-top: 20px;
    margin-left: 30px;
  }
</style>
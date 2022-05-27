<template>
  <div class="Account-Form">
    <el-form :model="AccountForm" :rules="AccountRules" ref="AccountForm">
      <el-form-item label="用户名" prop="accountName">
        <el-input placeholder="请输入用户名" v-model="AccountForm.accountName" />
      </el-form-item>

      <el-form-item label="账户密码" prop="accountPassword">
        <el-input placeholder="请输入密码" v-model="AccountForm.accountPassword" />
      </el-form-item>

      <el-form-item label="确认密码" prop="">
        <el-input placeholder="再次输入密码" v-model="AccountForm.passwordConfirm" show-password />
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      AccountForm: {
        accountName: '',
        accountPassword: '',
        passwordConfirm: ''
      }
    }
  }
}
</script>

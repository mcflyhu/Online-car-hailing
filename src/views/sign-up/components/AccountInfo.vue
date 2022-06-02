<template>
  <div class="Account-Form">
    <el-form ref="AccountForm" :model="AccountForm" :rules="AccountRules">
      <el-form-item label="用户名" prop="accountName">
        <el-input v-model="AccountForm.accountName" placeholder="请输入用户名" />
      </el-form-item>

      <el-form-item label="账户密码" prop="accountPassword">
        <el-input v-model="AccountForm.accountPassword" placeholder="请输入密码" show-password />
      </el-form-item>

      <el-form-item label="确认密码" prop="passwordConfirm">
        <el-input v-model="AccountForm.passwordConfirm" placeholder="再次输入密码" show-password />
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

<template>
  <div class="PersonalInfo-form">
    <el-form ref="PersonalForm" v-model="PersonalForm" :rules="PersonalRules">
      <el-form-item label="用户姓名" prop="name">
        <el-input v-model="PersonalForm.name" placeholder="请输入姓名" prefix-icon="el-icon-user" />
      </el-form-item>

      <el-form-item label="电话号码" prop="mobilePhone">
        <el-input v-model="PersonalForm.mobilePhone" placeholder="请输入移动电话号码" prefix-icon="el-icon-mobile-phone" />
      </el-form-item>

      <el-form-item label="性别" prop="Gender">
        <el-radio-group v-model="gender">
          <el-radio-button label="先生" />
          <el-radio-button label="女士" />
        </el-radio-group>
      </el-form-item>

      <el-form-item label="电子邮箱" prop="EMail">
        <el-input v-model="PersonalForm.eMail" prefix-icon="el-icon-message">
          <template slot="append">.com</template>
        </el-input>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      PersonalForm: {
        name: '',
        mobilePhone: '',
        gender: '',
        eMmail: ''
      }
    }
  }
}
</script>

<style lang="scss" scoped>
</style>

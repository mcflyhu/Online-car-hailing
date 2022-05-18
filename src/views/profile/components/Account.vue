<template>
  <div class="account-information">
    <el-form title="账户信息">
      <el-form-item label="用户名">
        <el-input v-model.trim="user.username" />
      </el-form-item>

      <el-form-item label="电话号码">
        <el-input v-model.trim="user.phone" />
      </el-form-item>

      <el-form-item label="姓名">
        <el-input v-model.trim="user.name" />
      </el-form-item>

      <el-form-item label="身份证号">
        <el-input v-model.trim="user.idcard" />
      </el-form-item>

      <el-form-item label="支付信用分">
        <el-rate v-model="user.credit" disabled :show-score="true" />
      </el-form-item>

      <div class="submit-button">
        <el-form-item>
          <el-button type="primary" @click="submit">提交</el-button>
        </el-form-item>
      </div>
    </el-form>
  </div>
</template>

<script>
export default {
  props: {
    user: {
      type: Object,
      default: () => {
        return {
          name: '',
          phone: '',
          idcard: '',
          username: '',
          credit: ''
        }
      }
    }
  },
  methods: {
    submit() {
      this.$message({
        message: '用户信息修改成功',
        type: 'success',
        duration: 5 * 1000
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.account-information {
  .submit-button {
    text-align: center;
  }
}
</style>

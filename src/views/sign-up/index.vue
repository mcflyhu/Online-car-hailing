<template>
  <div class="app-container">
    <el-steps :active="active" finish-status="success" align-center="true">
      <el-step title="账户信息" icon="el-icon-edit" />
      <el-step title="个人信息" icon="el-icon-bank-card" />
      <el-step title="实名验证" icon="el-icon-picture-outline" />
    </el-steps>
    <div class="app-main">
    </div>
    <div class="footer-button">
      <el-button round @click="next">上一步</el-button>
      <el-button round @click="back">下一步</el-button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      active: 0
    }
  },
  methods: {
    next() {
      this.active++
    },
    back() {
      this.active--
    }
  }
}
</script>

<style lang="scss" scoped>
</style>

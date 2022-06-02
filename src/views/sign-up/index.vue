<template>
  <div class="app-container">
    <div class="app-main">
      <el-steps :active="active" finish-status="success" align-center="true">
        <el-step title="账户信息" icon="el-icon-edit" />
        <el-step title="个人信息" icon="el-icon-bank-card" />
        <el-step title="实名验证" icon="el-icon-picture-outline" />
      </el-steps>
      <div v-if="active === 0">
        <AccountInfo />
      </div>
      <div v-else-if="active === 1">
        <PersonalInfo />
      </div>
      <div v-else>
        <IDCardVeri />
      </div>
    </div>

    <div class="footer-button">
      <el-button round @click="back">上一步</el-button>
      <el-button round @click="next">下一步</el-button>
    </div>
  </div>
</template>

<script>
import AccountInfo from './components/AccountInfo'
import PersonalInfo from './components/PersonalInfo'
import IDCardVeri from './components/IDCardVeri'

export default {
  name: 'SignUp',
  components: { AccountInfo, PersonalInfo, IDCardVeri },
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

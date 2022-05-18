<template>
  <div class="app-container">
    <el-row class="comment-card-table">
      <el-col span="20" offset="2">
        <el-card shadow="hover" class="comment-card">
          <div slot="header" @click="showComment">
            <span>
              订单
            </span>
            <el-button style="float:right;padding:3px 0">
              <i class="el-icon-arrow-right" />
            </el-button>
          </div>

          <div class="card-content"></div>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  methods: {
    showComment() {
      this.$router.push('path')
    }
  }
}
</script>

<style lang="scss" scoped>
</style>

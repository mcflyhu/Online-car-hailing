<template>
  <div class="app-container">
    <el-row class="comment-card-table">
      <el-col span="20" offset="2">
        <el-card shadow="hover" class="comment-card">
          <div slot="header" @click="showComment">
            <span>订单</span>
            <el-button style="float:right;padding:3px 0">
              <i class="el-icon-arrow-right" />
            </el-button>
          </div>

          <div class="card-content">
            <span class="static-text">行程评分：</span>
            <el-rate v-model="value" class="static-text" disabled show-score text-color="#ff9900" score-template="{value}" />
            <el-divider><i class="el-icon-chat-dot-square" /></el-divider>
            <div class="comment-content static-text">
              <p>哦我是猪？啊？</p>
            </div>
          </div>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  data() {
    return {
      value: 3.8
    }
  },
  methods: {
    showComment() {
      this.$router.push('/comment-description')
    }
  }
}
</script>

<style lang="scss" scoped>
.app-container {
  .card-content {}
}

.static-text {
  padding-top: 10px;
  margin-left: 15px;
  padding-bottom: 5px;
  font-weight: bold;
  font-size: large;
  font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
}
</style>

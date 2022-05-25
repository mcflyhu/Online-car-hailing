<template>
  <div class="app-container">
    <div class="backbtn">
      <el-button circle @click="back">
        <i class="el-icon-back" />
      </el-button>
    </div>
    <el-descriptions class="comment-table" title="评论详情" column="1" border>
      <el-descriptions-item label-class-name="comment-label" content-class-name="comment-item">
        <template slot="label">
          <i class="el-icon-user-solid" />
          司机姓名
        </template>
      </el-descriptions-item>

      <el-descriptions-item label-class-name="comment-label" content-class-name="comment-item">
        <template slot="label">
          <i class="el-icon-mobile-phone" />
          司机电话号码
        </template>
      </el-descriptions-item>

      <el-descriptions-item label-class-name="comment-label" content-class-name="comment-item">
        <template slot="label">
          <i class="el-icon-star-off" />
          行程满意度
        </template>
        <el-rate v-model="satisfaction" disabled text-color="#ff9900" />
      </el-descriptions-item>

      <el-descriptions-item label-class-name="comment-label" content-class-name="comment-item">
        <template slot="label">
          <i class="el-icon-star-on" />
          车辆舒适度
        </template>

      </el-descriptions-item>

      <el-descriptions-item label-class-name="comment-label" content-class-name="comment-item">
        <template slot="label">
          <i class="el-icon-star-off" />
          司机服务分
        </template>

      </el-descriptions-item>
    </el-descriptions>

    <div class="user-comment">
      <h4 class="comment-header">用户评论</h4>
      <span class="comment-content">
        我是猪？
      </span>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
    }
  },
  methods: {
    back() {
      this.$router.go(-1)
    }
  }
}
</script>

<style lang="scss" scoped>
.app-container {
  margin-top: 5px;
  margin-left: 20px;
  margin-right: 20px;

  .backbtn {}

  .comment-table {
    padding-top: 30px;

    .comment-label {
      height: 50px;
      font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
      font-size: medium;
      background: blue;
    }

    .comment-item {
      height: 50px;
      font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
      font-size: medium;
      background: rgb(47, 157, 158);
    }
  }

  .user-comment {
    margin-top: 50px;
    background: azure;
    border: 5ch;

    .comment-header {
      color: darkorchid;
      font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
      font-size: large;
    }

    .comment-content {
      color: rgb(68, 42, 42);
      font-family: Arial, Helvetica, sans-serif;
    }
  }
}
</style>

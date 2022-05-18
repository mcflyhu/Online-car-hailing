<template>
  <div class="components-container">
    <el-row gutter="20">
      <el-col>
        <div class="driver-information">
          <span style="margin-left:1%;line-height:40px">司机照片：
            <img class="pic-avatar" src="@/assets/images/driver.jpg" alt="404" width="100px" height="100px">
          </span>
          <span style="margin-left: 3%">姓名：李xx</span>
        </div>
      </el-col>
    </el-row>

    <el-row gutter="20">
      <div class="rate-travel">
        <el-col span="5">
          <span style="margin-left: 3%;margin-top: 2%" class="demonstration">行程满意度：</span>
        </el-col>
        <el-col span="15">
          <el-rate v-model="value" style="margin-left: 6%;margin-top: 2%" :colors="['#99A9BF', '#F7BA2A', '#FF9900']" show-text />
        </el-col>
      </div>
    </el-row>

    <el-row gutter="20">
      <div class="rate-car">
        <el-col span="5">
          <span style="margin-left: 3%;margin-top: 2%" class="demonstration">车辆舒适度：</span>
        </el-col>
        <el-col span="15">
          <el-rate v-model="value1" style="margin-left: 6%;margin-top: 2%" :colors="['#99A9BF', '#F7BA2A', '#FF9900']" show-text />
        </el-col>
      </div>
    </el-row>

    <el-row gutter="20">
      <div class="rate-driver">
        <el-col span="5">
          <span style="margin-left: 3%;margin-top: 2%" class="demonstration">司机评分：</span>
        </el-col>
        <el-col span="15">
          <el-rate v-model="value2" style="margin-left: 6%;margin-top: 2%" :colors="['#99A9BF', '#F7BA2A', '#FF9900']" show-text />
        </el-col>
      </div>
    </el-row>

    <el-row gutter="20">
      <el-col>
        <el-card class="comment-card">
          <div class="comment-text">
            <el-input v-model="textarea" type="textarea" :rows="3" placeholder="对该司机做出评价吧！" />
          </div>

          <div class="comment-button">
            <el-button type="success" round style="margin-top:5%">提交评价</el-button>
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
      value: null,
      value1: null,
      value2: null,
      textarea: ''
    }
  }
}
</script>

<style scoped>
/deep/.el-rate__icon {
  font-size: 30px;
}

.el-row {
  margin-bottom: 20px;
}

.components-container {
  background-color: rgba(104, 251, 78, 0.251);
}

.comment-card {
  background: #e5e9f2;
}

.comment-button{
  text-align: center;
}
</style>


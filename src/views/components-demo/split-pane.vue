<template>
  <div class="components-container" style="line-height:10px">
    <el-card class="comment-card">
      <div slot="header" class="clearfix">
        <span>评论1</span>
      </div>
      <div class="comment-content" style="line-height:35px">
        <span>
          行程满意度：
          <el-rate v-model="value" disabled show-score text-color="#ff9900" score-template="{value}" />
        </span>
        <span>
          车辆舒适度：
          <el-rate v-model="value1" disabled show-score text-color="#ff9900" score-template="{value}" />
        </span>
        <span>
          司机得分：
          <el-rate v-model="value2" disabled show-score text-color="#ff9900" score-template="{value}" />
        </span>
        <span>
          该用户未及时做出具体评价！
        </span>
      </div>
    </el-card>
    <el-card class="comment-card">
      <div slot="header" class="clearfix">
        <span>评论2</span>
      </div>
      <div class="comment-content" style="line-height:50px">
        <span>
          行程满意度：
          <el-rate v-model="value" disabled show-score text-color="#ff9900" score-template="{value}" />
        </span>
        <span>
          车辆舒适度：
          <el-rate v-model="value1" disabled show-score text-color="#ff9900" score-template="{value}" />
        </span>
        <span>
          司机得分：
          <el-rate v-model="value2" disabled show-score text-color="#ff9900" score-template="{value}" />
        </span>
        <span>
          该用户未及时做出具体评价！
        </span>
      </div>
    </el-card>
  </div>
</template>

<script>

export default {
  data() {
    return {
      value: 3.7,
      value1: 5.0,
      value2: 4.5
    }
  }
}
</script>

<style  scoped>
.components-container {
  position: relative;
  height: 100vh;
}

.left-container {
  background-color: #F38181;
  height: 100%;
}

.right-container {
  background-color: #FCE38A;
  height: 200px;
}

.top-container {
  background-color: #FCE38A;
  width: 100%;
  height: 100%;
}

.bottom-container {
  width: 100%;
  background-color: #95E1D3;
  height: 100%;
}
</style>

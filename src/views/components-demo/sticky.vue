<template>
  <div style="margin-top:60px">
    <el-descriptions title="订单需求详情" class="main-margin" :cloumn="3" :size="size" border>
      <el-descriptions-item>
        <template slot="label">
          <i class="el-icon-user" />
          用户名
        </template>
        Mick
      </el-descriptions-item>

      <el-descriptions-item>
        <template slot="label">
          <i class="el-icon-s-custom" />
          乘客姓名
        </template>
        李xx
      </el-descriptions-item>

      <el-descriptions-item>
        <template slot="label">
          <i class="el-icon-phone-outline" />
          手机尾号
        </template>
        4021
      </el-descriptions-item>

      <el-descriptions-item>
        <template slot="label">
          <i class="el-icon-map-location" />
          出发地
        </template>
        西南交通大学犀浦校区
      </el-descriptions-item>

      <el-descriptions-item>
        <template slot="label">
          <i class="el-icon-map-location" />
          目的地
        </template>
        春熙路
      </el-descriptions-item>

      <el-descriptions-item>
        <template slot="label">
          <i class="el-icon-place" />
          乘客距离：
        </template>
        1.3 km
      </el-descriptions-item>

      <el-descriptions-item>
        <template slot="label">
          <i class="el-icon-place" />
          乘客距离：
        </template>
        1.3 km
      </el-descriptions-item>

      <el-descriptions-item>
        <template slot="label">
          <i class="el-icon-truck" />
          预选车型
        </template>
        经济轿车
      </el-descriptions-item>

      <el-descriptions-item>
        <template slot="label">
          <i class="el-icon-chat-line-square" />
          需求备注
        </template>
        有两个行李箱需要放置
      </el-descriptions-item>

      <el-descriptions-item>
        <template slot="label">
          <i class="el-icon-time" />
          预计时间
        </template>
        30min
      </el-descriptions-item>

      <el-descriptions-item>
        <template slot="label">
          <svg-icon icon-class="money" />
          用户信用分
        </template>
        <el-rate v-model="value" disabled show-score text-color="#ff9900" score-template="{value}" />
      </el-descriptions-item>
    </el-descriptions>
    <div class="button-group">
      <el-button style="margin-left:100px,margin-top:20px" size="size" type="primary" icon="el-icon-back" round>
        返回
      </el-button>
      <el-button style="margin-left:100px,margin-top:20px" size="size" type="success" icon="el-icon-check" round>
        确认接单
      </el-button>
    </div>
  </div>
</template>

<script>
export default {

  data() {
    return {
      value: 4.9,
      size: 'medium'
    }
  }
}
</script>

<style scoped>
.components-container div {
  margin: 10px;
}

.time-container {
  display: inline-block;
}

.button-group {
  text-align: center;
}
</style>

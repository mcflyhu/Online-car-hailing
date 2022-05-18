<template>
  <div class="body-container">
    <el-row>
      <el-col>
        <div class="order-search-header">
          <el-input v-model="orderid" class="order-search-input" placeholder="订单编号" clearable prefix-icon="search" />
          <el-button type="primary" icon="el-icon-search" style="margin-left:10px">查询订单</el-button>
          <el-button icon="el-icon-refresh" circle />

          <div class="order-date-picker">
            <span class="text">按日期查询</span>
            <el-date-picker v-model="selectdate" style="margin-left:10px" type="date" placeholder="选择日期" />
          </div>
        </div>
      </el-col>
    </el-row>

    <el-row>
      <el-col span="22" push="1">
        <div class="order-list">
          <el-table :data="tabledata" style="width:100%" height="250" border>
            <el-table-column label="订单编号" prop="orderid" />
            <el-table-column label="日期" prop="date" sortable />
            <el-table-column label="支付金额" prop="bill" />
            <el-table-column label="行驶时间" prop="duration" />
            <el-table-column label="订单状态">
              <el-tag :type="state" effect="dark">已完成</el-tag>
            </el-table-column>
            <el-table-column label="操作">
              <el-button type="primary" plain icon="el-icon-view" @click="orderdescription">查看</el-button>
            </el-table-column>
          </el-table>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  data() {
    return {
      orderid: '',
      selectdate: '',
      status: 'success',
      tabledata: [{
        orderid: '1',
        date: '2019-02-01',
        bill: '20',
        state: 'success',
        text: '已完成',
        duration: '30min'
      }, {
        orderid: '2',
        date: '2022-10-21',
        bill: '14',
        state: 'danger',
        text: '未支付',
        duration: '26min'
      }
      ]

    }
  },
  methods: {
    orderdescription() {
      this.$router.push('/order-description')
    }
  }
}
</script>

<style lang="scss" scoped>
.order-search-header {
  margin-left: 50px;
  margin-top: 40px;

  .order-search-input {
    width: 250px;
    max-width: 100%
  }

  .order-date-picker {
    margin-top: 10px;
  }
}

.order-list {
  padding-top: 20px;
}
</style>

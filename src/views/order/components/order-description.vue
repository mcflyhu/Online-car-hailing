<template>
<div class="order-description">
  <el-dialog title="订单详情" :visible.sync="orderdialogvisible">
    <el-button circle @click="back">
      <i class="el-icon-back" />
    </el-button>
    </div>
    <el-descriptions class="order-table" column="2" title="订单详情" border>
      <el-descriptions-item class="table-item">
        <template slot="label">
          <i class="el-icon-tickets" />
          订单号
        </template>
        {{ orderid }}
      </el-descriptions-item>

      <el-descriptions-item class="table-item">
        <template slot="label">
          <i class="el-icon-date" />
          日期
        </template>
        {{ date }}
      </el-descriptions-item>

      <el-descriptions-item class="table-item">
        <template slot="label">
          <i class="el-icon-wallet" />
          支付金额
        </template>
        {{ bill }}
      </el-descriptions-item>

      <el-descriptions-item class="table-item">
        <template slot="label">
          <i class="el-icon-time" />
          行驶时间
        </template>
        {{ duration }}
      </el-descriptions-item>

      <el-descriptions-item class="table-item">
        <template slot="label">
          <i class="el-icon-location" />
          出发地
        </template>
        {{ departure }}
      </el-descriptions-item>

      <el-descriptions-item class="table-item">
        <template slot="label">
          <i class="el-icon-location" />
          目的地
        </template>
        {{ arrival }}
      </el-descriptions-item>

      <el-descriptions-item class="table-item">
        <template slot="label">
          <i class="el-icon-phone-outline" />
          司机联系方式
        </template>
        {{ driverTel }}
      </el-descriptions-item>

      <el-descriptions-item class="table-item">
        <template slot="label">
          <i class="el-icon-truck" />
          所乘车型
        </template>
        {{ carTpye }}
      </el-descriptions-item>

      <el-descriptions-item class="table-item">
        <template slot="label">
          <i class="el-icon-mobile" />
          乘客联系方式
        </template>
        {{ passengerTel }}
      </el-descriptions-item>
    </el-descriptions>
  </el-dialog>
  </div>
</template>

<script>
export default {
  data() {
    return {
      orderid: '',
      date: '',
      bill: '',
      state: '',
      text: '',
      duration: '',
      carTpye: '',
      departure: '',
      arrival: '',
      driverTel: '',
      passengerTel: ''
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
  width: 1000px;
  max-width: 100%;
  margin-top: 15px;
  margin-left: 40px;

  .order-table {
    padding-top: 25px;

    .table-item {
      padding-top: 30px;
      text-align: center;
    }
  }
}
</style>

<template>
  <div class="body-container">
    <el-row>
      <el-col>
        <div class="order-search-header">
          <el-input v-model="orderid" class="order-search-input" placeholder="订单编号" clearable prefix-icon="search" />
          <el-button type="primary" icon="el-icon-search" style="margin-left:10px" @click="handleFilter">
            查询订单
          </el-button>
          <el-button icon="el-icon-refresh" circle @click="getList" />

        <!--
          <div class="order-date-picker">
            <span class="text">按日期查询</span>
            <el-date-picker v-model="selectdate" style="margin-left:10px" type="date" placeholder="选择日期" />
            <el-button icon="el-icon-search" style="margin-left:10px" circle @click="handleCalFilter" />
          </div>
          -->
        </div>
      </el-col>
    </el-row>

    <el-row>
      <el-col span="22" push="1">
        <div class="order-list">
          <el-table v-loading="listLoading" :data="list" style="width:100%" height="250" border>
            <el-table-column label="订单编号">
              <template slot-scope="{row}">
                <span>{{ row.oid }}</span>
              </template>
            </el-table-column>
            <el-table-column label="日期" sortable>
              <template slot-scope="{row}">
                <span>{{ row.odate }}</span>
              </template>
            </el-table-column>
            <el-table-column label="支付金额">
              <template slot-scope="{row}">
                <span>{{ row.omoney }}</span>
              </template>
            </el-table-column>
            <el-table-column label="行驶时间">
              <template slot-scope="{row}">
                <span>{{ row.otime }}</span>
              </template>
            </el-table-column>
            <el-table-column label="订单状态">
              <template slot-scope="{row}">
                <el-tag :type="state" effect="dark">
                  {{ row.ostate }}
                </el-tag>
              </template>
            </el-table-column>
            <el-table-column label="操作">
              <template slot-scope="{row}">
                <el-button type="primary" plain icon="el-icon-view" @click="handleFetchOrder(row)">查看详情</el-button>
              </template>
            </el-table-column>
          </el-table>
        </div>
      </el-col>
    </el-row>

    <el-dialog title="订单" :visible.sync="orderdialogvisible">
      <el-descriptions class="order-table" column="2" title="订单详情" border>
        <el-descriptions-item class="table-item">
          <template slot="label">
            <i class="el-icon-tickets" />
            订单号
          </template>
          {{ selectedOrder.oid }}
        </el-descriptions-item>

        <el-descriptions-item class="table-item">
          <template slot="label">
            <i class="el-icon-date" />
            日期
          </template>
          {{ selectedOrder.odate }}
        </el-descriptions-item>

        <el-descriptions-item class="table-item">
          <template slot="label">
            <i class="el-icon-wallet" />
            支付金额
          </template>
          {{ selectedOrder.omoney }}
        </el-descriptions-item>

        <el-descriptions-item class="table-item">
          <template slot="label">
            <i class="el-icon-time" />
            行驶时间
          </template>
          {{ selectedOrder.otime }}
        </el-descriptions-item>

        <el-descriptions-item class="table-item">
          <template slot="label">
            <i class="el-icon-location" />
            出发地
          </template>
          {{ selectedOrder.odep }}
        </el-descriptions-item>

        <el-descriptions-item class="table-item">
          <template slot="label">
            <i class="el-icon-location" />
            目的地
          </template>
          {{ selectedOrder.odes }}
        </el-descriptions-item>

        <el-descriptions-item class="table-item">
          <template slot="label">
            <i class="el-icon-phone-outline" />
            司机联系方式
          </template>
          {{ selectedOrder.dtel }}
        </el-descriptions-item>

        <el-descriptions-item class="table-item">
          <template slot="label">
            <i class="el-icon-mobile" />
            乘客联系方式
          </template>
          {{ selectedOrder.ptel }}
        </el-descriptions-item>
      </el-descriptions>
      <div slot="footer" class="dialog-footer">
        <el-button circle @click="orderdialogvisible = false">
          <i class="el-icon-back" />
        </el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
import { fetchList, fetchOrder, fetchOrderbyDate } from '@/api/order'
export default {
  data() {
    return {
      orderid: '',
      selectdate: '',
      status: 'success',
      list: [],
      listLoading: true,
      listQuery: {
        date: undefined,
        id: undefined
      },
      orderdialogvisible: false,
      selectedOrder: {}
    }
  },
  created() {
    this.getList()
  },
  methods: {
    async getList() {
      this.listLoading = true
      fetchList(this.listQuery).then(response => {
        this.list = response.data
      })
      this.listLoading = false
    },
    async getOrderbyID(id) {
      this.listLoading = true
      fetchOrder(id).then(response => {
        this.list = null
        this.list = response.data
      })
      this.listLoading = false
    },
    async getOrderbyDate(date) {
      this.listLoading = true
      fetchOrderbyDate(date).then(response => {
        this.list = null
        this.list = response.data
      })
      this.listLoading = false
    },
    handleFetchOrder(row) {
      if (row) {
        this.selectedOrder = null
        this.selectedOrder = row
        this.orderdialogvisible = true
      }
    },
    handleFilter() {
      console.log(this.orderid)
      if (this.orderid === '') {
        this.getList()
      } else {
        console.log(this.orderid)
        this.getOrderbyID(this.orderid)
      }
    },
    handleCalFilter() {
      if (this.selectdate === '') {
        this.getList()
      } else {
        console.log(this.selectdate)
        this.getOrderbyDate(this.selectdate)
      }
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

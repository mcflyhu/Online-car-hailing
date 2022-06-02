<template>
  <div>
    <section class="sec-order">
      <h4 class="column">
        <img src="./components/agora_快速发版-快速上线.svg">
        <p class="name">迅捷网约车</p>
        <i class="close" @click="closeCarsInfo" />
      </h4>
      <header>
        <ul class="info">
          <li class="order-info">
            <p class="order-name">订 单 一</p>
            <img src="./components/出发地和地点.svg">
            <p class="org-name">西南交通大学犀浦校区西南二门</p>
          </li>
          <li class="driver-name">
            <img src="./components/车主服务.svg">
            <p class="driver">接单车主：陈师傅</p>
          </li>
          <li class="car-type">
            <img src="./components/时尚SUV.svg">
            <p class="car">接单车型：SUV</p>
          </li>
          <li class="car-num">
            <img src="./components/车牌号.svg">
            <p class="num">川A-A8888S</p>
          </li>
          <li class="begin-time">
            <img src="./components/时间戳.svg">
            <p class="time-name">2022年6月20日</p>
          </li>
          <li class="take_money">
            <img src="./components/花费.svg">
            <p class="money-name">预计花费：200元</p>
          </li>
        </ul>
      </header>
      <footer>
        <a href="javascript:void(0);" class="cancel_orders" @click="cancelSuccess">取消订单</a>
      </footer>
    </section>
    <!-- <section class="sec-order order-details" >
        </section> -->
  </div>
</template>

<script>

export default {
    name: 'OrderItems',
    props: {
        height: {
            type: String,
            default: '800px'
        },
        // 定时器
        timer: null
    },
    methods: {
        cancelSuccess() {
            this.$confirm('此操作将取消当前订单, 是否继续?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          this.$message({
            type: 'success',
            message: '取消成功!'
          })
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '请继续等待'
          })
        })
        }
    }
}
</script>
<style lang="scss">
@import "./orderList.scss"
</style>

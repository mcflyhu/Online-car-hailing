import VueAMap from '@vuemap/vue-amap'
<template>
  <div class="index">
    <!--地图-->
    <Map_index />
    <div id="Passenger-Info">
      <ul class="detail_info">
        <li class="passenger_name">
          <sub>乘客姓名：</sub>
          <strong>陈先生</strong>
        </li>
        <li class="passenger_score">
          <sub>用户信用分：</sub>
          <el-rate
            v-model="value"
            class="star"
            disabled
            show-score
            text-color="#ff9900"
            score-template="{value}"
          />
        </li>
        <li class="passenger-number">
          <sub>电话号码：</sub>
          <strong>15888888888</strong>
        </li>
        <li class="begin-dis">
          <sub>当前您距离目的地还有</sub>
          <strong>60</strong>
          <sub>km</sub>
        </li>
        <li class="driver-time1">
          <sub>大约还需要</sub>
          <strong>30</strong>
          <sub>分钟</sub>
        </li>
        <li class="get_btn">
          <el-button type="primary" @click="comback">结束订单</el-button>
        </li>
        <li class="get_location"><a href="javascrit:void();" @click="selfLocation">
          <img src="./components/定位-定位.svg">
        </a>
        </li>
        <li class="warning_icon" @click="getWarning">
          <i class="el-icon-warning" />
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import Map_index from '../amap/index.vue'
export default {
    name: 'WalkingPre',
    components: { Map_index },
    data() {
        return {
            value: 5,
            timer1: ''
        }
    },
    mounted() {
        this.timer = setInterval(this.getRoutes, 1000)
    },
    methods: {
        getRoutes() {
            console.log(111)
            if (this.$store.state.location.myLocation.location != null) {
                this.$store.commit('routes/SET_DRIVING')
                clearInterval(this.timer)
            }
        },
        selfLocation() {
            this.$store.commit('location/SELF_LOCATION')
        },
        comback() {
            this.$router.replace({ name: 'driver' })
        },
        getWarning() {
            this.$alert('当前您正处于危险情况，现已将情况发送至后台，等待处理', '警告', {
                showConfirmButton: false
            })
            this.timer1 = setInterval(this.closeDown, 10000)
        },
        closeDown() {
            clearInterval(this.timer1)
            const messageBox = document.getElementsByClassName('el-message-box__wrapper')
            const model = document.getElementsByClassName('v-modal')
            if (messageBox) {
                messageBox[0].parentNode.removeChild(messageBox[0])
                model[0].parentNode.removeChild(model[0])
            }
        }
    }
    // <!--是更改本类的值-->
    // watch:{
    //   "$route":{
    //     handler(newValue){
    //       const routerName = newValue.name;
    //       this.show = routerName=="Index"?false:true;
    //     }
    //   }
    // }
}
</script>
<style lang="scss">
.amap-page-container {
    height: 100vh;
}

@import "./pre_driving.scss"
</style>

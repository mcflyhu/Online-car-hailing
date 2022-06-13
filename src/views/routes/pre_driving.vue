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
          <sub>当前您距离上车地还有</sub>
          <strong>500</strong>
          <sub>m</sub>
        </li>
        <li class="driver-time">
          <p v-if="show_time">
            <sub>请您于</sub>
            <strong>5</strong>
            <sub>分钟内到达！现在还有</sub>
            <strong>{{ remain_min }}</strong>
            <sub>分钟</sub>
            <strong>{{ remain_second }}</strong>
            <sub>秒</sub>
          </p>
          <p v-if="!show_time">
            您已超时！请尽快接到乘客！
          </p>
        </li>
        <li class="get_btn">
          <el-button type="primary" @click="comback">我已接到乘客</el-button>
        </li>
        <li class="get_location"><a href="javascrit:void();" @click="selfLocation">
          <img src="./components/定位-定位.svg">
        </a>
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
            remain_min: 1,
            remain_second: 0,
            timer1: '',
            show_time: true
        }
    },
    mounted() {
        this.timer = setInterval(this.getRoutes, 1000)
        this.timer1 = setInterval(this.changeTime, 1000)
    },
    methods: {
        getRoutes() {
            console.log(111)
            if (this.$store.state.location.myLocation.location != null) {
                this.$store.commit('routes/SET_DRIVING')
                clearInterval(this.timer)
            }
        },
        changeTime() {
            if (this.remain_second === 0) {
                this.remain_min--
                this.remain_second = 59
            } else {
                this.remain_second--
            }
            if (this.remain_second === 0 && this.remain_min === 0) {
                clearInterval(this.timer1)
                this.show_time = false
            }
        },
        selfLocation() {
            this.$store.commit('location/SELF_LOCATION')
        },
        comback() {
            this.$router.replace({ name: 'driver_driving' })
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

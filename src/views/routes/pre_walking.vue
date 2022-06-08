import VueAMap from '@vuemap/vue-amap'
<template>
  <div class="index">
    <!--地图-->
    <Map_index />
    <div id="Driver-Info">
      <h1 class="driver_img">
        <img src="./components/OIP-C (1).jpg">
      </h1>
      <ul class="detail_info">
        <li class="driver_name">
          <sub>接单司机：</sub>
          <strong>陈师傅</strong>
        </li>
        <li class="driver_score">
          <sub>车主评分：</sub>
          <el-rate
            v-model="value"
            class="star"
            disabled
            show-score
            text-color="#ff9900"
            score-template="{value}"
          />
        </li>
        <li class="car-name">
          <sub>配车：</sub>
          <strong>特斯拉ModelX</strong>
        </li>
        <li class="car-num">
          <sub>车牌号：</sub>
          <strong>川A-A8888</strong>
        </li>
        <li class="driver-number">
          <sub>电话号码：</sub>
          <strong>15888888888</strong>
        </li>
        <li class="begin-dis">
          <sub>当前您距离上车地还有</sub>
          <strong>500</strong>
          <sub>m</sub>
        </li>
        <li class="driver-dis">
          <sub>当前车主距离您</sub>
          <strong>1.0</strong>
          <sub>km</sub>
        </li>
        <li class="get_btn">
          <el-button type="primary" @click="comback">我已上车</el-button>
        </li>
        <li class="get_location"><a href="javascrit:void();" @click="selfLocation">
          <img src="./components/定位-定位.svg">
        </a>
        </li>
        <i class="el-icon-warning" />
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
            value: 5
        }
    },
    mounted() {
        this.timer = setInterval(this.getRoutes, 1000)
    },
    methods: {
        getRoutes() {
            console.log(111)
            if (this.$store.state.location.myLocation.location != null) {
                this.$store.commit('routes/SET_WALKING')
                clearInterval(this.timer)
            }
        },
        getWarning() {
            this.$alert('当前您正处于危险情况，现已将情况发送至后台，等待处理', '警告', {
                showConfirmButton: false
            })
            this.timer1 = setInterval(this.closeDown, 10000)
        },
        selfLocation() {
            this.$store.commit('location/SELF_LOCATION')
        },
        comback() {
            this.$router.replace({ name: 'pass_driving' })
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

@import "./index.scss"
</style>

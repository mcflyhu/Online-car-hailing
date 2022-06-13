import VueAMap from '@vuemap/vue-amap'
<template>
  <div class="amap-page-container">
    <el-amap vid="amapDemo" :amap-manager="amapManager" :events="events" class="amap-demo" />
    <!-- <div class="toolbar">
      <button @click="addCircle()">添加标号</button>
      <button @click="changeRadius()">更改 range </button>
      <button @click="addInfoWindow()">信息窗体 </button>
    </div> -->
  </div>
</template>

<!-- <style scoped>
.amap-demo {
  width: 100%;
  height: 96vh;
}
</style> -->

<script>
import { AMapManager, lazyAMapApiLoaderInstance } from 'vue-amap'
import { getLonLan } from './common'
import { SelfLocation, getMyLocation } from './location'
import { getMyDrivingRoute } from './driving'
import { getMyWalkingRoute } from './walking'
const amapManager = new AMapManager()
export default {
    name: 'MapIndex',
    data() {
        const _this = this
        return {
            map: null,
            amapManager,
            center: [114.246754, 22.721943],
            zoom: 18,
            self_lng: '',
            self_lat: '',
            beginPoint: ['', ''],
            endPoint: ['', ''],
            events: {
                init(o) {
                    lazyAMapApiLoaderInstance.load().then(() => {
                        _this.initMap()
                    })
                }
            },
            // 自身定位
            circle: []
            // timer1: ''
        }
    },
    // mounted() {
    //     this.timer1 = setInterval(this.selfLocation, 1000);
    // },
    // beforeDestroy() {
    //     clearInterval(this.timer1);
    // },
    watch: {
        '$store.state.location.selfLocation': {
            handler() {
                this.selfLocation()
                this.$store.commit('location/SET_LOCATION', location)
            }
        },
        '$store.state.routes.driving': {
            handler() {
                this.getMyDrivingRoute()
            }
        },
        '$store.state.routes.walking': {
            handler() {
                this.getMyWalkingRoute()
            }
        }
    },
    methods: {
        /* 初始化地图 */
        initMap() {
            this.map = amapManager.getMap()
            // 地图初始化完成回调
            this.$emit('callbackComponent', {
                function: 'loadMap'
            })
            // 自身定位
            this.selfLocation()
            // getLonLan();
        },
        /** 存储数据 */
        saveData(params) {
            if (this[params.key]) {
                this[params.key] = params.value
            }
        },
        selfLocation() {
            SelfLocation({
                map: this.map,
                complete: (val) => this.selfLocationComplete(val)
            })
        },
        /** 自身定位 成功回调 */
        selfLocationComplete(data) {
            // console.log(333)
            var location = { 'address': data.formattedAddress, 'location': [data.position.lng, data.position.lat] }
            this.$store.commit('location/SET_LOCATION', location)
            this.self_lng = data.position.lng
            this.self_lat = data.position.lat
            const json = {
                radius: 4,
                color: '#393e43',
                strokeOpacity: '0.2',
                strokeWeight: '30'
            }
            json.center = [this.self_lng, this.self_lat]
            this.circle.push(json)
        },

        // 获取指定地址的经纬度
        getMyLocation() {
            getMyLocation({
                address: '季柳园东南门',
                map: this.map,
                complete: (val) => this.getMyLocationComplete(val)
            })
        },
        // 获取经纬度的回调函数
        getMyLocationComplete(data) {
            // console.log(data)
            self.beginPoint = [data.geocodes[0].location.lng, data.geocodes[0].location.lat]
            this.getPoing()
            // console.log(self.beginPoint)
        },
        getPoing() {
            var that = this
            this.map.on('click', function(e) {
                this.endPoint = [getLonLan(e).lng, getLonLan(e).lat]
                // console.log(this.endPoint)
                that.getMyDrivingRoute()
            })
        },
        // 获取驾车路径
        getMyDrivingRoute() {
            // console.log(111)
            console.log(this.$store.state.order.get_done)
            getMyDrivingRoute({
                map: this.map,
                beginPoint: this.$store.state.location.myLocation.location,
                endPoint: [103.98436, 30.763859]
                // beginPoint:this.beginPoint,
                // endPoint:this.endPoint
            })
            this.map.setZoom(16)
        },
        // 获取步行路径
        getMyWalkingRoute() {
            // console.log(111)
            getMyWalkingRoute({
                map: this.map,
                beginPoint: this.$store.state.location.myLocation.location,
                endPoint: [103.98436, 30.763859]
                // beginPoint:this.beginPoint,
                // endPoint:this.endPoint
            })
            // this.map.setCenter([this.getCenter().lng+0.1,this.getCenter().lat+0.1])
            this.map.setZoom(16)
        }
    }
}
</script>
<style lang="scss">
.amap-page-container {
    height: 100%;
}
</style>


import VueAMap from '@vuemap/vue-amap'
<template>
    <div class="amap-page-container">
        <el-amap vid="amapDemo" :amap-manager="amapManager" :events="events" class="amap-demo">
        </el-amap>
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
import { AMapManager, lazyAMapApiLoaderInstance } from "vue-amap"
import { getLonLan } from "./common"
import { SelfLocation } from "./location"
let amapManager = new AMapManager();
export default {
    name: "Map_index",
    data() {
        const _this = this;
        return {
            map: null,
            amapManager,
            center: [114.246754, 22.721943],
            zoom: 18,
            self_lng: "",
            self_lat: "",
            events: {
                init(o) {
                    lazyAMapApiLoaderInstance.load().then(() => {
                        _this.initMap();
                    });
                }
            },
            // 自身定位
            circle: [],
        }
    },
    methods: {
        /*初始化地图 */
        initMap() {
            this.map = amapManager.getMap();
            // 地图初始化完成回调
            this.$emit("callbackComponent", {
                function: "loadMap"
            })
            // 自身定位
            this.selfLocation();
            //getLonLan();
        },
        /** 存储数据 */
        saveData(params) {
            if (this[params.key]) {
                this[params.key] = params.value;
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
            //console.log(333)
            this.self_lng = data.position.lng;
            this.self_lat = data.position.lat;
            const json = {
                radius: 4,
                color: "#393e43",
                strokeOpacity: "0.2",
                strokeWeight: "30"
            }
            json.center = [this.self_lng, this.self_lat];
            this.circle.push(json)
        },
    },
    watch: {
        "$store.state.location.selfLocation": {
            handler() {
                this.selfLocation();
            }
        }
    }
    // methods: {
    //   getLocation() {
    //     let _that = this
    //     let geolocation = location.initMap('map-container') // 定位
    //     AMap.event.addListener(geolocation, 'complete', result => {
    //       console.log(result)
    //       _that.lat = result.position.lat
    //       _that.lng = result.position.lng
    //       _that.location = result.formattedAddress
    //       console.log(location)
    //     })
    //   },
    //   addCircle() {
    //     let map = amapManager.getMap();
    //     let circle = new AMap.CircleMarker({
    //       center: [121.329402, 31.228667],
    //       radius: this.radius,
    //       strokeColor: '#38f',
    //       strokeOpacity: '0.8',
    //       strokeWeight: 1,
    //       fillColor: '#38f',
    //       fillOpacity: '0.2'
    //       //map:map //写法一
    //     })
    //     circle.setMap(map); //写法二
    //     this.currentCircle = circle;
    //   },
    //   changeRadius() {
    //     this.radius += 10;
    //     this.currentCircle.setRadius(this.radius);
    //   },
    //   addInfoWindow() {
    //     let map = amapManager.getMap();
    //     AMapUI.loadUI(['overlay/SimpleInfoWindow'], function (SimpleInfoWindow) {
    //       var infoWindow = new SimpleInfoWindow({
    //         infoTitle: '<strong>最佳上车位置</strong>',
    //         infoBody: '<p>西南交通大学犀浦校区西南一门</p>'
    //       });
    //       infoWindow.open(map, map.getCenter());
    //     })
    //   }
    // }
};
</script>
<style lang="scss">
.amap-page-container {
    height: 100vh;
}
</style>





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
//import location from "../../plugin/aMap.js"
let amapManager = new AMapManager();
export default {
    name: "Map_index",
    data() {
        return {
            map: null,
            //zoom: 12,
            //center: [121.329402, 31.228667],
            amapManager,
            // events: {
            //   init(o) {
            //     //this.getLocation();
            //     AMapUI.loadUI(['overlay/SimpleMarker'], function (SimpleMarker) {
            //       const marker = new SimpleMarker({
            //         iconLabel: {
            //           innerHTML: '<i>1</i>', //设置文字内容
            //           style: {
            //             color: '#fff' //设置文字颜色
            //           }
            //         },
            //         iconStyle: 'red',
            //         map: o,
            //         position: o.getCenter()

            //       })
            //       //marker.setMap(o);

            //     })

            //   }

            // },
            // radius: 100,
            // currentCircle: null
        }
    },
    mounted() {
        lazyAMapApiLoaderInstance.load().then(() => {
            this.map = new AMap.Map('amapDemo', {
                center: new AMap.LngLat(121.59996, 31.197646),
                zoom: 11,
            })
        });
    },
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





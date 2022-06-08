import Vue from 'vue'

import AMap from 'vue-amap'
Vue.use(AMap)
let geolocation = null
export function SelfLocation(params) { // { map: "", current: ""}
    if (!geolocation) {
        geolocation = new AMap.Geolocation({
            showMarker: true,
            showButton: false,
            enableHighAccuracy: true, // 是否使用高精度定位，默认:true
            timeout: 10000, // 超过10秒后停止定位，默认：5s
            zoomToAccuracy: true // 定位成功后是否自动调整地图视野到定位点
        })
    }
    params.map.addControl(geolocation)
    geolocation.getCurrentPosition(function(status, result) {
        if (status === 'complete') {
            console.log(111)
     }
    })
    if (params.complete && typeof params.complete === 'function') {
        AMap.event.addListener(geolocation, 'complete', params.complete) // 定位成功
    }
    if (params.error && typeof params.error === 'function') {
        AMap.event.addListener(geolocation, 'error', params.error) // 定位失败
    }
}

let geocoder = null
export function getMyLocation(params) {
    AMap.plugin('AMap.Geocoder', function() {
        if (!geocoder) {
            geocoder = new AMap.Geocoder({
                city: '全国' // 城市设为北京，默认：“全国”
            })
        }
        console.log(params)
        var marker = new AMap.Marker()
        geocoder.getLocation(params.address, function(status, result) {
            if (status === 'complete' && result.geocodes.length) {
                var lnglat = result.geocodes[0].location
                marker.setPosition(lnglat)
                params.map.add(marker)
                params.map.setFitView(marker)
            } else {
                console.log('根据地址查询位置失败')
                console.log(result)
            }
        })
        if (params.complete && typeof params.complete === 'function') {
            AMap.event.addListener(geocoder, 'complete', params.complete)
        }
        if (params.error && typeof params.error === 'function') {
            AMap.event.addListener(geocoder, 'error', params.error)
        }
    })
}

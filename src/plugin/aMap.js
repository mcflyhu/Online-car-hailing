import Vue from 'vue'

import AMap from 'vue-amap'
Vue.use(AMap)
window._AMapSecurityConfig = {
    securityJsCode: '8fb8f2febc66d2ea0ab90ea92dd2ca36'
}
AMap.initAMapApiLoader({
    key: 'e09e031adcab823f7942f3cdbf1ec01d',
    plugin: ['AMap.Autocomplete', 'AMap.PlaceSearch', 'AMap.Scale', 'AMap.OverView', 'AMap.ToolBar', 'AMap.MapType', 'AMap.PolyEditor', 'AMap.Circle', 'AMap.Geolocation', 'AMap.Geocoder', 'AMap.Driving', 'AMap.Walking'],
    v: '1.4.15',
    uiVersion: '1.0.11'
})

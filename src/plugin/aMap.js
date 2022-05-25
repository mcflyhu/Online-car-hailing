import Vue from "vue";

import AMap from "vue-amap";
Vue.use(AMap);
AMap.initAMapApiLoader({
    key:"edec1eb4eb11a30baa09ff4a3879aa85",
    plugin: ["AMap.Autocomplete",'AMap.PlaceSearch','AMap.Scale','AMap.OverView','AMap.ToolBar','AMap.MapType','AMap.PolyEditor','AMap.Circle','AMap.Geolocation'],
    v:"1.4.15",
    uiVersion:"1.0.11"
});
  
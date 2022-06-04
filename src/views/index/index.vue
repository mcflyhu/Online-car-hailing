import VueAMap from '@vuemap/vue-amap'
<template>

  <div class="index">
    <!--下单-->
    <Orders identity="true" />
    <!--地图-->
    <Map_index />
  </div>
</template>

<script>
import Map_index from '../amap/index.vue'
import Orders from '@c/order/index.vue'
export default {
  name: 'Index',
  components: { Map_index, Orders },
  data() {
    return {
    }
  },
  computed: {
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

#children-view {
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  z-index: 101;
  width: 410px;
  background-color: #313c49;
  -webkit-transition: all .3s ease 0s;
  -moz-transition: all .3s ease 0s;
  -ms-transition: all .3s ease 0s;
  -o-transition: all .3s ease 0s;
  transition: all .3s ease 0s;

  &.open {
    right: -600px;
  }
}
</style>

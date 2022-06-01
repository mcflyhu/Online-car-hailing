import VueAMap from '@vuemap/vue-amap'
<template>

  <div class="index">
    <!--下单-->
    <Orders order = "接收预约" call="接收订单"  identity="false"/>
    <!--地图-->
    <Map_index />
  </div>
</template>

<script>
import Map_index from "../amap/index.vue"
import Orders from "@c/order/index.vue"
export default {
  name: "Index",
  components: { Map_index, Orders },
  data() {
    return {
    }
  },
  computed: {
    show() {
      const route = this.$route;
      // console.log(router);
      return route.name == "Index" ? true : false;
    }
  },

}
</script>
<style lang="scss">
.amap-page-container {
  height: 100vh;
}
</style>
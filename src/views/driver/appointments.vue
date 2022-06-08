import VueAMap from '@vuemap/vue-amap'
<template>
  <div class="A-Map">
    <GetAppointments />
    <Map_index />
  </div>
</template>

<script>
import Map_index from '../amap/index.vue'
import GetAppointments from './getAppointments.vue'
export default {
    name: 'DriverOrder',
    components: { Map_index, GetAppointments },
    data() {
        return {}
    }
}
</script>
<style lang="scss">
@import "./index.scss"
</style>

import VueAMap from '@vuemap/vue-amap'
<template>
    <div class="index-wrap">
       <span @click="user"> 司机信息</span>
    </div>
</template>

<script>
export default {
  name: "Drivers",
    data() {
        return {}
    },
    methods:{
        user(){
            this.$router.push({
                name:"Users"
            })
        }
    }
}
</script>
<style lang="scss">
.index-wrap{
    position: fixed;
    left: 0;
    top: 0;
    right: 0;
    z-index: 100;
}
</style>
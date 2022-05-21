import VueAMap from '@vuemap/vue-amap'
<template>
    <div class="A-Map">
        <Map_index />
        <div id="Order-List">
            <ul>
                <li><i class="icon icon-from"></i></li>
                <li><i class="text">
                        您将从西南交通大学犀浦校区出发
                    </i></li>
            </ul>
        </div>
    </div>
</template>

<script>
import Map_index from "../amap/index.vue"
export default {
    name: "getOrders",
    components: { Map_index },
    data() {
        return {}
    }
}
</script>
<style lang="scss">
#Order-List {
    ul {
        display: inline-block;
    }

    li {
        display: inline-block;
    }

    position: fixed;
    top: 560px;
    border-radius: 1cm;
    bottom: 0;
    right: 600px;
    z-index: auto;
    text-align: center;
    width: 500px;
    background-color: #313c49;
}
</style>
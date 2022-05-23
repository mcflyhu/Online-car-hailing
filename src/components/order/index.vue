<template>
    <div class="Orders">
        <ul class="help-set-safe">
            <li><i class="icon icon-help"></i></li>
            <li><i class="icon icon-set"></i></li>
            <li><i class="icon icon-safe"></i></li>
        </ul>
        <ul class="btn-class">
            <li>
                <a href="http://localhost:9527/#/getOrder" class="order-btn">点击约车</a>
                <a href="javascrit:void();" class="order-btn">点击叫车</a>
            </li>
        </ul>
        <ul class="locate">
            <li><i class="icon icon-locate"></i></li>
            <li><i class="icon icon-user"  @click="jump"></i></li>
            <li><i class="icon icon-cancel"></i></li>
        </ul>
    </div>
</template>

<script>
export default {
    name: "Orders",
    methods:{
        jump(){
            this.$router.replace({
                name:"Dashboard"
            })
        }
    }
}

</script>
<style lang="scss">
@import "./index.scss"
</style>

<template>
    <div>
        <section class="sec-order" >
            <header @click="getCasrInfo">
                <ul class="info">
                    <li class="order-logo">
                        <p class="name">订 单 一</p>
                        <img src="./components/小车-的士-计程车.svg">
                        <p class="order-style">叫车订单</p>
                    </li>
                    <li class="Origin">
                        <img src="./components/出发地和地点.svg">
                        <p class="org-name">西南交通大学犀浦校区西南二门</p>
                    </li>
                    <li class="destination">
                        <img src="./components/icon_目的地.svg">
                        <p class="des-name">天府软件园D区</p>
                    </li>
                    <li class="recommand">
                        <img src="./components/推荐.svg">
                        <p class="remd">推荐指数:</p>
                        <ul class="remd-score active-li-5">
                            <li></li>
                            <li></li>
                            <li></li>
                            <li></li>
                            <li></li>
                            <li></li>
                            <li></li>
                            <li></li>
                            <li></li>
                            <li></li>
                        </ul>
                    </li>
                </ul>
            </header>
            <footer>
                <a href="javascript:void(0);" class="take_orders"  @click="submitSuccess">点击接单</a>
            </footer>
        </section>
        <section class="sec-order orders-detail" :style="'height:' + height" v-if="orders_info_show">
            <h4 class="column">
                <img src="./components/agora_快速发版-快速上线.svg">
                <p class="name">迅捷网约车</p>
                <i class="close" @click="closeCarsInfo"></i>
            </h4>
            <header>
                <ul class="info">
                    <li class="order-logo">
                        <p class="name">订 单 一</p>
                        <img src="./components/小车-的士-计程车.svg">
                        <p class="order-style">叫车订单</p>
                    </li>
                    <li class="Origin">
                        <img src="./components/出发地和地点.svg">
                        <p class="org-name">西南交通大学犀浦校区西南二门</p>
                    </li>
                    <li class="destination">
                        <img src="./components/icon_目的地.svg">
                        <p class="des-name">天府软件园D区</p>
                    </li>
                    <li class="distance">
                        <img src="./components/确定点距离.svg">
                        <p class="dis-num">出发地距您2km</p>
                    </li>
                    <li class="distance">
                        <img src="./components/距离路径.svg">
                        <p class="dis-num">总行程25.7km</p>
                    </li>
                    <li class="profit">
                        <img src="./components/盈利.svg">
                        <p class="pro-num">
                            <sub>预估盈利</sub>
                            <strong>55</strong>
                            <sub>元</sub>
                        </p>
                    </li>
                    <li class="recommand">
                        <img src="./components/推荐.svg">
                        <p class="remd">推荐指数:</p>
                        <ul class="remd-score active-li-5">
                            <li></li>
                            <li></li>
                            <li></li>
                            <li></li>
                            <li></li>
                            <li></li>
                            <li></li>
                            <li></li>
                            <li></li>
                            <li></li>
                        </ul>
                    </li>
                </ul>
            </header>
            <div class="clause-dec">
                <span class="pull-left">参保《全面保障服务》行车更放心</span>
                <i class="current"></i>
            </div>
            <a href="javascript: void(0);" class="order-btn" @click="submitSuccess">接收订单</a>
        </section>

        <!-- <section class="sec-order order-details" >
        </section> -->
    </div>
</template>

<script>
export default {
    name: "OrderItems",
    props: {
        height: {
            type: String,
            default: "300px"
        },
        orders_info_show: false,
        // 定时器
        timer: null,
    },
    methods: {
        closeCarsInfo() {
            this.orders_info_show = false;
            this.cars_info_height = 0;
        },
        getCasrInfo() {
            this.openCarsInfo();
        },
        openCarsInfo() {
            // 高度计算
            const viewHeight = document.documentElement.clientHeight || document.body.clientHeight;
            const height = viewHeight - 200;
            // 打开信息
            this.orders_info_show = true;
            // 定时器
            if (this.timer) { clearTimeout(this.timer); }  // 防止连续点击，开启多个定时器
            this.timer = setTimeout(() => {
                this.height = `${height}px`;
                clearTimeout(this.timer);
            }, 10)
        },
        submitSuccess() {
            this.$message('接单成功！即将跳转页面...');
             if (this.timer) { clearTimeout(this.timer); }  // 防止连续点击，开启多个定时器
            this.timer = setTimeout(() => {
                clearTimeout(this.timer);
            }, 10)
            this.$router.replace({
                name:"/"
            })
        }
    }
}
</script>
<style lang="scss">
@import "./index.scss"
</style>

<template>
    <div>
        <section class="sec-order" >
            <header @click="getOrdersInfo">
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
        getOrdersInfo() {
            this.openOrdersInfo();
        },
        openOrdersInfo() {
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
.sec-order {
    position: relative;
    margin: 30px;
    padding-left: 20px;
    padding-top: 10px;
    padding-bottom: 10px;
    padding-right: 20px;
    background-color: white;
    border-radius: 24px;
    -webkit-box-shadow: 0 0 18px 0 rgba(0, 0, 0, 2);
    -moz-box-shadow: 0 0 18px 0 rgba(0, 0, 0, 2);
    -ms-box-shadow: 0 0 18px 0 rgba(0, 0, 0, 2);
    -o-box-shadow: 0 0 18px 0 rgba(0, 0, 0, 2);
    box-shadow: 0 0 18px 0 rgba(0, 0, 0, 2);

    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    -ms-box-sizing: border-box;
    -o-box-sizing: border-box;
    box-sizing: border-box;
    width: 455px;
    height: 300px;

    .header {
        display: flex;

        h4,
        p {
            flex: 1;
        }
    }
}

.order-logo {
    img {
        position: relative;
        left: 82px;
        top: 20px;
    }

    .name {
        position: relative;
        text-align: center;        
        font-size: 32px;
        letter-spacing: 10px;
    }

    .order-style {
        position: relative;
        text-align: center;
        padding-top: 10px;
        line-height: 16px;
        font-size: 16px;
        opacity: .8;
    }
}
.Origin {
    img {
        position: relative;
        left: 82px;
    }

    .org-name {
        position: relative;
        text-align: center;
        left: 35px;
        top: -25px;
        line-height: 16px;
        font-size: 16px;
        opacity: .8;
    }
}

.destination {
    img {
        position: relative;
        left: 82px;
    }

    .des-name {
        position: relative;
        text-align: center;
        top: -25px;
        line-height: 16px;
        font-size: 16px;
        opacity: .8;
    }
}

.distance {
    img {
        position: relative;
        left: 82px;
    }

    .dis-num {
        position: relative;
        text-align: center;
        top: -25px;
        line-height: 16px;
        font-size: 16px;
        opacity: .8;
    }
}

.profit {
    img {
        position: relative;
        left: 82px;
    }

    .pro-num {
        position: relative;
        left: 150px;
        text-align: center;
        top: -25px;
        line-height: 16px;
        font-size: 16px;
        opacity: .8;
        margin-left: 5px;
        display: inline-block;

        strong {
            margin: 0 3px;
            font-size: 22px;
            color: red;
        }

        sub {
            position: relative;
            top: -2px;
        }
    }
}

.recommand {
    img {
        position: relative;
        left: 82px;
    }

    .remd {
        position: relative;
        left: 122px;
        top: -25px;
        line-height: 16px;
        font-size: 16px;
        opacity: .8;
    }

    .remd-score {
        li {
            position: relative;
            left: 202px;
            top: -45px;
            display: inline-block;
            width: 7px;
            height: 24px;
            margin-right: 3px;
            background-color: #e1e1e1;
            border-radius: 100px;
        }

        @for $i from 1 to 10 {
            &.active-li-#{$i} {
                li:nth-child(-n+#{$i}) {
                    background: -webkit-linear-gradient(#17a8fa, #108dd9);
                    background: -moz-linear-gradient(#17a8fa, #108dd9);
                    background: -ms-linear-gradient(#17a8fa, #108dd9);
                    background: -o-linear-gradient(#17a8fa, #108dd9);
                    background: linear-gradient(#17a8fa, #108dd9);
                }
            }
        }

    }
}

.take_orders {
    position: relative;
    display: block;
    border-top: 1px solid #e1e1e1;
    color: $color-main;
    opacity: .8;
    line-height: 35px;

    &::after {
        content: "";
        position: absolute;
        width: 8px;
        height: 8px;
        right: 0;
        top: 50%;
        margin-top: -8px;
        border-top: 1px solid #d6d7d9;
        border-right: 1px solid #d6d7d9;
        transform: -webkit-rotate(45deg);
        transform: -moz-rotate(45deg);
        transform: -ms-rotate(45deg);
        transform: -o-rotate(45deg);
        transform: rotate(45deg);
    }
}

.orders-detail {
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;

    .column {
        position: relative;
        padding: 26px 0 20px;
        margin-bottom: 19px;
        font-size: 20px;
        color: #34393f;
        border-bottom: 1px solid #e1e1e1;

        .name {
            position: absolute;
            top: 5px;
            left: 40px;
        }

        img {
            position: absolute;
            top: 0;
            left: 0;
        }

        .close {
            position: absolute;
            right: 0;
            top: 5px;
            display: block;
            width: 26px;
            height: 26px;
            cursor: pointer;

            &:before,
            &:after {
                content: "";
                position: absolute;
                top: 50%;
                left: 50%;
                height: 20px;
                margin-left: -1px;
                margin-top: -10px;
                border-left: 2px solid #999c9f;
            }

            &:before {
                transform: -webkit-rotate(45deg);
                transform: -moz-rotate(45deg);
                transform: -ms-rotate(45deg);
                transform: -o-rotate(45deg);
                transform: rotate(45deg);
            }

            &:after {
                transform: -webkit-rotate(-45deg);
                transform: -moz-rotate(-45deg);
                transform: -ms-rotate(-45deg);
                transform: -o-rotate(-45deg);
                transform: rotate(-45deg);
            }
        }
    }

    .order-btn {
        position: absolute;
        bottom: -27px;
        left: 50%;
        width: 240px;
        margin-left: -120px;
        display: block;
        widows: 240px;
        height: 64px;
        border-radius: 30px;
        margin-block: 0 2px;
        line-height: 64px;
        text-align: center;
        color: #fff;
        background-color: rgb(48, 97, 162);
        font-size: 26px;
        font-weight: 300;
    }

    .clause-dec {
        @include clearfix;

        i {
            float: right;
            width: 20px;
            height: 20px;
            border-radius: 100px;
            background-color: #cccccc;

            &.current {
                background-color: $color-main;
            }

            &:before {
                content: "";
                display: block;
                width: 8px;
                height: 4px;
                margin: 6px 0 0 5px;
                border-left: 2px solid #fff;
                border-bottom: 2px solid #fff;
                transform: -webkit-rotate(-45deg);
                transform: -moz-rotate(-45deg);
                transform: -ms-rotate(-45deg);
                transform: -o-rotate(-45deg);
                transform: rotate(-45deg);
            }
        }
    }

}
</style>

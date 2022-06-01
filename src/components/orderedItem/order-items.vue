import VueAMap from '@vuemap/vue-amap'
<template>
    <div class="order-item" v-if="vshow">
        <div class="order-swiper-wrap">
            <swiper class="swiper" :options="swiperOption">
                <swiper-slide>
                    <order-items />
                </swiper-slide>
                <swiper-slide >
                    <order-items  />
                </swiper-slide>
                <swiper-slide >
                    <order-items />
                </swiper-slide>
                <swiper-slide >
                    <order-items />
                </swiper-slide>
                <swiper-slide >
                    <order-items />
                </swiper-slide>
                <swiper-slide >
                    <order-items />
                </swiper-slide>
                <swiper-slide >
                    <order-items />
                </swiper-slide>
                <swiper-slide >
                    <order-items />
                </swiper-slide>
                <swiper-slide >
                    <order-items />
                </swiper-slide>
                <swiper-slide >
                    <order-items />
                </swiper-slide>
            </swiper>
            <div class="swiper-button-prev" slot="button-prev"></div>
            <div class="swiper-button-next" slot="button-next"></div>
        </div>
    </div>
</template>

<script>
import { Swiper, SwiperSlide } from 'vue-awesome-swiper'
import OrderItems from "./orderList/index.vue"
import 'swiper/css/swiper.css'
export default {
    name: "getOrderItems",
    components: {
        Swiper,
        SwiperSlide,
        OrderItems
    },
    props: {
        height: {
            type: String,
            default: "300px"
        },
        orders_info_show: false,
        // 定时器
        timer: null,
        vshow:{
            type:Boolean,
            default:false
        }
    },
    data() {
        return {
            swiperOption: {
                slidesPerView: 3,
                spaceBetween: 20,
                pagination: {
                    el: '.swiper-pagination',
                    clickable: true
                },
                navigation: {
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev'
                }
            },
        }
    },
    methods:{
    }
}
</script>
<style lang="scss">
@import "./index.scss"
</style> 
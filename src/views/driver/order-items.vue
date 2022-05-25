import VueAMap from '@vuemap/vue-amap'
<template>
    <div class="order-item">
        <div class="order-swiper-wrap">
            <swiper class="swiper" :options="swiperOption">
                <swiper-slide>
                    <order-items height = "560px"/>
                </swiper-slide>
                <swiper-slide>
                    <order-items />
                </swiper-slide>
                <swiper-slide>
                    <order-items />
                </swiper-slide>
                <swiper-slide>
                    <order-items />
                </swiper-slide>
                <swiper-slide>
                    <order-items />
                </swiper-slide>
                <swiper-slide>
                    <order-items />
                </swiper-slide>
                <swiper-slide>
                    <order-items />
                </swiper-slide>
                <swiper-slide>
                    <order-items />
                </swiper-slide>
                <swiper-slide>
                    <order-items />
                </swiper-slide>
                <swiper-slide>
                    <order-items />
                </swiper-slide>
            </swiper>
            <div class="swiper-button-prev" slot="button-prev"></div>
            <div class="swiper-button-next" slot="button-next"></div>
        </div>

    </div>
</template>

<script>
import Map_index from "../amap/index.vue"
import { Swiper, SwiperSlide } from 'vue-awesome-swiper'
import OrderItems from "@c/orderList/index.vue"
import 'swiper/css/swiper.css'
export default {
    name: "getOrders",
    components: {
        Map_index,
        Swiper,
        SwiperSlide,
        OrderItems
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
            }
        }
    }
}
</script>
<style lang="scss">
@import "./index.scss"
</style>
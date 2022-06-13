import VueAMap from '@vuemap/vue-amap'
<template>
  <div class="order-item">
    <div class="order-swiper-wrap">
      <swiper class="swiper" :options="swiperOption">
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
        <swiper-slide>
          <order-items />
        </swiper-slide>
      </swiper>
      <div slot="button-prev" class="swiper-button-prev" />
      <div slot="button-next" class="swiper-button-next" />
    </div>
  </div>
</template>

<script>
import { Swiper, SwiperSlide } from 'vue-awesome-swiper'
import OrderItems from './orderList.vue'
import 'swiper/css/swiper.css'
export default {
    name: 'GetOrderItems',
    components: {
        Swiper,
        SwiperSlide,
        OrderItems
    },
    props: {
        height: {
            type: String,
            default: '300px'
        },
        orders_info_show: {
            type: Boolean,
            default: false
        },
        // 定时器
        timer: null
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
    },
    methods: {
        comeback() {
            if (this.identity === 'true') {
                this.$router.replace({
                    path: '/'
                })
            } else {
                this.$router.replace({
                    path: '/driver'
                })
            }
        }
    }
}
</script>
<style lang="scss">
@import "./index.scss"
</style>

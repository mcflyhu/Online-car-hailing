import VueAMap from '@vuemap/vue-amap'
<template>
  <div class="order-item">
    <div class="order-swiper-wrap">
      <swiper class="swiper" :options="swiperOption">
        <swiper-slide>
          <order-items height="560px" />
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
import OrderItems from './orderList/index.vue'
import 'swiper/css/swiper.css'
export default {
  name: 'GetOrders',
  components: {
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


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
    <div class="cmb">
      <a href="javascrit:void();" @click="comeback">
        <img src="./components/返回.svg">
      </a>
    </div>

  </div>
</template>

<script>
import { Swiper, SwiperSlide } from 'vue-awesome-swiper'
import OrderItems from './appointmentList/index.vue'
import 'swiper/css/swiper.css'
export default {
  name: 'GetAppointments',
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
  },
  methods: {
    comeback() {
      this.$router.replace({
        name: 'driver'
      })
    }
  }
}
</script>
<style lang="scss">
@import "./index.scss"
</style>


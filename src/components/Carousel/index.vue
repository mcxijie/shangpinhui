<script>
import Swiper from "swiper";

export default {
  name: "Carousel",
  props: ["list"],
  watch: {
    list: {
      immediate: true,
      handler() {
        this.$nextTick(() => {
          var mySwiper = new Swiper(this.$refs.cur, {
            loop: true,
            pagination: {
              el: '.swiper-pagination',
              clickable: true,
            },
            navigation: {
              nextEl: '.swiper-button-next',
              prevEl: '.swiper-button-prev',
            }
          })
        })
      }
    }
  }
}
</script>

<template>
  <div ref="cur" class="swiper-container">
    <div class="swiper-wrapper">
      <div v-for="(carousel,index) in list" :key="carousel.id" class="swiper-slide">
        <img :src="carousel.imgUrl">
      </div>
    </div>
    <!-- 如果需要分页器 -->
    <div class="swiper-pagination"></div>

    <!-- 如果需要导航按钮 -->
    <div class="swiper-button-prev"></div>
    <div class="swiper-button-next"></div>
  </div>
</template>

<style lang="less" scoped>

</style>
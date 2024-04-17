<template>
    <section class="galery container">
        <h1 class="brand-heading">Галерея</h1>
        <swiper
        :spaceBetween="30"
        :centeredSlides="true"
        :autoplay="{
            delay: 5000,
            disableOnInteraction: false,
        }"
        :pagination="{
            clickable: true,
        }"
        :navigation="false"
        :modules="modules"
        class="mySwiper"
        >
        <swiper-slide v-for="(imgsrc, index) in SLIDE_ITEMS" :key="index"
            ><img :src="imgsrc" alt="#"
        /></swiper-slide>
        </swiper>
    </section>
  </template>
  <script>
  // Import Swiper Vue.js components
  import { Swiper, SwiperSlide } from "swiper/vue";
  // Import Swiper styles
  import "swiper/css";
  import "swiper/css/pagination";
  import "swiper/css/navigation";  
  // import required modules
  import { Autoplay, Pagination, Navigation } from "swiper/modules";
  import { mapGetters } from "vuex";
  
  export default {
    components: {
      Swiper,
      SwiperSlide,
    },
    setup() {
      return {
        modules: [Autoplay, Pagination, Navigation],
      };
    },
    computed: {
      ...mapGetters(['SLIDE_ITEMS']),
    },
  };
  </script>
  
  <style lang="scss" scoped>
  .galery {
    padding-bottom: 200px;
  }
  .brand-heading {
    text-align: center;
    text-shadow: 1px 1px 1px rgb(119, 101, 101);
    margin-bottom: 15px;
  }
  .swiper {
    width: 65%;
    height: 470px;
    border-radius: 35px;
    box-shadow: 5px 5px 5px #eeb2b2;
    margin-bottom: 65px;
  }  
  .swiper-slide {
    position: relative;
    height: auto;
    width: 1200px;
    padding-top: 66.67%;
    background: #fff;
    overflow: hidden;
  }  
  .swiper-slide img {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    object-fit: cover;
  }
  @media (max-width: 767px) {
    .swiper {
      width: 85%;
      height: 350px;
      margin-bottom: 35px;
    }
  }
  </style>
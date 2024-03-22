<template>
  <BannerComponent heading='О нас' :class="'about-banner-bgImg'" :isBreadCrumbs='true'/>

  <AboutComponent />

  <FooterComponent />
</template>


<script>
import BannerComponent from '@/components/BannerComponent.vue';
import FooterComponent from '@/components/FooterComponent.vue';
import AboutComponent from '@/components/AboutComponent.vue';


    export default {
        components: {
            FooterComponent,
            BannerComponent,
            AboutComponent
        },
    }

</script>

<style scoped lang="scss">
@import '@/assets/style.scss';
.about-banner-bgImg {
  background-image: url('@/assets/images/componentsImg/BGimg.jpg');
 }
</style>
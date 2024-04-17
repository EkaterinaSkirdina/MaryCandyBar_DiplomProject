<template>

  <BannerComponent heading='Шоколад' :class="'chokolate-banner-bgImg'" :isBreadCrumbs='true'/>

  <CardProductListComponent />

  <FooterComponent />

</template>

<script>
import BannerComponent from '@/components/BannerComponent.vue';
import FooterComponent from '@/components/FooterComponent.vue';
import CardProductListComponent from '@/components/CardProductListComponent.vue';


    export default {
        name: 'ChokolateView',

      components: {
          FooterComponent,
          BannerComponent,
          CardProductListComponent,
      },
    }
</script>

<style scoped lang="scss">
@import '@/assets/style.scss';

.chokolate-banner-bgImg {
  background-image: url('@/assets/images/componentsImg/BGChocolate.jpg');
 }
</style>
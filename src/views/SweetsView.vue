<template>
    <BannerComponent heading='Конфеты' :class="'sweets-banner-bgImg'" :isBreadCrumbs='true'/>

    <CardProductListComponent />

    <FooterComponent />
</template>

<script>
import BannerComponent from '@/components/BannerComponent.vue';
import FooterComponent from '@/components/FooterComponent.vue';
import CardProductListComponent from '@/components/CardProductListComponent.vue';

    export default {
        name: 'SweetsView',
        components: {
            FooterComponent,
            BannerComponent,
            CardProductListComponent
  }
    }
</script>

<style scoped lang="scss">
.sweets-banner-bgImg {
  background-image: url('@/assets/images/componentsImg/BGSweets.jpg');
  object-fit: cover;
 }
</style>
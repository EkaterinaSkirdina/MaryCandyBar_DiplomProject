<template>
    <BannerComponent heading='Наборы' :class="'sweetsSet-banner-bgImg'" :isBreadCrumbs='true'/>

    <CardProductListComponent />

    <FooterComponent />
</template>

<script>
import BannerComponent from '@/components/BannerComponent.vue';
import FooterComponent from '@/components/FooterComponent.vue';
import CardProductListComponent from '@/components/CardProductListComponent.vue';


export default {
    name: 'SweetsSetView',
    components: {
        FooterComponent,
        BannerComponent,
        CardProductListComponent,
}
}
</script>

<style scoped lang="scss">
.sweetsSet-banner-bgImg {
  background-image: url('@/assets/images/componentsImg/BGSweetsSet.jpg');
  object-fit: cover;
 }
</style>
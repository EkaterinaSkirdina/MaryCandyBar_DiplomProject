<template>
    <BannerComponent heading='Доставка и оплата' :class="'delivery-banner-bgImg'" :isBreadCrumbs='true'/>

    <DeliveryComponent />
    <FooterComponent />
</template>

<script>
import BannerComponent from '@/components/BannerComponent.vue';
import FooterComponent from '@/components/FooterComponent.vue';
import DeliveryComponent from '@/components/DeliveryComponent.vue';

    export default {
        components: {
            FooterComponent,
            BannerComponent,
            DeliveryComponent
        },
    }

</script>
<style scoped lang="scss">
@import '@/assets/style.scss';
.delivery-banner-bgImg {
  background-image: url('@/assets/images/componentsImg/BGDelivery.jpg');
 }
</style>
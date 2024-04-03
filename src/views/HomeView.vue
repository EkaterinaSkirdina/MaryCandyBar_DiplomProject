<template>

 <HomeBannerComponent /> 

 <HomeCatalogComponent />

 <SwiperAutoComponent />

 <SaleComponent />

 <FooterComponent />
  
</template>

<script>
import HomeBannerComponent from '@/components/HomeBannerComponent.vue';
import HomeCatalogComponent from '@/components/HomeCatalogComponent.vue';
import SaleComponent from '@/components/SaleComponent.vue';
import FooterComponent from '@/components/FooterComponent.vue';
import SwiperAutoComponent from '@/components/SwiperAutoComponent.vue';

export default {
  name: 'HomeView',
  components: {
    HomeBannerComponent,
    HomeCatalogComponent,
    SaleComponent,
    FooterComponent,
    SwiperAutoComponent
  }
}
</script>

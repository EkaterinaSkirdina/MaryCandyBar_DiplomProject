<template>

 <HomeBannerComponent /> 

 <HomeCatalogComponent />

 <SwiperAutoComponent />

 <FooterComponent />
  
</template>

<script>
import HomeBannerComponent from '@/components/HomeBannerComponent.vue';
import HomeCatalogComponent from '@/components/HomeCatalogComponent.vue';
import FooterComponent from '@/components/FooterComponent.vue';
import SwiperAutoComponent from '@/components/SwiperAutoComponent.vue';

export default {
  name: 'HomeView',
  components: {
    HomeBannerComponent,
    HomeCatalogComponent,
    FooterComponent,
    SwiperAutoComponent
  }
}
</script>

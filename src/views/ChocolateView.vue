<template>
  <BannerComponent heading='Шоколад' :class="'chokolate-banner-bgImg'" :isBreadCrumbs='true'/>

  <CardProductListComponent />

  <SaleComponent />

  <FooterComponent />

</template>

<script>
import BannerComponent from '@/components/BannerComponent.vue';
import FooterComponent from '@/components/FooterComponent.vue';
import SaleComponent from '@/components/SaleComponent.vue';
import CardProductListComponent from '@/components/CardProductListComponent.vue';

import { mapState, mapMutations, mapGetters, mapActions} from 'vuex';

    export default {
        name: 'ChokolateView',

      data() {
        return {
          
        }
      },

      components: {
          FooterComponent,
          BannerComponent,
          CardProductListComponent,
          SaleComponent
      },

      computed: {
        ...mapState(['productsList']),
        ...mapGetters(['GET_PRODUCTS_LIST']),
      },
      
    }
</script>

<style scoped lang="scss">
@import '@/assets/style.scss';

.chokolate-banner-bgImg {
  background-image: url('@/assets/images/componentsImg/BGChocolate.jpg');
 }
</style>
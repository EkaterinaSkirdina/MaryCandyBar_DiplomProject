<template>
    <section class="product-list container">
        <CardProductComponent v-for="product in filteredList()" :key="product.id" :product = "product"/>
    </section>
</template>

<script>
import CardProductComponent from '@/components/CardProductComponent.vue';

import { mapState, mapMutations, mapGetters, mapActions} from 'vuex';

    export default {
        components: {
          CardProductComponent
      },

      computed: {
        ...mapGetters(['PRODUCTS']),
      },
      methods: {
        ...mapActions(['GET_PRODUCTS_FROM_API', 'ADD_TO_CART']),

        filteredList() {
            const currentPage = String(this.$route.name);
            const currentList = this.PRODUCTS.filter(el => el.category === currentPage);
            return currentList;           
        },

      },
      mounted() {
        this.GET_PRODUCTS_FROM_API();
      }
    }
</script>

<style scoped lang="scss">
.product-list {
    padding-bottom: 250px;
    display: flex;
    margin: 75px 0;
    flex-wrap: wrap;
    justify-content: space-evenly;
    gap: 15px;
}
</style>
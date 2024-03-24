<template>
    <section class="product-list container">
        <CardProductComponent v-for="product in filteredList()" :key="product.id" :product = "product" />
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
        ...mapGetters(['GET_PRODUCTS_LIST']),
      },
      methods: {
        filteredList() {
            const currentPage = String(this.$route.name);
            console.log(currentPage);
            return this.GET_PRODUCTS_LIST.filter(el => el.category === currentPage);
             
        }
      }
    }
</script>

<style scoped lang="scss">
.product-list {
    display: flex;
    margin: 75px 0;
    flex-wrap: wrap;
    justify-content: space-evenly;
    gap: 15px;
}
</style>
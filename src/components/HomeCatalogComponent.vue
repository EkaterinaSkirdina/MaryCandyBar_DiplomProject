<template>
    <section class="container">
        <nav class="catalog">

            <router-link to="/chocolate" class="catalog__link choco text">Шоколад</router-link>
            <router-link to="/sweets" class="catalog__link sweets text">Конфеты</router-link>
            <router-link to="/sweets-set" class="catalog__link sweets-set text">Наборы конфет</router-link>

        </nav>
    </section>
</template>

<script>
    export default {
        name: 'HomeCatalogComponent'
        
    }
</script>

<style scoped lang="scss">
@import '@/assets/style.scss';

.catalog {
    @include flexAlignment(space-evenly);
    margin-bottom: 75px;
    &__link {
        width: 30%;
        text-align: center;
        padding: 60px 20px;
        background-size: cover;
        
    }
}
.choco {
    background-image: url('@/assets/images/componentsImg/BGCatalogHome1.jpg');             
}
.sweets {
    background-image: url('@/assets/images/componentsImg/BGCatalogHome2.jpg');
}
.sweets-set {
    background-image: url('@/assets/images/componentsImg/BGCatalogHome3.jpg');
}

</style>
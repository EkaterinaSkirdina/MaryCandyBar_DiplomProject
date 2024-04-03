<template>
    <section class="home-banner container">
        <div class="home-banner__content">
            <p class="brand-heading">Mary Candy Bar</p>
            <p class="text">С любовью готовим для вас</p>                       
        </div>
        
    </section>
</template>

<script>
import SwiperAutoComponent from './SwiperAutoComponent.vue';

    export default {
        name: 'HomeBannerComponent',
        components: {
            SwiperAutoComponent
        }
        
    }
</script>

<style scoped lang="scss">
@import '@/assets/style.scss';

.home-banner {
    margin-bottom: 75px;
    &__content {
        background-image: url('@/assets/images/componentsImg/BGMain.jpg');
        height: 300px;
        background-size: cover;
        border-radius: 75px;
        padding: 100px;
        & img {
            object-fit: cover;
        }
    }
}
.brand-heading {
    text-shadow: 12px 10px 10px #fff;
}
.text {
    color: #eb8494;
}

</style>
<template>
    <section class="home-banner container">
        <div class="home-banner__content">
            <p class="brand-heading">Mary Candy Bar</p>
            <p class="text">С любовью готовим для вас</p>
            <p class="title">Ручная работа</p>                       
        </div>
        
    </section>
</template>

<script>
    export default {
        name: 'HomeBannerComponent',
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
.text, .title {
    color: #eb8494;
}

@media (max-width: 767px) {
    .home-banner {
        &__content {
            height: 250px;
            padding: 70px;
        }
    }
}

</style>
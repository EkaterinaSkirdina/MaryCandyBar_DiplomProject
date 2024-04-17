<template>
    <section class="order-ok container">
        <h1 class="title">Спасибо за заказ!</h1>
        <p class="text">В ближайшее время с вами свяжется наш менеджер для подтверждения заказа и уточнения деталей.</p>
        <img src="@/assets/images/componentsImg/order-ok.png" alt="">
    </section>
</template>

<script>
    export default {        
    }
</script>

<style scoped lang="scss">
@import '@/assets/style.scss';

.order-ok {
    @include flexAlignment(center);
    flex-direction: column;
    gap: 15px;
    margin-top: 7%;
    text-align: center;    
    & p {
        width: 80%;
    }
    & img {
        height: 170px;
    }
}
</style>
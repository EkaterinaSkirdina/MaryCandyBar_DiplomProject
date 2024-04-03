<template>
    <section class="order-ok container">
        <h1 class="title">Что-то пошло не так</h1>
        <img src="@/assets/images/componentsImg/order-error.png" alt="">
        <p class="text">Повторите попытку, а лучше позвоните нам, и мы примем ваш заказ по телефону.</p>
        <p class="small-text">e-mail: MaryCB@mail.ru</p>
        <p class="small-text">+7 (495) 000-00-00</p>
        <p class="small-text">Ежедневно с 8:00 до 20:00</p>
        
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
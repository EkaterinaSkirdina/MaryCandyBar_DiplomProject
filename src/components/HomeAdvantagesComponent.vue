<template>
    <section class="advantages container">
        <h2 class="title">Как оформить заказ?</h2>
        <div class="advantages-block">
            <div class="advantages-block__item">
            <img src="@/assets/images/componentsImg/homeAdvDoc.png" alt="order icon">
            <p class="small-text"><b>Оставьте заявку на сайте</b></p>
            <p class="small-text">Наш сотрудник свяжется с Вами для уточнения деталей вашего заказа</p>
        </div>
        <div class="advantages-block__item">
            <img src="@/assets/images/componentsImg/homeAdvPhoto.png" alt="photo icon">
            <p class="small-text"><b>Фото-отчет</b></p>
            <p class="small-text">Перед доставкой мы пришлем фото готовых шоколадных изделий, чтобы Вы убедились в его качестве.</p>
        </div>
        <div class="advantages-block__item">
            <img src="@/assets/images/componentsImg/homeAdvPay.png" alt="payment icon">
            <p class="small-text"><b>Способ оплаты</b></p>
            <p class="small-text">Наличными либо безналичным расчетом банковской картой после доставки</p>
        </div>
        <div class="advantages-block__item">
            <img src="@/assets/images/componentsImg/homeAdvDeliv.png" alt="delivery icon">
            <p class="small-text"><b>Доставка</b></p>
            <p class="small-text">Возьмём на себя все заботы по доставке в обычные и праздничные дни за разумные деньги</p>
        </div>
        </div>
    </section>
</template>

<script>
    export default {
        
    }
</script>

<style scoped lang="scss">
@import '@/assets/style.scss';

.advantages {
    margin-bottom: 50px;
    .title {
        margin-bottom: 25px;
        text-align: center;
    }
    &-block {
        display: grid;
        grid-template-columns: 1fr 1fr 1fr 1fr;
        gap: 15px;
        &__item {
        text-align: center;
        }
    }
    
}

@media (max-width: 767px) {
    .advantages-block {
    grid-template-columns: 1fr 1fr;
    }
}


</style>
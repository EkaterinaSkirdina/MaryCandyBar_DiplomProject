<template>
    <section class="delivery container">
        <div class="delivery__left">
            <img src="@/assets/images/componentsImg/DeliveryIcon.jpg" alt="delivery picture">
        </div>
        <div class="delivery__right">
                <p class="text">Для наших покупателей доступны 2 способа доставки: курьерская доставка по Москве в пределах МКАД и самовывоз.</p>       
            
                <h3 class="title">Доставка</h3>
                <p class="small-text">Ежедневно с 11:00 до 21:00.  Если Вы готовы принять заказ в интервале с 12 до 17 часов или с 17 до 21 часа, то доставка будет стоить 500 рублей.</p> 
                <p class="small-text">При заказе от 3000 рублей доставка БЕСПЛАТНАЯ.</p>
                <p class="small-text">Курьер предупредит Вас о своём прибытии за 30-40 минут.</p>
                
                <h3 class="title">Самовывоз</h3>
                <p class="small-text">Вы можете забрать заказ самостоятельно с 10:00 до 20:00 по адресу: Москва, Цветной бульвар</p>
        </div>
    </section>
    <section class="payment container">
        <div class="payment__left">
            <h3 class="title">Оплата</h3>
            <p class="small-text">Вы можете оплатить заказ при получении наличными или банковской картой. Для этого укажите выбранный способ при оформлении заказа.</p>
        </div>
        <div class="payment__right">
            <img src="@/assets/images/componentsImg/payment.png" alt="payment picture">
        </div>
    </section>
</template>

<script>
    export default {
        
    }
</script>

<style scoped lang="scss">
@import '@/assets/style.scss';
.delivery {
    
    @include flexAlignment(normal);
    &__left {
        width: 40%;
        & img {
            width: 100%;
        }
    }
    &__right {
        width: 60%;
        padding: 45px 95px;
    }
}

.payment {
    padding-bottom: 200px;
    @include flexAlignment(normal);
    margin-bottom: 25px;
    &__left {
        width: 60%;
        padding: 100px 130px;        
    }
    &__right {
        width: 40%;
        & img {
            width: 75%;
        }
    }
}
.title {
    margin-top: 15px;
}

@media (max-width: 767px) {
    .delivery {
        flex-direction: column;
        &__right {
            padding: 0;
        }
    }
    .payment {
        flex-direction: column;
        &__right {
            order: -1;
            margin-top: 15px;
        }
        &__left {
            padding: 0;
        }
    }
}

</style>
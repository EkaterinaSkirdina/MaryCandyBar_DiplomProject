<template>
    <footer class="footer container shadow">
        <div class="footer-brand">
            <router-link to="/" class="brand-heading">Mary Candy Bar</router-link>
            <p class="small-text">© 2024 MaryCandyBar. Все права защищены.</p>         
        </div>
        <div class="info">
            <h3 class="title">Информация</h3>            
            <router-link to="/about" class="text">О нас</router-link>
            <router-link to="/delivery" class="text" >Доставка и оплата</router-link>
        </div>
        <div>
            <h3 class="title">Контакты</h3>
            <p class="small-text">Адрес: Москва, Цветной бульвар</p>
            <p class="small-text">e-mail: MaryCB@mail.ru</p>
            <p class="small-text">+7 (495) 000-00-00</p>
            <p class="small-text">Ежедневно с 8:00 до 20:00</p>
        </div>

    </footer>
</template>

<script>
    export default {
        name: 'FooterComponent',
    }
</script>

<style scoped lang="scss">
@import '@/assets/style.scss';

    .footer {
        position: absolute;
        left: 0;
        width: 100%;
        bottom: 0;
        padding: 15px 5px;
        display: flex;
        align-items: baseline;
        justify-content: space-evenly;
        background-image: url(../assets/images/componentsImg/FooterBGimg.jpg);
        &-brand {
            width: 200px;
        }

    }
    .info {
        display: flex;
        flex-direction: column;
    }
    .shadow {
        text-shadow: 1px 1px 2px $brandColor;
        color: black;
    }

    @media (max-width: 767px) {
        .footer {
            gap: 5px;
        }
        .info {
            display: none;
        }
    }
</style>
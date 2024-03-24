<template>
    <header class="container">
        <div class='heder-row'>
            <a class="text" href="#sale">SALE
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M5.11916 5.09C4.66916 5.55 4.08916 5.78 3.37916 5.78C2.66916 5.78 2.08916 5.55 1.63916 5.09C1.19916 4.62 0.97916 4.035 0.97916 3.335C0.97916 2.625 1.20416 2.035 1.65416 1.565C2.10416 1.085 2.67916 0.844999 3.37916 0.844999C4.08916 0.844999 4.66916 1.085 5.11916 1.565C5.57916 2.035 5.80916 2.625 5.80916 3.335C5.80916 4.035 5.57916 4.62 5.11916 5.09ZM3.24416 11H2.43416L8.82416 0.994999H9.64916L3.24416 11ZM10.3392 10.49C9.88916 10.95 9.30916 11.18 8.59916 11.18C7.88916 11.18 7.30916 10.95 6.85916 10.49C6.41916 10.02 6.19916 9.435 6.19916 8.735C6.19916 8.025 6.42416 7.435 6.87416 6.965C7.32416 6.485 7.89916 6.245 8.59916 6.245C9.30916 6.245 9.88916 6.485 10.3392 6.965C10.7892 7.435 11.0142 8.025 11.0142 8.735C11.0142 9.435 10.7892 10.02 10.3392 10.49ZM2.29916 4.55C2.57916 4.87 2.93916 5.03 3.37916 5.03C3.81916 5.03 4.18416 4.87 4.47416 4.55C4.76416 4.22 4.90916 3.815 4.90916 3.335C4.90916 2.835 4.76416 2.425 4.47416 2.105C4.19416 1.775 3.82916 1.61 3.37916 1.61C2.93916 1.61 2.57916 1.775 2.29916 2.105C2.01916 2.425 1.87916 2.835 1.87916 3.335C1.87916 3.815 2.01916 4.22 2.29916 4.55ZM7.50416 9.95C7.79416 10.27 8.15916 10.43 8.59916 10.43C9.03916 10.43 9.40416 10.27 9.69416 9.95C9.98416 9.62 10.1292 9.215 10.1292 8.735C10.1292 8.235 9.98416 7.825 9.69416 7.505C9.41416 7.175 9.04916 7.01 8.59916 7.01C8.14916 7.01 7.78416 7.175 7.50416 7.505C7.22416 7.825 7.08416 8.235 7.08416 8.735C7.08416 9.215 7.22416 9.62 7.50416 9.95Z" fill="red"/>
            </svg>
            </a>
            <details class="catalog-menu">
                <summary class="catalog-menu__dropdown">
                    <span class="text">Каталог</span>
                    <svg width="8" height="5" viewBox="0 0 8 5" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M8 0.945946L7.06667 -4.07973e-08L4 3.10811L0.933334 -3.08894e-07L4.35489e-07 0.945946L4 5L8 0.945946Z" fill="#292929"/>
                </svg>
                </summary>
                <div class="catalog-menu__box">
                    <router-link @click="removeAtrOpen()"
                        to="/chokolate" 
                        class="catalog-menu__item text">                        
                        <img class="icon" src="@/assets/images/componentsImg/chocolate_icon.svg">
                        Шоколад</router-link>
                    <router-link @click="removeAtrOpen()" to="/sweets" class="catalog-menu__item text">
                        <img class="icon" src="@/assets/images/componentsImg/candy_icon.png">
                        Конфеты</router-link>
                    <router-link @click="removeAtrOpen()" to="/sweets-set" class="catalog-menu__item text">
                        <img class="icon" src="@/assets/images/componentsImg/sweet-set_icon.svg">
                        Наборы</router-link>
                </div>
            </details>
            <router-link to="/about" class="text">О нас</router-link>
            <router-link to="/">
                <img src="@/assets/images/componentsImg/Logo.png" alt="logotype image"/>
            </router-link>
            <router-link to="/delivery" class="text">Доставка и оплата</router-link>
            <router-link to="/cart" class="text">Корзина</router-link>

        </div>
    </header>
</template>


<script>
export default {
    name: 'Header',
    data() {
        return {
            
        }
    },
    methods: {
        removeAtrOpen() {
            document.querySelector('details').removeAttribute('open');
        }
    }

}
</script>


<style scoped lang="scss">
@import '@/assets/style.scss';

    .heder-row {   
        @include flexAlignment(space-evenly); 
    }

    .catalog-menu {
        position: relative;
        cursor: pointer;
        &__dropdown {
            @include flexAlignment(normal);
            gap: 10px;
        }
        &__box {
            background: #FFF;
            box-shadow: 6px 4px 35px rgba(0, 0, 0, 0.21);
            padding: 9px;
            position: absolute;
            left: -8px;
            top: 35px;
            gap: 6px;
            display: flex;
            flex-direction: column;
            z-index: 999;
            & a {
                font-size: 18px;
                &:hover {
                    transform: scale(1.1);
                    background: $brandColor;
                }
            }                        
        }
        &__item {
                display: flex;
            }
    }
    .icon {
        width: 25px;
        margin-right: 15px;
    }
</style>
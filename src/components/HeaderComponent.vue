<template>
    <header class="container">
        <nav class='header-row'>            
            <router-link to="/about" class="text">О нас</router-link>
            <router-link to="/delivery" class="text">Доставка и оплата</router-link>
            <router-link to="/">
                <img class="logo-img" src="@/assets/images/componentsImg/Logo.png" alt="logotype image"/>
            </router-link>            
            <details class="catalog-menu details">
                <summary class="catalog-menu__dropdown">
                    <span class="text">Каталог</span>
                    <svg width="8" height="5" viewBox="0 0 8 5" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M8 0.945946L7.06667 -4.07973e-08L4 3.10811L0.933334 -3.08894e-07L4.35489e-07 0.945946L4 5L8 0.945946Z" fill="#292929"/>
                </svg>
                </summary>
                <div class="catalog-menu__box">
                    <router-link @click="removeAtrOpen()"
                        to="/chocolate" 
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
            <router-link to="/cart" class="text">Корзина({{ TOTAL_IN_CART }})</router-link>
        </nav>


        <div class="mobile-header-row">            
            <details class="mobile-menu details">
                <summary class="mobile-menu__summary">
                    <svg width="20" height="14" viewBox="0 0 20 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <line y1="1.25" x2="20" y2="1.25" stroke="black" stroke-width="1.5"/>
                    <line y1="7.25" x2="20" y2="7.25" stroke="black" stroke-width="1.5"/>
                    <line y1="13.25" x2="12" y2="13.25" stroke="black" stroke-width="1.5"/>
                    </svg>
                </summary>
                <div class="mobile-menu__content">
                    <router-link @click="removeAtrOpen()" to="/about" class="mobile-menu__heading title">О нас</router-link>
                    <router-link @click="removeAtrOpen()" to="/delivery" class="mobile-menu__heading title">Доставка и оплата</router-link>
                    <details>
                        <summary class="mobile-menu__heading title">Каталог</summary>
                        <div class="mobile-menu__link__box">
                            <router-link @click="removeAtrOpen()"
                            to="/chocolate" 
                            class="mobile-menu__link text">Шоколад</router-link>
                            <router-link @click="removeAtrOpen()" to="/sweets" class="mobile-menu__link text">Конфеты</router-link>
                            <router-link @click="removeAtrOpen()" to="/sweets-set" class="mobile-menu__link text">Наборы</router-link>
                        </div>
                    </details>
                </div>
            </details>
            <router-link to="/">
                <img class="logo-img" src="@/assets/images/componentsImg/Logo.png" alt="logotype image"/>
            </router-link>
            <router-link to="/cart" class="cart-link">
                <svg width="16" height="22" viewBox="0 0 16 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M15 5.604H1V21.0134H15V5.604Z" stroke="black" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M4.28857 7.48322V3.53691C4.28857 2.12752 5.32213 1 6.54361 1H9.45636C10.6778 1 11.7114 2.12752 11.7114 3.53691V7.48322" stroke="black" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
                <div class="cart-link__total">{{ TOTAL_IN_CART }}</div>
            </router-link>
        </div>       
    </header>
</template>


<script>
import { mapGetters } from 'vuex';

export default {
    name: 'HeaderComponent',    
    computed: {
        ...mapGetters(['TOTAL_IN_CART'])
    },
    methods: {
        removeAtrOpen() {
            document.querySelectorAll('.details').forEach(el => el.removeAttribute('open'));
        }
    }
}
</script>


<style scoped lang="scss">
@import '@/assets/style.scss';
    .header-row {   
        @include flexAlignment(space-evenly);        
    }
    .logo-img {
        height: 100px;
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
            padding: 20px;
            border-radius: 15px;
            position: absolute;
            left: -30px;
            top: 48px;
            display: flex;
            flex-direction: column;
            z-index: 999;
            gap: 20px;
            & a:hover {
                    transform: scale(1.1);
                    background: $brandColor;
                    border-radius: 5px;
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
    .mobile-header-row {
        display: none;
    }
    .mobile-menu {
        position: relative;
        z-index: 10;    
        &__content {
            background-color: #fff;
            padding: 0 16px 16px;
            box-shadow: 6px 45px 35px rgba(0, 0, 0, 0.21);
            display: flex;
            flex-direction: column;
            position: absolute;
            width: 140px;
            border-radius: 18px;
        }
        & summary {
            list-style: none;
        }
        &__heading {
            padding: 8px 11px 11px 11px;
            border-bottom: 1px solid #EBEBEB;
            border-left: 5px solid $brandColor;
            margin-top: 16px;
        }
        &__link__box {
            display: flex;
            flex-direction: column;
            gap: 11px;
            padding: 15px 15px 0;
        }
        &__link {
            transition: all 0.3s;
            &:hover {
                color: $brandColor;
            }
        }
}

    @media (max-width: 767px) {
        .header-row {
            display: none;
        }
        .mobile-header-row {
        @include flexAlignment(space-around);
        }
        .cart-link {
            position: relative;
            &__total {
                position: absolute;
                right: -4px;
                bottom: 0;
                @include flexAlignment(center);
                background-color: #222224;
                color: #FFF;
                height: 50%;
                width: 69%;
                font-size: 11px;
                padding: 2px;
                border-radius: 10px;            
            }
        }
    }
</style>
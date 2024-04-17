<template>
    <div class="card">
        <ModalWindowComponent 
            v-if="isModalVisible"
            modalBtn="Назад"
            :modalHeading="product.title"
            @closeModal="closeModal"
            @modalBtnAction="closeModal"
        >
            <img class="modal-img" :src= " require('@/assets/images/productsImg/' + product.image) " alt="product photo">
            <div class="modal-content">                
                <p class="text">{{ product.description }}</p>
                <p class="small-text">{{ product.info }}</p>
                <p class="small-text">Состав: {{ product.ingredients }}</p>
                <p class="price title">{{ product.price }} руб</p>
            </div>
        </ModalWindowComponent>        
        <div @click="showModal" class="card-modal">
            <img class="img" :src= " require('@/assets/images/productsImg/' + product.image) " alt="product photo">
            <div class="card-content">
                <h3 class="title">{{ product.title }}</h3>
                <p class="text">{{ product.description }}</p>
            </div>
        </div>
        <div class="bottom-content">
            <p class="price title">{{ product.price }} руб</p>
            <div v-if="!isInCart()" @click="addToCart" class="cart-btn text">
                <svg width="15" height="21" viewBox="0 0 15 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M14.2911 5.37109H1V20.0002H14.2911V5.37109Z" stroke="black" stroke-width="1.4" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M4.12207 7.15493V3.40845C4.12207 2.07042 5.10329 1 6.26292 1H9.02818C10.1878 1 11.169 2.07042 11.169 3.40845V7.15493" stroke="black" stroke-width="1.4" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
                В корзину
            </div>
            <div v-if="isInCart()" class="in-cart-btn text">
                <svg viewBox="0 0 520 520" xmlns="http://www.w3.org/2000/svg">
                    <g id="_3-Check" data-name="3-Check"><path d="m177.109 467.326-2.238-3.813c-38.432-65.474-140.534-204.4-141.561-205.8l-1.31-1.778 34.4-33.993 110.135 76.9c69.383-90.068 134.115-151.912 176.329-188.02 46.125-39.454 76.15-57.6 76.447-57.784l.607-.364h58.082l-5.014 4.466c-75.719 67.442-154.241 174.3-206.781 252.074-56.971 84.331-96.515 153.58-96.908 154.27z" fill="#b0ef8f" style="fill: rgb(245, 114, 81);"></path><path d="m429.918 52.674-.607.364c-.3.179-30.322 18.33-76.447 57.784-42.214 36.108-106.947 97.952-176.327 188.025l-1.666 164.666 2.238 3.813 2.188-3.842c.393-.69 39.937-69.939 96.908-154.27 52.54-77.77 131.062-184.632 206.781-252.074l5.014-4.466z" fill="#009045" style="fill: rgb(240, 66, 66);"></path></g>
                </svg>
                В корзине
            </div>
        </div>
    </div>
</template>

<script>
import { mapGetters, mapActions} from 'vuex';
import ModalWindowComponent from '@/components/ModalWindowComponent.vue';
    export default {
        props: {
            product: Object
        },
        components: {
            ModalWindowComponent,
        },
        data() {
            return {
                isModalVisible: false,
            }
        },
        computed: {
            ...mapGetters(['CART'])
        },
        methods: {
            ...mapActions(['ADD_TO_CART']),
            addToCart() {
                this.ADD_TO_CART(this.product);
            },
            isInCart() {
                if (this.CART.some(e => e.id === this.product.id)) {
                    return true;
                }   
                return false;         
            },
            showModal() {
                this.isModalVisible = true;
            },
            closeModal() {
                this.isModalVisible = false;
            }
         }
    }
</script>

<style scoped lang="scss">
@import '@/assets/style.scss';

.card {
    width: 370px;
    background-color: #fff;
    border: 2px solid $bgColor;
    border-radius: 30px;
    padding: 15px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    box-shadow: 10px 10px 10px 5px #f5d3d8;
    &-content {
        padding: 10px 15px;
    }
    &-modal {
        cursor: pointer;
    }
}
.img {
    width: 100%;
    height: 300px;
    object-fit: cover;
    border-radius: 20px;
}
.bottom-content {
    @include flexAlignment(space-between);
    padding: 0 15px;
}
.price {
    color: #eb8494;
}
.cart-btn {
    display: flex;
    gap: 12px;
    cursor: pointer;
    border: 2px solid $bgColor;
    padding: 15px;
    border-radius: 10px;
    &:hover {
        background-color: $bgColor;
    }
}
.in-cart-btn {
    display: flex;
    align-items: center;
    padding: 7px;
    & svg {
        width: 45px;
    }
}
.modal-content {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 5px;
}
.modal-img {
    object-fit: cover;
    border-radius: 20px;
    height: 200px;
}
</style>
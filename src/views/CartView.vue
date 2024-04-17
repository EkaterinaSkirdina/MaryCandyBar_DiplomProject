<template>

    <section class="cart container">

        <div class="cart__empty" v-if="!CART.length">
            <img src="@/assets/images/componentsImg/empty_cart.png" alt="empty cart">
            <p class="title">Здесь пока ничего нет</p>
        </div>

        <div v-else>
            <h1 class="brand-heading">Ваша корзина</h1>
            <div class="cart__block">
            
                <div class="cart__list">                
                    <CartItemComponent v-for="(item, index) in CART" 
                        :key="item.id" 
                        :cart_item="item"
                        @deleteFromCart="deleteFromCart(index)" />
                </div>
                <div class="cart__total">
                    <p class="title">Итого:</p>  
                    <span class="text">{{ TOTAL_IN_CART }} шт</span>
                    <span class="brand-heading">{{ TOTAL_PRICE }} руб</span>
                    <button @click="showModal" class="btn small-text">Оформить заказ</button>  
                </div>

                <ModalWindowComponent 
                    v-if="isModalVisible"
                    modalBtn="Назад"
                    modalHeading="Оформление заказа"
                    @closeModal="closeModal"
                    @modalBtnAction="closeModal"
                >
                    <div class="modal-content">
                        <div class="info-total">
                            <div>
                                <span class="text">Товаров в корзине:
                                    <span class="text">{{ TOTAL_IN_CART }} шт</span>
                                </span>
                            </div>
                            <div>
                                <span class="total-price text">Итого к оплате: 
                                    <span class="brand-heading">{{ TOTAL_PRICE }} руб</span>
                                    <span class="small-text">*Без учета стоимости доставки</span>
                                </span>
                            </div>
                        </div>                
                        <form class="form" @submit.prevent="submit" @reset="onReset">
                            <div class="form__block">
                            <label class="text">ФИО</label>
                            <input class="small-text"
                                type="text" 
                                required 
                                autofocus
                                placeholder="Введите ваши ФИО"  
                                v-model.lazy="name" />
                                </div>

                            <div class="form__block">
                                <label class="text">email</label>
                                <input class="small-text"
                                    type="email"
                                    pattern="^(?!.*@.*@.*$)(?!.*@.*--.*\..*$)(?!.*@.*-\..*$)(?!.*@.*-$)((.*)?@.+(\..{1,11})?)$" 
                                    placeholder="Введите email" 
                                    v-model.lazy="email" />
                            </div>

                            <div class="form__block">
                                <label class="text">Телефон</label>
                                <input class="small-text" 
                                    type="tel" 
                                    required 
                                    pattern="^\+7[1-9]{10}$"
                                    placeholder="Введите номер телефона в формате +7.........." 
                                    v-model.lazy="tel" />
                            </div>

                            <div class="form__block">
                                <label class="text">Сообщение</label>
                                <textarea  class="small-text"
                                    cols="50"
                                    rows="6"
                                    placeholder="Введите желаемый способ получения заказа, дату и время. Если вы выбрали доставку - укажите точный адрес. Также здесь можно написать свои пожелания по заказу." 
                                    v-model.lazy="message">
                                </textarea>
                            </div>

                            <button class="form__btn small-text" type="reset">Очистить форму</button>
                            <button class="form__btn small-text" type="submit">Заказать</button>
                        </form>
                    </div>
                </ModalWindowComponent>
            </div>
        </div>
    </section>
    <FooterComponent />
</template>

<script>
import CartItemComponent from '@/components/CartItemComponent.vue';
import FooterComponent from '@/components/FooterComponent.vue';
import ModalWindowComponent from '@/components/ModalWindowComponent.vue';

import { mapGetters, mapActions } from 'vuex';

    export default {
        components: {
            CartItemComponent,
            FooterComponent,
            ModalWindowComponent
        },
        data() {
            return {
                isModalVisible: false,
                name: '',
                email: '',
                tel: '',
                message: ''
            }
        },
        computed: {
            ...mapGetters (['CART', 'TOTAL_IN_CART', 'TOTAL_PRICE']), 
        },
        methods: {
            ...mapActions(['DELETE_FROM_CART', 'POST_ORDERS_API', 'CLEAR_CART']),

            deleteFromCart(index) {
                this.DELETE_FROM_CART(index);
            },
            clearCart() {
                this.CLEAR_CART();
            },
            showModal() {
                this.isModalVisible = true;
            },
            closeModal() {
                this.isModalVisible = false;
            },
            onReset() {
                this.name = "";
                this.email = "";
                this.message = "";
                this.tel = "";
                },
            async submit() {
                try {
                    const newOrder = {
                        id: Date.now(),
                        name: this.name,
                        email: this.email,
                        tel: this.tel,
                        message: this.message,
                        totalPrice: this.TOTAL_PRICE,
                        cart: this.CART
                        };
                    await this.POST_ORDERS_API(newOrder);
                    this.onReset();
                    this.closeModal();
                    this.clearCart();
                    this.$router.push('/order-ok');
                } catch (error) {
                    console.log(error);
                    this.$router.push('/order-error');
                }
            }
        }        
    }
</script>

<style scoped lang="scss">
@import '@/assets/style.scss';
.cart {
    padding-bottom: 200px;
    &__block {
        display: flex;
        justify-content: space-around;
        margin-top: 25px;
    }
    &__empty {
        margin-top: 100px;
        display: flex;
        gap: 45px;
        flex-direction: column;
        align-items: center;
    }
    &__list {
        gap: 20px;
        display: flex;
        flex-direction: column;
        width: 70%;
    }
    &__total {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        width: 25%;
        height: 250px;
        border: 2px solid #f5d3d8;
        border-radius: 30px;
        padding: 15px;
    }
    .btn {
        cursor: pointer;
        width: 100%;
        border: 4px solid $bgColor;
        padding: 10px;
        border-radius: 10px;
        background-color: #fff;
        &:hover {
            background-color: $bgColor;
        }
    }
}
    // Модальное окно
.modal-content {
    padding: 0 15px;
    width: 100%;
    .info-total{
        display: flex;
        align-items: baseline;
        flex-direction: column;
        margin-bottom: 15px;
    }
    .form {
        &__block {
            display: flex;
            flex-direction: column;
            
        }
        &__btn {
            margin-top: 15px;
            margin-right: 20px;
            padding: 3px;
            cursor: pointer;
            width: 125px;
        }        
        & input, textarea {            
            padding: 3px;
        }
    }
}


@media (max-width: 767px) {
    .cart {
        &__block {
            flex-direction: column;
            align-items: center;
        }
        &__total {
            order: -1;
            width: 90%;
            height: 115px;
            align-items: center;
            flex-direction: row;
            flex-wrap: wrap;
            justify-content: space-around;
            gap: 8px;
            margin-bottom: 25px;
        }
        &__list {
            width: 90%;
        }
        .btn {
            width: 130px;
        }
    }
    .brand-heading {
        text-align: center;
    }
    // Модальное окно
    .modal-content {
        padding: 0;
        & .form__btn {
        margin-top: 5px;
        margin-right: 5px;
        padding: 0px;
        width: 140px;
        }
    }
    .total-price {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
    }    
}
</style>
<template>
    <div class="cart-item">
        <img class="img" :src= " require('@/assets/images/productsImg/' + cart_item.image) " alt="product photo">
        <div class="cart-item-content">
            <h3 class="title">{{ cart_item.title }}</h3>
            <p class="small-text">{{ cart_item.description }}</p>
            <p class="price title">{{ cart_item.price * cart_item.quantity }} руб</p>            
        </div>
        <button @click="deleteFromCart(product)" class="delete-btn">
            <svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 388.245 388.245" style="enable-background:new 0 0 388.245 388.245;" xml:space="preserve"><g><path style="fill: rgb(238, 165, 165);" d="M107.415,388.245h173.334c21.207,0,38.342-17.159,38.342-38.342V80.928H69.097v268.975 C69.097,371.086,86.264,388.245,107.415,388.245z M253.998,129.643c0-7.178,5.796-13.03,13.006-13.03 c7.178,0,13.006,5.853,13.006,13.03v208.311c0,7.21-5.828,13.038-13.006,13.038c-7.21,0-13.006-5.828-13.006-13.038V129.643z M181.491,129.643c0-7.178,5.804-13.03,13.006-13.03c7.178,0,13.006,5.853,13.006,13.03v208.311c0,7.21-5.828,13.038-13.006,13.038 c-7.202,0-13.006-5.828-13.006-13.038C181.491,337.954,181.491,129.643,181.491,129.643z M109.025,129.643 c0-7.178,5.796-13.03,12.973-13.03s13.038,5.853,13.038,13.03v208.311c0,7.21-5.861,13.038-13.038,13.038 c-7.178,0-12.973-5.828-12.973-13.038V129.643z" fill="#010002"></path><path style="fill: rgb(238, 165, 165);" d="M294.437,20.451h-52.779C240.39,8.966,230.75,0,218.955,0h-49.682 c-11.86,0-21.476,8.966-22.736,20.451H93.792c-25.865,0-46.756,20.955-46.902,46.756h294.466 C341.258,41.407,320.335,20.451,294.437,20.451z" fill="#010002"></path></g></svg>
        </button>
        <div class="quantity">
            <button @click="decrease(cart_item.id)" class="counter text">
                <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg"><g id="Layer_39" data-name="Layer 39"><path d="m29 17h-26a1 1 0 0 1 0-2h26a1 1 0 0 1 0 2z"/></g></svg>
            </button>
            <p class="text">{{ cart_item.quantity }}</p>
            <button @click="increase(cart_item.id)" class="counter text">
                <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><g id="Layer_38" data-name="Layer 38"><path d="m22 12a1 1 0 0 1 -1 1h-8v8a1 1 0 0 1 -2 0v-8h-8a1 1 0 0 1 0-2h8v-8a1 1 0 0 1 2 0v8h8a1 1 0 0 1 1 1z"/></g></svg>
            </button>
        </div>
    </div>
</template>
<script>
import { mapActions } from 'vuex';
    export default {
        props: {
            cart_item: Object,
        },        
        methods: {
            ...mapActions(['DECREASE_QUANTITY', 'INCREASE_QUANTITY']),
            decrease(id) {
                this.DECREASE_QUANTITY(id);
            },
            increase(id) {
                this.INCREASE_QUANTITY(id);
            },
            deleteFromCart(item) {
                this.$emit('deleteFromCart', item)
            }
        }
    }
</script>

<style scoped lang="scss">
@import '@/assets/style.scss';

.cart-item {
    position: relative;
    background-color: #fff;
    border: 2px solid #faedef;
    border-radius: 30px;
    padding: 25px;
    display: flex;
    box-shadow: 10px 10px 10px 5px #f5d3d8;
    &-content {
        padding: 10px 15px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
    }
}
.img {
    width: 125px;
    height: 125px;
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
.delete-btn {
    position: absolute;
    top: 20px;
    right: 15px;
    width: 5%;
    border: none;
    cursor: pointer;
    background-color: #fff;
}
.quantity {
    position: absolute;
    right: 15px;
    bottom: 15px;
    padding: 5px 15px;
    border: 2px solid rgb(238, 165, 165);
    display: flex;
    justify-content: center;
    gap: 10px;
    border-radius: 18px;
    width: 90px;   
}
.counter {
    border: none;
    background-color: #fff;
    & svg {
        width: 15px;
    }
}

@media (max-width: 767px) {
    .quantity {
        gap: 5px;
        width: 60px;
        padding: 0;
    }
    .counter svg {
        width: 10px;
    }
}
</style>
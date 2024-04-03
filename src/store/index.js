import { createStore } from 'vuex'
import axios from 'axios';

export default createStore({

  state: {
    products: [],
    cart: [],
    orders: [],
    slideItems: [
      require("@/assets/images/productsImg/Candyes.jpg"),
      require("@/assets/images/productsImg/CandySet8M.jpg"),
      require("@/assets/images/productsImg/CandySetNY.jpg"),
      require("@/assets/images/productsImg/CandySetSimple.jpg"),
      require("@/assets/images/productsImg/CandySetTeachDay.jpg"),
    ]
  },

  getters: {
    PRODUCTS(state) {
      return state.products;
    },
    ORDERS(state) {
      return state.orders;
    },
    CART(state) {
      return state.cart;
    },
    TOTAL_IN_CART(state) {        
     return state.cart.reduce((sum, item) => sum + item.quantity, 0);
    },
    TOTAL_PRICE(state) {
        return state.cart.reduce((sum, item) => sum + (item.price * item.quantity), 0)
    },
    SLIDE_ITEMS(state) {
      return state.slideItems;
    }
  },
  mutations: {

    SET_PRODUCTS_TO_STATE: (state, products) => {
      state.products = products;
    },

    SET_ORDERS: (state, order) => {
      state.orders.push(order);
    },

    SET_CART: (state, product) => {
      state.cart.push(product);
      product.quantity = 1;
    },

    EMPTY_CART: (state) => {
      state.cart = [];
    },

    SET_DECREASE_QUANTITY(state, id) {
      state.cart.map(function(item) {
        if (item.id === id) {
          if(item.quantity > 1)
          item.quantity--;
        }
      })
    },

    SET_INCREASE_QUANTITY(state, id) {
      state.cart.map(function(item) {
        if (item.id === id) {
          item.quantity++;
        }
      })
    },

    REMOVE_FROM_CART: (state, index) => {
      state.cart.splice(index, 1);
    },

  },
  actions: {
    async GET_PRODUCTS_FROM_API({commit}) {
      try {
        const products = await axios.get('http://localhost:3000/products');
        commit('SET_PRODUCTS_TO_STATE', products.data);
      } catch (error) {
        console.log(error);
      }
      },

      async POST_ORDERS_API({commit}, order) {
        try {
          await axios.post('http://localhost:3000/orders', order)
            .then(commit('SET_ORDERS', order));
        } catch (error) {
          console.log(error);
        }
      },

      ADD_TO_CART({commit}, product) {
        commit('SET_CART', product);
      },

      DELETE_FROM_CART({commit}, index) {
        commit('REMOVE_FROM_CART', index);
      },

      CLEAR_CART({commit}) {
        commit('EMPTY_CART');
      },

      DECREASE_QUANTITY({commit}, index) {
        commit('SET_DECREASE_QUANTITY', index);
      },

      INCREASE_QUANTITY({commit}, index) {
        commit('SET_INCREASE_QUANTITY', index);
      }
  },  
  module: {
  }
})

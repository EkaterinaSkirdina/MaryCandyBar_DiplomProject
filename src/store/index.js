import { createStore } from 'vuex'

export default createStore({
  state: {
    productsList: [
      {
        id: 1,
        category: 'Шоколад',
        tag: 'просто так',
        title: 'Шоколад молочный',
        description: 'Молочный шоколад с добавлением сублимированных фруктов и орехов',
        ingredients: 'сахар, масла какао, сухое молоко, тертое какао, лецитин, ванилин, орехи, сублимированные ягоды',
        image: require('@/assets/images/productsImg/Chocolate1.jpg'),
        price: 350
      },
      {
        id: 2,
        category: 'Шоколад',
        tag: 'просто так',
        title: 'Шоколад белый',
        description: 'Белый шоколад с добавлением сублимированных фруктов и орехов',
        ingredients: 'сахар, масла какао, сухое молоко, тертое какао, лецитин, ванилин, орехи, сублимированные ягоды',
        image: require('@/assets/images/productsImg/Chocolate2.jpg'),
        price: 350
      },
      {
        id: 3,
        category: 'Шоколад',
        tag: 'просто так',
        title: 'Шоколад горький',
        description: 'Горький шоколад с добавлением сублимированных фруктов и орехов',
        ingredients: 'сахар, масла какао, сухое молоко, тертое какао, лецитин, ванилин, орехи, сублимированные ягоды',
        image: require('@/assets/images/productsImg/Chocolate3.jpg'),
        price: 350
      },
      {
        id: 4,
        category: 'Конфеты',
        tag: 'просто так',
        title: 'Конфета кокосовая с миндалем',
        description: 'Конфета из белого шоколада с кокосом, внутри цельный миндаль, обсыпана вафельной крошкой',
        ingredients: 'сахар, масла какао, сухое молоко, тертое какао, лецитин, ванилин, орехи, кокос, вафельная крошка',
        image: require('@/assets/images/productsImg/Candy1.jpg'),
        price: 75
      },
      {
        id: 5,
        category: 'Конфеты',
        tag: 'просто так',
        title: 'Конфета темный шоколад с фундуком',
        description: 'Конфета из темного шоколада, внутри цельный фундук',
        ingredients: 'сахар, масла какао, сухое молоко, тертое какао, лецитин, ванилин, орехи',
        image: require('@/assets/images/productsImg/Candy2.jpg'),
        price: 75
      },
      {
        id: 6,
        category: 'Конфеты',
        tag: 'просто так',
        title: 'Конфета арахисовая',
        description: 'Конфета из молочного шоколада, внутри ганаш с арахисовой пастой, обсыпана арахисовой крошкой',
        ingredients: 'сахар, масла какао, сухое молоко, тертое какао, лецитин, ванилин, орехи,арахисовая паста',
        image: require('@/assets/images/productsImg/Candy3.jpg'),
        price: 75
      },
      {
        id: 7,
        category: 'Наборы',
        tag: '8 марта',
        title: 'Набор конфет "8 Mарта"',
        description: 'Набор из натурального шоколада, подарит радость и удовольствие. Красивая упаковка создаст торжественную обстановку. Вас приятно удивит вкус каждой конфеты.',
        ingredients: 'сахар, масла какао, сухое молоко, тертое какао, лецитин, ванилин, орехи, кокос, вафельная крошка, арахисовая паста',
        image: require('@/assets/images/productsImg/Candy1.jpg'),
        price: 1250
      },
      {
        id: 7,
        category: 'Наборы',
        tag: '8 марта',
        title: 'Набор конфет "8 Mарта"',
        description: 'Набор из натурального шоколада, подарит радость и удовольствие. Красивая упаковка создаст торжественную обстановку. Вас приятно удивит вкус каждой конфеты.',
        ingredients: 'сахар, масла какао, сухое молоко, тертое какао, лецитин, ванилин, орехи, кокос, вафельная крошка, арахисовая паста',
        image: require('@/assets/images/productsImg/CandySet8M.jpg'),
        price: 1099
      },
      {
        id: 8,
        category: 'Наборы',
        tag: 'День учителя',
        title: 'Набор конфет "День учителя"',
        description: 'Набор из натурального шоколада, подарит радость и удовольствие. Красивая упаковка создаст торжественную обстановку. Вас приятно удивит вкус каждой конфеты.',
        ingredients: 'сахар, масла какао, сухое молоко, тертое какао, лецитин, ванилин, орехи, кокос, вафельная крошка, арахисовая паста',
        image: require('@/assets/images/productsImg/CandySetTeachDay.jpg'),
        price: 950
      },
      {
        id: 9,
        category: 'Наборы',
        tag: 'Новый год',
        title: 'Набор конфет "Новый год"',
        description: 'Набор из натурального шоколада, подарит радость и удовольствие. Красивая упаковка создаст торжественную обстановку. Вас приятно удивит вкус каждой конфеты.',
        ingredients: 'сахар, масла какао, сухое молоко, тертое какао, лецитин, ванилин, орехи, кокос, вафельная крошка, арахисовая паста',
        image: require('@/assets/images/productsImg/CandySetNY.jpg'),
        price: 1350
      },
      {
        id: 10,
        category: 'Наборы',
        tag: 'Просто так',
        title: 'Набор конфет "Ассорти"',
        description: 'Набор из натурального шоколада, подарит радость и удовольствие. Красивая упаковка создаст торжественную обстановку. Вас приятно удивит вкус каждой конфеты.',
        ingredients: 'сахар, масла какао, сухое молоко, тертое какао, лецитин, ванилин, орехи, кокос, вафельная крошка, арахисовая паста',
        image: require('@/assets/images/productsImg/CandySetSimple.jpg'),
        price: 850
      }      
    ],
    cart: {
      cartProducts: [],
      totalCount: 0,
      totalPrice: 0
    },
    tagsList: [],
  },
  getters: {
    GET_PRODUCTS_LIST(state) {
      return state.productsList;
    },
    GET_TAGS_LIST(state) {
      return state.tagsList;
    }
  },
  mutations: {
    SET_TAGS_LIST(state) {
      state.tagsList = Set(state.productsList.forEach(el => el.tag));
    },

  },
  actions: {
  },
  modules: {
  }
})

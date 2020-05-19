import Vue from 'vue'
import App from './App.vue'
import VueResource from 'vue-resource'
import router from './router/index.js'
import Vuex from 'vuex';


Vue.use(VueResource)
Vue.use(Vuex);


Vue.config.productionTip = false

const store = new Vuex.Store({
    state: {
        loadingArray:[],
        clothes:
            {
                t_shirts:[
                    {
                        name: 'Marvel',
                        color: 'Черный',
                        material: '100% полиэстер',
                        url: 'https://storage.vsemayki.ru/images/0/1/1989/1989373/previews/people_5_man_tshirt_sport_front_red_500.jpg'
                    },
                    {
                        name: 'Ant-man',
                        color: 'Желтый',
                        material: '100% хлопок',
                        url: 'https://storage.vsemayki.ru/images/0/1/1842/1842593/previews/people_4_manshort_front_yellow_500.jpg'
                    },
                    {
                        name: 'Spider-man',
                        color: 'Красный',
                        material: '100% полиэстер',
                        url: 'https://storage.vsemayki.ru/images/0/1/1805/1805267/previews/people_5_man_tshirt_sport_front_red_500.jpg'
                    }
                ],
                sweatshirts: [
                    {
                        name: 'Superman',
                        color: 'Синий',
                        material: '100% хлопок, френч-терри, мягкий начес внутри',
                        url: 'https://storage.vsemayki.ru/images/0/1/1960/1960129/previews/people_8_hoodie_front_darkblue_500.jpg'
                    },
                    {
                        name: 'Batman',
                        color: 'Чёрный',
                        material: '100% хлопок, френч-терри, мягкий начес внутри',
                        url: 'https://storage.vsemayki.ru/images/0/1/1960/1960137/previews/people_8_hoodie_front_black_500.jpg'
                    },{
                        name: 'Nightwing',
                        color: 'Серый',
                        material: '100% хлопок, френч-терри, мягкий начес внутри',
                        url: 'https://storage.vsemayki.ru/images/0/1/1950/1950095/previews/people_8_hoodie_front_melange_500.jpg'
                    }
                ],
                caps:[
                    {
                        name: 'Sonic',
                        color: 'Синий',
                        material: 'Саржа',
                        url: 'https://storage.vsemayki.ru/images/0/0/161/161079/previews/people_110_caps_front_blue_500.jpg'
                    },
                    {
                        name: 'FBI',
                        color: 'Черный',
                        material: 'Саржа',
                        url: 'https://storage.vsemayki.ru/images/0/0/239/239447/previews/people_110_caps_front_black_500.jpg'
                    },{
                        name: 'Brazzers',
                        color: 'Красный',
                        material: 'Саржа',
                        url: 'https://storage.vsemayki.ru/images/0/0/306/306133/previews/people_110_caps_front_red_500.jpg'
                    }
                ]
            },
        cart:[]
    },
    mutations: {
        setLoadingArray(state,loadingArray) {
            state.loadingArray.push(loadingArray);
        },
        SetClothesToCart(state,cart) {
            state.cart.push(cart);
        },
        EmptyCart(state) {
            state.cart = []
        }

    },
    getters: {
        getClothesByName: state => name => {
            return state.clothes.find( (el) => el.name === name);
        }
    }
})

new Vue({
    router,
    store: store,
    render: h => h(App),
}).$mount('#app')

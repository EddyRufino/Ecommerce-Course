require('./bootstrap');

window.Vue = require('vue');

const Vuex = require('vuex');

window.store = new Vuex.Store({
    state: {
        productsCount: 0
    },
    mutations: {
        increments(state) {
            return state.productsCount++;
        },
        set(state, value) {
            return state.productsCount = value;
        }
    }
})

Vue.component('product', require('./components/Product.vue'));
Vue.component('product-card', require('./components/ProductCard.vue'));
Vue.component('material-collection', require('./components/animations/MaterialCollection.vue'));
Vue.component('add-to-card', require('./components/AddToCart.vue'));

Vue.component('product-counter', require('./components/shopping_cart/Counter.vue'));
Vue.component('products-shopping', require('./components/shopping_cart/ProductsShoppingCart.vue'));

const app = new Vue({
    el: '#app'
});

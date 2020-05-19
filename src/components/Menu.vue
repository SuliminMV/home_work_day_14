<template>
    <div class="menu">
        <span class="link"><router-link to="/t-shirts">Футболки</router-link></span>
        <span class="link"><router-link to="/sweatshirts">Толстовки</router-link></span>
        <span class="link"><router-link to="/caps">Кепки</router-link></span>
        <span class="link"><router-link to="/outOfService">Доставка</router-link></span>
        <span class="link"><router-link to="/outOfService">Контакты</router-link></span>
        <span class="link"><router-link to="/outOfService">Отзывы</router-link></span>
        <span class="link-cart"><router-link to="/cart">Корзина ({{this.$store.state.cart.length}} товаров)</router-link></span>



    </div>
</template>

<script>
    export default {

    }
</script>

<style>
    .menu {
        margin: 10px;
    }
    .link a {
        text-decoration: none;
        border: 1px solid black;
        margin: 5px;
        padding: 3px 5px;
        border-radius: 5px;
    }
    .link-cart a {
        text-decoration: none;
        border: 1px solid black;
        margin: 5px;
        padding: 3px 10px;
        border-radius: 5px;
    }
</style>


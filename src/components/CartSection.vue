<template>
    <div>
        <Menu></Menu>
        <div v-if="this.$store.state.cart != ''" class="cart">
        <h2>Корзина товаров</h2>
        <table>
        <th>Наименование</th>
        <th>Фото товара</th>
        <th>Цвет</th>
        </table>
        <table class="thing" v-for="item in this.$store.state.cart">
            <td><b>{{item.name}}</b> <br><br> Состав: {{ item.material }}</td>
            <td><img :src="item.url" alt="item"></td>
            <td>{{item.color}}</td>
        </table>
        <button class="completed" @click="cartIsEmpty">Оформить заказ</button>
        </div>
        <div v-else>
            <h2>Корзина пуста....</h2>
        </div>
    </div>
</template>

<script>
    import Menu from './Menu.vue'

    export default {
        data: function () {
            return {
                cart: []
            }
        },
        components:{
            Menu:Menu,
        },
        created: function () {
            this.cart = this.$store.cart;
            console.log(this.$store.cart)
        },
        methods: {
            cartIsEmpty: function () {
                this.$router.push({path:'purchaseCompleted'})
                this.$store.commit('EmptyCart')
            }
        }

    }

</script>

<style>

    .cart {
        width:800px;
        margin: 0 auto;
    }
    table {
        border-collapse: collapse;
        margin-left: 100px;
    }
    td,th {
        border: 1px solid black;
        width: 200px;
        vertical-align: middle;
    }
    td > img {
        width: 100px;
    }
    .completed {
        font-size: 20px;
        margin: 10px;
        padding: 20px 30px;
        background: gold;
        border: 5px solid black;
        border-radius: 20px;
        outline: none;
    }
</style>

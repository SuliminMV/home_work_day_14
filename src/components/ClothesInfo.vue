<template>
    <div class="clothesInfo">
        <Menu></Menu>
        <h1>{{$route.params.name}}</h1>
        <div class="info">
            <img :src="info.url" alt="t-shirt">
            <p>Цвет: {{info.color}}</p>
            <p>Материал: {{info.material}}</p>
            <button class="addToCart" @click="addToCart">Добавить в корзину</button>
        </div>
    </div>

</template>

<script>
    import Menu from './Menu.vue'

    export default {
        data: function () {
            return {
                info: '',
                addedToCard:false
            }
        },
        components: {
            Menu: Menu
        },
        props: ['name'],
        created: function () {
            this.info = {
                name: this.$route.params.name,
                url: this.$route.params.url,
                color: this.$route.params.color,
                material: this.$route.params.material
            }
            console.log('Info:', this.info);

        },
        methods: {
            addToCart: function () {
                let cart = this.info;
                console.log('Cart:',cart)
                this.$store.commit('SetClothesToCart',cart )
            }
        }

    }

</script>

<style>
    .addToCart {
        font-size: 16px;
        padding: 20px 30px;
        background: gold;
        border: 5px solid black;
        border-radius: 20px;
        outline: none;
    }

    .addToCart:hover {
        background: crimson;
    }

    .addToCart:active {
        background: aquamarine;
    }




</style>
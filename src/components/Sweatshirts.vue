<template>
    <div>
        <Menu></Menu>
        <h1>Толстовки</h1>
        <div class="sweatshirts">
            <div class="sweatshirt" v-for="sweatshirt in this.$store.state.clothes.sweatshirts">
                <h3> Толстовка {{sweatshirt.name}}</h3>
                <img :src="sweatshirt.url" alt="">
                <p>Чтобы заказать товар нажмите "Подробнее"</p>
                <button @click="infoButtonClicked (sweatshirt.name,sweatshirt.url,sweatshirt.color,sweatshirt.material)">
                    Подробнее
                </button>
            </div>
        </div>
    </div>
</template>

<script>
    import Menu from './Menu.vue'

    export default {
        components: {
            Menu: Menu,
        },
        methods: {
            infoButtonClicked(name,url,color,material) {
                this.$router.push({name:'clothes-info',params:{ name:"Толстовка " +name,url:url,color:color,material:material }});
            }
        }
    }
</script>

<style>
    .sweatshirts {
        margin: 20px 0;
        display: flex;
        justify-content: space-around;


    }

    .sweatshirt {
        border: 1px solid black;
        padding-bottom:10px;

    }
</style>
<template>
    <div>
        <Menu></Menu>
        <h1>Кепки</h1>
        <div class="caps">
            <div class="cap" v-for="cap in this.$store.state.clothes.caps">
                <h3> Кепка {{cap.name}}</h3>
                <img :src="cap.url" alt="">
                <p>Чтобы заказать товар нажмите "Подробнее"</p>
                <button @click="infoButtonClicked (cap.name,cap.url,cap.color,cap.material)">Подробнее</button>
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
                this.$router.push({name:'clothes-info',params:{ name:"Кепка " +name,url:url,color:color,material:material }});
            }
        }
    }
</script>

<style>
    .caps {
        margin: 20px 0;
        display: flex;
        justify-content: space-around;


    }
    .cap {
        border: 1px solid black;
        padding-bottom:10px;

    }
</style>


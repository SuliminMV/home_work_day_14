<template>

    <div id="app">
        <img class="logo" src="https://irecommend.ru/sites/default/files/product-images/10297/5QzJzUc0OyXBLbPXwXng.png" alt="">

        <router-view></router-view>

    </div>
</template>

<script>

</script>

<style>
    #app {
        font-family: Avenir, Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
        margin: 60px auto;
    }
    img {
        width:400px;
    }
    .logo {
        width: 250px;
    }



</style>

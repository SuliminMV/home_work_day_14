<template>
    <div class="loading">
    <h1>Loading</h1>
    <img src="../img/739.gif" alt="gif">
    </div>
</template>

<script>

    export default {
       mounted: function () {

           // let loadingArray= this.$store.state.clothes;
           // this.$store.commit('setLoadingArray',loadingArray)
           // this.loadingComplete();

                setTimeout(function () {
                    this.$router.push({path:'clothes'})
                }.bind(this),2000)
        },
        methods: {
            loadingComplete: function () {
                this.$router.push({path:'clothes'});
            }
        },
    }


</script>

<style>

</style>
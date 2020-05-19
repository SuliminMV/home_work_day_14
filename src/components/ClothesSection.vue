<template>
    <div class="clothes">
        <Menu></Menu>
        <p class="arrows">&uarr; &uarr; &uarr; &uarr; &uarr; &uarr;</p>
        <p class="choice">Выберите интересующий вас раздел</p>
    </div>
</template>

<script>
    import Menu from './Menu.vue'

    export default {
        components: {
            Menu: Menu,
        },
        methods: {
            toT_shirtsSection: function () {
                this.$router.push({path: 't-shirts'});
            },
            toSweatshirtsSection: function () {
                this.$router.push({path: 'sweatshirts'});
            },
            toSCapsSection: function () {
                this.$router.push({path: 'caps'});
            }
        }
    }

</script>

<style>
.arrows,.choice {
    font-size: 40px;
}

</style>
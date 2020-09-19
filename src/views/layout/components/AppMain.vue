<template>
    <div>
        <transition name="fade-transform" mode="out-in">
            <router-view :key="this.$route.path" />
        </transition>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style lang="scss" scoped>

</style>
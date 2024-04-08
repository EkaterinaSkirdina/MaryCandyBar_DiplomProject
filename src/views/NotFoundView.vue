<template>
    <section class="not-found container">
        <img src="@/assets/images/componentsImg/404.jpg" alt="404">
        
    </section>
</template>

<script>
    export default {
        
    }
</script>

<style scoped lang="scss">

.not-found {
    text-align: center;
    & img {
        border-radius: 0 90px;
        width: 90%;
        min-height: 350px;
        object-fit: cover;
    }
}
</style>
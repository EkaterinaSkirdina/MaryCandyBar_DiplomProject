<template>
    <section class="about">
        <div class="about-content container">
            <div class="heading">
            <img src="@/assets/images/componentsImg/Logo.png" alt="logotype image"/>
            <h1 class="brand-heading">Mary Candy Bar</h1>
        </div>
        <div class="description">
            <p class="text">Мы готовим наши сладости с 2018 года. На протяжении 5 лет мы отбирали лучшие рецепты и технологии приготовления. И сегодня мы смело можем предложить вам наши изделия из шоколада. Уверены что они не оставят вас равнодушными. Мы много внимания уделяем мелочам, в том числе в производстве и на стадии отбора сырья и ингредиентов. Нашу продукцию часто покупают в подарок, поэтому мы всегда заботимся о том, чтобы вместе с ней человек получал эмоции. Это эмоции от упаковки, исполнения, ну и, конечно же, от вкуса.</p>
        </div>
        </div>
        <img class="choco-img" src="@/assets/images/componentsImg/choco.png" alt="chokolate decorashion">
    </section>
</template>

<script>
    export default {
        
    }
</script>

<style scoped lang="scss">
.heading {
    text-align: center;
    margin: 60px 0;
}
.description {
    padding: 0 60px;
    text-align: center;
}

.choco-img {
    object-fit: cover;
    width: 100%;
    margin-top: -220px;
    margin-bottom: -6px;
}
</style>
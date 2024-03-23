<template>
    <section class="blog__banner">
      <div class="container">
        <div v-if="isBreadCrumbs" class="breadcrumb">
          <h2 class="breadcrumb__name brand-heading">{{ heading }}</h2>
          <p class="breadcrumb__way">
            <router-link to="/" class="text">Главная</router-link>
            <span class="current-way">{{ heading }}</span>
          </p>
        </div>
      </div>
    </section>
</template>

<script>
    export default {
        props: {
          heading: String,
          srcImg: String,
          isBreadCrumbs: Boolean,
        },
    }
</script>

<style lang="scss">
@import '@/assets/vars.scss';



.blog__banner {
    height: 356px;
    background-size: cover;
    display: flex;
    justify-content: center;
    align-items: flex-end;
    margin-bottom: 200px;
    
}

.breadcrumb {
    background-color: #fff;
    padding: 41px 78px;
    max-width: 503px;
    border-radius: 35px 35px 0 0;
    text-align: center;
    &__way a:not(:last-child)::after {
        content: '/';
        color: $textColor;
        margin-right: 2px;
        padding-left: 5px;
    }   
}

.breadcrumb__way a {
    transition: all 0.2s ease;
    &:hover {
        border-bottom: $lightTextColor solid 1px;
    }
}
.current-way {
  font-family: Jost;
  font-size: 22px;
  line-height: 150%;
  color: $lightTextColor;
  white-space: pre-line;
  font-weight: 500;
}
</style>
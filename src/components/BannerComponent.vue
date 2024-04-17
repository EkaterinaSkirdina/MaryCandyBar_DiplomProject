<template>
    <section class="blog__banner">
      <div class="container">
        <div v-if="isBreadCrumbs" class="breadcrumb">
          <h2 class="breadcrumb__name brand-heading">{{ heading }}</h2>
          <p class="breadcrumb__way">
            <router-link to="/" class="text">Главная</router-link>
            <span class="current-way text">{{ heading }}</span>
          </p>
        </div>
      </div>
    </section>
</template>

<script>
    export default {
        props: {
          heading: String,
          isBreadCrumbs: Boolean,
        },
    }
</script>

<style lang="scss">
@import '@/assets/vars.scss';
.blog__banner {
    height: 250px;
    background-size: cover;
    display: flex;
    justify-content: center;
    align-items: flex-end;    
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
  font-weight: 500;
}
@media (max-width: 767px) {
  .breadcrumb {
    padding: 20px 30px;
  }
  .blog__banner {
    height: 175px;
  }
}
</style>
<template>
    <HeaderComponent />

    <router-view v-slot="{ Component, route }">
        <component :is="Component" :key="route.path" />
    </router-view>
    
</template>

<script>
import HeaderComponent from './components/HeaderComponent.vue';


export default {
  name: 'App',
  components: {
    HeaderComponent,
  }
}
</script>

<style lang="scss">
 
</style>

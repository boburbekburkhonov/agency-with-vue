<template>
    <main>
      <hero />
      <services />
      <center/>
      <advertising/>
      <cards />
    </main>
</template>

<script>
import Hero from './components/Hero.vue'
import Services from './components/Services.vue'
import Center from './components/Center.vue'
import Advertising from './components/Advertising.vue'
import Cards from './components/Cards.vue'
export default {
  components:{
    Hero,
    Services,
    Center,
    Advertising,
    Cards
  }
}
</script>

<style>



</style>
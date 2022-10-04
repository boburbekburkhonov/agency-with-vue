<template>
    <main>
      <hero />
      <services />
      <center/>
      <advertising/>
    </main>
</template>

<script>
import Hero from './components/Hero.vue'
import Services from './components/Services.vue'
import Center from './components/Center.vue'
import Advertising from './components/Advertising.vue'
export default {
  components:{
    Hero,
    Services,
    Center,
    Advertising
  }
}
</script>

<style>



</style>
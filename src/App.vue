<template>
    <main>
      <hero />
      <services />
      <center/>
      <advertising/>
      <cards />
      <last />
    </main>
    <my-footer />
</template>

<script>
import Hero from './components/Hero.vue'
import Services from './components/Services.vue'
import Center from './components/Center.vue'
import Advertising from './components/Advertising.vue'
import Cards from './components/Cards.vue'
import Last from './components/Last.vue'
import MyFooter from './components/Footer.vue'
import '@coreui/coreui/dist/css/coreui.min.css'

export default {
  components:{
    Hero,
    Services,
    Center,
    Advertising,
    Cards,
    Last,
    MyFooter
  }
}
</script>

<style>



</style>
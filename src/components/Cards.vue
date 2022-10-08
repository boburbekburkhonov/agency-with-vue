<template>
  <section class="cards">
    <div class="container">
      <my-desc
      :firstHeading='headingSmall'
      :firstHeadingBlue='headingSmallBlue'
      :secondHeading='heading'
      :desc='desc'  />

      <ul class="cards">

      </ul>
    </div>
  </section>
</template>

<script>
import MyDesc from './UI/MyDesc.vue'
export default {
  components: { MyDesc },
    data() {
    return {
      headingSmall:'Neler',
      headingSmallBlue:'Yapıyoruz?',
      heading:'Öğreniyoruz, sizinle paylaşıyoruz.',
      desc:'Alanında uzman yazar arkadaşlarımızın, bilgi paylaşımı yaptıkları yazıları inceleyelim.'
    }
  }
}
</script>

<style>

</style>
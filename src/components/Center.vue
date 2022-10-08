<template>
  <section class="center" data-aos="fade-right"
     data-aos-offset="300"
     data-aos-easing="ease-in-sine">
    <div class="container d-flex align-items-center justify-content-center flex-column">
      <h3 class="center-heading">
        Ürününüz veya hizmetiniz için en iyisini birlikte yapalım.
      </h3>

      <p class="center-desc">
        360° dijital marka danışmanlığı, web tasarım ve reklam ajansıdır. İşletmelerin ihtiyaçlarına uygun web tasarım ve web yazılım hizmetleri sunmaktayız.
      </p>

      <my-button class="center-btn">
        HEMEN TEKLİF ALIN
      </my-button>
    </div>
  </section>
</template>

<script>
import MyButton from './UI/MyButton.vue'
import AOS from 'aos'
import 'aos/dist/aos.css'
export default {
  components: { MyButton },

}
</script>

<style>

  .center {
    padding: 70px 0;
    background: rgba(22, 93, 245, 0.1);
  }

  .center-heading {
    margin: 0;
    max-width: 761px;
    font-weight: 600;
    font-size: 50px;
    line-height: 62px;
    text-align: center;
    color: #000000;
  }

  .center-desc {
    margin: 0;
    margin-top: 30px;
    margin-bottom: 30px;
    max-width: 717px;
    font-weight: 500;
    font-size: 16px;
    line-height: 26px;
    text-align: center;
    color: rgba(0, 0, 0, 0.6);
  }

  .center-btn {
    border: transparent;
    max-width: 219px;
    width: 100%;
  }

  .center-btn::after {
    margin-left: 10px;
    content: '';
    display: inline-block;
    width: 20px;
    height: 20px;
    background-image: url(../assets/images/herobtn.png);
    position: relative;
    top: 5px;
  }

</style>
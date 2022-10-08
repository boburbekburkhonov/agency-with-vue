<template>
  <section class="last" data-aos="fade-right"
     data-aos-offset="300"
     data-aos-easing="ease-in-sine">
    <div class="container">
      <h3 class="last-heading">
        Memnuniyetini bildiren müşterilerimiz
      </h3>

      <CCarousel class="last-list" controls dark wrap transition>
        <CCarouselItem class="last-item">
          <img src="../assets/images/woman.png" alt="woman" width="72" height="72">

          <h3 class="last-list-heading">
            Jane Cooper
          </h3>

          <p class="last-list-desc">
            The Walt Disney Company
          </p>

          <p class="last-list-desc-last">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ac amet feugiat donec sit morbi tristique massa enim. Consequat odio adipiscing est odio nibh. Nec scelerisque hendrerit in eu purus faucibus quam. Quis commodo tortor aliquam tortor
          </p>

          <img src="../assets/images/star.png" alt="star" width="160" height="24">
        </CCarouselItem>
        <CCarouselItem  class="last-item">
        <img src="../assets/images/woman.png" alt="woman" width="72" height="72">

          <h3 class="last-list-heading">
            Tommy shelby
          </h3>

          <p class="last-list-desc">
            The Walt Disney Company
          </p>

          <p class="last-list-desc-last">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ac amet feugiat donec sit morbi tristique massa enim. Consequat odio adipiscing est odio nibh. Nec scelerisque hendrerit in eu purus faucibus quam. Quis commodo tortor aliquam tortor
          </p>

          <img src="../assets/images/star.png" alt="star" width="160" height="24">
        </CCarouselItem>
        <CCarouselItem class="last-item">
        <img src="../assets/images/woman.png" alt="woman" width="72" height="72">

          <h3 class="last-list-heading">
            Joe Cole
          </h3>

          <p class="last-list-desc">
            The Walt Disney Company
          </p>

          <p class="last-list-desc-last">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ac amet feugiat donec sit morbi tristique massa enim. Consequat odio adipiscing est odio nibh. Nec scelerisque hendrerit in eu purus faucibus quam. Quis commodo tortor aliquam tortor
          </p>

          <img src="../assets/images/star.png" alt="star" width="160" height="24">
        </CCarouselItem>
      </CCarousel>
    </div>
  </section>
</template>

<script>
import { CButton, CCarousel, CCarouselItem } from '@coreui/vue'
import AOS from 'aos'
import 'aos/dist/aos.css'
export default {
  components: {
    CButton,
    CCarousel,
    CCarouselItem
  }
}
</script>

<style>

  .last {
    padding: 120px 0;
  }

  .last-heading {
    max-width: 761px;
    margin: 0;
    margin-top: 20px;
    margin: auto;
    font-weight: 600;
    font-size: 42px;
    line-height: 52px;
    text-align: center;
    color: #000000;
  }

  .last-list {
    margin-top: 80px;
  }

  .last-item {
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }

  .last-list-heading {
    margin: 0;
    font-weight: 600;
    font-size: 24px;
    line-height: 36px;
    text-align: center;
    color: #000000;
  }

  .last-list-desc {
    margin: 0;
    font-weight: 400;
    font-size: 14px;
    line-height: 21px;
    text-align: center;
    color: rgba(0, 0, 0, 0.6);
  }

  .last-list-desc-last {
    max-width: 587px;
    margin: 0;
    margin: auto;
    margin-top: 30px;
    margin-bottom: 30px;
    font-weight: 500;
    font-size: 16px;
    line-height: 183%;
    text-align: center;
    color: rgba(0, 0, 0, 0.4);
  }

</style>
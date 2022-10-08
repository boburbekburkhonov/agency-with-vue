<template>
  <section class="hero">
    <div class="hero-background">
      <Header/>
      <div class="container">
        <div class="hero-top">
          <h1 class="hero-heading">
            Işinize Uygun
            <span class="hero-heading-blue">
              Tasarım
            </span>
            Ve
            <span class="hero-heading-blue">
              Yazılımlar
            </span>
          </h1>

          <p class="hero-desc">
            360° dijital marka danışmanlığı, web tasarım ve reklam ajansıdır. İşletmelerin ihtiyaçlarına uygun web tasarım ve web yazılım hizmetleri sunmaktayız.
          </p>

          <my-button class="hero-btn">
            Detaylı İncele
          </my-button>
        </div>

        <div class="hero-bottom">
          <h2 class="hero-bottom-heading">
            Web sitesi ve Kurumsal Kimlik Tasarımları
          </h2>

          <p class="hero-bottom-desc">
            Online dünyadaki yüzünüz olan web sitelerinizi tasarlar. E-ticaret siteleri dahil olmak üzere tüm ihyitaçlarınıza çözümler sunar.
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import Header from './Header.vue'
import MyButton from './UI/MyButton.vue'

export default {
  components: {
    Header,
    MyButton
  },

}
</script>

<style>

  .hero-background {
    padding-top: 24px;
    background-image: url(../assets/images/background.png);
    background-size: cover;
  }

  .hero-top {
    padding: 68px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  .hero-heading {
    margin: 0;
    max-width: 732px;
    font-weight: 600;
    font-size: 64px;
    line-height: 76px;
    text-align: center;
    text-transform: capitalize;
    color: #000000;
  }

  .hero-heading-blue {
    color: #165DF5;
  }

  .hero-desc {
    max-width: 717px;
    margin: 0;
    margin-top: 30px;
    font-weight: 500;
    font-size: 16px;
    line-height: 26px;
    text-align: center;
    color: rgba(0, 0, 0, 0.6);
  }

  .hero-btn {
    margin-top: 30px;
    max-width: 189px;
    width: 100%;
    border: transparent;
  }

  .hero-btn::after {
    margin-left: 10px;
    content: '';
    display: inline-block;
    width: 20px;
    height: 20px;
    background-image: url(../assets/images/herobtn.png);
    position: relative;
    top: 5px;
  }

  .hero-bottom {
    margin: auto;
    margin-top: 70px;
    padding: 165px 97px;
    max-width: 1200px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-image: url(../assets/images/hero-bottom.png);
    background-size: cover;
    border-radius: 12px;
  }

  .hero-bottom-heading {
    margin: 0;
    max-width: 761px;
    font-weight: 600;
    font-size: 50px;
    line-height: 60px;
    text-align: center;
    color: #FFFFFF;
  }

  .hero-bottom-desc {
    margin: 0;
    margin-top: 22px;
    max-width: 662px;
    font-weight: 400;
    font-size: 18.662px;
    line-height: 30px;
    text-align: center;
    color: rgba(255, 255, 255, 0.6);
  }

</style>
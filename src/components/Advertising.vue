<template>
  <section class="advertising">
    <div class="container">
      <my-desc
      :firstHeading='headingSmall'
      :firstHeadingBlue='headingSmallBlue'
      :secondHeading='heading'
      :desc='desc'  />

      <div class="advertising-last d-flex justify-content-between">
        <img src="../assets/images/advertising-img.png" alt="advertising" width="666" height="697">

        <div class="advertising-last-right">
          <div class="advertising-last-right-top">
            <h3 class="advertising-last-right-top-heading">
              Sizin için neler yapabiliriz beraber bakalım.
            </h3>

            <p class="advertising-last-right-top-desc">
              Tüm platformlarda sunduğumuz, web tasarım hizmetimiz ile ilgili bilgiler edinelim.
            </p>
          </div>

          <ul class="advertising-last-right-list list-unstyled">
            <li class="advertising-last-right-item">
              <h3 class="advertising-last-right-item-heading">
                Web Tasarım
              </h3>

              <p class="advertising-last-right-item-desc">
                Var olan veya yeni kurulan işletmenizin, modern bir kurumsal kimliğe sahip olması için web sitesi.
              </p>
            </li>

            <li class="advertising-last-right-item">
              <h3 class="advertising-last-right-item-heading">
                Dijital Pazarlama
              </h3>

              <p class="advertising-last-right-item-desc">
                Web sitenizin veya işletmenizin, daha popüler hale gelmesi için çeşitli hizmetler sunuyoruz.
              </p>
            </li>

            <li class="advertising-last-right-item">
              <h3 class="advertising-last-right-item-heading">
                Prodüksiyon
              </h3>

              <p class="advertising-last-right-item-desc">
                İşletmenizin tanıtımının daha güzel hale gelmesi için, fotoğraf çekimi ve prodüksiyon yapıyoruz.
              </p>
            </li>
          </ul>
        </div>
      </div>
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
      heading:'Sizin için neler yapıyoruz?',
      desc:'360° dijital marka danışmanlığı, web tasarım ve reklam ajansıdır. İşletmelerin ihtiyaçlarına uygun web tasarım ve web yazılım hizmetleri sunmaktayız.'
    }
  }
}
</script>

<style>
  .advertising {
    padding: 120px;
  }

  .advertising-last {
    margin-top: 70px;
  }

  .advertising-last-right-top-heading {
    max-width: 565px;
    margin: 0;
    font-weight: 500;
    font-size: 36px;
    line-height: 141%;
    color: #000000;
  }

  .advertising-last-right-top-desc {
    margin: 0;
    margin-top: 30px;
    margin-bottom: 90px;
    max-width: 418px;
    font-weight: 500;
    font-size: 18px;
    line-height: 165.4%;
    color: rgba(0, 0, 0, 0.4);
  }

  .advertising-last-right-item {
    max-width: 538px;
  }

  .advertising-last-right-item + .advertising-last-right-item {
    margin-top: 34px;
  }

  .advertising-last-right-item-heading {
    margin: 0;
    font-weight: 500;
    font-size: 24.8764px;
    line-height: 37px;
    color: #000000;
  }

  .advertising-last-right-item-desc {
    margin: 0;
    margin-top: 10px;
    font-weight: 500;
    font-size: 18px;
    line-height: 147.5%;
    color: rgba(0, 0, 0, 0.4);
  }
</style>
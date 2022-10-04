<template>
  <section class="services">
    <div class="container">
      <my-desc
      :firstHeading='headingSmall'
      :firstHeadingBlue='headingSmallBlue'
      :secondHeading='heading'
      :desc='desc'  />

      <ul class="d-flex align-items-center justify-content-between services-list list-unstyled p-0">
        <li class="services-item">
          <img src="../assets/images/cofe.png" alt="cofe" width="64" height="64">

          <h3 class="services-list-heading">
            Keşif ve Planlama
          </h3>

          <p class="services-list-desc">
            Belirlenen strateji ile tasarımın ve yazılımın oluşturulması sağlanır.
          </p>
        </li>

        <li class="services-item">
          <img src="../assets/images/cubik.png" alt="cofe" width="64" height="64">

          <h3 class="services-list-heading">
            Tasarım ve Geliştirme
          </h3>

          <p class="services-list-desc">
            Belirlenen strateji ile tasarımın ve yazılımın oluşturulması sağlanır.
          </p>
        </li>

        <li class="services-item">
          <img src="../assets/images/time.png" alt="cofe" width="64" height="64">

          <h3 class="services-list-heading">
            Test ve Yayına Alma
          </h3>

          <p class="services-list-desc">
            Belirlenen strateji ile tasarımın ve yazılımın oluşturulması sağlanır.
          </p>
        </li>
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
      heading:'3 adımda çalışma sürecimiz',
      desc:'360° dijital marka danışmanlığı, web tasarım ve reklam ajansıdır. İşletmelerin ihtiyaçlarına uygun web tasarım ve web yazılım hizmetleri sunmaktayız.'
    }
  }
}
</script>

<style>

  .services {
    padding-top: 139px;
    padding-bottom: 120px;
  }

  .services-list {
    margin: 0;
    margin: 56px;
  }

  .services-item {
    max-width: 344px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
  }

  .services-list-heading {
    margin: 0;
    margin-top: 20px;
    margin-bottom: 11px;
    font-weight: 500;
    font-size: 20px;
    line-height: 26px;
    text-align: center;
    color: #000000;
  }

  .services-list-desc {
    margin: 0;
    font-weight: 500;
    font-size: 16px;
    line-height: 24px;
    text-align: center;
    color: rgba(0, 0, 0, 0.6);
  }

</style>
<template>
  <section class="cards" data-aos="fade-right"
     data-aos-offset="300"
     data-aos-easing="ease-in-sine">
    <div class="container">
      <my-desc
      :firstHeading='headingSmall'
      :firstHeadingBlue='headingSmallBlue'
      :secondHeading='heading'
      :desc='desc'  />

      <ul class="cards-list list-unstyled d-flex justify-content-center align-items-center flex-wrap">
        <li class="cards-item">
          <a class="cards-list-link" href="#">
            Hepsini Gör
          </a>
        </li>

        <li class="cards-item">
          <a class="cards-list-link" href="#">
            Web Tasarım
          </a>
        </li>

        <li class="cards-item">
          <a class="cards-list-link" href="#">
            Kurumsal Kimlik Tasarımı
          </a>
        </li>

        <li class="cards-item">
          <a class="cards-list-link" href="#">
            SEO
          </a>
        </li>

        <li class="cards-item">
          <a class="cards-list-link" href="#">
            Dijital Pazarlama
          </a>
        </li>
      </ul>

      <ul class="card-list-last list-unstyled d-flex justify-content-between align-items-center flex-wrap">
        <li class="card-item-last">
          <img src="../assets/images/comp.png" alt="comp" width="249" height="170">

          <span class="card-list-last-span">
            Dijital Pazarlama
          </span>

          <h3 class="card-list-last-heading">
            Sosyal CRM Nedir? Sosyal CRM Avantajları Nelerdir?
          </h3>

          <p class="card-list-last-desc">
            Sosyal CRM, işletmelerin müşteri ilişkileri yönetimi CRM stratejilerini sosyal...
          </p>

          <div class="d-flex flex-row-reverse">
            <a class="card-list-last-btn" href="#">
              Devamını Oku
            </a>
          </div>
        </li>

          <li class="card-item-last">
          <img src="../assets/images/shar.png" alt="comp" width="249" height="170">

          <span class="card-list-last-span">
            Dijital Pazarlama
          </span>

          <h3 class="card-list-last-heading">
            Dijital PR Nedir? Dijital PR Neden Gereklidir?
          </h3>

          <p class="card-list-last-desc">
            Dijital PR, sosyal medya platformları ve web siteleri üzerinden işletmelerin...
          </p>

          <div class="d-flex flex-row-reverse">
            <a class="card-list-last-btn" href="#">
              Devamını Oku
            </a>
          </div>
        </li>

          <li class="card-item-last">
          <img src="../assets/images/mountain.png" alt="comp" width="249" height="170">

          <span class="card-list-last-span">
            Kurumsal Kimlik Tasarımı
          </span>

          <h3 class="card-list-last-heading">
            Dijital Ajans Nedir? Doğru Dijital Ajans Nasıl Seçilir?
          </h3>

          <p class="card-list-last-desc">
            Bir dijital ajans arama motorları, e ticaret, web sitesi tasarımı gibi birçok alanda hizmet...
          </p>

          <div class="d-flex flex-row-reverse">
            <a class="card-list-last-btn" href="#">
              Devamını Oku
            </a>
          </div>
        </li>

          <li class="card-item-last">
          <img src="../assets/images/more.png" alt="comp" width="249" height="170">

          <span class="card-list-last-span">
            Dijital Pazarlama
          </span>

          <h3 class="card-list-last-heading">
            Online İtibar Yönetimi Nedir?
          </h3>

          <p class="card-list-last-desc">
            Online itibar yönetimi, markanızla dijital dünyada ortaya çıkan algıyı profesyonel şekilde yönetmek...
          </p>

          <div class="d-flex flex-row-reverse">
            <a class="card-list-last-btn" href="#">
              Devamını Oku
            </a>
          </div>
        </li>
      </ul>
    </div>
  </section>
</template>

<script>
import MyDesc from './UI/MyDesc.vue'
import AOS from 'aos'
import 'aos/dist/aos.css'

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

  .cards {
    padding: 70px 0;
    background: rgba(196, 196, 196, 0.1);
  }

  .cards-list {
    margin: 0;
    padding: 0;
    margin-top: 60px;
  }

  .cards-item + .cards-item {
    margin-left: 20px;
  }

  .cards-list-link {
    text-decoration: none;
    padding: 10px 25px;
    font-weight: 500;
    font-size: 16px;
    line-height: 30px;
    color: rgba(255, 255, 255, 0.8);
    background: rgba(22, 93, 245, 0.6);
    border: 0.5px solid #165DF5;
    border-radius: 12px;
  }

  .card-list-last {
    margin: 0;
    padding: 0;
    margin-top: 30px;
  }

  .card-item-last {
    padding: 15px 16px;
    background: #FFFFFF;
    border-radius: 8px;
    max-width: 282px;
  }

  .card-list-last-span {
    font-weight: 500;
    font-size: 14px;
    line-height: 18px;
    color: #165DF5;
  }

  .card-list-last-heading {
    margin: 0;
    margin-top: 13px;
    margin-bottom: 13px;
    font-weight: 500;
    font-size: 18.662px;
    line-height: 24px;
    color: #000000;
  }

  .card-list-last-desc {
    margin: 0;
    margin-bottom: 23px;
    font-weight: 500;
    font-size: 14px;
    line-height: 18px;
    color: rgba(0, 0, 0, 0.4);
  }

  .card-list-last-btn {
    align-self: flex-end;
    text-decoration: none;
    font-weight: 400;
    font-size: 14px;
    line-height: 18px;
    color: #165DF5;
  }

</style>
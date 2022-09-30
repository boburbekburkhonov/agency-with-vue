<template>
  <header>
      <div class="container d-flex align-items-center justify-content-between">
        <a class="header-logo" href="#">
          <img src="../assets/images/logo.svg" alt="logo" width="175" height="44">
        </a>

        <nav class="sitenav d-flex align-items-center">
          <ul class="sitenav-list list-unstyled d-flex align-items-center">
            <li class="sitenav-item">
              <a class="sitenav-link" href="#">
                Ana Sayfa
              </a>
            </li>

            <li class="sitenav-item">
              <a class="sitenav-link" href="#">
                Kurumsal
              </a>
            </li>

            <li class="sitenav-item">
              <a class="sitenav-link" href="#">
                Neler Yapıyoruz?
              </a>
            </li>

            <li class="sitenav-item">
              <a class="sitenav-link" href="#">
                Blog
              </a>
            </li>
          </ul>

          <select class="sitenav-select me-4" name="language">
            <option value="uz">RU</option>
            <option value="uz">UZ</option>
            <option value="uz" selected>EN</option>
          </select>

          <my-button class="sitenav-btn">
            Müşteri Girişi
          </my-button>
        </nav>
      </div>
  </header>
</template>

<script>
import MyButton from './UI/MyButton.vue';
import '../assets/CSS/generel.css'

export default {
  components: { MyButton },

}
</script>

<style>

  header {
    padding-top: 24px;
    padding-bottom: 24px;
  }

  .header-logo {
    transition: all .4s;
  }

  .header-logo:hover {
    opacity: 0.7;
  }

  .header-logo:active {
    opacity: 0.5;
  }

  .sitenav-list {
    margin: 0;
    margin-right: 190px;
  }

  .sitenav-item + .sitenav-item {
    margin-left: 40px;
  }

  .sitenav-link {
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 24px;
    text-align: center;
    color: rgba(0, 0, 0, 0.7);
    text-decoration: none;
    transition: all 0.5s;
  }

  .sitenav-link:hover {
    opacity: 0.7;
  }

  .sitenav-link:active {
    opacity: 0.5;
  }

  .sitenav-select {
    appearance: none;
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 500;
    font-size: 15px;
    line-height: 24px;
    text-align: center;
    color: rgba(0, 0, 0, 0.7);
    border: none;
  }

  .sitenav-select:focus{
    outline: none;
    border: none;
  }

  .sitenav-btn {
    border: transparent;
    max-width: 145px;
  }

</style>
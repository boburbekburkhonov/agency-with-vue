<template>
  <footer class="footer">
    <div class="container d-flex align-items-center justify-content-between">
      <ul class="footer-list list-unstyled d-flex align-items-center m-0">
        <li class="footer-item">
          <a class="footer-list-link" href="#">
            Ana Sayfa
          </a>
        </li>

        <li class="footer-item">
          <a class="footer-list-link" href="#">
            Kurumsal
          </a>
        </li>

        <li class="footer-item">
          <a class="footer-list-link" href="#">
            Neler Yapıyoruz?
          </a>
        </li>

        <li class="footer-item">
          <a class="footer-list-link" href="#">
            Projelerimiz
          </a>
        </li>

        <li class="footer-item">
          <a class="footer-list-link" href="#">
            Blog
          </a>
        </li>
      </ul>

      <p class="footer-desc">
        © {{new Date().getFullYear()}} Can Çevik. All rights reserved
      </p>
    </div>
  </footer>
</template>

<script>
export default {

}
</script>

<style>

  .footer {
    padding: 0 !important;
    padding: 23px 0 !important;
    background: #165DF5 !important;
  }

  .footer-item + .footer-item {
    margin-left: 32px;
  }

  .footer-list-link {
    text-decoration: none;
    font-weight: 500;
    font-size: 14px;
    line-height: 24px;
    color: #FFFFFF;
  }

  .footer-desc {
    margin: 0;
    font-weight: 500;
    font-size: 14px;
    line-height: 24px;
    text-align: right;
    color: #FFFFFF;
  }

</style>
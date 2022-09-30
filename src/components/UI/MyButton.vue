<template>
  <button class="button">
    <slot></slot>
  </button>
</template>

<script>
export default {
  name:'my-button'
}
</script>

<style>
  .button {
    padding: 11px 24px;
    background: #165DF5;
    border-radius: 50px;
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 500;
    font-size: 15px;
    line-height: 24px;
    text-align: center;
    color: #FFFFFF;
    transition: all .4s;
  }

  .button:hover {
    opacity: 0.7;
  }

  .button:active {
    opacity: 0.5;
  }

</style>
<template>
  <div class="d-flex flex-column justify-content-center align-items-center">
    <h3 class="desc-heading-small">
      {{firstHeading}}
      <span class="desc-heading-small-blue">
        {{firstHeadingBlue}}
      </span>
    </h3>
    <h3 class="desc-heading">
      {{secondHeading}}
    </h3>
    <p class="desc">{{desc}}</p>
  </div>
</template>

<script>
export default {
  props:{
    firstHeading : {
      type:String
    },
    firstHeadingBlue:{
      type:String
    },
     secondHeading : {
      type:String
    },
     desc : {
      type:String
    }
  }
}
</script>

<style>

  .desc-heading-small {
    margin: 0;
    font-weight: 500;
    font-size: 16px;
    line-height: 24px;
    color: #000000;
    margin-bottom: 20px;
  }

  .desc-heading-small-blue {
    color: #165DF5;
  }

  .desc-heading {
    margin: 0;
    font-weight: 500;
    font-size: 32px;
    line-height: 48px;
    color: #000000;
    margin-bottom: 20px;
  }

  .desc {
    margin: 0;
    max-width: 710px;
    font-weight: 500;
    font-size: 16px;
    line-height: 24px;
    text-align: center;
    color: rgba(0, 0, 0, 0.6);
  }

</style>
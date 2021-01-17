<template>
  <div class="top-nav">
    <a class="active" href="#home">Dashboard</a>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss">
@import '~assets/styles/variables.scss';


.top-nav {
  overflow: hidden;
  background-color: $white;

  a {
    float: left;
    color: $black;
    text-align: center;
    padding: 14px 16px;
    text-decoration: none;
    font-size: 17px;
  }
}
</style>

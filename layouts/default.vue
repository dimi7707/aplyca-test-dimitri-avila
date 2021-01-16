<template>
  <div>
    <side-bar />
    <div class="main-content">
      <Nuxt />
    </div>
  </div>
</template>

<script lang="ts">
import SideBar from '~/components/layout/side-bar.vue';

export default {
  components: {
    SideBar
  }
}
</script>

<style lang="scss">
@import '~/assets/styles/variables.scss';

body {
  background-color: $main-body-bg;
}

.main-content {
  margin-left: 160px;
  font-size: 28px;
  padding: 0px 10px;
}

@media screen and (max-height: 450px) {
  .sidenav {padding-top: 15px;}
  .sidenav a {font-size: 18px;}
}
</style>

<template>
  <div>
    <side-bar />
    <div class="right-side">
      <top-nav />
      <div class="main-content">
        <Nuxt />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import SideBar from '~/components/layout/side-bar.vue';
import TopNav from '~/components/layout/top-nav.vue';

export default {
  components: {
    SideBar,
    TopNav
  }
}
</script>

<style lang="scss">
@import '~/assets/styles/variables.scss';

body {
  background-color: $main-body-bg;
}

.right-side {
  margin-left: 3em;
  margin-right: 3em;
  position: absolute;
  top: 0;
  left: 150px;
  width: 80%;
}

.main-content {

}

@media screen and (max-height: 450px) {
  .sidenav {padding-top: 15px;}
  .sidenav a {font-size: 18px;}
}
</style>

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
@import url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,500;1,700;1,900&display=swap');
@import '~/assets/styles/variables.scss';

body {
  background-color: $main-body-bg;
  font-family: 'Roboto', sans-serif;
}

.right-side {
  margin-left: 3em;
  margin-right: 3em;
  position: absolute;
  top: 0;
  left: 150px;
  width: 80%;
}

@media screen and (max-height: 450px) {
  .sidenav {padding-top: 15px;}
  .sidenav a {font-size: 18px;}
}
</style>

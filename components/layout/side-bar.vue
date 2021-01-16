<template>
  <div class="side-bar">
    <h3>System</h3>
    <ul>
      <li>
        <img src="~assets/images/user-icon.svg" alt="">
        <a href="#about">Users</a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss">
@import '~/assets/styles/variables.scss';
.side-bar {
  padding-left: 20px;
  height: 100%;
  width: 150px;
  position: fixed;
  z-index: 1;
  top: 0;
  left: 0;
  background-color: $white;
  overflow-x: hidden;
  padding-top: 20px;

  ul {
    padding-left: 0;

    li {
      list-style: none;

      a {
        margin-left: 0;
        text-decoration: none;
        color: $black;
      }
    }
  }

  h3 {
    font-weight: 500;
    font-size: 24px;
  }
}

</style>

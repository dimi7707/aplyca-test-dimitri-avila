<template>
  <div class="top-nav">
    <div class="menu-options">
      <img src="~/assets/images/menu-left.svg" alt="menu-symbol">
      <a href="#home">Dashboard</a>
    </div>
    <div class="user-profile">
      <img src="~/assets/images/generic-user-image.svg" alt="">
      <span class="user-name">Marlene Sasoeur</span>
    </div>
  </div>
</template>

<style lang="scss">
@import '~assets/styles/variables.scss';

.top-nav {
  overflow: hidden;
  background-color: $white;
  padding: .7em 2em .7em 2em;
  display: flex;
  justify-content: space-between;

  .menu-options {
    display: flex;
  }

  a {
    float: left;
    color: $grey-variant;
    text-align: center;
    padding: 14px 16px;
    text-decoration: none;
    font-size: 14px;
  }

  .user-name {
    color: $grey-variant;
    font-size: 14px;
    margin-left: 1em;

  }
}
</style>

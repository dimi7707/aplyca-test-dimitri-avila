<template>
  <div>
    <h1>
      Probando el sass
    </h1>
    <users-table />

  </div>
</template>

<script lang="ts">
import UsersTable from '~/components/shared/users-table.vue';

export default {
  layout: 'default',
  components: {
    UsersTable
  }
}
</script>

<style lang="scss">

</style>

<template>
  <div>
    <h1>
      Probando el sass
    </h1>
    <users-table :users="users" />

  </div>
</template>

<script>
import { mapState, mapGetters } from 'vuex';

import UsersTable from '~/components/shared/users-table.vue';

export default {
  layout: 'default',
  components: {
    UsersTable
  },
  data() {
    return {
      users: []
    }
  },
  created() {
    this.getUsers();
  },
  methods: {
    async getUsers() {
      const users = await this.$store.dispatch('user/fetchUsers');
      this.users = users;
    }
  },

}
</script>

<style lang="scss">

</style>

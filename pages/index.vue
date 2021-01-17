<template>
  <div>
    <div class="user-actions-section">
      <button class="btn-add-user">
        <span class="plus-symbol">+</span>
        Add new user
      </button>
    </div>
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
@import '~/assets/styles/variables.scss';

.user-actions-section {
  margin-top: 1.5em;
  margin-bottom: 1.5em;
}

.btn-add-user {
  border: 0;
  color: $white;
  background-color: $color-primary-button;
  border-radius: 8px;
  padding: 1em 2.5em 1em 2.5em;
  font-size: 14px;

  .plus-symbol {
    margin-right: 1em;
  }
}

</style>

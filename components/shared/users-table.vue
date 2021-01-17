<template>
  <div class="users-table">
    <h3>Users</h3>
    <table class="table" cellspacing="0" cellpadding="0">
      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Username</th>
          <th>Email</th>
          <th>Address</th>
          <th>Company</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="user in users" :key="user.userId">
          <td v-html="user.id" />
          <td v-html="user.name" />
          <td v-html="user.username" />
          <td v-html="user.email" />
          <td
            v-html="user.address.street + ' ' + user.address.suite + ' ' + user.address.city"
          />
          <td v-html="user.company.name" />
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>


export default {
  props: {
    users: Array
  },
  data() {
    return {

    }
  }
}
</script>

<style lang="scss">
@import '~/assets/styles/variables.scss';

.users-table {
  background-color: $white;
  padding: 20px;
}

.table {
  width: 100%;

  thead {
    th {
      text-align: left;
      color: $grey-table-header;
      padding-bottom: 1em;
      padding-top: 1em;
    }
  }

  tbody {
    color: $color-body-table;

    tr:nth-child(even) {
      background-color: $soft-grey-table;
    }

    td {
      text-align: left;
      padding-bottom: 1em;
      padding-top: 1em;
      margin-left: 0;
      margin-right: 0;
    }
  }
}
</style>

<template>
  <div class="users-table">
    <div class="title-table-section">
      <h3>Users</h3>
      <img src="~/assets/images/menu-dots.svg" alt="">
    </div>
    <table class="table" cellspacing="0" cellpadding="0">
      <thead>
        <tr>
          <th width="5%">ID</th>
          <th>Name</th>
          <th>Username</th>
          <th>Email</th>
          <th>Address</th>
          <th>Company</th>
          <th>Options</th>
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
          <td>
            <a :href="`users/${user.id}/todos`">
              View todos
            </a>
          </td>
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

.title-table-section {
  display: flex;
  justify-content: space-between;

  img {
    margin-right: 1em;
  }
}

h3 {
  font-size: 15px;
  color: $black-for-titles;
}

.table {
  width: 100%;
  text-align: left;

  thead {
    th {
      color: $grey-table-header;
      padding-top: 1em;
      padding-bottom: 1em;
      font-size: 14px;
    }
  }

  tbody {
    color: $color-body-table;
    font-size: 14px;

    a {
      color: $color-link;
    }

    tr:nth-child(even) {
      background-color: $soft-grey-table;
    }

    td {
      padding-bottom: 2em;
      padding-top: 2em;
      margin-left: 0;
      margin-right: 0;
    }
  }
}
</style>

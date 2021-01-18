<template>
  <div class="todo-card">
    <h3 v-html="`Title: ${title}`"></h3>
    <span
      class="assigned"
      v-html="`<b>Assigned:</b> ${assigned}`"
    />
    <div v-if="completed" class="status-task">
      <span class="task-done" v-html="'Done'" />
    </div>
    <div v-else class="status-task">
      <span class="task-pending" v-html="'Pending'" />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: String,
    assigned: String,
    completed: Boolean
  }
}
</script>

<style lang="scss">
@import '~/assets/styles/variables.scss';

.todo-card {
  padding: 1em 1em 2em 2em;
  box-shadow: 3px 3px 3px 3px $soft-grey-card;
  background-color: $white;
  border-radius: 20px;
}

.todo-card:hover {
  background-color: $soft-grey-table;
}

.assigned {
  font-style: italic;
}

.status-task {
  margin-top: 20px;
}

.task-done {
  background-color: $green-done-task;
  padding: 5px 15px 5px 15px;
  color: white;
  font-weight: bold;
}

.task-pending {
  background-color: $red-pending-task;
  padding: 5px 15px 5px 15px;
  color: white;
  font-weight: bold;
}

</style>

<template>
  <div>
    <h1>ToDo List</h1>
      <todo-card
        v-for="task in todoList"
        :key="task.id"
        :assigned="currentUser"
        :title="task.title"
        :completed="task.completed"
        class="mt-2 mb-2"
      />
  </div>
</template>

<script>
import TodoCard from '~/components/shared/todo-card.vue';

export default {
  components: {
    TodoCard
  },
  data() {
    return {
      todoList: [],
      currentUser: ''
    }
  },
  created() {
    this.getToDosByUser();
  },
  mounted() {
    this.currentUser = localStorage.getItem('currentUser');
  },
  methods: {
    async getToDosByUser(){
      const userId = this.$route.params.id;
      const todoList = await this.$store.dispatch('user/fetchToDoByUser', { userId: userId });
      this.todoList = todoList;
    }
  }
}
</script>

<style lang="scss">
  .mt-2 {
    margin-top: 2em;
  }

  .mb-2 {
    margin-bottom: 2em;
  }

</style>

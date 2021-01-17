<template>
  <div>
      <h1>Tamos bien, rutas dinamicas</h1>
  </div>
</template>

<script>
export default {
  created() {
    this.getToDosByUser();
  },
  methods: {
    async getToDosByUser(){
      const userId = this.$route.params.id;
      const todoList = await this.$store.dispatch('user/fetchToDoByUser', { userId: userId });
      console.log(todoList);
    }
  },

}
</script>

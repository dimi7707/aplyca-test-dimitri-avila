<template>
  <div>
      <h1>Tamos bien, rutas dinamicas</h1>
  </div>
</template>

<script>
export default {
  mounted() {
    console.log(this.$route.params.id);
  },
}
</script>

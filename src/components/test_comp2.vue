<template>
  <div class="container">
    <h1>Component B</h1>
    
  </div>
</template>

<script>
export default {
  name: 'test-comp2',
  props: {
    headline: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.container{
  height: 100vh;
  width: 100%;
  background: darkred;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 60px;
  color: white;
  cursor: pointer;
}
</style>

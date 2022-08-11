<template>
  <div class="container">
    <h1>heh</h1>
    
  </div>
</template>

<script>
export default {
  name: 'test-comp3',
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
  background: blue;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 60px;
  color: lightblue;
  cursor: pointer;
}
</style>

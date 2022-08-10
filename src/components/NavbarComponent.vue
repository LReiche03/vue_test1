<template>
  <div class="navbar">
    <div class="logo">
      Logo
    </div>
    <div class="nav_buttons">
      <p>Counter: {{counter}}</p>
      <div class="btn" @click="counter++"><router-link to="/">Component A</router-link></div>
      <div class="btn" @click="counter++"><router-link to="/comp2">Component B</router-link></div>
      <div class="btn" @click="counter++"><router-link to="/comp3">Component C</router-link></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'navbar-component',
  data() {
    return{
      counter: 0
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .navbar{
    display:flex;
    justify-content: space-between;
    align-items: center;
    font-size: 20px;
  }
  .navbar .logo{
    background: plum;
    padding: 20px;
  }
  .navbar .nav_buttons{
    display: flex;
    
  }

  .navbar .nav_buttons a{
    display: flex;
    padding: 10px 20px;
    margin: 0px 10px;
    stroke: peru;
    stroke-width: 5px;
    background: lightpink;
    color: white;
    cursor: pointer;
    text-decoration: none;
  }

  .active{
    color: red !important;
    background: white !important;
    border: 1px solid black !important
  }


</style>

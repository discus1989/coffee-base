<template>
  <div id="app">
    
    <!--<Header />-->
    <router-view/>
    <font-awesome-icon icon="user-secret" />
    <font-awesome-icon icon="coffee" />
  </div>
</template>

<script>
import 'normalize.css'
export default {
  name: 'App',
}
// import Header from './views/Header.vue'


</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>

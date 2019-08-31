<template>
  <div id="app" style="height: 1120px">
    <header  class="py-4 bg-dark text-white-50">
      <div class="container text-center">
        <small>Header</small>
      </div>
    </header>
<!--    <img src="./assets/logo.png">-->
    <router-view/>
    <footer id="sticky-footer" class="py-4 bg-dark text-white-50">
      <div class="container text-center">
        <small>Copyright &copy; Your Website</small>
      </div>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'App',
  created () {
    this.$router.push('/login')
    console.log('burası calisti')
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 0px;
  margin-bottom: 0px;
}
</style>

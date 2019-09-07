<template>
  <div id="app">
    <header class="py-4 text-white-50" style="background-color: #de7824">
      <div class="container text-left" >
        <router-link to="/">
          <img src="@/assets/logo.png" style="width: 30px"/>
        </router-link>
        <small style="font-size: 20px;">YouExpense</small>
      </div>
    </header>
    <router-view/>
    <footer id="sticky-footer">
      <div class="align-self-center" style="height: 100%;display: flex;justify-content: center;align-items: center;">
        <small>Copyright &copy; YouExpense</small>
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

footer {
  position: absolute;
  bottom: 0;
  width: 100%;
  background-color: #de7824;
  color:#fff;
  height: 30px;
  vertical-align: center;
  text-align: center;
}
</style>

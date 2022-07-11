<template>
  <div class="container">
    <h1>Vuex Section</h1>
    <hr>
    <app-result />
    <hr>
    <app-other />
    <br>
    <app-counter />
  </div>
</template>
// $event giá trị gửi lên từ components con
<script>
import AppCounter from './components/Counter.vue'
import AppResult from './components/Result.vue'
import AppOther from './components/Other.vue'

export default {
  name: 'App',
  components: {
    AppCounter,
    AppResult,
    AppOther
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

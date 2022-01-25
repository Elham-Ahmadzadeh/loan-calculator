<template>
  <div id="app">
<loan-slider/>
  </div>
</template>

<script>
import LoanSlider from './components/LoanSlider.vue'

export default {
  name: 'App',
  components: {
    LoanSlider
  }
}
</script>

<style>
#app {
  font-family: "Nunito", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  align-items: center;
  max-width: 100% ;
   height: 100%;
   color: #03030c;
}
body {
   background-color: #f5f5f5;
}
</style>

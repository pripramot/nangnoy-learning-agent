<template>
  <div id="nangnoy-app">
    <Home />
  </div>
</template>

<script>
import Home from './views/Home.vue'

export default {
  name: 'App',
  components: { Home }
}
</script>

<style>
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

body {
  background-color: #0f0f13;
  color: #ffffff;
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
}

#nangnoy-app {
  min-height: 100vh;
  background-color: #0f0f13;
}

/* ViewUI dark overrides */
.ivu-input,
.ivu-input-wrapper .ivu-input {
  background-color: #1a1a2e !important;
  border-color: #333 !important;
  color: #fff !important;
}

.ivu-input::placeholder {
  color: #666 !important;
}

.ivu-btn {
  transition: all 0.2s ease;
}
</style>

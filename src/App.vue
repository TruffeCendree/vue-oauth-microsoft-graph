<template>
  <div>
    <base-header />
    <home-page />
    <base-footer />
  </div>
</template>

<script>
import BaseFooter from './components/BaseFooter.vue'
import BaseHeader from './components/BaseHeader.vue'
import HomePage from './components/HomePage.vue'

export default {
  name: 'App',
  components: {HomePage, BaseHeader, BaseFooter}
}
</script>

<!-- This is a global style, since we select 'body' tag. -->
<!-- Other components should use scoped styles. -->
<style>
body {
  font-family: 'Roboto', sans-serif;
  margin: 0;
}
</style>
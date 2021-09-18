<template>
  <footer class="base-footer">
    The source code is released under GPLv3 | © 2021 | <a href="https://thomas-veillard.fr/">thomas-veillard.fr</a>
  </footer>
</template>

<script>
export default {
  name: 'BaseFooter'
}
</script>

<style scoped>
.base-footer {
  background-color: #263238;
  padding: 0.5em;
  text-align: center;
  color: white;
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
}

a {
  color: white;
}
</style>

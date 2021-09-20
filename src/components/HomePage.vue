<template>
  <div style="text-align: center">
    <p>Here comes the content of the HomePage.</p>

    <p><base-button>BaseButton</base-button></p>
    <p><base-button disabled>BaseButton disabled</base-button></p>
    <p><base-button color="warn">BaseButton warn color</base-button></p>
    <p><base-button color="danger">BaseButton danger color</base-button></p>
  </div>
</template>

<script>
import BaseButton from './BaseButton.vue'
export default {
  components: { BaseButton },
  name: 'HomePage'
}
</script>
<template>
  <button class="button">
    <slot />
  </button>
</template>

<script>
export default {
  name: 'BaseButton'
}
</script>

<style scoped>
  .button {
    padding: 0.75em;
    background-color: #42b983;
    border: none;
    color: white;
    border-radius: 0.25em;
    font-weight: bold;
    transition: background-color 0.3s ease-in-out;
  }

  .button:hover {
    background-color: #4cce93;
  }

  .button:focus {
    padding: calc(0.75em - 2px);
    border: 2px solid #47d696;
  }

  .button:disabled {
    opacity: 0.7;
    cursor: not-allowed;
  }
</style>

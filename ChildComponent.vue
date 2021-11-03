<template lang="pug">
  div
  slot(name="title")
  h1 titulo
  slot(name="body")
  p Cuerpo
</template>

<script>
import LocalComponent from './LocalComponent.vue'
export default {
  components: { LocalComponent }
}
</script>

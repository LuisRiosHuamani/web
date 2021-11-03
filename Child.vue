<template lang="pug">
 #app
 img(src="./assets/logo.png")
 h1 Child

 div
 h2 Contador
 p {{ count }}
 p {{ getDouble }} 

 div
 button(@click="increment") +
 button(@click="decrement") -
 div
 button(@click="increment10") +10
 div
 child
 </template>

 <script>
	 import Child from './Child.vue'
   import { mapState, mapMutations, mapGetters } from 'vuex'
   from 'vuex'

 export default {
 name: 'child',

 components: { Child },

  computed: {
   ... mapState(['count']),

   ... mapGetters(['getDouble'])

   double( ) {
     return this.$store.getters.getDouble
   }
 },

 methods: {
   ... mapMutations(['increment', 'decrement'] ),

      increment10 ( ) {
this.$store.commint('increment', {
  number: 10
})
   },
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
  margin-top: 60px;
}

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
<template>
  <div>
    <button
      class="btn btn-success"
      @click="increment"
    >
      Increment
    </button>
    <button
      style="margin-left:10px"
      class="btn btn-success"
      @click="asyncDecrement"
    >
      Dercrement
    </button>
    <hr>
    <br>
    <!-- <input
      type="text"
      :value="value"
      @input="updateValue"
    > -->
    <input
      type="text"
      v-model="value"
    >
    <p>Text test: {{value}}</p>
  </div>
</template>

<script>
// import { mapMutations } from 'vuex'
import { mapActions } from 'vuex'
export default {
  data () {
    return {

    }
  },
  computed: {
    value: {
      // return this.$store.getters.value
      get () {
        return this.$store.getters.value;
      },
      set (value) {
        return this.$store.dispatch('updateValue', value)
      }
    }
  },
  methods: {
    increment () {
      // this.$emit('updated', 1)
      // this.$store.state.result++
      this.$store.commit('incrementOp', 30)
    },
    // decrement () {
    // this.$emit('updated', -1)
    //   this.$store.state.result--
    // }
    // ...mapMutations(['decremant'])
    ...mapActions(['increment', 'asyncDecrement']),
    // updateValue (event) {
    //   this.$store.dispatch('updateValue', event.target.value)
    // }
  }
}
</script>

<style lang="scss" scoped>
</style>

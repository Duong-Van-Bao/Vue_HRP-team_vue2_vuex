<template>
  <div>
    <p>this is results: {{tenResult}}</p>
    <p>this is name result:{{nameResult}}</p>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  computed: {
    ...mapGetters(['tenResult', 'nameResult'])
  }
}
</script>

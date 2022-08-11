<template>
  <div class="container" @click="incrementAndPrint()">
    <h1>Component A</h1>
    <p>{{TestStore.count}}</p>
  </div>
</template>

<script>
import { useTestStore } from '@/stores/TestStore'

export default {
  setup(){
    const TestStore = useTestStore()
    return{
      TestStore
    }
  },
  methods: {
    incrementAndPrint() {
      this.TestStore.increment()
      console.log('New Count:', this.TestStore.count)
    },
  },
  name: 'test-comp1',
  props: {
    headline: String
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.container{
  height: 100vh;
  width: 100%;
  background: lightgoldenrodyellow;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 60px;
  color: black;
  cursor: pointer;
}
</style>

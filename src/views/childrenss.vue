<template>
  <div>
    <child1 ref="child1"></child1>
    <child2 ref="child2"></child2>
    <button v-on:click="clickMe"> clickme </button>

  </div>
</template>

<script>
    import Child1 from "../components/children/child1"
    import Child2 from "../components/children/child2"
    export default {
        name: "childrenss",
      components: {Child2, Child1},
      methods: {
          clickMe: function () {
            for (var index = 0, len = this.$children.length; index < len; index++) {
              // alert(this.$children[index].p1);
            }
            console.log(this.$refs.child1.p1)
            console.log(this.$refs.child2.p1)
          }
      }
    }
</script>

<style scoped>

</style>

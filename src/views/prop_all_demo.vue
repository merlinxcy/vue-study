<template>
    <div>
      <span>SearchBy: </span>
      <input v-model="parentSearchQuery">
      <propdemo :columns-q='parentColumns' :dataaa='parentData' :search-query='parentSearchQuery'></propdemo>
    </div>
</template>

<script>
    import Propdemo from "../components/propstest/propdemo";
    export default {
        name: "prop_all_demo",
      components: {Propdemo},
      data(){
          return{
            parentSearchQuery: '',
            parentColumns: ['name', 'gender', 'age'],
            parentData: [{
              name: 'Jack',
              gender: 'male',
              age: 26
            }, {
              name: 'John',
              gender: 'female',
              age: 20
            }, {
              name: 'Lucy',
              gender: 'female',
              age: 16
            }]
          }
      }
    }
</script>

<style scoped>

</style>

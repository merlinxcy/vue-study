<template>
    <div>
      <table>
        <thead>
        <tr>
          <td v-for="col in columnsQ">{{ col | capitalize }}</td>
        </tr>
        </thead>
        <tbody>
        <!-- Vue 1.0 内置filteredData -->
        <!-- <tr v-for="entry in data | filterBy filterKey">
            <td v-for="col in columns">
                {{entry[col]}}
            </td>
        </tr> -->
        <!-- Vue 2.0 自己写的filteredData -->
        <tr v-for="entry in filteredData">
          <td v-for="col in columnsQ">{{ entry[col] }}</td>
        </tr>
        </tbody>
      </table>
    </div>
</template>

<script>
    export default {
        name: "propdemo",
      props:{
          searchQuery: String,
        columnsQ:Array,
        dataaa: Array,
      },
      filters:{
          capitalize: function (value) {
            return value.replace(/(^|\s+)\w/g,function (s) {
              return s.toUpperCase()
            })
          }
      },
      computed: {
          filteredData: function () {
            var self = this;
            return this.dataaa.filter(function (item) {
              return item.name.toLowerCase().indexOf(self.searchQuery.toLowerCase()) != -1 ||
                item.gender.toLowerCase().indexOf(self.searchQuery.toLowerCase()) != -1 ||
                item.age.toString().toLowerCase().indexOf(self.searchQuery.toLowerCase()) != -1;
            })
          }
      }
    }
</script>

<style scoped>

</style>

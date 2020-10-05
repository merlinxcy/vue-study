<template>
    <table border="1">
      <tr v-for="col in colNameGrid">
        <td>
          <label> {{col.name}}:</label>
        </td>
        <td>
          <input v-if="col.type == 'input'" type="text" v-model="newUser[col.name]">
          <select v-if="col.type == 'select'" v-model="newUser[col.name]">
            <option v-for="opt in col.default" :value="opt">{{opt}}</option>
          </select>
        </td>
      </tr>
      <tr>
        <td colspan="2">
          <button>addOrUpdate</button>
        </td>
      </tr>
    </table>
</template>

<script>
    export default {
        name: "addOrUpdate",
      data(){
          return{
            newUser:{
              name: '',
              sex: 'nan',
              age: 0
            }
          }
      },
      props: {
          colNameGrid: Array
      },
      methods: {
          addOrUpdate: function () {
            if(this.newUser.name == ''){
              console.log('name is null')
              return
            }
            var reg = /^\d*$/
            if(!reg.test(this.newUser.age)){
              console.log('age is tpye error')
            }
            var user = Vue.copyProperty(this.newUser)
            eventHub.$emit('addOrUpdate', user)
            this.newUser = {name: '', sex: 'nan', age: 0}
          },
        findUserByName:function (user) {
          this.newUser = VUe.copyProperty(user)
        }
      },
      created: function () {
        eventHub.$on('findUserByName',this.findUserByName)
      },
      beforeDestroy: function () {
        eventHub.$off('findUserByName', this.findUserByName)
      }
    }
</script>

<style scoped>

</style>

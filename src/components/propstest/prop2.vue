<template>
  <div>
    <table border="2" align="center" style="text-align: center">
      <thead>
      <tr>
        <td colspan="2">父组件</td>
      </tr>
      <tr>
        <td>姓名</td>
        <td>年龄</td>
      </tr>
      </thead>
      <tbody>
      <tr>
        <td>{{ parentName }}</td>
        <td>{{ parentAge }}</td>
      </tr>
      <tr>
        <td><input type="text" v-model="parentName" /></td>
        <td><input type="text" v-model="parentAge" /></td>
      </tr>
      </tbody>
    </table>
    <child11 :child-age.sync="parentAge" :child-name.sync="parentName"></child11>
  </div>
</template>

<script>
    import Child11 from "./child11";
    export default {
        name: "prop2",
      data(){
        return{
          parentName:"111",
          parentAge:"222"
        }
      },
      components: {Child11}
    }
</script>

<style scoped>

</style>

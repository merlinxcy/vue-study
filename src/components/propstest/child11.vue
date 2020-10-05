<template>
  <table border="2" align="center" style="text-align: center">
    <thead>
    <tr>
      <td colspan="2">子组件</td>
    </tr>
    <tr>
      <td>姓名</td>
      <td>年龄</td>
    </tr>
    </thead>
    <tbody>
    <tr>
      <td>{{ childName }}</td>
      <td>{{ childAge }}</td>
    </tr>
    <tr>
      <td><input type="text" v-model="childName" /></td>
      <td><input type="text" v-model="childAge" /></td>
    </tr>
    </tbody>
  </table>
</template>

<script>
    export default {
        name: "child11",
      props:['childName','childAge']
    }
</script>

<style scoped>

</style>

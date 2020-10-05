<template>
  <div>
    <table border="2" align="center" style="text-align: center">
      <thead>
      <tr>
        <td>姓名</td>
        <td>年龄</td>
      </tr>
      </thead>
      <tbody>
      <tr>
        <td>{{ myName }}</td>
        <td>{{ myAge }}</td>
      </tr>
      </tbody>
    </table>

  </div>
</template>

<script>
    export default {
        name: "prop1",
        props: ['myName','myAge']
    }
</script>

<style scoped>

</style>

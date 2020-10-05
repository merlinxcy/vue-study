<template>
  <div id="demo">
    <div>
      <label>xingming:</label>
      <input v-model="newUser.name"/>
    </div>
    <div>
      <label>
        nianling:
      </label>
      <input v-model="newUser.age"/>
    </div>
    <div>
      <label>xingbie:</label>
      <select v-model="newUser.sex">
        <option value="男">男</option>
        <option value="女">女</option>
      </select>
    </div>
    <div>
      <button v-on:click="addUser">tianjia</button>
    </div>

    <br>
    <br>
    111
    <br>
    <table border="1">
      <thead>
      <tr>
        <td>xuhao</td>
        <td> asd</td>
        <td>xuhao</td>
        <td>xuhao</td>
        <td>xuhao</td>
      </tr>
      </thead>
      <tbody>
      <tr v-for="(user,index) in list">
        <td>
          {{index + 1}}
        </td>
        <td>{{user.name}}</td>
        <td>{{user.age}}</td>
        <td>{{user.sex}}</td>
        <td><button @click="deleteUser(index)">shanchu</button></td>
      </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
  export default {
    data(){
      return {
        newUser: {
          name: "",
          age: "0",
          sex: "男"
        },
        list: [
          {
            name: "wang",
            age: "22",
            sex: "男"
          }
        ],
      }
    },
    methods: {
      addUser: function () {
        this.list.push(this.newUser);
        this.newUser = {name: "", age: "0", sex: "男"}
      },
      deleteUser: function (index) {
        this.list.splice(index, 1)
      }
    }
  }
</script>

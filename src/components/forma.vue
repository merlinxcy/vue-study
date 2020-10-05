<template>
  <div>
    啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊
    <form>
      <input v-model="input1">
      <button @click="login">aaaa</button>
    </form>
  </div>
</template>

<script>
  export default {
    data(){
      return{
        input1:""
      }
    },
    methods: {
      login(){
        console.log(this.asdd)
      }
    }
  }
</script>

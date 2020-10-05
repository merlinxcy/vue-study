<template>
  <div>
    <div id="a1">
      {{message1}}
    </div>
    <br>
    <div id="a2">
      <a v-bind:href="message1">dadsadadasd</a>
    </div>
    <br>
    <!--<button v-on:click="function1">msadadsaadasd</button>-->
    <button @click="function1">vvvvvvv</button>
  </div>

</template>
<script>
  export default {
    data(){
      return {
        message1: "aaaaaa"
      }
    },
    methods: {
      function1: function () {
        console.log("called")
      }
    }

  }
</script>

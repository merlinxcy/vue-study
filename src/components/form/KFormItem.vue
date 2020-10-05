<template>
  <div>
    <label v-if="label">
      {{label}}
    </label>
    <p class="error" v-if="error"> {{error}}</p>
  </div>
</template>

<script>
  import Validator from "async-validator"
  export default {
    inject:['form'],
    data(){
      return{
        error:""
      }
    },
    props:{
      label: {
        type: String,
        default: ""
      }
    }
  }
</script>

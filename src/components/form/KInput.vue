<template>
  <div>

  </div>
</template>

<script>
  export default {
    inheritAttrs: false,
    props:{
      type:{
        type: String,
        default: 'text'
      },
      value:{
        type: String,
        default: ''
      },
    },
    methods:{
      onInput(e){
        this.$emit('input',e.target.value)
        this.$parent.$emit('validate')
      }
    }
  }
</script>

<template>
    <div>
      <slot name="header"></slot>
      <slot name="body">
        <button @click="showMsg">body</button>
      </slot>
      <slot name="footer"></slot>
    </div>
</template>

<script>
    export default {
        name: "slot1",
      methods:{
          showMsg: function () {
            alert('this is example')
          }
      }
    }
</script>

<style scoped>

</style>

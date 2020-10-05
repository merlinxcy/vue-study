<template>
    <div>
      <slot1>
        <div slot="header">1111111111</div>
        <div slot="body">1111111111</div>
      </slot1>
    </div>
</template>

<script>
    import Slot1 from "../components/slot/slot1";
    export default {
        name: "slot1show",
      components: {Slot1}
    }
</script>

<style scoped>

</style>

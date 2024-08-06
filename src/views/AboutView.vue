<template>
  <v-btn v-touch:longtap="onTapItem">Button</v-btn>
</template>

<script setup>

    function onTapItem(mouseEvent) {
      // you can remove the `mouseEvent` argument
      console.log("Tapped!");
    }

</script>

<template>
  <img class="home-logo" src="../assets/img/room.png" :width="width" />
</template>

<script>
export default {
  name: 'homeLogo',
  props: {
    width: {
      tyoe: Number,
      default: 400
    }
  }
}
</script>

<style scope>
  .home-logo{
    display: block;
    margin: 0 auto;
  }
</style>
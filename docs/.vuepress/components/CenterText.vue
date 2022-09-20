<template>
  <div class="center-text" :class="cptTextClass" :style="{color: color}">
    <slot></slot>
  </div>
</template>

<script>
export default {
  props: {
    size: {
      type: Number,
      default: 20
    },
    weight:{
      type: Boolean,
      default: false
    },
    color: String,
    align: String
  },
  computed: {
    cptTextClass(){

      let size = ' font-' + this.size,
          weight = this.weight ? ' font-weight' : '',
          align = this.align ? ` font-${this.align}` : '';

      return size + weight + align;
    }
  }
}
</script>

<style scoped>
  .center-text{text-align: center;margin-bottom: 8px;}
  .font-weight {font-weight: bold;}
  .font-16{font-size: 16px;}
  .font-22{font-size: 22px;}
  .font-24{font-size: 24px;}
  .font-28{font-size: 28px;}
  .font-32{font-size: 32px;}
</style>
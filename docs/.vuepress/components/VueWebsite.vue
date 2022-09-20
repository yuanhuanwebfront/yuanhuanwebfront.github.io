<template>
  <div class="flex-box">
    <a class="vue-item" href="https://v2.cn.vuejs.org/">
      <img src="https://v2.cn.vuejs.org/images/logo.svg" />
      <span>Vue2 官网</span>
    </a>
    <a class="vue-item" href="https://cn.vuejs.org/">
      <img src="https://v2.cn.vuejs.org/images/logo.svg" />
      <span>Vue3 官网</span>
    </a>
    <a class="vue-item" href="https://router.vuejs.org/zh/">
      <img src="https://v2.cn.vuejs.org/images/logo.svg" />
      <span>VueRouter</span>
    </a>
    <a class="vue-item" href="https://vuex.vuejs.org/zh/index.html">
      <img src="https://v2.cn.vuejs.org/images/logo.svg" />
      <span>Vuex官网</span>
    </a>
    <a class="vue-item" href="https://cn.vitejs.dev/">
      <img src="https://cn.vitejs.dev/logo-with-shadow.png" />
      <span>Vite官网</span>
    </a>
  </div>
</template>

<script>

  export default {
    name: 'vueWebsite'
  }

</script>

<style scoped>
  .flex-box{
    display: grid;
    justify-content: space-evenly;
    grid-template-columns: repeat(4, 150px);
    grid-gap: 10px;
    margin-top: 40px;
  }
  .flex-box .vue-item{
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 150px;
    height: 150px;
    border-radius: 8px;
    cursor: pointer;
    transition: 0.5s;
    flex-wrap: wrap;
    margin-bottom: 20px;
    padding-top: 12px;
  }
  .flex-box .vue-item img{
    width: 100px;
    transition: 0.5s;
    margin-bottom: 4px;
  }
  .flex-box .vue-item:hover{
    box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;
  }
  .flex-box .vue-item:hover img{
    transform: scale(1.1);
  }
  

  @media (max-width: 719px){
    .flex-box{
      grid-template-columns: repeat(2, 24vw);
    }
    .flex-box .vue-item{
      width: 24vw;
      height: 24vw;
      margin-bottom: 3rem;
    }
  }
</style>
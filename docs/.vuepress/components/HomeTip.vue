<template>
  <div class="flex-box mb-20">
    <div class="tip-item">
      <div class="title mb-16">简洁至上</div>
      <div class="desc">
        以 Markdown 为中心的项目结构，以最少的配置帮助你专注于写作。
      </div>
    </div>
    <div class="tip-item">
      <div class="title mb-16">Vue 驱动</div>
      <div class="desc">
        享受 Vue + webpack 的开发体验，可以在 Markdown 中使用 Vue 组件，又可以使用 Vue 来开发自定义主题。
      </div>
    </div>
  </div>
</template>

<style scoped>
  .tip-item{
    flex-grow: 1;
    flex-basis: 45%;
    max-width: 45%;
    align-self: flex-start;
  }
  .tip-item .title{
    font-weight: 500;
    font-size: 24px;
    color: #3a5169;
  }
  .tip-item .desc{
    line-height: 26px;
    color: #4e6e8e;
  }
</style>
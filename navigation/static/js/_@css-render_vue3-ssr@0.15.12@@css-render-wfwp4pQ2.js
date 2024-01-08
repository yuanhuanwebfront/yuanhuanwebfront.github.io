import{i as o}from"./_@vue_runtime-core@3.3.13@@vue-CopwuxMF.js";const u=Symbol("@css-render/vue3-ssr");function c(n,e){return`<style cssr-id="${n}">
${e}
</style>`}function i(n,e){const r=o(u,null);if(r===null){console.error("[css-render/vue3-ssr]: no ssr context found.");return}const{styles:s,ids:t}=r;t.has(n)||s!==null&&(t.add(n),s.push(c(n,e)))}const l=typeof document<"u";function f(){if(l)return;const n=o(u,null);if(n!==null)return{adapter:i,context:n}}export{f as u};

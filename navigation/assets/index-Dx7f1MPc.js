import{_ as x}from"./plugin-vueexport-helper-DlAUqK2U.js";import{s as u,o as U,c as b,b as i,g as o,d as l,b5 as d,w as v,U as c,S as m}from"./index-Dbs_5Yis.js";import{N as p}from"./Input-lYfZnKHL.js";import"./use-merged-state-D74H9_uY.js";const w={class:"var-transform-container"},N={class:"flex mb-20"},T={class:"flex"},k={__name:"index",setup(y){function f(){s.value=r.value.replace(/([A-Z])/g,"_$1").toLowerCase()}function _(){n.value=t.value.replace(/_([a-z])/g,function(C,a){return a.toUpperCase()})}var r=u(""),s=u(""),t=u(""),n=u("");return(C,a)=>(U(),b("div",w,[i("div",N,[o(l(p),{value:l(r),"onUpdate:value":a[0]||(a[0]=e=>d(r)?r.value=e:r=e),placeholder:"请输入驼峰变量名"},null,8,["value"]),o(l(m),{class:"mlr-20",type:"primary",onClick:f},{default:v(()=>[c("转换")]),_:1}),o(l(p),{value:l(s),"onUpdate:value":a[1]||(a[1]=e=>d(s)?s.value=e:s=e),placeholder:"请输入下划线变量名"},null,8,["value"])]),i("div",T,[o(l(p),{value:l(t),"onUpdate:value":a[2]||(a[2]=e=>d(t)?t.value=e:t=e),placeholder:"请输入下划线变量名"},null,8,["value"]),o(l(m),{class:"mlr-20",type:"primary",onClick:_},{default:v(()=>[c("转换")]),_:1}),o(l(p),{value:l(n),"onUpdate:value":a[3]||(a[3]=e=>d(n)?n.value=e:n=e),placeholder:"请输入驼峰变量名"},null,8,["value"])])]))}},I=x(k,[["__scopeId","data-v-baba6482"]]);export{I as default};

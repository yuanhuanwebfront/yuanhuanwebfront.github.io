import{j as a,k as u,v as l,l as i,q as r,s as c,u as p,x as m}from"./index-Dbs_5Yis.js";const d=[a[0],u[0],l[0],i[0],r[0]],h=d.map(t=>({label:t.meta.title,path:t.path,icon:t.meta.icon,list:[...t.navList]}));function f(){const t=c(h),n=p(),o=m(()=>{let s=t.value.find(e=>e.path==n.path);return s&&s.list?s.list:[]});return{menus:t,cptPathMenus:o}}export{f as u};

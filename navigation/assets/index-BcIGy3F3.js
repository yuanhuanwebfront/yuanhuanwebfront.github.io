import{j as x,k as b,l as v,q as l,s,v as _,x as g,y as C,z as w,A as k,B as d,F as $,a as y,o as z,h as B,w as h,d as c,t as p,b as S}from"./index-DJSS6oQ5.js";import{_ as P}from"./plugin-vueexport-helper-DlAUqK2U.js";import{N as R}from"./Popover-Dk8gnpa2.js";const D=t=>{const{textColor1:e,dividerColor:r,fontWeightStrong:o}=t;return{textColor:e,color:r,fontWeight:o}},N={name:"Divider",common:x,self:D},L=b("divider",`
 position: relative;
 display: flex;
 width: 100%;
 box-sizing: border-box;
 font-size: 16px;
 color: var(--n-text-color);
 transition:
 color .3s var(--n-bezier),
 background-color .3s var(--n-bezier);
`,[v("vertical",`
 margin-top: 24px;
 margin-bottom: 24px;
 `,[v("no-title",`
 display: flex;
 align-items: center;
 `)]),l("title",`
 display: flex;
 align-items: center;
 margin-left: 12px;
 margin-right: 12px;
 white-space: nowrap;
 font-weight: var(--n-font-weight);
 `),s("title-position-left",[l("line",[s("left",{width:"28px"})])]),s("title-position-right",[l("line",[s("right",{width:"28px"})])]),s("dashed",[l("line",`
 background-color: #0000;
 height: 0px;
 width: 100%;
 border-style: dashed;
 border-width: 1px 0 0;
 `)]),s("vertical",`
 display: inline-block;
 height: 1em;
 margin: 0 8px;
 vertical-align: middle;
 width: 1px;
 `),l("line",`
 border: none;
 transition: background-color .3s var(--n-bezier), border-color .3s var(--n-bezier);
 height: 1px;
 width: 100%;
 margin: 0;
 `),v("dashed",[l("line",{backgroundColor:"var(--n-color)"})]),s("dashed",[l("line",{borderColor:"var(--n-color)"})]),s("vertical",{backgroundColor:"var(--n-color)"})]),V=Object.assign(Object.assign({},g.props),{titlePlacement:{type:String,default:"center"},dashed:Boolean,vertical:Boolean}),F=_({name:"Divider",props:V,setup(t){const{mergedClsPrefixRef:e,inlineThemeDisabled:r}=C(t),o=g("Divider","-divider",L,N,t,e),a=w(()=>{const{common:{cubicBezierEaseInOut:i},self:{color:m,textColor:f,fontWeight:u}}=o.value;return{"--n-bezier":i,"--n-color":m,"--n-text-color":f,"--n-font-weight":u}}),n=r?k("divider",void 0,a,t):void 0;return{mergedClsPrefix:e,cssVars:r?void 0:a,themeClass:n==null?void 0:n.themeClass,onRender:n==null?void 0:n.onRender}},render(){var t;const{$slots:e,titlePlacement:r,vertical:o,dashed:a,cssVars:n,mergedClsPrefix:i}=this;return(t=this.onRender)===null||t===void 0||t.call(this),d("div",{role:"separator",class:[`${i}-divider`,this.themeClass,{[`${i}-divider--vertical`]:o,[`${i}-divider--no-title`]:!e.default,[`${i}-divider--dashed`]:a,[`${i}-divider--title-position-${r}`]:e.default&&r}],style:n},o?null:d("div",{class:`${i}-divider__line ${i}-divider__line--left`}),!o&&e.default?d($,null,d("div",{class:`${i}-divider__title`},this.$slots),d("div",{class:`${i}-divider__line ${i}-divider__line--right`})):null)}}),j=["src"],I={class:"title"},O={__name:"index",props:{icon:String,label:String,link:String,desc:String,type:String},setup(t){const e=t,r=y();function o(){e.type=="page"?r.push({path:e.link}):window.open(e.link)}return(a,n)=>(z(),B(S(R),{trigger:"hover",placement:"top-start",width:260},{trigger:h(()=>[c("div",{class:"font-16 flex link-item-box",onClick:o},[c("img",{src:e.icon},null,8,j),c("div",I,p(e.label),1)])]),default:h(()=>[c("span",null,p(e.desc||""),1)]),_:1}))}},M=P(O,[["__scopeId","data-v-2ee33e37"]]);export{M as L,F as N};

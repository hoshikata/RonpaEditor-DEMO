import{o as c,c as d,a as p,_ as D,W as $,r as b,j as C,a2 as g,w as h,v as _,b as v,u as m,n as y,a3 as f}from"./index-DjFC1Eq4.js";import{I as w}from"./Menu.vue_vue_type_style_index_0_scoped_c8f5dede_lang-Bp3pNzl9.js";const x={viewBox:"0 0 24 24",width:"1.2em",height:"1.2em"},B=p("path",{fill:"currentColor",d:"M18.3 5.71a.996.996 0 0 0-1.41 0L12 10.59L7.11 5.7A.996.996 0 1 0 5.7 7.11L10.59 12L5.7 16.89a.996.996 0 1 0 1.41 1.41L12 13.41l4.89 4.89a.996.996 0 1 0 1.41-1.41L13.41 12l4.89-4.89c.38-.38.38-1.02 0-1.4"},null,-1),L=[B];function k(s,i){return c(),d("svg",x,[...L])}const I={name:"ic-round-close",render:k},M={viewBox:"0 0 24 24",width:"1.2em",height:"1.2em"},A=p("path",{fill:"currentColor",d:"M11 18c0 1.1-.9 2-2 2s-2-.9-2-2s.9-2 2-2s2 .9 2 2m-2-8c-1.1 0-2 .9-2 2s.9 2 2 2s2-.9 2-2s-.9-2-2-2m0-6c-1.1 0-2 .9-2 2s.9 2 2 2s2-.9 2-2s-.9-2-2-2m6 4c1.1 0 2-.9 2-2s-.9-2-2-2s-2 .9-2 2s.9 2 2 2m0 2c-1.1 0-2 .9-2 2s.9 2 2 2s2-.9 2-2s-.9-2-2-2m0 6c-1.1 0-2 .9-2 2s.9 2 2 2s2-.9 2-2s-.9-2-2-2"},null,-1),N=[A];function S(s,i){return c(),d("svg",M,[...N])}const T={name:"ic-round-drag-indicator",render:S},E={__name:"Control",props:{hasAdd:{type:[Boolean],default:!0},hasDel:{type:[Boolean],default:!0}},emits:["add","del","more"],setup(s,{emit:i}){const n=i,{getClientRect:r}=$(),o=b(null),l=t=>{const e=r(o.value);n(t,e)};return(t,e)=>{const a=C("visible");return c(),d("div",{class:"control gap-2",ref_key:"control",ref:o},[g(t.$slots,"top",{},()=>[h((c(),d("button",{class:"control_button",onClick:e[0]||(e[0]=u=>l("add"))},[v(m(w))])),[[_,s.hasAdd||s.hasDel],[a,s.hasAdd]])],!0),p("button",{class:"control_button",onClick:e[1]||(e[1]=u=>l("more"))},[v(m(T))]),g(t.$slots,"bottom",{},()=>[h((c(),d("button",{class:"control_button scale-90",onClick:e[2]||(e[2]=u=>l("del"))},[v(m(I))])),[[_,s.hasAdd||s.hasDel],[a,s.hasDel]])],!0)],512)}}},j=D(E,[["__scopeId","data-v-70fb2219"]]),J={__name:"DropLine",props:{dragging:{type:[Boolean],default:!1}},emits:["drop"],setup(s,{emit:i}){const n=i,r=b(null),o=t=>{r.value.style.opacity=t?1:""},l=t=>{const e=t.dataTransfer.getData("text/plain");let a=null;try{a=JSON.parse(e)}catch{}o(!1),a!==null&&n("drop",a)};return(t,e)=>(c(),d("div",{class:y(["drag_line invisible opacity-0",{"!visible":s.dragging}]),onDragenter:e[0]||(e[0]=f(a=>o(!0),["prevent"])),onDragleave:e[1]||(e[1]=f(a=>o(!1),["prevent"])),onDragover:e[2]||(e[2]=f(()=>{},["prevent"])),onDrop:l,ref_key:"line",ref:r},null,34))}},z=D(J,[["__scopeId","data-v-55dbec76"]]);function H(){return{dragMove:(n,r)=>{n.dataTransfer.dropEffect="move",n.dataTransfer.setData("text/plain",JSON.stringify(r))},dropMove:(n,r,o)=>{const[l]=n.splice(r,1),t=r>=o?o:o-1,e=t<0?0:t;n.splice(e,0,l)}}}export{j as C,z as D,H as u};

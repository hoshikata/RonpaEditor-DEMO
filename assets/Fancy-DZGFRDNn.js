import{o as y,c as x,a as i,_ as k,r as _,g as C,p as $,w as B,e as c,y as E,I as N,d as a,n as p,E as u,D as v,G as A}from"./index-BexsKry7.js";import{A as D}from"./Aspect-BdGFMq-_.js";import{u as F}from"./useMouse-C_q4Rx5p.js";const I={viewBox:"0 0 24 24",width:"1.2em",height:"1.2em"},M=i("path",{fill:"currentColor",d:"M16.62 2.99a1.25 1.25 0 0 0-1.77 0L6.54 11.3a.996.996 0 0 0 0 1.41l8.31 8.31c.49.49 1.28.49 1.77 0s.49-1.28 0-1.77L9.38 12l7.25-7.25c.48-.48.48-1.28-.01-1.76"},null,-1),T=[M];function K(t,l){return y(),x("svg",I,[...T])}const m={name:"ic-round-arrow-back-ios",render:K},L={class:"fancy_bg"},S={__name:"Fancy",props:{open:{type:[Boolean],default:!1},index:{type:[Number],default:0},length:{type:[Number],default:0}},emits:["update:open","prev","next"],setup(t,{emit:l}){const w=t,s=l,{swipeStart:d,swipeEnd:h}=F(),f=_(null),g=n=>{h(n)>0?s("next"):s("prev")};C(()=>w.open,n=>{n&&A(()=>f.value.focus())});const b=n=>{const e=n.target.matches(".fancy_bg *, .fancy_prev"),r=n.target.matches(".fancy_close");(!e||r)&&s("update:open",!1)};return(n,e)=>{const r=$("visible");return B((y(),x("section",{class:"fancy",onClick:b,onKeydown:[e[2]||(e[2]=u(o=>s("prev"),["left"])),e[3]||(e[3]=u(o=>s("next"),["right"]))],onTouchstart:e[4]||(e[4]=v((...o)=>a(d)&&a(d)(...o),["prevent"])),onTouchend:v(g,["prevent"]),tabindex:"0",ref_key:"fancy",ref:f},[c(D,null,{default:E(()=>[i("div",L,[N(n.$slots,"default",{},void 0,!0)])]),_:3}),i("button",{class:p(["fancy_prev",{"!opacity-0 pointer-events-none":!t.length||t.index===0}]),onClick:e[0]||(e[0]=o=>s("prev")),title:"前へ"},[c(a(m),{class:"pointer-events-none"})],2),i("button",{class:p(["fancy_prev -next",{"!opacity-0 pointer-events-none":!t.length||t.index===t.length-1}]),onClick:e[1]||(e[1]=o=>s("next")),title:"次へ"},[c(a(m),{class:"pointer-events-none -scale-x-100"})],2)],32)),[[r,t.open]])}}},H=k(S,[["__scopeId","data-v-814d21d0"]]);export{H as F};

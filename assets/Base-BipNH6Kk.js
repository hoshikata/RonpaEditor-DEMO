import{o as v,c as g,a as t,_ as S,r as T,g as y,w as p,N as H,F as U,x as $,t as w,I as B,e as i,d as e,f as k,s as z,M as I,C as M,n as h,O as f,J as V,K as C}from"./index-DMwXrg5Y.js";import{R as b}from"./Range-VdC6uGwy.js";import{H as L}from"./Header-BbyRsgNt.js";const F={viewBox:"0 0 24 24",width:"1.2em",height:"1.2em"},A=t("path",{fill:"currentColor",d:"M17.77 3.77L16 2L6 12l10 10l1.77-1.77L9.54 12z"},null,-1),E=[A];function G(d,u){return v(),g("svg",F,[...E])}const N={name:"ic-baseline-arrow-back-ios-new",render:G},R={class:"relative flex"},D=["value"],O={class:"select_arrow select_border"},W={__name:"Select",props:{value:{type:[String],default:""},list:{type:[Array],default:()=>[]}},emits:["update:value"],setup(d,{emit:u}){const m=d,r=u,a=T("");return y(a,n=>r("update:value",n)),y(()=>m.value,n=>a.value=n,{immediate:!0}),(n,_)=>(v(),g("label",R,[p(t("select",{class:"select select_border","onUpdate:modelValue":_[0]||(_[0]=o=>a.value=o)},[(v(!0),g(U,null,$(d.list,o=>(v(),g("option",{key:o.id??o.title??o,value:o.id},w(o.title),9,D))),128)),B(n.$slots,"default",{},void 0,!0)],512),[[H,a.value,void 0,{lazy:!0,trim:!0}]]),t("div",O,[i(e(N),{class:"-rotate-90 text-neutral-300"})])]))}},x=S(W,[["__scopeId","data-v-11bb3e06"]]),c=d=>(V("data-v-2c1860bd"),d=d(),C(),d),j={class:"setting_wrap"},J={class:"setting_head"},K=c(()=>t("h2",{class:"setting_title"},"設定",-1)),q={class:"setting_desc"},P={class:"setting_container"},Q={class:"contents"},X=c(()=>t("label",null,"BGM音量",-1)),Y={class:"contents"},Z=c(()=>t("label",null,"SE音量",-1)),tt={class:"contents"},et=c(()=>t("label",null,"AUTO速度",-1)),st={class:"contents"},lt=c(()=>t("label",null,"文字表示速度",-1)),ot={class:"contents"},at={class:"flex gap-5"},nt={class:"contents"},it={class:"flex gap-5"},dt={class:"contents"},ct=c(()=>t("label",null,"表示",-1)),rt={class:"flex"},ut={class:"contents"},_t=c(()=>t("label",null,"差し色1",-1)),pt={class:"flex"},vt={class:"setting_input setting_color -primary"},gt={class:"contents"},mt=c(()=>t("label",null,"差し色2",-1)),ht={class:"flex"},ft={class:"setting_input setting_color -secondary"},bt={__name:"Base",setup(d){const u=k(),{fontFamilyList:m}=u,{darkMode:r,color:a,fontFamily:n,fontWeightList:_,fontWeight:o,fontStyle:xt}=z(u);return I(),(yt,s)=>(v(),g("div",j,[i(L,{col:"col-span-2"},{default:M(()=>[t("div",J,[K,t("p",q,w(["BGM","SE","文字速度","フォント","言語","表示","色"].join("．")),1)])]),_:1}),t("section",P,[t("div",Q,[X,i(b,{class:"setting_range",value:"0.5",min:"0",max:"1",step:"0.1"})]),t("div",Y,[Z,i(b,{class:"setting_range",value:"0.5",min:"0",max:"1",step:"0.1"})]),t("div",tt,[et,i(b,{class:"setting_range",value:"0.5",min:"0",max:"1",step:"0.1"})]),t("div",st,[lt,i(b,{class:"setting_range",value:"0.5",min:"0",max:"1",step:"0.1"})]),t("div",ot,[t("label",{class:h([e(n).nameTag,e(o).nameTag])},"名札フォント",2),t("div",at,[i(x,{value:e(n).nameTag,"onUpdate:value":s[0]||(s[0]=l=>e(n).nameTag=l),list:e(m)},null,8,["value","list"]),i(x,{value:e(o).nameTag,"onUpdate:value":s[1]||(s[1]=l=>e(o).nameTag=l),list:e(_).nameTag},null,8,["value","list"])])]),t("div",nt,[t("label",{class:h([e(n).dialog,e(o).dialog])},"テキストフォント",2),t("div",it,[i(x,{value:e(n).dialog,"onUpdate:value":s[2]||(s[2]=l=>e(n).dialog=l),list:e(m)},null,8,["value","list"]),i(x,{value:e(o).dialog,"onUpdate:value":s[3]||(s[3]=l=>e(o).dialog=l),list:e(_).dialog},null,8,["value","list"])])]),t("div",dt,[ct,t("div",rt,[t("button",{class:h(["setting_input setting_button",{"setting_button-active":!e(r)}]),onClick:s[4]||(s[4]=l=>r.value=!1),title:"ライトモード"},"ライトモード",2),t("button",{class:h(["setting_input setting_button",{"setting_button-active":e(r)}]),onClick:s[5]||(s[5]=l=>r.value=!0),title:"ダークモード"},"ダークモード",2)])]),t("div",ut,[_t,t("div",pt,[p(t("input",{class:"setting_input -color","onUpdate:modelValue":s[6]||(s[6]=l=>e(a).primaryHex=l)},null,512),[[f,e(a).primaryHex,void 0,{lazy:!0,trim:!0}]]),t("label",vt,[p(t("input",{class:"hidden","onUpdate:modelValue":s[7]||(s[7]=l=>e(a).primaryHex=l),type:"color"},null,512),[[f,e(a).primaryHex,void 0,{lazy:!0}]])])])]),t("div",gt,[mt,t("div",ht,[p(t("input",{class:"setting_input -color","onUpdate:modelValue":s[8]||(s[8]=l=>e(a).secondaryHex=l)},null,512),[[f,e(a).secondaryHex,void 0,{lazy:!0,trim:!0}]]),t("label",ft,[p(t("input",{class:"hidden","onUpdate:modelValue":s[9]||(s[9]=l=>e(a).secondaryHex=l),type:"color"},null,512),[[f,e(a).secondaryHex,void 0,{lazy:!0}]])])])])])]))}},Ht=S(bt,[["__scopeId","data-v-2c1860bd"]]);export{Ht as default};

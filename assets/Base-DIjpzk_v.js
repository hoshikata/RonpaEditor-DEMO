import{o as m,c as g,a as t,_ as S,r as U,e as x,w as v,C as $,F as B,p as T,t as H,G as z,b as a,u as s,d as I,s as M,M as V,B as y,n as w,K as b,I as k,J as C}from"./index-BqjBh2Sn.js";import{R as f}from"./Range-CFNEjO6V.js";import{H as L}from"./Header-D-hq--Xn.js";const F={viewBox:"0 0 24 24",width:"1.2em",height:"1.2em"},G=t("path",{fill:"currentColor",d:"M17.77 3.77L16 2L6 12l10 10l1.77-1.77L9.54 12z"},null,-1),A=[G];function E(c,_){return m(),g("svg",F,[...A])}const R={name:"ic-baseline-arrow-back-ios-new",render:E},j={class:"relative flex"},D=["value"],N={class:"select_arrow select_border"},W={__name:"Select",props:{value:{type:[String],default:""},list:{type:[Array],default:()=>[]}},emits:["update:value"],setup(c,{emit:_}){const h=c,u=_,o=U("");return x(o,i=>u("update:value",i)),x(()=>h.value,i=>o.value=i,{immediate:!0}),(i,r)=>(m(),g("label",j,[v(t("select",{class:"select select_border","onUpdate:modelValue":r[0]||(r[0]=d=>o.value=d)},[(m(!0),g(B,null,T(c.list,d=>(m(),g("option",{value:d.id},H(d.title),9,D))),256)),z(i.$slots,"default",{},void 0,!0)],512),[[$,o.value,void 0,{lazy:!0,trim:!0}]]),t("div",N,[a(s(R),{class:"-rotate-90 text-neutral-300"})])]))}},p=S(W,[["__scopeId","data-v-accfe058"]]),n=c=>(k("data-v-91bc177c"),c=c(),C(),c),J={class:"setting_wrap"},K={class:"setting_head col-span-2"},O=n(()=>t("h2",{class:"setting_title"},"設定",-1)),q={class:"setting_desc"},P={class:"setting_container col-span-2 items-center justify-items-start gap-y-8 px-14 pb-5"},Q={class:"contents"},X=n(()=>t("label",null,"BGM音量",-1)),Y={class:"contents"},Z=n(()=>t("label",null,"SE音量",-1)),tt={class:"contents"},st=n(()=>t("label",null,"AUTO速度",-1)),et={class:"contents"},lt=n(()=>t("label",null,"文字表示速度",-1)),ot={class:"contents"},nt=n(()=>t("label",null,"名札フォント",-1)),at={class:"flex gap-5"},it={class:"contents"},dt=n(()=>t("label",null,"テキストフォント",-1)),ct={class:"flex gap-5"},ut={class:"contents"},_t=n(()=>t("label",null,"言語",-1)),rt=n(()=>t("option",{value:""},"日本語",-1)),pt={class:"contents"},vt=n(()=>t("label",null,"表示1",-1)),mt={class:"flex"},gt=n(()=>t("div",{class:"contents"},[t("label",null,"表示2"),t("div",{class:"flex"},[t("button",{class:"setting_input setting_button",title:"アイコンモード"},"アイコンモード"),t("button",{class:"setting_input setting_button",title:"テキストモード"},"テキストモード")])],-1)),ht={class:"contents"},bt=n(()=>t("label",null,"差し色1",-1)),ft={class:"flex"},xt={class:"setting_input setting_color -primary"},yt={class:"contents"},wt=n(()=>t("label",null,"差し色2",-1)),St={class:"flex"},Ht={class:"setting_input setting_color -secondary"},Ut={__name:"Base",setup(c){const _=I(),{fontFamilyList:h}=_,{darkMode:u,color:o,fontFamily:i,fontWeightList:r,fontWeight:d,fontStyle:$t}=M(_);return V(),(Bt,e)=>(m(),g("div",J,[a(L,{col:"col-span-2"},{default:y(()=>[t("div",K,[O,t("p",q,H(["BGM","SE","文字速度","フォント","言語","表示","色"].join("．")),1)])]),_:1}),t("section",P,[t("div",Q,[X,a(f,{class:"w-80",value:"0.5",min:"0",max:"1",step:"0.1"})]),t("div",Y,[Z,a(f,{class:"w-80",value:"0.5",min:"0",max:"1",step:"0.1"})]),t("div",tt,[st,a(f,{class:"w-80",value:"0.5",min:"0",max:"1",step:"0.1"})]),t("div",et,[lt,a(f,{class:"w-80",value:"0.5",min:"0",max:"1",step:"0.1"})]),t("div",ot,[nt,t("div",at,[a(p,{value:s(i).nameTag,"onUpdate:value":e[0]||(e[0]=l=>s(i).nameTag=l),list:s(h)},null,8,["value","list"]),a(p,{value:s(d).nameTag,"onUpdate:value":e[1]||(e[1]=l=>s(d).nameTag=l),list:s(r).nameTag},null,8,["value","list"])])]),t("div",it,[dt,t("div",ct,[a(p,{value:s(i).dialog,"onUpdate:value":e[2]||(e[2]=l=>s(i).dialog=l),list:s(h)},null,8,["value","list"]),a(p,{value:s(d).dialog,"onUpdate:value":e[3]||(e[3]=l=>s(d).dialog=l),list:s(r).dialog},null,8,["value","list"])])]),t("div",ut,[_t,a(p,{value:""},{default:y(()=>[rt]),_:1})]),t("div",pt,[vt,t("div",mt,[t("button",{class:w(["setting_input setting_button",{"setting_button-active":!s(u)}]),onClick:e[4]||(e[4]=l=>u.value=!1),title:"ライトモード"},"ライトモード",2),t("button",{class:w(["setting_input setting_button",{"setting_button-active":s(u)}]),onClick:e[5]||(e[5]=l=>u.value=!0),title:"ダークモード"},"ダークモード",2)])]),gt,t("div",ht,[bt,t("div",ft,[v(t("input",{class:"setting_input -color","onUpdate:modelValue":e[6]||(e[6]=l=>s(o).primaryHex=l)},null,512),[[b,s(o).primaryHex,void 0,{lazy:!0,trim:!0}]]),t("label",xt,[v(t("input",{class:"hidden","onUpdate:modelValue":e[7]||(e[7]=l=>s(o).primaryHex=l),type:"color"},null,512),[[b,s(o).primaryHex,void 0,{lazy:!0}]])])])]),t("div",yt,[wt,t("div",St,[v(t("input",{class:"setting_input -color","onUpdate:modelValue":e[8]||(e[8]=l=>s(o).secondaryHex=l)},null,512),[[b,s(o).secondaryHex,void 0,{lazy:!0,trim:!0}]]),t("label",Ht,[v(t("input",{class:"hidden","onUpdate:modelValue":e[9]||(e[9]=l=>s(o).secondaryHex=l),type:"color"},null,512),[[b,s(o).secondaryHex,void 0,{lazy:!0}]])])])])])]))}},Mt=S(Ut,[["__scopeId","data-v-91bc177c"]]);export{Mt as default};

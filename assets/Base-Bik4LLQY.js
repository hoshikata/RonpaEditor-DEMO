import{o as m,c as g,a as t,_ as S,r as H,e as x,w as v,e2 as U,F as T,j as B,t as $,e5 as z,b as a,u as e,d as V,s as k,e9 as I,e1 as y,n as w,ed as f,d_ as L,d$ as M}from"./index-C2pZrs4_.js";import{R as b}from"./Range-B-uPvdF5.js";import{H as C}from"./Header-vBQeT_Yx.js";const F={viewBox:"0 0 24 24",width:"1.2em",height:"1.2em"},j=t("path",{fill:"currentColor",d:"M17.77 3.77L16 2L6 12l10 10l1.77-1.77L9.54 12z"},null,-1),A=[j];function E(c,r){return m(),g("svg",F,[...A])}const G={name:"ic-baseline-arrow-back-ios-new",render:E},R={class:"relative flex"},D=["value"],N={class:"select_arrow select_border"},W={__name:"Select",props:{value:{type:[String],default:""},list:{type:[Array],default:()=>[]}},emits:["update:value"],setup(c,{emit:r}){const h=c,u=r,o=H("");return x(o,i=>u("update:value",i)),x(()=>h.value,i=>o.value=i,{immediate:!0}),(i,_)=>(m(),g("label",R,[v(t("select",{class:"select select_border","onUpdate:modelValue":_[0]||(_[0]=d=>o.value=d)},[(m(!0),g(T,null,B(c.list,d=>(m(),g("option",{value:d.id},$(d.title),9,D))),256)),z(i.$slots,"default",{},void 0,!0)],512),[[U,o.value,void 0,{lazy:!0,trim:!0}]]),t("div",N,[a(e(G),{class:"-rotate-90 text-neutral-300"})])]))}},p=S(W,[["__scopeId","data-v-accfe058"]]),n=c=>(L("data-v-101c3eff"),c=c(),M(),c),O={class:"setting_wrap"},q={class:"setting_head col-span-2"},J=n(()=>t("h2",{class:"setting_title"},"設定",-1)),K={class:"setting_desc"},P={class:"setting_container col-span-2 items-center justify-items-start gap-y-8 px-14 pb-5"},Q={class:"contents"},X=n(()=>t("label",null,"BGM音量",-1)),Y={class:"contents"},Z=n(()=>t("label",null,"SE音量",-1)),tt={class:"contents"},et=n(()=>t("label",null,"AUTO速度",-1)),st={class:"contents"},lt=n(()=>t("label",null,"文字表示速度",-1)),ot={class:"contents"},nt=n(()=>t("label",null,"名札フォント",-1)),at={class:"flex gap-5"},it={class:"contents"},dt=n(()=>t("label",null,"テキストフォント",-1)),ct={class:"flex gap-5"},ut={class:"contents"},rt=n(()=>t("label",null,"言語",-1)),_t=n(()=>t("option",{value:""},"日本語",-1)),pt={class:"contents"},vt=n(()=>t("label",null,"表示1",-1)),mt={class:"flex"},gt=n(()=>t("div",{class:"contents"},[t("label",null,"表示2"),t("div",{class:"flex"},[t("button",{class:"setting_input setting_button"},"アイコンモード"),t("button",{class:"setting_input setting_button"},"テキストモード")])],-1)),ht={class:"contents"},ft=n(()=>t("label",null,"差し色1",-1)),bt={class:"flex"},xt={class:"setting_input setting_color bg-primary hover:bg-primary/80"},yt={class:"contents"},wt=n(()=>t("label",null,"差し色2",-1)),St={class:"flex"},$t={class:"setting_input setting_color bg-secondary hover:bg-secondary/80"},Ht={__name:"Base",setup(c){const r=V(),{fontFamilyList:h}=r,{darkMode:u,color:o,fontFamily:i,fontWeightList:_,fontWeight:d,fontStyle:Ut}=k(r);return I(),(Tt,s)=>(m(),g("div",O,[a(C,{col:"col-span-2"},{default:y(()=>[t("div",q,[J,t("p",K,$(["BGM","SE","文字速度","フォント","言語","表示","色"].join("．")),1)])]),_:1}),t("section",P,[t("div",Q,[X,a(b,{class:"w-80",value:"0.5",min:"0",max:"1",step:"0.1"})]),t("div",Y,[Z,a(b,{class:"w-80",value:"0.5",min:"0",max:"1",step:"0.1"})]),t("div",tt,[et,a(b,{class:"w-80",value:"0.5",min:"0",max:"1",step:"0.1"})]),t("div",st,[lt,a(b,{class:"w-80",value:"0.5",min:"0",max:"1",step:"0.1"})]),t("div",ot,[nt,t("div",at,[a(p,{value:e(i).nameTag,"onUpdate:value":s[0]||(s[0]=l=>e(i).nameTag=l),list:e(h)},null,8,["value","list"]),a(p,{value:e(d).nameTag,"onUpdate:value":s[1]||(s[1]=l=>e(d).nameTag=l),list:e(_).nameTag},null,8,["value","list"])])]),t("div",it,[dt,t("div",ct,[a(p,{value:e(i).dialog,"onUpdate:value":s[2]||(s[2]=l=>e(i).dialog=l),list:e(h)},null,8,["value","list"]),a(p,{value:e(d).dialog,"onUpdate:value":s[3]||(s[3]=l=>e(d).dialog=l),list:e(_).dialog},null,8,["value","list"])])]),t("div",ut,[rt,a(p,{value:""},{default:y(()=>[_t]),_:1})]),t("div",pt,[vt,t("div",mt,[t("button",{class:w(["setting_input setting_button",{"setting_button-active":!e(u)}]),onClick:s[4]||(s[4]=l=>u.value=!1)},"ライトモード",2),t("button",{class:w(["setting_input setting_button",{"setting_button-active":e(u)}]),onClick:s[5]||(s[5]=l=>u.value=!0)},"ダークモード",2)])]),gt,t("div",ht,[ft,t("div",bt,[v(t("input",{class:"setting_input w-36","onUpdate:modelValue":s[6]||(s[6]=l=>e(o).primaryHex=l)},null,512),[[f,e(o).primaryHex,void 0,{lazy:!0,trim:!0}]]),t("label",xt,[v(t("input",{class:"hidden","onUpdate:modelValue":s[7]||(s[7]=l=>e(o).primaryHex=l),type:"color"},null,512),[[f,e(o).primaryHex,void 0,{lazy:!0}]])])])]),t("div",yt,[wt,t("div",St,[v(t("input",{class:"setting_input w-36","onUpdate:modelValue":s[8]||(s[8]=l=>e(o).secondaryHex=l)},null,512),[[f,e(o).secondaryHex,void 0,{lazy:!0,trim:!0}]]),t("label",$t,[v(t("input",{class:"hidden","onUpdate:modelValue":s[9]||(s[9]=l=>e(o).secondaryHex=l),type:"color"},null,512),[[f,e(o).secondaryHex,void 0,{lazy:!0}]])])])])])]))}},kt=S(Ht,[["__scopeId","data-v-101c3eff"]]);export{kt as default};

import{_ as h,o as e,c as a,a as s,i as x,k as l,d as i,J as $,x as z,e as m,C as _,S as n,w as c,v as S,F as b,y as B,z as k,n as T}from"./index-CyJrGj8D.js";import{_ as v}from"./Image-DSnKcMXH.js";import{D as I}from"./Dialog-CESR4OxB.js";const q={name:"MaterialSymbolsEditSquareOutline"},M={xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",viewBox:"0 0 24 24"},C=s("path",{fill:"currentColor",d:"M5 21q-.825 0-1.412-.587T3 19V5q0-.825.588-1.412T5 3h8.925l-2 2H5v14h14v-6.95l2-2V19q0 .825-.587 1.413T19 21zm4-6v-4.25l9.175-9.175q.3-.3.675-.45t.75-.15q.4 0 .763.15t.662.45L22.425 3q.275.3.425.663T23 4.4t-.137.738t-.438.662L13.25 15zM21.025 4.4l-1.4-1.4zM11 13h1.4l5.8-5.8l-.7-.7l-.725-.7L11 11.575zm6.5-6.5l-.725-.7zl.7.7z"},null,-1),D=[C];function V(t,r,o,d,u,y){return e(),a("svg",M,D)}const G=h(q,[["render",V]]),L={__name:"SpriteItem",props:{data:{type:[Object],default:()=>({})}},setup(t){const{getMask:r,geSpritePosition:o,geSpriteSize:d}=x();return(u,y)=>(e(),a("div",{class:"-sprite",style:l(i(r)(t.data.mask))},[s("div",{class:"-sprite-container",style:l(i(o)(t.data,1))},[s("div",{class:"-sprite-inner",style:l(i(d)(t.data,1))},[$(u.$slots,"default",{},void 0,!0)],4)],4)],4))}},w=h(L,[["__scopeId","data-v-539aa9f7"]]),N={key:0,class:"contents"},E=["data-text"],O={key:1,class:"contents"},U=["data-text"],j={class:"contents"},F={class:"contents"},H={class:"contents"},J={__name:"UiItem",props:{data:{type:[Object],default:()=>({dialog:{},sprite_1:{},sprite_2:{},name_tag_1:{},name_tag_2:{}})},large:{type:[Boolean],default:!1},edit:{type:[Boolean],default:!1},nameTag1Show:{type:[Boolean],default:!0},nameTag2Show:{type:[Boolean],default:!0}},setup(t){const{getMask:r,getDialogStyle:o,getNameTagStyle:d}=x();return(u,y)=>{const g=z("visible");return e(),a("div",{class:T(["ui_preview",{lattice:t.edit}])},[t.edit?(e(),a("div",N,[m(w,{data:t.data.sprite_1},{default:_(()=>[s("div",{class:"-sprite-bg text-primary","data-text":t.large?"立ち絵1":""},null,8,E)]),_:1},8,["data"])])):n("",!0),t.edit?c((e(),a("div",O,[m(w,{data:t.data.sprite_2},{default:_(()=>[s("div",{class:"-sprite-bg text-secondary","data-text":t.large?"立ち絵2":""},null,8,U)]),_:1},8,["data"])],512)),[[S,t.data.sprite_number===2]]):n("",!0),s("div",j,[c(s("div",{class:"-image -ui-mask",style:l(i(r)(t.data.mask))},null,4),[[g,t.data.mask]]),(e(!0),a(b,null,B(t.data.images??[],f=>(e(),k(v,{class:"-image",src:f.path,alt:f.name},null,8,["src","alt"]))),256))]),s("div",F,[c(m(v,{class:"-image",src:t.data.name_tag_1.path},null,8,["src"]),[[g,t.nameTag1Show]]),t.edit?(e(),a("div",{key:0,class:"-name-tag",style:l(i(d)(t.data.name_tag_1))},null,4)):n("",!0)]),c(s("div",H,[c(m(v,{class:"-image",src:t.data.name_tag_2.path},null,8,["src"]),[[g,t.nameTag2Show]]),t.edit?(e(),a("div",{key:0,class:"-name-tag",style:l(i(d)(t.data.name_tag_2))},null,4)):n("",!0)],512),[[S,t.data.name_tag_number===2]]),t.edit?(e(),a("div",{key:2,class:"-dialog",style:l(i(o)(t.data))},[t.large?(e(),k(I,{key:0,value:`テスト文字
テスト文字`})):n("",!0)],4)):n("",!0)],2)}}},K=h(J,[["__scopeId","data-v-3eed6846"]]);export{G as I,K as U};

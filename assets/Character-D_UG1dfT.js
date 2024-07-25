import{o as m,c as p,a as t,_ as L,u as I,s as M,h as D,p as H,e as a,y as E,F as U,l as N,d as y,w as l,v as A,n as C,P as u,k as v,D as $,L as T,M as P,H as R}from"./index-CyNuJb8P.js";import{U as V}from"./Upload-CtyaW6jA.js";import{_ as X}from"./Image-DBvpIipJ.js";import{C as j}from"./Control-BtycsGdz.js";/* empty css                                                             */import{D as k}from"./IconDelete-zxGqZnbL.js";import{H as q}from"./Header-BoFbfZz9.js";import"./round-drag-indicator-CXp-YZEu.js";const G={viewBox:"0 0 24 24",width:"1.2em",height:"1.2em"},J=t("path",{fill:"currentColor",d:"m12 17.27l4.15 2.51c.76.46 1.69-.22 1.49-1.08l-1.1-4.72l3.67-3.18c.67-.58.31-1.68-.57-1.75l-4.83-.41l-1.89-4.46c-.34-.81-1.5-.81-1.84 0L9.19 8.63l-4.83.41c-.88.07-1.24 1.17-.57 1.75l3.67 3.18l-1.1 4.72c-.2.86.73 1.54 1.49 1.08z"},null,-1),K=[J];function O(g,c){return m(),p("svg",G,[...K])}const Q={name:"ic-round-star",render:O},d=g=>(T("data-v-460074d7"),g=g(),P(),g),W={class:"setting_wrap"},Y=d(()=>t("div",null,null,-1)),Z=d(()=>t("div",{class:"setting_head"},[t("h2",{class:"setting_title"},"アイコン"),t("p",{class:"setting_desc"},"ゲーム内表示"),t("p",{class:"setting_desc highlight"},"★ = 主人公")],-1)),ee=d(()=>t("div",{class:"setting_head col-span-2"},[t("h2",{class:"setting_title"},"お名前"),t("p",{class:"setting_desc"},"EXCEL内表示")],-1)),se=d(()=>t("div",{class:"setting_head"},[t("h2",{class:"setting_title"},"名札"),t("p",{class:"setting_desc"},"ゲーム内表示"),t("p",{class:"setting_desc"},"（画像のない場合はカタカナ表示になります）")],-1)),te=["draggable","onDragstart","onDragend"],oe={class:"setting_avatar"},ne=["onClick"],le={class:"setting_detail",draggable:"false"},ae=["onUpdate:modelValue","disabled","onFocus","onBlur"],ie={class:"setting_col"},de=d(()=>t("p",{class:"ml-0.5"},"名前の色",-1)),_e=["onUpdate:modelValue","onFocus","onBlur"],ue=["onUpdate:modelValue"],ge={class:"setting_detail"},re=["onUpdate:modelValue","disabled","onFocus","onBlur"],me={class:"setting_col"},pe=d(()=>t("p",{class:"ml-0.5"},"名前の背景色",-1)),ve=["onUpdate:modelValue","onFocus","onBlur"],ce=["onUpdate:modelValue"],be=d(()=>t("div",{class:"col-span-5 mb-4"},null,-1)),fe={__name:"Character",setup(g){const c=I(),{characterList:i,characterNew:w}=M(c),{dragMove:B,dropMove:x}=R(),z=D(()=>i.value.some(o=>o.is_hero)),F=o=>i.value.splice(o+1,0,{...w.value}),S=o=>i.value.splice(o,1),b=D(()=>i.value.some(o=>o.dragging)),f=(o,n,_)=>{_&&B(o,{index:n}),i.value[n].dragging=_},h=(o,n)=>x(i.value,o.index,n);return(o,n)=>{const _=H("visible");return m(),p("div",W,[a(q,{col:"col-span-5"},{default:E(()=>[Y,Z,ee,se]),_:1}),a(k,{class:"setting_dragline",onDrop:n[0]||(n[0]=e=>h(e,0)),dragging:b.value},null,8,["dragging"]),(m(!0),p(U,null,N(y(i),(e,r)=>(m(),p(U,{key:e.id},[t("section",{class:C(["setting_container",{dragging:e.dragging}]),draggable:e.is_drag,onDragstart:s=>f(s,r,!0),onDragend:s=>f(s,r,!1),onDrag:n[1]||(n[1]=$(()=>{},["prevent"])),onDrop:n[2]||(n[2]=$(()=>{},["prevent"]))},[a(j,{class:"row-span-2 -mr-6",hasDel:!e.disabled,onAdd:s=>F(r),onDel:s=>S(r)},null,8,["hasDel","onAdd","onDel"]),t("div",oe,[l(a(X,{class:"setting_avatar_img",src:e.default_head,alt:e.name},null,8,["src","alt"]),[[_,e.disabled&&!e.image_head]]),a(V,{class:"size-full",value:e.image_head,"onUpdate:value":s=>e.image_head=s,type:"cover"},null,8,["value","onUpdate:value"]),l((m(),p("button",{class:C(["setting_star",{"setting_star-active":e.is_hero}]),onClick:s=>e.is_hero=!e.is_hero,title:"主人公"},[a(y(Q))],10,ne)),[[_,!(z.value&&!e.is_hero)],[A,!e.disabled]])]),t("div",le,[l(t("input",{class:"setting_name last","onUpdate:modelValue":s=>e.name=s,style:v({"--name-bg":e.name_bg,"--name-text":e.name_text}),disabled:e.disabled,onFocus:s=>e.is_drag=!1,onBlur:s=>e.is_drag=!0},null,44,ae),[[u,e.name,void 0,{lazy:!0,trim:!0}]]),t("div",ie,[de,l(t("input",{class:"setting_input","onUpdate:modelValue":s=>e.name_text=s,onFocus:s=>e.is_drag=!1,onBlur:s=>e.is_drag=!0},null,40,_e),[[u,e.name_text,void 0,{lazy:!0,trim:!0}]]),t("label",{class:"setting_color",style:v({"background-color":e.name_text})},[l(t("input",{class:"hidden","onUpdate:modelValue":s=>e.name_text=s,type:"color"},null,8,ue),[[u,e.name_text,void 0,{lazy:!0}]])],4)])]),t("div",ge,[l(t("input",{class:"setting_name first","onUpdate:modelValue":s=>e.katakana=s,disabled:e.disabled,onFocus:s=>e.is_drag=!1,onBlur:s=>e.is_drag=!0},null,40,re),[[u,e.katakana,void 0,{lazy:!0,trim:!0}]]),t("div",me,[pe,l(t("input",{class:"setting_input","onUpdate:modelValue":s=>e.name_bg=s,onFocus:s=>e.is_drag=!1,onBlur:s=>e.is_drag=!0},null,40,ve),[[u,e.name_bg,void 0,{lazy:!0,trim:!0}]]),t("label",{class:"setting_color",style:v({"background-color":e.name_bg})},[l(t("input",{class:"hidden","onUpdate:modelValue":s=>e.name_bg=s,type:"color"},null,8,ce),[[u,e.name_bg,void 0,{lazy:!0}]])],4)])]),l(a(V,{class:"setting_nametag",value:e.image_name,"onUpdate:value":s=>e.image_name=s},null,8,["value","onUpdate:value"]),[[_,!(e.disabled&&!e.unknown)]])],42,te),a(k,{class:"setting_dragline",onDrop:s=>h(s,r+1),dragging:b.value},null,8,["onDrop","dragging"])],64))),128)),be])}}},we=L(fe,[["__scopeId","data-v-460074d7"]]);export{we as default};

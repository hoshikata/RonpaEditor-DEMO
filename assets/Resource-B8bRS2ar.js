import{_ as k,o as s,c as i,a as o,f as C,s as D,h as B,r as v,g as I,I as p,e as l,U as r,d as u,w as f,v as h,n as y,t as S,m as V}from"./index-BexsKry7.js";import{I as U}from"./round-drag-indicator-B44KvNBL.js";import{I as R,D as L}from"./IconDelete-Dof_8FLv.js";import{U as M}from"./Upload-CtYgojjJ.js";import{_ as N}from"./Image-BU5xmaAy.js";import{_ as P}from"./Audio-ob4D50xe.js";const E={name:"MaterialSymbolsSyncRounded"},j={xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",viewBox:"0 0 24 24"},z=o("path",{fill:"currentColor",d:"M6 12.05q0 1.125.425 2.188T7.75 16.2l.25.25V15q0-.425.288-.712T9 14t.713.288T10 15v4q0 .425-.288.713T9 20H5q-.425 0-.712-.288T4 19t.288-.712T5 18h1.75l-.4-.35q-1.3-1.15-1.825-2.625T4 12.05Q4 9.7 5.2 7.787T8.425 4.85q.35-.2.738-.025t.512.575q.125.375-.012.75t-.488.575q-1.45.8-2.312 2.213T6 12.05m12-.1q0-1.125-.425-2.187T16.25 7.8L16 7.55V9q0 .425-.288.713T15 10t-.712-.288T14 9V5q0-.425.288-.712T15 4h4q.425 0 .713.288T20 5t-.288.713T19 6h-1.75l.4.35q1.225 1.225 1.788 2.663T20 11.95q0 2.35-1.2 4.263t-3.225 2.937q-.35.2-.737.025t-.513-.575q-.125-.375.013-.75t.487-.575q1.45-.8 2.313-2.212T18 11.95"},null,-1),G=[z];function H(e,c,b,n,$,T){return s(),i("svg",j,G)}const O=k(E,[["render",H]]),Q={viewBox:"0 0 24 24",width:"1.2em",height:"1.2em"},A=o("path",{fill:"currentColor",d:"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10s10-4.48 10-10S17.52 2 12 2m-2 13.5v-7a.5.5 0 0 1 .8-.4l4.67 3.5c.27.2.27.6 0 .8l-4.67 3.5a.5.5 0 0 1-.8-.4"},null,-1),F=[A];function J(e,c){return s(),i("svg",Q,[...F])}const w={name:"ic-round-play-circle-filled-white",render:J},K={viewBox:"0 0 24 24",width:"1.2em",height:"1.2em"},W=o("path",{fill:"currentColor",d:"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10s10-4.48 10-10S17.52 2 12 2m-2 14c-.55 0-1-.45-1-1V9c0-.55.45-1 1-1s1 .45 1 1v6c0 .55-.45 1-1 1m4 0c-.55 0-1-.45-1-1V9c0-.55.45-1 1-1s1 .45 1 1v6c0 .55-.45 1-1 1"},null,-1),X=[W];function Y(e,c){return s(),i("svg",K,[...X])}const Z={name:"ic-round-pause-circle",render:Y},_=["draggable"],ee={key:0,class:"relative"},te=["disabled","title"],ae={key:1,class:"relative"},oe=["title"],le={key:2,class:"relative"},se=["title"],ne=["title"],de={class:"resource_button",title:"更新画像"},ie={key:0,class:"resource_button pointer-events-none group-hover:text-primary",title:"ドラッグ"},re={__name:"Resource",props:{data:{type:[Object],default:()=>({})},hasDrag:{type:[Boolean],default:!1},draggable:{type:[Boolean],default:!0},col:{type:[Boolean],default:!0},type:{type:[String],default:"image"}},emits:["update:data","drag","drop","fancy","add","del","upload"],setup(e,{emit:c}){const b=e,n=c,$=C(),{audioVolume:T}=D($),x=B(()=>({image:"image/*",audio:"audio/*",video:"video/*"})[b.type]),q=v(!0),g=v(null),d=v(!1);return I(d,m=>{m?g.value.play():g.value.pause()}),(m,t)=>(s(),i("div",{class:y(["resource_item group",{"-dragging":e.data.dragging,"flex-col":e.col}]),draggable:e.data.is_drag&&e.draggable,onDragstart:t[10]||(t[10]=a=>n("drag",[a,!0])),onDragend:t[11]||(t[11]=a=>n("drag",[a,!1]))},[e.type==="image"?(s(),i("div",ee,[o("button",{class:"resource_open",onClick:t[1]||(t[1]=a=>n("fancy",e.data.path)),disabled:!q.value,title:e.data.name+" 開く"},[p(m.$slots,"image",{},()=>[l(N,{class:"resource_image",src:e.data.path,alt:e.data.name,onLoad:t[0]||(t[0]=a=>q.value=a)},null,8,["src","alt"])],!0)],8,te)])):r("",!0),e.type==="audio"?(s(),i("div",ae,[l(P,{class:"hidden",src:e.data.path,volume:u(T).bgm,onEnded:t[2]||(t[2]=a=>d.value=!1),ref_key:"audio",ref:g},null,8,["src","volume"]),o("button",{class:y(["resource_audio",{"text-primary":d.value}]),onClick:t[3]||(t[3]=a=>d.value=!d.value),title:"プレイ "+e.data.name},[f(l(u(w),null,null,512),[[h,!d.value]]),f(l(u(Z),null,null,512),[[h,d.value]])],10,oe)])):r("",!0),e.type==="video"?(s(),i("div",le,[o("button",{class:"resource_audio",onClick:t[4]||(t[4]=a=>n("fancy",e.data.path)),title:"プレイ "+e.data.name},[f(l(u(w),null,null,512),[[h,!d.value]])],8,se)])):r("",!0),o("div",{class:y(["resource_detail",{"flex-col":!e.col}])},[o("p",{class:"resource_title",title:decodeURI(e.data.path)},S(e.data.name),9,ne),p(m.$slots,"button",{},()=>[o("label",de,[l(O),l(M,{class:"hidden",value:e.data.path,"onUpdate:value":t[5]||(t[5]=a=>e.data.path=a),name:e.data.name,"onUpdate:name":t[6]||(t[6]=a=>e.data.name=a),accept:x.value,onUpload:t[7]||(t[7]=a=>n("upload",a))},null,8,["value","name","accept"])])],!0),o("button",{class:"resource_button",onClick:t[8]||(t[8]=a=>n("del",e.data.id)),title:"削除"},[l(R)]),e.draggable?(s(),i("button",ie,[l(u(U))])):r("",!0)],2),e.draggable?(s(),V(L,{key:3,class:"resource_dragline",onDrop:t[9]||(t[9]=a=>n("drop",a)),dragging:e.hasDrag},null,8,["dragging"])):r("",!0)],42,_))}},he=k(re,[["__scopeId","data-v-bff92ee5"]]);export{he as R};

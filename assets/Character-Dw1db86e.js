import{o as p,c as v,a as s,k as N,_ as S,m as M,w as _,b as r,u as F,n as B,M as T,s as H,g as V,e6 as j,F as k,p as E,ec as y,h as x,eb as L,e2 as O,e3 as R}from"./index-DXMknspr.js";import{D as w,C as A,u as P}from"./useDrag-BpmsjtGT.js";import{I as z}from"./round-close-yRZ1m-84.js";import{H as X}from"./Header-BLqTEeLL.js";const q={viewBox:"0 0 24 24",width:"1.2em",height:"1.2em"},G=s("path",{fill:"currentColor",d:"m12 17.27l4.15 2.51c.76.46 1.69-.22 1.49-1.08l-1.1-4.72l3.67-3.18c.67-.58.31-1.68-.57-1.75l-4.83-.41l-1.89-4.46c-.34-.81-1.5-.81-1.84 0L9.19 8.63l-4.83.41c-.88.07-1.24 1.17-.57 1.75l3.67 3.18l-1.1 4.72c-.2.86.73 1.54 1.49 1.08z"},null,-1),J=[G];function K(a,h){return p(),v("svg",q,[...J])}const Q={name:"ic-round-star",render:K};function W(){const{findData:a}=N(),h=(o,l)=>{const n=l.replace(/\s/g,"").toLowerCase().split(","),g=o.name.slice(o.name.lastIndexOf(".")).toLowerCase();return l!==""?n.includes(g):!0},i=o=>o instanceof Blob;return{isFileType:h,isBlobFile:i,blobUrl:(o,l)=>{const n=g=>g.slice(-1)==="/"?"":g;return i(o)?URL.createObjectURL(o):n(l??"")},getFileName:o=>{var n;o=o??"";const l=(n=o.lastIndexOf)==null?void 0:n.call(o,"/");return i(o)||l===-1?o:o.slice(l).slice(1)},getFilesData:(o,l)=>{const n=l.filter(c=>!c.id),g=o.filter(c=>!a(l,c.id)).map(c=>c.name),C=o.filter(c=>a(l,c.id));return{addList:n,delList:g,resultList:C}}}}const Y={class:"upload_input"},Z={class:"upload_image"},ee=["src"],se={__name:"Upload",props:{value:{type:[String],default:""},type:{type:[String],default:"contain"},disabled:{type:[Boolean],default:!1}},emits:["update:value"],setup(a,{emit:h}){const{blobUrl:i}=W(),U=h,D=o=>{const l=o.target.files[0],n=i(l,"");U("update:value",n)},$=()=>U("update:value","");return(o,l)=>{const n=M("visible");return p(),v("div",{class:B(["upload",{"pointer-events-none":a.disabled}])},[_((p(),v("label",Y,[r(F(z)),s("input",{class:"hidden",onChange:D,type:"file",accept:"image/*"},null,32)])),[[n,!a.value]]),_((p(),v("div",Z,[s("img",{class:B(["size-full",a.type==="cover"?"object-cover":"object-contain"]),src:a.value},null,10,ee),s("button",{class:"upload_remove",onClick:$},[r(F(z),{class:"rotate-45"})])])),[[n,a.value]])],2)}}},I=S(se,[["__scopeId","data-v-ecec3ea5"]]),f=a=>(O("data-v-74ea5371"),a=a(),R(),a),te={class:"setting_wrap"},oe=f(()=>s("div",null,null,-1)),le=f(()=>s("div",{class:"setting_head"},[s("h2",{class:"setting_title"},"アイコン"),s("p",{class:"setting_desc"},"ゲーム内表示"),s("p",{class:"setting_desc highlight"},"★ = 主人公")],-1)),ne=f(()=>s("div",{class:"setting_head col-span-2"},[s("h2",{class:"setting_title"},"お名前"),s("p",{class:"setting_desc"},"EXCEL内表示")],-1)),ae=f(()=>s("div",{class:"setting_head"},[s("h2",{class:"setting_title"},"名札"),s("p",{class:"setting_desc"},"ゲーム内表示"),s("p",{class:"setting_desc"},"（画像のない場合はカタカナ表示になります）")],-1)),ie=["draggable","onDragstart","onDragend"],de={class:"setting_avatar"},ue=["onClick"],ce={class:"setting_detail",draggable:"false"},_e=["onUpdate:modelValue","disabled","onFocus","onBlur"],re={class:"setting_col"},ge=f(()=>s("p",{class:"ml-0.5"},"名前の色",-1)),pe=["onUpdate:modelValue","onFocus","onBlur"],ve=["onUpdate:modelValue"],me={class:"setting_detail"},be=["onUpdate:modelValue","disabled","onFocus","onBlur"],fe={class:"setting_col"},he=f(()=>s("p",{class:"ml-0.5"},"名前の背景色",-1)),ye=["onUpdate:modelValue","onFocus","onBlur"],Ue=["onUpdate:modelValue"],Ce=f(()=>s("div",{class:"col-span-5 mb-4"},null,-1)),De={__name:"Character",setup(a){const h=T(),{characterList:i,characterNew:U}=H(h),{dragMove:D,dropMove:$}=P(),o=V(()=>i.value.some(u=>u.is_hero)),l=V(()=>i.value.some(u=>u.dragging)),n=u=>{const d={...U.value},m=[...i.value].sort((e,b)=>b.id-e.id)[0];d.id=m?m.id+1:0,i.value.splice(u+1,0,d)},g=u=>i.value.splice(u,1),C=(u,d,m)=>{m&&D(u,{index:d}),i.value[d].dragging=m},c=(u,d)=>$(i.value,u.index,d);return(u,d)=>{const m=M("visible");return p(),v("div",te,[r(X,{col:"col-span-5"},{default:j(()=>[oe,le,ne,ae]),_:1}),r(w,{class:"setting_dragline",onDrop:d[0]||(d[0]=e=>c(e,0)),dragging:l.value},null,8,["dragging"]),(p(!0),v(k,null,E(F(i),(e,b)=>(p(),v(k,{key:e.id},[s("section",{class:B(["setting_container",{dragging:e.dragging}]),draggable:e.is_drag,onDragstart:t=>C(t,b,!0),onDragend:t=>C(t,b,!1),onDrag:d[1]||(d[1]=L(()=>{},["prevent"])),onDrop:d[2]||(d[2]=L(()=>{},["prevent"]))},[r(A,{class:"row-span-2 -mr-6",hasDel:!e.disabled,onAdd:t=>n(b),onDel:t=>g(b)},null,8,["hasDel","onAdd","onDel"]),s("div",de,[r(I,{class:"size-full",value:e.image_head,"onUpdate:value":t=>e.image_head=t,type:"cover"},null,8,["value","onUpdate:value"]),_((p(),v("button",{class:B(["setting_star",{"setting_star-active":e.is_hero}]),onClick:t=>e.is_hero=!e.is_hero},[r(F(Q))],10,ue)),[[m,!(o.value&&!e.is_hero)]])]),s("div",ce,[_(s("input",{class:"setting_name last","onUpdate:modelValue":t=>e.name=t,style:x({"--name-bg":e.name_bg,"--name-text":e.name_text}),disabled:e.disabled,onFocus:t=>e.is_drag=!1,onBlur:t=>e.is_drag=!0},null,44,_e),[[y,e.name,void 0,{lazy:!0,trim:!0}]]),s("div",re,[ge,_(s("input",{class:"setting_input","onUpdate:modelValue":t=>e.name_text=t,onFocus:t=>e.is_drag=!1,onBlur:t=>e.is_drag=!0},null,40,pe),[[y,e.name_text,void 0,{lazy:!0,trim:!0}]]),s("label",{class:"setting_color",style:x({"background-color":e.name_text})},[_(s("input",{class:"hidden","onUpdate:modelValue":t=>e.name_text=t,type:"color"},null,8,ve),[[y,e.name_text,void 0,{lazy:!0}]])],4)])]),s("div",me,[_(s("input",{class:"setting_name first","onUpdate:modelValue":t=>e.katakana=t,disabled:e.disabled,onFocus:t=>e.is_drag=!1,onBlur:t=>e.is_drag=!0},null,40,be),[[y,e.katakana,void 0,{lazy:!0,trim:!0}]]),s("div",fe,[he,_(s("input",{class:"setting_input","onUpdate:modelValue":t=>e.name_bg=t,onFocus:t=>e.is_drag=!1,onBlur:t=>e.is_drag=!0},null,40,ye),[[y,e.name_bg,void 0,{lazy:!0,trim:!0}]]),s("label",{class:"setting_color",style:x({"background-color":e.name_bg})},[_(s("input",{class:"hidden","onUpdate:modelValue":t=>e.name_bg=t,type:"color"},null,8,Ue),[[y,e.name_bg,void 0,{lazy:!0}]])],4)])]),r(I,{class:"setting_nametag",value:e.image_name,"onUpdate:value":t=>e.image_name=t},null,8,["value","onUpdate:value"])],42,ie),r(w,{class:"setting_dragline",onDrop:t=>c(t,b+1),dragging:l.value},null,8,["onDrop","dragging"])],64))),128)),Ce])}}},Ve=S(De,[["__scopeId","data-v-74ea5371"]]);export{Ve as default};

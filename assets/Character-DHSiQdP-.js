import{o as _,d as g,a as n,m as T,_ as w,f as M,g as f,b,i as k,n as B,r as N,J as C,x as O,y as E,p as L,w as H,F as V,s as j,v as $,q as F,A,B as J}from"./index-Ks3OFodO.js";import{I,C as R}from"./Menu.vue_vue_type_style_index_0_scoped_a51af57a_lang-CK7BApVV.js";import{H as q}from"./Header-UfepQ88D.js";const P={viewBox:"0 0 24 24",width:"1.2em",height:"1.2em"},X=n("path",{fill:"currentColor",d:"m12 17.27l4.15 2.51c.76.46 1.69-.22 1.49-1.08l-1.1-4.72l3.67-3.18c.67-.58.31-1.68-.57-1.75l-4.83-.41l-1.89-4.46c-.34-.81-1.5-.81-1.84 0L9.19 8.63l-4.83.41c-.88.07-1.24 1.17-.57 1.75l3.67 3.18l-1.1 4.72c-.2.86.73 1.54 1.49 1.08z"},null,-1),G=[X];function K(i,v){return _(),g("svg",P,[...G])}const Q={name:"ic-round-star",render:K};function W(){const{findData:i}=T(),v=(t,o)=>{const a=o.replace(/\s/g,"").toLowerCase().split(","),m=t.name.slice(t.name.lastIndexOf(".")).toLowerCase();return o!==""?a.includes(m):!0},l=t=>t instanceof Blob;return{isFileType:v,isBlobFile:l,blobUrl:(t,o)=>{const a=m=>m.slice(-1)==="/"?"":m;return l(t)?URL.createObjectURL(t):a(o??"")},getFileName:t=>{var a;t=t??"";const o=(a=t.lastIndexOf)==null?void 0:a.call(t,"/");return l(t)||o===-1?t:t.slice(o).slice(1)},getFilesData:(t,o)=>{const a=o.filter(p=>!p.id),m=t.filter(p=>!i(o,p.id)).map(p=>p.name),x=t.filter(p=>i(o,p.id));return{addList:a,delList:m,resultList:x}}}}const Y={class:"upload"},Z={class:"upload_input"},ee={class:"upload_image"},te=["src"],se={__name:"Upload",props:{value:{type:[String],default:""},type:{type:[String],default:"contain"}},emits:["update:value"],setup(i,{emit:v}){const{blobUrl:l}=W(),r=v,u=t=>{const o=t.target.files[0],a=l(o,"");r("update:value",a)},y=()=>r("update:value","");return(t,o)=>{const a=M("visible");return _(),g("div",Y,[f((_(),g("label",Z,[b(k(I)),n("input",{class:"hidden",onChange:u,type:"file",accept:"image/*"},null,32)])),[[a,!i.value]]),f((_(),g("div",ee,[n("img",{class:B(["size-full",i.type==="cover"?"object-cover":"object-contain"]),src:i.value},null,10,te),n("button",{class:"upload_remove",onClick:y},[b(k(I),{class:"rotate-45"})])])),[[a,i.value]])])}}},z=w(se,[["__scopeId","data-v-7bd1348d"]]),ne={__name:"DropLine",props:{dragging:{type:[Boolean],default:!1}},emits:["drop"],setup(i,{emit:v}){const l=v,r=N(null),u=t=>{r.value.style.opacity=t?1:""},y=t=>{const o=t.dataTransfer.getData("text/plain");let a=null;try{a=JSON.parse(o)}catch{}u(!1),a!==null&&l("drop",a)};return(t,o)=>(_(),g("div",{class:B(["drag_line invisible opacity-0",{"!visible":i.dragging}]),onDragenter:o[0]||(o[0]=C(a=>u(!0),["prevent"])),onDragleave:o[1]||(o[1]=C(a=>u(!1),["prevent"])),onDragover:o[2]||(o[2]=C(()=>{},["prevent"])),onDrop:y,ref_key:"line",ref:r},null,34))}},S=w(ne,[["__scopeId","data-v-55dbec76"]]);function oe(){return{dragMove:(l,r)=>{l.dataTransfer.dropEffect="move",l.dataTransfer.setData("text/plain",JSON.stringify(r))},dropMove:(l,r,u)=>{const[y]=l.splice(r,1),t=r>=u?u:u-1,o=t<0?0:t;l.splice(o,0,y)}}}const U=i=>(A("data-v-ea77c95e"),i=i(),J(),i),le={class:"setting_wrap"},ae=U(()=>n("div",null,null,-1)),ie=U(()=>n("div",{class:"setting_head"},[n("h2",{class:"setting_title"},"アイコン"),n("p",{class:"setting_desc"},"ゲーム内表示"),n("p",{class:"setting_desc highlight"},"★ = 主人公")],-1)),de=U(()=>n("div",{class:"setting_head col-span-2"},[n("h2",{class:"setting_title"},"お名前"),n("p",{class:"setting_desc"},"EXCEL内表示")],-1)),re=U(()=>n("div",{class:"setting_head"},[n("h2",{class:"setting_title"},"名札"),n("p",{class:"setting_desc"},"ゲーム内表示"),n("p",{class:"setting_desc"},"（画像のない場合はカタカナ表示になります）")],-1)),ue=["draggable","onDragstart","onDragend"],ce={key:0,class:"setting_avatar setting_unknown"},_e={key:1,class:"setting_avatar"},ge=["onClick"],pe={class:"setting_detail",draggable:"false"},ve=["onUpdate:modelValue","onFocus","onBlur"],me={class:"setting_col"},fe=U(()=>n("p",{class:"ml-0.5"},"名前の色",-1)),be=["onUpdate:modelValue","onFocus","onBlur"],ye=["onUpdate:modelValue"],he={class:"setting_detail"},De=["onUpdate:modelValue","onFocus","onBlur"],Ue={class:"setting_col"},$e=U(()=>n("p",{class:"ml-0.5"},"名前の背景色",-1)),xe=["onUpdate:modelValue","onFocus","onBlur"],Ce=["onUpdate:modelValue"],ke=U(()=>n("div",{class:"col-span-5 mb-4"},null,-1)),Be={__name:"Character",setup(i){const v=O(),{characterList:l,characterNew:r}=E(v),{dragMove:u,dropMove:y}=oe(),t=L(()=>l.value.some(c=>c.is_hero)),o=L(()=>l.value.some(c=>c.dragging)),a=c=>{const d={...r.value},h=[...l.value].sort((e,D)=>D.id-e.id)[0];d.id=h?h.id+1:0,l.value.splice(c+1,0,d)},m=c=>l.value.splice(c,1),x=(c,d,h)=>{h&&u(c,{index:d}),l.value[d].dragging=h},p=(c,d)=>y(l.value,c.index,d);return(c,d)=>{const h=M("visible");return _(),g("div",le,[b(q,{col:"col-span-5"},{default:H(()=>[ae,ie,de,re]),_:1}),b(S,{class:"setting_dragline",onDrop:d[0]||(d[0]=e=>p(e,0)),dragging:o.value},null,8,["dragging"]),(_(!0),g(V,null,j(k(l),(e,D)=>(_(),g(V,{key:e.id},[n("div",{class:B(["setting_container",{dragging:e.dragging}]),draggable:e.is_drag,onDragstart:s=>x(s,D,!0),onDragend:s=>x(s,D,!1),onDrag:d[1]||(d[1]=C(()=>{},["prevent"])),onDrop:d[2]||(d[2]=C(()=>{},["prevent"]))},[b(R,{class:"row-span-2 -mr-6",hasDel:!e.unknown,onAdd:s=>a(D),onDel:s=>m(D)},null,8,["hasDel","onAdd","onDel"]),e.unknown?(_(),g("div",ce)):(_(),g("div",_e,[b(z,{class:"size-full",value:e.image_head,"onUpdate:value":s=>e.image_head=s,type:"cover"},null,8,["value","onUpdate:value"]),f((_(),g("button",{class:B(["setting_star",{"setting_star-active":e.is_hero}]),onClick:s=>e.is_hero=!e.is_hero},[b(k(Q))],10,ge)),[[h,!(t.value&&!e.is_hero)]])])),n("div",pe,[f(n("input",{class:"setting_name last","onUpdate:modelValue":s=>e.name=s,style:F({"--name-bg":e.name_bg,"--name-text":e.name_text}),onFocus:s=>e.is_drag=!1,onBlur:s=>e.is_drag=!0},null,44,ve),[[$,e.name,void 0,{lazy:!0,trim:!0}]]),n("div",me,[fe,f(n("input",{class:"setting_input","onUpdate:modelValue":s=>e.name_text=s,onFocus:s=>e.is_drag=!1,onBlur:s=>e.is_drag=!0},null,40,be),[[$,e.name_text,void 0,{lazy:!0,trim:!0}]]),n("label",{class:"setting_color",style:F({"background-color":e.name_text})},[f(n("input",{class:"hidden","onUpdate:modelValue":s=>e.name_text=s,type:"color"},null,8,ye),[[$,e.name_text,void 0,{lazy:!0}]])],4)])]),n("div",he,[f(n("input",{class:"setting_name first","onUpdate:modelValue":s=>e.katakana=s,onFocus:s=>e.is_drag=!1,onBlur:s=>e.is_drag=!0},null,40,De),[[$,e.katakana,void 0,{lazy:!0,trim:!0}]]),n("div",Ue,[$e,f(n("input",{class:"setting_input","onUpdate:modelValue":s=>e.name_bg=s,onFocus:s=>e.is_drag=!1,onBlur:s=>e.is_drag=!0},null,40,xe),[[$,e.name_bg,void 0,{lazy:!0,trim:!0}]]),n("label",{class:"setting_color",style:F({"background-color":e.name_bg})},[f(n("input",{class:"hidden","onUpdate:modelValue":s=>e.name_bg=s,type:"color"},null,8,Ce),[[$,e.name_bg,void 0,{lazy:!0}]])],4)])]),b(z,{class:"setting_nametag",value:e.image_name,"onUpdate:value":s=>e.image_name=s},null,8,["value","onUpdate:value"])],42,ue),b(S,{class:"setting_dragline",onDrop:s=>p(s,D+1),dragging:o.value},null,8,["onDrop","dragging"])],64))),128)),ke])}}},Ve=w(Be,[["__scopeId","data-v-ea77c95e"]]);export{Ve as default};

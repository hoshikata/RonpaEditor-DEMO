import{o as c,c as r,a as t,W as N,_ as S,j as H,w as g,b as p,u as k,n as x,i as T,s as j,h as B,Y as M,F as w,a0 as E,aa as y,k as F,a3 as V,G as O,H as R}from"./index-DjFC1Eq4.js";import{D as L,C as A,u as G}from"./useDrag-c6TIudq2.js";import{I as z}from"./Menu.vue_vue_type_style_index_0_scoped_c8f5dede_lang-Bp3pNzl9.js";import{H as P}from"./Header-B3XAPmnt.js";const W={viewBox:"0 0 24 24",width:"1.2em",height:"1.2em"},X=t("path",{fill:"currentColor",d:"m12 17.27l4.15 2.51c.76.46 1.69-.22 1.49-1.08l-1.1-4.72l3.67-3.18c.67-.58.31-1.68-.57-1.75l-4.83-.41l-1.89-4.46c-.34-.81-1.5-.81-1.84 0L9.19 8.63l-4.83.41c-.88.07-1.24 1.17-.57 1.75l3.67 3.18l-1.1 4.72c-.2.86.73 1.54 1.49 1.08z"},null,-1),Y=[X];function q(d,h){return c(),r("svg",W,[...Y])}const J={name:"ic-round-star",render:q};function K(){const{findData:d}=N(),h=(n,o)=>{const l=o.replace(/\s/g,"").toLowerCase().split(","),v=n.name.slice(n.name.lastIndexOf(".")).toLowerCase();return o!==""?l.includes(v):!0},a=n=>n instanceof Blob;return{isFileType:h,isBlobFile:a,blobUrl:(n,o)=>{const l=v=>v.slice(-1)==="/"?"":v;return a(n)?URL.createObjectURL(n):l(o??"")},getFileName:n=>{var l;n=n??"";const o=(l=n.lastIndexOf)==null?void 0:l.call(n,"/");return a(n)||o===-1?n:n.slice(o).slice(1)},getFilesData:(n,o)=>{const l=o.filter(_=>!_.id),v=n.filter(_=>!d(o,_.id)).map(_=>_.name),C=n.filter(_=>d(o,_.id));return{addList:l,delList:v,resultList:C}}}}const Q={class:"upload"},Z={class:"upload_input"},ee={class:"upload_image"},se=["src"],te={__name:"Upload",props:{value:{type:[String],default:""},type:{type:[String],default:"contain"}},emits:["update:value"],setup(d,{emit:h}){const{blobUrl:a}=K(),U=h,D=n=>{const o=n.target.files[0],l=a(o,"");U("update:value",l)},$=()=>U("update:value","");return(n,o)=>{const l=H("visible");return c(),r("div",Q,[g((c(),r("label",Z,[p(k(z)),t("input",{class:"hidden",onChange:D,type:"file",accept:"image/*"},null,32)])),[[l,!d.value]]),g((c(),r("div",ee,[t("img",{class:x(["size-full",d.type==="cover"?"object-cover":"object-contain"]),src:d.value},null,10,se),t("button",{class:"upload_remove",onClick:$},[p(k(z),{class:"rotate-45"})])])),[[l,d.value]])])}}},I=S(te,[["__scopeId","data-v-7bd1348d"]]),f=d=>(O("data-v-8a963028"),d=d(),R(),d),ne={class:"setting_wrap"},oe=f(()=>t("div",null,null,-1)),le=f(()=>t("div",{class:"setting_head"},[t("h2",{class:"setting_title"},"アイコン"),t("p",{class:"setting_desc"},"ゲーム内表示"),t("p",{class:"setting_desc highlight"},"★ = 主人公")],-1)),ae=f(()=>t("div",{class:"setting_head col-span-2"},[t("h2",{class:"setting_title"},"お名前"),t("p",{class:"setting_desc"},"EXCEL内表示")],-1)),ie=f(()=>t("div",{class:"setting_head"},[t("h2",{class:"setting_title"},"名札"),t("p",{class:"setting_desc"},"ゲーム内表示"),t("p",{class:"setting_desc"},"（画像のない場合はカタカナ表示になります）")],-1)),de=["draggable","onDragstart","onDragend"],ue={key:0,class:"setting_avatar setting_unknown"},_e={key:1,class:"setting_avatar"},ce=["onClick"],re={class:"setting_detail",draggable:"false"},ge=["onUpdate:modelValue","onFocus","onBlur"],pe={class:"setting_col"},ve=f(()=>t("p",{class:"ml-0.5"},"名前の色",-1)),me=["onUpdate:modelValue","onFocus","onBlur"],be=["onUpdate:modelValue"],fe={class:"setting_detail"},he=["onUpdate:modelValue","onFocus","onBlur"],ye={class:"setting_col"},Ue=f(()=>t("p",{class:"ml-0.5"},"名前の背景色",-1)),Ce=["onUpdate:modelValue","onFocus","onBlur"],De=["onUpdate:modelValue"],$e=f(()=>t("div",{class:"col-span-5 mb-4"},null,-1)),ke={__name:"Character",setup(d){const h=T(),{characterList:a,characterNew:U}=j(h),{dragMove:D,dropMove:$}=G(),n=B(()=>a.value.some(u=>u.is_hero)),o=B(()=>a.value.some(u=>u.dragging)),l=u=>{const i={...U.value},m=[...a.value].sort((e,b)=>b.id-e.id)[0];i.id=m?m.id+1:0,a.value.splice(u+1,0,i)},v=u=>a.value.splice(u,1),C=(u,i,m)=>{m&&D(u,{index:i}),a.value[i].dragging=m},_=(u,i)=>$(a.value,u.index,i);return(u,i)=>{const m=H("visible");return c(),r("div",ne,[p(P,{col:"col-span-5"},{default:M(()=>[oe,le,ae,ie]),_:1}),p(L,{class:"setting_dragline",onDrop:i[0]||(i[0]=e=>_(e,0)),dragging:o.value},null,8,["dragging"]),(c(!0),r(w,null,E(k(a),(e,b)=>(c(),r(w,{key:e.id},[t("div",{class:x(["setting_container",{dragging:e.dragging}]),draggable:e.is_drag,onDragstart:s=>C(s,b,!0),onDragend:s=>C(s,b,!1),onDrag:i[1]||(i[1]=V(()=>{},["prevent"])),onDrop:i[2]||(i[2]=V(()=>{},["prevent"]))},[p(A,{class:"row-span-2 -mr-6",hasDel:!e.unknown,onAdd:s=>l(b),onDel:s=>v(b)},null,8,["hasDel","onAdd","onDel"]),e.unknown?(c(),r("div",ue)):(c(),r("div",_e,[p(I,{class:"size-full",value:e.image_head,"onUpdate:value":s=>e.image_head=s,type:"cover"},null,8,["value","onUpdate:value"]),g((c(),r("button",{class:x(["setting_star",{"setting_star-active":e.is_hero}]),onClick:s=>e.is_hero=!e.is_hero},[p(k(J))],10,ce)),[[m,!(n.value&&!e.is_hero)]])])),t("div",re,[g(t("input",{class:"setting_name last","onUpdate:modelValue":s=>e.name=s,style:F({"--name-bg":e.name_bg,"--name-text":e.name_text}),onFocus:s=>e.is_drag=!1,onBlur:s=>e.is_drag=!0},null,44,ge),[[y,e.name,void 0,{lazy:!0,trim:!0}]]),t("div",pe,[ve,g(t("input",{class:"setting_input","onUpdate:modelValue":s=>e.name_text=s,onFocus:s=>e.is_drag=!1,onBlur:s=>e.is_drag=!0},null,40,me),[[y,e.name_text,void 0,{lazy:!0,trim:!0}]]),t("label",{class:"setting_color",style:F({"background-color":e.name_text})},[g(t("input",{class:"hidden","onUpdate:modelValue":s=>e.name_text=s,type:"color"},null,8,be),[[y,e.name_text,void 0,{lazy:!0}]])],4)])]),t("div",fe,[g(t("input",{class:"setting_name first","onUpdate:modelValue":s=>e.katakana=s,onFocus:s=>e.is_drag=!1,onBlur:s=>e.is_drag=!0},null,40,he),[[y,e.katakana,void 0,{lazy:!0,trim:!0}]]),t("div",ye,[Ue,g(t("input",{class:"setting_input","onUpdate:modelValue":s=>e.name_bg=s,onFocus:s=>e.is_drag=!1,onBlur:s=>e.is_drag=!0},null,40,Ce),[[y,e.name_bg,void 0,{lazy:!0,trim:!0}]]),t("label",{class:"setting_color",style:F({"background-color":e.name_bg})},[g(t("input",{class:"hidden","onUpdate:modelValue":s=>e.name_bg=s,type:"color"},null,8,De),[[y,e.name_bg,void 0,{lazy:!0}]])],4)])]),p(I,{class:"setting_nametag",value:e.image_name,"onUpdate:value":s=>e.image_name=s},null,8,["value","onUpdate:value"])],42,de),p(L,{class:"setting_dragline",onDrop:s=>_(s,b+1),dragging:o.value},null,8,["onDrop","dragging"])],64))),128)),$e])}}},Ve=S(ke,[["__scopeId","data-v-8a963028"]]);export{Ve as default};

import{_ as W,r as k,e as K,o as n,c as p,w as v,e9 as ne,a as s,n as _,t as l,ea as ee,d as ie,s as N,M as re,f as de,l as _e,g as Q,e5 as ue,i as pe,q as L,e6 as m,p as X,b as d,u as h,F as V,v as P,eb as U,e4 as F,e2 as he,e3 as ve}from"./index-VUegjHvX.js";import{I as ge}from"./round-close-C0ZQ_hA3.js";import{W as me}from"./Wrap-JFSKVSse.js";import{C as R,D as Y,u as fe}from"./useDrag-BEt6ATud.js";import{D as be,M as ye,E as De}from"./Dialog-DCSJvGtN.js";import{M as we}from"./Mark-Cw7mImTN.js";const ke=["disabled"],xe={class:"whitespace-nowrap"},Se={__name:"Checkbox",props:{value:{type:[Number],default:0},disabled:{type:[Boolean],default:!1},title:{type:[String],default:""},box:{type:[String],default:""}},emits:["update:value"],setup(i,{emit:D}){const x=i,A=D,g=k(0);return K(g,b=>A("update:value",b)),K(()=>x.value,b=>g.value=b,{immediate:!0}),(b,S)=>(n(),p("label",{class:_(["inline-flex items-center",i.disabled?"cursor-auto":"cursor-pointer"])},[v(s("input",{class:_(["checkbox",i.box]),"onUpdate:modelValue":S[0]||(S[0]=w=>g.value=w),disabled:i.disabled,"true-value":1,"false-value":0,type:"checkbox"},null,10,ke),[[ne,g.value]]),s("span",xe,l(i.title),1),ee(b.$slots,"default",{},void 0,!0)],2))}},Z=W(Se,[["__scopeId","data-v-b7a95cdd"]]),Ce={__name:"Switch",props:{active:{type:[Boolean],default:!1}},setup(i){return(D,x)=>(n(),p("button",{class:_(["switch",{"bg-current":i.active}])},[s("span",{class:_(["-mt-0.1em",{"text-white":i.active}])},[ee(D.$slots,"default",{},void 0,!0)],2)],2))}},$=W(Ce,[["__scopeId","data-v-8bd1e4e9"]]),f=i=>(he("data-v-c9c3fcad"),i=i(),ve(),i),Ie={class:"side_list"},Me={class:"flex"},Le=["onClick","title"],Ue={class:"chapter_head"},$e={class:"mr-9 grid xl:mr-0"},Ae=["title"],Be={class:"chapter_log"},Ee={class:"chapter_log_tr -lock"},Te={class:"mx-2 w-12 self-center"},Ne=f(()=>s("div",{class:"chapter_log_th xl:ml-0"},"セリフ＆切り替え＆演出",-1)),Ve=f(()=>s("div",{class:"ml-3 w-7 shrink-0 xl:hidden"},null,-1)),Pe=f(()=>s("div",{class:"chapter_log_tr_2 -lock"},[s("div",{class:"chapter_log_th -col"},"話し手．主人公差分＆エフェクト"),s("div",{class:"chapter_log_th -col"},"脇役．差分＆エフェクト"),s("div",{class:"chapter_log_th -col"},"SE＆ボイス"),s("div",{class:"chapter_log_th -col"},"備考")],-1)),Fe={key:0,class:"contents"},Re=["draggable","onDragstart","onDragend"],We={class:"chapter_log_scene"},qe=f(()=>s("div",{class:"chapter_log_switches xl:hidden"},null,-1)),ze={class:"chapter_log_tr_2"},Ge=f(()=>s("div",{class:"chapter_log_td -col"},null,-1)),Oe=f(()=>s("div",{class:"chapter_log_td -col"},null,-1)),je=f(()=>s("div",{class:"chapter_log_td -col"},null,-1)),He={class:"chapter_log_td -col"},Je={class:"-inner"},Ke={key:1,class:"contents"},Qe=["draggable","onDragstart","onDragend"],Xe={class:"chapter_log_avatar"},Ye=["src"],Ze={class:"chapter_log_comment"},es={class:"chapter_log_switches"},ss={class:"chapter_log_tr_2"},ts={class:"chapter_log_td -col"},as={key:0,class:"-inner col-span-2"},os={key:1,class:"-inner col-span-2"},ls={class:"-inner"},cs={class:"-inner"},ns={class:"chapter_log_td -col"},is={class:"-inner col-span-2"},rs={class:"-inner"},ds={class:"-inner"},_s={class:"chapter_log_td -col"},us={class:"-inner"},ps={class:"-inner"},hs={class:"chapter_log_td -col"},vs={class:"-inner"},gs={__name:"Chapters",setup(i){const D=ie();N(D);const x=re(),{characterList:A}=N(x),g=de(),{newChapter:b,dialogType:S}=g,{chapterIndex:w,chapterNames:se,chapterTitle:q,chapterData:u}=N(g),{findData:z,findIndex:te}=_e(),{dragMove:ae,dropMove:oe}=fe(),B=o=>z(A.value,o.人物,"name")??{},G=Q(()=>u.value.some(o=>o.dragging)),E=Q(()=>u.value.filter(o=>o.is_selected).map(o=>o.id)),C=(o,t,r)=>{r&&ae(o,{index:t}),E.value.some(c=>u.value[t].id===c)||(u.value[t].is_selected=1),E.value.forEach(c=>{const a=z(u.value,c);a.dragging=r,r||(a.is_selected=0)})},O=(o,t)=>{E.value.forEach(r=>{const e=te(u.value,r);oe(u.value,e,t)})},j=k(!1),I=k(0),H=k(null),M=(o,t)=>{I.value=t,H.value=o,j.value=t===null},le=({type:o})=>{const t=I.value,r=u.value[t];o==="delete"?r.is_delete=!0:o==="edit"?J(r.id,{}):J("add",{type:o})},T=k(!1),y=ue({id:0,type:"",index:0}),J=(o,{type:t})=>{y.id=o,y.type=t??"",y.index=I.value,T.value=!0},ce=o=>{const t=I.value===null?u.value.length:y.index+1;u.value.splice(t,0,o)};return(o,t)=>{const r=pe("visible");return n(),L(me,null,{side:m(()=>[s("ul",Ie,[(n(!0),p(V,null,X(h(se),(e,c)=>(n(),p("li",Me,[d(we,{class:"mt-0.6em bg-current/10",active:c===h(w)},null,8,["active"]),s("button",{class:_(["side_item",{"side_item-active":c===h(w)}]),onClick:a=>w.value=c,title:e},l(e),11,Le)]))),256))])]),main_head:m(()=>[s("header",Ue,[s("div",$e,[s("h1",{class:"chapter_head_title",title:h(q)},l(h(q)),9,Ae)])])]),default:m(()=>[s("div",Be,[s("div",Ee,[s("div",Te,[d($,{class:"relative text-primary bg-primary/25"},{default:m(()=>[d(h(ge),{class:"mt-0.1em"}),d(R,{class:"absolute left-0 top-0 opacity-0",onMore:t[0]||(t[0]=e=>M(e,null)),hasDel:!1,hasAdd:!1})]),_:1})]),Ne,Ve]),Pe,d(Y,{class:"chapter_log_dragline",onDrop:t[1]||(t[1]=e=>O(e,0)),dragging:G.value},null,8,["dragging"]),(n(!0),p(V,null,X(h(u),(e,c)=>(n(),p(V,{key:e.id},[e.is_showtime?v((n(),p("section",Fe,[s("div",{class:_(["chapter_log_tr",{"-dragging":e.dragging}]),draggable:e.is_drag,onDragstart:a=>C(a,c,!0),onDragend:a=>C(a,c,!1),onDrag:t[2]||(t[2]=U(()=>{},["prevent"])),onDrop:t[3]||(t[3]=U(()=>{},["prevent"]))},[s("div",{class:_(["chapter_log_td -first",{"bg-secondary/60":e.is_selected}])},[d(Z,{class:"chapter_log_check",value:e.is_selected,"onUpdate:value":a=>e.is_selected=a},null,8,["value","onUpdate:value"]),d(R,{class:"chapter_log_control",onMore:a=>M(a,c),hasDel:!1,hasAdd:!1},null,8,["onMore"]),s("div",We,[s("span",null,l(e.人物),1),s("span",null,l(e.show_time),1),s("span",null,l(e.show_name),1)])],2),qe],42,Re),s("div",ze,[Ge,Oe,je,s("div",He,[s("div",Je,l(e.備註),1)])])],512)),[[P,!e.is_delete]]):v((n(),p("section",Ke,[s("div",{class:_(["chapter_log_tr",{"-dragging":e.dragging}]),draggable:e.is_drag,onDragstart:a=>C(a,c,!0),onDragend:a=>C(a,c,!1),onDrag:t[4]||(t[4]=U(()=>{},["prevent"])),onDrop:t[5]||(t[5]=U(()=>{},["prevent"]))},[s("div",{class:_(["chapter_log_td -first",{"bg-secondary/60":e.is_selected}])},[d(Z,{class:"chapter_log_check",value:e.is_selected,"onUpdate:value":a=>e.is_selected=a},null,8,["value","onUpdate:value"]),d(R,{class:"chapter_log_control",onMore:a=>M(a,c),onDel:a=>e.is_delete=!0,hasDel:!1,hasAdd:!1},null,8,["onMore","onDel"]),s("div",{class:_(["chapter_log_info",{"flex-row-reverse":B(e).is_hero,"-replay":e.is_replay}])},[v((n(),p("div",Xe,[s("img",{src:B(e).image_head},null,8,Ye)])),[[r,B(e).image_head]]),s("div",Ze,[d(be,{class:"chapter_log_dialog",value:e.和訳,type:h(S)(e)},null,8,["value","type"])])],2)],2),s("div",es,[v((n(),L($,{class:_(["chapter_log_switch",{"text-replay":e.is_replay}]),active:e.is_replay,title:"再放送"},{default:m(()=>[F("R")]),_:2},1032,["active","class"])),[[r,e.is_replay]]),v((n(),L($,{class:_(["chapter_log_switch",{"text-unknown":e.is_unknown}]),active:e.is_unknown,title:"未紹介"},{default:m(()=>[F("U")]),_:2},1032,["active","class"])),[[r,e.is_unknown]]),v((n(),L($,{class:_(["chapter_log_switch",{"-monolog":e.is_monolog}]),active:e.is_monolog,title:"独り言"},{default:m(()=>[F("S")]),_:2},1032,["active","class"])),[[r,e.is_monolog]])])],42,Qe),s("div",ss,[s("div",ts,[e.is_announce||e.is_system?(n(),p("div",as,l(e.人物),1)):(n(),p("div",os,l(e.人物),1)),s("div",ls,l(e.十六夜差分),1),s("div",cs,l(e.主角特效),1)]),s("div",ns,[s("div",is,l(e.顯示角色),1),s("div",rs,l(e.角色差分),1),s("div",ds,l(e.差分特效),1)]),s("div",_s,[s("div",us,l(e.SE),1),s("div",ps,l(e.Voice),1)]),s("div",hs,[s("div",vs,l(e.備註),1)])])],512)),[[P,!e.is_delete]]),v(d(Y,{class:"chapter_log_dragline",onDrop:a=>O(a,c+1),dragging:G.value},null,8,["onDrop","dragging"]),[[P,!e.is_delete]])],64))),128))]),d(ye,{positions:H.value,onClear:M,onUse:le,onlyAdd:j.value},null,8,["positions","onlyAdd"]),d(De,{open:T.value,"onUpdate:open":t[6]||(t[6]=e=>T.value=e),id:y.id,type:y.type,onAdd:ce},null,8,["open","id","type"])]),_:1})}}},ks=W(gs,[["__scopeId","data-v-c9c3fcad"]]);export{ks as default};

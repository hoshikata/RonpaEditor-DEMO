import{o as S,c as T,a as t,_ as G,J as Oe,n as H,K as je,j as he,s as A,u as _e,b as ve,y as ke,h as P,C as Me,r as se,L as He,i as ge,q as Ue,w as V,d as e,e as n,t as _,v as K,z as D,F as le,m as $e,M as Ce,N as xe,p as Y,A as Se,B as Pe,O as Ne,g as Re,E as Le,I as Fe,H as We}from"./index-eIGxLf3c.js";import{I as ze,a as qe,D as Ee}from"./IconDelete-ahUW3wKb.js";import{W as Je}from"./Wrap-DLWhn6G0.js";import{C as Ie}from"./Control-BVJxsfPr.js";import{C as Ve,I as Ke,u as Ge,M as Qe,E as Xe}from"./EditPopup-DZrRNkTC.js";import{M as Ye}from"./Mark-Bmy4sj4o.js";import{R as Ze,_ as ye}from"./Radio-DtjTzcyk.js";import{S as X,D as et}from"./Dialog-DRo44WDt.js";import{A as tt}from"./Avatar-DUBI21EC.js";import"./round-drag-indicator-Ba7y6txE.js";/* empty css                                                             */import"./Image-CuG59N70.js";const st={viewBox:"0 0 24 24",width:"1.2em",height:"1.2em"},ot=t("path",{fill:"currentColor",d:"M18.3 5.71a.996.996 0 0 0-1.41 0L12 10.59L7.11 5.7A.996.996 0 1 0 5.7 7.11L10.59 12L5.7 16.89a.996.996 0 1 0 1.41 1.41L12 13.41l4.89 4.89a.996.996 0 1 0 1.41-1.41L13.41 12l4.89-4.89c.38-.38.38-1.02 0-1.4"},null,-1),at=[ot];function lt(s,w){return S(),T("svg",st,[...at])}const nt={name:"ic-round-close",render:lt},it={__name:"Switch",props:{active:{type:[Boolean],default:!1}},setup(s){return(w,g)=>(S(),T("button",{class:H(["switch",{"bg-current":s.active}])},[t("span",{class:H(["-mt-0.1em",{"text-white":s.active}])},[Oe(w.$slots,"default",{},void 0,!0)],2)],2))}},de=G(it,[["__scopeId","data-v-8bd1e4e9"]]),ct={viewBox:"0 0 24 24",width:"1.2em",height:"1.2em"},rt=t("path",{fill:"currentColor",d:"M15.5 14h-.79l-.28-.27a6.5 6.5 0 0 0 1.48-5.34c-.47-2.78-2.79-5-5.59-5.34a6.505 6.505 0 0 0-7.27 7.27c.34 2.8 2.56 5.12 5.34 5.59a6.5 6.5 0 0 0 5.34-1.48l.27.28v.79l4.25 4.25c.41.41 1.08.41 1.49 0c.41-.41.41-1.08 0-1.49zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5S14 7.01 14 9.5S11.99 14 9.5 14"},null,-1),ut=[rt];function dt(s,w){return S(),T("svg",ct,[...ut])}const pe={name:"ic-round-search",render:dt},pt={name:"MaterialSymbolsFindReplaceRounded"},ht={xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",viewBox:"0 0 24 24"},_t=t("path",{fill:"currentColor",d:"M11 6q-1.575 0-2.838.863T6.35 9.125q-.15.375-.487.563t-.738.112t-.638-.387t-.112-.663q.675-2.1 2.475-3.425T11 4q1.475 0 2.763.562T16 6.1V5q0-.425.288-.712T17 4t.713.288T18 5v4q0 .425-.288.713T17 10h-4q-.425 0-.712-.288T12 9t.288-.712T13 8h2q-.725-.9-1.737-1.45T11 6m0 12q-1.475 0-2.762-.562T6 15.9V17q0 .425-.288.713T5 18t-.712-.288T4 17v-4q0-.425.288-.712T5 12h4q.425 0 .713.288T10 13t-.288.713T9 14H7q.725.9 1.738 1.45T11 16q1.55 0 2.788-.825T15.6 13q.175-.4.513-.638t.762-.162q.425.1.625.45t.075.75q-.175.5-.413.938t-.562.862l3.7 3.7q.275.275.275.7t-.275.7t-.7.275t-.7-.275l-3.7-3.7q-.9.675-1.962 1.038T11 18"},null,-1),vt=[_t];function gt(s,w,g,$,R,L){return S(),T("svg",ht,vt)}const be=G(pt,[["render",gt]]),Te=je("search",()=>{const s=he(),{initSelected:w}=s,{chapterData:g}=A(s),$=_e(),{getCharacter:R,getSprite:L}=$,{characterList:B}=A($),k=ve(),{getShowList:C}=k,{effectList:W,seList:J}=A(k),{copyObject:m,findData:f}=ke(),y=P(()=>{let o=g.value;const{type:a,result:h}=l.value;return a===0&&(o=ne(h)),a===1&&(o=te(h)),a===2&&(o=ue(h)),o}),i=P(()=>y.value.map(o=>o.id)),O=Me({type:0,keyword:{value:"",rep:""},show:{parent:"",child:"",rep:""},items:[{parent:"",child:""}],itemsRep:{parent:"",child:"",rep:""},open:!1}),l=se({}),oe=P(()=>{const o=[];return B.value.forEach(a=>{const h=(a.sprite??[]).map(v=>({id:a.id+"_"+v.id,name:a.name+"："+v.name}));o.push(...h)}),o}),Q=o=>{let a=[];const h=["speaker","char_1","char_2"].includes(o),v=["char_1_sprite","char_2_sprite"].includes(o),b=["char_1_effect","char_2_effect"].includes(o);return h&&(a=B.value),v&&(a=oe.value),b&&(a=W.value),o==="se"&&(a=J.value),a},Z=()=>{O.keyword={value:"",rep:""},O.show={parent:"",child:"",rep:""},O.items=[{parent:"",child:""}],O.itemsRep={parent:"",child:"",value:""},O.type=0,ee()},ae=()=>{const{type:o,keyword:a,show:h,items:v,itemsRep:b}=O;let x={};return o===0&&(x={result:a.value,rep:a.rep}),o===1&&(x={result:m(h),rep:h.rep}),o===2&&(x={result:m(v),rep:m(b)}),{type:o,...x}},ee=()=>{l.value=ae(),w(g.value),O.open=!1},q=()=>{const o=ae();o.value=o;const{type:a,result:h,rep:v}=o;a===0&&me(h,v),a===1&&fe(h,v),a===2&&ie(h,v),w(g.value),Z(),O.open=!1};He(ee);const j=(o,a)=>{const h=C(o)??[],v=f(h,a);return h.length?a!==""&&!v:a!==""},d=(o,a)=>{const h=Q(o)??[],v=f(h,a);return h.length?a!==""&&!v:a!==""},z=(o,a)=>{const h={char_1_sprite:"char_1",char_2_sprite:"char_2"},v=o[h[a]],b=o[a],x=R(v).sprite??[],M=L(v,b),p=x.length?b!==""&&M.id===void 0:b!=="";return{name:h[a],group:v,value:b,isErr:p}},r=o=>o.some(a=>!(a.parent===""&&a.child==="")),N=o=>{let[a,h]=o.split("_");return[a*1,h*1]},E=(o,a,h,v)=>o===""?a:o==="err"?h:v,ne=o=>(o=o??"",o===""?g.value:g.value.filter(a=>a.content.match(o))),te=({parent:o,child:a})=>o===""&&a===""?g.value:g.value.filter(h=>{const{is_showtime:v,show_time:b,show_name:x}=h;if(!v||!(o===""?!0:b===o))return!1;const p=j(b,x);return E(a,!0,p,x===a)}),ue=o=>r(o)?g.value.filter(h=>h.is_showtime?!1:o.every(v=>{const{parent:b,child:x}=v;if(["char_1_sprite","char_2_sprite"].includes(b)){const[p,u]=N(x),{group:c,value:U,isErr:I}=z(h,b);return E(x,U!=="",I,c===p&&U===u)}else{const p=h[b],u=d(b,p);return E(x,p!=="",u,p===x)}})):g.value,me=(o,a)=>{o=o??"",o!==""&&i.value.forEach(h=>{const v=f(g.value,h);v.content=v.content.replace(o,a)})},fe=({parent:o,child:a},h)=>{if(o===""&&a==="")return g.value;i.value.forEach(v=>{const b=f(g.value,v),{is_showtime:x,show_time:M,show_name:p}=b;if(!x)return;const u=j(M,p);E(a,!0,u,M===o&&p===a)&&(b.show_name=h)})},ie=(o,{parent:a,child:h,rep:v})=>{r(o)&&i.value.forEach(x=>{const M=f(g.value,x);if(M.is_showtime)return;if(["char_1_sprite","char_2_sprite"].includes(a)){const[u,c]=N(h),[U,I]=N(v),{name:we,group:ce,value:re,isErr:Ae}=z(M,a);E(h,re!=="",Ae,ce===u&&re===c)&&(M[we]=U,M[a]=I)}else{const u=M[a],c=d(a,u);E(h,u!=="",c,u===h)&&(M[a]=v)}})};return{chapterFilter:y,search:O,searchResult:l,getSpriteEmpty:r,getChildOptions:Q,initSearch:Z,submitSearch:ee,submitReplace:q,keywordSearch:ne,showSearch:te,itemsSearch:ue}}),Be=s=>(Ce("data-v-444f8fc8"),s=s(),xe(),s),mt={class:"popup_window"},ft={class:"popup_container scrollbar"},wt={class:"mb-8 flex justify-center"},St={class:"popup_keyword_group"},bt=Be(()=>t("span",null,null,-1)),$t=["disabled","title"],yt=["disabled","title"],kt={class:"popup_show_group"},Ct=Be(()=>t("span",null,null,-1)),xt={value:""},It={value:""},Tt={class:"-error",value:"err"},Rt=["disabled","title"],Lt={value:""},qt={class:"-error",value:"err"},Et={class:"col-span-2"},Dt=["disabled","title"],Mt={class:"contents"},Ut={class:"popup_items_group"},Vt={class:"popup_search_group"},Bt=["title"],At={value:""},Ot={value:""},jt=["onClick","title"],Ht={class:"popup_search"},Pt=["disabled","title"],Nt={class:"popup_replace"},Ft={value:""},Wt={value:""},zt={value:""},Jt=["disabled","title"],Kt={class:"popup_footer"},Gt=["title"],Qt={__name:"Search",emits:["goTop"],setup(s,{emit:w}){const g=_e();A(g);const $=ve(),{getEffect:R,getSe:L,getVoice:B,getShowList:k}=$;A($);const C=Te(),{getSpriteEmpty:W,getChildOptions:J,initSearch:m,submitSearch:f,submitReplace:y}=C,{search:i,chapterFilter:O}=A(C),{t:l}=ge("lang"),oe=P(()=>W(i.value.items)),Q=P(()=>[{id:"ui",title:l("showtime.ui")},{id:"bg",title:l("showtime.bg")},{id:"bgm",title:l("showtime.bgm")},{id:"cg",title:l("showtime.cg")},{id:"black",title:l("showtime.black")}]),Z=P(()=>[{id:"speaker",title:l("data.speaker")},{id:"char_1",title:l("data.char_1")},{id:"char_1_sprite",title:l("data.char_1_sprite")},{id:"char_1_effect",title:l("data.char_1_effect")},{id:"char_2",title:l("data.char_2")},{id:"char_2_sprite",title:l("data.char_2_sprite")},{id:"char_2_effect",title:l("data.char_2_effect")},{id:"se",title:l("data.se")},{id:"voice",title:l("data.voice")}]),ae=()=>i.value.items.push({parent:"",child:""}),ee=j=>i.value.items.splice(j,1),q=j=>{const d=j.target.matches(".popup_window, .popup_window *"),z=j.target.matches(".popup_close");!j.target.matches(".popup_remove")&&(!d||z)&&(i.value.open=!1)};return(j,d)=>{const z=Ue("visible");return V((S(),T("section",{class:"popup",onClick:q},[t("div",mt,[t("div",ft,[t("div",wt,[n(Ze,{class:"popup_radio",value:e(i).type,"onUpdate:value":d[0]||(d[0]=r=>e(i).type=r),list:[{id:0,title:e(l)("edit.serif")},{id:1,title:e(l)("showtime.scene")+"＆"+e(l)("showtime.perform")},{id:2,title:e(l)("search.item")}],name:"type"},null,8,["value","list"])]),V(t("div",St,[bt,n(ye,{class:"popup_input col-span-2",value:e(i).keyword.value,"onUpdate:value":d[1]||(d[1]=r=>e(i).keyword.value=r),placeholder:e(l)("search.keyword")},null,8,["value","placeholder"]),t("button",{class:"popup_submit",onClick:d[2]||(d[2]=(...r)=>e(f)&&e(f)(...r)),disabled:e(i).keyword.value==="",title:e(l)("search.search")},[n(e(pe))],8,$t),t("span",null,_(e(l)("search.replace-from")),1),n(ye,{class:"popup_input",value:e(i).keyword.rep,"onUpdate:value":d[3]||(d[3]=r=>e(i).keyword.rep=r)},null,8,["value"]),t("span",null,_(e(l)("search.replace-to")),1),t("button",{class:"popup_submit",onClick:d[4]||(d[4]=(...r)=>e(y)&&e(y)(...r)),disabled:e(i).keyword.value==="",title:e(l)("search.replace")},[n(be,{class:"text-[1.2em]"})],8,yt)],512),[[K,e(i).type===0]]),V(t("div",kt,[Ct,n(X,{class:"popup_select",value:e(i).show.parent,"onUpdate:value":d[5]||(d[5]=r=>e(i).show.parent=r),options:Q.value,onChange:d[6]||(d[6]=r=>{e(i).show.child="",e(i).show.rep=""})},{default:D(()=>[t("option",xt,_(e(l)("search.all")),1)]),_:1},8,["value","options"]),t("span",null,_(e(l)("search.is")),1),n(X,{class:"popup_select",value:e(i).show.child,"onUpdate:value":d[7]||(d[7]=r=>e(i).show.child=r),options:e(k)(e(i).show.parent)},{default:D(()=>[t("option",It,_(e(l)("search.all")),1),t("option",Tt,_(e(l)("search.err")),1)]),_:1},8,["value","options"]),t("button",{class:"popup_submit",onClick:d[8]||(d[8]=(...r)=>e(f)&&e(f)(...r)),disabled:e(i).show.parent===""&&e(i).show.child==="",title:e(l)("search.search")},[n(e(pe))],8,Rt),t("span",null,_(e(l)("search.replace-from")),1),n(X,{class:"popup_select",value:e(i).show.rep,"onUpdate:value":d[9]||(d[9]=r=>e(i).show.rep=r),options:e(k)(e(i).show.parent)},{default:D(()=>[t("option",Lt,_(e(l)("search.all")),1),t("option",qt,_(e(l)("search.err")),1)]),_:1},8,["value","options"]),t("span",Et,_(e(l)("search.replace-to")),1),t("button",{class:"popup_submit",onClick:d[10]||(d[10]=(...r)=>e(y)&&e(y)(...r)),disabled:e(i).show.rep==="",title:e(l)("search.replace")},[n(be,{class:"text-[1.2em]"})],8,Dt)],512),[[K,e(i).type===1]]),V(t("div",Mt,[t("div",Ut,[(S(!0),T(le,null,$e(e(i).items,(r,N)=>(S(),T("div",Vt,[V(t("button",{class:"popup_submit",onClick:ae,title:e(l)("search.add")},_(e(l)("search.add")),9,Bt),[[K,!N]]),V(t("span",{class:"text-right"},_(e(l)("search.and")),513),[[K,N]]),n(X,{class:"popup_select",value:r.parent,"onUpdate:value":E=>r.parent=E,options:Z.value,onChange:E=>r.child=""},{default:D(()=>[t("option",At,_(e(l)("search.all")),1)]),_:2},1032,["value","onUpdate:value","options","onChange"]),t("span",null,_(e(l)("search.is")),1),n(X,{class:"popup_select",value:r.child,"onUpdate:value":E=>r.child=E,options:e(J)(r.parent)},{default:D(()=>[t("option",Ot,_(e(l)("search.all")),1),V(t("option",{class:"-error",value:"err"},_(e(l)("search.err")),513),[[K,r.parent!==""]])]),_:2},1032,["value","onUpdate:value","options"]),V((S(),T("button",{class:"popup_remove",onClick:E=>ee(N),title:e(l)("button.del")},[n(e(nt))],8,jt)),[[z,N]])]))),256)),t("div",Ht,[t("button",{class:"popup_submit",onClick:d[11]||(d[11]=(...r)=>e(f)&&e(f)(...r)),disabled:!oe.value,title:e(l)("search.search")},[n(e(pe))],8,Pt)])]),t("div",Nt,[n(X,{class:"popup_select",value:e(i).itemsRep.parent,"onUpdate:value":d[12]||(d[12]=r=>e(i).itemsRep.parent=r),options:Z.value,onChange:d[13]||(d[13]=r=>{e(i).itemsRep.child="",e(i).itemsRep.rep=""})},{default:D(()=>[t("option",Ft,_(e(l)("search.all")),1)]),_:1},8,["value","options"]),t("span",null,_(e(l)("search.is")),1),n(X,{class:"popup_select",value:e(i).itemsRep.child,"onUpdate:value":d[14]||(d[14]=r=>e(i).itemsRep.child=r),options:e(J)(e(i).itemsRep.parent)},{default:D(()=>[t("option",Wt,_(e(l)("search.all")),1),V(t("option",{class:"-error",value:"err"},_(e(l)("search.err")),513),[[K,e(i).itemsRep.parent!==""]])]),_:1},8,["value","options"]),t("span",null,_(e(l)("search.replace-from")),1),n(X,{class:"popup_select",value:e(i).itemsRep.rep,"onUpdate:value":d[15]||(d[15]=r=>e(i).itemsRep.rep=r),options:e(J)(e(i).itemsRep.parent)},{default:D(()=>[t("option",zt,_(e(l)("edit.name")),1)]),_:1},8,["value","options"]),t("span",null,_(e(l)("search.replace-to")),1),t("button",{class:"popup_submit",onClick:d[16]||(d[16]=(...r)=>e(y)&&e(y)(...r)),disabled:e(i).itemsRep.parent===""&&e(i).itemsRep.child===""||e(i).itemsRep.rep==="",title:e(l)("search.replace")},[n(be,{class:"text-[1.2em]"})],8,Jt)])],512),[[K,e(i).type===2]])]),t("footer",Kt,[t("button",{class:"popup_submit -cancel",onClick:d[17]||(d[17]=(...r)=>e(m)&&e(m)(...r)),title:e(l)("search.cancel")},_(e(l)("search.cancel")),9,Gt)])])])),[[z,e(i).open]])}}},Xt=G(Qt,[["__scopeId","data-v-444f8fc8"]]),Yt={name:"MaterialSymbolsArrowWarmUpRounded"},Zt={xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",viewBox:"0 0 24 24"},es=t("path",{fill:"currentColor",d:"M12 13q-.425 0-.712-.288T11 12V5.825L7.1 9.7q-.275.275-.687.288T5.7 9.7q-.275-.275-.275-.7t.275-.7l5.6-5.6q.15-.15.325-.212T12 2.425t.375.063t.325.212l5.6 5.6q.275.275.275.688T18.3 9.7q-.3.3-.712.3t-.713-.3L13 5.825V12q0 .425-.288.713T12 13m0 5q-.425 0-.712-.288T11 17v-1q0-.425.288-.712T12 15t.713.288T13 16v1q0 .425-.288.713T12 18m0 4q-.425 0-.712-.288T11 21t.288-.712T12 20t.713.288T13 21t-.288.713T12 22"},null,-1),ts=[es];function ss(s,w,g,$,R,L){return S(),T("svg",Zt,ts)}const De=G(Yt,[["render",ss]]),os={class:"chapter_head"},as=["disabled"],ls=["disabled"],ns={__name:"Head",setup(s){const w=he(),{deleteChapter:g,moveChapter:$}=w,{chapterIndex:R,chapterLength:L,chapterTarget:B,chapterData:k}=A(w),C=Te(),{search:W,searchResult:J}=A(C);return(m,f)=>(S(),T("header",os,[n(ye,{class:"chapter_head_title",value:e(B).title,"onUpdate:value":f[0]||(f[0]=y=>e(B).title=y),placeholder:"タイトル"},null,8,["value"]),t("button",{class:H(["chapter_head_button",{"-active":e(J).result}]),onClick:f[1]||(f[1]=y=>e(W).open=!0),title:"サーチ"},[n(e(pe),{class:"!text-xl"})],2),t("button",{class:"chapter_head_button",onClick:f[2]||(f[2]=y=>e($)(-1)),disabled:!e(R),title:"上に移動"},[n(De)],8,as),t("button",{class:"chapter_head_button",onClick:f[3]||(f[3]=y=>e($)(1)),disabled:!e(L)||e(R)===e(L)-1,title:"下に移動"},[n(De,{class:"-scale-y-100"})],8,ls),t("button",{class:"chapter_head_button",onClick:f[4]||(f[4]=(...y)=>e(g)&&e(g)(...y)),title:"削除"},[n(ze)])]))}},is=G(ns,[["__scopeId","data-v-23626d87"]]),cs={__name:"Inner",props:{value:{type:[Number,String],default:void 0},list:{type:[Array,Boolean],default:!1},type:{type:[String],default:""}},setup(s){const w=s,{findData:g}=ke(),$=P(()=>g(w.list||[],w.value)),R=P(()=>w.list===!1?!1:w.value!==""&&!$.value),L=P(()=>({"-showtime":w.type==="showtime","!bg-red-500/50":R.value}));return(B,k)=>{var C;return S(),T("div",{class:H(["inner",L.value])},_(((C=$.value)==null?void 0:C.name)??s.value),3)}}},F=G(cs,[["__scopeId","data-v-8cdb2df2"]]),rs=s=>(Ce("data-v-569f67ca"),s=s(),xe(),s),us={class:"chapter log_scene"},ds=rs(()=>t("div",{class:"chapter log_switches xl:!hidden"},null,-1)),ps={__name:"logShowHead",props:{log:{type:[Object],default:()=>({})}},emits:["more"],setup(s,{emit:w}){const g=w,$=ve(),{getShowList:R}=$,{t:L}=ge("lang");return(B,k)=>(S(),T(le,null,[t("div",{class:H(["chapter log_td -first",{"bg-secondary/60":s.log.is_selected}])},[n(Ve,{class:"chapter log_check",value:s.log.is_selected,"onUpdate:value":k[0]||(k[0]=C=>s.log.is_selected=C)},null,8,["value"]),n(Ie,{class:"chapter log_control",onMore:k[1]||(k[1]=C=>g("more",C)),hasDel:!1,hasAdd:!1}),t("div",us,[t("span",null,_(e(L)(`showtime.${s.log.speaker}`)),1),t("span",null,_(e(L)(`showtime.${s.log.show_time}`)??s.log.show_time),1),n(F,{value:s.log.show_name,list:e(R)(s.log.show_time),type:"showtime"},null,8,["value","list"])])],2),ds],64))}},hs=G(ps,[["__scopeId","data-v-569f67ca"]]),_s={class:"chapter log_tr_2"},vs=t("div",{class:"chapter log_td -col"},null,-1),gs=t("div",{class:"chapter log_td -col"},null,-1),ms=t("div",{class:"chapter log_td -col"},null,-1),fs={class:"chapter log_td -col"},ws={__name:"logShowBody",props:{log:{type:[Object],default:()=>({})}},setup(s){return(w,g)=>(S(),T("div",_s,[vs,gs,ms,t("div",fs,[n(F,{value:s.log.remark},null,8,["value"])])]))}},Ss=["title"],bs={class:"chapter log_comment"},$s={class:"chapter log_switches"},ys={__name:"logCommentHead",props:{log:{type:[Object],default:()=>({})}},emits:["more","target"],setup(s,{emit:w}){const g=s,$=w,R=_e(),{getCharacter:L}=R,B=he(),{dialogType:k}=B,{t:C}=ge("lang"),W=P(()=>L(g.log.speaker));return(J,m)=>{const f=Ue("visible");return S(),T(le,null,[t("div",{class:H(["chapter log_td -first",{"bg-secondary/60":s.log.is_selected}])},[n(Ve,{class:"chapter log_check",value:s.log.is_selected,"onUpdate:value":m[0]||(m[0]=y=>s.log.is_selected=y)},null,8,["value"]),n(Ie,{class:"chapter log_control",onMore:m[2]||(m[2]=y=>$("more",y)),onDel:m[3]||(m[3]=y=>s.log.is_delete=!0),hasAdd:!1},{top:D(()=>[t("button",{class:"control_button",onClick:m[1]||(m[1]=y=>$("target")),title:e(C)("button.target-chapter")},[n(Ke,{class:"text-xl"})],8,Ss)]),_:1}),t("div",{class:H(["chapter log_info",{"flex-row-reverse":W.value.is_hero,"-replay":s.log.is_replay}])},[n(tt,{class:"chapter log_avatar",name:W.value.name??s.log.speaker},null,8,["name"]),t("div",bs,[n(et,{class:"chapter log_dialog",value:s.log.content,type:e(k)(s.log)},null,8,["value","type"])])],2)],2),t("div",$s,[V((S(),Y(de,{class:H(["chapter log_switch",{"text-replay":s.log.is_replay}]),active:s.log.is_replay,title:e(C)("data.replay")},{default:D(()=>[Se("R")]),_:1},8,["active","class","title"])),[[f,s.log.is_replay]]),V((S(),Y(de,{class:H(["chapter log_switch",{"text-unknown":s.log.is_unknown}]),active:s.log.is_unknown,title:e(C)("data.unknown")},{default:D(()=>[Se("U")]),_:1},8,["active","class","title"])),[[f,s.log.is_unknown]]),V((S(),Y(de,{class:H(["chapter log_switch",{"-monolog":s.log.is_monolog}]),active:s.log.is_monolog,title:e(C)("data.monolog")},{default:D(()=>[Se("S")]),_:1},8,["active","class","title"])),[[f,s.log.is_monolog]])])],64)}}},ks=G(ys,[["__scopeId","data-v-620df50d"]]),Cs={class:"chapter log_tr_2"},xs={class:"chapter log_td -col"},Is={class:"chapter log_td -col"},Ts={class:"chapter log_td -col"},Rs={class:"chapter log_td -col"},Ls={__name:"logCommentBody",props:{log:{type:[Object],default:()=>({})}},setup(s){const w=_e(),{getCharacter:g}=w,{characterList:$}=A(w),R=ve(),{effectList:L,seList:B,voiceList:k}=A(R);return(C,W)=>(S(),T("div",Cs,[t("div",xs,[n(F,{class:"col-span-2",value:s.log.char_1,list:e($)},null,8,["value","list"]),n(F,{value:s.log.char_1_sprite,list:e(g)(s.log.char_1).sprite},null,8,["value","list"]),n(F,{value:s.log.char_1_effect,list:e(L)},null,8,["value","list"])]),t("div",Is,[n(F,{class:"col-span-2",value:s.log.char_2,list:e($)},null,8,["value","list"]),n(F,{value:s.log.char_2_sprite,list:e(g)(s.log.char_2).sprite},null,8,["value","list"]),n(F,{value:s.log.char_2_effect,list:e(L)},null,8,["value","list"])]),t("div",Ts,[n(F,{value:s.log.se,list:e(B)},null,8,["value","list"]),n(F,{value:s.log.voice,list:e(k)},null,8,["value","list"])]),t("div",Rs,[n(F,{value:s.log.remark},null,8,["value"])])]))}},qs=s=>(Ce("data-v-fd28e26d"),s=s(),xe(),s),Es=["title"],Ds={class:"side_list"},Ms={class:"flex"},Us=["onClick","title"],Vs={class:"chapter log"},Bs={class:"chapter log_tr -lock"},As={class:"mx-1 w-14 self-center"},Os={class:"chapter log_th xl:ml-0"},js=qs(()=>t("div",{class:"ml-3 w-7 shrink-0 xl:hidden"},null,-1)),Hs={class:"chapter log_tr_2 -lock"},Ps={class:"chapter log_th -col"},Ns={class:"chapter log_th -col"},Fs={class:"chapter log_th -col"},Ws={class:"chapter log_th -col"},zs={class:"contents"},Js=["onDragstart","onDragend"],Ks={__name:"index",setup(s){const w=Pe(),g=Ne(),$=he(),{newChapter:R,deleteChapter:L,moveChapter:B}=$,{chapterIndex:k,chapterNames:C,chapterLength:W,chapterTarget:J,chapterData:m}=A($),f=Ge(),{newLogId:y}=f,{logId:i}=A(f),O=Te(),{chapterFilter:l}=A(O),{findData:oe,findIndex:Q,getClientRect:Z}=ke(),{dragMove:ae,dropMove:ee}=Fe(),{t:q}=ge("lang"),j=P(()=>m.value.some(p=>p.dragging)),d=P(()=>m.value.filter(p=>p.is_selected&&!p.is_delete).map(p=>p.id)),z=(p,u,c)=>{const U=oe(m.value,u),I=m.value.indexOf(U);c&&ae(p,{index:I}),d.value.some(ce=>ce===u)||(U.is_selected=1),d.value.forEach(ce=>{const re=oe(m.value,ce);re.dragging=c,c||(re.is_selected=0)})},r=(p,u)=>{const c=u===null?0:Q(m.value,u)+1;d.value.forEach(U=>{const I=Q(m.value,U);ee(m.value,I,c)})},N=se(!1),E=se(0),ne=se(null),te=(p,u)=>{const c=Q(m.value,u);E.value=u!==void 0&&c===-1?null:c,ne.value=p,N.value=u===null},ue=({type:p})=>{const u=E.value,c=m.value[u];p==="delete"?fe(c):p==="edit"?a(c.id,{}):p==="copy"?me(c,u+1):a("add",{type:p})},me=(p,u)=>{m.value.splice(u+1,0,{...p,id:y()})},fe=p=>{p.is_delete=!0,d.value.forEach(u=>u.is_delete=!0)},ie=se(!1),o=Me({id:0,type:"",index:0}),a=(p,{type:u})=>{o.id=p,o.type=u??"",o.index=E.value,ie.value=!0},h=p=>{const u=E.value===null?m.value.length:o.index+1;m.value.splice(u,0,p)},v=se(null),b=se({}),x=()=>{We(()=>{const p=b.value[i.value];if(!p)return;const{height:u,top:c}=Z(p);v.value.mainScroll({top:c-u*2,left:0})})},M=p=>{i.value=p,g.push({name:"Preview"})};return Re(k,x),Re(()=>w.name,p=>{p==="Chapters"&&x()}),(p,u)=>(S(),Y(Je,{ref_key:"wrap",ref:v},{side_foot:D(()=>[t("button",{class:"chapter_add",onClick:u[0]||(u[0]=(...c)=>e(R)&&e(R)(...c)),title:e(q)("button.new")},[n(e(qe))],8,Es)]),side:D(()=>[t("ul",Ds,[(S(!0),T(le,null,$e(e(C),(c,U)=>(S(),T("li",Ms,[n(Ye,{class:"chapter_mark",active:U===e(k)},null,8,["active"]),t("button",{class:H(["side_item",{"side_item-active":U===e(k)}]),onClick:I=>k.value=U,title:c},_(c),11,Us)]))),256))])]),main_head:D(()=>[n(is)]),default:D(()=>[t("div",Vs,[t("div",Bs,[t("div",As,[n(de,{class:"chapter_plus",title:e(q)("button.new")},{default:D(()=>[n(e(qe),{class:"mt-0.1em"}),n(Ie,{class:"absolute left-0 top-0 opacity-0",onMore:u[1]||(u[1]=c=>te(c,null)),hasDel:!1,hasAdd:!1})]),_:1},8,["title"])]),t("div",Os,_(e(q)("edit.serif"))+"＆"+_(e(q)("showtime.scene"))+"＆"+_(e(q)("showtime.perform")),1),js]),t("div",Hs,[t("div",Ps,_(e(q)("data.char_1"))+"．"+_(e(q)("edit.sprite-ign"))+"＆"+_(e(q)("edit.effect")),1),t("div",Ns,_(e(q)("data.char_2"))+"．"+_(e(q)("edit.sprite-ign"))+"＆"+_(e(q)("edit.effect")),1),t("div",Fs,_(e(q)("data.se"))+"＆"+_(e(q)("data.voice")),1),t("div",Ws,_(e(q)("data.remark")),1)]),n(Ee,{class:"chapter log_dragline",onDrop:u[2]||(u[2]=c=>r(c,null)),dragging:j.value},null,8,["dragging"]),(S(!0),T(le,null,$e(e(l),(c,U)=>(S(),T(le,{key:c.id},[V(t("section",zs,[t("div",{class:H(["chapter log_tr",{"-dragging":c.dragging}]),draggable:!0,onDragstart:I=>z(I,c.id,!0),onDragend:I=>z(I,c.id,!1),onDrag:u[3]||(u[3]=Le(()=>{},["prevent"])),onDrop:u[4]||(u[4]=Le(()=>{},["prevent"])),ref_for:!0,ref:I=>b.value[c.id]=I},[c.is_showtime?(S(),Y(hs,{key:0,log:c,onMore:I=>te(I,c.id)},null,8,["log","onMore"])):(S(),Y(ks,{key:1,log:c,onMore:I=>te(I,c.id),onTarget:I=>M(c.id)},null,8,["log","onMore","onTarget"]))],42,Js),c.is_showtime?(S(),Y(ws,{key:0,log:c},null,8,["log"])):(S(),Y(Ls,{key:1,log:c},null,8,["log"]))],512),[[K,!c.is_delete]]),V(n(Ee,{class:"chapter log_dragline",onDrop:I=>r(I,c.id),dragging:j.value},null,8,["onDrop","dragging"]),[[K,!c.is_delete]])],64))),128))]),n(Qe,{positions:ne.value,onClear:te,onUse:ue,onlyAdd:N.value},null,8,["positions","onlyAdd"]),n(Xt),n(Xe,{open:ie.value,"onUpdate:open":u[5]||(u[5]=c=>ie.value=c),id:o.id,type:o.type,onAdd:h},null,8,["open","id","type"])]),_:1},512))}},ro=G(Ks,[["__scopeId","data-v-fd28e26d"]]);export{ro as default};

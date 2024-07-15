import{_ as H,i as j,r as U,g as G,j as O,w as h,o as k,c as $,a as t,n as B,k as z,F as A,l as R,t as S,v as T,e as D,G as F,H as K,u as g,I as W,x as Z,A as ee,J as te,h as se,s as N,f as oe,b as x,D as ae,E as le,d as ne}from"./index-Bx8hrTDy.js";import{a as ie}from"./round-close-BgzEMDUG.js";const ce={class:"menu_list"},ue={class:"contents"},pe=["onClick"],de={__name:"Menu",props:{positions:{type:[Object],default:null},onlyAdd:{type:[Boolean],default:!1}},emits:["use","clear"],setup(s,{emit:m}){const d=s,r=m,{getClientRect:c}=j(),a=U(null),i=[{title:"セリフ",type:"dialog"},{title:"セリフ：主人公",type:"dialog_hero"},{title:"切り替え：背景",type:"scene_bg"},{title:"切り替え：BGM",type:"scene_bgm"},{title:"演出：CG",type:"perform_cg"},{title:"演出：CG終了",type:"perform_cg_end"},{title:"演出：動画",type:"perform_anime"},{title:"演出：暗転",type:"perform_black"},{title:"アナウンス",type:"dialog_announce",class:"!text-announce"},{title:"システム",type:"dialog_system",class:"!text-announce"},{title:"編集",type:"edit",class:"!bg-secondary/50 !text-white hover:!bg-secondary/75"},{title:"削除",type:"delete",class:"!bg-red-500/50 !text-white hover:!bg-red-500/75"}],u=G(()=>{const{width:e,height:b}=c(document.documentElement),{width:f,height:y}=c(a.value),{x:C,y:I,width:M,height:v}=d.positions??{},o=(I??0)+(v??0)/2-(y??0)/2,E=(o<20?20:o)+"px",n=(b??0)-(y??0)-20+"px",q=`min(${E}, ${n})`,J=(C??0)+(f??0)>e,Q=(C??0)+(M??0)+2,X=(C??0)-(f??0)-9-2,Y=(J?X:Q)+"px";return{top:q,left:Y}}),p=G(()=>{const{width:e}=c(document.documentElement),{width:b}=c(a.value),{x:f,y,width:C,height:I}=d.positions??{},M=(y??0)+(I??0)/2,v=(f??0)+(b??0)>e,o=(f??0)+(C??0)+3,E=(f??0)-3.2,n=v?E:o;return{top:M+"px",left:n+"px",turn:v}}),l=e=>{e.target.matches(".menu, .menu *")||r("clear",null)},w=e=>{r("use",{type:e}),r("clear",null)};return(e,b)=>{const f=O("visible");return h((k(),$("div",{class:"menu_container",onClick:l},[t("div",{class:B(["menu_triangle",{"-scale-x-100":p.value.turn}]),style:z(p.value)},null,6),t("div",{class:"menu scrollbar overflow-y-auto",style:z(u.value),ref_key:"menu",ref:a},[t("ul",ce,[(k(),$(A,null,R(i,y=>t("li",ue,[h(t("button",{class:B(["menu_item",y.class]),onClick:C=>w(y.type)},S(y.title),11,pe),[[T,!(["edit","delete"].includes(y.type)&&s.onlyAdd)]])])),64))])],4)])),[[f,s.positions]])}}},pt=H(de,[["__scopeId","data-v-cce6ede3"]]),re=["disabled","placeholder"],L={__name:"Input",props:{value:{type:[String,Number],default:""},disabled:{type:[Boolean],default:!1},placeholder:{type:[String],default:""}},emits:["update:value"],setup(s,{emit:m}){const d=s,r=m,c=U("");return D(c,a=>r("update:value",a)),D(()=>d.value,a=>c.value=a,{immediate:!0}),(a,i)=>{const u=O("verify");return h((k(),$("input",{"onUpdate:modelValue":i[0]||(i[0]=p=>c.value=p),disabled:s.disabled,placeholder:s.disabled?"":s.placeholder},null,8,re)),[[F,c.value,void 0,{lazy:!0,trim:!0}],[u,void 0,void 0,{check:!0}]])}}},ve=["disabled","placeholder"],_e=["value"],he={__name:"Select",props:{value:{type:[String,Number],default:""},options:{type:[Array],default:()=>[]},disabled:{type:[Boolean],default:!1},placeholder:{type:[String],default:""}},emits:["update:value"],setup(s,{emit:m}){K(i=>({"4ad1a84a":g(c).light.text}));const d=s,r=m,{colors:c}=W(),a=U("");return D(a,i=>r("update:value",i)),D(()=>d.value,i=>a.value=i,{immediate:!0}),(i,u)=>{const p=O("verify");return h((k(),$("select",{class:"select","onUpdate:modelValue":u[0]||(u[0]=l=>a.value=l),disabled:s.disabled,placeholder:s.disabled?"":s.placeholder},[ee(i.$slots,"default",{},void 0,!0),(k(!0),$(A,null,R(s.options,l=>h((k(),$("option",{value:l.id??l},S(l.title??l.id??l),9,_e)),[[T,l.show??!0]])),256))],8,ve)),[[Z,a.value,void 0,{lazy:!0,trim:!0}],[p,void 0,void 0,{check:!0}]])}}},V=H(he,[["__scopeId","data-v-1b98bee5"]]),me=["disabled","placeholder"],P={__name:"Textarea",props:{value:{type:[String,Number],default:""},disabled:{type:[Boolean],default:!1},placeholder:{type:[String],default:""}},emits:["update:value","selected"],setup(s,{emit:m}){const d=s,r=m,c=U(null),a=U(""),i=u=>{if(!u.ctrlKey)return;const{selectionStart:p,selectionEnd:l}=c.value;r("selected",{start:p,end:l})};return D(a,u=>r("update:value",u)),D(()=>d.value,u=>a.value=u,{immediate:!0}),(u,p)=>{const l=O("verify");return h((k(),$("textarea",{class:"scrollbar min-h-0 resize-none","onUpdate:modelValue":p[0]||(p[0]=w=>a.value=w),disabled:s.disabled,placeholder:s.disabled?"":s.placeholder,onKeydown:te(i,["q"]),ref_key:"textarea",ref:c},null,40,me)),[[F,a.value,void 0,{lazy:!0,trim:!0}],[l,void 0,void 0,{check:!0}]])}}},_=s=>(ae("data-v-0445e52c"),s=s(),le(),s),fe={class:"popup_window"},ye={class:"popup_header"},we={class:"popup_close"},ge={class:"popup_container scrollbar"},be={class:"contents"},xe={class:"contents"},Se={class:"popup_label"},ke=_(()=>t("div",{class:"col-span-2"},null,-1)),$e={class:"contents"},Ce=_(()=>t("span",{class:"popup_label"},"内容",-1)),Te={class:"contents"},Ee={class:"contents"},Be=_(()=>t("span",{class:"popup_label"},"話し手",-1)),De={class:"popup_input"},Ue={class:"contents"},Ie=_(()=>t("span",{class:"popup_label"},"話し手",-1)),Me=_(()=>t("div",{class:"col-span-2"},null,-1)),Ge={class:"contents"},Oe=_(()=>t("span",{class:"popup_label"},"主人公差分",-1)),He={class:"popup_input"},Le={class:"contents"},Ve=_(()=>t("span",{class:"popup_label"},"主人公エフェクト",-1)),Ne={class:"popup_input"},ze={class:"contents"},Pe=_(()=>t("span",{class:"popup_label"},"脇役",-1)),je={class:"popup_input"},Ae={class:"contents"},Re=_(()=>t("span",{class:"popup_label"},"脇役差分",-1)),Fe={class:"popup_input"},Ke={class:"contents"},We=_(()=>t("span",{class:"popup_label"},"脇役エフェクト",-1)),qe={class:"popup_input"},Je={class:"col-span-2 flex justify-end gap-3"},Qe={class:"contents"},Xe=_(()=>t("span",{class:"popup_label"},"セリフ",-1)),Ye={class:"contents"},Ze=_(()=>t("span",{class:"popup_label"},"SE",-1)),et={class:"contents"},tt=_(()=>t("span",{class:"popup_label"},"ボイス",-1)),st={class:"contents"},ot=_(()=>t("span",{class:"popup_label"},"備考",-1)),at={__name:"EditPopup",props:{open:{type:[Boolean],default:!1},id:{type:[Number,String],default:""},type:{type:[String],default:""}},emits:["update:open","save"],setup(s,{emit:m}){const d=s,r=m,c=se(),{characterList:a}=N(c),i=oe(),{newChapter:u}=i,{chapterData:p}=N(i),{isDev:l,findData:w}=j(),e=U({}),b=G(()=>[{id:"BG",show:e.value.is_scene},{id:"BGM",show:e.value.is_scene},{id:"CG",show:e.value.is_perform},{id:"暗場",show:e.value.is_perform},{id:"動畫",show:e.value.is_perform}]),f=[{id:"",title:"全"},{id:"前"},{id:"後"},{id:"續"}],y=G(()=>a.value.map(v=>({id:v.name}))),C=()=>{e.value.show_time==="CG"&&e.value.show_name==="結束"||(e.value.show_name="")},I=()=>{if(d.id==="add")p.value.push({...e.value});else{const v=w(p.value,d.id);Object.assign(v,{...e.value})}r("update:open",!1)},M=v=>{const o=v.target.matches(".popup_window, .popup_window *"),E=v.target.matches(".popup_close");(!o||E)&&r("update:open",!1)};return D(()=>d.open,v=>{v&&(d.id==="add"?e.value=u(d.type):e.value={...w(p.value,d.id)},l&&console.log({...e.value}))}),(v,o)=>{const E=O("visible");return h((k(),$("div",{class:"popup",onClick:M},[t("section",fe,[t("header",ye,[t("button",we,[x(g(ie),{class:"pointer-events-none"})])]),t("div",ge,[h(t("div",be,[t("div",xe,[t("span",Se,S(e.value.人物),1),x(V,{class:"popup_select",value:e.value.show_time,"onUpdate:value":o[0]||(o[0]=n=>e.value.show_time=n),options:b.value,onChange:C},null,8,["value","options"])]),ke,t("div",$e,[Ce,h(x(L,{class:"popup_input col-span-3",value:e.value.show_name,"onUpdate:value":o[1]||(o[1]=n=>e.value.show_name=n)},null,8,["value"]),[[T,e.value.show_time!=="暗場"]]),h(x(V,{class:"popup_select col-span-3",value:e.value.show_name,"onUpdate:value":o[2]||(o[2]=n=>e.value.show_name=n),options:f},null,8,["value"]),[[T,e.value.show_time==="暗場"]])])],512),[[T,e.value.is_showtime]]),h(t("div",Te,[h(t("div",Ee,[Be,t("span",De,S(e.value.人物),1)],512),[[T,e.value.is_announce||e.value.is_system]]),h(t("div",Ue,[Ie,x(V,{class:"popup_select",value:e.value.人物,"onUpdate:value":o[3]||(o[3]=n=>e.value.人物=n),options:y.value},null,8,["value","options"])],512),[[T,!(e.value.is_announce||e.value.is_system)]]),Me,t("div",Ge,[Oe,t("span",He,S(e.value.十六夜差分),1)]),t("div",Le,[Ve,t("span",Ne,S(e.value.主角特效),1)]),t("div",ze,[Pe,t("span",je,S(e.value.顯示角色),1)]),t("div",Ae,[Re,t("span",Fe,S(e.value.角色差分),1)]),t("div",Ke,[We,t("span",qe,S(e.value.差分特效),1)]),t("div",Je,[t("button",{class:B(["popup_switch text-replay",{"-active bg-replay":e.value.is_replay}]),onClick:o[4]||(o[4]=n=>e.value.is_replay=!e.value.is_replay)},"再放送",2),t("button",{class:B(["popup_switch text-unknown",{"-active bg-unknown":e.value.is_unknown}]),onClick:o[5]||(o[5]=n=>e.value.is_unknown=!e.value.is_unknown)},"未紹介",2),t("button",{class:B(["popup_switch -monolog",{"-active":e.value.is_solo}]),onClick:o[6]||(o[6]=n=>e.value.is_solo=!e.value.is_solo)},"独り言",2)]),t("div",Qe,[Xe,x(P,{class:"popup_input col-span-3 h-32",value:e.value.和訳,"onUpdate:value":o[7]||(o[7]=n=>e.value.和訳=n)},null,8,["value"])]),t("div",Ye,[Ze,x(L,{class:"popup_input",value:e.value.SE,"onUpdate:value":o[8]||(o[8]=n=>e.value.SE=n)},null,8,["value"])]),t("div",et,[tt,x(L,{class:"popup_input",value:e.value.Voice,"onUpdate:value":o[9]||(o[9]=n=>e.value.Voice=n)},null,8,["value"])])],512),[[T,!e.value.is_showtime]]),t("div",st,[ot,x(P,{class:"popup_input col-span-3 h-32",value:e.value.備註,"onUpdate:value":o[10]||(o[10]=n=>e.value.備註=n)},null,8,["value"])])]),t("footer",{class:"popup_footer"},[t("button",{class:"popup_submit",onClick:I},"セーフ")])])])),[[E,s.open]])}}},dt=H(at,[["__scopeId","data-v-0445e52c"]]),lt={class:"dialog_wrap"},nt=["data-content","innerHTML"],it={__name:"Dialog",props:{value:{type:[String],default:""},type:{type:[String],default:""}},setup(s){K(l=>({"35896f63":g(a).lineHeight,"4d5ca058":g(a).letterSpace,"15be853d":g(a).fontLength,f66c4386:g(i).keyword.dark,"729921a5":g(i).monolog.dark,"0085a039":g(i).announce.dark}));const m=s,d=ne(),{fontFamily:r,fontWeight:c,fontStyle:a}=N(d),{colors:i}=W(),u=G(()=>{const l=new RegExp("((\\[.*?\\])|(\\[.+))","gs"),w=p("keyword"),b=m.value.replace(l,`<span class="${w}" data-content="$1">$1</span>`).replace(/\[|\]/g,"");return{value:m.value.replace(/\[|\]/g,""),html:b}}),p=l=>({keyword:"text-keyword stroke",monolog:"text-monolog stroke",announce:"text-announce stroke"})[l]??"text-white";return(l,w)=>(k(),$("div",{class:B(["dialog",[g(r).dialog,g(c).dialog]])},[t("div",lt,[t("pre",{class:B(p(s.type)),"data-content":u.value.value,innerHTML:u.value.html},null,10,nt)])],2))}},rt=H(it,[["__scopeId","data-v-0b46230a"]]);export{rt as D,dt as E,pt as M};

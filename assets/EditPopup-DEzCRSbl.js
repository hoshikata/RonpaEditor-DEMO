import{_ as Z,o as z,c as F,a as e,B as ue,i as pe,r as x,h as v,q as re,w as N,n as q,l as de,F as fe,m as we,t as i,v as X,g as H,P as be,G as ye,Q as ke,J as xe,K as Se,A as Ce,j as ve,s as K,u as he,b as me,k as $e,L as Ie,f as Ue,d as a,e as k,y as D,D as Le,M as Te,N as Me}from"./index-KCNCY3mu.js";/* empty css                                                             */import{S as T}from"./Dialog-Cp7nHCzm.js";const Be={name:"MdiTarget"},Ne={xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",viewBox:"0 0 24 24"},Oe=e("path",{fill:"currentColor",d:"M11 2v2.07A8 8 0 0 0 4.07 11H2v2h2.07A8 8 0 0 0 11 19.93V22h2v-2.07A8 8 0 0 0 19.93 13H22v-2h-2.07A8 8 0 0 0 13 4.07V2m-2 4.08V8h2V6.09c2.5.41 4.5 2.41 4.92 4.91H16v2h1.91c-.41 2.5-2.41 4.5-4.91 4.92V16h-2v1.91C8.5 17.5 6.5 15.5 6.08 13H8v-2H6.09C6.5 8.5 8.5 6.5 11 6.08M12 11a1 1 0 0 0-1 1a1 1 0 0 0 1 1a1 1 0 0 0 1-1a1 1 0 0 0-1-1"},null,-1),Re=[Oe];function De(d,U,g,h,m,l){return z(),F("svg",Ne,Re)}const ts=Z(Be,[["render",De]]),He={class:"menu_list"},Ve={class:"contents"},Ee=["onClick","title"],Pe={__name:"Menu",props:{positions:{type:[Object],default:null},onlyAdd:{type:[Boolean],default:!1}},emits:["use","clear"],setup(d,{emit:U}){const g=d,h=U,{getClientRect:m}=ue(),{t:l}=pe("lang"),S=x(null),f=v(()=>[{title:l("edit.serif"),type:"dialog"},{title:l("edit.serif")+"："+l("edit.hero"),type:"dialog_hero"},{title:l("showtime.scene")+"："+l("showtime.ui"),type:"scene_ui"},{title:l("showtime.scene")+"："+l("showtime.bg"),type:"scene_bg"},{title:l("showtime.scene")+"："+l("showtime.bgm"),type:"scene_bgm"},{title:l("showtime.perform")+"："+l("showtime.cg"),type:"perform_cg"},{title:l("showtime.perform")+"："+l("showtime.cg")+l("showtime.end"),type:"perform_cg_end"},{title:l("showtime.perform")+"："+l("showtime.black"),type:"perform_black"},{title:l("showtime.announce"),type:"dialog_announce",class:"!text-announce"},{title:l("showtime.system"),type:"dialog_system",class:"!text-announce"},{title:l("button.copy"),type:"copy",class:"!bg-secondary/50 !text-white hover:!bg-secondary/75"},{title:l("button.edit"),type:"edit",class:"!bg-secondary/50 !text-white hover:!bg-secondary/75"},{title:l("button.del"),type:"delete",class:"!bg-red-500/50 !text-white hover:!bg-red-500/75"}]),M=v(()=>{const{width:b,height:B}=m(document.documentElement),{width:C,height:u}=m(S.value),{x:w,y:L,width:O,height:I}=g.positions??{},y=(L??0)+(I??0)/2-(u??0)/2,o=(y<20?20:y)+"px",R=(B??0)-(u??0)-20+"px",t=`min(${o}, ${R})`,A=(w??0)+(C??0)>b,j=(w??0)+(O??0)+2,G=(w??0)-(C??0)-9-2,Y=(A?G:j)+"px";return{top:t,left:Y}}),$=v(()=>{const{width:b}=m(document.documentElement),{width:B}=m(S.value),{x:C,y:u,width:w,height:L}=g.positions??{},O=(u??0)+(L??0)/2,I=(C??0)+(B??0)>b,y=(C??0)+(w??0)+3,o=(C??0)-3.2,R=I?o:y;return{top:O+"px",left:R+"px",turn:I}}),P=b=>{b.target.matches(".menu, .menu *")||h("clear",null)},J=b=>{h("use",{type:b}),h("clear",null)};return(b,B)=>{const C=re("visible");return N((z(),F("div",{class:"menu_container",onClick:P},[e("div",{class:q(["menu_triangle",{"-scale-x-100":$.value.turn}]),style:de($.value)},null,6),e("div",{class:"menu scrollbar overflow-y-auto",style:de(M.value),ref_key:"menu",ref:S},[e("ul",He,[(z(!0),F(fe,null,we(f.value,u=>(z(),F("li",Ve,[N(e("button",{class:q(["menu_item",u.class]),onClick:w=>J(u.type),title:u.title},i(u.title),11,Ee),[[X,!(["copy","edit","delete"].includes(u.type)&&d.onlyAdd)]])]))),256))])],4)])),[[C,d.positions]])}}},ss=Z(Pe,[["__scopeId","data-v-cbf49607"]]),Ae=["disabled","placeholder"],je={__name:"Textarea",props:{value:{type:[String,Number],default:""},disabled:{type:[Boolean],default:!1},placeholder:{type:[String],default:""}},emits:["update:value","selected"],setup(d,{emit:U}){const g=d,h=U,m=x(null),l=x(""),S=f=>{if(!f.ctrlKey)return;const{selectionStart:M,selectionEnd:$}=m.value;h("selected",{start:M,end:$})};return H(l,f=>h("update:value",f)),H(()=>g.value,f=>l.value=f,{immediate:!0}),(f,M)=>{const $=re("verify");return N((z(),F("textarea",{class:"scrollbar textarea","onUpdate:modelValue":M[0]||(M[0]=P=>l.value=P),disabled:d.disabled,placeholder:d.disabled?"":d.placeholder,onKeydown:ye(S,["q"]),ref_key:"textarea",ref:m},null,40,Ae)),[[be,l.value,void 0,{lazy:!0,trim:!0}],[$,void 0,void 0,{check:!0}]])}}},_e=Z(je,[["__scopeId","data-v-c1e57f9a"]]),Ge=["disabled"],Ke={class:"whitespace-nowrap"},ze={__name:"Checkbox",props:{value:{type:[Number],default:0},disabled:{type:[Boolean],default:!1},title:{type:[String],default:""},box:{type:[String],default:""}},emits:["update:value"],setup(d,{emit:U}){const g=d,h=U,m=x(0);return H(m,l=>h("update:value",l)),H(()=>g.value,l=>m.value=l,{immediate:!0}),(l,S)=>(z(),F("label",{class:q(["inline-flex items-center",d.disabled?"cursor-auto":"cursor-pointer"])},[N(e("input",{class:q(["checkbox",d.box]),"onUpdate:modelValue":S[0]||(S[0]=f=>m.value=f),disabled:d.disabled,"true-value":1,"false-value":0,type:"checkbox"},null,10,Ge),[[ke,m.value]]),e("span",Ke,i(d.title),1),xe(l.$slots,"default",{},void 0,!0)],2))}},Fe=Z(ze,[["__scopeId","data-v-b7a95cdd"]]),qe=Se("log",()=>{const d=Ce(),U=ve(),{convertChapter:g}=U,{chapterData:h}=K(U),m=he(),{characterHero:l,characterUnknown:S}=K(m),f=me(),{getUI:M,getHistoryList:$}=f,{defaultUI:P,defaultUIForCG:J}=K(f),{findData:b,findIndex:B}=ue(),{newId:C}=$e(),{t:u}=pe("lang"),w=x(0),L=x(0),O=v(()=>b(h.value,w.value)??{}),I=v(()=>h.value.filter(s=>!s.is_delete)),y=v(()=>I.value.filter(s=>{const p=!s.is_showtime,r=s.is_perform&&s.show_time==="black";return s.is_perform&&s.show_time,p||r})),o=v(()=>{const s=B(I.value,w.value)+1,p=I.value.slice(0,s),r=I.value.slice(s);return r.every(W=>W.is_showtime&&W.show_time!=="black")&&p.push(...r),p});H(w,s=>{const p=b(h.value,s)??{};p.is_scene||(L.value=B(y.value,p.id))}),H(L,s=>{var p;return w.value=((p=y.value[s])==null?void 0:p.id)??0}),H(h,()=>{var s;return w.value=((s=y.value[0])==null?void 0:s.id)??0}),Ie(()=>{var s;return w.value=((s=y.value[0])==null?void 0:s.id)??0});const R=v(()=>{const s=$(o.value,"cg");return((s==null?void 0:s.show_name)??"")!==""&&(s==null?void 0:s.show_name)!=="end"}),t=v(()=>{const s=$(o.value,"ui"),p=(s==null?void 0:s.show_name)??P.value??"",r=J.value;return R.value&&r!==""?r:p}),A=v(()=>M(t.value)),j=v(()=>{const s=A.value,p=O.value,r=l.value.name,E=p.speaker,W=s.name_tag_number===2,oe=p.is_monolog&&s.name_tag_solo_show,ne=E===r&&s.name_tag_hero_right,ae=E===p.char_1&&s.name_tag_sprite_1_right,ge=E===p.char_2&&s.name_tag_sprite_2_right&&s.sprite_number===2;return W&&(oe||ne||ae||ge)}),G=v(()=>{const s=O.value,p=s.is_system||s.is_announce||s.is_monolog,r=s.is_monolog&&A.value.name_tag_solo_show;return!p||r}),Y=v(()=>!j.value&&G.value),le=v(()=>j.value&&G.value),Q=x(!1),ee=x(!1),te=x(!1),se=x(!1),ie=x(!1),ce=x(!1),_=v(()=>({"":Q.value})),n=()=>{Q.value=!1,te.value=!1};H(()=>d.name,()=>Q.value=!1);const V=()=>C(h.value);return{logId:w,logIndex:L,logData:O,logShowing:I,logContents:y,logHistory:o,logCGMode:R,logUIId:t,logUI:A,isNameRight:j,isNameShow:G,nameTag1Show:Y,nameTag2Show:le,logPlay:Q,logPause:ee,logTyping:te,logBlack:se,logVoicing:ie,logAnimating:ce,playEase:_,newLogId:V,newLog:(s,p=!1)=>{var oe,ne,ae;let r={name:"",content:""};s==="scene_ui"&&(r={name:u("showtime.scene"),content:u("showtime.ui")}),s==="scene_bg"&&(r={name:u("showtime.scene"),content:u("showtime.bg")}),s==="scene_bgm"&&(r={name:u("showtime.scene"),content:u("showtime.bgm")}),s==="perform_cg"&&(r={name:u("showtime.perform"),content:u("showtime.cg")}),s==="perform_cg_end"&&(r={name:u("showtime.perform"),content:u("showtime.cg")+"/"+u("showtime.end")}),s==="perform_black"&&(r={name:u("showtime.perform"),content:u("showtime.black")+"/"+u("black.fade")}),s==="perform_anime"&&(r={name:u("showtime.perform"),content:u("showtime.anime")}),s==="dialog"&&(r={name:((oe=S.value)==null?void 0:oe.name)??"",content:""}),s==="dialog_hero"&&(r={name:((ne=l.value)==null?void 0:ne.name)??"",content:""}),s==="dialog_announce"&&(r={name:u("showtime.announce"),content:""}),s==="dialog_system"&&(r={name:u("showtime.system"),content:""});const E={id:V(),speaker:r.name??"",char_1:"",char_1_sprite:"",char_1_effect:"",char_2:p?((ae=l.value)==null?void 0:ae.name)??"":"",char_2_sprite:"",char_2_effect:"",content:r.content??"",se:"",voice:"",remark:""},W=g(E);return{...E,...W}},stopPlaying:n,changeLog:s=>{const p=L.value+s;p<0||p>y.value.length-1||(L.value=p,n())}}}),Je=d=>(Te("data-v-aaee347c"),d=d(),Me(),d),Qe={class:"popup_window"},We={class:"contents"},Xe={class:"contents"},Ye={class:"popup_label"},Ze=Je(()=>e("div",{class:"-col-2"},null,-1)),et={class:"contents"},tt={class:"popup_label"},st={class:"contents"},ot={class:"contents"},nt={class:"popup_label"},at={class:"popup_input"},lt={class:"contents"},it={class:"popup_label"},ct={class:"col-span-2 flex justify-end gap-3 sm:col-span-1"},ut=["title"],pt=["title"],rt=["title"],dt={class:"popup_group"},_t={class:"popup_group_title"},vt={class:"contents"},ht={class:"popup_label"},mt={value:""},gt={class:"contents"},ft={class:"popup_label"},wt={value:""},bt={class:"contents"},yt={class:"popup_label"},kt={value:""},xt={class:"popup_group"},St={class:"popup_group_title"},Ct={class:"popup_group_checkbox"},$t={class:"contents"},It={class:"popup_label"},Ut={value:""},Lt={class:"contents"},Tt={class:"popup_label"},Mt={value:""},Bt={class:"contents"},Nt={class:"popup_label"},Ot={value:""},Rt={class:"contents"},Dt={class:"popup_label"},Ht={value:""},Vt={class:"contents"},Et={class:"popup_label"},Pt={value:""},At={class:"contents"},jt={class:"popup_label"},Gt={class:"-col-3 grid gap-1"},Kt={class:"text-right text-xs opacity-50"},zt={class:"contents"},Ft={class:"popup_label"},qt={class:"popup_footer"},Jt=["title"],Qt=["title"],Wt={__name:"EditPopup",props:{open:{type:[Boolean],default:!1},id:{type:[Number,String],default:""},type:{type:[String],default:""}},emits:["update:open","add","target"],setup(d,{emit:U}){const g=d,h=U,m=Ue(),{defaultHero:l}=K(m),S=he(),{getCharacter:f}=S,{characterList:M,characterReals:$}=K(S),P=ve(),{chapterData:J}=K(P),b=me(),{getShowList:B}=b,{effectList:C,seList:u,voiceList:w}=K(b),L=qe(),{newLog:O}=L,{isDev:I,findData:y}=ue(),{t:o}=pe("lang"),R=x(null),t=x({}),A=v(()=>{var _;return(_=f(t.value.speaker))==null?void 0:_.name}),j=v(()=>[{id:"ui",title:o("showtime.ui"),show:t.value.is_scene},{id:"bg",title:o("showtime.bg"),show:t.value.is_scene},{id:"bgm",title:o("showtime.bgm"),show:t.value.is_scene},{id:"cg",title:o("showtime.cg"),show:t.value.is_perform},{id:"black",title:o("showtime.black"),show:t.value.is_perform}]),G=v(()=>B(t.value.show_time)),Y=v(()=>M.value.filter(_=>!_.disabled||_.unknown)),le=v(()=>ee(t.value.char_1)),Q=v(()=>ee(t.value.char_2)),ee=_=>{var n;return((n=f(_))==null?void 0:n.sprite)??[]},te=()=>{t.value.show_time==="cg"&&t.value.show_name==="end"||(t.value.show_name="")},se=_=>t.value[_]="",ie=()=>{const _={...t.value};if(g.id==="add")h("add",_);else{const V=y(J.value,g.id);Object.assign(V,_)}h("update:open",!1),(!_.is_showtime||_.show_time==="black")&&h("target",_.id)},ce=_=>{const n=_.target.matches(".popup_window, .popup_window *"),V=_.target.matches(".-cancel");(!n||V)&&h("update:open",!1)};return H(()=>g.open,_=>{_&&(g.id==="add"?t.value=O(g.type,l.value):t.value={...y(J.value,g.id)},I&&console.log({...t.value}),R.value.scrollTo({top:0,left:0}))}),(_,n)=>{const V=re("visible");return N((z(),F("section",{class:"popup",onClick:ce},[e("div",Qe,[e("div",{class:"popup_container scrollbar",ref_key:"container",ref:R},[N(e("div",We,[e("div",Xe,[e("span",Ye,i(a(o)(`showtime.${t.value.speaker}`)),1),k(T,{class:"popup_select",value:t.value.show_time,"onUpdate:value":n[0]||(n[0]=c=>t.value.show_time=c),options:j.value,onChange:te},null,8,["value","options"])]),Ze,e("div",et,[e("span",tt,i(a(o)("edit.content")),1),k(T,{class:"popup_select -col-3",value:t.value.show_name,"onUpdate:value":n[1]||(n[1]=c=>t.value.show_name=c),options:G.value},{default:D(()=>[N(e("option",{value:""},i(a(o)("edit.none")),513),[[X,t.value.show_time!=="black"]])]),_:1},8,["value","options"])])],512),[[X,t.value.is_showtime]]),N(e("div",st,[N(e("div",ot,[e("span",nt,i(a(o)("data.speaker")),1),e("span",at,i(a(o)(`showtime.${A.value}`)),1)],512),[[X,t.value.is_announce||t.value.is_system]]),N(e("div",lt,[e("span",it,i(a(o)("data.speaker")),1),k(T,{class:"popup_select",value:t.value.speaker,"onUpdate:value":n[2]||(n[2]=c=>t.value.speaker=c),options:Y.value},null,8,["value","options"])],512),[[X,!(t.value.is_announce||t.value.is_system)]]),e("div",ct,[e("button",{class:q(["popup_switch text-replay",{"-active bg-replay":t.value.is_replay}]),onClick:n[3]||(n[3]=c=>t.value.is_replay=!t.value.is_replay),title:a(o)("data.replay")},i(a(o)("data.replay")),11,ut),e("button",{class:q(["popup_switch text-unknown",{"-active bg-unknown":t.value.is_unknown}]),onClick:n[4]||(n[4]=c=>t.value.is_unknown=!t.value.is_unknown),title:a(o)("data.unknown")},i(a(o)("data.unknown")),11,pt),e("button",{class:q(["popup_switch -monolog",{"-active":t.value.is_monolog}]),onClick:n[5]||(n[5]=c=>t.value.is_monolog=!t.value.is_monolog),title:a(o)("data.monolog")},i(a(o)("data.monolog")),11,rt)]),e("div",dt,[e("span",_t,"・"+i(a(o)("data.char_1")),1),e("div",vt,[e("span",ht,i(a(o)("edit.assign")),1),k(T,{class:"popup_select",value:t.value.char_1,"onUpdate:value":n[6]||(n[6]=c=>t.value.char_1=c),options:a($),onChange:n[7]||(n[7]=c=>se("char_1_sprite"))},{default:D(()=>[e("option",mt,i(a(o)("edit.assign-none")),1)]),_:1},8,["value","options"])]),e("div",gt,[e("span",ft,i(a(o)("edit.sprite")),1),k(T,{class:"popup_select",value:t.value.char_1_sprite,"onUpdate:value":n[8]||(n[8]=c=>t.value.char_1_sprite=c),options:le.value},{default:D(()=>[e("option",wt,i(a(o)("edit.sprite-inherit")),1)]),_:1},8,["value","options"])]),e("div",bt,[e("span",yt,i(a(o)("edit.effect")),1),k(T,{class:"popup_select",value:t.value.char_1_effect,"onUpdate:value":n[9]||(n[9]=c=>t.value.char_1_effect=c),options:a(C)},{default:D(()=>[e("option",kt,i(a(o)("edit.none")),1)]),_:1},8,["value","options"])])]),e("div",xt,[e("div",St,[e("span",null,"・"+i(a(o)("data.char_2")),1),e("label",Ct,[k(Fe,{value:a(l),"onUpdate:value":n[10]||(n[10]=c=>Le(l)?l.value=c:null)},null,8,["value"]),e("span",null,i(a(o)("edit.default-hero")),1)])]),e("div",$t,[e("span",It,i(a(o)("edit.assign")),1),k(T,{class:"popup_select",value:t.value.char_2,"onUpdate:value":n[11]||(n[11]=c=>t.value.char_2=c),options:a($),onChange:n[12]||(n[12]=c=>se("char_2_sprite"))},{default:D(()=>[e("option",Ut,i(a(o)("edit.assign-none")),1)]),_:1},8,["value","options"])]),e("div",Lt,[e("span",Tt,i(a(o)("edit.sprite")),1),k(T,{class:"popup_select",value:t.value.char_2_sprite,"onUpdate:value":n[13]||(n[13]=c=>t.value.char_2_sprite=c),options:Q.value},{default:D(()=>[e("option",Mt,i(a(o)("edit.sprite-inherit")),1)]),_:1},8,["value","options"])]),e("div",Bt,[e("span",Nt,i(a(o)("edit.effect")),1),k(T,{class:"popup_select",value:t.value.char_2_effect,"onUpdate:value":n[14]||(n[14]=c=>t.value.char_2_effect=c),options:a(C)},{default:D(()=>[e("option",Ot,i(a(o)("edit.none")),1)]),_:1},8,["value","options"])])]),e("div",Rt,[e("span",Dt,i(a(o)("data.se")),1),k(T,{class:"popup_select",value:t.value.se,"onUpdate:value":n[15]||(n[15]=c=>t.value.se=c),options:a(u)},{default:D(()=>[e("option",Ht,i(a(o)("edit.none")),1)]),_:1},8,["value","options"])]),e("div",Vt,[e("span",Et,i(a(o)("data.voice")),1),k(T,{class:"popup_select",value:t.value.voice,"onUpdate:value":n[16]||(n[16]=c=>t.value.voice=c),options:a(w)},{default:D(()=>[e("option",Pt,i(a(o)("edit.none")),1)]),_:1},8,["value","options"])]),e("div",At,[e("span",jt,i(a(o)("edit.serif")),1),e("div",Gt,[k(_e,{class:"popup_input -textarea",value:t.value.content,"onUpdate:value":n[17]||(n[17]=c=>t.value.content=c)},null,8,["value"]),e("span",Kt,i(a(o)("edit.serif-notice")),1)])])],512),[[X,!t.value.is_showtime]]),e("div",zt,[e("span",Ft,i(a(o)("data.remark")),1),k(_e,{class:"popup_input -textarea -col-3",value:t.value.remark,"onUpdate:value":n[18]||(n[18]=c=>t.value.remark=c)},null,8,["value"])])],512),e("footer",qt,[e("button",{class:"popup_submit",onClick:ie,title:a(o)("button.save")},i(a(o)("button.save")),9,Jt),e("button",{class:"popup_submit -cancel",title:a(o)("button.cancel")},i(a(o)("button.cancel")),9,Qt)])])])),[[V,d.open]])}}},os=Z(Wt,[["__scopeId","data-v-aaee347c"]]);export{Fe as C,os as E,ts as I,ss as M,qe as u};

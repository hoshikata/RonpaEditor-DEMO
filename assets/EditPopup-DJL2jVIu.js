import{_ as ee,o as q,c as J,a as s,x as ie,r as w,h as i,p as ce,w as G,n as F,k as ue,F as fe,l as we,t as Z,v as z,g as H,P as be,E as ye,J as Se,A as xe,i as de,s as P,u as _e,b as ve,j as Ce,K as ke,e as _,y as M,d as K,L as Ie,M as Ue}from"./index-DTP3OGN9.js";/* empty css                                                             */import{S as C,_ as pe}from"./Dialog-CS7KxtJO.js";const $e={name:"MdiTarget"},Le={xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",viewBox:"0 0 24 24"},Be=s("path",{fill:"currentColor",d:"M11 2v2.07A8 8 0 0 0 4.07 11H2v2h2.07A8 8 0 0 0 11 19.93V22h2v-2.07A8 8 0 0 0 19.93 13H22v-2h-2.07A8 8 0 0 0 13 4.07V2m-2 4.08V8h2V6.09c2.5.41 4.5 2.41 4.92 4.91H16v2h1.91c-.41 2.5-2.41 4.5-4.91 4.92V16h-2v1.91C8.5 17.5 6.5 15.5 6.08 13H8v-2H6.09C6.5 8.5 8.5 6.5 11 6.08M12 11a1 1 0 0 0-1 1a1 1 0 0 0 1 1a1 1 0 0 0 1-1a1 1 0 0 0-1-1"},null,-1),Ee=[Be];function Te(c,k,r,u,v,p){return q(),J("svg",Le,Ee)}const Nt=ee($e,[["render",Te]]),Me={class:"menu_list"},Ge={class:"contents"},Oe=["onClick","title"],Re={__name:"Menu",props:{positions:{type:[Object],default:null},onlyAdd:{type:[Boolean],default:!1}},emits:["use","clear"],setup(c,{emit:k}){const r=c,u=k,{getClientRect:v}=ie(),p=w(null),O=[{title:"セリフ",type:"dialog"},{title:"セリフ：主人公",type:"dialog_hero"},{title:"切り替え：UI",type:"scene_ui"},{title:"切り替え：背景",type:"scene_bg"},{title:"切り替え：BGM",type:"scene_bgm"},{title:"演出：CG",type:"perform_cg"},{title:"演出：CG終了",type:"perform_cg_end"},{title:"演出：暗転",type:"perform_black"},{title:"アナウンス",type:"dialog_announce",class:"!text-announce"},{title:"ナレーション",type:"dialog_system",class:"!text-announce"},{title:"コピー",type:"copy",class:"!bg-secondary/50 !text-white hover:!bg-secondary/75"},{title:"編集",type:"edit",class:"!bg-secondary/50 !text-white hover:!bg-secondary/75"},{title:"削除",type:"delete",class:"!bg-red-500/50 !text-white hover:!bg-red-500/75"}],d=i(()=>{const{width:S,height:I}=v(document.documentElement),{width:h,height:g}=v(p.value),{x:U,y:f,width:$,height:L}=r.positions??{},m=(f??0)+(L??0)/2-(g??0)/2,x=(m<20?20:m)+"px",B=(I??0)-(g??0)-20+"px",N=`min(${x}, ${B})`,A=(U??0)+(h??0)>S,T=(U??0)+($??0)+2,t=(U??0)-(h??0)-9-2,R=(A?t:T)+"px";return{top:N,left:R}}),b=i(()=>{const{width:S}=v(document.documentElement),{width:I}=v(p.value),{x:h,y:g,width:U,height:f}=r.positions??{},$=(g??0)+(f??0)/2,L=(h??0)+(I??0)>S,m=(h??0)+(U??0)+3,x=(h??0)-3.2,B=L?x:m;return{top:$+"px",left:B+"px",turn:L}}),y=S=>{S.target.matches(".menu, .menu *")||u("clear",null)},E=S=>{u("use",{type:S}),u("clear",null)};return(S,I)=>{const h=ce("visible");return G((q(),J("div",{class:"menu_container",onClick:y},[s("div",{class:F(["menu_triangle",{"-scale-x-100":b.value.turn}]),style:ue(b.value)},null,6),s("div",{class:"menu scrollbar overflow-y-auto",style:ue(d.value),ref_key:"menu",ref:p},[s("ul",Me,[(q(),J(fe,null,we(O,g=>s("li",Ge,[G(s("button",{class:F(["menu_item",g.class]),onClick:U=>E(g.type),title:g.title},Z(g.title),11,Oe),[[z,!(["copy","edit","delete"].includes(g.type)&&c.onlyAdd)]])])),64))])],4)])),[[h,c.positions]])}}},At=ee(Re,[["__scopeId","data-v-e4cfe076"]]),Ve=["disabled","placeholder"],De={__name:"Textarea",props:{value:{type:[String,Number],default:""},disabled:{type:[Boolean],default:!1},placeholder:{type:[String],default:""}},emits:["update:value","selected"],setup(c,{emit:k}){const r=c,u=k,v=w(null),p=w(""),O=d=>{if(!d.ctrlKey)return;const{selectionStart:b,selectionEnd:y}=v.value;u("selected",{start:b,end:y})};return H(p,d=>u("update:value",d)),H(()=>r.value,d=>p.value=d,{immediate:!0}),(d,b)=>{const y=ce("verify");return G((q(),J("textarea",{class:"scrollbar textarea","onUpdate:modelValue":b[0]||(b[0]=E=>p.value=E),disabled:c.disabled,placeholder:c.disabled?"":c.placeholder,onKeydown:ye(O,["q"]),ref_key:"textarea",ref:v},null,40,Ve)),[[be,p.value,void 0,{lazy:!0,trim:!0}],[y,void 0,void 0,{check:!0}]])}}},re=ee(De,[["__scopeId","data-v-c1e57f9a"]]),He=Se("log",()=>{const c=xe(),k=de(),{convertChapter:r}=k,{chapterData:u}=P(k),v=_e(),{characterHero:p,characterUnknown:O}=P(v),d=ve(),{getUI:b,getHistoryList:y}=d,{defaultUI:E,defaultUIForCG:S}=P(d),{findData:I,findIndex:h,getRandomInt:g}=ie(),{newId:U}=Ce(),f=w(0),$=w(0),L=i(()=>I(u.value,f.value)??{}),m=i(()=>u.value.filter(e=>!e.is_delete)),x=i(()=>m.value.filter(e=>{const n=!e.is_showtime,o=e.is_perform&&e.show_time==="暗場";return e.is_perform&&e.show_time,n||o})),B=i(()=>{const e=h(m.value,f.value)+1,n=m.value.slice(0,e),o=m.value.slice(e);return o.every(D=>D.is_showtime&&D.show_time!=="暗場")&&n.push(...o),n});H(f,e=>{const n=I(u.value,e)??{};n.is_scene||($.value=h(x.value,n.id))}),H($,e=>{var n;return f.value=((n=x.value[e])==null?void 0:n.id)??0}),H(u,()=>{var e;return f.value=((e=x.value[0])==null?void 0:e.id)??0}),ke(()=>{var e;return f.value=((e=x.value[0])==null?void 0:e.id)??0});const N=i(()=>{const e=y(B.value,"CG");return((e==null?void 0:e.show_name)??"")!==""&&(e==null?void 0:e.show_name)!=="結束"}),A=i(()=>{const e=y(B.value,"UI"),n=(e==null?void 0:e.show_name)??E.value??"",o=S.value;return N.value&&o!==""?o:n}),T=i(()=>b(A.value)),t=i(()=>{const e=T.value,n=L.value,o=p.value.name,V=n.人物,D=e.name_tag_number===2,Y=n.is_monolog&&e.name_tag_solo_show,me=V===o&&e.name_tag_hero_right,he=V===n.顯示角色&&e.name_tag_sprite_1_right,ge=V===n.立ち絵2&&e.name_tag_sprite_2_right&&e.sprite_number===2;return D&&(Y||me||he||ge)}),R=i(()=>{const e=L.value,n=e.is_system||e.is_announce||e.is_monolog,o=e.is_monolog&&T.value.name_tag_solo_show;return!n||o}),te=i(()=>!t.value&&R.value),se=i(()=>t.value&&R.value),j=w(!1),oe=w(!1),ne=w(!1),W=w(!1),ae=w(!1),Q=w(!1),le=i(()=>({"":j.value}));H(()=>c.name,()=>j.value=!1);const X=()=>U(u.value);return{logId:f,logIndex:$,logData:L,logShowing:m,logContents:x,logHistory:B,logCGMode:N,logUIId:A,logUI:T,isNameRight:t,isNameShow:R,nameTag1Show:te,nameTag2Show:se,logPlay:j,logPause:oe,logTyping:ne,logBlack:W,logVoicing:ae,logAnimating:Q,playEase:le,newLogId:X,newLog:e=>{var D,Y;let n={name:"",content:""};e==="scene_ui"&&(n={name:"場景(切換)",content:"UI"}),e==="scene_bg"&&(n={name:"場景(切換)",content:"BG"}),e==="scene_bgm"&&(n={name:"場景(切換)",content:"BGM"}),e==="perform_cg"&&(n={name:"演出",content:"CG"}),e==="perform_cg_end"&&(n={name:"演出",content:"CG/結束"}),e==="perform_anime"&&(n={name:"演出",content:"動畫"}),e==="perform_black"&&(n={name:"演出",content:"暗場"}),e==="dialog"&&(n={name:((D=O.value)==null?void 0:D.name)??"",content:""}),e==="dialog_hero"&&(n={name:((Y=p.value)==null?void 0:Y.name)??"",content:""}),e==="dialog_announce"&&(n={name:"廣播",content:""}),e==="dialog_system"&&(n={name:"系統",content:""});const o={id:X(),人物:n.name??"",顯示角色:"",角色差分:"",差分特效:"",立ち絵2:"",十六夜差分:"",和訳:n.content??"",SE:"",Voice:"",備註:""},V=r(o);return{...o,...V}}}}),a=c=>(Ie("data-v-140e0473"),c=c(),Ue(),c),Ne={class:"popup_window"},Ae={class:"popup_container scrollbar"},Pe={class:"contents"},je={class:"contents"},Ke={class:"popup_label"},ze=a(()=>s("div",{class:"-col-2"},null,-1)),Fe={class:"contents"},qe=a(()=>s("span",{class:"popup_label"},"内容",-1)),Je={value:""},We={class:"contents"},Qe={class:"contents"},Xe=a(()=>s("span",{class:"popup_label"},"話し手",-1)),Ye={class:"popup_input"},Ze={class:"contents"},et=a(()=>s("span",{class:"popup_label"},"話し手",-1)),tt={class:"col-span-2 flex justify-end gap-3 sm:col-span-1"},st={class:"popup_group"},ot=a(()=>s("span",{class:"popup_group_title"},"・立ち絵1",-1)),nt={class:"contents"},at=a(()=>s("span",{class:"popup_label"},"キャラ指定",-1)),lt=a(()=>s("option",{value:""},"無指定",-1)),it={class:"contents"},ct=a(()=>s("span",{class:"popup_label"},"キャラ差分",-1)),ut=a(()=>s("option",{value:""},"引き継ぎ",-1)),pt={class:"contents"},rt=a(()=>s("span",{class:"popup_label"},"エフェクト",-1)),dt=a(()=>s("option",{value:""},"なし",-1)),_t={class:"popup_group"},vt=a(()=>s("span",{class:"popup_group_title"},"・立ち絵2",-1)),mt={class:"contents"},ht=a(()=>s("span",{class:"popup_label"},"キャラ指定",-1)),gt=a(()=>s("option",{value:""},"無指定",-1)),ft={class:"contents"},wt=a(()=>s("span",{class:"popup_label"},"キャラ差分",-1)),bt=a(()=>s("option",{value:""},"引き継ぎ",-1)),yt={class:"contents"},St=a(()=>s("span",{class:"popup_label"},"エフェクト",-1)),xt=a(()=>s("option",{value:""},"なし",-1)),Ct={class:"contents"},kt=a(()=>s("span",{class:"popup_label"},"SE",-1)),It=a(()=>s("option",{value:""},"なし ",-1)),Ut={class:"contents"},$t=a(()=>s("span",{class:"popup_label"},"ボイス",-1)),Lt={class:"contents"},Bt=a(()=>s("span",{class:"popup_label"},"セリフ",-1)),Et={class:"-col-3 grid gap-1"},Tt=a(()=>s("span",{class:"text-right text-xs opacity-50"},"セリフにキーワードを指定したい場合は、文字を[ ]で囲んでください。",-1)),Mt={class:"contents"},Gt=a(()=>s("span",{class:"popup_label"},"備考",-1)),Ot=a(()=>s("button",{class:"popup_submit -cancel",title:"キャンセル"},"キャンセル",-1)),Rt={__name:"EditPopup",props:{open:{type:[Boolean],default:!1},id:{type:[Number,String],default:""},type:{type:[String],default:""}},emits:["update:open","add","target"],setup(c,{emit:k}){const r=c,u=k,v=_e(),{getCharacter:p}=v,{characterList:O,characterReals:d}=P(v),b=de(),{chapterData:y}=P(b),E=ve(),{blackList:S,getEffect:I,getBackground:h,getCg:g,getBgm:U,getSe:f,getShowList:$}=E,{uiList:L,effectList:m,seList:x}=P(E),B=He(),{newLog:N}=B,{isDev:A,findData:T}=ie(),t=w({}),R=i(()=>{var l;return(l=p(t.value.人物))==null?void 0:l.name}),te=i(()=>[{id:"UI",show:t.value.is_scene},{id:"BG",show:t.value.is_scene},{id:"BGM",show:t.value.is_scene},{id:"CG",show:t.value.is_perform},{id:"暗場",show:t.value.is_perform}]),se=i(()=>$(t.value.show_time)),j=i(()=>O.value.filter(l=>!l.disabled||l.unknown)),oe=i(()=>W(t.value.顯示角色)),ne=i(()=>W(t.value.立ち絵2)),W=l=>{var e;return((e=p(l))==null?void 0:e.sprite)??[]},ae=()=>{t.value.show_time==="CG"&&t.value.show_name==="結束"||(t.value.show_name="")},Q=l=>t.value[l]="",le=()=>{const l={...t.value};if(r.id==="add")u("add",l);else{const n=T(y.value,r.id);Object.assign(n,l)}u("update:open",!1),(!l.is_showtime||l.show_time==="暗場")&&u("target",l.id)},X=l=>{const e=l.target.matches(".popup_window, .popup_window *"),n=l.target.matches(".-cancel");(!e||n)&&u("update:open",!1)};return H(()=>r.open,l=>{l&&(r.id==="add"?t.value=N(r.type):t.value={...T(y.value,r.id)},A&&console.log({...t.value}))}),(l,e)=>{const n=ce("visible");return G((q(),J("section",{class:"popup",onClick:X},[s("div",Ne,[s("div",Ae,[G(s("div",Pe,[s("div",je,[s("span",Ke,Z(t.value.人物),1),_(C,{class:"popup_select",value:t.value.show_time,"onUpdate:value":e[0]||(e[0]=o=>t.value.show_time=o),options:te.value,onChange:ae},null,8,["value","options"])]),ze,s("div",Fe,[qe,_(C,{class:"popup_select -col-3",value:t.value.show_name,"onUpdate:value":e[1]||(e[1]=o=>t.value.show_name=o),options:se.value},{default:M(()=>[s("option",Je,Z(t.value.show_time==="暗場"?"フェード":"なし"),1)]),_:1},8,["value","options"])])],512),[[z,t.value.is_showtime]]),G(s("div",We,[G(s("div",Qe,[Xe,s("span",Ye,Z(R.value),1)],512),[[z,t.value.is_announce||t.value.is_system]]),G(s("div",Ze,[et,_(C,{class:"popup_select",value:t.value.人物,"onUpdate:value":e[2]||(e[2]=o=>t.value.人物=o),options:j.value},null,8,["value","options"])],512),[[z,!(t.value.is_announce||t.value.is_system)]]),s("div",tt,[s("button",{class:F(["popup_switch text-replay",{"-active bg-replay":t.value.is_replay}]),onClick:e[3]||(e[3]=o=>t.value.is_replay=!t.value.is_replay),title:"再放送"},"再放送",2),s("button",{class:F(["popup_switch text-unknown",{"-active bg-unknown":t.value.is_unknown}]),onClick:e[4]||(e[4]=o=>t.value.is_unknown=!t.value.is_unknown),title:"未解明"},"未解明",2),s("button",{class:F(["popup_switch -monolog",{"-active":t.value.is_monolog}]),onClick:e[5]||(e[5]=o=>t.value.is_monolog=!t.value.is_monolog),title:"独り言"},"独り言",2)]),s("div",st,[ot,s("div",nt,[at,_(C,{class:"popup_select",value:t.value.顯示角色,"onUpdate:value":e[6]||(e[6]=o=>t.value.顯示角色=o),options:K(d),onChange:e[7]||(e[7]=o=>Q("角色差分"))},{default:M(()=>[lt]),_:1},8,["value","options"])]),s("div",it,[ct,_(C,{class:"popup_select",value:t.value.角色差分,"onUpdate:value":e[8]||(e[8]=o=>t.value.角色差分=o),options:oe.value},{default:M(()=>[ut]),_:1},8,["value","options"])]),s("div",pt,[rt,_(C,{class:"popup_select",value:t.value.差分特效,"onUpdate:value":e[9]||(e[9]=o=>t.value.差分特效=o),options:K(m)},{default:M(()=>[dt]),_:1},8,["value","options"])])]),s("div",_t,[vt,s("div",mt,[ht,_(C,{class:"popup_select",value:t.value.立ち絵2,"onUpdate:value":e[10]||(e[10]=o=>t.value.立ち絵2=o),options:K(d),onChange:e[11]||(e[11]=o=>Q("十六夜差分"))},{default:M(()=>[gt]),_:1},8,["value","options"])]),s("div",ft,[wt,_(C,{class:"popup_select",value:t.value.十六夜差分,"onUpdate:value":e[12]||(e[12]=o=>t.value.十六夜差分=o),options:ne.value},{default:M(()=>[bt]),_:1},8,["value","options"])]),s("div",yt,[St,_(C,{class:"popup_select",value:t.value.主角特效,"onUpdate:value":e[13]||(e[13]=o=>t.value.主角特效=o),options:K(m)},{default:M(()=>[xt]),_:1},8,["value","options"])])]),s("div",Ct,[kt,_(pe,{class:"popup_input",value:t.value.SE,"onUpdate:value":e[14]||(e[14]=o=>t.value.SE=o)},null,8,["value"]),_(C,{class:"popup_select",value:t.value.SE,"onUpdate:value":e[15]||(e[15]=o=>t.value.SE=o),options:K(x)},{default:M(()=>[It]),_:1},8,["value","options"])]),s("div",Ut,[$t,_(pe,{class:"popup_input",value:t.value.Voice,"onUpdate:value":e[16]||(e[16]=o=>t.value.Voice=o)},null,8,["value"])]),s("div",Lt,[Bt,s("div",Et,[_(re,{class:"popup_input -textarea",value:t.value.和訳,"onUpdate:value":e[17]||(e[17]=o=>t.value.和訳=o)},null,8,["value"]),Tt])])],512),[[z,!t.value.is_showtime]]),s("div",Mt,[Gt,_(re,{class:"popup_input -textarea -col-3",value:t.value.備註,"onUpdate:value":e[18]||(e[18]=o=>t.value.備註=o)},null,8,["value"])])]),s("footer",{class:"popup_footer"},[s("button",{class:"popup_submit",onClick:le,title:"保存"},"保存"),Ot])])])),[[n,c.open]])}}},Pt=ee(Rt,[["__scopeId","data-v-140e0473"]]);export{Pt as E,Nt as I,At as M,He as u};

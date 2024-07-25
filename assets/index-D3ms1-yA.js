import{_ as R,o as s,c,a as v,u as oe,b as F,F as T,t as U,d as e,e as _,w,v as E,n as P,f as W,s as I,r as D,g as x,h as $,i as be,j as le,k as we,l as M,m as A,p as H,q as Le,x as te,y as K,z as me,A as Te,B as Ee,C as z,D as _e,E as De,G as Me,H as Ue}from"./index-DfzLbYST.js";import{I as ge,a as Ve,D as ze}from"./IconDelete-BS09BGNd.js";import{u as Y,M as Pe,I as Ae,E as He}from"./EditPopup-Dvd2N35J.js";import{D as je,S as Oe}from"./Dialog-DwTwHXyI.js";import{W as Ge}from"./Wrap-D-JDjcYt.js";import{A as Re}from"./Aspect-CgH8J6_2.js";import{I as fe,S as Fe,U as qe}from"./UiItem-ayuj81nG.js";import{R as We}from"./Range-C1v_b5Gj.js";import{_ as ie}from"./Audio-BN_ZPNUZ.js";import{_ as X}from"./Image-_EoX3Cn8.js";/* empty css                                                             */const Ke={name:"RiShiningFill"},Je={xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",viewBox:"0 0 24 24"},Qe=v("path",{fill:"currentColor",d:"M1 11c5.523 0 10-4.477 10-10h2c0 5.523 4.477 10 10 10v2c-5.523 0-10 4.477-10 10h-2c0-5.523-4.477-10-10-10z"},null,-1),Xe=[Qe];function Ye(t,i,a,r,g,m){return s(),c("svg",Je,Xe)}const Ze=R(Ke,[["render",Ye]]),et={name:"RiShiningLine"},tt={xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",viewBox:"0 0 24 24"},at=v("path",{fill:"currentColor",d:"M1 11c5.523 0 10-4.477 10-10h2c0 5.523 4.477 10 10 10v2c-5.523 0-10 4.477-10 10h-2c0-5.523-4.477-10-10-10zm4.803 1A12.044 12.044 0 0 1 12 18.197A12.043 12.043 0 0 1 18.197 12A12.044 12.044 0 0 1 12 5.803A12.044 12.044 0 0 1 5.803 12"},null,-1),nt=[at];function st(t,i,a,r,g,m){return s(),c("svg",tt,nt)}const ot=R(et,[["render",st]]),lt={viewBox:"0 0 24 24",width:"1.2em",height:"1.2em"},it=v("path",{fill:"currentColor",d:"M14 6H4c-.55 0-1 .45-1 1s.45 1 1 1h10c.55 0 1-.45 1-1s-.45-1-1-1m0 4H4c-.55 0-1 .45-1 1s.45 1 1 1h10c.55 0 1-.45 1-1s-.45-1-1-1M4 16h6c.55 0 1-.45 1-1s-.45-1-1-1H4c-.55 0-1 .45-1 1s.45 1 1 1M19 6c-1.1 0-2 .9-2 2v6.18c-.31-.11-.65-.18-1-.18c-1.84 0-3.28 1.64-2.95 3.54c.21 1.21 1.2 2.2 2.41 2.41c1.9.33 3.54-1.11 3.54-2.95V8h2c.55 0 1-.45 1-1s-.45-1-1-1z"},null,-1),ct=[it];function ut(t,i){return s(),c("svg",lt,[...ct])}const rt={name:"ic-round-queue-music",render:ut},dt={viewBox:"0 0 24 24",width:"1.2em",height:"1.2em"},pt=v("path",{fill:"currentColor",d:"M12 15c1.66 0 2.99-1.34 2.99-3L15 6c0-1.66-1.34-3-3-3S9 4.34 9 6v6c0 1.66 1.34 3 3 3m5.3-3c0 3-2.54 5.1-5.3 5.1S6.7 15 6.7 12H5c0 3.42 2.72 6.23 6 6.72V22h2v-3.28c3.28-.48 6-3.3 6-6.72z"},null,-1),vt=[pt];function mt(t,i){return s(),c("svg",dt,[...vt])}const _t={name:"ic-sharp-keyboard-voice",render:mt},gt={class:"contents"},ft={class:"preview_log_head"},yt={class:"preview_log_title"},ht={class:"preview_log_subtitle !text-base"},bt={class:"preview_log_content"},wt={class:"preview_log_foot"},$t={class:"preview_log_head"},xt={class:"shrink-0 font-medium"},St={class:"preview_log_subtitle text-xs leading-none"},kt={class:"h-1em"},Bt={class:"h-1em"},Ct={class:"preview_log_content"},It={class:"preview_log_foot"},Nt={class:"preview_log_mark_1"},Lt={class:"preview_log_mark_1"},Tt={class:"preview_log_mark_1"},Et={__name:"LogItem",props:{id:{type:[Number,String],default:0},log:{type:[Object],default:()=>({})}},emits:["update:id","edit","delete","stop"],setup(t,{emit:i}){const a=i,r=oe(),{getCharacter:g,getSprite:m}=r,h=F(),{getShowName:d}=h;return(f,o)=>(s(),c("article",{class:P(["preview_log",{"-active":t.log.id===t.id}])},[t.log.is_showtime?(s(),c(T,{key:0},[v("div",gt,[v("header",ft,[v("h6",yt,U(t.log.人物),1),v("p",ht,U(t.log.show_time),1)]),v("p",bt,U(e(d)(t.log.show_time,t.log.show_name)),1)]),v("footer",wt,[v("button",{class:"preview_button ml-auto",onClick:o[0]||(o[0]=l=>a("edit")),title:"編集"},[_(fe,{class:"text-[0.9em]"})]),v("button",{class:"preview_button ml-1",onClick:o[1]||(o[1]=l=>a("delete")),title:"削除"},[_(ge,{class:"text-[0.9em]"})])])],64)):(s(),c(T,{key:1},[v("button",{class:"group contents",onClick:o[2]||(o[2]=l=>{a("update:id",t.log.id),a("stop")})},[v("header",$t,[v("h6",xt,U(e(g)(t.log.人物).name),1),v("p",St,[v("span",kt,U(e(g)(t.log.顯示角色).name)+" / "+U(e(m)(t.log.顯示角色,t.log.角色差分).name),1),v("span",Bt,U(e(g)(t.log.立ち絵2).name)+" / "+U(e(m)(t.log.立ち絵2,t.log.十六夜差分).name),1)])]),v("p",Ct,U(t.log.和訳),1)]),v("footer",It,[w(v("span",Nt,"R",512),[[E,t.log.is_replay]]),w(v("span",Lt,"U",512),[[E,t.log.is_unknown]]),w(v("span",Tt,"S",512),[[E,t.log.is_monolog]]),w(_(Ze,{class:"preview_log_mark_2"},null,512),[[E,t.log.差分特效!==""]]),w(_(ot,{class:"preview_log_mark_2"},null,512),[[E,t.log.主角特效!==""]]),w(_(e(rt),{class:"preview_log_mark_2"},null,512),[[E,t.log.SE!==""]]),w(_(e(_t),{class:"preview_log_mark_2"},null,512),[[E,t.log.Voice!==""]]),v("button",{class:"preview_button ml-auto",onClick:o[3]||(o[3]=l=>a("edit")),title:"編集"},[_(fe,{class:"text-[0.9em]"})]),v("button",{class:"preview_button ml-1",onClick:o[4]||(o[4]=l=>a("delete")),title:"削除"},[_(ge,{class:"text-[0.9em]"})])])],64))],2))}},Dt=R(Et,[["__scopeId","data-v-d438dc24"]]),Mt={viewBox:"0 0 24 24",width:"1.2em",height:"1.2em"},Ut=v("path",{fill:"currentColor",d:"M6 6h12v12H6z"},null,-1),Vt=[Ut];function zt(t,i){return s(),c("svg",Mt,[...Vt])}const Pt={name:"ic-baseline-stop",render:zt},At={viewBox:"0 0 24 24",width:"1.2em",height:"1.2em"},Ht=v("path",{fill:"currentColor",d:"M8 5v14l11-7z"},null,-1),jt=[Ht];function Ot(t,i){return s(),c("svg",At,[...jt])}const Gt={name:"ic-baseline-play-arrow",render:Ot},Rt={viewBox:"0 0 24 24",width:"1.2em",height:"1.2em"},Ft=v("path",{fill:"currentColor",d:"M6 6h2v12H6zm3.5 6l8.5 6V6z"},null,-1),qt=[Ft];function Wt(t,i){return s(),c("svg",Rt,[...qt])}const ye={name:"ic-baseline-skip-previous",render:Wt},Kt={viewBox:"0 0 24 24",width:"1.2em",height:"1.2em"},Jt=v("path",{fill:"currentColor",d:"M7 14H5v5h5v-2H7zm-2-4h2V7h3V5H5zm12 7h-3v2h5v-5h-2zM14 5v2h3v3h2V5z"},null,-1),Qt=[Jt];function Xt(t,i){return s(),c("svg",Kt,[...Qt])}const Yt={name:"ic-baseline-fullscreen",render:Xt},Zt={viewBox:"0 0 24 24",width:"1.2em",height:"1.2em"},ea=v("path",{fill:"currentColor",d:"M5 16h3v3h2v-5H5zm3-8H5v2h5V5H8zm6 11h2v-3h3v-2h-5zm2-11V5h-2v5h5V8z"},null,-1),ta=[ea];function aa(t,i){return s(),c("svg",Zt,[...ta])}const na={name:"ic-baseline-fullscreen-exit",render:aa},sa={class:"control_outer group"},oa={class:"control"},la=["disabled"],ia=["disabled"],ca={__name:"Control",props:{index:{type:[Number,String],default:0},length:{type:[Number],default:0},play:{type:[Boolean],default:!1},typing:{type:[Boolean],default:!1},black:{type:[Boolean],default:!1},voicing:{type:[Boolean],default:!1},animating:{type:[Boolean],default:!1}},emits:["update:index","update:play","target","stop"],setup(t,{emit:i}){const a=t,r=i,g=W(),{fullscreen:m,fontIntervals:h}=I(g),d=D(0);x(d,l=>r("update:index",l)),x(()=>a.index,l=>d.value=l,{immediate:!0});const f=$(()=>a.play&&!a.black&&!a.voicing&&!a.typing&&!a.animating),o=()=>{const l=d.value;f&&setTimeout(()=>{const n=d.value>=a.length&&!a.black;a.index===l&&f.value&&!n&&(d.value+=1),n&&r("update:play",!1),o()},h.value.sentence)};return x(()=>a.play,o),x(()=>a.typing,o),x(()=>a.voicing,o),x(()=>a.animating,o),(l,n)=>(s(),c("div",sa,[v("div",oa,[v("button",{class:"preview_button",onClick:n[0]||(n[0]=p=>{d.value-=1,r("stop")}),disabled:d.value===0,title:"前へ"},[_(e(ye))],8,la),v("button",{class:"preview_button",onClick:n[1]||(n[1]=p=>r("update:play",!t.play)),title:"プレイ"},[w(_(e(Gt),null,null,512),[[E,!t.play]]),w(_(e(Pt),null,null,512),[[E,t.play]])]),v("button",{class:"preview_button",onClick:n[2]||(n[2]=p=>{d.value+=1,r("stop")}),disabled:d.value===t.length,title:"次へ"},[_(e(ye),{class:"-scale-x-100"})],8,ia),_(We,{class:"mx-3 grow !bg-dark-text",value:d.value,"onUpdate:value":n[3]||(n[3]=p=>d.value=p),onChange:n[4]||(n[4]=p=>r("stop")),min:0,max:t.length,step:1,button:!1},null,8,["value","max"]),v("button",{class:"preview_button",onClick:n[5]||(n[5]=p=>m.value=!e(m)),title:"全画面モード"},[w(_(e(Yt),null,null,512),[[E,!e(m)]]),w(_(e(na),null,null,512),[[E,e(m)]])])])]))}},ua=R(ca,[["__scopeId","data-v-e4d50d6f"]]),ra={__name:"Comment",props:{data:{type:[Object],default:()=>({})},ui:{type:[Object],default:()=>({})},play:{type:[Boolean],default:!1},typing:{type:[Boolean],default:!1},black:{type:[Boolean],default:!1}},emits:["update:typing"],setup(t,{emit:i}){const a=t,r=i,g=W(),{fontIntervals:m}=I(g),h=be(),{dialogType:d}=h,{getDialogStyle:f}=le(),o=D({}),l=D(0),n=$(()=>o.value.和訳??""),p=$(()=>a.play?n.value.slice(0,l.value):n.value),b=$(()=>f(a.ui)),C=()=>{n.value&&(r("update:typing",!0),l.value=0)},S=()=>{if(!a.play||a.black)return;if(l.value===n.value.length)return r("update:typing",!1);setTimeout(()=>{a.typing?l.value+=1:l.value=n.value.length},m.value.word)};return x(()=>a.data,k=>{k.is_showtime||(o.value=k)}),x(o,C),x(n,S),x(p,S),x(l,S),x(()=>a.black,k=>{k||S()}),(k,B)=>(s(),c("article",{class:"preview_dialog",style:we(b.value)},[_(je,{value:p.value,type:e(d)(t.data)},null,8,["value","type"])],4))}},da=R(ra,[["__scopeId","data-v-7dd70b74"]]),pa={class:"invisible",id:"Bgm"},va={__name:"BGM",props:{contents:{type:[Array],default:()=>[]},play:{type:[Boolean],default:!1},pause:{type:[Boolean],default:!1}},setup(t){const i=t,a=W(),{audioVolume:r}=I(a),g=F(),{getHistoryList:m}=g,{bgmList:h}=I(g),d=$(()=>{var n;return(n=m(i.contents,"BGM"))==null?void 0:n.show_name}),f=$(()=>i.play&&!i.pause),o=D({}),l=(n,p)=>{n&&(p&&f.value?n.play():n.pause())};return x(d,(n,p)=>{l(o.value[p],!1),l(o.value[n],!0)}),x(f,()=>l(o.value[d.value],!0)),(n,p)=>(s(),c("div",pa,[(s(!0),c(T,null,M(e(h),b=>(s(),A(ie,{src:b.path,volume:e(r).bgm,loop:!0,ref_for:!0,ref:C=>o.value[b.id]=C},null,8,["src","volume"]))),256))]))}},ma={class:"invisible",id:"Se"},_a={__name:"SE",props:{data:{type:[Object],default:()=>({})},play:{type:[Boolean],default:!1},pause:{type:[Boolean],default:!1}},setup(t){const i=t,a=W(),{audioVolume:r}=I(a),g=F(),{getSeByName:m}=g,{seList:h}=I(g),d=$(()=>i.data.SE),f=$(()=>i.play&&!i.pause),o=D({}),l=(n,p)=>{n&&(p&&f.value?n.play():n.pause())};return x(d,(n,p)=>l(o.value[n],!0)),x(f,()=>l(o.value[d.value],!0)),x(()=>i.data,()=>{var p,b;const n=((p=m("text_advancing"))==null?void 0:p.id)??"";l(o.value[n],!((b=i.data)!=null&&b.is_showtime)&&f.value)}),(n,p)=>(s(),c("div",ma,[(s(!0),c(T,null,M(e(h),b=>(s(),A(ie,{src:b.path,volume:e(r).se,ref_for:!0,ref:C=>o.value[b.id]=C},null,8,["src","volume"]))),256))]))}},ga={class:"invisible",id:"Se"},fa={__name:"Voice",props:{data:{type:[Object],default:()=>({})},play:{type:[Boolean],default:!1},pause:{type:[Boolean],default:!1},voicing:{type:[Boolean],default:!1}},emits:["update:voicing"],setup(t,{emit:i}){const a=t,r=i,g=W(),{audioVolume:m}=I(g),h=F(),{getSeByName:d}=h,{voiceList:f}=I(h),o=$(()=>a.data.Voice),l=$(()=>a.play&&!a.pause),n=D({}),p=C=>r("update:voicing",!1),b=(C,S)=>{C&&(S&&l.value?(r("update:voicing",!0),C.play()):C.pause())};return x(o,C=>b(n.value[C],!0)),x(l,()=>b(n.value[o.value],!0)),x(()=>a.data,()=>{var S,k;const C=((S=d("text_advancing"))==null?void 0:S.id)??"";b(n.value[C],!((k=a.data)!=null&&k.is_showtime)&&l.value)}),(C,S)=>(s(),c("div",ga,[(s(!0),c(T,null,M(e(f),k=>(s(),A(ie,{src:k.path,volume:e(m).voice,onEnded:p,ref_for:!0,ref:B=>n.value[k.id]=B},null,8,["src","volume"]))),256))]))}},ya={class:"-ui z-10",id:"Se"},ha=["src"],ba={__name:"Video",props:{data:{type:[Object],default:()=>({})},play:{type:[Boolean],default:!1},pause:{type:[Boolean],default:!1},animating:{type:[Boolean],default:!1}},emits:["update:pause","update:animating"],setup(t,{emit:i}){const a=t,r=i,g=W(),{audioVolume:m}=I(g),h=F(),{videoList:d}=I(h),{getUrl:f}=Le(),o=$(()=>a.data.show_time==="動畫"),l=$(()=>a.data.show_name),n=$(()=>m.value.bgm),p=D({}),b=S=>{r("update:animating",!1),r("update:pause",!1)},C=(S,k)=>{S&&(k&&a.play&&o.value?(r("update:animating",!0),r("update:pause",!0),S.volume=n.value,S.currentTime=0,S.play()):(S.currentTime=0,S.pause()))};return x(l,(S,k)=>{S&&C(p.value[S],!0)}),x(()=>a.play,()=>C(p.value[l.value],!0)),(S,k)=>{const B=H("opacity");return w((s(),c("div",ya,[(s(!0),c(T,null,M(e(d),N=>w((s(),c("video",{class:"-ui",src:e(f)(N.path),onEnded:b,ref_for:!0,ref:j=>p.value[N.id]=j},null,40,ha)),[[B,N.id===l.value]])),256))],512)),[[E,o.value]])}}},wa={class:"-ui bg-black",id:"Background"},$a={__name:"Background",props:{contents:{type:[Array],default:()=>[]}},setup(t){const i=t,a=Y(),{playEase:r}=I(a),g=F(),{getHistoryList:m}=g,{backgroundList:h}=I(g),d=$(()=>{var f;return(f=m(i.contents,"BG"))==null?void 0:f.show_name});return(f,o)=>{const l=H("opacity");return s(),c("div",wa,[(s(!0),c(T,null,M(e(h),n=>w((s(),A(X,{class:P(["-ui",e(r)]),src:n.path,alt:n.name},null,8,["src","alt","class"])),[[l,n.id===d.value]])),256))])}}},xa={class:"-ui",id:"Effect"},Sa={__name:"Effect",props:{name:{type:[String],default:""},data:{type:[Object],default:()=>({})}},setup(t){const i=Y(),{playEase:a}=I(i),r=F(),{effectList:g}=I(r);return(m,h)=>{const d=H("opacity");return s(),c("div",xa,[(s(!0),c(T,null,M(e(g),f=>w((s(),A(X,{class:P(["-ui",e(a)]),src:f.path,alt:f.name},null,8,["src","alt","class"])),[[d,f.id===t.data[t.name]]])),256))])}}},ka=["data-name"],Ba={__name:"Sprite",props:{data:{type:[Object],default:()=>({})},contents:{type:[Array],default:()=>[]},ui:{type:[Object],default:()=>({})},num:{type:[Number],default:1}},setup(t){const i=t,a=oe(),{getSpriteNow:r}=a,{characterList:g}=I(a),m=Y(),{logCGMode:h,playEase:d}=I(m);te();const{getMask:f,geSpritePosition:o,geSpriteSize:l}=le(),n={1:{name:"顯示角色",sprite:"角色差分",effect:"差分特效"},2:{name:"立ち絵2",sprite:"十六夜差分",effect:"主角特效"}},p=$(()=>n[i.num]??{}),b=$(()=>h.value?"人物":p.value.name),C=$(()=>r(i.contents,i.data[p.value.name],b.value,p.value.sprite)),S=$(()=>i.num===2?i.ui.sprite_number===2:!0),k=$(()=>"sprite_"+i.num);return $(()=>f(i.ui[k.value].mask)),$(()=>o(i.ui[k.value])),$(()=>l(i.ui[k.value])),(B,N)=>{const j=H("visible"),q=H("opacity");return w((s(),A(Fe,{id:"Sprite",data:t.ui[k.value],class:P(e(d))},{default:K(()=>[(s(!0),c(T,null,M(e(g),O=>w((s(),c("div",{key:O.id,class:P(["-ui",e(d)]),"data-name":O.name},[(s(!0),c(T,null,M(O.sprite??[],G=>w((s(),A(X,{key:G.id,class:"sprite",src:G.path,alt:G.name},null,8,["src","alt"])),[[j,G.id===C.value]])),128))],10,ka)),[[q,O.id===t.data[b.value]]])),128)),_(Sa,{name:p.value.effect,data:t.data},null,8,["name","data"])]),_:1},8,["data","class"])),[[q,S.value]])}}},he=R(Ba,[["__scopeId","data-v-51ccc7c1"]]),Ca={class:"-ui bg-black",id:"CG"},Ia={__name:"CG",props:{contents:{type:[Array],default:()=>[]}},setup(t){const i=t,a=F(),{getHistoryList:r}=a,{cgList:g}=I(a),m=$(()=>{var h;return(h=r(i.contents,"CG"))==null?void 0:h.show_name});return(h,d)=>{const f=H("opacity");return s(),c("div",Ca,[(s(!0),c(T,null,M(e(g),o=>w((s(),A(X,{class:"-ui !object-cover",src:o.path,alt:o.name},null,8,["src","alt"])),[[f,o.id===m.value]])),256))])}}},Na={class:"-ui",id:"UI"},La={__name:"UI",props:{data:{type:[Object],default:()=>({})},contents:{type:[Array],default:()=>[]},ui:{type:[Number,String],default:()=>""}},setup(t){const i=Y(),{nameTag1Show:a,nameTag2Show:r,playEase:g}=I(i),m=F(),{uiList:h}=I(m);return te(),(d,f)=>{const o=H("opacity");return s(),c("div",Na,[(s(!0),c(T,null,M(e(h),l=>w((s(),A(qe,{class:P(["-ui",e(g)]),data:l,nameTag1Show:e(a),nameTag2Show:e(r)},null,8,["data","nameTag1Show","nameTag2Show","class"])),[[o,l.id===t.ui]])),256)),w(v("div",{class:P(["-ui -replay",e(g)])},null,2),[[o,t.data.is_replay]])])}}},Ta=R(La,[["__scopeId","data-v-759e1103"]]),Ea={class:"-ui",id:"NameTag"},Da={class:"-ui"},Ma={class:"name_tag -font"},Ua={class:"-ui"},Va={class:"name_tag -font"},za={__name:"NameTag",props:{data:{type:[Object],default:()=>({})},ui:{type:[Object],default:()=>({})}},setup(t){const i=t,a=W(),{fontFamily:r,fontWeight:g}=I(a),m=oe(),{getCharacter:h}=m,{characterList:d,characterUnknown:f}=I(m),o=Y(),{isNameRight:l,isNameShow:n}=I(o);te();const{getNameTagStyle:p}=le(),b=$(()=>h(i.data.人物)),C=$(()=>{const S=l.value?"name_tag_2":"name_tag_1";return p(i.ui[S])});return(S,k)=>{const B=H("opacity");return s(),c("div",Ea,[w((s(),c("div",{class:P(["absolute",[e(r).nameTag,e(g).nameTag]]),style:we(C.value)},[w((s(),c("div",Da,[(s(!0),c(T,null,M(e(d),N=>w((s(),c("div",{key:N.id,class:"-ui"},[w((s(),c("p",Ma,[me(U(N.name),1)])),[[B,!N.image_name]]),w(_(X,{class:"name_tag",src:N.image_name,alt:N.name},null,8,["src","alt"]),[[B,N.image_name]])])),[[B,N.id===b.value.id]])),128))])),[[B,!t.data.is_unknown]]),w((s(),c("div",Ua,[w((s(),c("p",Va,[me(U(e(f).name),1)])),[[B,!e(f).image_name]]),_(X,{class:"name_tag",src:e(f).image_name,alt:e(f).name},null,8,["src","alt"])])),[[B,t.data.is_unknown]])],6)),[[B,e(n)]])])}}},Pa=R(za,[["__scopeId","data-v-374d9ef3"]]),Aa=3e3,Ha={__name:"Black",props:{index:{type:[Number,String],default:0},length:{type:[Number],default:0},data:{type:[Object],default:()=>({})},play:{type:[Boolean],default:!1},pause:{type:[Boolean],default:!1},black:{type:[Boolean],default:!1}},emits:["update:index","update:pause","update:black"],setup(t,{emit:i}){const a=t,r=i,g=$(()=>a.data.show_time==="暗場"),m=D({}),h=$(()=>(m.value.show_name??"").split(",")),d=$(()=>!h.value.includes("前")),f=$(()=>!h.value.includes("後")),o=$(()=>g.value&&!h.value.includes("續")),l=D(!1),n=D(!1),p=()=>{if(g.value){if(m.value={...a.data},n.value=a.play&&d.value,l.value=!0,r("update:black",!0),!a.play)return;setTimeout(()=>{a.index>=a.length||r("update:index",a.index+1)},Aa)}else n.value=a.play&&f.value,l.value=!1,r("update:black",!1)};return x(g,p),x(()=>a.play,p),x(o,b=>r("update:pause",b)),(b,C)=>(s(),c("div",{class:P(["-ui z-20 bg-black",{"opacity-0":!l.value,"duration-1000":n.value}]),id:"Black"},null,2))}},ja={class:"preview_title"},Oa=["value"],Ga=["onDragstart","onDragend","data-id"],Ra={class:"contents"},Fa={class:"-ui"},qa={__name:"index",setup(t){const i=Te(),a=W(),{fullscreen:r}=I(a),g=be(),{chapterIndex:m,chapterNames:h,chapterData:d}=I(g),f=Y(),{logId:o,logIndex:l,logData:n,logContents:p,logHistory:b,logCGMode:C,logUIId:S,logUI:k,logPlay:B,logPause:N,logTyping:j,logBlack:q,logVoicing:O,logAnimating:G,playEase:$e}=I(f),{getClientRect:xe}=te(),{dragMove:Se,dropMove:ke}=Ue(),ae=()=>{B.value=!1,j.value=!1};x(m,ae);const Be=$(()=>d.value.some(L=>L.dragging)),ce=(L,u,Q)=>{Q&&Se(L,{index:u}),d.value[u].dragging=Q},Ce=(L,u)=>ke(d.value,L.index,u),ue=D({}),J=(L=!0)=>{Me(()=>{const u=ue.value[o.value];if(!u)return;const{height:Q,top:se}=xe(u);u.parentElement.scrollBy({top:se-Q,left:0,behavior:L?"smooth":"auto"})})};x(o,()=>{B.value&&J()}),x(m,()=>J(!1)),x(()=>i.name,L=>{L==="Preview"&&J(!1)});const re=D(null);x(r,L=>{window.api?window.api.fullscreen(L):L?re.value.requestFullscreen():document.exitFullscreen()});const de=D(null),pe=L=>de.value=L,ne=D(!1),ee=Ee({id:0,type:""}),ve=(L,{type:u})=>{ee.id=L,ee.type=u??"",ne.value=!0},Ie=L=>d.value.push(L),Ne=L=>{o.value=L,setTimeout(()=>J(),100)};return(L,u)=>{const Q=H("opacity"),se=H("visible");return s(),A(Ge,{class:"flex-row-reverse",main:"!p-0",side:"!p-0 border-4 border-transparent"},{side_head:K(()=>[_(Pe,{positions:de.value,onClear:pe,onUse:u[0]||(u[0]=y=>ve("add",y)),onlyAdd:!0},null,8,["positions"]),v("section",ja,[_(Oe,{class:"preview_title_select",value:e(m),"onUpdate:value":u[1]||(u[1]=y=>z(m)?m.value=y:null)},{default:K(()=>[(s(!0),c(T,null,M(e(h),(y,Z)=>(s(),c("option",{value:Z},U(y),9,Oa))),256))]),_:1},8,["value"]),w(v("button",{class:"preview_button",onClick:u[2]||(u[2]=y=>J()),title:"今のセリフ画面へ"},[_(Ae)],512),[[E,!e(r)]]),v("button",{class:"preview_button",onClick:pe,title:"新規"},[_(e(Ve))])])]),side:K(()=>[(s(!0),c(T,null,M(e(d),(y,Z)=>w((s(),c("div",{key:y.id,class:P(["relative",{"-dragging":y.dragging}]),draggable:!0,onDragstart:V=>ce(V,Z,!0),onDragend:V=>ce(V,Z,!1),onDrag:u[4]||(u[4]=_e(()=>{},["prevent"])),onDrop:u[5]||(u[5]=_e(()=>{},["prevent"])),"data-id":y.id,ref_for:!0,ref:V=>ue.value[y.id]=V},[_(Dt,{id:e(o),"onUpdate:id":u[3]||(u[3]=V=>z(o)?o.value=V:null),log:y,onEdit:V=>ve(y.id,{}),onDelete:V=>y.is_delete=!0,onStop:ae},null,8,["id","log","onEdit","onDelete"]),_(ze,{class:"preview_dragline !h-1 !text-secondary/50",onDrop:V=>Ce(V,Z+1),dragging:Be.value},null,8,["onDrop","dragging"])],42,Ga)),[[E,!y.is_delete]])),128))]),default:K(()=>[v("div",{class:"preview",onKeydown:u[16]||(u[16]=De(y=>B.value=!e(B),["space"])),tabindex:"0",ref_key:"preview",ref:re},[_(Re,{box:"lattice"},{outer:K(()=>[_(ua,{index:e(l),"onUpdate:index":u[13]||(u[13]=y=>z(l)?l.value=y:null),play:e(B),"onUpdate:play":u[14]||(u[14]=y=>z(B)?B.value=y:null),typing:e(j),black:e(q),voicing:e(O),animating:e(G),length:e(p).length-1,onTarget:u[15]||(u[15]=y=>J()),onStop:ae},null,8,["index","play","typing","black","voicing","animating","length"])]),default:K(()=>[v("div",Ra,[_(va,{contents:e(b),play:e(B),pause:e(N)},null,8,["contents","play","pause"]),_(_a,{data:e(n),play:e(B),pause:e(N)},null,8,["data","play","pause"]),_(fa,{data:e(n),play:e(B),pause:e(N),voicing:e(O),"onUpdate:voicing":u[6]||(u[6]=y=>z(O)?O.value=y:null)},null,8,["data","play","pause","voicing"])]),w((s(),c("div",Fa,[_($a,{contents:e(b)},null,8,["contents"]),_(he,{data:e(n),contents:e(b),ui:e(k),num:1},null,8,["data","contents","ui"]),_(he,{data:e(n),contents:e(b),ui:e(k),num:2},null,8,["data","contents","ui"]),w(_(Ia,{contents:e(b),class:P(e($e))},null,8,["contents","class"]),[[Q,e(C)]]),_(Ta,{data:e(n),contents:e(b),ui:e(S)},null,8,["data","contents","ui"])])),[[se,e(d).length]]),_(Pa,{data:e(n),ui:e(k)},null,8,["data","ui"]),_(da,{data:e(n),ui:e(k),play:e(B),typing:e(j),"onUpdate:typing":u[7]||(u[7]=y=>z(j)?j.value=y:null),black:e(q)},null,8,["data","ui","play","typing","black"]),_(Ha,{index:e(l),"onUpdate:index":u[8]||(u[8]=y=>z(l)?l.value=y:null),data:e(n),play:e(B),pause:e(N),"onUpdate:pause":u[9]||(u[9]=y=>z(N)?N.value=y:null),black:e(q),"onUpdate:black":u[10]||(u[10]=y=>z(q)?q.value=y:null),length:e(p).length-1},null,8,["index","data","play","pause","black","length"]),_(ba,{data:e(n),play:e(B),pause:e(N),"onUpdate:pause":u[11]||(u[11]=y=>z(N)?N.value=y:null),animating:e(G),"onUpdate:animating":u[12]||(u[12]=y=>z(G)?G.value=y:null)},null,8,["data","play","pause","animating"])]),_:1})],544),_(He,{open:ne.value,"onUpdate:open":u[17]||(u[17]=y=>ne.value=y),id:ee.id,type:ee.type,onAdd:Ie,onTarget:Ne},null,8,["open","id","type"])]),_:1})}}},sn=R(qa,[["__scopeId","data-v-47b7c956"]]);export{sn as default};

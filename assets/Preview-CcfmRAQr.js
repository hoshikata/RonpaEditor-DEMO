import{W as h}from"./Wrap-rGT7M0P_.js";import{_ as m,u as k,a as x,s as y,b,c as S,o as g,d as H,e as s,n as u,f as e,g as T,w as $,h as r}from"./index-DffRqJ4T.js";const B={class:"dialog_wrap"},C=["data-content","innerHTML"],L={__name:"Dialog",props:{value:{type:[String],default:`やはりわたしなんて、[天文学]以外はド素人ですね。
これからは頑張って常識を身に着けようとと思います。`},type:{type:[String],default:""}},setup(o){k(t=>({"22510eba":e(n).lineHeight,"0cee283e":e(n).letterSpace,"02862494":e(n).fontLength,a5150ff4:e(c).keyword.dark,c9768924:e(c).monolog.dark,"256580e0":e(c).announce.dark}));const a=o,d=x(),{fontFamily:f,fontWeight:v,fontStyle:n}=y(d),{colors:c}=b(),p=S(()=>{const t=new RegExp("((\\[.*?\\])|(\\[.+))","gs"),l=_("keyword"),w=a.value.replace(t,`<span class="${l}" data-content="$1">$1</span>`).replace(/\[|\]/g,"");return{value:a.value.replace(/\[|\]/g,""),html:w}}),_=t=>({keyword:"text-keyword stroke",monolog:"text-monolog stroke",announce:"text-announce stroke"})[t]??"text-white";return(t,l)=>(g(),H("div",{class:u(["dialog",[e(f).dialog,e(v).dialog]])},[s("div",B,[s("pre",{class:u(_(o.type)),"data-content":p.value.value,innerHTML:p.value.html},null,10,C)])],2))}},i=m(L,[["__scopeId","data-v-fbd651f9"]]),R={class:"preview_container"},V={class:"preview"},W={class:"preview_dialog"},D={__name:"Preview",setup(o){return(a,d)=>(g(),T(h,{class:"flex-row-reverse",main:"!p-0"},{default:$(()=>[s("div",R,[s("div",V,[s("div",W,[r(i,{class:"mb-2cw",type:"announce"}),r(i,{class:"mb-2cw",type:"monolog"}),r(i)])])])]),_:1}))}},P=m(D,[["__scopeId","data-v-4230d0bc"]]);export{P as default};

import{_ as h}from"./Image-DvWA8E0Z.js";import{_ as p,u as g,i as t,q as f,o as i,c as m,w as u,e as x,j as S,A as y,t as b}from"./index-DBHXhL4u.js";const A={class:"avatar"},N={__name:"Avatar",props:{name:{type:[Number,String],default:""}},setup(s){const c=s,v=g(),{getCharacterByName:_}=v,e=t(()=>_(c.name)??c.name),n=t(()=>String(c.name??"").replaceAll(/\s|=|＝|\.|．|‧|・/g,`
`)),r=t(()=>e.value.image_head||e.value.default_head),d=t(()=>{const o=n.value.split(`
`).reduce((l,a)=>Math.max(l,a.length),3);return{color:e.value.name_text,"background-color":e.value.name_bg,"font-size":70/o+"cqw"}});return(o,l)=>{const a=f("visible");return i(),m("div",A,[u(x(h,{src:r.value,alt:s.name},null,8,["src","alt"]),[[a,r.value]]),u((i(),m("div",{class:"avatar_text",style:S(d.value)},[y(b(n.value),1)],4)),[[a,!r.value]])])}}},B=p(N,[["__scopeId","data-v-806a736c"]]);export{B as A};

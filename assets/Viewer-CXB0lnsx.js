import{a as k}from"./IconDelete-Dof_8FLv.js";import{U as x}from"./Upload-CtYgojjJ.js";import{_ as B}from"./Image-BU5xmaAy.js";import{F as U}from"./Fancy-DZGFRDNn.js";import{R as $}from"./Resource-B8bRS2ar.js";import{b as N,s as S,j as V,h as b,o as u,c as f,a as d,F as w,l as A,d as e,e as m,y as P,m as j}from"./index-BexsKry7.js";import"./Aspect-BdGFMq-_.js";import"./useMouse-C_q4Rx5p.js";import"./round-drag-indicator-B44KvNBL.js";import"./Audio-ob4D50xe.js";const C={class:"resource_container"},E={class:"resource"},L={class:"resource_footer"},T={class:"resource_plus",title:"新規"},Y={__name:"Viewer",props:{name:{type:[String],default:""}},setup(a){const v=a,D=N(),{imagesResource:n}=S(D),{delItem:p,uploadItem:c,getDrag:y,dragItem:F,dropItem:h,fancy:r,setFancy:R,changeFancy:i}=V(),I=b(()=>y(n.value[v.name]));return(q,t)=>{var g;return u(),f("div",C,[d("div",E,[(u(!0),f(w,null,A(e(n)[a.name]??[],(o,l)=>(u(),j($,{key:a.name+"_"+o.id,data:o,hasDrag:I.value,onDrag:s=>e(F)(e(n)[a.name],...s,l),onDrop:s=>e(h)(e(n)[a.name],s,l+1),onFancy:t[0]||(t[0]=s=>e(R)(e(n)[a.name],s)),onAdd:s=>e(c)(e(n)[a.name],l+1,[s]),onDel:s=>e(p)(e(n)[a.name],l)},null,8,["data","hasDrag","onDrag","onDrop","onAdd","onDel"]))),128))]),d("div",L,[d("label",T,[m(e(k)),m(x,{class:"hidden",onUpload:t[1]||(t[1]=o=>e(c)(e(n)[a.name],e(n)[a.name].length,o)),multiple:!0})])]),m(U,{open:e(r).open,"onUpdate:open":t[2]||(t[2]=o=>e(r).open=o),index:e(r).index,length:(g=e(n)[a.name])==null?void 0:g.length,onPrev:t[3]||(t[3]=o=>e(i)(e(n)[a.name],-1)),onNext:t[4]||(t[4]=o=>e(i)(e(n)[a.name],1))},{default:P(()=>[m(B,{src:e(r).value,alt:e(r).value},null,8,["src","alt"])]),_:1},8,["open","index","length"])])}}};export{Y as default};

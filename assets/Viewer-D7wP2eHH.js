import{a as x}from"./IconDelete-D526KsXi.js";import{U as B}from"./Upload-Ce91b9E3.js";import{_ as U}from"./Image-qa4RBVjT.js";import{F as $}from"./Fancy-yIkWhwTT.js";import{R as b}from"./Resource-CFQhZ-D1.js";import{b as w,s as N,k as S,i as V,h as A,o as u,c as f,a as d,F as P,m as j,d as e,e as m,y as C,p as E}from"./index-KCNCY3mu.js";import"./Aspect-BKhrBp5p.js";import"./useMouse-ba6CC7p7.js";import"./round-drag-indicator-DyUHpdXD.js";import"./Audio-CNFwkGRS.js";const L={class:"resource_container"},T={class:"resource"},q={class:"resource_footer"},z=["title"],_={__name:"Viewer",props:{name:{type:[String],default:""}},setup(t){const v=t,p=w(),{imagesResource:n}=N(p),{delItem:D,uploadItem:i,getDrag:y,dragItem:F,dropItem:h,fancy:r,setFancy:R,changeFancy:c}=S(),{t:k}=V("lang"),I=A(()=>y(n.value[v.name]));return(G,a)=>{var g;return u(),f("div",L,[d("div",T,[(u(!0),f(P,null,j(e(n)[t.name]??[],(o,l)=>(u(),E(b,{key:t.name+"_"+o.id,data:o,hasDrag:I.value,onDrag:s=>e(F)(e(n)[t.name],...s,l),onDrop:s=>e(h)(e(n)[t.name],s,l+1),onFancy:a[0]||(a[0]=s=>e(R)(e(n)[t.name],s)),onAdd:s=>e(i)(e(n)[t.name],l+1,[s]),onDel:s=>e(D)(e(n)[t.name],l)},null,8,["data","hasDrag","onDrag","onDrop","onAdd","onDel"]))),128))]),d("div",q,[d("label",{class:"resource_plus",title:e(k)("button.new")},[m(e(x)),m(B,{class:"hidden",onUpload:a[1]||(a[1]=o=>e(i)(e(n)[t.name],e(n)[t.name].length,o)),multiple:!0})],8,z)]),m($,{open:e(r).open,"onUpdate:open":a[2]||(a[2]=o=>e(r).open=o),index:e(r).index,length:(g=e(n)[t.name])==null?void 0:g.length,onPrev:a[3]||(a[3]=o=>e(c)(e(n)[t.name],-1)),onNext:a[4]||(a[4]=o=>e(c)(e(n)[t.name],1))},{default:C(()=>[m(U,{src:e(r).value,alt:e(r).value},null,8,["src","alt"])]),_:1},8,["open","index","length"])])}}};export{_ as default};

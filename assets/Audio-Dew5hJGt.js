import{h,r as u,g as p,o as w,c as b,x as S}from"./index-eIGxLf3c.js";const A={class:"audio hidden"},C={__name:"Audio",props:{src:{type:[String],default:""},play:{type:[Boolean],default:!1},volume:{type:[Number],default:0},loop:{type:[Boolean],default:!1}},emits:["ended"],setup(v,{expose:m,emit:y}){const o=v,r=y,{getUrl:g}=S(),l=h(()=>g(o.src)),n=u(null),t=u(null),s=u(null),c=u(!1),i=async()=>{if(!l.value)return;const e=new AudioContext,x=await(await fetch(l.value)).arrayBuffer(),B=await e.decodeAudioData(x);n.value=e,t.value=B},_=()=>{if(!t.value)return;const e=n.value.createGain();e.gain.value=o.volume,e.connect(n.value.destination);const a=n.value.createBufferSource();a.buffer=t.value,a.connect(e),a.loop=o.loop,a.onended=()=>r("ended"),s.value=a},d=async()=>{c.value=!0,t.value||await i(),c.value&&(_(),s.value.start(0))},f=()=>{if(c.value=!1,!t.value||!s.value)return r("ended");s.value.stop(0)};return p(()=>o.play,e=>{e?d():f()}),p(l,i),m({play:d,pause:f}),(e,a)=>(w(),b("div",A))}};export{C as _};

import{_ as h,i as f,j as m,r as k,o as s,c as r,a as e,F as x,k as w,t as v,f as b,w as g,d as l,l as y,n as S,b as _}from"./entry.57ffcc43.js";import{W as B,_ as T}from"./WLButton.ccd846aa.js";const $={class:"wl-breadcrumb-nav","aria-label":"Breadcrumb"},I={class:"wl-breadcrumb-nav-list"},L={key:0,class:"wl-breadcrumb-current","aria-current":"page"},W={__name:"TheBreadcrumbs",setup(a){const o=f(),c=t=>t.replace(/-/g," "),n=m(()=>{const t=o.path.split("/").filter(i=>i!=="");return t.map((i,u)=>({text:c(i),to:`/${t.slice(0,u+1).join("/")}`}))});return(t,i)=>{const u=k("router-link");return s(),r("nav",$,[e("ol",I,[(s(!0),r(x,null,w(n.value,(d,p)=>(s(),r("li",{key:p,class:"wl-breadcrumb-item"},[p===n.value.length-1?(s(),r("a",L,v(d.text),1)):(s(),b(u,{key:1,to:d.to,class:"wl-breadcrumb-link"},{default:g(()=>[l(v(d.text),1)]),_:2},1032,["to"])),p!==n.value.length-1?(s(),b(B,{key:2,"aria-hidden":"true",name:"chevron-forward"},{default:g(()=>[l("/")]),_:1})):y("",!0)]))),128))])])}}},C=h(W,[["__scopeId","data-v-fa9b7c80"]]);const V=["value"],N={__name:"WLStatusTag",props:{variant:{type:String,default:"badge",validator:a=>["badge","dot"].includes(a)},status:{type:String,default:"default",validator:a=>["default","warning","positive","negative","neutral"].includes(a)},value:{type:String,default:""}},setup(a){const o=a,c=m(()=>{const t={};return o.variant==="dot"?t["tag-dot"]=!0:t["tag-badge"]=!0,t}),n=m(()=>{const t={};switch(o.status){case"default":t["tag-default"]=!0;break;case"warning":t["tag-warning"]=!0;break;case"positive":t["tag-positive"]=!0;break;case"negative":t["tag-negative"]=!0;break;case"neutral":t["tag-neutral"]=!0;break}return t});return(t,i)=>(s(),r("div",{class:S(["wl-status-tag",c.value,n.value]),value:a.value},v(a.value),11,V))}},D=h(N,[["__scopeId","data-v-0d4b4ef9"]]);const j={},F={class:"page-topper topper-background"},z={class:"item"},A={class:"item-top"},E={class:"item-details"},H=e("p",{class:"item-id"},"{ID:1234567890}",-1),O={class:"item-title-tag-wrap"},R=e("p",{class:"item-info"},"{Created date}",-1),q=e("div",{class:"item-description"},[e("h2",null,"{Description}"),e("p",null,"{This is the description for this item }")],-1),G={class:"item-actions"},J=e("div",null,null,-1);function K(a,o){const c=C,n=D,t=T;return s(),r("div",F,[_(c),e("div",null,[e("div",z,[e("div",A,[e("div",E,[H,e("div",null,[e("h1",null,[e("span",null,[l(" {Item "),e("span",O,[l(" title} "),_(n,{value:"{Status}",variant:"dot",status:"positive"})])])])]),R,q]),e("div",G,[_(t,{variant:"solid","icon-left":"add"},{default:g(()=>[l(" Add {item}")]),_:1}),_(t,{variant:"default",icon:"ellipsis-vertical-sharp","aria-label":"Open menu"})])])]),J])])}const Q=h(j,[["render",K]]);export{Q as _};
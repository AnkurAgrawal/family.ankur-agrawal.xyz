var $=Object.defineProperty;var N=(e,t,o)=>t in e?$(e,t,{enumerable:!0,configurable:!0,writable:!0,value:o}):e[t]=o;var i=(e,t,o)=>N(e,typeof t!="symbol"?t+"":t,o);import{d as p,h as F,r as I,o as R,w as T,q as E,b as a,i as l,t as w,g as m,C as h,j as f,c as y,s as A,p as U,F as M,y as B,ae as W,L as j,E as S}from"./index-Cs5TfYef.js";import{u as q}from"./LayoutView-kRLRPRpi.js";import"./ripple.esm-CLr6rmTU.js";const z={key:0,class:"layout-menuitem-root-text"},H=["href","target"],G={class:"layout-menuitem-text"},J={key:0,class:"pi pi-fw pi-angle-down layout-submenu-toggler"},O={class:"layout-menuitem-text"},P={key:0,class:"pi pi-fw pi-angle-down layout-submenu-toggler"},Q={class:"layout-submenu"};class c{constructor(t){i(this,"label");i(this,"icon");i(this,"to");i(this,"url");i(this,"items");i(this,"class");i(this,"preventExact");i(this,"target");i(this,"disabled");i(this,"command");i(this,"visible");i(this,"separator");this.label=t.label,this.icon=t.icon,this.to=t.to,this.url=t.url,this.items=t.items,this.class=t.class,this.preventExact=t.preventExact,this.target=t.target,this.disabled=t.disabled,this.command=t.command,this.visible=t.visible,this.separator=t.separator}}const X=p({__name:"DashboardMenuItem",props:{item:{type:c,default:()=>({})},index:{type:Number,default:0},root:{type:Boolean,default:!0},parentItemKey:{type:String,default:null}},setup(e){const t=F(),{layoutConfig:o,layoutState:C,setActiveMenuItem:d,onMenuToggle:g}=q(),v=e,b=I(!1),u=I(void 0);R(()=>{u.value=v.parentItemKey?v.parentItemKey+"-"+v.index:v.index.toString();const s=o.activeMenuItem;b.value=s.value===u.value||s.value?s.value.startsWith(u.value+"-"):!1}),T(()=>o.activeMenuItem,s=>{!s||!s.value||(b.value=s.value===u.value||s.value.startsWith(u.value+"-"))});const K=(s,n,D)=>{if(n.disabled){s.preventDefault();return}const{overlayMenuActive:k,staticMenuMobileActive:r}=C;(n.to||n.url)&&(r.value||k.value)&&g(),n.command&&n.command({originalEvent:s,item:n});const x=n.items&&b.value?v.parentItemKey:u.value;x&&d(x)},L=s=>t.path===s.to;return(s,n)=>{const D=E("router-link"),k=E("dashboard-menu-item",!0);return a(),l("li",{class:h({"layout-root-menuitem":e.root,"active-menuitem":b.value})},[e.root&&e.item.visible!==!1?(a(),l("div",z,w(e.item.label),1)):m("",!0),(!e.item.to||e.item.items)&&e.item.visible!==!1?(a(),l("a",{key:1,href:e.item.url,onClick:n[0]||(n[0]=r=>K(r,e.item,e.index)),class:h(e.item.class),target:e.item.target,tabindex:"0"},[f("i",{class:h([e.item.icon,"layout-menuitem-icon"])},null,2),f("span",G,w(e.item.label),1),e.item.items?(a(),l("i",J)):m("",!0)],10,H)):m("",!0),e.item.to&&!e.item.items&&e.item.visible!==!1?(a(),y(D,{key:2,onClick:n[1]||(n[1]=r=>K(r,e.item,e.index)),class:h([e.item.class,{"active-route":L(e.item)}]),tabindex:"0",to:e.item.to},{default:A(()=>[f("i",{class:h([e.item.icon,"layout-menuitem-icon"])},null,2),f("span",O,w(e.item.label),1),e.item.items?(a(),l("i",P)):m("",!0)]),_:1},8,["class","to"])):m("",!0),e.item.items&&e.item.visible!==!1?(a(),y(j,{key:3,name:"layout-submenu"},{default:A(()=>[U(f("ul",Q,[(a(!0),l(M,null,B(e.item.items,(r,x)=>(a(),y(k,{key:r.label,index:x,item:r,parentItemKey:u.value,root:!1},null,8,["index","item","parentItemKey"]))),128))],512),[[W,e.root?!0:b.value]])]),_:1})):m("",!0)],2)}}}),Y=S(X,[["__scopeId","data-v-bf866650"]]),Z={class:"layout-menu"},V={key:1,class:"menu-separator"},_=p({__name:"DashboardMenu",setup(e){const t=I([new c({label:"Home",items:[new c({label:"Dashboard",icon:"pi pi-fw pi-home",to:"/dashboard"})]}),new c({label:"Albums",items:[new c({label:"Manage",icon:"pi pi-fw pi-image",to:"/dashboard/albums",class:"rotated-icon"}),new c({label:"Upload",icon:"pi pi-fw pi-upload",to:"/dashboard/albums/upload",preventExact:!0})]}),new c({label:"Users",items:[new c({label:"List",icon:"pi pi-fw pi-users",to:"/dashboard/users"})]})]);return(o,C)=>(a(),l("ul",Z,[(a(!0),l(M,null,B(t.value,(d,g)=>(a(),l(M,{key:d},[d.separator?m("",!0):(a(),y(Y,{key:0,item:d,index:g},null,8,["item","index"])),d.separator?(a(),l("li",V)):m("",!0)],64))),128))]))}}),ee=S(_,[["__scopeId","data-v-98aa85a8"]]),ne=p({__name:"DashboardSidebar",setup(e){return(t,o)=>(a(),y(ee))}});export{ne as default};

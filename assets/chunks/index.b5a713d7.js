import{_ as ie,g as R,l as Ce,R as We,I as be,e as $e,u as Ze,X as Ge,c as we,m as qe,z as F,k as Se,C as Ye,Y as de,D as xe,s as ke,d as Ie,f as Je,h as Ke,j as Xe,J as Qe,M as L,U as ze,q as et,L as tt,p as ot,t as fe}from"./use-popup-manager.cc2677ce.js";import{d as P,g,o as m,c as w,n as b,N as Oe,k as A,a1 as nt,h as C,x as Q,j as _e,C as k,t as ee,e as I,H as $,w as le,L as ve,r as O,O as he,B as lt,z as it,b as M,a7 as at,a5 as st,a2 as rt,ad as me,ax as ut,F as ct}from"./framework.98be4c9c.js";const dt=P({name:"IconInfoCircleFill",props:{size:{type:[Number,String]},strokeWidth:{type:Number,default:4},strokeLinecap:{type:String,default:"butt",validator:e=>["butt","round","square"].includes(e)},strokeLinejoin:{type:String,default:"miter",validator:e=>["arcs","bevel","miter","miter-clip","round"].includes(e)},rotate:Number,spin:Boolean},emits:{click:e=>!0},setup(e,{emit:t}){const o=R("icon"),s=g(()=>[o,`${o}-info-circle-fill`,{[`${o}-spin`]:e.spin}]),c=g(()=>{const i={};return e.size&&(i.fontSize=Ce(e.size)?`${e.size}px`:e.size),e.rotate&&(i.transform=`rotate(${e.rotate}deg)`),i});return{cls:s,innerStyle:c,onClick:i=>{t("click",i)}}}}),ft=["stroke-width","stroke-linecap","stroke-linejoin"],vt=A("path",{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M24 44c11.046 0 20-8.954 20-20S35.046 4 24 4 4 12.954 4 24s8.954 20 20 20Zm2-30a1 1 0 0 0-1-1h-2a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-2Zm0 17h1a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-6a1 1 0 0 1-1-1v-2a1 1 0 0 1 1-1h1v-8a1 1 0 0 1-1-1v-2a1 1 0 0 1 1-1h3a1 1 0 0 1 1 1v11Z",fill:"currentColor",stroke:"none"},null,-1),ht=[vt];function mt(e,t,o,s,c,r){return m(),w("svg",{viewBox:"0 0 48 48",fill:"none",xmlns:"http://www.w3.org/2000/svg",stroke:"currentColor",class:b(e.cls),style:Oe(e.innerStyle),"stroke-width":e.strokeWidth,"stroke-linecap":e.strokeLinecap,"stroke-linejoin":e.strokeLinejoin,onClick:t[0]||(t[0]=(...i)=>e.onClick&&e.onClick(...i))},ht,14,ft)}var te=ie(dt,[["render",mt]]);const pt=Object.assign(te,{install:(e,t)=>{var o;const s=(o=t==null?void 0:t.iconPrefix)!=null?o:"";e.component(s+te.name,te)}}),gt=["border-width","box-sizing","font-family","font-weight","font-size","font-variant","letter-spacing","line-height","padding-top","padding-bottom","padding-left","padding-right","text-indent","text-rendering","text-transform","white-space","overflow-wrap","width"],yt=e=>{const t={};return gt.forEach(o=>{t[o]=e.getPropertyValue(o)}),t},Ct=P({name:"Textarea",components:{ResizeObserver:We,IconHover:be,IconClose:$e},inheritAttrs:!1,props:{modelValue:String,defaultValue:{type:String,default:""},placeholder:String,disabled:{type:Boolean,default:!1},error:{type:Boolean,default:!1},maxLength:{type:[Number,Object],default:0},showWordLimit:{type:Boolean,default:!1},allowClear:{type:Boolean,default:!1},autoSize:{type:[Boolean,Object],default:!1},wordLength:{type:Function},wordSlice:{type:Function}},emits:{"update:modelValue":e=>!0,input:(e,t)=>!0,change:(e,t)=>!0,clear:e=>!0,focus:e=>!0,blur:e=>!0},setup(e,{emit:t,attrs:o}){const{disabled:s,error:c,modelValue:r}=nt(e),i=R("textarea"),{mergedDisabled:l,mergedError:h,eventHandlers:a}=Ze({disabled:s,error:c}),d=C(),z=C(),S=C(),j=C(),U=C(e.defaultValue),y=g(()=>{var n;return(n=r.value)!=null?n:U.value}),[Ne,Be]=Ge(d);Q(r,n=>{(we(n)||qe(n))&&(U.value="")});const E=g(()=>F(e.maxLength)&&!!e.maxLength.errorOnly),p=g(()=>F(e.maxLength)?e.maxLength.length:e.maxLength),T=n=>{var u;return Se(e.wordLength)?e.wordLength(n):(u=n.length)!=null?u:0},ae=g(()=>T(y.value)),Re=g(()=>h.value||!!(p.value&&E.value&&ae.value>p.value)),N=C(!1),D=C(!1),Pe=g(()=>e.allowClear&&!l.value&&y.value),W=C(!1),se=C(""),Z=()=>{Ne(),he(()=>{d.value&&y.value!==d.value.value&&(d.value.value=y.value,Be())})},V=(n,u=!0)=>{var f,v;p.value&&!E.value&&T(n)>p.value&&(n=(v=(f=e.wordSlice)==null?void 0:f.call(e,n,p.value))!=null?v:n.slice(0,p.value)),U.value=n,u&&t("update:modelValue",n),Z()};let G=y.value;const re=(n,u)=>{var f,v;n!==G&&(G=n,t("change",n,u),(v=(f=a.value)==null?void 0:f.onChange)==null||v.call(f,u))},je=n=>{var u,f;D.value=!0,G=y.value,t("focus",n),(f=(u=a.value)==null?void 0:u.onFocus)==null||f.call(u,n)},Ee=n=>{var u,f;D.value=!1,t("blur",n),(f=(u=a.value)==null?void 0:u.onBlur)==null||f.call(u,n),re(y.value,n)},Te=n=>{var u,f;const{value:v}=n.target;if(n.type==="compositionend"){if(W.value=!1,se.value="",p.value&&!E.value&&y.value.length>=p.value&&T(v)>p.value){Z();return}t("input",v,n),V(v),(f=(u=a.value)==null?void 0:u.onInput)==null||f.call(u,n)}else W.value=!0},Ve=n=>{var u,f;const{value:v}=n.target;if(W.value)se.value=v;else{if(p.value&&!E.value&&y.value.length>=p.value&&T(v)>p.value&&n.inputType==="insertText"){Z();return}t("input",v,n),V(v),(f=(u=a.value)==null?void 0:u.onInput)==null||f.call(u,n)}},Fe=n=>{V(""),re("",n),t("clear",n)};Q(r,n=>{n!==y.value&&V(n??"",!1)});const Me=n=>Ye(o,de),Ae=n=>xe(o,de),He=g(()=>[`${i}-wrapper`,{[`${i}-focus`]:D.value,[`${i}-disabled`]:l.value,[`${i}-error`]:Re.value,[`${i}-scroll`]:N.value}]);let ue;const q=C(0),Y=C(0),x=g(()=>!F(e.autoSize)||!e.autoSize.minRows?0:e.autoSize.minRows*q.value+Y.value),J=g(()=>!F(e.autoSize)||!e.autoSize.maxRows?0:e.autoSize.maxRows*q.value+Y.value),K=()=>{const n=yt(ue);q.value=Number.parseInt(n["line-height"]||0,10),Y.value=Number.parseInt(n["border-width"]||0,10)*2+Number.parseInt(n["padding-top"]||0,10)+Number.parseInt(n["padding-bottom"]||0,10),j.value=n,he(()=>{var u;const f=(u=S.value)==null?void 0:u.offsetHeight;let v=f??0,ce="hidden";x.value&&v<x.value&&(v=x.value),J.value&&v>J.value&&(v=J.value,ce="auto"),z.value={height:`${v}px`,resize:"none",overflow:ce}})};_e(()=>{d.value&&(ue=window.getComputedStyle(d.value),e.autoSize&&K()),X()});const Ue=()=>{e.autoSize&&S.value&&K(),X()},De=n=>{d.value&&n.target!==d.value&&(n.preventDefault(),d.value.focus())},X=()=>{d.value&&(d.value.scrollHeight>d.value.offsetHeight?N.value||(N.value=!0):N.value&&(N.value=!1))};return Q(y,()=>{e.autoSize&&S.value&&K(),X()}),{prefixCls:i,wrapperCls:He,textareaRef:d,textareaStyle:z,mirrorRef:S,mirrorStyle:j,computedValue:y,showClearBtn:Pe,valueLength:ae,computedMaxLength:p,mergedDisabled:l,getWrapperAttrs:Me,getTextareaAttrs:Ae,handleInput:Ve,handleFocus:je,handleBlur:Ee,handleComposition:Te,handleClear:Fe,handleResize:Ue,handleMousedown:De}},methods:{focus(){var e;(e=this.$refs.textareaRef)==null||e.focus()},blur(){var e;(e=this.$refs.textareaRef)==null||e.blur()}}}),bt=["disabled","value","placeholder"];function $t(e,t,o,s,c,r){const i=k("resize-observer"),l=k("icon-close"),h=k("icon-hover");return m(),w("div",ve(e.getWrapperAttrs(e.$attrs),{class:e.wrapperCls,onMousedown:t[7]||(t[7]=(...a)=>e.handleMousedown&&e.handleMousedown(...a))}),[e.autoSize?(m(),w("div",{key:0,ref:"mirrorRef",class:b(`${e.prefixCls}-mirror`),style:Oe(e.mirrorStyle)},ee(`${e.computedValue}
`),7)):I("v-if",!0),$(i,{onResize:e.handleResize},{default:le(()=>[A("textarea",ve({ref:"textareaRef"},e.getTextareaAttrs(e.$attrs),{disabled:e.mergedDisabled,class:e.prefixCls,style:e.textareaStyle,value:e.computedValue,placeholder:e.placeholder,onInput:t[0]||(t[0]=(...a)=>e.handleInput&&e.handleInput(...a)),onFocus:t[1]||(t[1]=(...a)=>e.handleFocus&&e.handleFocus(...a)),onBlur:t[2]||(t[2]=(...a)=>e.handleBlur&&e.handleBlur(...a)),onCompositionstart:t[3]||(t[3]=(...a)=>e.handleComposition&&e.handleComposition(...a)),onCompositionupdate:t[4]||(t[4]=(...a)=>e.handleComposition&&e.handleComposition(...a)),onCompositionend:t[5]||(t[5]=(...a)=>e.handleComposition&&e.handleComposition(...a))}),null,16,bt)]),_:1},8,["onResize"]),O(e.$slots,"suffix"),e.computedMaxLength&&e.showWordLimit?(m(),w("div",{key:1,class:b(`${e.prefixCls}-word-limit`)},ee(e.valueLength)+"/"+ee(e.computedMaxLength),3)):I("v-if",!0),e.showClearBtn?(m(),w("div",{key:2,class:b(`${e.prefixCls}-clear-btn`),onClick:t[6]||(t[6]=(...a)=>e.handleClear&&e.handleClear(...a))},[$(h,null,{default:le(()=>[$(l)]),_:1})],2)):I("v-if",!0)],16)}var oe=ie(Ct,[["render",$t]]);const Vt=Object.assign(oe,{install:(e,t)=>{ke(e,t);const o=Ie(t);e.component(o+oe.name,oe)}}),wt=e=>e.replace(/\B([A-Z])/g,"-$1").toLowerCase(),St=P({name:"Notification",components:{AIconHover:be,IconInfoCircleFill:pt,IconCheckCircleFill:Je,IconExclamationCircleFill:Ke,IconCloseCircleFill:Xe,IconClose:$e},props:{type:{type:String,default:"info"},showIcon:{type:Boolean,default:!0},closable:{type:Boolean,default:!1},duration:{type:Number,default:3e3},resetOnUpdate:{type:Boolean,default:!1}},emits:["close"],setup(e,t){const o=R("notification");let s=0;const c=()=>{t.emit("close")};return _e(()=>{e.duration>0&&(s=window.setTimeout(c,e.duration))}),lt(()=>{e.resetOnUpdate&&(s&&(window.clearTimeout(s),s=0),e.duration>0&&(s=window.setTimeout(c,e.duration)))}),it(()=>{s&&window.clearTimeout(s)}),{prefixCls:o,handleClose:c}}});function kt(e,t,o,s,c,r){const i=k("icon-info-circle-fill"),l=k("icon-check-circle-fill"),h=k("icon-exclamation-circle-fill"),a=k("icon-close-circle-fill"),d=k("icon-close"),z=k("a-icon-hover");return m(),w("li",{role:"alert",class:b([e.prefixCls,`${e.prefixCls}-${e.type}`,{[`${e.prefixCls}-closable`]:e.closable}])},[e.showIcon?(m(),w("div",{key:0,class:b(`${e.prefixCls}-left`)},[A("div",{class:b(`${e.prefixCls}-icon`)},[O(e.$slots,"icon",{},()=>[e.type==="info"?(m(),M(i,{key:0})):e.type==="success"?(m(),M(l,{key:1})):e.type==="warning"?(m(),M(h,{key:2})):e.type==="error"?(m(),M(a,{key:3})):I("v-if",!0)])],2)],2)):I("v-if",!0),A("div",{class:b(`${e.prefixCls}-right`)},[e.$slots.default?(m(),w("div",{key:0,class:b(`${e.prefixCls}-title`)},[O(e.$slots,"default")],2)):I("v-if",!0),e.$slots.content?(m(),w("div",{key:1,class:b(`${e.prefixCls}-content`)},[O(e.$slots,"content")],2)):I("v-if",!0),e.$slots.footer?(m(),w("div",{key:2,class:b(`${e.prefixCls}-footer`)},[O(e.$slots,"footer")],2)):I("v-if",!0)],2),e.closable?(m(),w("div",{key:1,class:b(`${e.prefixCls}-close-btn`),onClick:t[0]||(t[0]=(...S)=>e.handleClose&&e.handleClose(...S))},[O(e.$slots,"closeIconElement",{},()=>[$(z,null,{default:le(()=>[O(e.$slots,"closeIcon",{},()=>[$(d)])]),_:3})])],2)):I("v-if",!0)],2)}var It=ie(St,[["render",kt]]);const zt=["topLeft","topRight","bottomLeft","bottomRight"];function Ot(e){return typeof e=="function"||Object.prototype.toString.call(e)==="[object Object]"&&!st(e)}var _t=P({name:"NotificationList",props:{notifications:{type:Array,default:()=>[]},position:{type:String,default:"topRight",validator:e=>zt.includes(e)}},emits:["close","afterClose"],setup(e,t){const o=R("notification-list"),s=wt(e.position),{zIndex:c}=Qe("message",{runOnMounted:!0}),r=e.position.includes("Right");return()=>{let i;return $(at,{class:[o,`${o}-${s}`],style:{zIndex:c.value},name:`slide-${r?"right":"left"}-notification`,onAfterLeave:()=>t.emit("afterClose"),tag:"ul"},Ot(i=e.notifications.map(l=>{const h={default:L(l.title),content:L(l.content),icon:L(l.icon),footer:L(l.footer),closeIcon:L(l.closeIcon),closeIconElement:L(l.closeIconElement)};return $(It,{key:l.id,type:l.type,style:l.style,class:l.class,duration:l.duration,closable:l.closable,showIcon:l.showIcon,resetOnUpdate:l.resetOnUpdate,onClose:()=>t.emit("close",l.id)},h)}))?i:{default:()=>[i]})}}}),Lt=Object.defineProperty,Nt=Object.defineProperties,Bt=Object.getOwnPropertyDescriptors,pe=Object.getOwnPropertySymbols,Rt=Object.prototype.hasOwnProperty,Pt=Object.prototype.propertyIsEnumerable,ge=(e,t,o)=>t in e?Lt(e,t,{enumerable:!0,configurable:!0,writable:!0,value:o}):e[t]=o,H=(e,t)=>{for(var o in t||(t={}))Rt.call(t,o)&&ge(e,o,t[o]);if(pe)for(var o of pe(t))Pt.call(t,o)&&ge(e,o,t[o]);return e},Le=(e,t)=>Nt(e,Bt(t));class jt{constructor(t,o){this.notificationCount=0,this.add=r=>{var i;this.notificationCount++;const l=(i=r.id)!=null?i:`__arco_notification_${this.notificationCount}`;if(this.notificationIds.has(l))return this.update(l,r);const h=rt(H({id:l},r));return this.notifications.value.push(h),this.notificationIds.add(l),{close:()=>this.remove(l)}},this.update=(r,i)=>{for(let l=0;l<this.notifications.value.length;l++)if(this.notifications.value[l].id===r){const h=!we(i.duration);Object.assign(this.notifications.value[l],Le(H({},i),{id:r,resetOnUpdate:h}));break}return{close:()=>this.remove(r)}},this.remove=r=>{for(let i=0;i<this.notifications.value.length;i++){const l=this.notifications.value[i];if(l.id===r){Se(l.onClose)&&l.onClose(r),this.notifications.value.splice(i,1),this.notificationIds.delete(r);break}}},this.clear=()=>{this.notifications.value.splice(0)},this.destroy=()=>{this.notifications.value.length===0&&this.container&&(me(null,this.container),document.body.removeChild(this.container),this.container=null,_[this.position]=void 0)};const{position:s="topRight"}=t;this.container=tt("notification"),this.notificationIds=new Set,this.notifications=C([]),this.position=s;const c=$(_t,{notifications:this.notifications.value,position:s,onClose:this.remove,onAfterClose:this.destroy});(o??ye._context)&&(c.appContext=o??ye._context),me(c,this.container),document.body.appendChild(this.container)}}const _={},B=ze.reduce((e,t)=>(e[t]=(o,s)=>{et(o)&&(o={content:o});const c=H({type:t},o),{position:r="topRight"}=c;return _[r]||(_[r]=new jt(c,s)),_[r].add(c)},e),{});B.remove=e=>{e&&Object.values(_).forEach(t=>t==null?void 0:t.remove(e))};B.clear=e=>{var t;e?(t=_[e])==null||t.clear():Object.values(_).forEach(o=>o==null?void 0:o.clear())};const ye=Le(H({},B),{install:e=>{const t={clear:B.clear};for(const o of ze)t[o]=(s,c=e._context)=>B[o](s,c);e.config.globalProperties.$notification=t},_context:null});var ne=P({name:"Space",props:{align:{type:String},direction:{type:String,default:"horizontal"},size:{type:[Number,String,Array],default:"small"},wrap:{type:Boolean},fill:{type:Boolean}},setup(e,{slots:t}){const o=R("space"),s=g(()=>{var l;return(l=e.align)!=null?l:e.direction==="horizontal"?"center":""}),c=g(()=>[o,{[`${o}-${e.direction}`]:e.direction,[`${o}-align-${s.value}`]:s.value,[`${o}-wrap`]:e.wrap,[`${o}-fill`]:e.fill}]);function r(l){if(Ce(l))return l;switch(l){case"mini":return 4;case"small":return 8;case"medium":return 16;case"large":return 24;default:return 8}}const i=l=>{const h={},a=`${r(fe(e.size)?e.size[0]:e.size)}px`,d=`${r(fe(e.size)?e.size[1]:e.size)}px`;return l?e.wrap?{marginBottom:d}:{}:(e.direction==="horizontal"&&(h.marginRight=a),(e.direction==="vertical"||e.wrap)&&(h.marginBottom=d),h)};return()=>{var l;const h=ot((l=t.default)==null?void 0:l.call(t),!0).filter(a=>a.type!==ut);return $("div",{class:c.value},[h.map((a,d)=>{var z,S;const j=t.split&&d>0;return $(ct,{key:(z=a.key)!=null?z:`item-${d}`},[j&&$("div",{class:`${o}-item-split`,style:i(!1)},[(S=t.split)==null?void 0:S.call(t)]),$("div",{class:`${o}-item`,style:i(d===h.length-1)},[a])])})])}}});const Ft=Object.assign(ne,{install:(e,t)=>{ke(e,t);const o=Ie(t);e.component(o+ne.name,ne)}});export{pt as I,ye as N,Ft as S,Vt as T,yt as g};

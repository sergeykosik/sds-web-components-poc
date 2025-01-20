"use strict";Object.defineProperty(exports,Symbol.toStringTag,{value:"Module"});/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Xe=globalThis,St=Xe.ShadowRoot&&(Xe.ShadyCSS===void 0||Xe.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,Ct=Symbol(),Ut=new WeakMap;let os=class{constructor(e,t,i){if(this._$cssResult$=!0,i!==Ct)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o;const t=this.t;if(St&&e===void 0){const i=t!==void 0&&t.length===1;i&&(e=Ut.get(t)),e===void 0&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),i&&Ut.set(t,e))}return e}toString(){return this.cssText}};const Rs=r=>new os(typeof r=="string"?r:r+"",void 0,Ct),m=(r,...e)=>{const t=r.length===1?r[0]:e.reduce((i,s,o)=>i+(a=>{if(a._$cssResult$===!0)return a.cssText;if(typeof a=="number")return a;throw Error("Value passed to 'css' function must be a 'css' function result: "+a+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(s)+r[o+1],r[0]);return new os(t,r,Ct)},Us=(r,e)=>{if(St)r.adoptedStyleSheets=e.map(t=>t instanceof CSSStyleSheet?t:t.styleSheet);else for(const t of e){const i=document.createElement("style"),s=Xe.litNonce;s!==void 0&&i.setAttribute("nonce",s),i.textContent=t.cssText,r.appendChild(i)}},Nt=St?r=>r:r=>r instanceof CSSStyleSheet?(e=>{let t="";for(const i of e.cssRules)t+=i.cssText;return Rs(t)})(r):r;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{is:Ns,defineProperty:Bs,getOwnPropertyDescriptor:Hs,getOwnPropertyNames:Ws,getOwnPropertySymbols:Ys,getPrototypeOf:Vs}=Object,te=globalThis,Bt=te.trustedTypes,qs=Bt?Bt.emptyScript:"",ut=te.reactiveElementPolyfillSupport,De=(r,e)=>r,et={toAttribute(r,e){switch(e){case Boolean:r=r?qs:null;break;case Object:case Array:r=r==null?r:JSON.stringify(r)}return r},fromAttribute(r,e){let t=r;switch(e){case Boolean:t=r!==null;break;case Number:t=r===null?null:Number(r);break;case Object:case Array:try{t=JSON.parse(r)}catch{t=null}}return t}},Pt=(r,e)=>!Ns(r,e),Ht={attribute:!0,type:String,converter:et,reflect:!1,hasChanged:Pt};Symbol.metadata??(Symbol.metadata=Symbol("metadata")),te.litPropertyMetadata??(te.litPropertyMetadata=new WeakMap);class me extends HTMLElement{static addInitializer(e){this._$Ei(),(this.l??(this.l=[])).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,t=Ht){if(t.state&&(t.attribute=!1),this._$Ei(),this.elementProperties.set(e,t),!t.noAccessor){const i=Symbol(),s=this.getPropertyDescriptor(e,i,t);s!==void 0&&Bs(this.prototype,e,s)}}static getPropertyDescriptor(e,t,i){const{get:s,set:o}=Hs(this.prototype,e)??{get(){return this[t]},set(a){this[t]=a}};return{get(){return s==null?void 0:s.call(this)},set(a){const d=s==null?void 0:s.call(this);o.call(this,a),this.requestUpdate(e,d,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??Ht}static _$Ei(){if(this.hasOwnProperty(De("elementProperties")))return;const e=Vs(this);e.finalize(),e.l!==void 0&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(De("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(De("properties"))){const t=this.properties,i=[...Ws(t),...Ys(t)];for(const s of i)this.createProperty(s,t[s])}const e=this[Symbol.metadata];if(e!==null){const t=litPropertyMetadata.get(e);if(t!==void 0)for(const[i,s]of t)this.elementProperties.set(i,s)}this._$Eh=new Map;for(const[t,i]of this.elementProperties){const s=this._$Eu(t,i);s!==void 0&&this._$Eh.set(s,t)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){const t=[];if(Array.isArray(e)){const i=new Set(e.flat(1/0).reverse());for(const s of i)t.unshift(Nt(s))}else e!==void 0&&t.push(Nt(e));return t}static _$Eu(e,t){const i=t.attribute;return i===!1?void 0:typeof i=="string"?i:typeof e=="string"?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){var e;this._$ES=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$E_(),this.requestUpdate(),(e=this.constructor.l)==null||e.forEach(t=>t(this))}addController(e){var t;(this._$EO??(this._$EO=new Set)).add(e),this.renderRoot!==void 0&&this.isConnected&&((t=e.hostConnected)==null||t.call(e))}removeController(e){var t;(t=this._$EO)==null||t.delete(e)}_$E_(){const e=new Map,t=this.constructor.elementProperties;for(const i of t.keys())this.hasOwnProperty(i)&&(e.set(i,this[i]),delete this[i]);e.size>0&&(this._$Ep=e)}createRenderRoot(){const e=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return Us(e,this.constructor.elementStyles),e}connectedCallback(){var e;this.renderRoot??(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(e=this._$EO)==null||e.forEach(t=>{var i;return(i=t.hostConnected)==null?void 0:i.call(t)})}enableUpdating(e){}disconnectedCallback(){var e;(e=this._$EO)==null||e.forEach(t=>{var i;return(i=t.hostDisconnected)==null?void 0:i.call(t)})}attributeChangedCallback(e,t,i){this._$AK(e,i)}_$EC(e,t){var o;const i=this.constructor.elementProperties.get(e),s=this.constructor._$Eu(e,i);if(s!==void 0&&i.reflect===!0){const a=(((o=i.converter)==null?void 0:o.toAttribute)!==void 0?i.converter:et).toAttribute(t,i.type);this._$Em=e,a==null?this.removeAttribute(s):this.setAttribute(s,a),this._$Em=null}}_$AK(e,t){var o;const i=this.constructor,s=i._$Eh.get(e);if(s!==void 0&&this._$Em!==s){const a=i.getPropertyOptions(s),d=typeof a.converter=="function"?{fromAttribute:a.converter}:((o=a.converter)==null?void 0:o.fromAttribute)!==void 0?a.converter:et;this._$Em=s,this[s]=d.fromAttribute(t,a.type),this._$Em=null}}requestUpdate(e,t,i){if(e!==void 0){if(i??(i=this.constructor.getPropertyOptions(e)),!(i.hasChanged??Pt)(this[e],t))return;this.P(e,t,i)}this.isUpdatePending===!1&&(this._$ES=this._$ET())}P(e,t,i){this._$AL.has(e)||this._$AL.set(e,t),i.reflect===!0&&this._$Em!==e&&(this._$Ej??(this._$Ej=new Set)).add(e)}async _$ET(){this.isUpdatePending=!0;try{await this._$ES}catch(t){Promise.reject(t)}const e=this.scheduleUpdate();return e!=null&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var i;if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??(this.renderRoot=this.createRenderRoot()),this._$Ep){for(const[o,a]of this._$Ep)this[o]=a;this._$Ep=void 0}const s=this.constructor.elementProperties;if(s.size>0)for(const[o,a]of s)a.wrapped!==!0||this._$AL.has(o)||this[o]===void 0||this.P(o,this[o],a)}let e=!1;const t=this._$AL;try{e=this.shouldUpdate(t),e?(this.willUpdate(t),(i=this._$EO)==null||i.forEach(s=>{var o;return(o=s.hostUpdate)==null?void 0:o.call(s)}),this.update(t)):this._$EU()}catch(s){throw e=!1,this._$EU(),s}e&&this._$AE(t)}willUpdate(e){}_$AE(e){var t;(t=this._$EO)==null||t.forEach(i=>{var s;return(s=i.hostUpdated)==null?void 0:s.call(i)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$EU(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(e){return!0}update(e){this._$Ej&&(this._$Ej=this._$Ej.forEach(t=>this._$EC(t,this[t]))),this._$EU()}updated(e){}firstUpdated(e){}}me.elementStyles=[],me.shadowRootOptions={mode:"open"},me[De("elementProperties")]=new Map,me[De("finalized")]=new Map,ut==null||ut({ReactiveElement:me}),(te.reactiveElementVersions??(te.reactiveElementVersions=[])).push("2.0.4");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Fe=globalThis,tt=Fe.trustedTypes,Wt=tt?tt.createPolicy("lit-html",{createHTML:r=>r}):void 0,Ot="$lit$",Z=`lit$${Math.random().toFixed(9).slice(2)}$`,Et="?"+Z,Gs=`<${Et}>`,ue=document,je=()=>ue.createComment(""),Re=r=>r===null||typeof r!="object"&&typeof r!="function",Lt=Array.isArray,as=r=>Lt(r)||typeof(r==null?void 0:r[Symbol.iterator])=="function",gt=`[ 	
\f\r]`,Ie=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,Yt=/-->/g,Vt=/>/g,le=RegExp(`>|${gt}(?:([^\\s"'>=/]+)(${gt}*=${gt}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),qt=/'/g,Gt=/"/g,ns=/^(?:script|style|textarea|title)$/i,Xs=r=>(e,...t)=>({_$litType$:r,strings:e,values:t}),c=Xs(1),E=Symbol.for("lit-noChange"),f=Symbol.for("lit-nothing"),Xt=new WeakMap,he=ue.createTreeWalker(ue,129);function ls(r,e){if(!Lt(r)||!r.hasOwnProperty("raw"))throw Error("invalid template strings array");return Wt!==void 0?Wt.createHTML(e):e}const ds=(r,e)=>{const t=r.length-1,i=[];let s,o=e===2?"<svg>":e===3?"<math>":"",a=Ie;for(let d=0;d<t;d++){const l=r[d];let h,g,u=-1,_=0;for(;_<l.length&&(a.lastIndex=_,g=a.exec(l),g!==null);)_=a.lastIndex,a===Ie?g[1]==="!--"?a=Yt:g[1]!==void 0?a=Vt:g[2]!==void 0?(ns.test(g[2])&&(s=RegExp("</"+g[2],"g")),a=le):g[3]!==void 0&&(a=le):a===le?g[0]===">"?(a=s??Ie,u=-1):g[1]===void 0?u=-2:(u=a.lastIndex-g[2].length,h=g[1],a=g[3]===void 0?le:g[3]==='"'?Gt:qt):a===Gt||a===qt?a=le:a===Yt||a===Vt?a=Ie:(a=le,s=void 0);const w=a===le&&r[d+1].startsWith("/>")?" ":"";o+=a===Ie?l+Gs:u>=0?(i.push(h),l.slice(0,u)+Ot+l.slice(u)+Z+w):l+Z+(u===-2?d:w)}return[ls(r,o+(r[t]||"<?>")+(e===2?"</svg>":e===3?"</math>":"")),i]};class Ue{constructor({strings:e,_$litType$:t},i){let s;this.parts=[];let o=0,a=0;const d=e.length-1,l=this.parts,[h,g]=ds(e,t);if(this.el=Ue.createElement(h,i),he.currentNode=this.el.content,t===2||t===3){const u=this.el.content.firstChild;u.replaceWith(...u.childNodes)}for(;(s=he.nextNode())!==null&&l.length<d;){if(s.nodeType===1){if(s.hasAttributes())for(const u of s.getAttributeNames())if(u.endsWith(Ot)){const _=g[a++],w=s.getAttribute(u).split(Z),$=/([.?@])?(.*)/.exec(_);l.push({type:1,index:o,name:$[2],strings:w,ctor:$[1]==="."?hs:$[1]==="?"?us:$[1]==="@"?gs:Ne}),s.removeAttribute(u)}else u.startsWith(Z)&&(l.push({type:6,index:o}),s.removeAttribute(u));if(ns.test(s.tagName)){const u=s.textContent.split(Z),_=u.length-1;if(_>0){s.textContent=tt?tt.emptyScript:"";for(let w=0;w<_;w++)s.append(u[w],je()),he.nextNode(),l.push({type:2,index:++o});s.append(u[_],je())}}}else if(s.nodeType===8)if(s.data===Et)l.push({type:2,index:o});else{let u=-1;for(;(u=s.data.indexOf(Z,u+1))!==-1;)l.push({type:7,index:o}),u+=Z.length-1}o++}}static createElement(e,t){const i=ue.createElement("template");return i.innerHTML=e,i}}function ge(r,e,t=r,i){var a,d;if(e===E)return e;let s=i!==void 0?(a=t.o)==null?void 0:a[i]:t.l;const o=Re(e)?void 0:e._$litDirective$;return(s==null?void 0:s.constructor)!==o&&((d=s==null?void 0:s._$AO)==null||d.call(s,!1),o===void 0?s=void 0:(s=new o(r),s._$AT(r,t,i)),i!==void 0?(t.o??(t.o=[]))[i]=s:t.l=s),s!==void 0&&(e=ge(r,s._$AS(r,e.values),s,i)),e}class cs{constructor(e,t){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){const{el:{content:t},parts:i}=this._$AD,s=((e==null?void 0:e.creationScope)??ue).importNode(t,!0);he.currentNode=s;let o=he.nextNode(),a=0,d=0,l=i[0];for(;l!==void 0;){if(a===l.index){let h;l.type===2?h=new at(o,o.nextSibling,this,e):l.type===1?h=new l.ctor(o,l.name,l.strings,this,e):l.type===6&&(h=new vs(o,this,e)),this._$AV.push(h),l=i[++d]}a!==(l==null?void 0:l.index)&&(o=he.nextNode(),a++)}return he.currentNode=ue,s}p(e){let t=0;for(const i of this._$AV)i!==void 0&&(i.strings!==void 0?(i._$AI(e,i,t),t+=i.strings.length-2):i._$AI(e[t])),t++}}let at=class ps{get _$AU(){var e;return((e=this._$AM)==null?void 0:e._$AU)??this.v}constructor(e,t,i,s){this.type=2,this._$AH=f,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=i,this.options=s,this.v=(s==null?void 0:s.isConnected)??!0}get parentNode(){let e=this._$AA.parentNode;const t=this._$AM;return t!==void 0&&(e==null?void 0:e.nodeType)===11&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=ge(this,e,t),Re(e)?e===f||e==null||e===""?(this._$AH!==f&&this._$AR(),this._$AH=f):e!==this._$AH&&e!==E&&this._(e):e._$litType$!==void 0?this.$(e):e.nodeType!==void 0?this.T(e):as(e)?this.k(e):this._(e)}O(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.O(e))}_(e){this._$AH!==f&&Re(this._$AH)?this._$AA.nextSibling.data=e:this.T(ue.createTextNode(e)),this._$AH=e}$(e){var o;const{values:t,_$litType$:i}=e,s=typeof i=="number"?this._$AC(e):(i.el===void 0&&(i.el=Ue.createElement(ls(i.h,i.h[0]),this.options)),i);if(((o=this._$AH)==null?void 0:o._$AD)===s)this._$AH.p(t);else{const a=new cs(s,this),d=a.u(this.options);a.p(t),this.T(d),this._$AH=a}}_$AC(e){let t=Xt.get(e.strings);return t===void 0&&Xt.set(e.strings,t=new Ue(e)),t}k(e){Lt(this._$AH)||(this._$AH=[],this._$AR());const t=this._$AH;let i,s=0;for(const o of e)s===t.length?t.push(i=new ps(this.O(je()),this.O(je()),this,this.options)):i=t[s],i._$AI(o),s++;s<t.length&&(this._$AR(i&&i._$AB.nextSibling,s),t.length=s)}_$AR(e=this._$AA.nextSibling,t){var i;for((i=this._$AP)==null?void 0:i.call(this,!1,!0,t);e&&e!==this._$AB;){const s=e.nextSibling;e.remove(),e=s}}setConnected(e){var t;this._$AM===void 0&&(this.v=e,(t=this._$AP)==null||t.call(this,e))}};class Ne{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,t,i,s,o){this.type=1,this._$AH=f,this._$AN=void 0,this.element=e,this.name=t,this._$AM=s,this.options=o,i.length>2||i[0]!==""||i[1]!==""?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=f}_$AI(e,t=this,i,s){const o=this.strings;let a=!1;if(o===void 0)e=ge(this,e,t,0),a=!Re(e)||e!==this._$AH&&e!==E,a&&(this._$AH=e);else{const d=e;let l,h;for(e=o[0],l=0;l<o.length-1;l++)h=ge(this,d[i+l],t,l),h===E&&(h=this._$AH[l]),a||(a=!Re(h)||h!==this._$AH[l]),h===f?e=f:e!==f&&(e+=(h??"")+o[l+1]),this._$AH[l]=h}a&&!s&&this.j(e)}j(e){e===f?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}}class hs extends Ne{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===f?void 0:e}}class us extends Ne{constructor(){super(...arguments),this.type=4}j(e){this.element.toggleAttribute(this.name,!!e&&e!==f)}}class gs extends Ne{constructor(e,t,i,s,o){super(e,t,i,s,o),this.type=5}_$AI(e,t=this){if((e=ge(this,e,t,0)??f)===E)return;const i=this._$AH,s=e===f&&i!==f||e.capture!==i.capture||e.once!==i.once||e.passive!==i.passive,o=e!==f&&(i===f||s);s&&this.element.removeEventListener(this.name,this,i),o&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){var t;typeof this._$AH=="function"?this._$AH.call(((t=this.options)==null?void 0:t.host)??this.element,e):this._$AH.handleEvent(e)}}class vs{constructor(e,t,i){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(e){ge(this,e)}}const Ks={M:Ot,P:Z,A:Et,C:1,L:ds,R:cs,D:as,V:ge,I:at,H:Ne,N:us,U:gs,B:hs,F:vs},vt=Fe.litHtmlPolyfillSupport;vt==null||vt(Ue,at),(Fe.litHtmlVersions??(Fe.litHtmlVersions=[])).push("3.2.0");const Zs=(r,e,t)=>{const i=(t==null?void 0:t.renderBefore)??e;let s=i._$litPart$;if(s===void 0){const o=(t==null?void 0:t.renderBefore)??null;i._$litPart$=s=new at(e.insertBefore(je(),o),o,void 0,t??{})}return s._$AI(r),s};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class y extends me{constructor(){super(...arguments),this.renderOptions={host:this},this.o=void 0}createRenderRoot(){var t;const e=super.createRenderRoot();return(t=this.renderOptions).renderBefore??(t.renderBefore=e.firstChild),e}update(e){const t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this.o=Zs(t,this.renderRoot,this.renderOptions)}connectedCallback(){var e;super.connectedCallback(),(e=this.o)==null||e.setConnected(!0)}disconnectedCallback(){var e;super.disconnectedCallback(),(e=this.o)==null||e.setConnected(!1)}render(){return E}}var rs;y._$litElement$=!0,y.finalized=!0,(rs=globalThis.litElementHydrateSupport)==null||rs.call(globalThis,{LitElement:y});const bt=globalThis.litElementPolyfillSupport;bt==null||bt({LitElement:y});(globalThis.litElementVersions??(globalThis.litElementVersions=[])).push("4.1.0");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const v=r=>(e,t)=>{t!==void 0?t.addInitializer(()=>{customElements.define(r,e)}):customElements.define(r,e)};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Qs={attribute:!0,type:String,converter:et,reflect:!1,hasChanged:Pt},Js=(r=Qs,e,t)=>{const{kind:i,metadata:s}=t;let o=globalThis.litPropertyMetadata.get(s);if(o===void 0&&globalThis.litPropertyMetadata.set(s,o=new Map),o.set(t.name,r),i==="accessor"){const{name:a}=t;return{set(d){const l=e.get.call(this);e.set.call(this,d),this.requestUpdate(a,l,r)},init(d){return d!==void 0&&this.P(a,void 0,r),d}}}if(i==="setter"){const{name:a}=t;return function(d){const l=this[a];e.call(this,d),this.requestUpdate(a,l,r)}}throw Error("Unsupported decorator location: "+i)};function n(r){return(e,t)=>typeof t=="object"?Js(r,e,t):((i,s,o)=>{const a=s.hasOwnProperty(o);return s.constructor.createProperty(o,a?{...i,wrapped:!0}:i),a?Object.getOwnPropertyDescriptor(s,o):void 0})(r,e,t)}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function b(r){return n({...r,state:!0,attribute:!1})}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const kt=(r,e,t)=>(t.configurable=!0,t.enumerable=!0,Reflect.decorate&&typeof e!="object"&&Object.defineProperty(r,e,t),t);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function It(r,e){return(t,i,s)=>{const o=a=>{var d;return((d=a.renderRoot)==null?void 0:d.querySelector(r))??null};return kt(t,i,{get(){return o(this)}})}}/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function N(r){return(e,t)=>{const{slot:i,selector:s}=r??{},o="slot"+(i?`[name=${i}]`:":not([name])");return kt(e,t,{get(){var l;const a=(l=this.renderRoot)==null?void 0:l.querySelector(o),d=(a==null?void 0:a.assignedElements(r))??[];return s===void 0?d:d.filter(h=>h.matches(s))}})}}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function ei(r){return(e,t)=>{const{slot:i}={},s="slot"+(i?`[name=${i}]`:":not([name])");return kt(e,t,{get(){var a;const o=(a=this.renderRoot)==null?void 0:a.querySelector(s);return(o==null?void 0:o.assignedNodes(r))??[]}})}}const ti=m`:host{display:block}#panel{display:grid;grid-template-rows:0fr;transition:grid-template-rows var(--animation-duration),margin var(--animation-duration);transition:grid-template-rows var(--animation-duration),margin var(--animation-duration),-ms-grid-rows var(--animation-duration)}.content{overflow:hidden}.is-open #panel{grid-template-rows:1fr}.is-open .content{animation:revert-overflow calc(var(--animation-duration)*2) linear forwards}.header{cursor:pointer}#heading,.subheading{margin:0}sds-icon{vertical-align:bottom}.wrapper{--animation-duration:.5s;--icon-scale-x:1}.wrapper.is-open{--icon-scale-x:-1}.wrapper.subtle sds-icon{display:inline-block;margin-right:var(--spacing050);transform:scaleY(var(--icon-scale-x));transition:transform var(--animation-duration)}.wrapper.subtle button{background:none;border:none;color:var(--colorsActionMajor500);cursor:pointer;font:var(--typographyAccordionTitleS);padding:var(--spacing025)}.wrapper.subtle button.sds-focus:focus-visible{border-radius:var(--borderRadius000)}.wrapper.subtle button.hover,.wrapper.subtle button:hover{color:var(--colorsActionMajor600)}.wrapper.subtle .content{border-left:var(--borderWidth200) solid var(--colorsUtilityMajor100);margin-left:var(--spacing125);margin-top:var(--spacing200);padding:var(--spacing000) var(--spacing200) var(--spacing000) var(--spacing200);position:relative;transition:padding var(--animation-duration)}.wrapper.subtle.is-open .content{padding-bottom:var(--spacing300);padding-top:var(--spacing100)}.wrapper.standard{--title-font:var(--typographyAccordionTitleM);--subtitle-font:var(--typographyAccordionSubtitleM);--spacing:var(--spacing300);--icon-size:var(--sizing250);--paragraph-font:var(--typographyAccordionParagraphM);border:var(--borderWidth000) solid var(--colorsUtilityMajor100);border-top-width:var(--borderWidth100)}.wrapper.standard .header{padding:var(--spacing);padding-right:calc(var(--spacing)*2 + var(--icon-size));position:relative;transition:background .1s}.wrapper.standard .header.hover,.wrapper.standard .header:hover{background:var(--colorsUtilityMajor050)}.wrapper.standard .header #heading{font:var(--title-font)}.wrapper.standard .header .subheading{font:var(--subtitle-font)}.wrapper.standard .header #heading,.wrapper.standard .header .subheading{color:var(--colorsUtilityYin090)}.wrapper.standard .header.sds-focus:focus-visible{border-radius:var(--borderRadius000)}.wrapper.standard .header sds-icon{color:var(--colorsActionMinor500);position:absolute;right:var(--spacing);top:50%;transform:scaleY(var(--icon-scale-x)) translateY(-50%);transform-origin:50% 0;transition:transform var(--animation-duration)}.wrapper.standard #panel{margin:var(--spacing000) var(--spacing)}.wrapper.standard #panel ::slotted(*){font:var(--paragraph-font)}.wrapper.standard.size-s{--title-font:var(--typographyAccordionTitleS);--subtitle-font:var(--typographyAccordionSubtitleS);--spacing:var(--spacing200);--paragraph-font:var(--typographyAccordionParagraphS)}.wrapper.standard.is-open #panel{margin-bottom:var(--spacing);margin-top:var(--spacing100)}:host(:last-of-type) .wrapper{border-bottom-width:var(--borderWidth100)}@keyframes revert-overflow{0%{overflow:hidden}to{overflow:visible;overflow:initial}}`;/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const bs=Symbol.for(""),si=r=>{if((r==null?void 0:r.r)===bs)return r==null?void 0:r._$litStatic$},F=(r,...e)=>({_$litStatic$:e.reduce((t,i,s)=>t+(o=>{if(o._$litStatic$!==void 0)return o._$litStatic$;throw Error(`Value passed to 'literal' function must be a 'literal' result: ${o}. Use 'unsafeStatic' to pass non-literal values, but
            take care to ensure page security.`)})(i)+r[s+1],r[0]),r:bs}),Kt=new Map,ii=r=>(e,...t)=>{const i=t.length;let s,o;const a=[],d=[];let l,h=0,g=!1;for(;h<i;){for(l=e[h];h<i&&(o=t[h],(s=si(o))!==void 0);)l+=s+e[++h],g=!0;h!==i&&d.push(o),a.push(l),h++}if(h===i&&a.push(e[i]),g){const u=a.join("$$lit$$");(e=Kt.get(u))===void 0&&(a.raw=a,Kt.set(u,e=a)),t=d}return r(e,...t)},Ke=ii(c),V=m`
.sds-focus-within:focus-within{border-radius:var(--borderRadius050);box-shadow:
        0 0 0 var(--borderWidth300) var(--colorsSemanticFocus500),
        0 0 0 var(--borderWidth600) #000f;outline:none;outline-offset:0;position:relative}.sds-focus:focus-visible{border-radius:var(--borderRadius050);box-shadow:
        0 0 0 var(--borderWidth300) var(--colorsSemanticFocus500),
        0 0 0 var(--borderWidth600) #000f;outline:none;outline-offset:0;position:relative}.sds-focus:disabled{cursor:not-allowed}.sds-focus:disabled *{pointer-events:none}
`,Ze={call:"\\e93d",mobile:"\\e932",fax:"\\e925",email:"\\e922",email_switch:"\\e996",marker:"\\e93f"},_t={person:"\\e93c",person_info:"\\e994",person_tick:"\\e97b",people:"\\e93b",people_switch:"\\e995",business:"\\e90d",shop:"\\e947",bank:"\\e977"},fs={home:"\\e929",dashboard:"\\f007",settings:"\\e91a",search:"\\e92f",feedback:"\\e930",logout:"\\e92e",alert:"\\e90b",alert_on:"\\f001",talk:"\\e95a"},D={calendar:"\\e90e",calendar_today:"\\e970",dropdown:"\\e910",caret_up:"\\e9a8",caret_left:"\\e9a6",caret_right:"\\e9a7",caret_large_down:"\\e9a4",caret_large_up:"\\e9a5",caret_large_left:"\\e9a2",caret_large_right:"\\e9a3",plus:"\\e940",plus_large:"\\e967",minus:"\\e931",minus_large:"\\e968",edit:"\\e93a",edited:"\\e938",favourite:"\\e94f",favourite_lined:"\\e94e",credit_card:"\\e91c",credit_card_slash:"\\e966",save:"\\e926",uploaded:"\\e905",arrow_left_boxed:"\\e988",question:"\\e943",info:"\\e92a",download:"\\e900",upload:"\\e906",share:"\\e946",close:"\\e91e",cross:"\\e91d",cross_circle:"\\e992",filter:"\\e928",refresh:"\\e945",computer_clock:"\\e997",refresh_clock:"\\e986",sync:"\\e944",attach:"\\e937",camera:"\\e90f",image:"\\e93e",folder:"\\e927",help:"\\e951",connect:"\\e955",disconnect:"\\e953",split:"\\e952",filter_new:"\\e954",delivery:"\\e959",chat:"\\e914",chat_notes:"\\e956",bullet_list:"\\e95b",bullet_list_numbers:"\\e989",bullet_list_dotted:"\\e98a",view:"\\e957",hide:"\\e998",video:"\\e95e",play:"\\e95f",pause:"\\e96d",play_circle:"\\e96c",pause_circle:"\\e96b",scan:"\\e96e",lookup:"\\e96f",bold:"\\e98c",italic:"\\e98b",undo:"\\e9aa",box_arrow_left:"\\f006"},Qe={cart:"\\e90a",basket_with_squares:"\\e975",delete:"\\e90c",print:"\\e942",csv:"\\e94a",pdf:"\\e91f",duplicate:"\\e921",copy:"\\e91b",check_all:"\\f028",check_none:"\\f029"},Je={chevron_up:"\\e918",chevron_down:"\\e915",chevron_right:"\\e917",chevron_left:"\\e916",chevron_up_thick:"\\e99d",chevron_down_thick:"\\e99c",chevron_left_thick:"\\e99f",chevron_right_thick:"\\e99e",link:"\\e92d",list_view:"\\e92c",card_view:"\\e94b",sort_down:"\\e948",sort_up:"\\e949",arrow_left:"\\e902",arrow_right:"\\e904",arrow_down:"\\e901",arrow_up:"\\e907",arrow_left_right_small:"\\e964",arrow_left_small:"\\e963",arrow_right_small:"\\e962",block_arrow_right:"\\e97e",drag_vertical:"\\e94d",drag:"\\e94c",fit_height:"\\e909",fit_width:"\\e908",ellipsis_horizontal:"\\e960",ellipsis_vertical:"\\e961",u_turn_left:"\\f004",u_turn_right:"\\f005"},ce={error:"\\e923",warning:"\\e924",tick:"\\e950",tick_circle:"\\e993",tick_thick:"\\f003",draft:"\\e939",progressed:"\\e903",in_progress:"\\e920",clock:"\\e919",locked:"\\e935",unlocked:"\\e936",gift:"\\e941",blocked:"\\e933",key:"\\e92b",chart_line:"\\e912",chart_pie:"\\e913",chart_bar:"\\e911",blocked_square:"\\e934",disputed:"\\e958",lightbulb_on:"\\e95d",lightbulb_off:"\\e95c"},ms={boxed_shapes:"\\e982",circles_connection:"\\e979",document_right_align:"\\e981",document_tick:"\\e980",document_vertical_lines:"\\e978",error_square:"\\e97f",factory:"\\e976",files_leaning:"\\e97a",ledger:"\\e973",ledger_arrow_left:"\\e971",ledger_arrow_right:"\\e972",money_bag:"\\e974",spanner:"\\e984",split_container:"\\e987",stacked_boxes:"\\e97c",tag:"\\e985",three_boxes:"\\e97d",circle_with_dots:"\\e965",squares_nine:"\\e969",coins:"\\e96a",file_generic:"\\e991",file_pdf:"\\e990",file_excel:"\\e98e",file_word:"\\e98f",file_image:"\\e98d",euro:"\\e9a0",pound:"\\e9a1",stacked_squares:"\\e983",expand:"\\e99b",flag:"\\e999",square_dot:"\\e99a",envelope_dollar:"\\e9ab",envelope_euro:"\\e9a9",sage_coin:"\\e9ac",palm_tree:"\\f002",arrow_bottom_right_circle:"\\f014",arrow_top_left_circle:"\\f017",arrows_left_right:"\\f027",bank_with_card:"\\f019",bed:"\\f010",car_lock:"\\f021",car_money:"\\f011",car_repair:"\\f022",cash:"\\f020",construction:"\\f008",drill:"\\f015",form_refresh:"\\f018",graduation_hat:"\\f013",hand_cash_coins:"\\f009",hand_cash_note:"\\f024",laptop:"\\f012",percentage_boxed:"\\f016",petrol_pump:"\\f026",plane:"\\f025",theatre_masks:"\\f023",accessibility_web:"\\f045",app_facebook:"\\f052",app_instagram:"\\f046",app_tiktok:"\\f035",app_twitter:"\\f041",app_youtube:"\\f047",apps:"\\f040",bill_paid:"\\f049",bill_unpaid:"\\f063",box_arrow_right:"\\f057",calendar_pay_date:"\\f038",card_wallet:"\\f030",connect_off:"\\f053",heart_pulse:"\\f031",intranet:"\\f048",job_seeked:"\\f037",like:"\\f056",link_cloud:"\\f036",link_on:"\\f043",microphone:"\\f054",protect:"\\f044",recruiting:"\\f033",send:"\\f055",support_online:"\\f032",target_man:"\\f050",target:"\\f042",volunteering:"\\f039",website:"\\f051",welfare:"\\f034",contact_card:"\\f059",cloud_co2:"\\f060",leaf:"\\f061",like_no:"\\f058",minimise:"\\f062",pin:"\\f064"},ri={add:D.plus,create:D.plus,services:D.plus,admin:D.favourite,analysis:ce.chart_line,graph:ce.chart_line,basket:Qe.cart,bin:Qe.delete,bulk_destroy:Qe.delete,caret_down:D.dropdown,collaborate:D.share,contacts:_t.people,entry:Je.list_view,go:ce.progressed,submitted:ce.progressed,grid:D.split,individual:_t.person,location:Ze.marker,message:Ze.email,old_warning:ce.warning,phone:Ze.call,piggy_bank:D.save,question_hollow:D.video,question_mark:D.question,remove:D.minus,settings_old:fs.settings,true_tick:ce.tick,arrow:Je.arrow_right,in_transit:Je.arrow_left_right_small,progress:ms.circle_with_dots},ys={...Ze,..._t,...fs,...D,...Qe,...Je,...ce,...ms,...ri,none:""};Object.keys(ys).sort();var oi=Object.defineProperty,ai=Object.getOwnPropertyDescriptor,ws=(r,e,t,i)=>{for(var s=i>1?void 0:i?ai(e,t):e,o=r.length-1,a;o>=0;o--)(a=r[o])&&(s=(i?a(e,t,s):a(s))||s);return i&&s&&oi(e,t,s),s};exports.Icon=class extends y{constructor(){super(...arguments),this.type="square_dot"}get iconCode(){return ys[this.type]}render(){return c`
      <style>
        ${this._parseStyles()}</style
      ><i class="sds-icon icon-content"></i>
    `}_parseStyles(){return`
      .icon-content::before {
        content: "${this.iconCode}";
      }
    `}};exports.Icon.styles=m`
.sds-icon{display:contents;vertical-align:inherit}
.sds-icon:before{font-family:CarbonIcons;font-style:normal;font-weight:400;vertical-align:inherit;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}
  `;ws([n({reflect:!0})],exports.Icon.prototype,"type",2);exports.Icon=ws([v("sds-icon")],exports.Icon);var ni=Object.defineProperty,li=Object.getOwnPropertyDescriptor,nt=(r,e,t,i)=>{for(var s=i>1?void 0:i?li(e,t):e,o=r.length-1,a;o>=0;o--)(a=r[o])&&(s=(i?a(e,t,s):a(s))||s);return i&&s&&ni(e,t,s),s};exports.Divider=class extends y{constructor(){super(...arguments),this.direction="horizontal",this.contrast="standard",this.background="light"}render(){const e=this.background==="dark"?this.contrast==="strong"?"var(--colorsUtilityMajor050)":"var(--colorsUtilityMajor200)":this.contrast==="strong"?"var(--colorsUtilityMajor500)":"var(--colorsUtilityMajor100)";return c`
      <hr class="${this.direction}" style="--divider-color: ${e}" />
    `}};exports.Divider.styles=m`
hr{border:none;margin:var(--spacing000)}
hr.horizontal{border-top:var(--borderWidth100) solid var(--divider-color);width:100%}
hr.vertical{border-left:var(--borderWidth100) solid var(--divider-color);height:100%}
  `;nt([n({reflect:!0,type:String})],exports.Divider.prototype,"direction",2);nt([n({type:String})],exports.Divider.prototype,"contrast",2);nt([n({type:String})],exports.Divider.prototype,"background",2);exports.Divider=nt([v("sds-divider")],exports.Divider);var di=Object.defineProperty,ci=Object.getOwnPropertyDescriptor,se=(r,e,t,i)=>{for(var s=i>1?void 0:i?ci(e,t):e,o=r.length-1,a;o>=0;o--)(a=r[o])&&(s=(i?a(e,t,s):a(s))||s);return i&&s&&di(e,t,s),s};exports.Accordion=class extends y{constructor(){super(...arguments),this.heading="",this.importance="standard",this.size="M",this.open=!1,this.headingLevel="h3",this.isHovered=!1}getHeadingTag(){return{h1:F`h1`,h2:F`h2`,h3:F`h3`,h4:F`h4`,h5:F`h5`}[this.headingLevel]}getSubheadingTag(){return{h1:F`h2`,h2:F`h3`,h3:F`h4`,h4:F`h5`,h5:F`h6`}[this.headingLevel]}getChevronIcon(){return this.size==="S"?"chevron_down_thick":"chevron_down"}onClick(){this.open=!this.open}onKeyDown(e){(e.key==="Enter"||e.key==="Space")&&(this.open=!this.open)}_handleMouseEnter(){this.isHovered=!0}_handleMouseLeave(){this.isHovered=!1}getStandardHeader(){const e=this.getHeadingTag(),t=this.getSubheadingTag();return c`<div
      tabindex="0"
      role="button"
      aria-expanded=${this.open}
      aria-controls="panel"
      class="header sds-focus${this.isHovered?" hover":""}"
      @click=${()=>{this.onClick()}}
      @keydown=${i=>{this.onKeyDown(i)}}
      @mouseenter="${()=>{this._handleMouseEnter()}}"
      @mouseleave="${()=>{this._handleMouseLeave()}}"
    >
      ${Ke`<${e} id="heading">${this.heading}</${e}>`}
      ${this.subheading?Ke`<${t} class="subheading">${this.subheading}</${t}>`:f}
      <sds-icon type="${this.getChevronIcon()}"></sds-icon>
    </div>`}getSubtleHeader(){const e=this.getHeadingTag();return c`
      ${Ke`<${e} id="heading">${c`<button
        type="button"
        aria-expanded=${this.open}
        aria-controls="panel"
        class="sds-focus${this.isHovered?" hover":""}"
        @click=${()=>{this.onClick()}}
        @mouseenter="${()=>{this._handleMouseEnter()}}"
        @mouseleave="${()=>{this._handleMouseLeave()}}"
      >
        <sds-icon type="chevron_down_thick"></sds-icon> ${this.heading}
      </button>`}</${e}>`}
    `}connectedCallback(){super.connectedCallback(),this.slot=this.hasAttribute("slot")?this.slot:"accordions"}render(){const e=`${this.importance==="subtle"?"subtle":"standard"} size-${this.size.toLowerCase()} ${this.open?"is-open":"is-closed"}`;return c`<div class="wrapper ${e}">
      ${this.importance!=="subtle"?this.getStandardHeader():this.getSubtleHeader()}

      <div
        id="panel"
        role="region"
        aria-labelledby="heading"
        aria-hidden=${!this.open}
      >
        <div class="content">
          <slot></slot>
        </div>
      </div>
    </div>`}};exports.Accordion.styles=[ti,V];exports.Accordion.shadowRootOptions={...y.shadowRootOptions,delegatesFocus:!0};se([n()],exports.Accordion.prototype,"heading",2);se([n()],exports.Accordion.prototype,"subheading",2);se([n()],exports.Accordion.prototype,"importance",2);se([n()],exports.Accordion.prototype,"size",2);se([n({type:Boolean})],exports.Accordion.prototype,"open",2);se([n({attribute:"heading-level"})],exports.Accordion.prototype,"headingLevel",2);se([b()],exports.Accordion.prototype,"isHovered",2);exports.Accordion=se([v("sds-accordion")],exports.Accordion);const pi=["Alt","ArrowDown","ArrowLeft","ArrowRight","ArrowUp","Backspace","End","Enter","Escape","Home","Shift","Space","Tab"],k=pi.reduce((r,e)=>(r[e]=e,r),{});function st(r,e){return e.map(t=>t.toString()).includes(r)}class Be{constructor(e,t){this.config=t,this.hasInitialized=!1,e.addEventListener("change",this.handleChange.bind(this)),e.addEventListener("keydown",this.handleKeyDown.bind(this)),e.addEventListener("focusin",this.handleFocusIn.bind(this))}get inputComponents(){return this.config.inputComponents}hostUpdated(){this.hasInitialized||(this.hasInitialized=!0,this.setTabIndexes())}handleChange(e){const t=e.target;this.inputComponents.filter(i=>i!==t).forEach(i=>{this.config.setSelected(i,!1)}),this.setTabIndexes(),this.config.onAfterChange&&this.config.onAfterChange(t)}handleKeyDown(e){const t=st(e.key,[k.ArrowDown,k.ArrowRight]),i=st(e.key,[k.ArrowUp,k.ArrowLeft]),s=e.key===k.Home,o=e.key===k.End;if(!t&&!i&&!s&&!o)return;e.preventDefault();const a=this.inputComponents.findIndex(u=>e.target===u),d=0,l=this.inputComponents.length-1;let h=0;t?a===-1||a>=l?h=this.config.cycleFocusStates?d:l:h=a+1:i?a===-1||a<=d?h=this.config.cycleFocusStates?l:0:h=a-1:s?h=0:o&&(h=l);const g=this.inputComponents.at(h);this.inputComponents.forEach((u,_)=>{_!==h&&(this.config.syncSelectionToFocus&&this.config.setSelected(u,!1),u.blur(),u.tabIndex=-1)}),g&&(this.config.syncSelectionToFocus&&(this.config.setSelected(g,!0),this.config.onAfterChange&&this.config.onAfterChange(g)),g.tabIndex=0,g.focus())}handleFocusIn(){this.setTabIndexes()}setTabIndexes(){const e=this.inputComponents.find(s=>!this.config.ignoreSelectedItemOnFocus&&this.config.isSelected(s)),t=this.inputComponents.find(s=>document.activeElement===s);function i(s,o){let a=0;s&&(s.tabIndex=0,a=-1),o.filter(d=>d!==s).forEach(d=>d.tabIndex=a)}e&&i(e,this.inputComponents),t&&i(t,this.inputComponents)}}var hi=Object.defineProperty,ui=Object.getOwnPropertyDescriptor,_s=(r,e,t,i)=>{for(var s=i>1?void 0:i?ui(e,t):e,o=r.length-1,a;o>=0;o--)(a=r[o])&&(s=(i?a(e,t,s):a(s))||s);return i&&s&&hi(e,t,s),s};exports.AccordionGroup=class extends y{constructor(){super(),this.singleSelectionController=(e=>new Be(this,{cycleFocusStates:!0,syncSelectionToFocus:!1,ignoreSelectedItemOnFocus:!0,get inputComponents(){return e.tabs},isSelected:t=>t.open,setSelected:(t,i)=>t.open=i}))(this),this.addController(this.singleSelectionController)}render(){return c`<slot name="accordions"></slot>`}};_s([N({flatten:!0,slot:"accordions"})],exports.AccordionGroup.prototype,"tabs",2);exports.AccordionGroup=_s([v("sds-accordion-group")],exports.AccordionGroup);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const U={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},_e=r=>(...e)=>({_$litDirective$:r,values:e});class $e{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,t,i){this.t=e,this._$AM=t,this.i=i}_$AS(e,t){return this.update(e,t)}update(e,t){return this.render(...t)}}/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const P=_e(class extends $e{constructor(r){var e;if(super(r),r.type!==U.ATTRIBUTE||r.name!=="class"||((e=r.strings)==null?void 0:e.length)>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(r){return" "+Object.keys(r).filter(e=>r[e]).join(" ")+" "}update(r,[e]){var i,s;if(this.st===void 0){this.st=new Set,r.strings!==void 0&&(this.nt=new Set(r.strings.join(" ").split(/\s/).filter(o=>o!=="")));for(const o in e)e[o]&&!((i=this.nt)!=null&&i.has(o))&&this.st.add(o);return this.render(e)}const t=r.element.classList;for(const o of this.st)o in e||(t.remove(o),this.st.delete(o));for(const o in e){const a=!!e[o];a===this.st.has(o)||(s=this.nt)!=null&&s.has(o)||(a?(t.add(o),this.st.add(o)):(t.remove(o),this.st.delete(o)))}return E}}),gi=m`.wrapper{--size:var(--sizing300);--border-color:var(--colorsSemanticNotificationTransparent);--padding-h:var(--spacing000);--font:var(--typographyBadgeLabelM);--transform-translate-v:0;--label-position:static;display:inline-block}.wrapper.has-label{--padding-h:var(--spacing050)}.wrapper.has-content{position:relative;--transform-translate-v:-50%;--label-position:absolute}.wrapper.micro{--size:var(--sizing100);--not-empty-padding-horizontal:var(--spacing025);--font:var(--typographyBadgeLabelS)}.wrapper.micro.has-label{--size:var(--sizing200)}.wrapper.dark{--border-color:var(--colorsSemanticNotificationYin100)}.wrapper.light{--border-color:var(--colorsSemanticNotificationYang100)}.label{align-items:center;background-color:var(--colorsSemanticNotification600);border:var(--borderWidth200) solid var(--border-color);border-radius:calc(var(--size)*2);color:var(--colorsSemanticNotificationYang100);display:flex;font:var(--font);justify-content:center;min-height:var(--size);min-width:var(--size);padding:var(--spacing000) var(--padding-h);position:var(--label-position);right:var(--spacing000);top:var(--spacing035);transform:translateY(var(--transform-translate-v));white-space:nowrap}`;function At(r){return function(e,t){const s=ei(r)(e,t);Object.defineProperty(e,t,{get(){return s.get?s.get.bind(this)().filter(h=>vi(h)):[]},enumerable:!0,configurable:!0})}}function vi(r){return r.nodeType===Node.ELEMENT_NODE?!Zt(r.outerHTML):r.nodeType===Node.TEXT_NODE?!Zt(r.data):!1}function Zt(r){return!/\S/.test(r)}var bi=Object.defineProperty,fi=Object.getOwnPropertyDescriptor,xe=(r,e,t,i)=>{for(var s=i>1?void 0:i?fi(e,t):e,o=r.length-1,a;o>=0;o--)(a=r[o])&&(s=(i?a(e,t,s):a(s))||s);return i&&s&&bi(e,t,s),s};exports.Badge=class extends y{constructor(){super(...arguments),this.size="standard",this.label="",this.hasContent=!1}get _classes(){const{size:e,background:t}=this;return{standard:e==="standard",micro:e==="micro",dark:t==="dark",light:t==="light","has-label":this.label.length>0,"has-content":this.hasContent}}handleSlotChange(){this.hasContent=this.content.length>0}render(){return c`
      <div class="wrapper ${P(this._classes)}">
        <div class="label">${this.label}</div>
        <slot
          @slotchange="${()=>{this.handleSlotChange()}}"
        ></slot>
      </div>
    `}};exports.Badge.styles=gi;xe([n()],exports.Badge.prototype,"size",2);xe([n()],exports.Badge.prototype,"label",2);xe([n()],exports.Badge.prototype,"background",2);xe([b()],exports.Badge.prototype,"hasContent",2);xe([At()],exports.Badge.prototype,"content",2);exports.Badge=xe([v("sds-badge")],exports.Badge);/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const p=r=>r??f,mi=m`.text{-webkit-text-decoration:underline;text-decoration:underline}sds-icon{font-size:var(--fontSizes400);vertical-align:calc(var(--spacing035)*-1)}button{-webkit-appearance:none;-moz-appearance:none;appearance:none;background:none;border:none;height:1lh;margin:var(--spacing000);outline:none;padding:var(--spacing000);top:calc(var(--border-bottom-width)/2);white-space:normal}button .text{position:relative;top:calc((var(--border-bottom-width)/2)*-1)}a,button{--border-bottom-width:var(--borderWidth400);--focus-color:var(--colorsActionMajorYin090);border-bottom:var(--border-bottom-width) solid var(--colorsTransparent);color:var(--colorsActionMajor500);display:inline;font:var(--typographyLinkTextM);position:relative;-webkit-text-decoration:none;text-decoration:none}a.hover,a:hover,button.hover,button:hover{color:var(--colorsActionMajor600)}a:focus-visible{background:var(--colorsSemanticFocus250);border-bottom-color:var(--colorsUtilityYin100);color:var(--focus-color);font:var(--typographyLinkTextFocusM);outline:none}button:focus-visible{background:var(--colorsSemanticFocus250);border-bottom-color:var(--colorsUtilityYin100);color:var(--focus-color);font:var(--typographyLinkTextFocusM);outline:none}a:focus-visible .text{-webkit-text-decoration:none;text-decoration:none}button:focus-visible .text{-webkit-text-decoration:none;text-decoration:none}a.size-l,button.size-l{font:var(--typographyLinkTextL)}a.size-l:focus-visible{font:var(--typographyLinkTextFocusL)}button.size-l:focus-visible{font:var(--typographyLinkTextFocusL)}a.size-l sds-icon,button.size-l sds-icon{vertical-align:calc(var(--spacing025)*-1)}a.style-subtle,button.style-subtle{color:var(--colorsActionMajorYin090)}a.style-subtle.hover,a.style-subtle:hover,button.style-subtle.hover,button.style-subtle:hover{color:var(--colorsActionMajor600)}a.style-subtle:focus-visible{color:var(--focus-color)}button.style-subtle:focus-visible{color:var(--focus-color)}a.style-negative,button.style-negative{color:var(--colorsSemanticNegative500)}a.style-negative.hover,a.style-negative:hover,button.style-negative.hover,button.style-negative:hover{color:var(--colorsSemanticNegative600)}a.style-negative:focus-visible{color:var(--focus-color)}button.style-negative:focus-visible{color:var(--focus-color)}`;var yi=Object.defineProperty,wi=Object.getOwnPropertyDescriptor,ie=(r,e,t,i)=>{for(var s=i>1?void 0:i?wi(e,t):e,o=r.length-1,a;o>=0;o--)(a=r[o])&&(s=(i?a(e,t,s):a(s))||s);return i&&s&&yi(e,t,s),s};exports.Link=class extends y{constructor(){super(...arguments),this.size="M",this.type="standard",this.trailingIcon=!1,this.isHovered=!1}_handleMouseEnter(){this.isHovered=!0}_handleMouseLeave(){this.isHovered=!1}render(){const e=this.icon?c`<sds-icon type="${this.icon}"></sds-icon>`:f,t=c`${this.trailingIcon?f:e}
      <span class="text"><slot></slot></span>
      ${this.trailingIcon?e:f}`,i=`size-${this.size.toLowerCase()} style-${this.type.toLowerCase()}${this.isHovered?" hover":""}${this.icon?` icon-${this.trailingIcon?"suffix":"prefix"}`:""}`;return this.href?c`<a
        tabindex="0"
        @mouseenter="${()=>{this._handleMouseEnter()}}"
        @mouseleave="${()=>{this._handleMouseLeave()}}"
        class=${i}
        href=${this.href}
        target=${p(this.target)}
      >
        ${t}
      </a>`:c`<button
      @mouseenter="${()=>{this._handleMouseEnter()}}"
      @mouseleave="${()=>{this._handleMouseLeave()}}"
      class=${i}
    >
      ${t}
    </button>`}};exports.Link.styles=mi;exports.Link.shadowRootOptions={...y.shadowRootOptions,delegatesFocus:!0};ie([n({reflect:!0})],exports.Link.prototype,"href",2);ie([n({reflect:!0})],exports.Link.prototype,"target",2);ie([n()],exports.Link.prototype,"size",2);ie([n()],exports.Link.prototype,"type",2);ie([n()],exports.Link.prototype,"icon",2);ie([n({type:Boolean,attribute:"trailing-icon",reflect:!0})],exports.Link.prototype,"trailingIcon",2);ie([b()],exports.Link.prototype,"isHovered",2);exports.Link=ie([v("sds-link")],exports.Link);const _i=m`:host{align-items:center;display:flex}.current{color:var(--colorsUtilityYin090);font:var(--typographyBreadcrumbCurrentPageM)}`;var $i=Object.defineProperty,xi=Object.getOwnPropertyDescriptor,Dt=(r,e,t,i)=>{for(var s=i>1?void 0:i?xi(e,t):e,o=r.length-1,a;o>=0;o--)(a=r[o])&&(s=(i?a(e,t,s):a(s))||s);return i&&s&&$i(e,t,s),s};exports.BreadcrumbItem=class extends y{constructor(){super(...arguments),this.current=!1,this.href=""}render(){return c`
      ${this.current?c`<span aria-current="page" class="current">
            <slot></slot>
          </span>`:c`<sds-link href=${this.href}>
            <slot></slot>
          </sds-link>`}
    `}};exports.BreadcrumbItem.styles=[_i];Dt([n({type:Boolean})],exports.BreadcrumbItem.prototype,"current",2);Dt([n({reflect:!0})],exports.BreadcrumbItem.prototype,"href",2);exports.BreadcrumbItem=Dt([v("sds-breadcrumb-item")],exports.BreadcrumbItem);const zi=m`:host{display:block}ol{border-radius:var(--borderRadius050);color:var(--colorsActionMajor500);display:inline-flex;flex-flow:row wrap;flex-direction:row;gap:var(--spacing050);list-style:none}li:not(:first-child) sds-breadcrumb-item:before{color:var(--colorsUtilityYin055);content:"/";display:inline-block;font:var(--typographyBreadcrumbSeparatorM);height:var(--lineHeights500);margin:0 var(--sizing075)}`;/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const $t="lit-localize-status";/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Si=r=>typeof r!="string"&&"strTag"in r,$s=(r,e,t)=>{let i=r[0];for(let s=1;s<r.length;s++)i+=e[t?t[s-1]:s-1],i+=r[s];return i};/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const xs=r=>Si(r)?$s(r.strings,r.values):r;let zs=xs,Qt=!1;function Ci(r){if(Qt)throw new Error("lit-localize can only be configured once");zs=r,Qt=!0}/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class Pi{constructor(e){this.__litLocalizeEventHandler=t=>{t.detail.status==="ready"&&this.host.requestUpdate()},this.host=e}hostConnected(){window.addEventListener($t,this.__litLocalizeEventHandler)}hostDisconnected(){window.removeEventListener($t,this.__litLocalizeEventHandler)}}const Oi=r=>r.addController(new Pi(r)),Ei=Oi;/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Ss=()=>(r,e)=>(r.addInitializer(Ei),r);/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class Cs{constructor(){this.settled=!1,this.promise=new Promise((e,t)=>{this._resolve=e,this._reject=t})}resolve(e){this.settled=!0,this._resolve(e)}reject(e){this.settled=!0,this._reject(e)}}/**
 * @license
 * Copyright 2014 Travis Webb
 * SPDX-License-Identifier: MIT
 */const K=[];for(let r=0;r<256;r++)K[r]=(r>>4&15).toString(16)+(r&15).toString(16);function Li(r){let e=0,t=8997,i=0,s=33826,o=0,a=40164,d=0,l=52210;for(let h=0;h<r.length;h++)t^=r.charCodeAt(h),e=t*435,i=s*435,o=a*435,d=l*435,o+=t<<8,d+=s<<8,i+=e>>>16,t=e&65535,o+=i>>>16,s=i&65535,l=d+(o>>>16)&65535,a=o&65535;return K[l>>8]+K[l&255]+K[a>>8]+K[a&255]+K[s>>8]+K[s&255]+K[t>>8]+K[t&255]}/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const ki="",Ii="h",Ai="s";function Di(r,e){return(e?Ii:Ai)+Li(typeof r=="string"?r:r.join(ki))}/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Jt=new WeakMap,es=new Map;function Fi(r,e,t){if(r){const i=(t==null?void 0:t.id)??Mi(e),s=r[i];if(s){if(typeof s=="string")return s;if("strTag"in s)return $s(s.strings,e.values,s.values);{let o=Jt.get(s);return o===void 0&&(o=s.values,Jt.set(s,o)),{...s,values:o.map(a=>e.values[a])}}}}return xs(e)}function Mi(r){const e=typeof r=="string"?r:r.strings;let t=es.get(e);return t===void 0&&(t=Di(e,typeof r!="string"&&!("strTag"in r)),es.set(e,t)),t}/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function ft(r){window.dispatchEvent(new CustomEvent($t,{detail:r}))}let it="",mt,Ps,rt,xt,Os,pe=new Cs;pe.resolve();let Ge=0;const Ti=r=>(Ci((e,t)=>Fi(Os,e,t)),it=Ps=r.sourceLocale,rt=new Set(r.targetLocales),rt.add(r.sourceLocale),xt=r.loadLocale,{getLocale:ji,setLocale:Ri}),ji=()=>it,Ri=r=>{if(r===(mt??it))return pe.promise;if(!rt||!xt)throw new Error("Internal error");if(!rt.has(r))throw new Error("Invalid locale code");Ge++;const e=Ge;return mt=r,pe.settled&&(pe=new Cs),ft({status:"loading",loadingLocale:r}),(r===Ps?Promise.resolve({templates:void 0}):xt(r)).then(i=>{Ge===e&&(it=r,mt=void 0,Os=i.templates,ft({status:"ready",readyLocale:r}),pe.resolve())},i=>{Ge===e&&(ft({status:"error",errorLocale:r,errorMessage:i.toString()}),pe.reject(i))}),pe.promise},Ui={"button.close":{default:"Close"},"breadcrumb.breadcrumb":{default:"Breadcrumbs"},"file-input.dragAndDropFile":{default:"or drag and drop your file"},"file-input.dragAndDropFiles":{default:"or drag and drop your files"},"file-input.errorFilesPrefix":{default:"Errors"},"file-input.noFiles":{default:"No files"},"file-input.selectFile":{default:"Select file"},"file-input.selectFiles":{default:"Select files"},"file-input.selectedFilesPrefix":{default:"Selected"},"file-input.uploadedFilesPrefix":{default:"Uploaded"},"file-tile.clear":{default:"Clear"},"file-tile.delete":{default:"Delete"},"file-tile.fileSelected":{default:"File selected"},"file-tile.fileTooLarge":{default:"Selected file is too large"},"file-tile.fileTypeNotSupported":{default:"Selected file type not supported"},"file-tile.fileUploaded":{default:"File uploaded"},"input.optional":{default:"optional"},"pagination.items":{default:"items"},"pagination.of":{default:"of"},"pagination.page":{default:"Page"},"pagination.pageNumber":{default:"Page Number"},"pagination.show":{default:"Show"},"textarea.charactersLeft":{default:"${charactersLeft} characters left",replacementKeys:["charactersLeft"]},"search.label":{default:"Search input"},"search.search":{default:"Search"}};function z(r,e){const t=Ui[r].default;let i=zs(t,{id:r});return e&&Object.entries(e).forEach(([s,o])=>{i=i.replace(`\${${s}}`,o)}),i}var Ni=Object.defineProperty,Bi=Object.getOwnPropertyDescriptor,Hi=(r,e,t,i)=>{for(var s=i>1?void 0:i?Bi(e,t):e,o=r.length-1,a;o>=0;o--)(a=r[o])&&(s=(i?a(e,t,s):a(s))||s);return i&&s&&Ni(e,t,s),s};exports.Breadcrumbs=class extends y{constructor(){super(...arguments),this.observer=null}connectedCallback(){super.connectedCallback(),this.observeChildChanges()}disconnectedCallback(){super.disconnectedCallback(),this.observer&&this.observer.disconnect()}observeChildChanges(){this.observer=new MutationObserver(()=>{this.requestUpdate()}),this.observer.observe(this,{childList:!0,subtree:!0,attributes:!0})}render(){return c`<nav
      aria-label=${z("breadcrumb.breadcrumb")}
      class="breadcrumb"
    >
      <ol>
        ${this.childrenToListItems()}
      </ol>
    </nav>`}childrenToListItems(){return Array.from(this.children).map(e=>{if(e.nodeName==="SDS-BREADCRUMB-ITEM"){const t=e.cloneNode(!0);return c`<li>${t}</li>`}return f})}};exports.Breadcrumbs.styles=[zi];exports.Breadcrumbs=Hi([v("sds-breadcrumbs")],exports.Breadcrumbs);var Wi=Object.defineProperty,I=(r,e,t,i)=>{for(var s=void 0,o=r.length-1,a;o>=0;o--)(a=r[o])&&(s=a(e,t,s)||s);return s&&Wi(e,t,s),s};const Te=class Te extends y{constructor(){super(),this.size="M",this.disabled=!1,this.href="",this.target="",this.type="submit",this.value="",this.trailingIcon=!1,this.tabIndex=0,this.isHovered=!1,this.hasLabel=!1,this.hasIcon=!1,this.internals=this.attachInternals()}connectedCallback(){super.connectedCallback(),this.addEventListener("click",e=>{var i;const t=this.internals.form;if(t&&this.type!=="button"&&!e.defaultPrevented){if(this.type==="reset"){t.reset();return}this.internals.setFormValue(this.value),(i=this.internals.form)==null||i.requestSubmit()}})}get _classes(){const e=this.disabled,t=this.size,i=this.isHovered,s=this.hasIcon&&!this.hasLabel;return{button:!0,disabled:e,"size-s":t=="S","size-m":t=="M","size-l":t=="L",hover:i,"icon-only":s}}handleIconChange(){this.hasIcon=this.slottedIcons.length>0}_handleMouseEnter(){this.isHovered=!0}_handleMouseLeave(){this.isHovered=!1}handleLabelChange(){this.hasLabel=this.mainContent.filter(e=>this.isVisibleNode(e)).length>0}isVisibleNode(e){if(!(e instanceof HTMLElement))return!0;const t=window.getComputedStyle(e);if(t.display==="none"||t.visibility==="hidden"||t.opacity==="0"||t.clipPath==="inset(50%)")return!1;const i=e.getBoundingClientRect();return i.width>0||i.height>0}renderButtonContent(){const e=c`<slot
      name="icon"
      class="icon"
      @slotchange="${()=>{this.handleIconChange()}}"
    ></slot>`,t=c`<slot
      class="content"
      @slotchange="${()=>{this.handleLabelChange()}}"
    ></slot> `;return c`
      ${this.trailingIcon?f:e} ${t}
      ${this.trailingIcon?e:f}
    `}render(){const e=this.href&&!this.disabled?F`a`:F`button`;return Ke`
          <${e} @mouseenter="${()=>{this._handleMouseEnter()}}" @mouseleave="${()=>{this._handleMouseLeave()}}"
            class="sds-focus ${P(this._classes)}"
            ?disabled=${this.disabled}
            aria-label="${this.ariaLabel??f}"
            aria-haspopup="${this.ariaHasPopup??f}"
            aria-expanded="${this.ariaExpanded??f}"
            href=${this.href||f}
            target=${this.target||f}
            tabindex="${this.tabIndex!==0?this.tabIndex:f}"
          >${this.renderButtonContent()}</${e}>`}};Te.formAssociated=!0,Te.shadowRootOptions={...y.shadowRootOptions,delegatesFocus:!0},Te.styles=[V,m`
:host{width:auto;width:var(--button-width,auto)}::slotted(sds-loader){vertical-align:bottom}.button{align-items:center;-webkit-appearance:button;-moz-appearance:button;appearance:button;box-sizing:border-box;cursor:pointer;display:inline-flex;font:var(--typographyButtonLabelM);gap:var(--spacing100);justify-content:center;max-width:100%;min-height:var(--sizing500);padding:var(--spacing000) var(--spacing300);-webkit-text-decoration:none;text-decoration:none;transition:none 0s ease 0s;transition:initial;width:var(--button-width)}.button.icon-only .content{display:none}.button.size-s{font:var(--typographyButtonLabelS)}.button.size-l{font:var(--typographyButtonLabelL)}.content{vertical-align:baseline}.icon{font-size:var(--fontSizes400)}::slotted(sds-icon){vertical-align:middle}
    `];let O=Te;I([n({reflect:!0})],O.prototype,"size");I([n({reflect:!0,type:Boolean})],O.prototype,"disabled");I([n({reflect:!0})],O.prototype,"href");I([n({reflect:!0})],O.prototype,"target");I([n({reflect:!0})],O.prototype,"type");I([n({reflect:!0})],O.prototype,"value");I([n({type:Boolean,attribute:"trailing-icon",reflect:!0})],O.prototype,"trailingIcon");I([n({type:Number})],O.prototype,"tabIndex");I([b()],O.prototype,"isHovered");I([b()],O.prototype,"hasLabel");I([b()],O.prototype,"hasIcon");I([N({slot:"icon",flatten:!0})],O.prototype,"slottedIcons");I([At()],O.prototype,"mainContent");var Yi=Object.defineProperty,Vi=(r,e,t,i)=>{for(var s=void 0,o=r.length-1,a;o>=0;o--)(a=r[o])&&(s=a(e,t,s)||s);return s&&Yi(e,t,s),s};class Es extends O{constructor(){super(...arguments),this.destructive=!1}get _classes(){const e=this.destructive;return{...super._classes,destructive:e}}}Vi([n({reflect:!0,type:Boolean})],Es.prototype,"destructive");var qi=Object.defineProperty,Gi=Object.getOwnPropertyDescriptor,Xi=Object.getPrototypeOf,Ki=Reflect.get,Ls=(r,e,t,i)=>{for(var s=i>1?void 0:i?Gi(e,t):e,o=r.length-1,a;o>=0;o--)(a=r[o])&&(s=(i?a(e,t,s):a(s))||s);return i&&s&&qi(e,t,s),s},Zi=(r,e,t)=>Ki(Xi(r),t,e);exports.Button=class extends Es{constructor(){super(...arguments),this.importance="primary"}get _classes(){const e=this.importance;return{...super._classes,[`importance-${e}`]:e}}};exports.Button.styles=[Zi(exports.Button,exports.Button,"styles"),m`
:host{--btn-border-top-left-radius:var(
          --border-top-left-radius,
          var(--borderRadius400)
        );--btn-border-top-right-radius:var(
          --border-top-right-radius,
          var(--borderRadius400)
        );--btn-border-bottom-right-radius:var(
          --border-bottom-right-radius,
          var(--borderRadius400)
        );--btn-border-bottom-left-radius:var(
          --border-bottom-left-radius,
          var(--borderRadius400)
        )}.button.importance-primary{background:var(--colorsActionMajor500);border:var(--borderWidth200) solid
            var(--colorsActionMajorTransparent);border-radius:var(--btn-border-top-left-radius)
            var(--btn-border-top-right-radius)
            var(--btn-border-bottom-right-radius)
            var(--btn-border-bottom-left-radius);color:var(--colorsActionMajorYang100)}.button.importance-primary.destructive{background:var(--colorsSemanticNegative500);border:var(--borderWidth200) solid
              var(--colorsSemanticNegativeTransparent)}.button.importance-primary.destructive:disabled{background:var(--colorsActionDisabled500);border-color:var(--colorsActionDisabled500);box-shadow:none}.button.importance-primary.destructive.hover:disabled,.button.importance-primary.destructive:disabled:hover,.button.importance-primary:disabled{background:var(--colorsActionDisabled500)}.button.importance-primary:disabled{border-color:var(--colorsActionDisabled500);box-shadow:none;color:var(--colorsActionMajorYin030)}.button.importance-primary.hover:disabled,.button.importance-primary:disabled:hover{background:var(--colorsActionDisabled500)}.button.importance-secondary{background:var(--colorsActionMajorTransparent);border:var(--borderWidth200) solid var(--colorsActionMajor500);border-radius:var(--btn-border-top-left-radius)
            var(--btn-border-top-right-radius)
            var(--btn-border-bottom-right-radius)
            var(--btn-border-bottom-left-radius);color:var(--colorsActionMajor500)}.button.importance-secondary.destructive{border:2px solid var(--colorsSemanticNegative500);color:var(--colorsSemanticNegative500)}.button.importance-secondary.destructive:disabled{border:var(--borderWidth200) solid var(--colorsActionDisabled500);border-color:var(--colorsActionDisabled500);box-shadow:none;color:var(--colorsActionMajorYin030)}.button.importance-secondary.destructive.hover:disabled,.button.importance-secondary.destructive:disabled:hover{background:transparent}.button.importance-secondary:disabled{border:var(--borderWidth200) solid var(--colorsActionDisabled500);border-color:var(--colorsActionDisabled500);box-shadow:none;color:var(--colorsActionMajorYin030)}.button.importance-secondary.hover:disabled,.button.importance-secondary:disabled:hover{background:transparent}.button.importance-tertiary{background:var(--colorsActionMajorTransparent);border:var(--borderWidth200) solid
            var(--colorsActionMajorTransparent);border-radius:var(--btn-border-top-left-radius)
            var(--btn-border-top-right-radius)
            var(--btn-border-bottom-right-radius)
            var(--btn-border-bottom-left-radius);color:var(--colorsActionMajor500)}.button.importance-tertiary.destructive{color:var(--colorsSemanticNegative500)}.button.importance-tertiary.destructive:disabled{border-color:transparent;box-shadow:none;color:var(--colorsActionMajorYin030)}.button.importance-tertiary.destructive.hover:disabled,.button.importance-tertiary.destructive:disabled:hover{background:transparent}.button.importance-tertiary:disabled{border-color:transparent;box-shadow:none;color:var(--colorsActionMajorYin030)}.button.importance-tertiary.hover:disabled,.button.importance-tertiary:disabled:hover{background:transparent}.button.icon-only{padding:0;width:var(--sizing500)}.button.size-s{min-height:var(--sizing400);padding:var(--spacing000) var(--spacing200)}.button.size-s.icon-only{padding:0;width:var(--sizing400)}.button.size-l{min-height:var(--sizing600);padding:var(--spacing000) var(--spacing400)}.button.size-l.icon-only{padding:0;width:var(--sizing600)}.button:hover{background:var(--colorsActionMajor600);border-color:var(--colorsActionMajor600);border-radius:var(--btn-border-top-left-radius)
            var(--btn-border-top-right-radius)
            var(--btn-border-bottom-right-radius)
            var(--btn-border-bottom-left-radius);color:var(--colorsActionMajorYang100)}.button.destructive:hover{background:var(--colorsSemanticNegative600);border:var(--borderWidth200) solid
              var(--colorsSemanticNegativeTransparent);border-color:var(--colorsSemanticNegative600);color:var(--colorsActionMajorYang100)}.button.hover{background:var(--colorsActionMajor600);border-color:var(--colorsActionMajor600);border-radius:var(--btn-border-top-left-radius)
            var(--btn-border-top-right-radius)
            var(--btn-border-bottom-right-radius)
            var(--btn-border-bottom-left-radius);color:var(--colorsActionMajorYang100)}.button.hover.destructive{background:var(--colorsSemanticNegative600);border:var(--borderWidth200) solid
              var(--colorsSemanticNegativeTransparent);border-color:var(--colorsSemanticNegative600);color:var(--colorsActionMajorYang100)}
    `];Ls([n({reflect:!0})],exports.Button.prototype,"importance",2);exports.Button=Ls([v("sds-button")],exports.Button);var Qi=Object.defineProperty,Ji=Object.getOwnPropertyDescriptor,er=Object.getPrototypeOf,tr=Reflect.get,sr=(r,e,t,i)=>{for(var s=i>1?void 0:i?Ji(e,t):e,o=r.length-1,a;o>=0;o--)(a=r[o])&&(s=(i?a(e,t,s):a(s))||s);return i&&s&&Qi(e,t,s),s},ir=(r,e,t)=>tr(er(r),t,e);exports.SubtleButton=class extends O{};exports.SubtleButton.styles=[ir(exports.SubtleButton,exports.SubtleButton,"styles"),m`
.button{background:none;border:none;border-radius:var(--borderRadius050);gap:var(--spacing050);padding:var(--spacing125) var(--spacing025) var(--spacing110)
          var(--spacing025)}
.button.size-s{min-height:var(--sizing400);padding:var(--spacing060) var(--spacing025) var(--spacing075)
            var(--spacing025)}
.button.size-l{min-height:var(--sizing300);padding:var(--spacing150) var(--spacing025) var(--spacing150)
            var(--spacing025)}
.button .content,.button .icon{color:var(--colorsActionMinor500)}
.button.icon-only{min-width:var(--sizing500)}
.button.icon-only.size-s{min-height:var(--sizing400);min-width:var(--sizing400)}
.button.icon-only.size-l{min-height:var(--sizing600);min-width:var(--sizing600)}
.button:hover{background:var(--colorsActionMinor100)}
.button:hover .content,.button:hover .icon{color:var(--colorsActionMinor600)}
.button.hover{background:var(--colorsActionMinor100)}
.button.hover .content,.button.hover .icon{color:var(--colorsActionMinor600)}
    `];exports.SubtleButton=sr([v("sds-button-subtle")],exports.SubtleButton);/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const ks="important",rr=" !"+ks,He=_e(class extends $e{constructor(r){var e;if(super(r),r.type!==U.ATTRIBUTE||r.name!=="style"||((e=r.strings)==null?void 0:e.length)>2)throw Error("The `styleMap` directive must be used in the `style` attribute and must be the only part in the attribute.")}render(r){return Object.keys(r).reduce((e,t)=>{const i=r[t];return i==null?e:e+`${t=t.includes("-")?t:t.replace(/(?:^(webkit|moz|ms|o)|)(?=[A-Z])/g,"-$&").toLowerCase()}:${i};`},"")}update(r,[e]){const{style:t}=r.element;if(this.ft===void 0)return this.ft=new Set(Object.keys(e)),this.render(e);for(const i of this.ft)e[i]==null&&(this.ft.delete(i),i.includes("-")?t.removeProperty(i):t[i]=null);for(const i in e){const s=e[i];if(s!=null){this.ft.add(i);const o=typeof s=="string"&&s.endsWith(rr);i.includes("-")||o?t.setProperty(i,o?s.slice(0,-11):s,o?ks:""):t[i]=s}}return E}});var or=Object.defineProperty,ar=Object.getOwnPropertyDescriptor,We=(r,e,t,i)=>{for(var s=i>1?void 0:i?ar(e,t):e,o=r.length-1,a;o>=0;o--)(a=r[o])&&(s=(i?a(e,t,s):a(s))||s);return i&&s&&or(e,t,s),s};exports.Card=class extends y{constructor(){super(...arguments),this.spacing="M",this.roundness="S",this.hasFooter=!1}get _classes(){const{spacing:e,roundness:t}=this;return P({"roundness-s":t=="S","roundness-l":t=="L","spacing-s":e=="S","spacing-m":e=="M","spacing-l":e=="L"})}render(){const e={display:this.hasFooter?"":"none"},t=this._classes;return c` <div class="sds-card ${t}">
      <slot name="content"></slot>
      <slot></slot>
      <slot
        name="footer"
        class="footer"
        style=${He(e)}
        @slotchange="${()=>{this.handleOptionalFooter()}}"
      ></slot>
    </div>`}handleOptionalFooter(){this.hasFooter=this.footerElements.length>0}};exports.Card.styles=m`
.sds-card{background-color:var(--colorsUtilityYang100);border-radius:var(--sizing100);box-shadow:var(--boxShadow050);display:block;padding:var(--spacing300)}
.sds-card.spacing-m{padding:var(--spacing400)}
.sds-card.spacing-m .footer{margin:calc(var(--spacing400)*-1);margin-top:var(--spacing400);padding:var(--spacing200) var(--spacing400)}
.sds-card.spacing-l{padding:var(--spacing500)}
.sds-card.spacing-l .footer{margin:calc(var(--spacing500)*-1);margin-top:var(--spacing500);padding:var(--spacing200) var(--spacing500)}
.sds-card.roundness-l{border-radius:var(--sizing200)}
.sds-card.roundness-l .footer{border-radius:0 0 var(--sizing200) var(--sizing200)}
.sds-card .footer{background:var(--colorsUtilityMajor025);border-radius:0 0 var(--sizing100) var(--sizing100);border-top:1px solid var(--colorsUtilityMajor100);display:block;margin:calc(var(--spacing300)*-1);margin-top:var(--spacing300);padding:var(--spacing200) var(--spacing300)}
  `;We([n()],exports.Card.prototype,"spacing",2);We([n()],exports.Card.prototype,"roundness",2);We([N({slot:"footer",flatten:!0})],exports.Card.prototype,"footerElements",2);We([b()],exports.Card.prototype,"hasFooter",2);exports.Card=We([v("sds-card")],exports.Card);function M(r,e){const t=new Event(e.type,e);return r.dispatchEvent(t)}const nr=m`:host{cursor:pointer;display:flex;outline:none}.sds-checkbox-input{-webkit-appearance:none;-moz-appearance:none;appearance:none;border:var(--borderWidth100) solid var(--colorsUtilityMajor300);border-radius:var(--borderRadius050);height:var(--input-size);width:var(--input-size)}.sds-checkbox-input:hover{cursor:pointer}.sds-checkbox-input.disabled{background:var(--colorsUtilityDisabled400);border:var(--borderWidth100) solid var(--colorsUtilityDisabled600);box-shadow:none;outline:none}.sds-checkbox-input.error{border:var(--borderWidth200) solid var(--colorsSemanticNegative500)}.sds-checkbox-input.read-only{background:var(--colorsUtilityDisabled400);border:var(--borderWidth100) solid var(--colorsUtilityDisabled600)}.sds-checkbox-input.read-only:checked{background:var(--colorsUtilityDisabled600);border:var(--borderWidth300) solid var(--colorsUtilityDisabled400);outline:var( --checkbox-error-outline,var(--borderWidth100) solid var(--colorsUtilityDisabled600) )}.sds-checkbox-input:not(.read-only):checked:before{--icon-font:carbonicons;content:"";display:block;font-family:carbonicons;font-family:var(--icon-font);font-size:var(--icon-size);height:var(--sizing125);padding:var(--spacing025);width:var(--sizing125)}:host(:focus-within) .sds-checkbox-input:not(.disabled){box-shadow:0 0 0 var(--borderWidth300) var(--colorsSemanticFocus500),0 0 0 var(--borderWidth600) var(--colorsUtilityYin100);outline:none;outline-offset:0}:host(:focus-within) .sds-checkbox-input{cursor:default}.sds-checkbox{align-items:center;display:flex;gap:var(--spacing100)}.sds-checkbox.disabled{color:var(--colorsUtilityYin030)}.sds-checkbox.sizing-s{font:var(--typographyFormFieldLabelS);--input-size:var(--sizing200);--icon-size:var(--sizing125)}.sds-checkbox.sizing-m{font:var(--typographyFormFieldLabelS);--input-size:var(--sizing250);--icon-size:var(--sizing175)}.sds-checkbox.sizing-l{font:var(--typographyFormFieldLabelL);--input-size:var(--sizing300);--icon-size:var(--sizing225)}.sds-checkbox .sds-checkbox-item-slot{vertical-align:middle;word-wrap:break-word}`;var lr=Object.defineProperty,dr=Object.getOwnPropertyDescriptor,q=(r,e,t,i)=>{for(var s=i>1?void 0:i?dr(e,t):e,o=r.length-1,a;o>=0;o--)(a=r[o])&&(s=(i?a(e,t,s):a(s))||s);return i&&s&&lr(e,t,s),s};exports.Checkbox=class extends y{constructor(){super(...arguments),this.size="M",this.disabled=!1,this.error=!1,this.name="",this.checked=!1,this.value="",this.tabIndex=0,this.label=""}get _classes(){const{size:e}=this;return P({"sizing-s":e=="S","sizing-m":e=="M","sizing-l":e=="L",checked:this.checked,error:this.error,disabled:this.disabled})}get _disableInput(){return this.disabled}render(){const e=this._classes,t="checkbox";return c`<div class="sds-checkbox ${e}">
      <input
        type="checkbox"
        class="sds-checkbox-input sds-focus ${e}"
        name=${this.name}
        id=${t}
        .checked=${this.checked}
        .value=${this.value}
        ?disabled=${this._disableInput}
        aria-checked=${this.checked}
        aria-label=${this.label}
        tabindex=${this.tabIndex}
        @change=${i=>{this.handleChange(i)}}
      />
      <label for=${t}>
        <slot class="sds-checkbox-item-slot"></slot>
      </label>
    </div>`}handleChange(e){this.checked=e.target.checked,M(this,e)}};exports.Checkbox.shadowRootOptions={...y.shadowRootOptions,delegatesFocus:!0};exports.Checkbox.styles=[V,nr];q([n({attribute:"size"})],exports.Checkbox.prototype,"size",2);q([n({type:Boolean})],exports.Checkbox.prototype,"disabled",2);q([n({type:Boolean})],exports.Checkbox.prototype,"error",2);q([n()],exports.Checkbox.prototype,"name",2);q([n({type:Boolean})],exports.Checkbox.prototype,"checked",2);q([n()],exports.Checkbox.prototype,"value",2);q([n({type:Number})],exports.Checkbox.prototype,"tabIndex",2);q([b()],exports.Checkbox.prototype,"_disableInput",1);q([n()],exports.Checkbox.prototype,"label",2);exports.Checkbox=q([v("sds-checkbox")],exports.Checkbox);const cr=m`.sds-checkbox-group{display:flex}.sds-checkbox-group ::slotted(sds-checkbox){padding-bottom:var(--spacing150);padding-right:var(--spacing300)}.sds-checkbox-wrapper.orientation-horizontal{display:flex;flex-direction:row}.sds-checkbox-wrapper.orientation-vertical{display:flex;flex-direction:column}`;var pr=Object.defineProperty,hr=Object.getOwnPropertyDescriptor,A=(r,e,t,i)=>{for(var s=i>1?void 0:i?hr(e,t):e,o=r.length-1,a;o>=0;o--)(a=r[o])&&(s=(i?a(e,t,s):a(s))||s);return i&&s&&pr(e,t,s),s};class S extends y{constructor(){super(...arguments),this.disabled=!1,this.readOnly=!1,this.size="M",this._browserMessage=""}get _inputClasses(){return P({...this._classList,...this.additionalClasses})}get _classList(){const{required:e,disabled:t,readOnly:i,size:s}=this;return{required:e==="true",disabled:t,"read-only":i,"size-xs":s==="XS","size-s":s==="S","size-m":s==="M","size-l":s==="L"}}get additionalClasses(){return{}}isEmpty(e){return e?e.trim().length===0:!0}get _messageToDisplay(){return this.isEmpty(this.message)?this._browserMessage:this.message}get _messageSeverity(){return this.isEmpty(this._messageToDisplay)?this.messageSeverity:this.isEmpty(this.message)?"error":this.messageSeverity??"error"}}A([n()],S.prototype,"label",2);A([n()],S.prototype,"hint",2);A([n()],S.prototype,"message",2);A([n({attribute:"message-severity"})],S.prototype,"messageSeverity",2);A([n()],S.prototype,"required",2);A([n({type:Boolean})],S.prototype,"disabled",2);A([n({type:Boolean})],S.prototype,"readOnly",2);A([n()],S.prototype,"form",2);A([n()],S.prototype,"name",2);A([n({attribute:"size"})],S.prototype,"size",2);A([b()],S.prototype,"_browserMessage",2);A([b()],S.prototype,"_messageToDisplay",1);A([b()],S.prototype,"_messageSeverity",1);var ur=Object.defineProperty,gr=Object.getOwnPropertyDescriptor,ze=(r,e,t,i)=>{for(var s=i>1?void 0:i?gr(e,t):e,o=r.length-1,a;o>=0;o--)(a=r[o])&&(s=(i?a(e,t,s):a(s))||s);return i&&s&&ur(e,t,s),s};exports.InputDecorator=class extends S{constructor(){super(...arguments),this._onFocusOut=this.onFocusOut.bind(this),this._onInvalid=this.onInvalid.bind(this),this._onLabelClick=this.onLabelClick.bind(this)}get inputClasses(){return super._inputClasses}get additionalClasses(){const{_messageSeverity:e}=this;return{"message-warn":e=="warn","message-error":e=="error"}}get _displayLabel(){return!this.isEmpty(this.label)}get _displayHint(){return!this.isEmpty(this.hint)}get _displayMessage(){return!this.isEmpty(this._messageToDisplay)&&this._messageSeverity!==void 0}get _displayOptionalFieldSuffix(){return this.required==="false"}render(){const{label:e,hint:t,_messageToDisplay:i,_displayLabel:s,_displayHint:o,_displayMessage:a,_displayOptionalFieldSuffix:d,inputClasses:l,_onLabelClick:h,_onFocusOut:g}=this;return c`
      <div
        class="sds-input-decorator ${l}"
        aria-disabled=${p(this.disabled||void 0)}
      >
        <div class="sds-input-labels">
          <label
            class="sds-input-label"
            for=${p(this.for)}
            ?hidden=${!s}
            @click=${h}
            @keyup=${h}
          >
            ${e}
            ${d?c` <span class="sds-input-optional-suffix">
                  (${z("input.optional")})
                </span>`:f}
          </label>
          <div ?hidden=${!o} class="sds-input-hint">${t}</div>
        </div>
        <div class="sds-message-and-input">
          <div ?hidden=${!a} class="sds-input-message">
            ${i}
          </div>
          <!-- The wrapped input field will be rendered here -->
          <!-- The "onLoseFocus" will trigger for the wrapped input element -->
          <slot
            class="${s||o||a?"sds-input-slot has-spacing":"sds-input-slot"}"
            @focusout="${g}"
          ></slot>
        </div>
      </div>
    `}setupValidateHandler(e){this._browserMessage="",typeof e.reportValidity=="function"&&(e.addEventListener("invalid",this._onInvalid),e.reportValidity())}interceptValidityMessage(e){let t=!1;return e.validity.valid?this._browserMessage="":(t=!0,this._browserMessage=e.validationMessage),e.removeEventListener("invalid",this._onInvalid),t}onFocusOut(e){this.setupValidateHandler(e.target)}onInvalid(e){this.interceptValidityMessage(e.target)&&e.preventDefault()}focusOnLabelInput(e){const t=e.getAttribute("for");if(t){const i=this.querySelector(`#${t}`);i==null||i.focus()}}onLabelClick(e){this.focusOnLabelInput(e.currentTarget)}};exports.InputDecorator.styles=m`
.sds-input-decorator{display:flex;flex-direction:column;--label-font:var(--typographyFormFieldLabelM);--optional-font:var(--typographyFormFieldHintTextM);--hint-font:var(--typographyFormFieldHintTextM)}.sds-input-decorator .sds-input-labels{font:var(--label-font)}.sds-input-decorator .sds-input-label{color:var(--colorsUtilityYin090)}.sds-input-decorator .sds-input-optional-suffix{color:var(--colorsUtilityYin055);font:var(--optional-font)}.sds-input-decorator .sds-input-hint{color:var(--colorsUtilityYin055);font:var(--hint-font)}.sds-input-decorator .sds-input-message{font:var(--input-message-font)}.sds-input-decorator .sds-input-slot{display:block}.sds-input-decorator .sds-input-slot.has-spacing{margin-top:var(--spacing100)}.sds-input-decorator .sds-message-and-input{position:relative}.sds-input-decorator .sds-message-and-input:before{content:"";height:100%;left:calc(var(--spacing150)*-1);position:absolute;top:0}.sds-input-decorator.disabled,.sds-input-decorator.disabled .sds-input-hint,.sds-input-decorator.disabled .sds-input-label,.sds-input-decorator.disabled .sds-input-optional-suffix{color:var(--colorsUtilityYin030)}.sds-input-decorator.required .sds-input-label:after{color:var(--colorsSemanticNegative500);content:"*"}.sds-input-decorator.required.disabled .sds-input-label:after{color:var(--colorsUtilityYin030)}.sds-input-decorator.message-warn .sds-message-and-input:before{border-left:solid var(--borderWidth200)
              var(--colorsSemanticCaution500)}.sds-input-decorator.message-warn{--input-message-font:var(--typographyFormFieldCautionMessageM)}.sds-input-decorator.message-warn.size-xs{--input-message-font:var(--typographyFormFieldCautionMessageXs)}.sds-input-decorator.message-warn.size-s{--input-message-font:var(--typographyFormFieldCautionMessageS)}.sds-input-decorator.message-warn.size-l{--input-message-font:var(--typographyFormFieldCautionMessageL)}.sds-input-decorator.message-warn .sds-input-message{color:var(--colorsSemanticCaution600)}.sds-input-decorator.message-error .sds-message-and-input:before{border-left:solid var(--borderWidth200)
              var(--colorsSemanticNegative500)}.sds-input-decorator.message-error{--input-message-font:var(--typographyFormFieldErrorMessageM)}.sds-input-decorator.message-error.size-xs{--input-message-font:var(--typographyFormFieldErrorMessageXs)}.sds-input-decorator.message-error.size-s{--input-message-font:var(--typographyFormFieldErrorMessageS)}.sds-input-decorator.message-error.size-l{--input-message-font:var(--typographyFormFieldErrorMessageL)}.sds-input-decorator.message-error .sds-input-message{color:var(--colorsSemanticNegative500)}.sds-input-decorator.size-xs{--label-font:var(--typographyFormFieldLabelXs);--optional-font:var(--typographyFormFieldHintTextXs);--hint-font:var(--typographyFormFieldHintTextXs)}.sds-input-decorator.size-xs .sds-input-slot.has-spacing{margin-top:var(--spacing050)}.sds-input-decorator.size-s{--label-font:var(--typographyFormFieldLabelS);--optional-font:var(--typographyFormFieldHintTextS);--hint-font:var(--typographyFormFieldHintTextS)}.sds-input-decorator.size-l{--label-font:var(--typographyFormFieldLabelL);--optional-font:var(--typographyFormFieldHintTextL);--hint-font:var(--typographyFormFieldHintTextL);font:var(--typographyFormFieldLabelL)}
  `;ze([n()],exports.InputDecorator.prototype,"for",2);ze([b()],exports.InputDecorator.prototype,"_displayLabel",1);ze([b()],exports.InputDecorator.prototype,"_displayHint",1);ze([b()],exports.InputDecorator.prototype,"_displayMessage",1);ze([b()],exports.InputDecorator.prototype,"_displayOptionalFieldSuffix",1);exports.InputDecorator=ze([v("sds-input-decorator"),Ss()],exports.InputDecorator);var vr=Object.defineProperty,br=Object.getOwnPropertyDescriptor,ve=(r,e,t,i)=>{for(var s=i>1?void 0:i?br(e,t):e,o=r.length-1,a;o>=0;o--)(a=r[o])&&(s=(i?a(e,t,s):a(s))||s);return i&&s&&vr(e,t,s),s};exports.CheckboxGroup=class extends S{constructor(){super(),this.size="S",this.orientation="vertical",this.name=Math.random().toString(),this.selectedValues="",this.addController((e=>new Be(this,{cycleFocusStates:!0,syncSelectionToFocus:!0,get inputComponents(){return e.inputComponents},isSelected:t=>t.checked,setSelected:(t,i)=>{i&&t.dispatchEvent(new Event("change",{bubbles:!0}))}}))(this))}get additionalClasses(){const{orientation:e}=this,{_messageSeverity:t,size:i}=this;return{"sizing-s":i=="S","sizing-m":i=="M","sizing-l":i=="L","orientation-horizontal":e=="horizontal","orientation-vertical":e=="vertical",error:t==="error"}}get inputClasses(){return super._inputClasses}get _errorSeverity(){return this.messageSeverity}render(){const{disabled:e,hint:t,label:i,message:s,inputClasses:o,size:a,readOnly:d,required:l,messageSeverity:h}=this;return c` <div class="sds-checkbox-group ${o}">
      <sds-input-decorator
        ?disabled=${e}
        ?readOnly=${d}
        hint=${p(t)}
        label=${p(i)}
        message=${p(s)}
        required=${p(l)}
        size=${p(a)}
        message-severity=${p(h)}
      >
        <slot
          class="sds-checkbox-wrapper ${o}"
          @slotchange="${()=>{this.handleSlotChange()}}"
        ></slot
      ></sds-input-decorator>
    </div>`}handleSlotChange(){this.inputComponents.forEach(e=>{e.name=this.name,e.addEventListener("change",()=>{this._updateSelectedValues()})}),this._updateSelectedValues()}_updateSelectedValues(){const e=Array.from(this.inputComponents).filter(t=>t.checked).map(t=>t.value);this.selectedValues=e.join(",")}updated(){this.handleCheckboxClasses()}handleCheckboxClasses(){this.inputComponents.map(e=>{e.disabled=this.disabled,e.size=this.size,e.error=this.messageSeverity==="error"})}};exports.CheckboxGroup.styles=cr;ve([n({attribute:"size"})],exports.CheckboxGroup.prototype,"size",2);ve([n({attribute:"orientation"})],exports.CheckboxGroup.prototype,"orientation",2);ve([b()],exports.CheckboxGroup.prototype,"_errorSeverity",1);ve([n()],exports.CheckboxGroup.prototype,"name",2);ve([N({flatten:!0})],exports.CheckboxGroup.prototype,"inputComponents",2);ve([n({attribute:"selected-values"})],exports.CheckboxGroup.prototype,"selectedValues",2);exports.CheckboxGroup=ve([v("sds-checkbox-group")],exports.CheckboxGroup);/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{I:fr}=Ks,Is=r=>r.strings===void 0,ts=()=>document.createComment(""),Ae=(r,e,t)=>{var o;const i=r._$AA.parentNode,s=e===void 0?r._$AB:e._$AA;if(t===void 0){const a=i.insertBefore(ts(),s),d=i.insertBefore(ts(),s);t=new fr(a,d,r,r.options)}else{const a=t._$AB.nextSibling,d=t._$AM,l=d!==r;if(l){let h;(o=t._$AQ)==null||o.call(t,r),t._$AM=r,t._$AP!==void 0&&(h=r._$AU)!==d._$AU&&t._$AP(h)}if(a!==s||l){let h=t._$AA;for(;h!==a;){const g=h.nextSibling;i.insertBefore(h,s),h=g}}}return t},de=(r,e,t=r)=>(r._$AI(e,t),r),mr={},As=(r,e=mr)=>r._$AH=e,yr=r=>r._$AH,yt=r=>{var i;(i=r._$AP)==null||i.call(r,!1,!0);let e=r._$AA;const t=r._$AB.nextSibling;for(;e!==t;){const s=e.nextSibling;e.remove(),e=s}};/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const lt=_e(class extends $e{constructor(r){if(super(r),r.type!==U.PROPERTY&&r.type!==U.ATTRIBUTE&&r.type!==U.BOOLEAN_ATTRIBUTE)throw Error("The `live` directive is not allowed on child or event bindings");if(!Is(r))throw Error("`live` bindings can only contain a single expression")}render(r){return r}update(r,[e]){if(e===E||e===f)return e;const t=r.element,i=r.name;if(r.type===U.PROPERTY){if(e===t[i])return E}else if(r.type===U.BOOLEAN_ATTRIBUTE){if(!!e===t.hasAttribute(i))return E}else if(r.type===U.ATTRIBUTE&&t.getAttribute(i)===e+"")return E;return As(r),e}});var wr=Object.defineProperty,_r=Object.getOwnPropertyDescriptor,re=(r,e,t,i)=>{for(var s=i>1?void 0:i?_r(e,t):e,o=r.length-1,a;o>=0;o--)(a=r[o])&&(s=(i?a(e,t,s):a(s))||s);return i&&s&&wr(e,t,s),s};exports.DatePicker=class extends S{constructor(){super(...arguments),this.size="M",this._inputInvalid=!1,this.inputElementId="date-picker",this._onInput=this.onInput.bind(this),this._onFocusOut=this.onFocusOut.bind(this)}get _disableInput(){return this.disabled||this.readOnly}get inputClasses(){return super._inputClasses}get additionalClasses(){const{_inputInvalid:e,_messageSeverity:t}=this;return{error:e||t==="error"}}onInput(e){const t=e.target;this.value=(t==null?void 0:t.value)??""}onFocusOut(e){const t=e.target;this._inputInvalid=!t.checkValidity()}render(){const{form:e,hint:t,inputClasses:i,label:s,max:o,message:a,min:d,inputElementId:l,name:h,size:g,required:u,messageSeverity:_,step:w,value:$,disabled:x,readOnly:C,_onFocusOut:L,_onInput:R,_disableInput:Le}=this;return c`
      <div class="sds-date-picker ${i}">
        <sds-input-decorator
          ?disabled=${x}
          ?readOnly=${C}
          hint=${p(t)}
          for=${l}
          size=${p(g)}
          label=${p(s)}
          message=${p(a)}
          message-severity=${p(_)}
          required=${p(u)}
        >
          <input
            class="sds-input-field ${i}"
            aria-label=${p(s)}
            aria-disabled=${x}
            aria-readonly=${C}
            @focusout=${L}
            @input=${R}
            @change=${ke=>M(this,ke)}
            ?required=${u==="true"}
            ?disabled=${Le}
            type="date"
            form=${p(e)}
            id=${l}
            max=${p(o)}
            min=${p(d)}
            name=${p(h)}
            step=${p(w)}
            .value=${lt($??"")}
          />
        </sds-input-decorator>
      </div>
    `}};exports.DatePicker.styles=m`
.sds-input-field{-webkit-appearance:none;-moz-appearance:none;appearance:none;background:var(--colorsUtilityYang100);border:var(--borderWidth100) solid var(--colorsUtilityMajor300);border-radius:var(--border-top-left-radius, var(--spacing050))
        var(--border-top-right-radius, var(--spacing050))
        var(--border-bottom-right-radius, var(--spacing050))
        var(--border-bottom-left-radius, var(--spacing050));box-sizing:border-box;color:var(--colorsUtilityYin090);font:var(--typographyFormFieldInputTextM);height:var(--sizing500);max-width:100%;padding:0 var(--spacing150);position:relative;text-align:left;width:100%;width:var(--field-width,100%)}
.sds-input-field:before{color:var(--colorsUtilityYin065);content:"\\e90e";font-family:CarbonIcons,sans-serif;font-size:var(--sizing250);height:1lh;position:absolute;right:var(--spacing150);width:var(--sizing250)}
.sds-input-field:-moz-read-only{background:var(--colorsUtilityReadOnly400);color:var(--colorsUtilityYin090)}
.sds-input-field:read-only{background:var(--colorsUtilityReadOnly400);color:var(--colorsUtilityYin090)}
.sds-input-field:-moz-read-only:before{color:var(--colorsActionMinorYin030)}
.sds-input-field:read-only:before{color:var(--colorsActionMinorYin030)}
.sds-input-field:disabled{background:var(--colorsUtilityDisabled400);color:var(--colorsUtilityYin030)}
.sds-input-field:disabled:before{color:var(--colorsActionMinorYin030)}
.sds-input-field::-webkit-calendar-picker-indicator{background:none;color:transparent;margin-left:var(--spacing150);width:var(--sizing250);z-index:1}
.sds-input-field::-webkit-date-and-time-value{margin-top:0;padding:0;text-align:left}
.sds-input-field.error{border:var(--borderWidth200) solid var(--colorsSemanticNegative500)}
.sds-input-field.read-only{background:var(--colorsUtilityReadOnly400);border-color:var(--colorsUtilityReadOnly600);color:var(--colorsUtilityYin090)}
.sds-input-field.disabled{background:var(--colorsUtilityDisabled400);border-color:var(--colorsUtilityDisabled600);color:var(--colorsUtilityYin030)}
.sds-input-field.size-s{font:var(--typographyFormFieldInputTextS);height:var(--sizing400);padding:0 var(--spacing100)}
.sds-input-field.size-s::-webkit-calendar-picker-indicator{margin-left:var(--spacing50)}
.sds-input-field.size-s:before{right:var(--spacing100)}
.sds-input-field.size-l{font:var(--typographyFormFieldInputTextL);height:var(--sizing600);padding:0 var(--spacing200)}
.sds-input-field.size-l::-webkit-calendar-picker-indicator{margin-left:var(--spacing200)}
.sds-input-field.size-l:before{right:var(--spacing200)}
.sds-input-field:enabled:focus-visible{border-radius:var(--border-top-left-radius, var(--borderRadius050))
            var(--border-top-right-radius, var(--borderRadius050))
            var(--border-bottom-right-radius, var(--borderRadius050))
            var(--border-bottom-left-radius, var(--borderRadius050));box-shadow:0 0 0 var(--borderWidth600) var(--colorsGray1000);outline:var(--borderWidth300) solid var(--colorsSemanticFocus500);outline-offset:0;z-index:99}
  `;re([n({attribute:"size"})],exports.DatePicker.prototype,"size",2);re([n()],exports.DatePicker.prototype,"max",2);re([n()],exports.DatePicker.prototype,"min",2);re([n({type:Number})],exports.DatePicker.prototype,"step",2);re([n({reflect:!0})],exports.DatePicker.prototype,"value",2);re([b()],exports.DatePicker.prototype,"_inputInvalid",2);re([b()],exports.DatePicker.prototype,"_disableInput",1);exports.DatePicker=re([v("sds-date-picker")],exports.DatePicker);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Me=(r,e)=>{var i;const t=r._$AN;if(t===void 0)return!1;for(const s of t)(i=s._$AO)==null||i.call(s,e,!1),Me(s,e);return!0},ot=r=>{let e,t;do{if((e=r._$AM)===void 0)break;t=e._$AN,t.delete(r),r=e}while((t==null?void 0:t.size)===0)},Ds=r=>{for(let e;e=r._$AM;r=e){let t=e._$AN;if(t===void 0)e._$AN=t=new Set;else if(t.has(r))break;t.add(r),zr(e)}};function $r(r){this._$AN!==void 0?(ot(this),this._$AM=r,Ds(this)):this._$AM=r}function xr(r,e=!1,t=0){const i=this._$AH,s=this._$AN;if(s!==void 0&&s.size!==0)if(e)if(Array.isArray(i))for(let o=t;o<i.length;o++)Me(i[o],!1),ot(i[o]);else i!=null&&(Me(i,!1),ot(i));else Me(this,r)}const zr=r=>{r.type==U.CHILD&&(r._$AP??(r._$AP=xr),r._$AQ??(r._$AQ=$r))};class Sr extends $e{constructor(){super(...arguments),this._$AN=void 0}_$AT(e,t,i){super._$AT(e,t,i),Ds(this),this.isConnected=e._$AU}_$AO(e,t=!0){var i,s;e!==this.isConnected&&(this.isConnected=e,e?(i=this.reconnected)==null||i.call(this):(s=this.disconnected)==null||s.call(this)),t&&(Me(this,e),ot(this))}setValue(e){if(Is(this.t))this.t._$AI(e,this);else{const t=[...this.t._$AH];t[this.i]=e,this.t._$AI(t,this,0)}}disconnected(){}reconnected(){}}/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Q=()=>new Cr;class Cr{}const wt=new WeakMap,J=_e(class extends Sr{render(r){return f}update(r,[e]){var i;const t=e!==this.Y;return t&&this.Y!==void 0&&this.rt(void 0),(t||this.lt!==this.ct)&&(this.Y=e,this.ht=(i=r.options)==null?void 0:i.host,this.rt(this.ct=r.element)),f}rt(r){if(this.isConnected||(r=void 0),typeof this.Y=="function"){const e=this.ht??globalThis;let t=wt.get(e);t===void 0&&(t=new WeakMap,wt.set(e,t)),t.get(this.Y)!==void 0&&this.Y.call(this.ht,void 0),t.set(this.Y,r),r!==void 0&&this.Y.call(this.ht,r)}else this.Y.value=r}get lt(){var r,e;return typeof this.Y=="function"?(r=wt.get(this.ht??globalThis))==null?void 0:r.get(this.Y):(e=this.Y)==null?void 0:e.value}disconnected(){this.lt===this.ct&&this.rt(void 0)}reconnected(){this.rt(this.ct)}}),Pr=m`:host(:not(:focus-within)){clip:rect(0 0 0 0);-webkit-clip-path:inset(50%);clip-path:inset(50%);height:1px;overflow:hidden;position:absolute;white-space:nowrap;width:1px}`;var Or=Object.defineProperty,Er=Object.getOwnPropertyDescriptor,Lr=(r,e,t,i)=>{for(var s=i>1?void 0:i?Er(e,t):e,o=r.length-1,a;o>=0;o--)(a=r[o])&&(s=(i?a(e,t,s):a(s))||s);return i&&s&&Or(e,t,s),s};exports.VisuallyHidden=class extends y{render(){return c` <slot></slot> `}};exports.VisuallyHidden.styles=Pr;exports.VisuallyHidden=Lr([v("sds-visually-hidden")],exports.VisuallyHidden);var kr=Object.defineProperty,Ir=Object.getOwnPropertyDescriptor,be=(r,e,t,i)=>{for(var s=i>1?void 0:i?Ir(e,t):e,o=r.length-1,a;o>=0;o--)(a=r[o])&&(s=(i?a(e,t,s):a(s))||s);return i&&s&&kr(e,t,s),s};exports.Dialog=class extends y{constructor(){super(...arguments),this.title="",this.subtitle="",this.disableClose=!1,this.dialog=Q(),this.hasHeader=!1}handleSlotChange(){this.hasHeader=this.headerElements.length>0}getCloseButton(){return c` <sds-button-subtle
      class="close-button"
      @click=${()=>{this.close()}}
    >
      <sds-visually-hidden>${z("button.close")}</sds-visually-hidden>
      <sds-icon slot="icon" type="close"></sds-icon>
    </sds-button-subtle>`}getIcon(){if(this.status)return this.status==="positive"?"tick_circle":this.status==="negative"?"error":this.status==="caution"?"warning":this.status}getHeader(){const e=this.hasHeader||!!this.title||!!this.subtitle||!this.disableClose,t=this.getIcon(),i=t&&this.status?c`<sds-icon
            type="${t}"
            class="${this.status}"
          ></sds-icon>`:f,s=this.title?c`<h2 class="title ${this.subtitle?"title-margin":""}">
          ${i} ${this.title}
        </h2>`:f,o=this.subtitle?c`<h3 class="subtitle">${this.subtitle}</h3>`:f;return e?c` <header class="header-wrapper">
          <div class="divider"></div>
          <div class="header-content">
            ${s} ${o}

            <slot
              name="header"
              @slotchange="${()=>{this.handleSlotChange()}}"
            ></slot>
          </div>
          ${this.disableClose?f:this.getCloseButton()}
        </header>`:f}getFooter(){return c`
      <slot
        name="footer"
        @slotchange="${()=>{this.handleSlotChange()}}"
      ></slot>
    `}showModal(){var e;(e=this.dialog.value)==null||e.showModal()}close(e){var t;(t=this.dialog.value)!=null&&t.open&&this.dialog.value.close(e)}handleDialogCancel(e){if(this.disableClose){e.preventDefault();return}this.close()}handleDialogClick(e){const t=e.target;!this.disableClose&&t.nodeName==="DIALOG"&&this.dialog.value&&this.close("dismiss")}render(){return c` <dialog
      ${J(this.dialog)}
      @cancel=${e=>{this.handleDialogCancel(e)}}
      @close=${e=>M(this,e)}
      @click=${e=>{this.handleDialogClick(e)}}
      @keyup=${e=>{this.handleDialogClick(e)}}
      class="${this.disableClose?"":"show-close-button"}"
    >
      ${this.getHeader()}
      <div class="content-wrapper">
        <slot name="content"></slot>
        <slot></slot>
      </div>
      ${this.getFooter()}
    </dialog>`}};exports.Dialog.styles=m`
dialog{background-color:var(--colorsUtilityYang100);border:none;border-radius:var(--borderRadius200);box-sizing:border-box;max-width:750px;min-width:288px;padding:0;width:40vw}dialog::-ms-backdrop{background-color:#00141e;background-color:var(--colorsUtilityMajor800,#00141e);opacity:.6}dialog::backdrop{background-color:#00141e;background-color:var(--colorsUtilityMajor800,#00141e);opacity:.6}.close-button{align-items:center;aspect-ratio:1/1;background:none;border:none;border-radius:var(--borderRadius050);cursor:pointer;display:flex;height:var(--sizing400);justify-content:center;padding:0}.close-button:focus-visible{border-radius:var(--borderRadius025);box-shadow:
          0 0 0 var(--borderWidth300) var(--colorsSemanticFocus500),
          0 0 0 var(--borderWidth600) #000000ff;outline:none;outline-offset:0}.close-button sds-icon{aspect-ratio:1/1;font-size:var(--fontSizes400);height:var(--sizing250)}.header-wrapper{display:flex;justify-content:space-between;padding:var(--spacing300) var(--spacing300) var(--spacing250);position:relative}.divider{background-color:var(--colorsUtilityMajor100);bottom:0;height:var(--borderWidth100);left:0;position:absolute;width:100%}.header-content{display:flex;flex-direction:column;width:100%}.title{font:var(--typographyDialogTitleXs)}.subtitle{font:var(--typographyDialogSubtitleM)}.title,
    .subtitle{margin:0}.title-margin{margin:0 0 var(--spacing150)}.header-content sds-icon{padding-right:var(--spacing200);vertical-align:top}.header-content sds-icon.positive{color:var(--colorsSemanticPositive500)}.header-content sds-icon.negative{color:var(--colorsSemanticNegative500)}.header-content sds-icon.caution{color:var(--colorsSemanticCaution500)}.header-content sds-icon.info{color:var(--colorsSemanticInfo500)}.show-close-button .header-content{margin-right:var(--spacing200);padding-right:var(--spacing100)}.content-wrapper{padding:var(--spacing300)}
  `;be([n()],exports.Dialog.prototype,"title",2);be([n()],exports.Dialog.prototype,"subtitle",2);be([n({attribute:"disable-close",type:Boolean})],exports.Dialog.prototype,"disableClose",2);be([n()],exports.Dialog.prototype,"status",2);be([N({slot:"header",flatten:!0})],exports.Dialog.prototype,"headerElements",2);be([b()],exports.Dialog.prototype,"hasHeader",2);exports.Dialog=be([v("sds-dialog")],exports.Dialog);var Ar=Object.defineProperty,Dr=Object.getOwnPropertyDescriptor,Fr=(r,e,t,i)=>{for(var s=i>1?void 0:i?Dr(e,t):e,o=r.length-1,a;o>=0;o--)(a=r[o])&&(s=(i?a(e,t,s):a(s))||s);return i&&s&&Ar(e,t,s),s};exports.DialogHeader=class extends y{connectedCallback(){super.connectedCallback(),this.slot=this.hasAttribute("slot")?this.slot:"header"}render(){return c`<slot></slot>`}};exports.DialogHeader.styles=m``;exports.DialogHeader=Fr([v("sds-dialog-header")],exports.DialogHeader);var Mr=Object.defineProperty,Tr=Object.getOwnPropertyDescriptor,jr=(r,e,t,i)=>{for(var s=i>1?void 0:i?Tr(e,t):e,o=r.length-1,a;o>=0;o--)(a=r[o])&&(s=(i?a(e,t,s):a(s))||s);return i&&s&&Mr(e,t,s),s};exports.DialogContent=class extends y{connectedCallback(){super.connectedCallback(),this.slot=this.hasAttribute("slot")?this.slot:"content"}render(){return c`<slot></slot>`}};exports.DialogContent.styles=m``;exports.DialogContent=jr([v("sds-dialog-content")],exports.DialogContent);var Rr=Object.defineProperty,Ur=Object.getOwnPropertyDescriptor,Nr=(r,e,t,i)=>{for(var s=i>1?void 0:i?Ur(e,t):e,o=r.length-1,a;o>=0;o--)(a=r[o])&&(s=(i?a(e,t,s):a(s))||s);return i&&s&&Rr(e,t,s),s};exports.DialogFooter=class extends y{connectedCallback(){super.connectedCallback(),this.slot=this.hasAttribute("slot")?this.slot:"footer"}render(){return c`<footer>
      <slot></slot>
    </footer>`}};exports.DialogFooter.styles=m`
footer{align-items:center;display:flex;flex-wrap:wrap;gap:var(--spacing200);justify-content:flex-end;padding:var(--spacing200) var(--spacing300)}@media only screen and (max-width:600px){::slotted(sds-button){--button-width:100%}}
  `;exports.DialogFooter=Nr([v("sds-dialog-footer")],exports.DialogFooter);var Br=Object.defineProperty,Hr=Object.getOwnPropertyDescriptor,T=(r,e,t,i)=>{for(var s=i>1?void 0:i?Hr(e,t):e,o=r.length-1,a;o>=0;o--)(a=r[o])&&(s=(i?a(e,t,s):a(s))||s);return i&&s&&Br(e,t,s),s};exports.DropdownOption=class extends y{constructor(){super(),this.type="standard",this.id="id",this.label="",this.name="",this.size="M",this.value="",this.selected=!1,this.readOnly=!1,this.disabled=!1,this.tabIndex=0,this.addEventListener("keydown",this.handleKeydown.bind(this))}get _classes(){return P({checked:this.selected,disabled:this.disabled,subtle:this.type==="subtle","size-xs":this.size==="XS","size-s":this.size==="S","size-m":this.size==="M","size-l":this.size==="L"})}get _disableInput(){return this.disabled||this.readOnly}updated(e){super.updated(e),this._disableInput&&(this.selected=!1)}handleKeydown(e){!st(e.key,[k.Enter,k.Tab])||e.defaultPrevented||(e.preventDefault(),this.handleChange(new Event("change",{bubbles:!0})))}render(){const e=this._classes;return c` <div class="sds-dropdown-option ${e}">
      <label class="sds-dropdown-option-input ${e}" for=${this.id}>
        <div class="sds-dropdown-option-selected-icon-wrapper">
          <sds-icon
            class="sds-dropdown-option-selected-icon ${e}"
            type="tick_thick"
          ></sds-icon>
        </div>
        <slot name="icon" class="sds-dropdown-option-icon"></slot>
        <input
          class=${e}
          id=${this.id}
          type="radio"
          .checked=${this.selected}
          .value=${this.value}
          ?disabled=${this._disableInput}
          aria-label=${this.label}
          aria-checked=${this.selected}
          tabindex=${this.tabIndex}
          @change=${t=>{this.handleChange(t)}}
        />
        ${this.label}
      </label>
    </div>`}handleChange(e){this.selected=!0,M(this,e)}};exports.DropdownOption.shadowRootOptions={...y.shadowRootOptions,delegatesFocus:!0};exports.DropdownOption.styles=m`
:host{display:flex;outline:none}:host(:focus) .sds-dropdown-option:not(.disabled){background:var(--colorsUtilityMajor050);border-color:#00283d;outline:none}:host(:focus) .sds-dropdown-option{cursor:default}::slotted(sds-icon){font-size:var(--fontSizes400);padding-right:var(--spacing050);vertical-align:bottom}.sds-dropdown-option{align-items:flex-start;align-self:stretch;border:var(--borderWidth200) solid transparent;box-sizing:border-box;display:flex;flex-direction:column;justify-content:center;min-height:var(--sizing500);width:100%}.sds-dropdown-option.size-xs:not(.subtle){min-height:var(--sizing300)}.sds-dropdown-option.size-s{min-height:var(--sizing400)}.sds-dropdown-option.size-l{min-height:var(--sizing600)}.sds-dropdown-option .sds-dropdown-option-input{align-items:center;align-self:stretch;cursor:pointer;display:flex;flex-grow:1;font:var(--typographyFormFieldInputTextM);padding:var(--spacing010) var(--spacing100) var(--spacing025)
          var(--spacing000)}.sds-dropdown-option .sds-dropdown-option-input.size-xs:not(.subtle){font:var(--typographyFormFieldInputTextXS)}.sds-dropdown-option .sds-dropdown-option-input.size-s{font:var(--typographyFormFieldInputTextS);padding:var(--spacing060) var(--spacing100) var(--spacing075)
            var(--spacing000)}.sds-dropdown-option .sds-dropdown-option-input.size-l{font:var(--typographyFormFieldInputTextL);padding:var(--spacing150) var(--spacing200) var(--spacing150)
            var(--spacing000)}.sds-dropdown-option .sds-dropdown-option-input .sds-dropdown-option-selected-icon-wrapper{align-items:center;display:flex;height:100%;justify-content:center;width:var(--sizing250)}.sds-dropdown-option .sds-dropdown-option-input .sds-dropdown-option-selected-icon-wrapper .sds-dropdown-option-selected-icon{display:none}.sds-dropdown-option .sds-dropdown-option-input .sds-dropdown-option-selected-icon-wrapper .sds-dropdown-option-selected-icon.checked{display:inline-block}.sds-dropdown-option .sds-dropdown-option-input:focus,.sds-dropdown-option .sds-dropdown-option-input>input{left:-999em;position:absolute}.sds-dropdown-option.disabled{color:var(--colorsUtilityYin030);cursor:not-allowed}.sds-dropdown-option.disabled:hover{background:none}.sds-dropdown-option.disabled:focus-visible{background:none}.sds-dropdown-option:hover{background:var(--colorsUtilityMajor050)}.sds-dropdown-option:focus-visible{background:var(--colorsUtilityMajor050)}
  `;T([b()],exports.DropdownOption.prototype,"_disableInput",1);T([n()],exports.DropdownOption.prototype,"type",2);T([b()],exports.DropdownOption.prototype,"id",2);T([n()],exports.DropdownOption.prototype,"label",2);T([n()],exports.DropdownOption.prototype,"name",2);T([n({attribute:"size"})],exports.DropdownOption.prototype,"size",2);T([n()],exports.DropdownOption.prototype,"value",2);T([n({type:Boolean})],exports.DropdownOption.prototype,"selected",2);T([n({type:Boolean,reflect:!0})],exports.DropdownOption.prototype,"readOnly",2);T([n({type:Boolean})],exports.DropdownOption.prototype,"disabled",2);T([n({type:Number})],exports.DropdownOption.prototype,"tabIndex",2);exports.DropdownOption=T([v("sds-dropdown-option")],exports.DropdownOption);var Wr=Object.defineProperty,Yr=Object.getOwnPropertyDescriptor,G=(r,e,t,i)=>{for(var s=i>1?void 0:i?Yr(e,t):e,o=r.length-1,a;o>=0;o--)(a=r[o])&&(s=(i?a(e,t,s):a(s))||s);return i&&s&&Wr(e,t,s),s};exports.Dropdown=class extends S{constructor(){super(),this._inputInvalid=!1,this.isOpen=!1,this.value="",this.type="standard",this.inputElementId="dropdown",this.selectedOptionLabel="",this.addController((e=>new Be(this,{cycleFocusStates:!1,syncSelectionToFocus:!1,get inputComponents(){return e.inputComponents},onAfterChange:t=>{this.value=t.value,this.selectedOptionLabel=t.label},isSelected:t=>t.selected,setSelected:(t,i)=>t.selected=i}))(this))}get inputClasses(){return super._inputClasses}get additionalClasses(){const{type:e,_inputInvalid:t,_messageSeverity:i}=this;return{subtle:e==="subtle",error:t||i==="error"}}get isEditable(){return!(this.disabled||this.readOnly)}connectedCallback(){super.connectedCallback(),this.addEventListener("change",this.handleChange.bind(this)),this.addEventListener("keydown",this.handleKeyDown.bind(this))}render(){const{disabled:e,hint:t,label:i,message:s,readOnly:o,inputElementId:a,inputClasses:d,size:l,required:h,messageSeverity:g}=this;return c`
      <sds-input-decorator
        ?disabled=${e}
        ?readOnly=${o}
        hint=${p(t)}
        for=${p(a)}
        size=${p(l)}
        label=${p(i)}
        message=${p(s)}
        required=${p(h)}
        message-severity=${p(g)}
      >
        <div
          class="sds-dropdown ${d}"
          @focusout="${async u=>{await this.handleFocusOut(u)}}"
        >
          <button
            id=${a}
            class="sds-dropdown-button sds-focus ${d}"
            ?disabled=${e}
            aria-expanded="false"
            aria-label=${p(i)}
            @click="${()=>{this.handleClick()}}"
          >
            <div class="sds-dropdown-text-wrapper">
              <span id="dropdown-label" class="selected-option"
                >${this.selectedOptionLabel}</span
              >
              <sds-icon
                class="sds-dropdown-button-icon"
                type="${this.size==="XS"?"caret_down":"caret_large_down"}"
              ></sds-icon>
            </div>
          </button>
          <div class="sds-dropdown-options ${d}">
            <slot
              @slotchange="${()=>{this.handleSlotChange()}}"
            ></slot>
          </div>
        </div>
      </sds-input-decorator>
    `}handleSlotChange(){var e,t;if(this.inputComponents.forEach(i=>{const s=i;s.size=this.size,s.selected&&(this.value=s.value,this.selectedOptionLabel=s.label)}),!this.value){const i=this.inputComponents[0];i&&(this.value=((e=this.inputComponents[0])==null?void 0:e.value)??"",this.selectedOptionLabel=((t=this.inputComponents[0])==null?void 0:t.label)??"",i.selected=!0,this.focusSelected())}this.hideOptions()}hideOptions(){this.dropdownButton&&this.optionsWrapper&&(this.dropdownButton.setAttribute("aria-expanded","false"),this.optionsWrapper.classList.add("hidden"),this.isOpen=!1,this.type==="subtle"&&this.dropdownButton.classList.remove("hidden"))}focusSelected(){var e;(e=this.inputComponents.find(t=>t.selected))==null||e.focus()}revealOptions(){if(this.isEditable){if(!this.dropdownButton||!this.optionsWrapper)return;this.dropdownButton.setAttribute("aria-expanded","true"),this.optionsWrapper.classList.remove("hidden"),this.isOpen=!0,this.type==="subtle"&&this.dropdownButton.classList.add("hidden"),this.focusSelected()}}async handleFocusOut(e){e.stopPropagation(),await new Promise(s=>setTimeout(s,0));const t="SDS-DROPDOWN-OPTION",i=this.getDeepActiveElement(document,t);(i==null?void 0:i.tagName)!==t&&(this.hideOptions(),M(this,e))}getDeepActiveElement(e=document,t){const i=e.activeElement;return!(i!=null&&i.shadowRoot)||t&&i.tagName===t?i:this.getDeepActiveElement(i.shadowRoot,t)}handleKeyDown(e){var i,s;const{key:t}=e;(t===k.Escape||t===k.Tab)&&this.isOpen?((i=this.dropdownButton)==null||i.blur(),this.hideOptions()):st(t,[k.ArrowDown,k.ArrowUp])&&!this.isOpen?this.revealOptions():t===k.Enter&&((s=this.dropdownButton)==null||s.focus())}handleClick(){this.isOpen?this.hideOptions():this.revealOptions()}handleChange(){this.hideOptions()}};exports.Dropdown.styles=[V,m`
.sds-dropdown{display:inline-block;max-width:100%;position:relative;width:100%;width:var(--field-width,100%)}
.sds-dropdown .sds-dropdown-button{background:var(--colorsUtilityYang100);border:var(--sizing010) solid var(--colorsUtilityMajor300);border-radius:var(--border-top-left-radius, var(--spacing050))
            var(--border-top-right-radius, var(--spacing050))
            var(--border-bottom-right-radius, var(--spacing050))
            var(--border-bottom-left-radius, var(--spacing050));color:var(--colorsUtilityYin090);cursor:pointer;font:var(--typographyFormFieldInputTextM);height:var(--sizing500);overflow:clip;padding-top:var(--sizing025);width:100%}
.sds-dropdown .sds-dropdown-button .sds-dropdown-text-wrapper{display:block;padding:0 var(--spacing100);text-align:left}
.sds-dropdown .sds-dropdown-button .sds-dropdown-button-icon{font-size:var(--fontSizes400);position:absolute;right:var(--spacing150);top:50%;transform:translateY(-50%)}
.sds-dropdown .sds-dropdown-button.size-l{font:var(--typographyFormFieldInputTextL);height:var(--sizing600)}
.sds-dropdown .sds-dropdown-button.size-s{font:var(--typographyFormFieldInputTextS);height:var(--sizing400)}
.sds-dropdown .sds-dropdown-button.subtle{border:none;font-weight:var(--fontWeights500);padding-left:var(--sizing250)}
.sds-dropdown .sds-dropdown-button.subtle.disabled{color:var(--colorsUtilityYin030);cursor:not-allowed}
.sds-dropdown .sds-dropdown-button.subtle.disabled:focus-within{box-shadow:none;outline:none}
.sds-dropdown .sds-dropdown-button.subtle.disabled:hover{box-shadow:none;outline:none}
.sds-dropdown .sds-dropdown-button.subtle .sds-dropdown-text-wrapper{padding-left:0}
.sds-dropdown .sds-dropdown-button.size-xs:not(.subtle){font:var(--typographyFormFieldInputTextXS);height:var(--sizing275)}
.sds-dropdown .sds-dropdown-button.size-xs:not(.subtle) .sds-dropdown-text-wrapper{padding:0 var(--spacing075)}
.sds-dropdown .sds-dropdown-button.error:not(.subtle){border:var(--borderWidth200) solid
                var(--colorsSemanticNegative500)}
.sds-dropdown .sds-dropdown-button.read-only:not(.subtle){background:var(--colorsUtilityReadOnly400);border:var(--borderWidth100) solid
                var(--colorsUtilityReadOnly600)}
.sds-dropdown .sds-dropdown-button.disabled:not(.subtle){background:var(--colorsActionDisabled400);border:var(--borderWidth100) solid var(--colorsActionDisabled600);color:var(--colorsUtilityYin030);cursor:not-allowed}
.sds-dropdown .sds-dropdown-button.disabled:not(.subtle):focus-within{box-shadow:none;outline:none}
.sds-dropdown .sds-dropdown-button.disabled:not(.subtle):hover{box-shadow:none;outline:none}
.sds-dropdown.size-l .sds-dropdown-button-icon{right:var(--spacing200)}
.sds-dropdown .sds-dropdown-options{background:var(--colorsUtilityYang100);border-radius:var(--spacing050);box-shadow:var(--boxShadow100);max-height:180px;overflow-y:auto;padding:var(--spacing100) 0;position:absolute;width:inherit;z-index:1}
.sds-dropdown .sds-dropdown-options.subtle{margin-top:calc(0px - var(--spacing250))}
.sds-dropdown .sds-dropdown-options::-webkit-scrollbar{width:var(--sizing125)}
.sds-dropdown .sds-dropdown-options::-webkit-scrollbar-track{background:var(--colorsUtilityMajor025);border:var(--sizing375) solid transparent;border-radius:var(--sizing250)}
.sds-dropdown .sds-dropdown-options::-webkit-scrollbar-thumb{background:var(--colorsUtilityMajor150);border:var(--sizing375) solid transparent;border-radius:var(--sizing600)}
.sds-dropdown .hidden{display:none}
.sds-dropdown.size-s .sds-dropdown-button-icon,.sds-dropdown.size-xs .sds-dropdown-button-icon{right:var(--spacing100)}
    `];G([b()],exports.Dropdown.prototype,"_inputInvalid",2);G([b()],exports.Dropdown.prototype,"isOpen",2);G([b()],exports.Dropdown.prototype,"value",2);G([n()],exports.Dropdown.prototype,"type",2);G([It(".sds-dropdown-options")],exports.Dropdown.prototype,"optionsWrapper",2);G([It(".sds-dropdown-button")],exports.Dropdown.prototype,"dropdownButton",2);G([b()],exports.Dropdown.prototype,"isEditable",1);G([b()],exports.Dropdown.prototype,"selectedOptionLabel",2);G([N({flatten:!0})],exports.Dropdown.prototype,"inputComponents",2);exports.Dropdown=G([v("sds-dropdown")],exports.Dropdown);const Vr=m`.file-tile-count{color:var(--colorsUtilityYin055);display:inline-block;font:var(--typographyFormFieldHintTextM);padding-bottom:var(--spacing100)}.invalid-files{display:none;margin-bottom:var(--spacing100)}.invalid-files .file-tile-count{color:var(--colorsSemanticNegative500);font:var(--typographyFormFieldErrorMessageM)}.sds-file-input{--background-image-drag-allowed:url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg'%3E%3Crect width='100%25' height='100%25' fill='none' stroke='%23668494' stroke-dasharray='8, 4' stroke-width='2'/%3E%3C/svg%3E");--background-image-drag-not-allowed:url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg'%3E%3Crect width='100%25' height='100%25' fill='none' stroke='%23CCD6DB' stroke-dasharray='8, 4' stroke-width='2'/%3E%3C/svg%3E");--background-image-dragging:url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg'%3E%3Crect width='100%25' height='100%25' fill='none' stroke='%23335B70' stroke-dasharray='8, 4' stroke-width='4'/%3E%3C/svg%3E");--background-image-error:url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg'%3E%3Crect width='100%25' height='100%25' fill='none' stroke='%23CB374A' stroke-dasharray='8, 4' stroke-width='4'/%3E%3C/svg%3E");--background-image-error-dragging:url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg'%3E%3Crect width='100%25' height='100%25' fill='none' stroke='%23A22C3B' stroke-dasharray='8, 4' stroke-width='4'/%3E%3C/svg%3E");container-name:fileinput;container-type:inline-size}.sds-file-input.has-invalid-files .invalid-files{display:block}.sds-file-input.has-files sds-input-decorator,.sds-file-input.has-invalid-files sds-input-decorator,.sds-file-input.has-previous-files sds-input-decorator,.sds-file-input.multiple sds-input-decorator{display:block;margin-bottom:var(--spacing100)}.sds-file-input.has-previous-files sds-file-tile.selected-file-tile:last-of-type{margin-bottom:var(--spacing100)}.file-input-drop-zone{align-items:center;background-color:var(--colorsUtilityYang100);background-image:var(--background-image-drag-allowed);border-radius:var(--borderRadius050);box-sizing:border-box;display:flex;flex-direction:row;gap:var(--spacing100);justify-content:center;min-height:var(--sizing900);padding:var(--spacing150)}.file-input-drop-zone.error{background-image:var(--background-image-error)}.file-input-drop-zone.error.dragging{background-image:var(--background-image-error-dragging)}.file-input-drop-zone .file-input-drop-zone-text{color:var(--colorsUtilityYin055);font:var(--typographyFormFieldInputTextM)}.file-input-drop-zone.disabled,.file-input-drop-zone.read-only{background-image:var(--background-image-drag-not-allowed)}.file-input-drop-zone.disabled .file-input-drop-zone-text,.file-input-drop-zone.read-only .file-input-drop-zone-text{color:var(--colorsUtilityYin030)}.file-input-drop-zone.dragging{background-image:var(--background-image-dragging)}.file-input-drop-zone.dragging.drag-over{background-color:var(--colorsUtilityMajor100)}.sr-only{clip:rect(0 0 0 0);-webkit-clip-path:inset(50%);clip-path:inset(50%);height:var(--sizing010);overflow:hidden;position:absolute;white-space:nowrap;width:var(--sizing010)}@container fileinput (max-width: 320px){.file-input-drop-zone{flex-direction:column}}`;var qr=function(r,e){if(r&&e){var t=Array.isArray(e)?e:e.split(",");if(t.length===0)return!0;var i=r.name||"",s=(r.type||"").toLowerCase(),o=s.replace(/\/.*$/,"");return t.some(function(a){var d=a.trim().toLowerCase();return d.charAt(0)==="."?i.toLowerCase().endsWith(d):d.endsWith("/*")?o===d.replace(/\/.*$/,""):s===d})}return!0};const Gr=m`:host{--radius-top:var(--borderRadius000);--radius-bottom:var(--borderRadius000);display:block}:host(:first-of-type){--radius-top:var(--borderRadius050)}:host(:not(:last-of-type)){--border-bottom-width:var(--borderWidth000)}:host(:last-of-type){--border-bottom:var(--borderWidth100) solid var(--colorsUtilityMajor300);--radius-bottom:var(--borderRadius050)}.file-tile-preview{border:var(--borderWidth100) solid var(--colorsUtilityMajor300);border-bottom:var(--border-bottom-width,var(--borderWidth100)) solid var(--colorsUtilityMajor300);border-radius:var(--radius-top) var(--radius-top) var(--radius-bottom) var(--radius-bottom);display:flex;font-size:var(--spacing050);max-height:var(--sizing1600);min-height:var(--sizing900);overflow:clip;width:100%}.file-tile-preview.error{border:var(--borderWidth200) solid var(--colorsSemanticNegative500);border-bottom:var(--border-bottom-width,var(--spacing025)) solid var(--colorsSemanticNegative500)}.file-tile-thumbnail{align-items:center;align-self:stretch;box-sizing:border-box;display:flex;height:var(--sizing900);justify-content:center;max-width:var(--sizing900);min-width:var(--sizing900);-o-object-fit:contain;object-fit:contain;padding:var(--spacing050) var(--spacing100);width:var(--sizing900)}.file-tile-thumbnail-container{background:var(--colorsUtilityYin030);border-right:var(--borderWidth100) solid var(--colorsUtilityMajor100)}.file-label{color:var(--colorsUtilityYin090);font:var(--typographyFormFieldInputTextM)}.file-link{max-width:100%;word-wrap:break-word;color:var(--colorsActionMajor500);font:var(--typographyLinkTextM);word-break:break-all}.file-link.error,.file-link.read-only{color:var(--colorsActionMajor090);-webkit-text-decoration:none;text-decoration:none}.file-tile-status{color:var(--colorsUtilityYin055);font:var(--typographyFormFieldHintTextM)}.file-tile-status.error{color:var(--colorsSemanticNegative500);font-weight:var(--fontWeights500)}.file-tile-details{display:flex;flex-direction:column;gap:var(--spacing025);padding:var(--spacing150);padding-bottom:var(--spacing075);width:100%}.file-tile-status-row{align-items:flex-end;display:flex;gap:var(--spacing100)}.file-tile-status-row>span{align-self:center;display:inline-block;width:100%}sds-icon{color:var(--colorsActionMajor500);font-size:var(--sizing250);left:var(--spacing150);margin-right:var(--spacing100);position:relative;top:12.5px}sds-icon.error{color:var(--colorsSemanticNegative500)}sds-icon.file-preview{font-size:var(--sizing400);left:var(--sizing000);margin-right:var(--sizing000);top:var(--sizing000)}.error-icon{color:var(--colorsSemanticNegative500)}`;var Xr=Object.defineProperty,Kr=Object.getOwnPropertyDescriptor,ee=(r,e,t,i)=>{for(var s=i>1?void 0:i?Kr(e,t):e,o=r.length-1,a;o>=0;o--)(a=r[o])&&(s=(i?a(e,t,s):a(s))||s);return i&&s&&Xr(e,t,s),s};exports.FileTile=class extends y{constructor(){super(...arguments),this.readOnly=!1,this.error=!1,this.message=z("file-tile.fileUploaded"),this.removeLabel=z("file-tile.delete"),this.name=""}get classes(){return P({error:this.error,"read-only":this.readOnly})}getPrefix(){return this.error?c`<sds-icon type="error" class="error-icon"></sds-icon>`:this.getFilePreview()}getClearButton(){return this.readOnly?f:c`
      <sds-button-subtle
        class="file-tile-button"
        size="S"
        @click=${()=>{this.dispatchEvent(new CustomEvent("remove",{bubbles:!0,cancelable:!0}))&&this.remove()}}
        >${this.removeLabel}</sds-button-subtle
      >
    `}getFileExtension(e){var i;return((i=/\.([0-9a-z]+)(?:[?#]|$)/i.exec(e.toLowerCase()))==null?void 0:i[1])??""}getFilePreview(){let e=this.icon;const t=(this.extension??this.getFileExtension(this.path??"")).replace(/^\./,""),i=["jpg","jpeg","png","gif","svg","webp","bmp","ico","tif","tiff","avif"].includes(t);if(!e)switch(t){case"xls":case"xlsx":e="file_excel";break;case"doc":case"docx":e="file_word";break;case"pdf":e="file_pdf";break;default:i?e="file_image":e="file_generic";break}return i&&this.path?c` <div class="file-tile-thumbnail-container">
        <img
          class="file-tile-thumbnail"
          src="${this.path}"
          aria-hidden="true"
        />
      </div>`:c`<sds-icon class=${this.classes} type=${e}></sds-icon>`}connectedCallback(){super.connectedCallback(),this.slot=this.hasAttribute("slot")?this.slot:"previous-files"}render(){return c`
      <div class="file-tile-preview ${this.classes}">
        ${this.getPrefix()}
        <div class="file-tile-details">
          <sds-link
            class="file-link ${this.classes}"
            href="${p(this.path)}"
            target="_blank"
          >
            ${this.name}
          </sds-link>
          <div class="file-tile-status-row">
            <span class="file-tile-status ${this.classes}">
              ${this.message}
            </span>
            ${this.getClearButton()}
          </div>
        </div>
      </div>
    `}};exports.FileTile.styles=Gr;ee([n({type:Boolean,attribute:"read-only"})],exports.FileTile.prototype,"readOnly",2);ee([n({type:Boolean,attribute:"error"})],exports.FileTile.prototype,"error",2);ee([n({type:String})],exports.FileTile.prototype,"message",2);ee([n({type:String,attribute:"remove-label"})],exports.FileTile.prototype,"removeLabel",2);ee([n()],exports.FileTile.prototype,"name",2);ee([n()],exports.FileTile.prototype,"path",2);ee([n()],exports.FileTile.prototype,"extension",2);ee([n()],exports.FileTile.prototype,"icon",2);exports.FileTile=ee([v("sds-file-tile")],exports.FileTile);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const ss=(r,e,t)=>{const i=new Map;for(let s=e;s<=t;s++)i.set(r[s],s);return i},is=_e(class extends $e{constructor(r){if(super(r),r.type!==U.CHILD)throw Error("repeat() can only be used in text expressions")}dt(r,e,t){let i;t===void 0?t=e:e!==void 0&&(i=e);const s=[],o=[];let a=0;for(const d of r)s[a]=i?i(d,a):a,o[a]=t(d,a),a++;return{values:o,keys:s}}render(r,e,t){return this.dt(r,e,t).values}update(r,[e,t,i]){const s=yr(r),{values:o,keys:a}=this.dt(e,t,i);if(!Array.isArray(s))return this.ut=a,o;const d=this.ut??(this.ut=[]),l=[];let h,g,u=0,_=s.length-1,w=0,$=o.length-1;for(;u<=_&&w<=$;)if(s[u]===null)u++;else if(s[_]===null)_--;else if(d[u]===a[w])l[w]=de(s[u],o[w]),u++,w++;else if(d[_]===a[$])l[$]=de(s[_],o[$]),_--,$--;else if(d[u]===a[$])l[$]=de(s[u],o[$]),Ae(r,l[$+1],s[u]),u++,$--;else if(d[_]===a[w])l[w]=de(s[_],o[w]),Ae(r,s[u],s[_]),_--,w++;else if(h===void 0&&(h=ss(a,w,$),g=ss(d,u,_)),h.has(d[u]))if(h.has(d[_])){const x=g.get(a[w]),C=x!==void 0?s[x]:null;if(C===null){const L=Ae(r,s[u]);de(L,o[w]),l[w]=L}else l[w]=de(C,o[w]),Ae(r,s[u],C),s[x]=null;w++}else yt(s[_]),_--;else yt(s[u]),u++;for(;w<=$;){const x=Ae(r,l[$+1]);de(x,o[w]),l[w++]=x}for(;u<=_;){const x=s[u++];x!==null&&yt(x)}return this.ut=a,As(r,l),E}});var Zr=Object.defineProperty,Qr=Object.getOwnPropertyDescriptor,j=(r,e,t,i)=>{for(var s=i>1?void 0:i?Qr(e,t):e,o=r.length-1,a;o>=0;o--)(a=r[o])&&(s=(i?a(e,t,s):a(s))||s);return i&&s&&Zr(e,t,s),s};exports.FileInput=class extends S{constructor(){super(...arguments),this.value="",this.multiple=!1,this.invalidFiles=[],this.inputElementId="file-input",this._inputRequiredInvalid=!1,this.dirty=!1,this._objectUrls=[],this.previousFilesCount=0,this._dropZoneRef=Q(),this._fileInputRef=Q(),this._inputDecoratorRef=Q(),this._onStartDrag=e=>{!this.disabled&&!this.readOnly&&(e.preventDefault(),this._dropZoneElement.classList.add("dragging"))},this._onStopDrag=e=>{e.preventDefault(),this._dropZoneElement.classList.remove("dragging"),this._dropZoneElement.classList.remove("drag-over")},this._onDragOverDropzone=e=>{!this.disabled&&!this.readOnly&&(e.preventDefault(),this._dropZoneElement.classList.add("drag-over"))},this._onDropOnDropzone=e=>{var i;if(this.disabled||this.readOnly)return;const t=[...((i=e.dataTransfer)==null?void 0:i.files)??[]];this._addDroppedFiles(t),e.preventDefault()},this._addMultipleFiles=e=>{this.files=[...this.files,...e],this.dirty=!0,this._fileInputElement.dispatchEvent(new Event("change"))},this._addSingleFile=e=>{this.files=[e],this.dirty=!0,this.ensureNotTooManyFiles(),this._fileInputElement.dispatchEvent(new Event("change"))},this.ensureNotTooManyFiles=()=>{this.multiple||this.files.length+this.previousFilesCount>1&&this.previousFiles.forEach(e=>{e.dispatchEvent(new CustomEvent("remove")),e.remove()})},this._addDroppedFiles=e=>{if(this.multiple)this._addMultipleFiles(e);else{const t=e[0];t&&this._addSingleFile(t)}},this._isSizeValid=e=>!(this.maxFileSize&&e.size>this.maxFileSize),this._isTypeValid=e=>qr(e,this._fileInputElement.accept),this._onFileTileRemove=async e=>{const t=e.target;!this.previousFiles.includes(t)&&t.dataset.index&&(e.preventDefault(),this._inputDecoratorElement.setupValidateHandler(this._fileInputElement),this.dirty=!0,await this._deleteFileIndexFromInput([parseInt(t.dataset.index)],t.error),await this.updateErrorState(),this.dispatchEvent(new Event("change")))},this._onInput=this.onInput.bind(this),this.onChange=async e=>{let t=0;const i=[];for(const s of this.files){const o=this._isSizeValid(s),a=this._isTypeValid(s);(!a||!o)&&(i.push(t),this.invalidFiles.push({file:s,reason:z(a?"file-tile.fileTooLarge":"file-tile.fileTypeNotSupported")})),t++}await this._deleteFileIndexFromInput(i),this.ensureNotTooManyFiles(),await this.updateErrorState(),M(this,e)}}get files(){var e;return((e=this._fileInputRef.value)==null?void 0:e.files)??new DataTransfer().files}set files(e){const t=new DataTransfer;for(const i of e)t.items.add(i);this._fileInputElement.files=t.files}get hasInvalidFiles(){return this.invalidFiles.length>0}get inputClasses(){return super._inputClasses}get additionalClasses(){const{_inputRequiredInvalid:e,_messageSeverity:t}=this;return{error:e||t==="error","has-files":this.files.length>0,"has-previous-files":this.previousFilesCount>0,"has-invalid-files":this.invalidFiles.length>0,multiple:this.multiple}}updated(e){super.updated(e),e.has("dirty")&&this.dirty&&this._inputDecoratorElement.setupValidateHandler(this._fileInputElement)}get isInputRequired(){return this.required==="true"&&this.previousFilesCount===0}render(){const{disabled:e,form:t,inputClasses:i,label:s,message:o,inputElementId:a,name:d,size:l,readOnly:h,required:g,messageSeverity:u,multiple:_,accept:w,_onInput:$}=this;return this.revokeObjectUrls(),c`
      <div class="sds-file-input ${i}">
        <sds-input-decorator
          ${J(this._inputDecoratorRef)}
          ?disabled=${e}
          ?readOnly=${h}
          hint=${p(this.hint)}
          for=${a}
          size=${p(l)}
          label=${p(s)}
          message=${p(o)}
          message-severity=${p(u)}
          required=${p(g)}
        >
          <div
            class="sds-input-field-wrapper sds-focus ${i}"
            ?data-disabled=${e}
            ?data-readonly=${h}
          >
            <input
              ${J(this._fileInputRef)}
              class="sr-only"
              aria-label=${p(s)}
              aria-disabled=${e}
              aria-readonly=${h}
              @input=${$}
              @change=${this.onChange}
              ?required=${this.isInputRequired}
              ?disabled=${e}
              ?readOnly=${h}
              ?multiple=${_}
              type="file"
              form=${p(t)}
              id=${a}
              name=${p(d)}
              accept=${p(w)}
            />
          </div>
          <div
            class="file-input-drop-zone ${i}"
            @dragover=${this._onDragOverDropzone}
            @dragenter=${this._onDragOverDropzone}
            @drop=${this._onDropOnDropzone}
            ${J(this._dropZoneRef)}
          >
            <sds-button
              importance="secondary"
              size="M"
              @click="${()=>{this._chooseFile()}}"
              target="_self"
              type="button"
              ?disabled=${e||h}
            >
              ${this.multiple?z("file-input.selectFiles"):z("file-input.selectFile")}</sds-button
            ><span class="file-input-drop-zone-text"
              >${z(this.multiple?"file-input.dragAndDropFiles":"file-input.dragAndDropFile")}</span
            >
          </div>
        </sds-input-decorator>

        ${this.invalidFiles.length===0&&this.files.length===0&&this.previousFilesCount===0?this.multiple?c` <span class="file-tile-count">
                ${z("file-input.noFiles")}
              </span>`:f:c` ${this.invalidFiles.length===0?f:c`<div class="invalid-files">
                  <span class="file-tile-count">
                    ${z("file-input.errorFilesPrefix")}:
                    ${this.invalidFiles.length}
                  </span>
                  ${is(this.invalidFiles,(x,C)=>this.generateFileTile(x.file,x.reason,C,!0))}
                </div>`}
            ${this.files.length===0?f:c` <span class="file-tile-count">
                    ${z("file-input.selectedFilesPrefix")}:
                    ${this.files.length}
                  </span>
                  ${is(this.files,(x,C)=>this.generateFileTile(x,z("file-tile.fileSelected"),C))}`}
            ${this.previousFilesCount===0?f:c`<span class="file-tile-count">
                  ${z("file-input.uploadedFilesPrefix")}:
                  ${this.previousFilesCount}
                </span>`}`}

        <slot
          name="previous-files"
          @remove=${this._onFileTileRemove}
          @slotchange="${async()=>{this.previousFilesCount=this.previousFiles.length,await this.updateErrorState()}}"
        ></slot>
      </div>
    `}revokeObjectUrls(){this._objectUrls.forEach(e=>{URL.revokeObjectURL(e)})}generateFileTile(e,t,i,s=!1){const o=URL.createObjectURL(e);this._objectUrls.push(o);function a(d){var h;return((h=/\.([0-9a-z]+)(?:[?#]|$)/i.exec(d.toLowerCase()))==null?void 0:h[1])??""}return c`<sds-file-tile
      class=${s?"invalid-file-tile":"selected-file-tile"}
      name=${e.name}
      path=${o}
      extension=${a(e.name)}
      message=${t}
      remove-label=${z("file-tile.clear")}
      ?error=${s}
      data-index=${i}
      @remove=${this._onFileTileRemove}
    >
    </sds-file-tile>`}get _dropZoneElement(){if(this._dropZoneRef.value)return this._dropZoneRef.value;throw new Error("Drop zone not found")}get _fileInputElement(){if(this._fileInputRef.value)return this._fileInputRef.value;throw new Error("File input not found")}get _inputDecoratorElement(){if(this._inputDecoratorRef.value)return this._inputDecoratorRef.value;throw new Error("Input decorator not found")}_chooseFile(){this._fileInputElement.click()}connectedCallback(){super.connectedCallback(),document.addEventListener("dragover",this._onStartDrag),document.addEventListener("dragleave",this._onStopDrag),document.addEventListener("drop",this._onStopDrag)}disconnectedCallback(){super.disconnectedCallback(),document.removeEventListener("dragover",this._onStartDrag),document.removeEventListener("dragleave",this._onStopDrag),document.removeEventListener("drop",this._onStopDrag),this.revokeObjectUrls()}async _deleteFileIndexFromInput(e,t=!1){const i=[...this.files];t?this.invalidFiles=this.invalidFiles.filter((s,o)=>!e.includes(o)):this.files=i.filter((s,o)=>!e.includes(o)),await this.updateErrorState()}onInput(e){const t=e.target;this.value=(t==null?void 0:t.value)??""}async updateErrorState(){await this.updateComplete,this._inputRequiredInvalid=this.required==="true"&&!this.files.length&&!this.previousFilesCount,this._inputRequiredInvalid&&(this.message=this._fileInputElement.validationMessage)}};exports.FileInput.styles=Vr;j([n({reflect:!0})],exports.FileInput.prototype,"value",2);j([n({type:Boolean})],exports.FileInput.prototype,"multiple",2);j([n()],exports.FileInput.prototype,"accept",2);j([n({type:Number,attribute:"max-file-size"})],exports.FileInput.prototype,"maxFileSize",2);j([b()],exports.FileInput.prototype,"files",1);j([b()],exports.FileInput.prototype,"invalidFiles",2);j([b()],exports.FileInput.prototype,"_inputRequiredInvalid",2);j([b()],exports.FileInput.prototype,"dirty",2);j([b()],exports.FileInput.prototype,"isInputRequired",1);j([N({slot:"previous-files",flatten:!0})],exports.FileInput.prototype,"previousFiles",2);j([b()],exports.FileInput.prototype,"previousFilesCount",2);exports.FileInput=j([v("sds-file-input")],exports.FileInput);function Fs(r,e,t){let i=0;return function(...s){clearTimeout(i),i=setTimeout(()=>{e.apply(r,s)},t)}}function Jr(r,e,t){let i=!0;return function(...s){i&&(i=!1,e.apply(r,s),setTimeout(()=>i=!0,t))}}const eo=m`:host{display:flex;flex-wrap:wrap;gap:calc(var(--sizing200)*2) var(--sizing200)}:host([hide-divider]){row-gap:var(--sizing200)}`;var to=Object.defineProperty,so=Object.getOwnPropertyDescriptor,Ft=(r,e,t,i)=>{for(var s=i>1?void 0:i?so(e,t):e,o=r.length-1,a;o>=0;o--)(a=r[o])&&(s=(i?a(e,t,s):a(s))||s);return i&&s&&to(e,t,s),s};exports.FlexContainer=class extends y{constructor(){super(...arguments),this.hideDivider=!1}handleSlotChange(){new ResizeObserver(Jr(this,Fs(this,()=>{this.setItemDividers(this.items)},100),100)).observe(this)}setItemDividers(e){let t=!1,i=0;for(let o=0;o<e.length;o++){const a=e[o];if(!a)continue;if(this.hideDivider){a.setDividerWidth(0);continue}const d=e[o-1];if(d&&s(a,d)&&(t=!0,i=0),!t){a.setDividerWidth(0);continue}const l=e[o+1];if(!l||s(a,l)){a.setDividerWidth(this.offsetWidth-i);continue}const h=l.getBoundingClientRect(),g=a.getBoundingClientRect(),u=h.left-g.left;a.setDividerWidth(u),i+=u}function s(o,a){const d=o.getBoundingClientRect(),l=a.getBoundingClientRect();return d.top!==l.top}}render(){return c`
      <slot
        @slotchange="${()=>{this.handleSlotChange()}}"
      ></slot>
    `}};exports.FlexContainer.styles=eo;Ft([n({type:Boolean,attribute:"hide-divider"})],exports.FlexContainer.prototype,"hideDivider",2);Ft([N({slot:"",flatten:!0})],exports.FlexContainer.prototype,"items",2);exports.FlexContainer=Ft([v("sds-flex-container")],exports.FlexContainer);const io=m`:host{flex:1;position:relative}sds-divider{display:none;left:0;position:absolute;top:calc(var(--sizing200)*-1)}`;var ro=Object.defineProperty,oo=Object.getOwnPropertyDescriptor,ao=(r,e,t,i)=>{for(var s=i>1?void 0:i?oo(e,t):e,o=r.length-1,a;o>=0;o--)(a=r[o])&&(s=(i?a(e,t,s):a(s))||s);return i&&s&&ro(e,t,s),s};exports.FlexItem=class extends y{constructor(){super(...arguments),this.divider=Q()}setDividerWidth(e){var t,i,s;if(e<=0){(t=this.divider.value)==null||t.style.removeProperty("display");return}(i=this.divider.value)==null||i.style.setProperty("display","block"),(s=this.divider.value)==null||s.style.setProperty("width",`${e.toString()}px`)}render(){return c`
      <slot></slot>
      <sds-divider ${J(this.divider)}></sds-divider>
    `}};exports.FlexItem.styles=io;exports.FlexItem=ao([v("sds-flex-item")],exports.FlexItem);const no=m`.loader{--base-size:var(--sizing100Rem);--bar-height:var(--base-size);--primary-color:var(--colorsActionMajor500);--secondary-color:var(--colorsActionMajor150);--length:8em;align-items:center;display:inline-flex;flex-direction:column;width:100%}.loader.color-neutral{--primary-color:var(--colorsSemanticNeutral500);--secondary-color:var(--colorsSemanticNeutral200)}.loader.color-inverse{--primary-color:var(--colorsActionMajorYang100);--secondary-color:var(--colorsActionMajorYang030);color:var(--primary-color)}.loader.size-xs{--base-size:var(--sizing050Rem);--length:6.66em;--label-font:var(--typographyLoaderMessageXs);--label-margin-left:var(--spacing100)}.loader.size-s{--base-size:var(--sizing075Rem);--label-font:var(--typographyLoaderMessageS)}.loader.size-l{--base-size:var(--sizing150Rem);--label-font:var(--typographyLoaderMessageL)}.loader.size-xl{--base-size:var(--sizing200Rem);--label-font:var(--typographyLoaderMessageXl)}.loader.has-label{--label-display:block;--label-font:var(--typographyLoaderMessageM);--label-margin-top:var(--spacing200)}.bar{background:var(--secondary-color);box-sizing:border-box;display:inline-block;font-size:var(--bar-height);overflow:hidden;position:relative;width:100%}.bar,.bar:before{border-radius:var(--borderRadius400);height:var(--bar-height)}.bar:before{animation:load 2s ease-in-out infinite;background:var(--primary-color);content:"";position:absolute;right:35%;width:calc(35% + var(--bar-height))}.label{display:none;display:var(--label-display,none);font:var(--label-font);margin-left:0;margin-left:var(--label-margin-left,0);margin-top:0;margin-top:var(--label-margin-top,0);text-align:center}@keyframes load{0%{right:calc(100% - var(--bar-height));width:calc(.01% + var(--bar-height))}50%{width:calc(35% + var(--bar-height))}95%{width:var(--bar-height)}to{right:0;width:var(--bar-height)}}@media (prefers-reduced-motion){.bar:before{animation:none}}`;var lo=Object.defineProperty,co=Object.getOwnPropertyDescriptor,dt=(r,e,t,i)=>{for(var s=i>1?void 0:i?co(e,t):e,o=r.length-1,a;o>=0;o--)(a=r[o])&&(s=(i?a(e,t,s):a(s))||s);return i&&s&&lo(e,t,s),s};let ye=class extends y{constructor(){super(...arguments),this.color="action",this.size="M",this.hasLabel=!1,this.sizeClassNames={XS:"xs",S:"s",M:"m",L:"l",XL:"xl"}}render(){return c`<span
      class="loader color-${this.color} size-${this.sizeClassNames[this.size]} ${this.hasLabel?"has-label":""}"
    >
      <span class="bar"></span>
      <span class="label">
        <slot></slot>
      </span>
    </span>`}};ye.styles=no;dt([n()],ye.prototype,"color",2);dt([n()],ye.prototype,"size",2);dt([n({attribute:"has-label",type:Boolean})],ye.prototype,"hasLabel",2);ye=dt([v("sds-bar-loader")],ye);const po=m`:host{vertical-align:inherit}.loader{--base-size:calc(var(--sizing100) - var(--sizing010));--bar-width:var(--base-size);--primary-color:var(--colorsActionMajor500);--secondary-color:var(--colorsActionMajor150);--length:8em;--angle:39deg;align-items:center;display:inline-flex;flex-direction:column;vertical-align:inherit}.loader.color-neutral{--primary-color:var(--colorsSemanticNeutral500);--secondary-color:var(--colorsSemanticNeutral200)}.loader.color-inverse{--primary-color:var(--colorsActionMajorYang100);--secondary-color:var(--colorsActionMajorYang030);color:var(--primary-color)}.loader.size-xs{--base-size:calc(var(--sizing025) + var(--sizing010));--length:6.66em;--label-font:var(--typographyLoaderMessageXs);--label-margin-left:var(--spacing100);flex-direction:row}.loader.size-s{--base-size:var(--sizing050);--label-font:var(--typographyLoaderMessageS)}.loader.size-l{--base-size:var(--sizing125);--label-font:var(--typographyLoaderMessageL)}.loader.size-xl{--base-size:calc(var(--sizing175) - var(--sizing010));--label-font:var(--typographyLoaderMessageXl)}.loader.has-label{--label-display:block;--label-font:var(--typographyLoaderMessageM);--label-margin-top:var(--spacing200)}.loader.size-l,.loader.size-xl{--label-margin-top:var(--spacing300)}.label{display:none;display:var(--label-display,none);font:var(--label-font);margin-left:0;margin-left:var(--label-margin-left,0);margin-top:0;margin-top:var(--label-margin-top,0);text-align:center}.spinner{animation:load 1.6s linear infinite,rotation 1.6s linear infinite;background:conic-gradient(var(--primary-color) var(--angle),var(--secondary-color) var(--angle));border-radius:100%;box-sizing:border-box;display:inline-block;font-size:var(--bar-width);height:var(--length);-webkit-mask:linear-gradient(#fff,#fff 0) content-box,linear-gradient(#fff,#fff 0);mask:linear-gradient(#fff,#fff 0) content-box,linear-gradient(#fff,#fff 0);-webkit-mask:linear-gradient(#fff 0 0) content-box,linear-gradient(#fff 0 0);mask:linear-gradient(#fff 0 0) content-box,linear-gradient(#fff 0 0);mask-composite:xor;-webkit-mask-composite:xor;mask-composite:exclude;padding:var(--bar-width);position:relative;transform:rotate(var(--rotation)) scaleX(-1);width:var(--length)}.spinner:before{top:var(--bar-width);transform:translate(-50%,-100%)}.spinner:after,.spinner:before{background:var(--primary-color);border-radius:50%;content:"";height:var(--bar-width);left:50%;position:absolute;width:var(--bar-width)}.spinner:after{animation:load 1.6s linear infinite;top:calc(var(--bar-width)/2);transform:rotate(var(--angle)) translate(-50%,-50%);transform-origin:0 calc(var(--length)/2 - var(--bar-width)/2)}@keyframes load{0%{--angle:0deg}30.1875%{--angle:126deg}55.1875%{--angle:0deg}82.3125%{--angle:126deg}98.9375%{--angle:10.08deg}to{--angle:0deg}}@keyframes rotation{0%{transform:rotate(-216deg) scaleX(-1)}50%{transform:rotate(144deg) scaleX(-1)}98.9375%{transform:rotate(500.987deg) scaleX(-1)}to{transform:rotate(504deg) scaleX(-1)}}@media (prefers-reduced-motion){.spinner,.spinner:after{animation:none}}`;var ho=Object.defineProperty,uo=Object.getOwnPropertyDescriptor,ct=(r,e,t,i)=>{for(var s=i>1?void 0:i?uo(e,t):e,o=r.length-1,a;o>=0;o--)(a=r[o])&&(s=(i?a(e,t,s):a(s))||s);return i&&s&&ho(e,t,s),s};let we=class extends y{constructor(){super(...arguments),this.color="action",this.size="M",this.hasLabel=!1,this.sizeClassNames={XS:"xs",S:"s",M:"m",L:"l",XL:"xl"}}render(){return c`<span
      class="loader color-${this.color} size-${this.sizeClassNames[this.size]} ${this.hasLabel?"has-label":""}"
    >
      <span class="spinner"></span>
      <span class="label">
        <slot></slot>
      </span>
    </span>`}};we.styles=po;document.adoptedStyleSheets.push(m`
@property --angle{initial-value:36deg;inherits:false;syntax:"<angle>"}@property --rotation{initial-value:36deg;inherits:false;syntax:"<angle>"}
      `.styleSheet??new CSSStyleSheet);ct([n()],we.prototype,"color",2);ct([n()],we.prototype,"size",2);ct([n({attribute:"has-label",type:Boolean})],we.prototype,"hasLabel",2);we=ct([v("sds-ring-loader")],we);var go=Object.defineProperty,vo=Object.getOwnPropertyDescriptor,Se=(r,e,t,i)=>{for(var s=i>1?void 0:i?vo(e,t):e,o=r.length-1,a;o>=0;o--)(a=r[o])&&(s=(i?a(e,t,s):a(s))||s);return i&&s&&go(e,t,s),s};exports.Loader=class extends y{constructor(){super(...arguments),this.shape="ring",this.color="action",this.size="M",this.hasLabel=!1}handleContentSlotChange(){this.hasLabel=this.content.length>0}renderSlot(){return c`<slot
      @slotchange="${()=>{this.handleContentSlotChange()}}"
    ></slot>`}render(){switch(this.shape){case"bar":return c` <sds-bar-loader
          color="${this.color}"
          size="${this.size}"
          ?has-label=${this.hasLabel}
        >
          ${this.renderSlot()}
        </sds-bar-loader>`;default:return c`<sds-ring-loader
          color="${this.color}"
          size="${this.size}"
          ?has-label=${this.hasLabel}
        >
          ${this.renderSlot()}
        </sds-ring-loader>`}}};Se([n()],exports.Loader.prototype,"shape",2);Se([n()],exports.Loader.prototype,"color",2);Se([n()],exports.Loader.prototype,"size",2);Se([At()],exports.Loader.prototype,"content",2);Se([b()],exports.Loader.prototype,"hasLabel",2);exports.Loader=Se([v("sds-loader")],exports.Loader);var bo=Object.defineProperty,fo=Object.getOwnPropertyDescriptor,Ce=(r,e,t,i)=>{for(var s=i>1?void 0:i?fo(e,t):e,o=r.length-1,a;o>=0;o--)(a=r[o])&&(s=(i?a(e,t,s):a(s))||s);return i&&s&&bo(e,t,s),s};exports.Message=class extends y{constructor(){super(...arguments),this.importance="standard",this.size="M",this.type="positive",this.heading="",this.removable=!1,this.messageTypeIconMap={neutral:"info",positive:"tick_circle",negative:"error",caution:"warning",information:"info"}}render(){const e=this.messageTypeIconMap[this.type];return c`
      <div class="sds-message ${this.size}">
        <div class="icon-container ${this.type} ${this.size}">
          <sds-icon class="icon" type="${p(e)}"></sds-icon>
        </div>
        <div class="message-container ${this.type}">
          <div>
            <div class="message heading-${this.size}">${this.heading}</div>
            <div class="message ${this.size}"><slot></slot></div>
          </div>
          ${this.removable?this.getCloseButton():f}
        </div>
      </div>
    `}getCloseButton(){return c` <sds-button-subtle
      size="S"
      @click=${()=>{this.dispatchEvent(new CustomEvent("close",{cancelable:!0}))&&this.remove()}}
    >
      <sds-visually-hidden>${z("button.close")}</sds-visually-hidden>
      <sds-icon slot="icon" type="close"></sds-icon
    ></sds-button-subtle>`}};exports.Message.styles=m`
.sds-message{display:inline-flex;width:100%}
.sds-message .icon-container{align-items:center;border-radius:var(--borderRadius100) var(--borderRadius000)
          var(--borderRadius000) var(--borderRadius100);display:flex;justify-content:center}
.sds-message .icon-container.M{width:var(--sizing400)}
.sds-message .icon-container.L{width:var(--sizing500)}
.sds-message .icon-container.neutral{background:var(--colorsSemanticNeutral500)}
.sds-message .icon-container.positive{background:var(--colorsSemanticPositive500)}
.sds-message .icon-container.negative{background:var(--colorsSemanticNegative500)}
.sds-message .icon-container.caution{background:var(--colorsSemanticCaution500)}
.sds-message .icon-container.information{background:var(--colorsSemanticInfo500)}
.sds-message .icon-container .icon{color:var(--colorsUtilityYang100);font-size:var(--fontSizes400)}
.sds-message .message-container{align-items:flex-start;background:var(--colorsUtilityYang100);border-radius:var(--borderRadius000) var(--borderRadius100)
          var(--borderRadius100) var(--borderRadius000);display:flex;flex:1 1 0;flex-direction:row;justify-content:space-between;padding:var(--spacing200) var(--spacing200) var(--spacing200)
          var(--spacing300)}
.sds-message .message-container.neutral{border:var(--borderWidth100) var(--colorsSemanticNeutral500) solid}
.sds-message .message-container.positive{border:var(--borderWidth100) var(--colorsSemanticPositive500) solid}
.sds-message .message-container.negative{border:var(--borderWidth100) var(--colorsSemanticNegative500) solid}
.sds-message .message-container.caution{border:var(--borderWidth100) var(--colorsSemanticCaution500) solid}
.sds-message .message-container.information{border:var(--borderWidth100) var(--colorsSemanticInfo500) solid}
.sds-message .message-container .message{align-self:stretch;color:var(--colorsUtilityYin090);word-wrap:break-word;flex-direction:column}
.sds-message .message-container .message.M{font:var(--typographyMessageTextM)}
.sds-message .message-container .message.L{font:var(--typographyMessageTextL)}
.sds-message .message-container .message.heading-M{font:var(--typographyMessageHeadingM)}
.sds-message .message-container .message.heading-L{font:var(--typographyMessageHeadingL)}
  `;Ce([n({type:String})],exports.Message.prototype,"importance",2);Ce([n({type:String})],exports.Message.prototype,"size",2);Ce([n({type:String})],exports.Message.prototype,"type",2);Ce([n({type:String})],exports.Message.prototype,"heading",2);Ce([n({type:Boolean})],exports.Message.prototype,"removable",2);exports.Message=Ce([v("sds-message")],exports.Message);var mo=Object.defineProperty,yo=Object.getOwnPropertyDescriptor,B=(r,e,t,i)=>{for(var s=i>1?void 0:i?yo(e,t):e,o=r.length-1,a;o>=0;o--)(a=r[o])&&(s=(i?a(e,t,s):a(s))||s);return i&&s&&mo(e,t,s),s};exports.TextInput=class extends S{constructor(){super(...arguments),this._inputInvalid=!1,this.type="text",this.ariaLabel=null,this.inputElementId="text-input",this._onInput=this.onInput.bind(this),this._onFocusOut=this.onFocusOut.bind(this)}get inputClasses(){return super._inputClasses}get additionalClasses(){const{_inputInvalid:e,_messageSeverity:t}=this;return{error:e||t==="error"}}render(){const{disabled:e,form:t,hint:i,inputClasses:s,label:o,max:a,maxLength:d,message:l,min:h,minLength:g,inputElementId:u,name:_,size:w,pattern:$,readOnly:x,required:C,messageSeverity:L,step:R,type:Le,value:ke,_onFocusOut:ht,_onInput:Ts}=this;return c`
      <div class="sds-text-input ${s}">
        <sds-input-decorator
          ?disabled=${e}
          ?readOnly=${x}
          hint=${p(i)}
          for=${u}
          size=${p(w)}
          label=${p(o)}
          message=${p(l)}
          message-severity=${p(L)}
          required=${p(C)}
        >
          <div class="sds-input-field-wrapper sds-focus-within ${s}">
            <slot name="${exports.TextInput.EMBEDDED_PREFIX_SLOT_NAME}"></slot>
            <input
              class="sds-input-field ${s}"
              aria-label=${p(this.ariaLabel??o)}
              aria-disabled=${e}
              aria-readonly=${x}
              @focusout=${ht}
              @input=${Ts}
              @change=${js=>M(this,js)}
              ?required=${C==="true"}
              ?disabled=${e}
              ?readOnly=${x}
              type=${p(Le)}
              form=${p(t)}
              id=${u}
              max=${p(a)}
              maxlength=${p(d)}
              min=${p(h)}
              minlength=${p(g)}
              name=${p(_)}
              pattern=${p($)}
              step=${p(R)}
              .value=${lt(ke??"")}
              lang=${navigator.language}
            />
            <slot name="${exports.TextInput.EMBEDDED_SUFFIX_SLOT_NAME}"></slot>
          </div>
        </sds-input-decorator>
      </div>
    `}onInput(e){const t=e.target;this.value=(t==null?void 0:t.value)??""}onFocusOut(e){const t=e.target;this._inputInvalid=!t.checkValidity()}};exports.TextInput.EMBEDDED_PREFIX_SLOT_NAME="prefix";exports.TextInput.EMBEDDED_SUFFIX_SLOT_NAME="suffix";exports.TextInput.styles=[V,m`
::slotted(sds-button),
      ::slotted(sds-button-subtle){--border-top-left-radius:0;--border-bottom-left-radius:0;--border-top-right-radius:var(--borderRadius050);--border-bottom-right-radius:var(--borderRadius050);position:relative;top:-1px}input[type=search]::-webkit-search-cancel-button{-webkit-appearance:none;appearance:none}.sds-text-input{box-sizing:content-box;color:var(--colorsUtilityYin090);gap:var(--spacing100);width:100%}.sds-text-input .sds-input-field{background:var(--colorsUtilityYang100);border:none;border-radius:var(--border-top-left-radius, var(--spacing050))
            var(--border-top-right-radius, var(--spacing050))
            var(--border-bottom-right-radius, var(--spacing050))
            var(--border-bottom-left-radius, var(--spacing050));color:var(--colorsActionMajorYin090);flex-grow:1;font:var(--typographyFormFieldInputTextM);line-height:var(--lineHeights500);padding:var(--spacing000) var(--spacing150);text-align:left;text-align:var(--input-text-align,left);width:100%;width:var(--input-field-width,100%)}.sds-text-input .sds-input-field:-moz-read-only{background:var(--colorsUtilityReadOnly400);color:var(--colorsUtilityYin090)}.sds-text-input .sds-input-field:read-only{background:var(--colorsUtilityReadOnly400);color:var(--colorsUtilityYin090)}.sds-text-input .sds-input-field:disabled{background:var(--colorsUtilityDisabled400);color:var(--colorsUtilityYin030)}.sds-text-input .sds-input-field input{border-radius:0}.sds-text-input .sds-input-field input.size-xs{padding:var(--spacing000)}.sds-text-input .sds-input-field:enabled:focus-visible{border:none;outline:none}.sds-text-input .sds-input-field-wrapper{--suffix-icon-vertical-spacing:var(--spacing125);--suffix-icon-horizontal-spacing:var(--spacing100);align-items:stretch;background:var(--colorsUtilityYang100);border:var(--borderWidth100) solid var(--colorsUtilityMajor300);border-radius:var(--border-top-left-radius, var(--spacing050))
            var(--border-top-right-radius, var(--spacing050))
            var(--border-bottom-right-radius, var(--spacing050))
            var(--border-bottom-left-radius, var(--spacing050));box-sizing:border-box;color:var(--colorsUtilityYin065);display:flex;gap:var(--spacing100);height:var(--sizing500);justify-content:space-between;max-width:100%;width:100%;width:var(--field-width,100%)}.sds-text-input .sds-input-field-wrapper:has(slot:focus-within){border-color:none;box-shadow:none}.sds-text-input .sds-input-field-wrapper.error{border:var(--borderWidth200) solid var(--colorsSemanticNegative500)}.sds-text-input .sds-input-field-wrapper.read-only{background:var(--colorsUtilityReadOnly400);border-color:var(--colorsUtilityReadOnly600);color:var(--colorsUtilityYin090)}.sds-text-input .sds-input-field-wrapper.disabled{background:var(--colorsUtilityDisabled400);border-color:var(--colorsUtilityDisabled600);color:var(--colorsUtilityYin030);cursor:not-allowed;pointer-events:none}.sds-text-input .sds-input-field-wrapper.size-xs{--suffix-icon-vertical-spacing:var(--spacing025);--suffix-icon-horizontal-spacing:var(--spacing100);height:var(--sizing300)}.sds-text-input .sds-input-field-wrapper.size-xs .sds-input-field{font:var(--typographyFormFieldInputTextXs);line-height:var(--lineHeights300);padding:0 var(--spacing100)}.sds-text-input .sds-input-field-wrapper.size-s{--suffix-icon-vertical-spacing:var(--spacing075);--suffix-icon-horizontal-spacing:var(--spacing100);height:var(--sizing400)}.sds-text-input .sds-input-field-wrapper.size-s .sds-input-field{font:var(--typographyFormFieldInputTextS);padding:0 var(--spacing100)}.sds-text-input .sds-input-field-wrapper.size-l{--suffix-icon-vertical-spacing:var(--spacing150);--suffix-icon-horizontal-spacing:var(--spacing200);height:var(--sizing600);min-height:var(--sizing600)}.sds-text-input .sds-input-field-wrapper.size-l .sds-input-field{font:var(--typographyFormFieldInputTextL);font-size:var(--fontSizes200);padding:0 var(--spacing200)}input[type="number"]::-webkit-inner-spin-button,
      input[type="number"]::-webkit-outer-spin-button{-webkit-appearance:none;appearance:none}input[type=number]{-webkit-appearance:textfield;-moz-appearance:textfield;appearance:textfield}
    `];B([b()],exports.TextInput.prototype,"_inputInvalid",2);B([n()],exports.TextInput.prototype,"type",2);B([n({type:Number})],exports.TextInput.prototype,"max",2);B([n({type:Number})],exports.TextInput.prototype,"maxLength",2);B([n({type:Number})],exports.TextInput.prototype,"min",2);B([n({type:Number})],exports.TextInput.prototype,"minLength",2);B([n()],exports.TextInput.prototype,"pattern",2);B([n({type:Number})],exports.TextInput.prototype,"step",2);B([n({reflect:!0})],exports.TextInput.prototype,"value",2);B([n({attribute:"aria-label"})],exports.TextInput.prototype,"ariaLabel",2);exports.TextInput=B([v("sds-text-input")],exports.TextInput);var wo=Object.defineProperty,_o=Object.getOwnPropertyDescriptor,$o=Object.getPrototypeOf,xo=Reflect.get,zo=(r,e,t,i)=>{for(var s=i>1?void 0:i?_o(e,t):e,o=r.length-1,a;o>=0;o--)(a=r[o])&&(s=(i?a(e,t,s):a(s))||s);return i&&s&&wo(e,t,s),s},So=(r,e,t)=>xo($o(r),t,e);exports.TextInputIcon=class extends exports.Icon{connectedCallback(){super.connectedCallback(),this.slot=this.hasAttribute("slot")?this.slot:"suffix"}render(){return c` <div class="input-icon">${super.render()}</div> `}};exports.TextInputIcon.styles=[So(exports.TextInputIcon,exports.TextInputIcon,"styles"),m`
.input-icon{font-size:var(--fontSizes400);padding:calc(
            var(--suffix-icon-vertical-spacing, var(--borderWidth100)) - var(
                --borderWidth100
              )
          )
          var(--suffix-icon-horizontal-spacing, 0) 0}
    `];exports.TextInputIcon=zo([v("sds-text-input-icon")],exports.TextInputIcon);const Co=m`:host{display:block}::slotted(sds-input-prefix),::slotted(sds-input-suffix){align-self:center;color:var(--colorsUtilityYin090);font:var(--typographyFormFieldInputTextL);font-weight:var(--fontWeights500)}::slotted(sds-input-prefix){padding-left:var(--spacing100)}::slotted(sds-input-suffix){padding-right:var(--spacing100)}sds-text-input{--input-text-align:right;--field-width:max-content}`;var Po=Object.defineProperty,Oo=Object.getOwnPropertyDescriptor,oe=(r,e,t,i)=>{for(var s=i>1?void 0:i?Oo(e,t):e,o=r.length-1,a;o>=0;o--)(a=r[o])&&(s=(i?a(e,t,s):a(s))||s);return i&&s&&Po(e,t,s),s};exports.NumeralInput=class extends S{constructor(){super(...arguments),this._inputInvalid=!1,this.valueAsNumber=0,this.inputElementId="numeral-input"}get additionalClasses(){const{_inputInvalid:e,_messageSeverity:t}=this;return{error:e||t==="error"}}parseLocalizedNumber(e){var d,l;const t=new Intl.NumberFormat(e).formatToParts(12345.6),i=[...new Intl.NumberFormat(e,{useGrouping:!1}).format(9876543210)].reverse(),s=new Map(i.map((h,g)=>[h,g])),o=((d=t.find(h=>h.type==="group"))==null?void 0:d.value)??"",a=((l=t.find(h=>h.type==="decimal"))==null?void 0:l.value)??".";return{groupPart:o,decimalPart:a,index:s,numerals:i}}stripGrouping(e,t){const{groupPart:i,decimalPart:s}=this.parseLocalizedNumber(t);return e.replace(new RegExp(`[${i}]`,"g"),"").replace(new RegExp(`[${s}]`),".")}formatValueWithLocale(e,t,i){return new Intl.NumberFormat(t,{minimumFractionDigits:i,maximumFractionDigits:i}).format(e)}handleFocus(e){var o;const i=(o=e.target.shadowRoot)==null?void 0:o.querySelector("input"),s=navigator.language;if(i){if(this.tempValue!==void 0)i.value=this.tempValue;else{const a=parseFloat(this.stripGrouping(i.value,s));this.value=isNaN(a)?"":a.toString(),i.value=isNaN(a)?"":a.toString()}i.type="number"}}handleBlur(e){var d,l;const i=(d=e.target.shadowRoot)==null?void 0:d.querySelector("input"),o=(((l=this.step)==null?void 0:l.toString().split(".")[1])??"").length,a=navigator.language;if(i){const h=i.valueAsNumber;this.tempValue=i.value,i.checkValidity()?(this._inputInvalid=!1,this.valueAsNumber=h,i.type="text",isNaN(parseFloat(i.value))?(this.value="",i.value=""):(this.value=this.formatValueWithLocale(this.valueAsNumber,a,o),i.value=this.formatValueWithLocale(this.valueAsNumber,a,o))):(this.value=i.value,this.valueAsNumber=h,this._inputInvalid=!0)}}render(){const{form:e,step:t,hint:i,disabled:s,inputElementId:o,label:a,name:d,readOnly:l,size:h,message:g,messageSeverity:u,required:_,min:w,max:$}=this;return c`
      <sds-text-input
        .value=${lt(this.value??"")}
        inputmode="numeric"
        form="${p(e)}"
        hint="${p(i)}"
        label="${p(a)}"
        name="${p(d)}"
        ?readOnly=${l}
        size=${p(h)}
        message=${p(g)}
        message-severity=${p(u)}
        id=${o}
        ?disabled=${s}
        @focus=${x=>{this.handleFocus(x)}}
        @blur=${x=>{this.handleBlur(x)}}
        @change=${x=>M(this,x)}
        max="${p($)}"
        min="${p(w)}"
        step="${p(t)}"
        required="${p(_)}"
      >
        <slot
          name="${exports.NumeralInput.EMBEDDED_PREFIX_SLOT_NAME}"
          slot="prefix"
        ></slot>
        <slot
          name="${exports.NumeralInput.EMBEDDED_SUFFIX_SLOT_NAME}"
          slot="suffix"
        ></slot>
      </sds-text-input>
    `}};exports.NumeralInput.EMBEDDED_PREFIX_SLOT_NAME="prefix";exports.NumeralInput.EMBEDDED_SUFFIX_SLOT_NAME="suffix";exports.NumeralInput.styles=[V,Co];oe([b()],exports.NumeralInput.prototype,"_inputInvalid",2);oe([n({type:Number})],exports.NumeralInput.prototype,"max",2);oe([n({type:Number})],exports.NumeralInput.prototype,"min",2);oe([n({type:Number})],exports.NumeralInput.prototype,"step",2);oe([b()],exports.NumeralInput.prototype,"valueAsNumber",2);oe([n({type:String})],exports.NumeralInput.prototype,"value",2);oe([b()],exports.NumeralInput.prototype,"tempValue",2);exports.NumeralInput=oe([v("sds-numeral-input")],exports.NumeralInput);const Eo=m`:host{display:block}.pagination{align-items:center;container:pagination/inline-size;display:grid;grid-template-columns:1fr auto 1fr;padding-left:var(--spacing200);padding-right:var(--spacing200)}.pagination-items-per-page{align-items:center;display:flex;gap:var(--spacing050);grid-column:1;justify-content:flex-start;justify-self:start}.pagination-items-per-page sds-dropdown{width:var(--sizing900)}.pagination-navigation-wrapper{display:flex;gap:var(--spacing400)}.pagination-navigation-wrapper-navigation-start{grid-column:1}.pagination-navigation-wrapper-navigation-end{grid-column:3}.pagination-navigation-wrapper-navigation-end,.pagination-navigation-wrapper-navigation-start{align-items:center;display:flex;gap:var(--spacing400)}.pagination-total-items-wrapper{grid-column:3;justify-self:end}.pagination-navigation-wrapper-goto-page{align-items:center;display:flex;gap:var(--spacing050);grid-column:2;justify-content:space-between}.pagination-navigation-wrapper-goto-page-input{max-width:var(--sizing525)}@container pagination (width < 768px){.pagination-items-per-page,.pagination-total-items-wrapper,::slotted(sds-pagination-first),::slotted(sds-pagination-last){display:none}}.hide-link{visibility:hidden}.show-link{visibility:visible}`;var Lo=Object.defineProperty,ko=Object.getOwnPropertyDescriptor,Pe=(r,e,t,i)=>{for(var s=i>1?void 0:i?ko(e,t):e,o=r.length-1,a;o>=0;o--)(a=r[o])&&(s=(i?a(e,t,s):a(s))||s);return i&&s&&Lo(e,t,s),s};exports.Pagination=class extends y{constructor(){super(...arguments),this.total=0,this.page=1,this.hideTotal=!1,this.pageSizeOptions=[],this.pageSize=10,this.isLastPage=!1,this.isFirstPage=!1,this.selectedOptionIndex=-1}get totalPages(){return Math.ceil(this.total/this.pageSize)}render(){return this.checkFirstOrLastPage(),this.selectedOptionIndex=this.pageSizeOptions.length>0?this.checkIndexOrInsertOption():-1,c`
      <div class="pagination">
        <div class="pagination-items-per-page-wrapper">
          ${this.pageSizeOptions.length>0?c`
                <div class="pagination-items-per-page">
                  <span>${z("pagination.show")}</span>
                  <sds-dropdown
                    size="XS"
                    type="standard"
                    @change=${e=>{this.changeItemsPerPage(e)}}
                  >
                    ${this.pageSizeOptions.map((e,t)=>c`<sds-dropdown-option
                          name="options-${e}"
                          label="${e}"
                          value="${e}"
                          type="standard"
                          ?selected=${t===this.selectedOptionIndex}
                        ></sds-dropdown-option>`)}
                  </sds-dropdown>
                  <span>${z("pagination.items")}</span>
                </div>
              `:""}
        </div>
        <div class="pagination-navigation-wrapper">
          <div class="pagination-navigation-wrapper-navigation-start">
            <slot
              name="first"
              class="${this.isFirstPage?"hide-link":"show-link"}"
              @click=${e=>{this.onClickFirst(e)}}
              @keypress=${e=>{this.callHandlerIfEnter(e,t=>{this.onClickFirst(t)})}}
            ></slot>

            <slot
              name="previous"
              class="${this.isFirstPage?"hide-link":"show-link"}"
              @click=${e=>{this.onClickPrevious(e)}}
              @keypress=${e=>{this.callHandlerIfEnter(e,t=>{this.onClickPrevious(t)})}}
            ></slot>
          </div>
          <div class="pagination-navigation-wrapper-goto-page">
            <span>${z("pagination.page")}</span>
            <div class="pagination-navigation-wrapper-goto-page-input">
              <sds-text-input
                size="XS"
                value=${this.page}
                @keydown=${e=>{this.onPageKeyDown(e)}}
                @focusout=${e=>{this.dispatchEventOnInput(e)}}
                .ariaLabel=${z("pagination.pageNumber")}
              ></sds-text-input>
            </div>
            <span> ${z("pagination.of")} ${this.totalPages}</span>
          </div>
          <div class="pagination-navigation-wrapper-navigation-end">
            <slot
              name="next"
              class="${this.isLastPage?"hide-link":"show-link"}"
              @click=${e=>{this.onClickNext(e)}}
              @keypress=${e=>{this.callHandlerIfEnter(e,t=>{this.onClickNext(t)})}}
            ></slot>
            <slot
              name="last"
              class="${this.isLastPage?"hide-link":"show-link"}"
              @click=${e=>{this.onClickLast(e)}}
              @keypress=${e=>{this.callHandlerIfEnter(e,t=>{this.onClickLast(t)})}}
            ></slot>
          </div>
        </div>
        ${this.hideTotal?"":c`<div class="pagination-total-items-wrapper">
              <span class="pagination-total-items-wrapper-count"
                >${this.total}</span
              >
              <span class="pagination-total-items-wrapper-text"
                >${z("pagination.items")}</span
              >
            </div>`}
      </div>
    `}callHandlerIfEnter(e,t){e.key==="Enter"&&t(e)}checkIndexOrInsertOption(){if(this.pageSizeOptions.includes(this.pageSize))return this.pageSizeOptions.findIndex(t=>t===this.pageSize);const e=this.pageSizeOptions;return e.push(this.pageSize),e.sort((t,i)=>t-i).findIndex(t=>t===this.pageSize)}onClickPrevious(e){if(this.page>1){const t={total:this.total,page:this.page-1,pagesize:this.pageSize};this.dispatchPageChangeEvent(t)||e.preventDefault()}}onClickNext(e){if(this.page<this.totalPages){const t={total:this.total,page:this.page+1,pagesize:this.pageSize};this.dispatchPageChangeEvent(t)||e.preventDefault()}}onClickFirst(e){if(this.page>1){const t={total:this.total,page:1,pagesize:this.pageSize};this.dispatchPageChangeEvent(t)||e.preventDefault()}}onClickLast(e){if(this.page<this.totalPages){const t={total:this.total,page:this.totalPages,pagesize:this.pageSize};this.dispatchPageChangeEvent(t)||e.preventDefault()}}checkFirstOrLastPage(){this.page===this.totalPages?(this.isLastPage=!0,this.isFirstPage=!1):this.page===1?(this.isFirstPage=!0,this.isLastPage=!1):(this.isLastPage=!1,this.isFirstPage=!1)}changeItemsPerPage(e){const t=this.pageSize;this.pageSize=parseInt(e.currentTarget.value),this.pageSize!=t&&(this.page=1);const i={total:this.total,page:this.page,pagesize:this.pageSize};this.dispatchPageChangeEvent(i)}onPageKeyDown(e){(e.key==="Enter"||e.key==="Space")&&(e.stopPropagation(),this.dispatchEventOnInput(e))}dispatchEventOnInput(e){const t=e.target,i=t==null?void 0:t.value;t==null||t.blur();const s=parseInt(i??"1");if(i!==""&&this.page!==s){const o={total:this.total,page:s,pagesize:this.pageSize};this.dispatchPageChangeEvent(o)||e.preventDefault()}}dispatchPageChangeEvent(e){return this.checkFirstOrLastPage(),this.dispatchEvent(new CustomEvent("page-change",{cancelable:!0,detail:e}))}};exports.Pagination.styles=Eo;Pe([n({attribute:"total",type:Number})],exports.Pagination.prototype,"total",2);Pe([n({attribute:"page",type:Number})],exports.Pagination.prototype,"page",2);Pe([n({attribute:"hide-total",type:Boolean})],exports.Pagination.prototype,"hideTotal",2);Pe([n({attribute:"page-size-options",type:Array,converter:r=>(r??"").split(",").map(e=>e.trim()).filter(e=>!isNaN(Number(e))).map(Number).sort()})],exports.Pagination.prototype,"pageSizeOptions",2);Pe([n({attribute:"page-size",type:Number})],exports.Pagination.prototype,"pageSize",2);exports.Pagination=Pe([v("sds-pagination")],exports.Pagination);var Io=Object.defineProperty,Ao=(r,e,t,i)=>{for(var s=void 0,o=r.length-1,a;o>=0;o--)(a=r[o])&&(s=a(e,t,s)||s);return s&&Io(e,t,s),s};class Ye extends y{connectedCallback(){super.connectedCallback(),this.slot=this.hasAttribute("slot")?this.slot:this.paginationSlot}render(){return c`<sds-link href=${p(this.href)}>
      <slot></slot>
    </sds-link>`}}Ao([n()],Ye.prototype,"href");var Do=Object.defineProperty,Fo=Object.getOwnPropertyDescriptor,Mo=(r,e,t,i)=>{for(var s=i>1?void 0:i?Fo(e,t):e,o=r.length-1,a;o>=0;o--)(a=r[o])&&(s=(i?a(e,t,s):a(s))||s);return i&&s&&Do(e,t,s),s};exports.PaginationFirst=class extends Ye{constructor(){super(...arguments),this.paginationSlot="first"}};exports.PaginationFirst=Mo([v("sds-pagination-first")],exports.PaginationFirst);var To=Object.defineProperty,jo=Object.getOwnPropertyDescriptor,Ro=(r,e,t,i)=>{for(var s=i>1?void 0:i?jo(e,t):e,o=r.length-1,a;o>=0;o--)(a=r[o])&&(s=(i?a(e,t,s):a(s))||s);return i&&s&&To(e,t,s),s};exports.PaginationPrevious=class extends Ye{constructor(){super(...arguments),this.paginationSlot="previous"}};exports.PaginationPrevious=Ro([v("sds-pagination-previous")],exports.PaginationPrevious);var Uo=Object.defineProperty,No=Object.getOwnPropertyDescriptor,Bo=(r,e,t,i)=>{for(var s=i>1?void 0:i?No(e,t):e,o=r.length-1,a;o>=0;o--)(a=r[o])&&(s=(i?a(e,t,s):a(s))||s);return i&&s&&Uo(e,t,s),s};exports.PaginationNext=class extends Ye{constructor(){super(...arguments),this.paginationSlot="next"}};exports.PaginationNext=Bo([v("sds-pagination-next")],exports.PaginationNext);var Ho=Object.defineProperty,Wo=Object.getOwnPropertyDescriptor,Yo=(r,e,t,i)=>{for(var s=i>1?void 0:i?Wo(e,t):e,o=r.length-1,a;o>=0;o--)(a=r[o])&&(s=(i?a(e,t,s):a(s))||s);return i&&s&&Ho(e,t,s),s};exports.PaginationLast=class extends Ye{constructor(){super(...arguments),this.paginationSlot="last"}};exports.PaginationLast=Yo([v("sds-pagination-last")],exports.PaginationLast);var Vo=Object.defineProperty,qo=Object.getOwnPropertyDescriptor,H=(r,e,t,i)=>{for(var s=i>1?void 0:i?qo(e,t):e,o=r.length-1,a;o>=0;o--)(a=r[o])&&(s=(i?a(e,t,s):a(s))||s);return i&&s&&Vo(e,t,s),s};exports.Pill=class extends y{constructor(){super(...arguments),this.label="",this.removable=!1,this.size="M",this.status="neutral",this.filled=!1,this.background="light"}get _inputClasses(){return P(this._classList)}get _classList(){const{filled:e,size:t,status:i,background:s,_showThumbnail:o,_showCloseButton:a}=this;return{filled:e,removable:a,thumbnail:o,"size-s":t==="S","size-m":t==="M","size-l":t==="L","size-xl":t==="XL","status-caution":i==="caution","status-information":i==="information","status-negative":i==="negative","status-neutral":i==="neutral","status-positive":i==="positive","background-dark":s==="dark"}}get _showCloseButton(){return this.removable&&this.size!=="S"}get _showThumbnail(){return this.thumbnail!==void 0&&this.size!=="S"&&this.status==="neutral"&&!this.filled&&this.thumbnail.trim().length>0}render(){return c`
      <span class="sds-pill ${this._inputClasses}">
        <img
          class="sds-pill-thumbnail"
          src=${p(this.thumbnail)}
          alt=${p(this.thumbnail&&this.alt)}
        />
        <label class="sds-pill-label">${this.label}</label>
        <button
          class="sds-focus sds-pill-close-button-wrapper"
          aria-label=${this.label}
          @click="${()=>{this.remove()}}"
        >
          <sds-icon class="sds-pill-close-button" type="cross"></sds-icon>
        </button>
      </span>
    `}};exports.Pill.styles=[V,m`
.sds-pill{--pillItemHeight:var(--sizing300);--pillLabelPaddingRight:var(--spacing100);--pillLabelPaddingLeft:var(--spacing075);--pillColor:var(--colorsSemanticNeutral500);--pillFontColor:var(--colorsSemanticNeutralYin090);--pillHoverColor:var(--colorsSemanticNeutral600);align-items:center;border:var(--borderWidth200) solid var(--pillColor);border-radius:var(--borderRadius025);color:var(--pillFontColor);display:inline-flex;font:var(--typographyPillLabelM);height:var(--pillItemHeight);max-width:100%}
.sds-pill.background-dark{--pillColor:var(--colorsSemanticNeutral400);--pillFontColor:var(--colorsSemanticNeutralYang100)}
.sds-pill.size-l{font:var(--typographyPillLabelL);--pillItemHeight:var(--sizing350)}
.sds-pill.size-xl{font:var(--typographyPillLabelXl);--pillItemHeight:var(--sizing400);--pillLabelPaddingRight:var(--spacing150);--pillLabelPaddingLeft:var(--spacing125)}
.sds-pill.thumbnail{padding-left:0}
.sds-pill.removable .sds-pill-close-button-wrapper,.sds-pill.thumbnail .sds-pill-thumbnail{display:flex}
.sds-pill.status-positive{--pillColor:var(--colorsSemanticPositive500);--pillHoverColor:var(--colorsSemanticPositive600);--pillFontColor:var(--colorsSemanticPositiveYin090)}
.sds-pill.status-positive.background-dark{--pillColor:var(--colorsSemanticPositive400);--pillFontColor:var(--colorsSemanticPositiveYang100)}
.sds-pill.status-negative{--pillColor:var(--colorsSemanticNegative500);--pillHoverColor:var(--colorsSemanticNegative600);--pillFontColor:var(--colorsSemanticNegativeYin090)}
.sds-pill.status-negative.background-dark{--pillColor:var(--colorsSemanticNegative450);--pillFontColor:var(--colorsSemanticNegativeYang100)}
.sds-pill.status-caution{--pillColor:var(--colorsSemanticCaution500);--pillHoverColor:var(--colorsSemanticCaution600);--pillFontColor:var(--colorsSemanticCautionYin090)}
.sds-pill.status-caution.background-dark{--pillColor:var(--colorsSemanticCaution500);--pillFontColor:var(--colorsSemanticCautionYang100)}
.sds-pill.status-information{--pillColor:var(--colorsSemanticInfo500);--pillHoverColor:var(--colorsSemanticInfo600);--pillFontColor:var(--colorsSemanticInfoYin090)}
.sds-pill.status-information.background-dark{--pillColor:var(--colorsSemanticInfo400);--pillFontColor:var(--colorsSemanticInfoYang100)}
.sds-pill.filled{--pillFontColor:var(--colorsSemanticNeutralYang100);background-color:var(--pillColor)}
.sds-pill.filled.size-s{font:var(--typographyPillLabelS);--pillItemHeight:var(--sizing250)}
.sds-pill.filled.background-dark,.sds-pill.filled.status-caution{--pillFontColor:var(--colorsSemanticCautionYang1000)}
.sds-pill .sds-pill-thumbnail{align-items:flex-start;border-right:var(--borderWidth200) solid var(--pillColor);display:none;height:var(--pillItemHeight);width:var(--pillItemHeight)}
.sds-pill .sds-pill-label{align-items:center;align-self:stretch;display:flex;min-width:0;overflow:hidden;padding-left:var(--pillLabelPaddingLeft);padding-right:var(--pillLabelPaddingRight);white-space:nowrap}
.sds-pill .sds-pill-close-button-wrapper{background:none;border:var(--borderWidth200) solid transparent;border-radius:0 var(--borderRadius025) var(--borderRadius025) 0;box-sizing:content-box;color:inherit;cursor:pointer;display:none;margin-right:calc(var(--spacing025)*-1);outline:inherit;padding:0}
.sds-pill .sds-pill-close-button-wrapper:hover{background:var(--pillHoverColor);color:var(--colorsSemanticNeutralYang100)}
.sds-pill .sds-pill-close-button-wrapper .sds-pill-close-button{align-items:center;display:flex;font-size:var(--fontSizes400);height:var(--pillItemHeight);justify-content:center;width:var(--pillItemHeight)}
    `];H([n()],exports.Pill.prototype,"label",2);H([n()],exports.Pill.prototype,"thumbnail",2);H([n()],exports.Pill.prototype,"alt",2);H([n({type:Boolean})],exports.Pill.prototype,"removable",2);H([n()],exports.Pill.prototype,"size",2);H([n()],exports.Pill.prototype,"status",2);H([n({type:Boolean})],exports.Pill.prototype,"filled",2);H([n()],exports.Pill.prototype,"background",2);H([b()],exports.Pill.prototype,"_showCloseButton",1);H([b()],exports.Pill.prototype,"_showThumbnail",1);exports.Pill=H([v("sds-pill")],exports.Pill);var Go=Object.defineProperty,Xo=Object.getOwnPropertyDescriptor,Ve=(r,e,t,i)=>{for(var s=i>1?void 0:i?Xo(e,t):e,o=r.length-1,a;o>=0;o--)(a=r[o])&&(s=(i?a(e,t,s):a(s))||s);return i&&s&&Go(e,t,s),s};exports.Portrait=class extends y{constructor(){super(...arguments),this.size="M"}render(){const e=this.getSizeClass(),t=this.getInitials();return c` <div class="wrapper ${e}">
      <div class="avatar ${e} no-image">
        ${this.name??this.initials?c`<sds-visually-hidden> ${this.name} </sds-visually-hidden>
              <span class="content ${e}" aria-hidden="true">
                ${t}
              </span>`:c`<sds-icon class="centered ${e}" type="person"></sds-icon>`}

        <div
          class="avatar image"
          style=${this.imageSrc?He({"background-image":`url(${this.imageSrc})`}):f}
        ></div>
      </div>
    </div>`}getSizeClass(){return"size-"+this.size.toLowerCase()}getInitials(){if(this.initials)return this.initials;if(!this.name)return"";const e=this.name.replace(/[^a-zA-Z- ]/g,"").match(/\b\w/g);return e!=null&&e.length?e.length>2?e.slice(0,2).concat(e.slice(-1)).join(""):e.join("").toUpperCase():""}};exports.Portrait.styles=m`
.wrapper{align-items:center;display:inline-flex;justify-content:center;position:relative;--size:var(--sizing400)}.wrapper.size-m{--size:var(--sizing500)}.wrapper.size-ml{--size:var(--sizing700)}.wrapper.size-l{--size:var(--sizing900)}.wrapper.size-xl{--size:var(--sizing1300)}.wrapper.size-xxl{--size:var(--sizing1600)}.avatar{border-radius:var(--borderRadiusCircle);height:var(--size);position:relative;width:var(--size)}.avatar.image{background-position:50%;background-size:cover;left:0;position:absolute;top:0}.avatar.no-image{background:var(--colorsUtilityReadOnly400);border:var(--borderWidth100) solid var(--colorsUtilityReadOnly600);display:flex;flex-direction:column;flex-shrink:0;justify-content:center}.avatar .centered{text-align:center}.avatar .centered.size-m{font-size:var(--fontSizes300)}.avatar .centered.size-ml{font-size:var(--fontSizes600)}.avatar .centered.size-l{font-size:var(--fontSizes700)}.avatar .centered.size-xl{font-size:var(--fontSizes900)}.avatar .centered.size-xxl{font-size:var(--fontSizes1000)}.avatar .content{color:var(--colorsUtilityYin090);font-family:var(--fontFamiliesDefault);font-size:var(--fontSizes100);font-style:normal;font-weight:var(--fontWeights500);line-height:var(--lineHeights500);text-align:center;text-transform:uppercase}.avatar .content.size-m{font-size:var(--fontSizes300)}.avatar .content.size-ml{font-size:var(--fontSizes600)}.avatar .content.size-l{font-size:var(--fontSizes700)}.avatar .content.size-xl{font-size:var(--fontSizes900)}.avatar .content.size-xxl{font-size:var(--fontSizes1000)}
  `;Ve([n({attribute:"image-src"})],exports.Portrait.prototype,"imageSrc",2);Ve([n()],exports.Portrait.prototype,"name",2);Ve([n()],exports.Portrait.prototype,"size",2);Ve([n()],exports.Portrait.prototype,"initials",2);exports.Portrait=Ve([v("sds-portrait")],exports.Portrait);var Ko=Object.defineProperty,Zo=Object.getOwnPropertyDescriptor,fe=(r,e,t,i)=>{for(var s=i>1?void 0:i?Zo(e,t):e,o=r.length-1,a;o>=0;o--)(a=r[o])&&(s=(i?a(e,t,s):a(s))||s);return i&&s&&Ko(e,t,s),s};exports.Profile=class extends y{constructor(){super(...arguments),this.size="M"}render(){const e=this.isValidEmail(this.text);return c` <div class="wrapper size-${this.size.toLowerCase()}">
      <sds-portrait
        .imageSrc="${this.imageSrc}"
        .name="${this.name}"
        .size="${this.size}"
      ></sds-portrait>
      <div class="details size-${this.size.toLowerCase()}">
        ${this.name?c`<div class="name size-${this.size.toLowerCase()}">
                ${this.name}
              </div>`:""}
        ${this.text?c`<div class="text size-${this.size.toLowerCase()}">
                ${this.textUrl?c`<sds-link
                      href=${this.textUrl}
                      size=${["XL","XXL"].includes(this.size)?"L":"M"}
                      >${this.text}</sds-link
                    >`:c`${e?c`<sds-link
                          href="mailto:${this.text}"
                          size=${["XL","XXL"].includes(this.size)?"L":"M"}
                          >${this.text}</sds-link
                        >`:c`${this.text}`}`}
              </div>`:""}
            ${this.detail?c`<div class="detail size-${this.size.toLowerCase()}">
                    ${this.detail}
                  </div>`:""}
        </div>
      </div>
    </div>`}isValidEmail(e){return e?/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e):!1}};exports.Profile.styles=m`
.wrapper{align-items:center;display:flex;flex-direction:row;gap:var(--spacing200);justify-content:center;width:-webkit-fit-content;width:-moz-fit-content;width:fit-content}
.wrapper.size-xl{gap:var(--spacing400)}
.wrapper.size-xxl{gap:var(--spacing500)}
.wrapper .details{display:flex;flex-direction:column}
.wrapper .details .name{color:var(--colorsUtilityYin090);font-family:var(--fontFamiliesDefault);font-size:var(--fontSizes100);font-style:normal;font-weight:var(--fontWeights500);line-height:var(--lineHeights400)}
.wrapper .details .name.size-ml{font-size:var(--fontSizes200)}
.wrapper .details .name.size-l{font-size:var(--fontSizes400)}
.wrapper .details .name.size-xl{font-size:var(--fontSizes600)}
.wrapper .details .name.size-xxl{font-size:var(--fontSizes700)}
.wrapper .details .text{color:var(--colorsActionMajor500);font-family:var(--fontFamiliesDefault);font-size:var(--fontSizes100);font-style:normal;font-weight:var(--fontWeights400);line-height:var(--lineHeights400);-webkit-text-decoration-line:underline;text-decoration-line:underline}
.wrapper .details .text.size-xl{font-size:var(--fontSizes300)}
.wrapper .details .text.size-xxl{font-size:var(--fontSizes700)}
.wrapper .details .detail{font-family:var(--fontFamiliesDefault);font-size:var(--fontSizes100);font-style:normal;font-weight:var(--fontWeights400);line-height:var(--lineHeights400)}
.wrapper .details .detail.size-xl{font-size:var(--fontSizes300)}
.wrapper .details .detail.size-xxl{font-size:var(--fontSizes700)}
.wrapper.size-l,.wrapper.size-ml{gap:var(--spacing300)}
  `;fe([n({attribute:"image-src"})],exports.Profile.prototype,"imageSrc",2);fe([n()],exports.Profile.prototype,"name",2);fe([n()],exports.Profile.prototype,"text",2);fe([n({attribute:"text-url"})],exports.Profile.prototype,"textUrl",2);fe([n()],exports.Profile.prototype,"detail",2);fe([n()],exports.Profile.prototype,"size",2);exports.Profile=fe([v("sds-profile")],exports.Profile);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class zt extends $e{constructor(e){if(super(e),this.it=f,e.type!==U.CHILD)throw Error(this.constructor.directiveName+"() can only be used in child bindings")}render(e){if(e===f||e==null)return this._t=void 0,this.it=e;if(e===E)return e;if(typeof e!="string")throw Error(this.constructor.directiveName+"() called with a non-string value");if(e===this.it)return this._t;this.it=e;const t=[e];return t.raw=t,this._t={_$litType$:this.constructor.resultType,strings:t,values:[]}}}zt.directiveName="unsafeHTML",zt.resultType=1;const Qo=_e(zt);var Jo=Object.defineProperty,ea=Object.getOwnPropertyDescriptor,X=(r,e,t,i)=>{for(var s=i>1?void 0:i?ea(e,t):e,o=r.length-1,a;o>=0;o--)(a=r[o])&&(s=(i?a(e,t,s):a(s))||s);return i&&s&&Jo(e,t,s),s};exports.ProgressTracker=class extends y{constructor(){super(...arguments),this.CURRENT_VALUE_PLACEHOLDER="${currentValue}",this.PREPOSITION_PLACEHOLDER="${preposition}",this.MAX_VALUE_PLACEHOLDER="${maxValue}",this.size="M",this.error=!1,this.description="",this.label=`Step ${this.CURRENT_VALUE_PLACEHOLDER} ${this.PREPOSITION_PLACEHOLDER} ${this.MAX_VALUE_PLACEHOLDER}`,this.currentValue=0,this.maxValue=100,this.preposition="of",this.labelsPosition="top"}get _classes(){const{size:e,error:t,progress:i}=this;return P({"size-s":e=="S","size-l":e=="L",error:t,completed:i==100})}get progress(){return this.currentValue>this.maxValue?(this.error=!0,100):this.currentValue/this.maxValue*100}get labelExist(){return!!this.label||!!this.description}get _showTopLabel(){return this.labelsPosition==="top"&&this.labelExist}get _showBottomLabel(){return this.labelsPosition==="bottom"&&this.labelExist}render(){const{error:e,progress:t,_classes:i}=this,s={width:e?"100%":t.toString()+"%"},o={generic:this.barColor==="generic",info:this.barColor==="info",positive:this.barColor==="positive",negative:this.barColor==="negative",caution:this.barColor==="caution",neutral:this.barColor==="neutral",default:this.barColor==="default"};return c` <div class="sds-progress-tracker ${i}">
      ${this._showTopLabel?c`<div class="label-container label-top">${this.getLabel()}</div>`:f}

      <div
        class="base-bar ${P(o)}"
        role="progressbar"
        aria-valuenow=${t}
        aria-valuemin="0"
        aria-valuemax=${this.maxValue}
        aria-valuetext=${this.getValueLabel()}
        aria-labelledby="progressbar-label"
      >
        <div class="expanding-bar" style=${He(s)}></div>
      </div>

      ${this._showBottomLabel?c` <div class="label-container label-bottom">
            ${this.getLabel()}
          </div>`:f}
    </div>`}getLabel(){return c`
      <div class="value-label" id="progressbar-label">
        ${this.getValueLabelHtml()}
      </div>
      <div class="descriptive-text">${this.description}</div>
    `}getValueLabel(){return this.label.replace(this.CURRENT_VALUE_PLACEHOLDER,this.currentValue.toString()).replace(this.MAX_VALUE_PLACEHOLDER,this.maxValue.toString()).replace(this.PREPOSITION_PLACEHOLDER,this.preposition)}getValueLabelHtml(){const t=this.label.replace(this.CURRENT_VALUE_PLACEHOLDER,this.currentValue.toString()).replace(this.MAX_VALUE_PLACEHOLDER,this.maxValue.toString()).split(this.PREPOSITION_PLACEHOLDER),i=c`${Qo(`<span class="preposition">${this.sanitizeHTML(this.preposition)}</span>`)}`;return c`${t.map((s,o)=>c`${s}${o<t.length-1?i:f}`)}`}sanitizeHTML(e){return e.replace(/[^\w. ]/gi,function(t){return`&#${t.charCodeAt(0).toString()};`})}};exports.ProgressTracker.styles=m`
.sds-progress-tracker .label-container{display:flex;font:var(--typographyFormFieldLabelM)}.sds-progress-tracker .label-container .value-label{color:var(--colorsUtilityYin090)}.sds-progress-tracker .label-container .value-label .preposition{font:var(--typographyFormFieldHintTextM)}.sds-progress-tracker .label-container .descriptive-text{color:var(--colorsUtilityYin055);font:var(--typographyFormFieldHintTextM);margin-left:var(--spacing100)}.sds-progress-tracker .label-container.label-top{margin-bottom:var(--spacing050)}.sds-progress-tracker .label-container.label-bottom{margin-top:var(--spacing050)}.sds-progress-tracker .base-bar{background:var(--colorsSemanticNeutral200);border:var(--borderWidth100) solid var(--colorsSemanticNeutral500);border-radius:var(--borderRadius400);box-sizing:border-box;height:var(--sizing100);width:100%}.sds-progress-tracker .base-bar .expanding-bar{background:var(--bar-color,var(--colorsSemanticNeutral500));border-radius:inherit;height:100%;width:0}.sds-progress-tracker.size-s .label-container{font:var(--typographyFormFieldLabelS)}.sds-progress-tracker.size-s .label-container .descriptive-text,.sds-progress-tracker.size-s .label-container .value-label .preposition{font:var(--typographyFormFieldHintTextS)}.sds-progress-tracker.size-s .base-bar{height:var(--sizing050)}.sds-progress-tracker.size-l .label-container{font:var(--typographyFormFieldLabelL)}.sds-progress-tracker.size-l .label-container .descriptive-text,.sds-progress-tracker.size-l .label-container value-label .preposition{font:var(--typographyFormFieldHintTextL)}.sds-progress-tracker.size-l .base-bar{height:var(--sizing200)}.sds-progress-tracker.completed .base-bar{border-color:var(--bar-color,var(--colorsSemanticPositive500))}.sds-progress-tracker.completed .base-bar .expanding-bar{background:var(--bar-color,var(--colorsSemanticPositive500))}.sds-progress-tracker.error .base-bar{border-color:var(--colorsSemanticNegative500)}.sds-progress-tracker.error .base-bar .expanding-bar{background:var(--colorsSemanticNegative500)}.generic{--bar-color:#007c7b}.info{--bar-color:var(--colorsSemanticInfo500)}.positive{--bar-color:var(--colorsSemanticPositive500)}.negative{--bar-color:var(--colorsSemanticNegative500)}.caution{--bar-color:var(--colorsSemanticCaution500)}.neutral{--bar-color:var(--colorsUtilityYin100)}.default{--bar-color:var(--colorsSemanticNeutral500)}
  `;X([n({reflect:!0})],exports.ProgressTracker.prototype,"size",2);X([n({type:Boolean})],exports.ProgressTracker.prototype,"error",2);X([n({reflect:!0})],exports.ProgressTracker.prototype,"description",2);X([n()],exports.ProgressTracker.prototype,"label",2);X([n({attribute:"current-value",type:Number})],exports.ProgressTracker.prototype,"currentValue",2);X([n({attribute:"max-value",type:Number})],exports.ProgressTracker.prototype,"maxValue",2);X([n()],exports.ProgressTracker.prototype,"preposition",2);X([n({attribute:"bar-color",reflect:!0})],exports.ProgressTracker.prototype,"barColor",2);X([n({reflect:!0,attribute:"labels-position"})],exports.ProgressTracker.prototype,"labelsPosition",2);exports.ProgressTracker=X([v("sds-progress-tracker")],exports.ProgressTracker);var ta=Object.defineProperty,sa=Object.getOwnPropertyDescriptor,W=(r,e,t,i)=>{for(var s=i>1?void 0:i?sa(e,t):e,o=r.length-1,a;o>=0;o--)(a=r[o])&&(s=(i?a(e,t,s):a(s))||s);return i&&s&&ta(e,t,s),s};exports.RadioButton=class extends y{constructor(){super(),this.id="id",this.label="Label",this.value="",this.readOnly=!1,this.disabled=!1,this.checked=!1,this.size="M",this.tabIndex=0,this.name="",this.addEventListener("keydown",this.handleKeydown.bind(this))}get _classes(){const{size:e}=this;return P({"sizing-s":e=="S","sizing-m":e=="M","sizing-l":e=="L",checked:this.checked,disabled:this.disabled,"read-only":this.readOnly})}get _disableInput(){return this.disabled||this.readOnly}get selected(){return this.checked}set selected(e){this.checked=e}render(){const e=this._classes;return c` <div class="sds-radio-button ${e}">
      <input
        class="sds-radio-button-input sds-focus ${e}"
        id=${this.id}
        type="radio"
        name=${this.name}
        .checked=${this.checked}
        .value=${this.value}
        ?disabled=${this._disableInput}
        ?readonly=${this.readOnly}
        aria-label=${this.label}
        aria-checked=${this.checked}
        tabindex=${this.tabIndex}
        @change=${t=>{this.handleChange(t)}}
      />
      <label class="sds-radio-button-label" for=${this.id}>
        ${this.label}
      </label>
    </div>`}handleChange(e){this.checked=!0,M(this,e)}handleKeydown(e){e.key!==" "||e.defaultPrevented||(e.preventDefault(),this.handleChange(new Event("change",{bubbles:!0})))}};exports.RadioButton.shadowRootOptions={...y.shadowRootOptions,delegatesFocus:!0};exports.RadioButton.styles=[V,m`
:host{cursor:pointer;display:flex;outline:none}:host(:focus-within) .sds-radio-button-input:not(.disabled){border:none;box-shadow:
            0 0 0 var(--borderWidth300) var(--colorsSemanticFocus500),
            0 0 0 var(--borderWidth600) #000000ff;outline:none;outline-offset:0}:host(:focus-within) .sds-radio-button-input{cursor:default}.sds-radio-button{display:grid;font:var(--typographyFormFieldLabelM);grid-template-columns:-webkit-max-content 1fr;grid-template-columns:max-content 1fr;width:100%;width:var(--field-width,100%)}.sds-radio-button.disabled{color:var(--colorsUtilityYin030)}.sds-radio-button .sds-radio-button-label{vertical-align:middle;word-wrap:break-word}.sds-radio-button .sds-radio-button-input{-webkit-appearance:none;-moz-appearance:none;appearance:none;background:var(--colorsUtilityYang100);border:var(
            --radio-button-error-border,
            var(--borderWidth100) solid var(--colorsUtilityMajor300)
          );border-radius:var(--borderRadiusCircle);cursor:inherit;height:var(--sizing200);margin-right:var(--spacing100);padding:auto;vertical-align:middle;width:var(--sizing200)}.sds-radio-button .sds-radio-button-input.disabled{background:var(--colorsUtilityDisabled400);border:var(--borderWidth100) solid var(--colorsUtilityDisabled600);box-shadow:none;outline:none}.sds-radio-button .sds-radio-button-input.disabled:checked{background:var(--colorsUtilityDisabled600);border:var(--borderWidth300) solid
                var(--colorsUtilityDisabled400);outline:var(
                --radio-button-error-outline,
                var(--borderWidth100) solid var(--colorsUtilityDisabled600)
              )}.sds-radio-button .sds-radio-button-input.read-only{background:var(--colorsUtilityDisabled400);border:var(--borderWidth100) solid var(--colorsUtilityDisabled600)}.sds-radio-button .sds-radio-button-input:not(.disabled):checked{background:var(--colorsUtilityYin090);border:var(--borderWidth300) solid var(--colorsUtilityYang100);outline:var(
                --radio-button-error-outline,
                var(--borderWidth100) solid var(--colorsUtilityMajor300)
              )}.sds-radio-button .sds-radio-button-input:not(.disabled):checked:before{content:"";display:block;height:var(--sizing125);width:var(--sizing125)}.sds-radio-button.sizing-s{font:var(--typographyFormFieldLabelS)}.sds-radio-button.sizing-s .sds-radio-button-input{height:var(--sizing150);width:var(--sizing150)}.sds-radio-button.sizing-l{font:var(--typographyFormFieldLabelL)}.sds-radio-button.sizing-l .sds-radio-button-input{height:var(--sizing300);margin:0 var(--spacing150) 0 0;width:var(--sizing300)}.sds-radio-button.sizing-l .sds-radio-button-input:checked{border:var(--borderWidth400) solid var(--colorsUtilityYang100)}
    `];W([b()],exports.RadioButton.prototype,"_disableInput",1);W([b()],exports.RadioButton.prototype,"id",2);W([n()],exports.RadioButton.prototype,"label",2);W([n()],exports.RadioButton.prototype,"value",2);W([n({type:Boolean,reflect:!0})],exports.RadioButton.prototype,"readOnly",2);W([n({type:Boolean})],exports.RadioButton.prototype,"disabled",2);W([n({type:Boolean})],exports.RadioButton.prototype,"checked",2);W([n({attribute:"size"})],exports.RadioButton.prototype,"size",2);W([n({type:Number})],exports.RadioButton.prototype,"tabIndex",2);W([n()],exports.RadioButton.prototype,"name",2);exports.RadioButton=W([v("sds-radio-button")],exports.RadioButton);var ia=Object.defineProperty,ra=Object.getOwnPropertyDescriptor,Oe=(r,e,t,i)=>{for(var s=i>1?void 0:i?ra(e,t):e,o=r.length-1,a;o>=0;o--)(a=r[o])&&(s=(i?a(e,t,s):a(s))||s);return i&&s&&ia(e,t,s),s};exports.RadioButtonGroup=class extends S{constructor(){super(),this.value="",this.size="M",this.name=Math.random().toString(),this.addController((e=>new Be(this,{cycleFocusStates:!0,syncSelectionToFocus:!0,get inputComponents(){return e.inputComponents},onAfterChange:t=>{this.value=t.value},isSelected:t=>t.selected,setSelected:(t,i)=>{t.selected=i,i&&t.dispatchEvent(new Event("change",{bubbles:!0}))}}))(this))}get inputClasses(){return super._inputClasses}get additionalClasses(){const{_messageSeverity:e,size:t}=this;return{error:e==="error","sizing-s":t=="S","sizing-m":t=="M","sizing-l":t=="L"}}get _errorSeverity(){return this.messageSeverity}handleSlotChange(){this.inputComponents.forEach(e=>{const t=e;t.size=this.size,t.name=this.name,t.selected&&(this.value=t.value)})}render(){const{disabled:e,hint:t,label:i,message:s,inputClasses:o,size:a,readOnly:d,required:l,messageSeverity:h}=this;return c` <div
      class="sds-radio-button-group ${o}"
      role="radiogroup"
    >
      <sds-input-decorator
        ?disabled=${e}
        ?readOnly=${d}
        hint=${p(t)}
        label=${p(i)}
        message=${p(s)}
        required=${p(l)}
        size=${p(a)}
        message-severity=${p(h)}
      >
        <slot
          class="sds-radio-button-wrapper ${o}"
          @slotchange="${()=>{this.handleSlotChange()}}"
        >
        </slot>
      </sds-input-decorator>
    </div>`}updated(){this.handleRadioClasses()}handleRadioClasses(){this.inputComponents.map(e=>{e.readOnly=this.readOnly,e.disabled=this.disabled,e.size=this.size})}};exports.RadioButtonGroup.styles=[m`
.sds-radio-button-group.error{--radio-button-error-border:var(--borderWidth200) solid
            var(--colorsSemanticNegative500);--radio-button-error-outline:var(--borderWidth200) solid
            var(--colorsSemanticNegative500)}
.sds-radio-button-group ::slotted(sds-radio-button){padding-bottom:var(--spacing150)}
.sds-radio-button-group.sizing-s ::slotted(sds-radio-button){padding-bottom:var(--spacing100)}
.sds-radio-button-group.sizing-l ::slotted(sds-radio-button){padding-bottom:var(--spacing200)}
.sds-radio-button-group ::slotted(sds-radio-button:last-child){padding-bottom:0}
    `];Oe([b()],exports.RadioButtonGroup.prototype,"value",2);Oe([N({flatten:!0})],exports.RadioButtonGroup.prototype,"inputComponents",2);Oe([n({attribute:"size"})],exports.RadioButtonGroup.prototype,"size",2);Oe([n()],exports.RadioButtonGroup.prototype,"name",2);Oe([b()],exports.RadioButtonGroup.prototype,"_errorSeverity",1);exports.RadioButtonGroup=Oe([v("sds-radio-button-group")],exports.RadioButtonGroup);const oa=m`.search-container{display:flex;flex-direction:row}sds-text-input{--border-top-right-radius:0;--border-bottom-right-radius:0;flex-grow:1}sds-button{--border-top-left-radius:0;--border-bottom-left-radius:0;--border-top-right-radius:var(--borderRadius050);--border-bottom-right-radius:var(--borderRadius050)}`;var aa=Object.defineProperty,na=Object.getOwnPropertyDescriptor,Mt=(r,e,t,i)=>{for(var s=i>1?void 0:i?na(e,t):e,o=r.length-1,a;o>=0;o--)(a=r[o])&&(s=(i?a(e,t,s):a(s))||s);return i&&s&&aa(e,t,s),s};exports.Search=class extends y{constructor(){super(...arguments),this.label="Search"}render(){return c`
      <div role="search" class="search-container">
        <sds-text-input
          type="search"
          aria-label=${z("search.label")}
          .value=${this.value}
          @input=${e=>{this._handleInput(e)}}
          @keydown=${e=>{this._handleKeydown(e)}}
        >
        </sds-text-input>
        <sds-button
          importance="primary"
          @click=${()=>{this._handleSearchClick()}}
          aria-label=${z("search.search")}
        >
          <sds-icon slot="icon" type="search"></sds-icon>
          ${this.label}
        </sds-button>
      </div>
    `}_handleInput(e){const t=e.target;this.value=t.value}_handleKeydown(e){e.key==="Enter"&&this._emitSearchEvent()}_handleSearchClick(){this._emitSearchEvent()}_emitSearchEvent(){this.dispatchEvent(new CustomEvent("search",{detail:{value:this.value},bubbles:!0,composed:!0}))}};exports.Search.styles=oa;Mt([n({type:String})],exports.Search.prototype,"label",2);Mt([n({reflect:!0})],exports.Search.prototype,"value",2);exports.Search=Mt([v("sds-search")],exports.Search);const la=m`:host{--min-width:288px;--width:30vw;--max-width:800px;--_offset-top:var(--offset-top,0px);--_offset-bottom:var(--offset-bottom,0px)}dialog{--animation-duration:.5s}dialog::-ms-backdrop{background-color:#00141e;background-color:var(--colorsUtilityMajor800,#00141e);opacity:0;-ms-transition:opacity .5s;transition:opacity .5s;-ms-transition:opacity var(--animation-duration,.5s);transition:opacity var(--animation-duration,.5s)}dialog::backdrop{background-color:#00141e;background-color:var(--colorsUtilityMajor800,#00141e);opacity:0;transition:opacity .5s;transition:opacity var(--animation-duration,.5s)}dialog{background:#fff;border:initial;box-shadow:none;color:inherit;display:flex;flex-direction:column;height:calc(100% - var(--_offset-top) - var(--_offset-bottom));left:auto;margin:initial;max-height:none;padding:initial;position:fixed;right:0;top:var(--_offset-top);transform:translate(100%);transition:transform var(--animation-duration) ease;width:max(var(--min-width),min(var(--width),var(--max-width)))}dialog .content{height:100%;margin:var(--spacing075);overflow-y:auto;padding:calc(var(--spacing300) - var(--spacing075))}dialog .content:focus-visible{border-radius:var(--borderRadius025);box-shadow:0 0 0 var(--borderWidth300) var(--colorsSemanticFocus500),0 0 0 var(--borderWidth600) #000;outline:none;outline-offset:0}dialog .header{align-items:center;border-bottom:var(--borderWidth100) solid var(--colorsUtilityMajor100);display:flex;gap:var(--spacing200);justify-content:right;padding:var(--spacing300) var(--spacing300) var(--spacing250) var(--spacing300)}dialog .header h2{flex:1;margin:var(--spacing000)}dialog.is-open{box-shadow:var(--boxShadow300);transform:none}dialog.is-open::-ms-backdrop{opacity:.6}dialog.is-open::backdrop{opacity:.6}dialog.custom-header .header{border-bottom:none}@media (prefers-reduced-motion){dialog::-ms-backdrop{transition-duration:.001ms}dialog,dialog::backdrop{transition-duration:.001ms}}`;var da=Object.defineProperty,ca=Object.getOwnPropertyDescriptor,Ee=(r,e,t,i)=>{for(var s=i>1?void 0:i?ca(e,t):e,o=r.length-1,a;o>=0;o--)(a=r[o])&&(s=(i?a(e,t,s):a(s))||s);return i&&s&&da(e,t,s),s};exports.Sidebar=class extends y{constructor(){super(...arguments),this.closeButton=Q(),this.sidebarElement=Q(),this.visibleWidth=0,this.heading="",this.open=!1,this.noMask=!1,this.hasCustomHeader=!1,this.animationFrameId=0,this.originalBodyOverflow=""}connectedCallback(){super.connectedCallback(),this.originalBodyOverflow=document.body.style.overflow}disconnectedCallback(){super.disconnectedCallback(),this.hideBodyOverflow(!1)}firstUpdated(e){if(super.firstUpdated(e),!this.sidebarElement.value)throw new Error("Sidebar element not found");new ResizeObserver(()=>{requestAnimationFrame(()=>{this.dispatchResizeEvent()})}).observe(this.sidebarElement.value),this.sidebarElement.value.addEventListener("transitionstart",()=>{function i(s){s.dispatchResizeEvent(),s.animationFrameId=requestAnimationFrame(()=>{i(s)})}this.animationFrameId=requestAnimationFrame(()=>{i(this)})}),this.sidebarElement.value.addEventListener("transitionend",()=>{cancelAnimationFrame(this.animationFrameId),this.dispatchResizeEvent()})}dispatchResizeEvent(){if(!this.sidebarElement.value){this.visibleWidth=0;return}let t=new DOMMatrix(window.getComputedStyle(this.sidebarElement.value).transform).m41;t<0&&(t=t*-1);const i=this.sidebarElement.value.getBoundingClientRect().width;this.visibleWidth=i-t,this.dispatchEvent(new CustomEvent("resize",{bubbles:!0,detail:{visibleWidth:this.visibleWidth}}))}_handleClose(){var e;this.open=!1,this.dispatchEvent(new CustomEvent("close",{bubbles:!0})),(e=this.sidebarElement.value)==null||e.addEventListener("transitionend",()=>{var t;(t=this.sidebarElement.value)==null||t.close()},{once:!0})}handleHeaderSlotChange(){this.hasCustomHeader=this.headerElements.length>0}getHeader(){return c`
      <div class="header">
        ${this.heading?c`<h2 class="title">${this.heading}</h2>`:f}
        ${this.getCloseButton()}
      </div>
      <slot
        name="header"
        @slotchange=${()=>{this.handleHeaderSlotChange()}}
      ></slot>
    `}getCloseButton(){return c`
      <sds-button-subtle
        ${J(this.closeButton)}
        class="close-button"
        @click=${()=>{this._handleClose()}}
      >
        <sds-visually-hidden>
          ${z("button.close")}
        </sds-visually-hidden>
        <sds-icon slot="icon" type="close"></sds-icon>
      </sds-button-subtle>
    `}getContent(){return c`
      ${this.getHeader()}
      <div class="content" tabindex="0">
        <slot></slot>
      </div>
      <slot name="footer"></slot>
    `}hideBodyOverflow(e){e?document.body.style.overflow="hidden":document.body.style.overflow=this.originalBodyOverflow}update(e){var t,i,s;e.has("open")&&(this.open?(this.noMask?(i=this.sidebarElement.value)==null||i.show():(this.hideBodyOverflow(!0),(t=this.sidebarElement.value)==null||t.showModal()),(s=this.closeButton.value)==null||s.focus()):(this._handleClose(),this.noMask||this.hideBodyOverflow(!1))),super.update(e)}render(){return c`<dialog
      ${J(this.sidebarElement)}
      aria-hidden=${!this.open}
      aria-label=${this.heading}
      class="${P({"is-open":this.open,"custom-header":this.hasCustomHeader})}"
      @cancel=${()=>{this._handleClose()}}
      @click=${e=>{e.target.nodeName==="DIALOG"&&this._handleClose()}}
    >
      ${this.getContent()}
    </dialog>`}};exports.Sidebar.styles=la;Ee([n()],exports.Sidebar.prototype,"heading",2);Ee([n({type:Boolean})],exports.Sidebar.prototype,"open",2);Ee([n({type:Boolean,attribute:"no-mask"})],exports.Sidebar.prototype,"noMask",2);Ee([N({slot:"header",flatten:!0})],exports.Sidebar.prototype,"headerElements",2);Ee([b()],exports.Sidebar.prototype,"hasCustomHeader",2);exports.Sidebar=Ee([v("sds-sidebar")],exports.Sidebar);const pa=m`div{align-items:center;background-color:inherit;bottom:var(--spacing000);display:flex;gap:var(--spacing150);height:40px;justify-content:flex-end;padding:var(--spacing200) var(--spacing300);position:-webkit-sticky;position:sticky}`;var ha=Object.defineProperty,ua=Object.getOwnPropertyDescriptor,ga=(r,e,t,i)=>{for(var s=i>1?void 0:i?ua(e,t):e,o=r.length-1,a;o>=0;o--)(a=r[o])&&(s=(i?a(e,t,s):a(s))||s);return i&&s&&ha(e,t,s),s};exports.SidebarFooter=class extends y{connectedCallback(){super.connectedCallback(),this.slot=this.hasAttribute("slot")?this.slot:"footer"}render(){return c`<div>
      <slot></slot>
    </div>`}};exports.SidebarFooter.styles=pa;exports.SidebarFooter=ga([v("sds-sidebar-footer")],exports.SidebarFooter);const va=m`slot{border-bottom:var(--borderWidth100) solid var(--colorsUtilityMajor100);padding:var(--spacing000) var(--spacing300)}slot.full-width{padding:0}slot.hide-divider{border-bottom:none}`;var ba=Object.defineProperty,fa=Object.getOwnPropertyDescriptor,Tt=(r,e,t,i)=>{for(var s=i>1?void 0:i?fa(e,t):e,o=r.length-1,a;o>=0;o--)(a=r[o])&&(s=(i?a(e,t,s):a(s))||s);return i&&s&&ba(e,t,s),s};exports.SidebarHeader=class extends y{constructor(){super(...arguments),this.fullWidth=!1,this.hideDivider=!1}connectedCallback(){super.connectedCallback(),this.slot=this.hasAttribute("slot")?this.slot:"header"}render(){return c`
      <slot
        class=${P({"full-width":this.fullWidth,"hide-divider":this.hideDivider})}
      ></slot>
    `}};exports.SidebarHeader.styles=va;Tt([n({type:Boolean,attribute:"full-width"})],exports.SidebarHeader.prototype,"fullWidth",2);Tt([n({type:Boolean,attribute:"hide-divider"})],exports.SidebarHeader.prototype,"hideDivider",2);exports.SidebarHeader=Tt([v("sds-sidebar-header")],exports.SidebarHeader);const ma=m`:host{display:block}:host([shape=circle]){height:var(--sizing700);width:var(--sizing700)}:host([shape=rectangle]){height:var(--sizing500);width:var(--sizing1500)}div{--roundness:var(--borderRadius100);--background-color-dark:rgba(153,173,183,.6);--background-color-light:rgba(153,173,183,.1);animation:gradient-animation 2s linear infinite;background:linear-gradient(135deg,rgba(153,173,183,.6) calc(var(--gradient-color-stop) - 50%),rgba(153,173,183,.1) var(--gradient-color-stop),rgba(153,173,183,.6) calc(var(--gradient-color-stop) + 50%));background:linear-gradient(135deg,var(--background-color-dark) calc(var(--gradient-color-stop) - 50%),var(--background-color-light) var(--gradient-color-stop),var(--background-color-dark) calc(var(--gradient-color-stop) + 50%));width:100%}div.roundness-l{--roundness:var(--borderRadius400)}div.shape-text{border-radius:var(--roundness)}div.shape-text:before{content:"​"}div.shape-circle{border-radius:var(--borderRadiusCircle);height:100%}div.shape-rectangle{border-radius:var(--roundness);height:100%}@media (prefers-reduced-motion){div{animation:none}}@keyframes gradient-animation{0%{--gradient-color-stop:-200%}to{--gradient-color-stop:300%}}`;var ya=Object.defineProperty,wa=Object.getOwnPropertyDescriptor,jt=(r,e,t,i)=>{for(var s=i>1?void 0:i?wa(e,t):e,o=r.length-1,a;o>=0;o--)(a=r[o])&&(s=(i?a(e,t,s):a(s))||s);return i&&s&&ya(e,t,s),s};exports.Skeleton=class extends y{constructor(){super(...arguments),this.shape="text",this.roundness="S"}render(){return c`<div
      class="shape-${this.shape} roundness-${this.roundness.toLowerCase()}"
    ></div>`}};exports.Skeleton.styles=ma;document.adoptedStyleSheets.push(m`
@property --gradient-color-stop{initial-value:50%;inherits:false;syntax:"<percentage>"}
      `.styleSheet??new CSSStyleSheet);jt([n()],exports.Skeleton.prototype,"shape",2);jt([n()],exports.Skeleton.prototype,"roundness",2);exports.Skeleton=jt([v("sds-skeleton")],exports.Skeleton);const _a=m`.step-flow-indicator-base-bar{background:var(--colorsSemanticNeutral200);border:var(--borderWidth100) solid var(--colorsSemanticNeutral500);border-radius:var(--borderRadius400);box-sizing:border-box;flex:1 0 0;height:var(--sizing100);position:relative}.step-flow-label{line-height:var(--lineHeights500)}.step-flow-indicator-container{align-items:center;display:flex;gap:var(--spacing200);padding-bottom:var(--spacing100);padding-top:var(--spacing100)}.step-flow-indicator-expanding-bar{border-radius:var(--borderRadius400);height:100%;position:absolute}.step-flow-indicator-expanding-bar.step-current{background-color:var(--colorsActionMajorYin090);width:50%}.step-flow-indicator-expanding-bar.step-complete{background-color:var(--colorsSemanticPositive500);width:100%}`;var $a=Object.defineProperty,xa=Object.getOwnPropertyDescriptor,qe=(r,e,t,i)=>{for(var s=i>1?void 0:i?xa(e,t):e,o=r.length-1,a;o>=0;o--)(a=r[o])&&(s=(i?a(e,t,s):a(s))||s);return i&&s&&$a(e,t,s),s};exports.StepFlow=class extends y{constructor(){super(...arguments),this.currentValue=2,this.maxValue=5,this.preposition="",this.subject=""}render(){return c`
      <div class="step-flow">
        <div class="step-flow-label">
          ${this.subject} ${this.currentValue} ${this.preposition}
          ${this.maxValue}
        </div>
        <div class="step-flow-indicator-container">
          ${Array.from({length:this.maxValue}).map((e,t)=>this.renderStep(t))}
        </div>
      </div>
    `}getValueLabel(e){return`${this.subject} ${e.toString()} of ${this.maxValue.toString()}`}renderStep(e){const t=e+1===this.currentValue,i=e+1<this.currentValue,s=t?"step-current":i?"step-complete":"";return c`<div
      class="step-flow-indicator-base-bar"
      role="progressbar"
      aria-label=${this.getValueLabel(e+1)}
    >
      <div class="step-flow-indicator-expanding-bar ${s}"></div>
    </div>`}};exports.StepFlow.styles=_a;qe([n({attribute:"current-value",type:Number})],exports.StepFlow.prototype,"currentValue",2);qe([n({attribute:"max-value",type:Number})],exports.StepFlow.prototype,"maxValue",2);qe([n({attribute:"preposition",type:String})],exports.StepFlow.prototype,"preposition",2);qe([n({attribute:"subject",type:String})],exports.StepFlow.prototype,"subject",2);exports.StepFlow=qe([v("sds-step-flow")],exports.StepFlow);const za=m`.sds-switch{--container-border-color:var(--colorsActionMinor400);--handle-background-color:var(--colorsActionMinor400);--handle-size:var(--sizing200);--handle-left:var(--spacing050);--switch-height:var(--sizing300);--option-label-color:var(--colorsActionMinor500);--option-label-padding-extra:var(--spacing100);--option-label-padding-standard:var(--spacing100);--option-label-font:var(--typographySwitchOptionLabelM);--animationStart:var(--spacing050);--animationEnd:calc(100% - var(--sizing200) - var(--spacing050))}.sds-switch.size-l{--handle-size:var(--sizing350);--handle-left:var(--spacing075);--switch-height:var(--sizing500);--option-label-padding-extra:var(--spacing175);--option-label-padding-standard:var(--spacing150);--option-label-font:var(--typographySwitchOptionLabelL);--animationStart:var(--spacing075);--animationEnd:calc(100% - var(--handle-size) - var(--handle-left))}.sds-switch.error{--container-border-color:var(--colorsSemanticNegative500)}.sds-switch.selected{--container-background-color:var(--colorsActionMinor500);--option-label-color:var(--colorsActionMinorYang100)}.sds-switch.disabled{--switch-pointer-events:none;--container-border-color:var(--colorsUtilityDisabled600);--handle-background-color:var(--colorsUtilityDisabled600);--option-label-color:var(--colorsUtilityYin030)}.sds-switch.disabled.selected{--container-background-color:var(--colorsUtilityDisabled500);--container-border-color:var(--colorsUtilityDisabled500);--handle-background-color:var(--colorsActionMinorYang100);--option-label-color:var(--colorsActionMajorYin030)}.container{align-items:center;background:var(--container-background-color);border:var(--borderWidth200) solid var(--container-border-color);border-radius:var(--sizing400);box-sizing:border-box;cursor:pointer;display:flex;height:inherit;justify-items:center;place-items:center;position:relative;transition:background .1s ease-in-out}.container:not(.disabled):focus-visible{box-shadow:0 0 0 var(--borderWidth300) var(--colorsSemanticFocus500),0 0 0 var(--borderWidth600) #000;outline:none}.handle{animation:slideleft .2s;animation-fill-mode:forwards;background:var(--handle-background-color);border-radius:var(--sizing400);display:flex;height:var(--handle-size);left:var(--handle-left);position:absolute;right:auto;width:var(--handle-size)}.handle.pristine{animation-duration:0s}.option-label{color:var(--option-label-color);font:var(--option-label-font);padding:0 var(--option-label-padding-standard)}.option-label.on{display:none}.option-label.off{display:flex;padding-left:calc(var(--handle-size) + var(--option-label-padding-extra))}input[type=checkbox]{display:none}input[type=checkbox]:checked+.container .handle{animation:slideright .2s;animation-fill-mode:forwards;background:var(--colorsActionMinorYang100)}input[type=checkbox]:checked+.container .handle.pristine{animation-duration:0s}input[type=checkbox]:checked+.container .option-label.on{display:flex;padding-right:calc(var(--handle-size) + var(--option-label-padding-extra))}input[type=checkbox]:checked+.container .option-label.off{display:none}.switch{display:inline-flex;height:var(--switch-height);outline:none;pointer-events:var(--switch-pointer-events);width:100%}@keyframes slideright{0%{left:var(--animationStart)}to{left:var(--animationEnd)}}@keyframes slideleft{0%{left:var(--animationEnd)}to{left:var(--animationStart)}}`;var Sa=Object.defineProperty,Ca=Object.getOwnPropertyDescriptor,ae=(r,e,t,i)=>{for(var s=i>1?void 0:i?Ca(e,t):e,o=r.length-1,a;o>=0;o--)(a=r[o])&&(s=(i?a(e,t,s):a(s))||s);return i&&s&&Sa(e,t,s),s};exports.Switch=class extends S{constructor(){super(...arguments),this.size="M",this.unselectedLabel="OFF",this.selectedLabel="ON",this.selected=!1,this.pristine=!0,this.invalid=!1,this._onChange=this.onChange.bind(this),this._onKeypress=this.onKeypress.bind(this),this.inputElementId="switch"}get inputClasses(){return super._inputClasses}get additionalClasses(){return{error:this._messageSeverity=="error",selected:this.selected}}get validationClass(){const{pristine:e}=this;return P({pristine:e})}onChange(e){this.setSliderValues(),M(this,e)}setSliderValues(){var e;this.pristine=!1,this.selected=((e=this.inputElement)==null?void 0:e.checked)??!1}onKeypress(e){if(!this.disabled&&this.inputElement&&(this.setSliderValues(),e.key==" "||e.code=="Space")){this.selected=!this.inputElement.checked,this.inputElement.checked=this.selected;const t=new CustomEvent("change",{bubbles:!0,composed:!1,cancelable:!1});M(this,t)}}render(){const{disabled:e,form:t,hint:i,inputClasses:s,label:o,message:a,inputElementId:d,size:l,required:h,messageSeverity:g,unselectedLabel:u,selectedLabel:_,selected:w,name:$,validationClass:x,_onChange:C,_onKeypress:L}=this;return c`<div class="sds-switch ${s}">
      <sds-input-decorator
        ?disabled=${e}
        hint=${p(i)}
        for=${d}
        size=${p(l)}
        label=${p(o)}
        message=${p(a)}
        required=${p(h)}
        message-severity=${p(g)}
      >
        <label class="switch" for=${p(d)}>
          <input
            type="checkbox"
            form=${p(t)}
            name=${p($)}
            class="sds-checkbox"
            ?disabled=${e}
            id=${p(d)}
            .checked=${w}
            @change=${C}
          />
          <div
            class="container"
            id="slider"
            tabindex="0"
            role="switch"
            aria-label=${p(o)}
            aria-checked=${w}
            aria-disabled=${e}
            @keypress=${L}
          >
            <div class="option-label on" aria-hidden="true">
              ${_.toUpperCase()}
            </div>
            <div class="handle ${x}"></div>
            <div class="option-label off" aria-hidden="true">
              ${u.toUpperCase()}
            </div>
          </div>
        </label>
      </sds-input-decorator>
    </div>`}updated(e){if(super.updated(e),e.has("invalid")){if(!this.inputElement)return;this.invalid?this.inputElement.setAttribute("aria-invalid","true"):this.inputElement.removeAttribute("aria-invalid")}}};exports.Switch.styles=za;ae([n({attribute:"size"})],exports.Switch.prototype,"size",2);ae([n({reflect:!0,type:String,attribute:"unselected-label"})],exports.Switch.prototype,"unselectedLabel",2);ae([n({reflect:!0,type:String,attribute:"selected-label"})],exports.Switch.prototype,"selectedLabel",2);ae([n({reflect:!0,type:Boolean})],exports.Switch.prototype,"selected",2);ae([b()],exports.Switch.prototype,"pristine",2);ae([It("input.sds-checkbox")],exports.Switch.prototype,"inputElement",2);ae([n({type:Boolean,reflect:!0})],exports.Switch.prototype,"invalid",2);exports.Switch=ae([v("sds-switch")],exports.Switch);const Pa=m`button{background-color:var(--colorsActionMajorTransparent);border:none;border-bottom:var(--borderWidth400) solid var(--colorsActionMajorTransparent);border-top-left-radius:var(--borderRadius100);border-top-right-radius:var(--borderRadius100);cursor:pointer;display:inline-block;font:var(--typographyButtonLabelM);height:var(--sizing500);padding:var(--spacing000) var(--spacing200) var(--spacing000) var(--spacing200);position:relative;text-wrap:nowrap;z-index:1}button.selected{background-color:var(--colorsActionMajorYang100);border-bottom-color:var(--colorsActionMajor500)}button.hover,button:hover{background-color:var(--colorsUtilityMajor100)}button.size-l{font:var(--typographyButtonLabelL);height:var(--sizing600)}.sds-focus:focus-visible{border-bottom-left-radius:var(--borderRadius000);border-bottom-right-radius:var(--borderRadius000);z-index:2}::slotted(sds-icon){padding-right:var(--spacing100)}::slotted(sds-badge),::slotted(sds-pill){padding-left:var(--spacing100)}`;var Oa=Object.defineProperty,Ea=Object.getOwnPropertyDescriptor,pt=(r,e,t,i)=>{for(var s=i>1?void 0:i?Ea(e,t):e,o=r.length-1,a;o>=0;o--)(a=r[o])&&(s=(i?a(e,t,s):a(s))||s);return i&&s&&Oa(e,t,s),s};exports.Tab=class extends y{constructor(){super(),this.internals=this.attachInternals(),this.selected=!1,this.isHovered=!1,this.size="M",this.handleClick=()=>{this.selected||(this.selected=!0,this.dispatchSelectedEvent())},this.internals.role="tab"}get _classes(){const e=this.isHovered,t=this.size,i=this.selected;return{hover:e,"size-m":t==="M","size-l":t==="L",selected:i}}_handleMouseLeave(){this.isHovered=!1}_handleMouseEnter(){this.isHovered=!0}dispatchSelectedEvent(){this.dispatchEvent(new CustomEvent("selected",{bubbles:!0}))}updated(e){super.updated(e),this.internals.ariaSelected=this.selected.toString()}handleSlotChange(){requestAnimationFrame(()=>{this.dispatchEvent(new CustomEvent("slotchange"))})}render(){return c`
      <button
        class="sds-focus ${P(this._classes)}"
        @click="${this.handleClick}"
        @mouseenter="${()=>{this._handleMouseEnter()}}"
        @mouseleave="${()=>{this._handleMouseLeave()}}"
      >
        <slot
          @slotchange=${()=>{this.handleSlotChange()}}
        ></slot>
      </button>
    `}};exports.Tab.styles=[V,Pa];exports.Tab.shadowRootOptions={...y.shadowRootOptions,delegatesFocus:!0};pt([b()],exports.Tab.prototype,"selected",2);pt([b()],exports.Tab.prototype,"isHovered",2);pt([b()],exports.Tab.prototype,"size",2);exports.Tab=pt([v("sds-tab")],exports.Tab);const La=m`:host{display:block}.tab-width{overflow:clip;overflow-clip-margin:var(--borderWidth600);position:relative;width:100%}.tab-width:after{border-bottom:var(--borderWidth200) solid var(--colorsUtilityMajor050);bottom:0;content:"";left:0;position:absolute;width:100%}.btn{box-sizing:border-box;height:var(--btn-size);width:var(--btn-size);z-index:1}.btn,.btn sds-button-subtle{display:none}.tab-group{--btn-size:var(--sizing500);display:flex}.tab-group.size-l{--btn-size:var(--sizing600)}.tab-group.is-scrollable{gap:var(--spacing075)}.tab-group.is-scrollable .tab-width{width:calc(100% - var(--btn-size)*2)}.tab-group.is-scrollable .btn{display:block}.tab-group.has-prev .btn-left{border-bottom:var(--borderWidth200) solid var(--colorsUtilityMajor050);border-right:var(--borderWidth200) solid var(--colorsUtilityMajor050)}.tab-group.has-prev .btn-left sds-button-subtle{display:block}.tab-group.has-prev .tab-width:after{left:calc(var(--borderWidth600)*-1);width:calc(100% + var(--borderWidth600))}.tab-group.has-next .btn-right{border-bottom:var(--borderWidth200) solid var(--colorsUtilityMajor050);border-left:var(--borderWidth200) solid var(--colorsUtilityMajor050)}.tab-group.has-next .btn-right sds-button-subtle{display:block}.tab-group.has-next .tab-width:after{width:calc(100% + var(--borderWidth600))}.tab-group.has-prev.has-next .tab-width:after{left:calc(var(--borderWidth600)*-1);width:calc(100% + var(--borderWidth600)*2)}.tabs{display:flex;position:relative;transition:margin-left .5s ease}`;var ka=Object.defineProperty,Ia=Object.getOwnPropertyDescriptor,ne=(r,e,t,i)=>{for(var s=i>1?void 0:i?Ia(e,t):e,o=r.length-1,a;o>=0;o--)(a=r[o])&&(s=(i?a(e,t,s):a(s))||s);return i&&s&&ka(e,t,s),s};exports.TabGroup=class extends y{constructor(){super(),this.selectedIndex=0,this.size="M",this.isScrollable=!1,this.hasPrev=!1,this.hasNext=!1,this.internals=this.attachInternals(),this.tabWidthElement=Q(),this.tabsElement=Q(),this.singleSelectionController=(e=>new Be(this,{cycleFocusStates:!0,syncSelectionToFocus:!0,get inputComponents(){return e.tabs},onAfterChange:t=>{this.selectedIndex=this.tabs.indexOf(t),this.scrollToTabIndex(this.selectedIndex)},isSelected:t=>t.selected,setSelected:(t,i)=>{t.selected=i,i&&t.dispatchEvent(new CustomEvent("change",{bubbles:!0,detail:{index:this.tabs.indexOf(t),tab:t}}))}}))(this),this.tabsInitialized=0,this.internals.role="tablist",this.addController(this.singleSelectionController)}handleSlotChange(){if(this.setTabSize(),!this.tabWidthElement.value)throw new Error("tabWidthElement is not defined");new ResizeObserver(Fs(this,()=>{this.isScrollable=this.getNavWidth()>this.getBoundingClientRect().width,this.setButtonVisibility()},100)).observe(this),this.isScrollable=this.getNavWidth()>this.getBoundingClientRect().width,this.setButtonVisibility(),this.selectedIndex>=this.tabs.length&&(this.selectedIndex=0),this.tabs.forEach(t=>{t.addEventListener("slotchange",i=>{this.tabSlotChange(),i.stopPropagation()})})}tabSlotChange(){this.tabsInitialized++,!(this.tabsInitialized<this.tabs.length)&&requestAnimationFrame(()=>{this.scrollToTabIndex(this.selectedIndex)})}scrollToTabIndex(e){var x,C,L;const t=this.tabs[e];if(!t)return;function i(R){return(R??0)>=0?R??0:(R??0)*-1}const s=((x=this.tabs[e])==null?void 0:x.offsetLeft)??0,o=this.offsetLeft,a=((C=this.tabWidthElement.value)==null?void 0:C.offsetLeft)??0,d=i((((L=this.tabsElement.value)==null?void 0:L.offsetLeft)??0)-s+a),l=this.getVisibleTabWidth(),h=t.getBoundingClientRect().width,g=s-o-a,u=g+h,_=g<0||g>=l,w=h<l,$=u<0||u>=l;(_||w&&$)&&(this.setScrollPosition(d-l/2+t.getBoundingClientRect().width/2),this.setButtonVisibility())}setTabSize(){this.tabs.forEach(e=>{e.size=this.size})}connectedCallback(){super.connectedCallback(),this.addEventListener("selected",e=>{var t;this.selectedIndex=this.tabs.indexOf(e.target),(t=e.target)==null||t.dispatchEvent(new CustomEvent("change",{bubbles:!0,detail:{index:this.selectedIndex,tab:e.target}})),e.stopPropagation()})}updated(e){super.updated(e),e.has("selectedIndex")&&(this.tabs.forEach((t,i)=>{t.selected=this.selectedIndex===i}),this.singleSelectionController.setTabIndexes()),e.has("size")&&this.setTabSize()}getNavWidth(){var e;return((e=this.tabsElement.value)==null?void 0:e.scrollWidth)??0}getVisibleTabWidth(){var e;return((e=this.tabWidthElement.value)==null?void 0:e.getBoundingClientRect().width)??0}getMaxScroll(){const e=this.getVisibleTabWidth();return this.getNavWidth()-e}getCurrentScrollValue(){return parseInt((this.marginLeft??"0").replace("px",""))*-1}setScrollPosition(e){const t=this.getMaxScroll();e>t&&(e=t),e>0?this.marginLeft=`-${e.toString()}px`:this.marginLeft=void 0}scrollTabs(e){const t=this.getVisibleTabWidth()/3*2;let i=this.getCurrentScrollValue();e=="right"?i+=t:i-=t,this.setScrollPosition(i),this.setButtonVisibility()}setButtonVisibility(){const e=this.getMaxScroll();this.hasPrev=this.getCurrentScrollValue()>0,this.hasNext=this.getCurrentScrollValue()<e}render(){return c`
      <div
        class=${P({"tab-group":!0,"is-scrollable":this.isScrollable,"has-prev":this.hasPrev,"has-next":this.hasNext,"size-l":this.size==="L"})}
      >
        <div class="btn btn-left">
          <sds-button-subtle
            size=${this.size==="L"?"L":"M"}
            aria-hidden="true"
            tabindex="-1"
            @click=${()=>{this.scrollTabs("left")}}
          >
            <sds-icon slot="icon" type="chevron_left"></sds-icon>
          </sds-button-subtle>
        </div>
        <div ${J(this.tabWidthElement)} class="tab-width">
          <div
            class="tabs"
            ${J(this.tabsElement)}
            style=${He({"margin-left":this.marginLeft})}
          >
            <slot
              @slotchange="${()=>{this.handleSlotChange()}}"
            ></slot>
          </div>
        </div>
        <div class="btn btn-right">
          <sds-button-subtle
            size=${this.size==="L"?"L":"M"}
            aria-hidden="true"
            tabindex="-1"
            @click=${()=>{this.scrollTabs("right")}}
          >
            <sds-icon slot="icon" type="chevron_right"></sds-icon>
          </sds-button-subtle>
        </div>
      </div>
    `}};exports.TabGroup.styles=La;ne([n({attribute:"selected-index",type:Number})],exports.TabGroup.prototype,"selectedIndex",2);ne([n()],exports.TabGroup.prototype,"size",2);ne([N({flatten:!0})],exports.TabGroup.prototype,"tabs",2);ne([b()],exports.TabGroup.prototype,"marginLeft",2);ne([b()],exports.TabGroup.prototype,"isScrollable",2);ne([b()],exports.TabGroup.prototype,"hasPrev",2);ne([b()],exports.TabGroup.prototype,"hasNext",2);exports.TabGroup=ne([v("sds-tab-group")],exports.TabGroup);var Aa=Object.defineProperty,Da=Object.getOwnPropertyDescriptor,Y=(r,e,t,i)=>{for(var s=i>1?void 0:i?Da(e,t):e,o=r.length-1,a;o>=0;o--)(a=r[o])&&(s=(i?a(e,t,s):a(s))||s);return i&&s&&Aa(e,t,s),s};exports.TextArea=class extends S{constructor(){super(...arguments),this.size="M",this._inputInvalid=!1,this.inputElementId="textarea",this._onInput=this.onInput.bind(this),this._onFocusOut=this.onFocusOut.bind(this)}get additionalClasses(){const{_inputInvalid:e,_messageSeverity:t}=this;return{error:e||t==="error"}}get _displayCharactersLeftMessage(){return this.maxLength!==void 0}get _charactersLeftDisplay(){if(this.maxLength){const e=this.value?this.value.length:0,t=this.maxLength-e;return z("textarea.charactersLeft",{charactersLeft:t.toString()})}}render(){const{cols:e,disabled:t,readOnly:i,hint:s,form:o,inputElementId:a,name:d,size:l,label:h,maxLength:g,minLength:u,message:_,messageSeverity:w,required:$,rows:x,value:C,wrap:L,_inputClasses:R,_onFocusOut:Le,_onInput:ke}=this;return c`
      <div class="sds-text-area ${R}">
        <sds-input-decorator
          ?disabled=${t}
          hint=${p(s)}
          for=${a}
          size=${p(l)}
          label=${p(h)}
          message=${p(_)}
          message-severity=${p(w)}
          required=${p($)}
        >
          <textarea
            .value=${lt(C??"")}
            class="sds-input-field sds-focus ${R}"
            aria-label=${p(h)}
            aria-disabled=${t}
            aria-required=${p($==="true"?"true":void 0)}
            aria-multiline=${!0}
            @focusout=${Le}
            @input=${ke}
            @change=${ht=>M(this,ht)}
            cols=${p(e)}
            ?required=${$==="true"}
            ?disabled=${t}
            ?readonly=${i}
            form=${p(o)}
            id=${a}
            maxlength=${p(g)}
            minlength=${p(u)}
            name=${p(d)}
            rows=${p(x)}
            wrap=${p(L)}
          ></textarea>
          <div
            class="sds-textarea-characters-left ${R}"
            ?hidden=${!this._displayCharactersLeftMessage}
          >
            ${this._charactersLeftDisplay}
          </div>
        </sds-input-decorator>
      </div>
    `}onInput(e){const t=e.target;t&&(this.value=t.value+"")}onFocusOut(e){const t=e.target;this._inputInvalid=!t.checkValidity()}};exports.TextArea.styles=[V,m`
.sds-text-area{box-sizing:content-box;color:var(--colorsUtilityYin090);gap:var(--spacing100);width:100%}
.sds-text-area .sds-input-field{background:var(--colorsUtilityYang100);border:var(--borderWidth100) solid var(--colorsUtilityMajor300);border-radius:var(--borderRadius050);box-sizing:border-box;color:var(--colorsActionMajorYin090);font:var(--typographyFormFieldInputTextM);max-width:100%;padding:var(--spacing125) var(--spacing150);width:100%;width:var(--field-width,100%)}
.sds-text-area .sds-input-field.error{border:var(--borderWidth200) solid var(--colorsSemanticNegative500)}
.sds-text-area .sds-input-field:-moz-read-only{background:var(--colorsUtilityReadOnly400);border-color:var(--colorsUtilityReadOnly600);color:var(--colorsUtilityYin090)}
.sds-text-area .sds-input-field:read-only{background:var(--colorsUtilityReadOnly400);border-color:var(--colorsUtilityReadOnly600);color:var(--colorsUtilityYin090)}
.sds-text-area .sds-input-field:disabled{background:var(--colorsUtilityDisabled400);border-color:var(--colorsUtilityDisabled600);color:var(--colorsUtilityYin030)}
.sds-text-area .sds-input-field.size-s{font:var(--typographyFormFieldInputTextS);padding:var(--spacing075) var(--spacing100)}
.sds-text-area .sds-input-field.size-l{font:var(--typographyFormFieldInputTextL);padding:var(--spacing150) var(--spacing200)}
.sds-text-area .sds-textarea-characters-left{color:var(--colorsUtilityYin055);font:var(--typographyFormFieldHintTextM);padding-top:var(--spacing100)}
.sds-text-area .sds-textarea-characters-left.size-s{font:var(--typographyFormFieldHintTextS)}
.sds-text-area .sds-textarea-characters-left.size-l{font:var(--typographyFormFieldHintTextL)}
.sds-text-area .sds-textarea-characters-left.disabled{color:var(--colorsUtilityYin030)}
    `];Y([n({attribute:"size"})],exports.TextArea.prototype,"size",2);Y([n({type:Number})],exports.TextArea.prototype,"cols",2);Y([n({type:Number})],exports.TextArea.prototype,"maxLength",2);Y([n({type:Number})],exports.TextArea.prototype,"minLength",2);Y([n({type:Number})],exports.TextArea.prototype,"rows",2);Y([n({reflect:!0})],exports.TextArea.prototype,"value",2);Y([n()],exports.TextArea.prototype,"wrap",2);Y([b()],exports.TextArea.prototype,"_inputInvalid",2);Y([b()],exports.TextArea.prototype,"_displayCharactersLeftMessage",1);Y([b()],exports.TextArea.prototype,"_charactersLeftDisplay",1);exports.TextArea=Y([v("sds-text-area"),Ss()],exports.TextArea);const Fa=m`.container{background-color:var(--colorsUtilityYang100);border:var(--borderWidth100) solid var(--colorsUtilityMajor100);border-radius:var(--roundness,var(--borderRadius100));display:block;padding:var(--spacing,var(--spacing300))}.container.roundness-l{--roundness:var(--borderRadius200)}.container.spacing-s{--spacing:var(--spacing200)}.container.spacing-l{--spacing:var(--spacing400)}`;var Ma=Object.defineProperty,Ta=Object.getOwnPropertyDescriptor,Rt=(r,e,t,i)=>{for(var s=i>1?void 0:i?Ta(e,t):e,o=r.length-1,a;o>=0;o--)(a=r[o])&&(s=(i?a(e,t,s):a(s))||s);return i&&s&&Ma(e,t,s),s};exports.Tile=class extends y{constructor(){super(...arguments),this.spacing="M",this.roundness="S"}get classes(){const{spacing:e,roundness:t}=this;return P({"roundness-s":t==="S","roundness-l":t==="L","spacing-s":e==="S","spacing-m":e==="M","spacing-l":e==="L"})}render(){return c` <div class="container ${this.classes}">
      <slot></slot>
    </div>`}};exports.Tile.styles=Fa;Rt([n()],exports.Tile.prototype,"spacing",2);Rt([n()],exports.Tile.prototype,"roundness",2);exports.Tile=Rt([v("sds-tile")],exports.Tile);const ja=m`:host{container:formgroup/inline-size;display:block}.slot-container{align-items:flex-end;display:flex;flex-direction:row}::slotted(*){margin-left:var(--spacingNeg010)}@container formgroup (max-width: 768px){.slot-container{align-items:stretch;flex-direction:column;gap:var(--spacing100)}::slotted(*){margin-left:0}}`;var Ra=Object.defineProperty,Ua=Object.getOwnPropertyDescriptor,Ms=(r,e,t,i)=>{for(var s=i>1?void 0:i?Ua(e,t):e,o=r.length-1,a;o>=0;o--)(a=r[o])&&(s=(i?a(e,t,s):a(s))||s);return i&&s&&Ra(e,t,s),s};exports.FieldGroup=class extends S{constructor(){super(...arguments),this.resizeObserver=null}connectedCallback(){super.connectedCallback(),this.resizeObserver=()=>{var t;const e=(t=this.shadowRoot)==null?void 0:t.querySelector("slot");e&&this.updateSlottedElements(e)},window.addEventListener("resize",this.resizeObserver)}updated(e){var t;if(e.has("borderRadius")){const i=(t=this.shadowRoot)==null?void 0:t.querySelector("slot");i&&this.updateSlottedElements(i)}}disconnectedCallback(){super.disconnectedCallback(),this.resizeObserver&&window.removeEventListener("resize",this.resizeObserver)}updateSlottedElements(e){const t=e.assignedElements(),i=window.innerWidth<=768;t.forEach((s,o)=>{const a=s,d=this.borderRadius!=null&&this.borderRadius.trim()!=="";if(i&&!d)a.style.removeProperty("--border-top-left-radius"),a.style.removeProperty("--border-bottom-left-radius"),a.style.removeProperty("--border-top-right-radius"),a.style.removeProperty("--border-bottom-right-radius");else{const l=o===0,h=o===t.length-1,g=this.borderRadius??"";d?(a.style.setProperty("--border-top-left-radius",g),a.style.setProperty("--border-bottom-left-radius",g),a.style.setProperty("--border-top-right-radius",g),a.style.setProperty("--border-bottom-right-radius",g)):l?(a.style.setProperty("--border-top-left-radius","var(--borderRadius050)"),a.style.setProperty("--border-bottom-left-radius","var(--borderRadius050)"),a.style.setProperty("--border-top-right-radius","0"),a.style.setProperty("--border-bottom-right-radius","0")):h?(a.style.setProperty("--border-top-left-radius","0"),a.style.setProperty("--border-bottom-left-radius","0"),a.style.setProperty("--border-top-right-radius","var(--borderRadius050)"),a.style.setProperty("--border-bottom-right-radius","var(--borderRadius050)")):(a.style.setProperty("--border-top-left-radius","0"),a.style.setProperty("--border-bottom-left-radius","0"),a.style.setProperty("--border-top-right-radius","0"),a.style.setProperty("--border-bottom-right-radius","0"))}})}render(){const e={"--border-radius":this.borderRadius};return c`<div class="slot-container">
      <slot
        style=${He(e)}
        @slotchange="${t=>{const i=t.target;this.updateSlottedElements(i)}}"
      ></slot>
    </div>`}};exports.FieldGroup.styles=ja;Ms([n({attribute:"border-radius",reflect:!0})],exports.FieldGroup.prototype,"borderRadius",2);exports.FieldGroup=Ms([v("sds-field-group")],exports.FieldGroup);class Na{constructor(e,t){this.supportedLocales=[],this.getLocale=()=>this.defaultLocale,this.defaultLocale=navigator.language,this.supportedLocales=this.supportedLocales.concat([this.defaultLocale],e);const{setLocale:i,getLocale:s}=Ti({sourceLocale:this.defaultLocale,targetLocales:e,loadLocale:async o=>t(o).then(a=>({templates:a}))});this._setLocale=i,this.getLocale=s}async setLocale(e){this.supportedLocales.includes(e)||(console.warn(`Locale ${e} not included in list of supported locales. Using default of ${this.defaultLocale} instead.`),console.log("Supported locales",this.supportedLocales),e=this.defaultLocale),this._setLocale&&await this._setLocale(e)}}exports.LocalizationProvider=Na;

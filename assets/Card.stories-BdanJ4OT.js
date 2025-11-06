import{j as r}from"./jsx-runtime-D6xLZv-b.js";import{a}from"./utils-DgWKjmuI.js";import{r as i}from"./iframe-dFrTgp-g.js";import"./preload-helper-D9Z9MdNV.js";/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const y=t=>t.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),p=(...t)=>t.filter((e,o,s)=>!!e&&e.trim()!==""&&s.indexOf(e)===o).join(" ").trim();/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var v={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _=i.forwardRef(({color:t="currentColor",size:e=24,strokeWidth:o=2,absoluteStrokeWidth:s,className:c="",children:d,iconNode:x,...C},j)=>i.createElement("svg",{ref:j,...v,width:e,height:e,stroke:t,strokeWidth:s?Number(o)*24/Number(e):o,className:p("lucide",c),...C},[...x.map(([N,b])=>i.createElement(N,b)),...Array.isArray(d)?d:[d]]));/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const w=(t,e)=>{const o=i.forwardRef(({className:s,...c},d)=>i.createElement(_,{ref:d,iconNode:e,className:p(`lucide-${y(t)}`,s),...c}));return o.displayName=`${t}`,o};/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const k=[["path",{d:"M10.268 21a2 2 0 0 0 3.464 0",key:"vwvbt9"}],["path",{d:"M22 8c0-2.3-.8-4.3-2-6",key:"5bb3ad"}],["path",{d:"M3.262 15.326A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673C19.41 13.956 18 12.499 18 8A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326",key:"11g9vi"}],["path",{d:"M4 2C2.8 3.7 2 5.7 2 8",key:"tap9e0"}]],I=w("BellRing",k);function l({className:t,...e}){return r.jsx("div",{"data-slot":"card",className:a("bg-card text-card-foreground flex flex-col gap-6 rounded-xl border py-6 shadow-sm",t),...e})}function m({className:t,...e}){return r.jsx("div",{"data-slot":"card-header",className:a("@container/card-header grid auto-rows-min grid-rows-[auto_auto] items-start gap-2 px-6 has-data-[slot=card-action]:grid-cols-[1fr_auto] [.border-b]:pb-6",t),...e})}function u({className:t,...e}){return r.jsx("div",{"data-slot":"card-title",className:a("leading-none font-semibold",t),...e})}function h({className:t,...e}){return r.jsx("div",{"data-slot":"card-description",className:a("text-muted-foreground text-sm",t),...e})}function f({className:t,...e}){return r.jsx("div",{"data-slot":"card-content",className:a("px-6",t),...e})}function g({className:t,...e}){return r.jsx("div",{"data-slot":"card-footer",className:a("flex items-center px-6 [.border-t]:pt-6",t),...e})}l.__docgenInfo={description:"",methods:[],displayName:"Card"};m.__docgenInfo={description:"",methods:[],displayName:"CardHeader"};g.__docgenInfo={description:"",methods:[],displayName:"CardFooter"};u.__docgenInfo={description:"",methods:[],displayName:"CardTitle"};h.__docgenInfo={description:"",methods:[],displayName:"CardDescription"};f.__docgenInfo={description:"",methods:[],displayName:"CardContent"};const A=[{description:"1 hour ago",title:"Your call has been confirmed."},{description:"1 hour ago",title:"You have a new message!"},{description:"2 hours ago",title:"Your subscription is expiring soon!"}],L={args:{className:"w-96"},argTypes:{},component:l,parameters:{layout:"centered",docs:{description:{component:"Displays a card with header, content, and footer."}}},render:t=>r.jsxs(l,{...t,children:[r.jsxs(m,{children:[r.jsx(u,{children:"Notifications"}),r.jsx(h,{children:"You have 3 unread messages."})]}),r.jsx(f,{className:"grid gap-4",children:A.map((e,o)=>r.jsxs("div",{className:"flex items-center gap-4",children:[r.jsx(I,{className:"size-6"}),r.jsxs("div",{children:[r.jsx("p",{children:e.title}),r.jsx("p",{className:"text-foreground/50",children:e.description})]})]},o))}),r.jsx(g,{children:r.jsx("button",{className:"hover:underline",type:"button",children:"Close"})})]}),tags:["autodocs"],title:"Workspace/shadcn-ui/Card"},n={};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:"{}",...n.parameters?.docs?.source},description:{story:"The default form of the card.",...n.parameters?.docs?.description}}};const M=["Default"];export{n as Default,M as __namedExportsOrder,L as default};

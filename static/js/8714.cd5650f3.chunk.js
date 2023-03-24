"use strict";(self.webpackChunkfuse_react_app=self.webpackChunkfuse_react_app||[]).push([[8714],{44269:function(e,n,r){r.d(n,{Z:function(){return M}});var t=r(29439),a=r(98655),o=r(73428),i=r(65280),s=r(5297),c=r(83061),l=r(47313),d=r(17551),u=r(9506),m=r(1413),f=r(45987),h=r(1168),p=r(10223),x=r(83097),v=r(16132),k=r(54097),Z=r(19860),g=r(17592),j=r(70499),b=r(46417),w=["children","name"];function y(e){var n=e.children,r=e.document,t=(0,Z.Z)();l.useEffect((function(){r.body.dir=t.direction}),[r,t.direction]);var a=l.useMemo((function(){return(0,x.Z)({key:"iframe-demo-".concat(t.direction),prepend:!0,container:r.head,stylisPlugins:"rtl"===t.direction?[p.Z]:[]})}),[r,t.direction]),o=l.useCallback((function(){return r.defaultView}),[r]);return(0,b.jsx)(k.StyleSheetManager,{target:r.head,stylisPlugins:"rtl"===t.direction?[p.Z]:[],children:(0,b.jsxs)(v.C,{value:a,children:[(0,b.jsx)(j.Z,{styles:function(){return{html:{fontSize:"62.5%"}}}}),l.cloneElement(n,{window:o})]})})}var S=(0,g.ZP)("iframe")((function(e){var n=e.theme;return{backgroundColor:n.palette.background.default,flexGrow:1,height:400,border:0,boxShadow:n.shadows[1]}}));function C(e){var n,r=e.children,a=e.name,o=(0,f.Z)(e,w),i="".concat(a," demo"),s=l.useRef(null),c=l.useReducer((function(){return!0}),!1),d=(0,t.Z)(c,2),u=d[0],p=d[1];l.useEffect((function(){var e=s.current.contentDocument;null==e||"complete"!==e.readyState||u||p()}),[u]);var x=null===(n=s.current)||void 0===n?void 0:n.contentDocument;return(0,b.jsxs)(b.Fragment,{children:[(0,b.jsx)(S,(0,m.Z)({onLoad:p,ref:s,title:i},o)),!1!==u?h.createPortal((0,b.jsx)(y,{document:x,children:r}),x.body):null]})}var N=l.memo(C),P=r(56993);function B(e){var n=(0,l.useState)(e.currentTabIndex),r=(0,t.Z)(n,2),m=r[0],f=r[1],h=e.component,p=e.raw,x=e.iframe,v=e.className,k=e.name;return(0,b.jsxs)(o.Z,{className:(0,c.default)(v,"shadow"),sx:{backgroundColor:function(e){return(0,d._j)(e.palette.background.paper,"light"===e.palette.mode?.01:.1)}},children:[(0,b.jsx)(u.Z,{sx:{backgroundColor:function(e){return(0,d._j)(e.palette.background.paper,"light"===e.palette.mode?.02:.2)}},children:(0,b.jsxs)(s.Z,{classes:{root:"border-b-1",flexContainer:"justify-end"},value:m,onChange:function(e,n){f(n)},textColor:"secondary",indicatorColor:"secondary",children:[h&&(0,b.jsx)(i.Z,{classes:{root:"min-w-64"},icon:(0,b.jsx)(P.Z,{children:"heroicons-outline:eye"})}),p&&(0,b.jsx)(i.Z,{classes:{root:"min-w-64"},icon:(0,b.jsx)(P.Z,{children:"heroicons-outline:code"})})]})}),(0,b.jsxs)("div",{className:"flex justify-center max-w-full relative",children:[(0,b.jsx)("div",{className:0===m?"flex flex-1 max-w-full":"hidden",children:h&&(x?(0,b.jsx)(N,{name:k,children:(0,b.jsx)(h,{})}):(0,b.jsx)("div",{className:"p-24 flex flex-1 justify-center max-w-full",children:(0,b.jsx)(h,{})}))}),(0,b.jsx)("div",{className:1===m?"flex flex-1":"hidden",children:(0,l.useMemo)((function(){return p&&1===m?(0,b.jsx)("div",{className:"flex flex-1",children:(0,b.jsx)(a.Z,{component:"pre",className:"language-javascript w-full",sx:{borderRadius:"0!important"},children:p.default})}):null}),[p,m])})]})]})}B.defaultProps={name:"",currentTabIndex:0};var M=B},55100:function(e,n,r){r.d(n,{Z:function(){return l}});var t=r(29439),a=r(47313),o=r(91554),i=r(98668),s=r(24193),c=r(46417);function l(){var e=a.useState(!1),n=(0,t.Z)(e,2),r=n[0],l=n[1];return(0,c.jsxs)("div",{children:[(0,c.jsx)(s.Z,{onClick:function(){l(!r)},children:"Show backdrop"}),(0,c.jsx)(o.Z,{sx:{color:"#fff",zIndex:function(e){return e.zIndex.drawer+1}},open:r,onClick:function(){l(!1)},children:(0,c.jsx)(i.Z,{color:"inherit"})})]})}},38714:function(e,n,r){r.r(n);var t=r(44269),a=r(56993),o=r(24193),i=r(61113),s=r(46417);n.default=function(e){return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)("div",{className:"flex flex-1 grow-0 items-center justify-end",children:(0,s.jsx)(o.Z,{className:"normal-case",variant:"contained",color:"secondary",component:"a",href:"https://mui.com/components/backdrop",target:"_blank",role:"button",startIcon:(0,s.jsx)(a.Z,{children:"heroicons-outline:external-link"}),children:"Reference"})}),(0,s.jsx)(i.Z,{className:"text-40 my-16 font-700",component:"h1",children:"Backdrop"}),(0,s.jsx)(i.Z,{className:"description",children:"The backdrop component is used to provide emphasis on a particular element or parts of it."}),(0,s.jsx)(i.Z,{className:"mb-40",component:"div",children:"The backdrop signals to the user of a state change within the application and can be used for creating loaders, dialogs, and more. In its simplest form, the backdrop component will add a dimmed layer over your application."}),(0,s.jsx)(i.Z,{className:"text-32 mt-40 mb-10 font-700",component:"h2",children:"Example"}),(0,s.jsx)(i.Z,{className:"mb-40",component:"div",children:(0,s.jsx)(t.Z,{name:"SimpleBackdrop.js",className:"my-24",iframe:!1,component:r(55100).Z,raw:r(46268)})})]})}},98668:function(e,n,r){var t,a,o,i,s,c,l,d,u=r(30168),m=r(63366),f=r(87462),h=r(47313),p=r(83061),x=r(21921),v=r(30686),k=r(91615),Z=r(77342),g=r(17592),j=r(94808),b=r(46417),w=["className","color","disableShrink","size","style","thickness","value","variant"],y=44,S=(0,v.F4)(s||(s=t||(t=(0,u.Z)(["\n  0% {\n    transform: rotate(0deg);\n  }\n\n  100% {\n    transform: rotate(360deg);\n  }\n"])))),C=(0,v.F4)(c||(c=a||(a=(0,u.Z)(["\n  0% {\n    stroke-dasharray: 1px, 200px;\n    stroke-dashoffset: 0;\n  }\n\n  50% {\n    stroke-dasharray: 100px, 200px;\n    stroke-dashoffset: -15px;\n  }\n\n  100% {\n    stroke-dasharray: 100px, 200px;\n    stroke-dashoffset: -125px;\n  }\n"])))),N=(0,g.ZP)("span",{name:"MuiCircularProgress",slot:"Root",overridesResolver:function(e,n){var r=e.ownerState;return[n.root,n[r.variant],n["color".concat((0,k.Z)(r.color))]]}})((function(e){var n=e.ownerState,r=e.theme;return(0,f.Z)({display:"inline-block"},"determinate"===n.variant&&{transition:r.transitions.create("transform")},"inherit"!==n.color&&{color:(r.vars||r).palette[n.color].main})}),(function(e){return"indeterminate"===e.ownerState.variant&&(0,v.iv)(l||(l=o||(o=(0,u.Z)(["\n      animation: "," 1.4s linear infinite;\n    "]))),S)})),P=(0,g.ZP)("svg",{name:"MuiCircularProgress",slot:"Svg",overridesResolver:function(e,n){return n.svg}})({display:"block"}),B=(0,g.ZP)("circle",{name:"MuiCircularProgress",slot:"Circle",overridesResolver:function(e,n){var r=e.ownerState;return[n.circle,n["circle".concat((0,k.Z)(r.variant))],r.disableShrink&&n.circleDisableShrink]}})((function(e){var n=e.ownerState,r=e.theme;return(0,f.Z)({stroke:"currentColor"},"determinate"===n.variant&&{transition:r.transitions.create("stroke-dashoffset")},"indeterminate"===n.variant&&{strokeDasharray:"80px, 200px",strokeDashoffset:0})}),(function(e){var n=e.ownerState;return"indeterminate"===n.variant&&!n.disableShrink&&(0,v.iv)(d||(d=i||(i=(0,u.Z)(["\n      animation: "," 1.4s ease-in-out infinite;\n    "]))),C)})),M=h.forwardRef((function(e,n){var r=(0,Z.Z)({props:e,name:"MuiCircularProgress"}),t=r.className,a=r.color,o=void 0===a?"primary":a,i=r.disableShrink,s=void 0!==i&&i,c=r.size,l=void 0===c?40:c,d=r.style,u=r.thickness,h=void 0===u?3.6:u,v=r.value,g=void 0===v?0:v,S=r.variant,C=void 0===S?"indeterminate":S,M=(0,m.Z)(r,w),R=(0,f.Z)({},r,{color:o,disableShrink:s,size:l,thickness:h,value:g,variant:C}),D=function(e){var n=e.classes,r=e.variant,t=e.color,a=e.disableShrink,o={root:["root",r,"color".concat((0,k.Z)(t))],svg:["svg"],circle:["circle","circle".concat((0,k.Z)(r)),a&&"circleDisableShrink"]};return(0,x.Z)(o,j.C,n)}(R),I={},z={},_={};if("determinate"===C){var F=2*Math.PI*((y-h)/2);I.strokeDasharray=F.toFixed(3),_["aria-valuenow"]=Math.round(g),I.strokeDashoffset="".concat(((100-g)/100*F).toFixed(3),"px"),z.transform="rotate(-90deg)"}return(0,b.jsx)(N,(0,f.Z)({className:(0,p.default)(D.root,t),style:(0,f.Z)({width:l,height:l},z,d),ownerState:R,ref:n,role:"progressbar"},_,M,{children:(0,b.jsx)(P,{className:D.svg,ownerState:R,viewBox:"".concat(22," ").concat(22," ").concat(y," ").concat(y),children:(0,b.jsx)(B,{className:D.circle,style:I,ownerState:R,cx:y,cy:y,r:(y-h)/2,fill:"none",strokeWidth:h})})}))}));n.Z=M},94808:function(e,n,r){r.d(n,{C:function(){return o}});var t=r(77430),a=r(32298);function o(e){return(0,a.Z)("MuiCircularProgress",e)}var i=(0,t.Z)("MuiCircularProgress",["root","determinate","indeterminate","colorPrimary","colorSecondary","svg","circle","circleDeterminate","circleIndeterminate","circleDisableShrink"]);n.Z=i},46268:function(e,n,r){r.r(n),n.default="import * as React from 'react';\nimport Backdrop from '@mui/material/Backdrop';\nimport CircularProgress from '@mui/material/CircularProgress';\nimport Button from '@mui/material/Button';\n\nexport default function SimpleBackdrop() {\n  const [open, setOpen] = React.useState(false);\n  const handleClose = () => {\n    setOpen(false);\n  };\n  const handleToggle = () => {\n    setOpen(!open);\n  };\n\n  return (\n    <div>\n      <Button onClick={handleToggle}>Show backdrop</Button>\n      <Backdrop\n        sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}\n        open={open}\n        onClick={handleClose}\n      >\n        <CircularProgress color=\"inherit\" />\n      </Backdrop>\n    </div>\n  );\n}\n"}}]);
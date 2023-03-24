"use strict";(self.webpackChunkfuse_react_app=self.webpackChunkfuse_react_app||[]).push([[9094],{29094:function(e,s,r){r.r(s);var a=r(1413),l=r(62563),n=r(75627),i=r(24193),o=r(44758),t=r(1550),m=r(83929),d=r(24631),u=r(61113),c=r(2135),f=r(3463),p=r(58970),x=r(70501),h=r(15480),v=r(46417),w=f.Ry().shape({name:f.Z_().required("You must enter your name"),email:f.Z_().email("You must enter a valid email").required("You must enter a email"),password:f.Z_().required("Please enter your password.").min(8,"Password is too short - should be 8 chars minimum."),passwordConfirm:f.Z_().oneOf([f.iH("password"),null],"Passwords must match"),acceptTermsConditions:f.O7().oneOf([!0],"The terms and conditions must be accepted.")}),Z={name:"",email:"",password:"",passwordConfirm:"",acceptTermsConditions:!1};s.default=function(){var e=(0,n.cI)({mode:"onChange",defaultValues:Z,resolver:(0,l.X)(w)}),s=e.control,r=e.formState,f=e.handleSubmit,j=e.reset,g=r.isValid,b=r.dirtyFields,y=r.errors;return(0,v.jsx)("div",{className:"flex flex-col flex-auto items-center sm:justify-center min-w-0",children:(0,v.jsx)(x.Z,{className:"w-full sm:w-auto min-h-full sm:min-h-auto rounded-0 py-32 px-16 sm:p-48 sm:rounded-2xl sm:shadow",children:(0,v.jsxs)("div",{className:"w-full max-w-320 sm:w-320 mx-auto sm:mx-0",children:[(0,v.jsx)("img",{className:"w-48",src:"assets/images/logo/logo.svg",alt:"logo"}),(0,v.jsx)(u.Z,{className:"mt-32 text-4xl font-extrabold tracking-tight leading-tight",children:"Sign up"}),(0,v.jsxs)("div",{className:"flex items-baseline mt-2 font-medium",children:[(0,v.jsx)(u.Z,{children:"Already have an account?"}),(0,v.jsx)(c.rU,{className:"ml-4",to:"/sign-in",children:"Sign in"})]}),(0,v.jsxs)("form",{name:"registerForm",noValidate:!0,className:"flex flex-col justify-center w-full mt-32",onSubmit:f((function(){j(Z)})),children:[(0,v.jsx)(n.Qr,{name:"name",control:s,render:function(e){var s,r=e.field;return(0,v.jsx)(d.Z,(0,a.Z)((0,a.Z)({},r),{},{className:"mb-24",label:"Name",autoFocus:!0,type:"name",error:!!y.name,helperText:null===y||void 0===y||null===(s=y.name)||void 0===s?void 0:s.message,variant:"outlined",required:!0,fullWidth:!0}))}}),(0,v.jsx)(n.Qr,{name:"email",control:s,render:function(e){var s,r=e.field;return(0,v.jsx)(d.Z,(0,a.Z)((0,a.Z)({},r),{},{className:"mb-24",label:"Email",type:"email",error:!!y.email,helperText:null===y||void 0===y||null===(s=y.email)||void 0===s?void 0:s.message,variant:"outlined",required:!0,fullWidth:!0}))}}),(0,v.jsx)(n.Qr,{name:"password",control:s,render:function(e){var s,r=e.field;return(0,v.jsx)(d.Z,(0,a.Z)((0,a.Z)({},r),{},{className:"mb-24",label:"Password",type:"password",error:!!y.password,helperText:null===y||void 0===y||null===(s=y.password)||void 0===s?void 0:s.message,variant:"outlined",required:!0,fullWidth:!0}))}}),(0,v.jsx)(n.Qr,{name:"passwordConfirm",control:s,render:function(e){var s,r=e.field;return(0,v.jsx)(d.Z,(0,a.Z)((0,a.Z)({},r),{},{className:"mb-24",label:"Password (Confirm)",type:"password",error:!!y.passwordConfirm,helperText:null===y||void 0===y||null===(s=y.passwordConfirm)||void 0===s?void 0:s.message,variant:"outlined",required:!0,fullWidth:!0}))}}),(0,v.jsx)(n.Qr,{name:"acceptTermsConditions",control:s,render:function(e){var s,r=e.field;return(0,v.jsxs)(t.Z,{className:"items-center",error:!!y.acceptTermsConditions,children:[(0,v.jsx)(m.Z,{label:"I agree to the Terms of Service and Privacy Policy",control:(0,v.jsx)(o.Z,(0,a.Z)({size:"small"},r))}),(0,v.jsx)(h.Z,{children:null===y||void 0===y||null===(s=y.acceptTermsConditions)||void 0===s?void 0:s.message})]})}}),(0,v.jsx)(i.Z,{variant:"contained",color:"secondary",className:" w-full mt-24","aria-label":"Register",disabled:p.Z.isEmpty(b)||!g,type:"submit",size:"large",children:"Create your free account"})]})]})})})}}}]);
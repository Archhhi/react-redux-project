(this["webpackJsonpreact-redux-project"]=this["webpackJsonpreact-redux-project"]||[]).push([[6],{234:function(e,t,r){e.exports={formControl:"FormsControls_formControl__1Wqoj",error:"FormsControls_error__1m5wo",formSummaryError:"FormsControls_formSummaryError__PjrMp"}},235:function(e,t,r){"use strict";r.d(t,"b",(function(){return m})),r.d(t,"a",(function(){return s})),r.d(t,"c",(function(){return f}));var n=r(62),a=r(0),c=r.n(a),o=r(234),l=r.n(o),i=r(114),u=function(e){var t=e.meta,r=t.touched,n=t.error,a=e.children,o=r&&n;return c.a.createElement("div",{className:l.a.formControl+" "+(o?l.a.error:"")},c.a.createElement("div",null,a),o&&c.a.createElement("span",null,n))},m=function(e){var t=e.input,r=(e.meta,e.child,Object(n.a)(e,["input","meta","child"]));return c.a.createElement(u,e,c.a.createElement("textarea",Object.assign({},t,r)))},s=function(e){var t=e.input,r=(e.meta,e.child,Object(n.a)(e,["input","meta","child"]));return c.a.createElement(u,e,c.a.createElement("input",Object.assign({},t,r)))},f=function(e,t,r,n){var a=arguments.length>4&&void 0!==arguments[4]?arguments[4]:{},o=arguments.length>5&&void 0!==arguments[5]?arguments[5]:"";return c.a.createElement("div",null,c.a.createElement(i.a,Object.assign({placeholder:e,name:t,validate:r,component:n},a))," ",o)}},237:function(e,t,r){"use strict";r.d(t,"b",(function(){return n})),r.d(t,"a",(function(){return a}));var n=function(e){if(!e)return"Field is required"},a=function(e){return function(t){if(t.length>e)return"Max length is ".concat(e," symbols")}}},299:function(e,t,r){"use strict";r.r(t);var n=r(0),a=r.n(n),c=r(115),o=r(21),l=r(31),i=r(235),u=r(237),m=r(7),s=r(234),f=r.n(s),d=Object(c.a)({form:"login"})((function(e){var t=e.handleSubmit,r=e.error,n=e.captchaUrl;return a.a.createElement("form",{onSubmit:t},Object(i.c)("Email","email",[u.b],i.a,{type:"text"}),Object(i.c)("Password","password",[u.b],i.a,{type:"password"}),Object(i.c)(null,"rememberMe",[],i.a,{type:"checkbox"},"remember me"),r&&a.a.createElement("div",{className:f.a.formSummaryError},r),a.a.createElement("div",null,a.a.createElement("button",null,"login")),n&&a.a.createElement("img",{src:n}),n&&Object(i.c)("Symbols from image","captcha",[u.b],i.a,{}))}));t.default=Object(o.b)((function(e){return{isAuth:e.auth.isAuth,captchaUrl:e.auth.captchaUrl}}),{login:l.c})((function(e){return e.isAuth?a.a.createElement(m.a,{to:"/profile"}):a.a.createElement("div",null,a.a.createElement("h1",null,"LOGIN"),a.a.createElement(d,{onSubmit:function(t){e.login(t.email,t.password,t.rememberMe,t.captcha)},captchaUrl:e.captchaUrl}))}))}}]);
//# sourceMappingURL=6.ad244a6d.chunk.js.map
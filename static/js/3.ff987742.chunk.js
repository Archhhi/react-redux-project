(this["webpackJsonpsocial-network"]=this["webpackJsonpsocial-network"]||[]).push([[3],{158:function(e,n,t){"use strict";var r=t(12),a=t.n(r),o=t(102),i=t.n(o),u=t(30),s=t.n(u),c=t(0),l=t.n(c),d=t(9),f=t.n(d),m=t(93),p=t.n(m),v=t(25),g=t.n(v),h=t(24),b=function(e,n,t,r){var o=n.value;return"checkbox"===e?a()({},n,{checked:!!o}):"radio"===e?a()({},n,{checked:r(o,t),value:t}):"select-multiple"===e?a()({},n,{value:o||[]}):"file"===e?a()({},n,{value:o||void 0}):n};var y=t(100),E=function(e,n){if(Object(y.a)(e)){if(!n&&e.nativeEvent&&void 0!==e.nativeEvent.text)return e.nativeEvent.text;if(n&&void 0!==e.nativeEvent)return e.nativeEvent.text;var t=e,r=t.target,a=r.type,o=r.value,i=r.checked,u=r.files,s=t.dataTransfer;return"checkbox"===a?!!i:"file"===a?u||s&&s.files:"select-multiple"===a?function(e){var n=[];if(e)for(var t=0;t<e.length;t++){var r=e[t];r.selected&&n.push(r.value)}return n}(e.target.options):o}return e},_="undefined"!==typeof window&&window.navigator&&window.navigator.product&&"ReactNative"===window.navigator.product,F=function(e,n){var t=n.name,r=n.parse,a=n.normalize,o=E(e,_);return r&&(o=r(o,t)),a&&(o=a(t,o)),o},D=t(11),w=t(61),x=function(e,n,t){return Object(w.isValidElementType)(e[n])?null:new Error("Invalid prop `"+n+"` supplied to `"+t+"`.")},O=["_reduxForm"],j=function(e){return e&&"object"===typeof e},C=function(e){return e&&"function"===typeof e},k=function(e){j(e)&&C(e.preventDefault)&&e.preventDefault()},S=function(e,n){if(j(e)&&j(e.dataTransfer)&&C(e.dataTransfer.getData))return e.dataTransfer.getData(n)},R=function(e,n,t){j(e)&&j(e.dataTransfer)&&C(e.dataTransfer.setData)&&e.dataTransfer.setData(n,t)};var T=function(e){var n=e.deepEqual,t=e.getIn,r=function(t){function r(){for(var e,n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))||this).ref=l.a.createRef(),e.isPristine=function(){return e.props.pristine},e.getValue=function(){return e.props.value},e.handleChange=function(n){var t=e.props,r=t.name,o=t.dispatch,i=t.parse,u=t.normalize,s=t.onChange,c=t._reduxForm,l=t.value,d=F(n,{name:r,parse:i,normalize:u}),f=!1;if(s)if(!_&&Object(y.a)(n))s(a()({},n,{preventDefault:function(){return f=!0,k(n)}}),d,l,r);else{var m=s(n,d,l,r);_&&(f=m)}f||(o(c.change(r,d)),c.asyncValidate&&c.asyncValidate(r,d,"change"))},e.handleFocus=function(n){var t=e.props,r=t.name,o=t.dispatch,i=t.onFocus,u=t._reduxForm,s=!1;i&&(_?s=i(n,r):i(a()({},n,{preventDefault:function(){return s=!0,k(n)}}),r)),s||o(u.focus(r))},e.handleBlur=function(n){var t=e.props,r=t.name,o=t.dispatch,i=t.parse,u=t.normalize,s=t.onBlur,c=t._reduxForm,l=t._value,d=t.value,f=F(n,{name:r,parse:i,normalize:u});f===l&&void 0!==l&&(f=d);var m=!1;s&&(_?m=s(n,f,d,r):s(a()({},n,{preventDefault:function(){return m=!0,k(n)}}),f,d,r)),m||(o(c.blur(r,f)),c.asyncValidate&&c.asyncValidate(r,f,"blur"))},e.handleDragStart=function(n){var t=e.props,r=t.name,a=t.onDragStart,o=t.value;R(n,"text",null==o?"":o),a&&a(n,r)},e.handleDrop=function(n){var t=e.props,r=t.name,o=t.dispatch,i=t.onDrop,u=t._reduxForm,s=t.value,c=S(n,"text"),l=!1;i&&i(a()({},n,{preventDefault:function(){return l=!0,k(n)}}),c,s,r),l||(o(u.change(r,c)),k(n))},e}s()(r,t);var o=r.prototype;return o.shouldComponentUpdate=function(e){var t=this,r=Object.keys(e),a=Object.keys(this.props);return!!(this.props.children||e.children||r.length!==a.length||r.some((function(r){return~(e.immutableProps||[]).indexOf(r)?t.props[r]!==e[r]:!~O.indexOf(r)&&!n(t.props[r],e[r])})))},o.getRenderedComponent=function(){return this.ref.current},o.render=function(){var n=this.props,t=n.component,r=n.forwardRef,o=n.name,i=n._reduxForm,u=(n.normalize,n.onBlur,n.onChange,n.onFocus,n.onDragStart,n.onDrop,n.immutableProps,g()(n,["component","forwardRef","name","_reduxForm","normalize","onBlur","onChange","onFocus","onDragStart","onDrop","immutableProps"])),s=function(e,n,t){var r=e.getIn,o=e.toJS,i=e.deepEqual,u=t.asyncError,s=t.asyncValidating,c=t.onBlur,l=t.onChange,d=t.onDrop,f=t.onDragStart,m=t.dirty,p=t.dispatch,v=t.onFocus,h=t.form,y=t.format,E=t.initial,_=(t.parse,t.pristine),F=t.props,D=t.state,w=t.submitError,x=t.submitFailed,O=t.submitting,j=t.syncError,C=t.syncWarning,k=(t.validate,t.value),S=t._value,R=(t.warn,g()(t,["asyncError","asyncValidating","onBlur","onChange","onDrop","onDragStart","dirty","dispatch","onFocus","form","format","initial","parse","pristine","props","state","submitError","submitFailed","submitting","syncError","syncWarning","validate","value","_value","warn"])),T=j||u||w,V=C,z=function(e,t){if(null===t)return e;var r=null==e?"":e;return t?t(e,n):r}(k,y);return{input:b(R.type,{name:n,onBlur:c,onChange:l,onDragStart:f,onDrop:d,onFocus:v,value:z},S,i),meta:a()({},o(D),{active:!(!D||!r(D,"active")),asyncValidating:s,autofilled:!(!D||!r(D,"autofilled")),dirty:m,dispatch:p,error:T,form:h,initial:E,warning:V,invalid:!!T,pristine:_,submitting:!!O,submitFailed:!!x,touched:!(!D||!r(D,"touched")),valid:!T,visited:!(!D||!r(D,"visited"))}),custom:a()({},R,{},F)}}(e,o,a()({},u,{form:i.form,onBlur:this.handleBlur,onChange:this.handleChange,onDrop:this.handleDrop,onDragStart:this.handleDragStart,onFocus:this.handleFocus})),l=s.custom,d=g()(s,["custom"]);if(r&&(l.ref=this.ref),"string"===typeof t){var f=d.input;d.meta;return Object(c.createElement)(t,a()({},f,{},l))}return Object(c.createElement)(t,a()({},d,{},l))},r}(c.Component);return r.propTypes={component:x,props:f.a.object},Object(h.b)((function(e,r){var a=r.name,o=r._reduxForm,i=o.initialValues,u=(0,o.getFormState)(e),s=t(u,"initial."+a),c=void 0!==s?s:i&&t(i,a),l=t(u,"values."+a),d=t(u,"submitting"),f=function(e,n){var t=D.a.getIn(e,n);return t&&t._error?t._error:t}(t(u,"syncErrors"),a),m=function(e,n){var r=t(e,n);return r&&r._warning?r._warning:r}(t(u,"syncWarnings"),a),p=n(l,c);return{asyncError:t(u,"asyncErrors."+a),asyncValidating:t(u,"asyncValidating")===a,dirty:!p,pristine:p,state:t(u,"fields."+a),submitError:t(u,"submitErrors."+a),submitFailed:t(u,"submitFailed"),submitting:d,syncError:f,syncWarning:m,initial:c,value:l,_value:r.value}}),void 0,void 0,{forwardRef:!0})(r)},V=t(101),z=t.n(V),P=function(e,n,t,r,a,o){if(o)return e===n},B=function(e,n,t){var r=z()(e.props,n,P),a=z()(e.state,t,P);return!r||!a},I=function(e,n){var t=e._reduxForm.sectionPrefix;return t?t+"."+n:n},N=t(54);var A=function(e){var n=T(e),t=e.setIn,r=function(e){function r(n){var r;if((r=e.call(this,n)||this).ref=l.a.createRef(),r.normalize=function(e,n){var a=r.props.normalize;if(!a)return n;var o=r.props._reduxForm.getValues();return a(n,r.value,t(o,e,n),o,e)},!n._reduxForm)throw new Error("Field must be inside a component decorated with reduxForm()");return r}s()(r,e);var o=r.prototype;return o.componentDidMount=function(){var e=this;this.props._reduxForm.register(this.name,"Field",(function(){return e.props.validate}),(function(){return e.props.warn}))},o.shouldComponentUpdate=function(e,n){return B(this,e,n)},o.UNSAFE_componentWillReceiveProps=function(e){var n=I(this.props,this.props.name),t=I(e,e.name);n===t&&D.a.deepEqual(this.props.validate,e.validate)&&D.a.deepEqual(this.props.warn,e.warn)||(this.props._reduxForm.unregister(n),this.props._reduxForm.register(t,"Field",(function(){return e.validate}),(function(){return e.warn})))},o.componentWillUnmount=function(){this.props._reduxForm.unregister(this.name)},o.getRenderedComponent=function(){return p()(this.props.forwardRef,"If you want to access getRenderedComponent(), you must specify a forwardRef prop to Field"),this.ref.current?this.ref.current.getRenderedComponent():void 0},o.render=function(){return Object(c.createElement)(n,a()({},this.props,{name:this.name,normalize:this.normalize,ref:this.ref}))},i()(r,[{key:"name",get:function(){return I(this.props,this.props.name)}},{key:"dirty",get:function(){return!this.pristine}},{key:"pristine",get:function(){return!(!this.ref.current||!this.ref.current.isPristine())}},{key:"value",get:function(){return this.ref.current&&this.ref.current.getValue()}}]),r}(c.Component);return r.propTypes={name:f.a.string.isRequired,component:x,format:f.a.func,normalize:f.a.func,onBlur:f.a.func,onChange:f.a.func,onFocus:f.a.func,onDragStart:f.a.func,onDrop:f.a.func,parse:f.a.func,props:f.a.object,validate:f.a.oneOfType([f.a.func,f.a.arrayOf(f.a.func)]),warn:f.a.oneOfType([f.a.func,f.a.arrayOf(f.a.func)]),forwardRef:f.a.bool,immutableProps:f.a.arrayOf(f.a.string),_reduxForm:f.a.object},Object(N.b)(r)};n.a=A(D.a)},319:function(e,n,t){e.exports={formControl:"FormsControls_formControl__3PeJS",error:"FormsControls_error__Lnkt7",formSummaryError:"FormsControls_formSummaryError__3mBFz"}},320:function(e,n,t){"use strict";t.d(n,"b",(function(){return l})),t.d(n,"a",(function(){return d})),t.d(n,"c",(function(){return f}));var r=t(71),a=t(0),o=t.n(a),i=t(319),u=t.n(i),s=t(158),c=function(e){var n=e.meta,t=n.touched,r=n.error,a=e.children,i=t&&r;return o.a.createElement("div",{className:u.a.formControl+" "+(i?u.a.error:"")},o.a.createElement("div",null,a),i&&o.a.createElement("span",null,r))},l=function(e){var n=e.input,t=(e.meta,e.child,Object(r.a)(e,["input","meta","child"]));return o.a.createElement(c,e,o.a.createElement("textarea",Object.assign({},n,t)))},d=function(e){var n=e.input,t=(e.meta,e.child,Object(r.a)(e,["input","meta","child"]));return o.a.createElement(c,e,o.a.createElement("input",Object.assign({},n,t)))},f=function(e,n,t,r){var a=arguments.length>4&&void 0!==arguments[4]?arguments[4]:{},i=arguments.length>5&&void 0!==arguments[5]?arguments[5]:"";return o.a.createElement(o.a.Fragment,null,o.a.createElement(s.a,Object.assign({placeholder:e,name:n,validate:t,component:r},a))," ",i)}},321:function(e,n,t){"use strict";t.d(n,"b",(function(){return r})),t.d(n,"a",(function(){return a}));var r=function(e){},a=function(e){return function(n){if(n.length>e)return"Max length is ".concat(e," symbols")}}},322:function(e,n,t){e.exports={dialogs:"Dialogs_dialogs__3H_ew",dialogsItems:"Dialogs_dialogsItems__2J8ki",active:"Dialogs_active__1-Ply",messages:"Dialogs_messages__3vZrL",dialog:"Dialogs_dialog__2wI4C"}},324:function(e,n,t){"use strict";t.r(n);var r=t(0),a=t.n(r),o=t(322),i=t.n(o),u=t(10),s=function(e){var n="/dialogs/"+e.id;return a.a.createElement("div",{className:i.a.dialog+" "+i.a.active},a.a.createElement(u.c,{to:n}," ",e.name," "))},c=function(e){return a.a.createElement("div",null,a.a.createElement("div",{className:i.a.dialog},e.message))},l=t(158),d=t(133),f=t(321),m=t(320),p=Object(f.a)(50),v=Object(d.a)({form:"DialogsAddNewMessageForm"})((function(e){return a.a.createElement("form",{onSubmit:e.handleSubmit},a.a.createElement("div",null,a.a.createElement(l.a,{name:"newMessageText",placeholder:"Text message",component:m.b,validate:[f.b,p]})),a.a.createElement("div",null,a.a.createElement("button",null,"Add")))})),g=function(e){var n=e.dialogsData.map((function(e){return a.a.createElement(s,{name:e.name,id:e.id,key:e.id})})),t=e.messages.map((function(e){return a.a.createElement(c,{message:e.message,id:e.id,key:e.id})}));return a.a.createElement("div",{className:i.a.dialogs},a.a.createElement("div",{className:i.a.dialogsItems},n),a.a.createElement("div",{className:i.a.messages},t),a.a.createElement(v,{onSubmit:function(n){e.sendMessage(n.newMessageText)}}))},h=t(24),b=t(112),y=t(36),E=t(37),_=t(39),F=t(38),D=t(42),w=function(e){return{isAuth:e.auth.isAuth}},x=t(7);n.default=Object(x.d)(Object(h.b)((function(e){return{dialogsData:e.DialogsPage.dialogsData,messages:e.DialogsPage.messages}}),(function(e){return{sendMessage:function(n){e(Object(b.b)(n))}}})),(function(e){var n=function(n){Object(_.a)(r,n);var t=Object(F.a)(r);function r(){return Object(y.a)(this,r),t.apply(this,arguments)}return Object(E.a)(r,[{key:"render",value:function(){return this.props.isAuth?a.a.createElement(e,this.props):a.a.createElement(D.a,{to:"/login"})}}]),r}(a.a.Component);return Object(h.b)(w)(n)}))(g)}}]);
//# sourceMappingURL=3.ff987742.chunk.js.map
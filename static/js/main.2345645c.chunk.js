(this["webpackJsonpreact-redux-project"]=this["webpackJsonpreact-redux-project"]||[]).push([[1],{141:function(e,t,n){e.exports=n(233)},146:function(e,t,n){},147:function(e,t,n){},152:function(e,t,n){},153:function(e,t,n){},154:function(e,t,n){},233:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(45),o=n.n(c);n(146),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var u=n(26),i=n(27),s=n(29),l=n(28),f=(n(147),n(7)),d=n(9),p=n(6),m=n.n(p),g=function(){return r.a.createElement("nav",{className:m.a.nav},r.a.createElement("div",{className:m.a.item},r.a.createElement(d.b,{to:"/profile",activeClassName:m.a.activeLink},"Profile")),r.a.createElement("div",{className:"".concat(m.a.item," ").concat(m.a.active)},r.a.createElement(d.b,{to:"/dialogs",activeClassName:m.a.activeLink},"Messages")),r.a.createElement("div",{className:"".concat(m.a.item," ").concat(m.a.active)},r.a.createElement(d.b,{to:"/users",activeClassName:m.a.activeLink},"Users")),r.a.createElement("div",{className:m.a.item},r.a.createElement(d.b,{to:"/news",activeClassName:m.a.activeLink},"News")),r.a.createElement("div",{className:m.a.item},r.a.createElement(d.b,{to:"/music",activeClassName:m.a.activeLink},"Music")),r.a.createElement("div",{className:m.a.item},r.a.createElement(d.b,{to:"/settings",activeClassName:m.a.activeLink},"Settings")),r.a.createElement("div",{className:m.a.friendBlock},r.a.createElement("h2",null,"Friends"),r.a.createElement("div",{className:m.a.friendItem},r.a.createElement(d.b,{to:"/1",className:m.a.friendItem}),r.a.createElement("div",null,"Andrey")),r.a.createElement("div",{className:m.a.friendItem},r.a.createElement(d.b,{to:"/2",className:m.a.friendItem}),r.a.createElement("div",null,"Sveta")),r.a.createElement("div",{className:m.a.friendItem},r.a.createElement(d.b,{to:"/3",className:m.a.friendItem}),r.a.createElement("div",null,"Sasha"))))},h=(n(152),function(e){return r.a.createElement("div",null,"Music")}),v=(n(153),function(e){return r.a.createElement("div",null,"News")}),E=(n(154),function(e){return r.a.createElement("div",null,"Settings")}),b=n(62),O=n(86),w=n.n(O),S=n(70),_=n.n(S),j=function(e){var t=e.user,n=e.followingInProgress,a=e.unfollow,c=e.follow;return r.a.createElement("div",null,r.a.createElement("span",null,r.a.createElement("div",null,r.a.createElement(d.b,{to:"/profile/"+t.id},r.a.createElement("img",{src:null!=t.photos.small?t.photos.small:_.a,className:w.a.userPhoto}))),r.a.createElement("div",null,t.followed?r.a.createElement("button",{disabled:n.some((function(e){return e===t.id})),onClick:function(){a(t.id)}},"\u041e\u0442\u043f\u0438\u0441\u0430\u0442\u044c\u0441\u044f"):r.a.createElement("button",{disabled:n.some((function(e){return e===t.id})),onClick:function(){c(t.id)}},"\u041f\u043e\u0434\u043f\u0438\u0441\u0430\u0442\u044c\u0441\u044f"))),r.a.createElement("span",null,r.a.createElement("span",null,r.a.createElement("div",null,t.name),r.a.createElement("div",null,t.status)),r.a.createElement("span",null,r.a.createElement("div",null,"user.location.country"),r.a.createElement("div",null,"user.location.city"))))},P=n(46),C=n(68),y=n(48),k=n.n(y),N=n(57),I=n.n(N),T=function(e){for(var t=e.totalItemsCount,n=e.pageSize,c=e.currentPage,o=e.onPageChanged,u=e.portionSize,i=void 0===u?10:u,s=Math.ceil(t/n),l=[],f=1;f<=s;f++)l.push(f);var d=Math.ceil(s/i),p=Object(a.useState)(1),m=Object(C.a)(p,2),g=m[0],h=m[1],v=(g-1)*i+1,E=g*i;return r.a.createElement("div",{className:I()(k.a.paginator)},g>1&&r.a.createElement("button",{onClick:function(){h(g-1)}},"PREV"),l.filter((function(e){return e>=v&&e<=E})).map((function(e){return r.a.createElement("span",{className:I()(Object(P.a)({},k.a.selectedPage,c===e),k.a.pageNumber),key:e,onClick:function(t){o(e)}}," ",e," ")})),d>g&&r.a.createElement("button",{onClick:function(){h(g+1)}},"NEXT"))},U=function(e){var t=e.currentPage,n=e.totalUsersCount,a=e.pageSize,c=e.onPageChanged,o=e.users,u=Object(b.a)(e,["currentPage","totalUsersCount","pageSize","onPageChanged","users"]);return r.a.createElement("div",null,r.a.createElement(T,{currentPage:t,onPageChanged:c,totalItemsCount:n,pageSize:a}),r.a.createElement("div",null,o.map((function(e){return r.a.createElement(j,{user:e,key:e.id,followingInProgress:u.followingInProgress,unfollow:u.unfollow,follow:u.follow})}))))},x=n(21),L=n(4),A=n.n(L),D=n(10),F=n(23),R=n(2),z=n(8),G=function(e,t,n,a){return e.map((function(e){return e[n]===t?Object(R.a)(Object(R.a)({},e),a):e}))},M={users:[],currentPage:1,pageSize:10,totalUsersCount:19,isFetching:!1,followingInProgress:[]},H=function(e){return{type:"FOLLOW",userId:e}},W=function(e){return{type:"UNFOLLOW",userId:e}},B=function(e){return{type:"SET_CURRENT_PAGE",currentPage:e}},Y=function(e){return{type:"TOGGLE_IS_FETCHING",isFetching:e}},V=function(e,t){return{type:"TOGGLE_IS_FOLLOWING_PROGRESS",isFetching:e,userId:t}},X=function(){var e=Object(D.a)(A.a.mark((function e(t,n,a,r){return A.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t(V(!0,n)),e.next=3,a(n);case 3:0==e.sent.data.resultCode&&t(r(n)),t(V(!1,n));case 6:case"end":return e.stop()}}),e)})));return function(t,n,a,r){return e.apply(this,arguments)}}(),K=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:M,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"FOLLOW":return Object(R.a)(Object(R.a)({},e),{},{users:G(e.users,t.userId,"id",{followed:!0})});case"UNFOLLOW":return Object(R.a)(Object(R.a)({},e),{},{users:G(e.users,t.userId,"id",{followed:!1})});case"SET_USERS":return Object(R.a)(Object(R.a)({},e),{},{users:Object(F.a)(t.users)});case"SET_CURRENT_PAGE":return Object(R.a)(Object(R.a)({},e),{},{currentPage:t.currentPage});case"SET_TOTAL_USERS_COUNT":return Object(R.a)(Object(R.a)({},e),{},{totalUsersCount:t.totalCount});case"TOGGLE_IS_FETCHING":return Object(R.a)(Object(R.a)({},e),{},{isFetching:t.isFetching});case"TOGGLE_IS_FOLLOWING_PROGRESS":return Object(R.a)(Object(R.a)({},e),{},{followingInProgress:t.isFetching?[].concat(Object(F.a)(e.followingInProgress),[t.userId]):e.followingInProgress.filter((function(e){return e!=t.userId}))});default:return e}},Z=n(30),J=n(17),Q=n(90),$=Object(Q.a)((function(e){return e.usersPage.users}),(function(e){return e.filter((function(e){return!0}))})),q=function(e){return e.usersPage.pageSize},ee=function(e){return e.usersPage.totalUsersCount},te=function(e){return e.usersPage.currentPage},ne=function(e){return e.usersPage.isFetching},ae=function(e){return e.usersPage.followingInProgress},re=function(e){Object(s.a)(n,e);var t=Object(l.a)(n);function n(){var e;Object(u.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).onPageChanged=function(t){var n=e.props.pageSize;e.props.getUsers(t,n)},e}return Object(i.a)(n,[{key:"componentDidMount",value:function(){var e=this.props,t=e.currentPage,n=e.pageSize;this.props.getUsers(t,n)}},{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,this.props.isFetching?r.a.createElement(Z.a,null):null,r.a.createElement(U,{users:this.props.users,totalUsersCount:this.props.totalUsersCount,pageSize:this.props.pageSize,currentPage:this.props.currentPage,onPageChanged:this.onPageChanged,follow:this.props.follow,unfollow:this.props.unfollow,followingInProgress:this.props.followingInProgress}))}}]),n}(r.a.Component),ce=Object(J.d)(Object(x.b)((function(e){return{users:$(e),pageSize:q(e),totalUsersCount:ee(e),currentPage:te(e),isFetching:ne(e),followingInProgress:ae(e)}}),{unfollow:function(e){return function(){var t=Object(D.a)(A.a.mark((function t(n){return A.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:X(n,e,z.d.unfollow.bind(z.d),W);case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},follow:function(e){return function(){var t=Object(D.a)(A.a.mark((function t(n){return A.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:X(n,e,z.d.follow.bind(z.d),H);case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},setCurrentPage:B,toggleFollowingProgress:V,getUsers:function(e,t){return function(){var n=Object(D.a)(A.a.mark((function n(a){var r;return A.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return a(Y(!0)),a(B(e)),n.next=4,z.d.getUsers(e,t);case 4:r=n.sent,a(Y(!1)),a({type:"SET_USERS",users:r.data.items}),a({type:"SET_TOTAL_USERS_COUNT",totalCount:r.data.totalCount});case 8:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()}}))(re),oe=n(59),ue=n.n(oe),ie=function(e){return r.a.createElement("header",{className:ue.a.header},r.a.createElement("img",{src:"https://cdn.shopify.com/shopifycloud/hatchful-web/assets/6fcc76cfd1c59f44d43a485167fb3139.png"}),r.a.createElement("div",{className:ue.a.loginBlock},e.isAuth?r.a.createElement("div",null,e.login," - ",r.a.createElement("button",{onClick:e.logout},"log out")):r.a.createElement(d.b,{to:"/Login"},"login")))},se=n(31),le=function(e){Object(s.a)(n,e);var t=Object(l.a)(n);function n(){return Object(u.a)(this,n),t.apply(this,arguments)}return Object(i.a)(n,[{key:"render",value:function(){return r.a.createElement(ie,this.props)}}]),n}(r.a.Component),fe=Object(x.b)((function(e){return{isAuth:e.auth.isAuth,login:e.auth.login}}),{logout:se.d})(le),de={initialized:!1},pe=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:de,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"INITIALIZED_SUCCESS":return Object(R.a)(Object(R.a)({},e),{},{initialized:!0});default:return e}},me=n(63),ge=n(79),he=n(91),ve=n(85),Ee=Object(J.c)({ProfilePage:me.b,DialogsPage:ge.a,usersPage:K,auth:se.a,form:ve.a,app:pe}),be=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||J.d,Oe=Object(J.e)(Ee,be(Object(J.a)(he.a)));window.__store__=Oe;var we=Oe,Se=function(e){return function(t){return r.a.createElement(r.a.Suspense,{fallback:r.a.createElement(Z.a,null)},r.a.createElement(e,t))}},_e=r.a.lazy((function(){return Promise.all([n.e(0),n.e(6)]).then(n.bind(null,299))})),je=r.a.lazy((function(){return Promise.all([n.e(0),n.e(4)]).then(n.bind(null,300))})),Pe=r.a.lazy((function(){return Promise.all([n.e(0),n.e(5)]).then(n.bind(null,301))})),Ce=function(e){Object(s.a)(n,e);var t=Object(l.a)(n);function n(){var e;Object(u.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).catchAllUnhandledErrors=function(e,t){alert("Some error occured")},e}return Object(i.a)(n,[{key:"componentDidMount",value:function(){this.props.initializeApp(),window.addEventListener("unhandledrejection",this.catchAllUnhandledErrors)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("unhandledrejection",this.catchAllUnhandledErrors)}},{key:"render",value:function(){return this.props.initialized?r.a.createElement("div",{className:"app-wrapper"},r.a.createElement(fe,null),r.a.createElement(g,null),r.a.createElement("div",{className:"app-wrapper-content"},r.a.createElement(f.d,null,r.a.createElement(f.b,{exact:!0,path:"/",render:function(){return r.a.createElement(f.a,{to:"/profile"})}}),r.a.createElement(f.b,{path:"/login",render:Se(_e)}),r.a.createElement(f.b,{path:"/profile/:userId?",render:Se(je)}),r.a.createElement(f.b,{path:"/dialogs",render:Se(Pe)}),r.a.createElement(f.b,{path:"/users",render:function(){return r.a.createElement(ce,null)}}),r.a.createElement(f.b,{path:"/news",render:function(){return r.a.createElement(v,null)}}),r.a.createElement(f.b,{path:"/music",render:function(){return r.a.createElement(h,null)}}),r.a.createElement(f.b,{path:"/settings",render:function(){return r.a.createElement(E,null)}}),r.a.createElement(f.b,{path:"*",render:function(){return r.a.createElement("div",null,"404 NOT FOUND")}})))):r.a.createElement(Z.a,null)}}]),n}(a.Component),ye=Object(J.d)(f.g,Object(x.b)((function(e){return{initialized:e.app.initialized}}),{initializeApp:function(){return function(e){var t=e(Object(se.b)());Promise.all([t]).then((function(){e({type:"INITIALIZED_SUCCESS"})}))}}}))(Ce),ke=function(){return r.a.createElement(d.a,null,r.a.createElement(x.a,{store:we},r.a.createElement(ye,null)))};o.a.render(r.a.createElement(ke,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},30:function(e,t,n){"use strict";var a=n(0),r=n.n(a),c=n(89),o=n.n(c);t.a=function(){return r.a.createElement("div",null,r.a.createElement("img",{src:o.a}))}},31:function(e,t,n){"use strict";n.d(t,"b",(function(){return d})),n.d(t,"c",(function(){return p})),n.d(t,"d",(function(){return g}));var a=n(4),r=n.n(a),c=n(10),o=n(2),u=n(8),i=n(32),s={userId:null,email:null,login:null,isAuth:!1,captchaUrl:null},l=function(e,t,n,a){return{type:"auth/SET_USER_DATA",payload:{userId:e,email:t,login:n,isAuth:a}}},f=function(e){return{type:"auth/GET_CAPTCHA_URL_SUCCESS",payload:{captchaUrl:e}}},d=function(){return function(){var e=Object(c.a)(r.a.mark((function e(t){var n,a,c,o,i;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.a.me();case 2:0===(n=e.sent).data.resultCode&&(a=n.data.data,c=a.id,o=a.email,i=a.login,t(l(c,o,i,!0)));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},p=function(e,t,n,a){return function(){var o=Object(c.a)(r.a.mark((function c(o){var s,l;return r.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,u.a.login(e,t,n,a);case 2:0===(s=r.sent).data.resultCode?o(d()):(10===s.data.resultCode&&o(m()),l=s.data.messages.length>0?s.data.messages[0]:"Some error",o(Object(i.a)("login",{_error:l})));case 4:case"end":return r.stop()}}),c)})));return function(e){return o.apply(this,arguments)}}()},m=function(){return function(){var e=Object(c.a)(r.a.mark((function e(t){var n,a;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.c.getCaptchaUrl();case 2:n=e.sent,a=n.data.url,t(f(a));case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},g=function(){return function(){var e=Object(c.a)(r.a.mark((function e(t){return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.a.logout();case 2:0===e.sent.data.resultCode&&t(l(null,null,null,!1));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()};t.a=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:s,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"auth/SET_USER_DATA":case"auth/GET_CAPTCHA_URL_SUCCESS":return Object(o.a)(Object(o.a)({},e),t.payload);default:return e}}},48:function(e,t,n){e.exports={paginator:"Paginator_paginator__1Ds6u",pageNumber:"Paginator_pageNumber__1l6Au",selectedPage:"Paginator_selectedPage__LOKYZ"}},59:function(e,t,n){e.exports={header:"Header_header__2fx3k",loginBlock:"Header_loginBlock__3RSQH"}},6:function(e,t,n){e.exports={nav:"Nav_nav__3K7e6",item:"Nav_item__35ftU",activeLink:"Nav_activeLink__O1cG1",friendBlock:"Nav_friendBlock__1g4l2",friendItem:"Nav_friendItem__3nAXr"}},63:function(e,t,n){"use strict";n.d(t,"a",(function(){return f})),n.d(t,"d",(function(){return p})),n.d(t,"c",(function(){return m})),n.d(t,"g",(function(){return g})),n.d(t,"e",(function(){return h})),n.d(t,"f",(function(){return v}));var a=n(4),r=n.n(a),c=n(10),o=n(23),u=n(2),i=n(8),s=n(32),l={postsData:[{id:1,message:"Hi, how are you?",LikesCount:12},{id:2,message:"Hi meeeeen!!",LikesCount:11},{id:3,message:"Yo",LikesCount:11},{id:4,message:"Yo",LikesCount:11}],profile:null,status:""},f=function(e){return{type:"ADD_POST",newPostText:e}},d=function(e){return{type:"SET_STATUS",status:e}},p=function(e){return function(){var t=Object(c.a)(r.a.mark((function t(n){var a;return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i.b.getProfile(e);case 2:a=t.sent,n({type:"SET_USER_PROFILE",profile:a.data});case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},m=function(e){return function(){var t=Object(c.a)(r.a.mark((function t(n){var a;return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i.b.getStatus(e);case 2:a=t.sent,n(d(a.data));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},g=function(e){return function(){var t=Object(c.a)(r.a.mark((function t(n){return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i.b.updateStatus(e);case 2:0===t.sent.data.resultCode&&n(d(e));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},h=function(e){return function(){var t=Object(c.a)(r.a.mark((function t(n){var a;return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i.b.savePhoto(e);case 2:0===(a=t.sent).data.resultCode&&n({type:"SAVE_PHOTO_SUCCESS",photos:a.data.data.photos});case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},v=function(e){return function(){var t=Object(c.a)(r.a.mark((function t(n,a){var c,o;return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return c=a().auth.userId,t.next=3,i.b.saveProfile(e);case 3:if(0!==(o=t.sent).data.resultCode){t.next=8;break}n(p(c)),t.next=10;break;case 8:return n(Object(s.a)("edit-profile",{_error:o.data.messages[0]})),t.abrupt("return",Promise.reject(o.data.messages[0]));case 10:case"end":return t.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}()};t.b=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:l,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD_POST":var n={id:5,message:t.newPostText,LikesCount:0};return Object(u.a)(Object(u.a)({},e),{},{postsData:[].concat(Object(o.a)(e.postsData),[n]),newPostText:""});case"SET_USER_PROFILE":return Object(u.a)(Object(u.a)({},e),{},{profile:t.profile});case"SET_STATUS":return Object(u.a)(Object(u.a)({},e),{},{status:t.status});case"SAVE_PHOTO_SUCCESS":return Object(u.a)(Object(u.a)({},e),{},{profile:Object(u.a)(Object(u.a)({},e.profile),{},{photos:t.photos})});default:return e}}},70:function(e,t,n){e.exports=n.p+"static/media/archi-15.1babb798.jpg"},79:function(e,t,n){"use strict";n.d(t,"b",(function(){return o}));var a=n(23),r=n(2),c={dialogsData:[{id:1,name:"Dimych"},{id:2,name:"Andrey"},{id:3,name:"Sveta"},{id:4,name:"Sasha"},{id:5,name:"Viktor"}],messages:[{id:1,message:"Hi"},{id:2,message:"Hi meeen eee!!"},{id:3,message:"Yo"},{id:4,message:"Yo"},{id:5,message:"Yo"}]},o=function(e){return{type:"SEND_MESSAGE",newMessageText:e}};t.a=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:c,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SEND_MESSAGE":return Object(r.a)(Object(r.a)({},e),{},{messages:[].concat(Object(a.a)(e.messages),[{id:5,message:t.newMessageText}]),newMessageText:""});default:return e}}},8:function(e,t,n){"use strict";n.d(t,"d",(function(){return c})),n.d(t,"b",(function(){return o})),n.d(t,"a",(function(){return u})),n.d(t,"c",(function(){return i}));var a=n(88),r=a.create({baseURL:"https://social-network.samuraijs.com/api/1.0/",withCredentials:!0,headers:{"API-KEY":"a422b91f-124a-4b18-8f18-effef6e13fe2"}}),c={getUsers:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:5;return r.get("users?page=".concat(e,"&count=").concat(t))},follow:function(e){return r.post("follow/".concat(e))},unfollow:function(e){return r.delete("follow/".concat(e))}},o={getProfile:function(e){return r.get("profile/".concat(e))},getStatus:function(e){return r.get("profile/status/".concat(e))},updateStatus:function(e){return r.put("profile/status",{status:e})},savePhoto:function(e){var t=new FormData;return t.append("image",e),r.put("profile/photo",t,{headers:{"Content-Type":"multipart/form-data"}})},saveProfile:function(e){return r.put("profile",e)}},u={me:function(){return r.get("auth/me")},login:function(e,t){var n=arguments.length>2&&void 0!==arguments[2]&&arguments[2],a=arguments.length>3&&void 0!==arguments[3]?arguments[3]:null;return r.post("auth/login",{email:e,password:t,rememberMe:n,captcha:a})},logout:function(){return r.delete("auth/login")}},i={getCaptchaUrl:function(){return r.get("security/get-captcha-url")}}},86:function(e,t,n){e.exports={userPhoto:"users_userPhoto__3CDP5"}},89:function(e,t,n){e.exports=n.p+"static/media/35.2cafed70.svg"}},[[141,2,3]]]);
//# sourceMappingURL=main.2345645c.chunk.js.map
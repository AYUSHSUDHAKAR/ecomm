(this.webpackJsonpprojfrontend=this.webpackJsonpprojfrontend||[]).push([[0],{20:function(e,t,c){},36:function(e,t,c){"use strict";c.r(t);var n=c(0),a=c(1),r=c(3),s=c(5),o=c(4),i="https://ecommercerjbe.herokuapp.com/api",l=(c(20),function(){return"undefined"!=typeof window&&(!!localStorage.getItem("jwt")&&JSON.parse(localStorage.getItem("jwt")))}),d=function(e,t){return e.location.pathname===t?{color:"#198754"}:{color:"#FFFFFF"}},j=Object(s.g)((function(e){var t=e.history;return Object(n.jsx)("div",{children:Object(n.jsxs)("ul",{className:"nav nav-tabs bg-dark",children:[Object(n.jsx)("li",{className:"nav-item",children:Object(n.jsx)(r.b,{style:d(t,"/"),className:"nav-link",to:"/",children:"Home"})}),Object(n.jsx)("li",{className:"nav-item",children:Object(n.jsx)(r.b,{style:d(t,"/cart"),className:"nav-link",to:"/cart",children:"Cart"})}),l()&&0===l().user.role&&Object(n.jsx)("li",{className:"nav-item",children:Object(n.jsx)(r.b,{style:d(t,"/user/dashboard"),className:"nav-link",to:"/user/dashboard",children:"U. Dashboard"})}),l()&&1===l().user.role&&Object(n.jsx)("li",{className:"nav-item",children:Object(n.jsx)(r.b,{style:d(t,"/admin/dashboard"),className:"nav-link",to:"/admin/dashboard",children:"A. Dashboard"})}),!l()&&Object(n.jsxs)(a.Fragment,{children:[Object(n.jsx)("li",{className:"nav-item",children:Object(n.jsx)(r.b,{style:d(t,"/signup"),className:"nav-link",to:"/signup",children:"Signup"})}),Object(n.jsx)("li",{className:"nav-item",children:Object(n.jsx)(r.b,{style:d(t,"/signin"),className:"nav-link",to:"/signin",children:"Signin"})})]}),l()&&Object(n.jsx)("li",{className:"nav-item",children:Object(n.jsx)("span",{className:"nav-link text-warning",onClick:function(){!function(e){if("undefined"!==typeof window)localStorage.removeItem("jwt"),e(),fetch("".concat(i,"/signout"),{method:"GET"}).then((function(e){return console.log("signout success")})).catch((function(e){return console.log(e)}))}((function(){t.push("/")}))},children:"Signout"})})]})})})),b=function(e){var t=e.title,c=void 0===t?"My Title":t,a=e.description,r=void 0===a?"My Description":a,s=e.className,o=void 0===s?"bg-dark text-white p-4":s,i=e.children;return Object(n.jsxs)("div",{className:"top",children:[Object(n.jsx)(j,{}),Object(n.jsxs)("div",{className:"container-fluid",children:[Object(n.jsxs)("div",{className:"jumbotron bg-dark text-white text-center",children:[Object(n.jsx)("h2",{className:"display-4",children:c}),Object(n.jsx)("p",{className:"lead",children:r})]}),Object(n.jsx)("div",{className:o,children:i})]}),Object(n.jsx)("footer",{className:"footer bg-dark mt-auto py-3",children:Object(n.jsxs)("div",{className:"container-fluid bg-success text-white text-center",children:[Object(n.jsx)("h4",{children:"If you got any questions, feel free to contact"}),Object(n.jsx)("button",{className:"btn btn-warning btn-lg",children:"Contact Us"})]})})]})},u=c(2),m=function(e){var t=e.product,c=t?"".concat(i,"/product/photo/").concat(t._id):"https://via.placeholder.com/150";return Object(n.jsx)("div",{className:"rounded border border-success p-2",children:Object(n.jsx)("img",{src:c,alt:"photo",style:{maxHeight:"100%",maxWidth:"100%"},className:"mb-3 rounded"})})},h=function(e){var t=e.product,c=e.addToCart,r=void 0===c||c,i=e.removeFromCart,l=void 0!==i&&i,d=e.setReload,j=void 0===d?function(e){return e}:d,b=e.reload,h=void 0===b?void 0:b,p=Object(a.useState)(!1),O=Object(o.a)(p,2),x=O[0],f=O[1],g=Object(a.useState)(t.count),N=Object(o.a)(g,2),v=(N[0],N[1],t?t.name:"Some image placeholder"),y=t?t.description:"Some image description",w=t?t.price:"Price",k=function(){!function(e,t){var c=[];void 0!==typeof window&&(localStorage.getItem("cart")&&(c=JSON.parse(localStorage.getItem("cart"))),c.push(Object(u.a)(Object(u.a)({},e),{},{count:1})),localStorage.setItem("cart",JSON.stringify(c)),t())}(t,(function(){f(!0)}))};return Object(n.jsxs)("div",{className:"card text-white bg-dark border border-info ",children:[Object(n.jsx)("div",{className:"card-header lead",children:v}),Object(n.jsxs)("div",{className:"card-body",children:[function(e){if(e)return Object(n.jsx)(s.a,{to:"/cart"})}(x),Object(n.jsx)(m,{product:t}),Object(n.jsx)("p",{className:"lead bg-success font-weight-normal text-wrap",children:y}),Object(n.jsxs)("p",{className:"btn btn-success rounded btn-sm px-4",children:["$ ",w]}),Object(n.jsxs)("div",{className:"d-grid gap-1",children:[function(e){return e&&Object(n.jsx)("button",{onClick:k,className:"btn btn-outline-success mt-2 mb-2",children:"Add to Cart"})}(r),function(e){return e&&Object(n.jsx)("button",{onClick:function(){!function(e){var t=[];void 0!==typeof window&&(localStorage.getItem("cart")&&(t=JSON.parse(localStorage.getItem("cart"))),t.map((function(c,n){c._id===e&&t.splice(n,1)})),localStorage.setItem("cart",JSON.stringify(t)))}(t._id),j(!h)},className:"btn btn-outline-danger mt-2 mb-2",children:"Remove from cart"})}(l)]})]})]})},p=c(10),O=c.n(p),x=c(12),f=function(){var e=Object(x.a)(O.a.mark((function e(){var t,c;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(i,"/products"),{method:"GET"}).then((function(e){return e})).catch((function(e){console.log(e)}));case 2:return t=e.sent,e.next=5,t.json();case 5:return c=e.sent,e.abrupt("return",c);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();function g(){var e=Object(a.useState)([]),t=Object(o.a)(e,2),c=t[0],r=t[1],s=Object(a.useState)(!1),i=Object(o.a)(s,2),l=(i[0],i[1]);return Object(a.useEffect)((function(){f().then((function(e){e.error?l(e.error):r(e)}))})),Object(n.jsx)(b,{title:"Home Page",description:"This is homepage",children:Object(n.jsxs)("div",{className:"row text-center",children:[Object(n.jsx)("h1",{children:"All Products"}),Object(n.jsx)("div",{className:"row",children:c.map((function(e,t){return Object(n.jsx)("div",{className:"col-md-4",children:Object(n.jsx)(h,{product:e},t)})}))})]})})}var N=c(11),v=function(){var e=Object(a.useState)({email:"ayu@gmail.com",password:"123456",error:"",loading:!1,didRedirect:!1}),t=Object(o.a)(e,2),c=t[0],r=t[1],d=c.email,j=c.password,m=c.error,h=c.loading,p=c.didRedirect,O=l().user,x=function(e){return function(t){r(Object(u.a)(Object(u.a)({},c),{},Object(N.a)({error:!1},e,t.target.value)))}},f=function(e){e.preventDefault(),r(Object(u.a)(Object(u.a)({},c),{},{error:!1,loading:!0})),function(e){return fetch("".concat(i,"/signin"),{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify(e)}).then((function(e){return e.json()})).catch((function(e){return console.log(e)}))}({email:d,password:j}).then((function(e){e.error?r(Object(u.a)(Object(u.a)({},c),{},{error:e.error,loading:!0})):function(e,t){"undefined"!==typeof window&&(localStorage.setItem("jwt",JSON.stringify(e)),t())}(e,(function(){r(Object(u.a)(Object(u.a)({},c),{},{didRedirect:!0}))}))})).catch(console.log("signin request failed"))};return Object(n.jsxs)(b,{title:"Sign in page",description:"A page for users to signin",children:[h&&Object(n.jsx)("div",{className:"row",children:Object(n.jsx)("div",{className:"col-md-6 offset-sm-3 text-left",children:Object(n.jsx)("div",{className:"alert alert-info",children:Object(n.jsx)("h6",{children:"loading..."})})})}),Object(n.jsx)("div",{className:"row",children:Object(n.jsx)("div",{className:"col-md-6 offset-sm-3 text-left",children:Object(n.jsx)("div",{className:"alert alert-danger",style:{display:m?"":"none"},children:m})})}),Object(n.jsx)("div",{className:"row",children:Object(n.jsx)("div",{className:"col-md-6 offset-sm-3 text-left",children:Object(n.jsxs)("form",{children:[Object(n.jsxs)("div",{className:"form-group",children:[Object(n.jsx)("label",{className:"text-light",children:"Email"}),Object(n.jsx)("input",{onChange:x("email"),value:d,className:"form-control",type:"email"})]}),Object(n.jsxs)("div",{className:"form-group",children:[Object(n.jsx)("label",{className:"text-light",children:"Password"}),Object(n.jsx)("input",{onChange:x("password"),value:j,className:"form-control",type:"password"})]}),Object(n.jsx)("button",{onClick:f,className:"btn btn-success btn-block",children:"Sign-In"})]})})}),p?O&&1===O.role?Object(n.jsx)(s.a,{to:"/admin/dashboard"}):Object(n.jsx)(s.a,{to:"/user/dashboard"}):l()?Object(n.jsx)(s.a,{to:"/"}):void 0]})},y=function(){var e=Object(a.useState)({name:"",email:"",password:"",error:"",success:!1}),t=Object(o.a)(e,2),c=t[0],s=t[1],l=c.name,d=c.email,j=c.password,m=c.error,h=c.success,p=function(e){return function(t){s(Object(u.a)(Object(u.a)({},c),{},Object(N.a)({error:!1},e,t.target.value)))}},O=function(e){var t;e.preventDefault(),s(Object(u.a)(Object(u.a)({},c),{},{error:!1})),(t={name:l,email:d,password:j},fetch("".concat(i,"/signup"),{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify(t)}).then((function(e){return e.json()})).catch((function(e){return console.log(e)}))).then((function(e){e.error?s(Object(u.a)(Object(u.a)({},c),{},{error:e.error,success:!1})):s(Object(u.a)(Object(u.a)({},c),{},{name:"",email:"",error:"",password:"",success:!0}))})).catch(console.log("error in signup"))};return Object(n.jsxs)(b,{title:"Sign up page",description:"A page for users to signup",children:[Object(n.jsx)("div",{className:"row",children:Object(n.jsx)("div",{className:"col-md-6 offset-sm-3 text-left",children:Object(n.jsxs)("div",{className:"alert alert-success",style:{display:h?"":"none"},children:["New Account was created successfully. Please"," ",Object(n.jsx)(r.b,{to:"/signin",children:"Login Here"})," "]})})}),Object(n.jsx)("div",{className:"row",children:Object(n.jsx)("div",{className:"col-md-6 offset-sm-3 text-left",children:Object(n.jsx)("div",{className:"alert alert-danger",style:{display:m?"":"none"},children:m})})}),Object(n.jsx)("div",{className:"row",children:Object(n.jsx)("div",{className:"col-md-6 offset-sm-3",children:Object(n.jsxs)("form",{children:[Object(n.jsxs)("div",{className:"form-group",children:[Object(n.jsx)("label",{className:"text-light",children:"Name"}),Object(n.jsx)("input",{className:"form-control",type:"text",onChange:p("name"),value:l})]}),Object(n.jsxs)("div",{className:"form-group",children:[Object(n.jsx)("label",{className:"text-light",children:"Email"}),Object(n.jsx)("input",{className:"form-control",type:"email",onChange:p("email"),value:d})]}),Object(n.jsxs)("div",{className:"form-group",children:[Object(n.jsx)("label",{className:"text-light",children:"Password"}),Object(n.jsx)("input",{onChange:p("password"),className:"form-control",type:"password",value:j})]}),Object(n.jsx)("button",{type:"button",onClick:O,className:"btn btn-success btn-block",children:"Sign-Up"})]})})})]})},w=c(15),k=function(e){var t=e.component,c=Object(w.a)(e,["component"]);return Object(n.jsx)(s.b,Object(u.a)(Object(u.a)({},c),{},{render:function(e){return l()&&1===l().user.role?Object(n.jsx)(t,Object(u.a)({},e)):Object(n.jsx)(s.a,{to:{pathname:"/signin",state:{from:e.location}}})}}))},S=function(e){var t=e.component,c=Object(w.a)(e,["component"]);return Object(n.jsx)(s.b,Object(u.a)(Object(u.a)({},c),{},{render:function(e){return l()?Object(n.jsx)(t,Object(u.a)({},e)):Object(n.jsx)(s.a,{to:{pathname:"/signin",state:{from:e.location}}})}}))},C=function(){var e=l().user,t=e.name,c=e.email;e.role;return Object(n.jsx)(b,{className:"container bg-success p-3",title:"AdminDashBoard page",description:"Manage all of your products here",children:Object(n.jsxs)("div",{className:"row",children:[Object(n.jsx)("div",{className:"col-3",children:Object(n.jsxs)("div",{className:"card",children:[Object(n.jsx)("h4",{className:"card-header bg-dark text-white",children:"Admin Navigation"}),Object(n.jsxs)("ul",{className:"list-group",children:[Object(n.jsx)("li",{className:"list-group-item",children:Object(n.jsx)(r.b,{to:"/admin/create/category",className:"nav-link text-success",children:"Create Categories"})}),Object(n.jsx)("li",{className:"list-group-item",children:Object(n.jsx)(r.b,{to:"/admin/categories",className:"nav-link text-success",children:"Manage Categories"})}),Object(n.jsx)("li",{className:"list-group-item",children:Object(n.jsx)(r.b,{to:"/admin/create/product",className:"nav-link text-success",children:"Create Product"})}),Object(n.jsx)("li",{className:"list-group-item",children:Object(n.jsx)(r.b,{to:"/admin/products",className:"nav-link text-success",children:"Manage Product"})}),Object(n.jsx)("li",{className:"list-group-item",children:Object(n.jsx)(r.b,{to:"/admin/orders",className:"nav-link text-success",children:"Manage Order"})})]})]})}),Object(n.jsx)("div",{className:"col",children:Object(n.jsxs)("div",{className:"card mb-4",children:[Object(n.jsx)("h4",{className:"card-header",children:"Admin Information"}),Object(n.jsxs)("ul",{className:"list-group",children:[Object(n.jsxs)("li",{className:"list-group-item",children:[Object(n.jsx)("span",{className:"badge bg-success mr-2",children:"Name:"})," ",t]}),Object(n.jsxs)("li",{className:"list-group-item",children:[Object(n.jsx)("span",{className:"badge bg-success mr-2",children:"Email:"})," ",c]}),Object(n.jsx)("li",{className:"list-group-item",children:Object(n.jsx)("span",{className:"badge bg-danger mr-2",children:"Admin Area"})})]})]})})]})})},A=function(){return Object(n.jsx)(b,{title:"UserDashBoard page",children:Object(n.jsx)("h1",{children:"This is UserDashBoard page"})})},P=function(){return fetch("".concat(i,"/categories"),{method:"GET"}).then((function(e){return e.json()})).catch((function(e){return console.log(e)}))},D=function(){var e=Object(x.a)(O.a.mark((function e(t,c,n){var a,r;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log(n),e.next=3,fetch("".concat(i,"/product/create/").concat(t),{method:"POST",headers:{Accept:"application/json",Authorization:"Bearer ".concat(c)},body:n}).then((function(e){return e})).catch((function(e){return console.log(e)}));case 3:return a=e.sent,e.next=6,a.json();case 6:return r=e.sent,e.abrupt("return",r);case 8:case"end":return e.stop()}}),e)})));return function(t,c,n){return e.apply(this,arguments)}}(),T=function(){var e=Object(x.a)(O.a.mark((function e(t,c,n,a){var r,s;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(i,"/product/").concat(t,"/").concat(c),{method:"PUT",headers:{Accept:"application/json",Authorization:"Bearer ".concat(n)},body:a}).then((function(e){return e})).catch((function(e){return console.log(e)}));case 2:return r=e.sent,e.next=5,r.json();case 5:return s=e.sent,e.abrupt("return",s);case 7:case"end":return e.stop()}}),e)})));return function(t,c,n,a){return e.apply(this,arguments)}}(),I=function(){var e=Object(a.useState)(""),t=Object(o.a)(e,2),c=t[0],s=t[1],d=Object(a.useState)(!1),j=Object(o.a)(d,2),u=j[0],m=j[1],h=Object(a.useState)(!1),p=Object(o.a)(h,2),O=p[0],x=p[1],f=l(),g=f.user,N=f.token,v=function(e){m(""),s(e.target.value)},y=function(e){e.preventDefault(),m(""),x(!1),function(e,t,c){return fetch("".concat(i,"/category/create/").concat(e),{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json",Authorization:"Bearer ".concat(t)},body:JSON.stringify(c)}).then((function(e){return e.json()})).catch((function(e){return console.log(e)}))}(g._id,N,{name:c}).then((function(e){e.error?m(!0):(m(""),x(!0),s(""))}))};return Object(n.jsx)(b,{title:"Create category here",description:"Add a new category for tshirts",className:"container bg-info p-4",children:Object(n.jsx)("div",{className:" row bg-white rounded",children:Object(n.jsxs)("div",{className:"col-md-8 offset-md-2",children:[function(){if(O)return Object(n.jsxs)("h4",{className:"text-success",children:[c," category created successfully"]})}(),function(){if(u)return Object(n.jsx)("h4",{className:"text-success",children:"Failed to create category"})}(),Object(n.jsx)("form",{children:Object(n.jsxs)("div",{className:"form-group",children:[Object(n.jsx)("p",{className:"lead",children:"Enter the category"}),Object(n.jsx)("input",{type:"text",className:"form-control my-3",autoFocus:!0,required:!0,placeholder:"For Ex. Summer",onChange:v,value:c}),Object(n.jsx)("button",{className:"btn btn-outline-info mb-2",onClick:y,children:"Create Category"})]})}),Object(n.jsx)("div",{className:"mt-5",children:Object(n.jsx)(r.b,{className:"btn btn-sm btn-info mb-3",to:"/admin/dashboard",children:"Admin Home"})})]})})})},E=function(){return Object(n.jsx)(b,{children:Object(n.jsx)("h1",{className:"text-white"})})},F=function(){var e=Object(a.useState)([]),t=Object(o.a)(e,2),c=t[0],s=t[1],d=l(),j=d.user,u=d.token,m=function(){fetch("".concat(i,"/products"),{method:"GET"}).then((function(e){return e.json()})).catch((function(e){return console.log(e)})).then((function(e){e.error?console.log(e.error):s(e)}))};Object(a.useEffect)((function(){m()}),[]);var h=function(e){(function(e,t,c){return fetch("".concat(i,"/product/").concat(e,"/").concat(t),{method:"DELETE",headers:{Accept:"application/json","Content-Type":"application/json",Authorization:"Bearer ".concat(c)}}).then((function(e){return e.json()})).catch((function(e){return console.log(e)}))})(e,j._id,u).then((function(e){e.error?console.log(e.error):m()}))};return Object(n.jsxs)(b,{title:"Welcome admin",description:"Manage products here",children:[Object(n.jsx)("h2",{className:"mb-4",children:"All products:"}),Object(n.jsx)(r.b,{className:"btn btn-info",to:"/admin/dashboard",children:Object(n.jsx)("span",{className:"",children:"Admin Home"})}),Object(n.jsx)("div",{className:"row",children:Object(n.jsxs)("div",{className:"col-12",children:[Object(n.jsx)("h2",{className:"text-center text-white my-3",children:"Total 3 products"}),c.map((function(e,t){return Object(n.jsxs)("div",{className:"row text-center mb-2 ",children:[Object(n.jsx)("div",{className:"col-4",children:Object(n.jsx)("h3",{className:"text-white text-left",children:e.name})}),Object(n.jsx)("div",{className:"col-4",children:Object(n.jsx)(r.b,{className:"btn btn-success",to:"/admin/product/update/".concat(e._id),children:Object(n.jsx)("span",{className:"",children:"Update"})})}),Object(n.jsx)("div",{className:"col-4",children:Object(n.jsx)("button",{onClick:function(){h(e._id)},className:"btn btn-danger",children:"Delete"})})]})}))]})})]})},_=function(){var e=l(),t=e.user,c=e.token,s=Object(a.useState)({name:"",description:"",price:"",stock:"",photo:"",categories:[],category:"",loading:!1,error:"",createdProduct:"",getaRedirect:!1,formData:""}),i=Object(o.a)(s,2),d=i[0],j=i[1],m=d.name,h=d.description,p=d.price,O=d.stock,x=d.categories,f=(d.category,d.loading,d.error),g=d.createdProduct,v=(d.getaRedirect,d.formData);Object(a.useEffect)((function(){P().then((function(e){e.error?j(Object(u.a)(Object(u.a)({},d),{},{error:e.error})):j(Object(u.a)(Object(u.a)({},d),{},{categories:e,formData:new FormData}))}))}),[]);var y=function(e){e.preventDefault(),console.log(t._id,c,v),j(Object(u.a)(Object(u.a)({},d),{},{error:"",loading:!0})),D(t._id,c,v).then((function(e){console.log(e),e.error?j(Object(u.a)(Object(u.a)({},d),{},{error:e.error})):j(Object(u.a)(Object(u.a)({},d),{},{name:"",description:"",price:"",photo:"",stock:"",loading:!1,createdProduct:e.name}))})).catch()},w=function(e){return function(t){var c="photo"===e?t.target.files[0]:t.target.value;v.set(e,c),console.log(c),j(Object(u.a)(Object(u.a)({},d),{},Object(N.a)({},e,c)))}};return Object(n.jsxs)(b,{title:"Add product here",description:"Welcome to product creation section",className:"container bg-info p-4",children:[Object(n.jsx)(r.b,{to:"/admin/dashboard",className:"btn btn-dark btn-md mb-3",children:"Admin home"}),Object(n.jsx)("div",{className:"row bg-dark text-white rounded",children:Object(n.jsxs)("div",{className:"col-md-8 offset-md-2",children:[Object(n.jsx)("div",{className:"alert alert-success mt-3",style:{display:g?"":"none"},children:Object(n.jsxs)("h4",{children:[g," created successfully"]})}),Object(n.jsx)("div",{className:"alert alert-danger mt-3",style:{display:f?"":"none"},children:Object(n.jsxs)("h4",{children:[D," failed"]})}),Object(n.jsxs)("form",{children:[Object(n.jsx)("span",{children:"Post photo"}),Object(n.jsx)("div",{className:"form-group",children:Object(n.jsx)("label",{className:"btn btn-block btn-success my-3",children:Object(n.jsx)("input",{onChange:w("photo"),type:"file",name:"photo",accept:"image",placeholder:"choose a file"})})}),Object(n.jsx)("div",{className:"form-group mb-3",children:Object(n.jsx)("input",{onChange:w("name"),name:"photo",className:"form-control",placeholder:"Name",value:m})}),Object(n.jsx)("div",{className:"form-group mb-3",children:Object(n.jsx)("textarea",{onChange:w("description"),name:"photo",className:"form-control",placeholder:"Description",value:h})}),Object(n.jsx)("div",{className:"form-group mb-3",children:Object(n.jsx)("input",{onChange:w("price"),type:"number",className:"form-control",placeholder:"Price",value:p})}),Object(n.jsx)("div",{className:"form-group mb-3",children:Object(n.jsxs)("select",{onChange:w("category"),className:"form-control",placeholder:"Category",children:[Object(n.jsx)("option",{children:"Select"}),x&&x.map((function(e,t){return Object(n.jsx)("option",{value:e._id,children:e.name},t)}))]})}),Object(n.jsx)("div",{className:"form-group mb-3",children:Object(n.jsx)("input",{onChange:w("stock"),type:"number",className:"form-control",placeholder:"Stock",value:O})}),Object(n.jsx)("button",{type:"submit",onClick:y,className:"btn btn-outline-success mb-3",children:"Create Product"})]})]})})]})},J=function(e){var t=e.match,c=l(),s=c.user,d=c.token,j=Object(a.useState)({name:"",description:"",price:"",stock:"",photo:"",categories:[],category:"",loading:!1,error:"",createdProduct:"",getaRedirect:!1,formData:""}),m=Object(o.a)(j,2),h=m[0],p=m[1],O=h.name,x=h.description,f=h.price,g=h.stock,v=h.categories,y=(h.category,h.loading,h.error),w=h.createdProduct,k=(h.getaRedirect,h.formData),S=function(e){(function(e){return fetch("".concat(i,"/product/").concat(e),{method:"GET"}).then((function(e){return e.json()})).catch((function(e){return console.log(e)}))})(e).then((function(e){e.error?p(Object(u.a)(Object(u.a)({},h),{},{error:e.error})):(C(),p(Object(u.a)(Object(u.a)({},h),{},{name:e.name,price:e.price,description:e.description,category:e.category._id,stock:e.stock,formData:new FormData})))}))},C=function(){P().then((function(e){e.error?p(Object(u.a)(Object(u.a)({},h),{},{error:e.error})):p({categories:e,formData:new FormData})}))};Object(a.useEffect)((function(){console.log(t.params),S(t.params.productId)}),[]);var A=function(e){e.preventDefault(),console.log(s._id,d,k),p(Object(u.a)(Object(u.a)({},h),{},{error:"",loading:!0})),T(t.params.productId,s._id,d,k).then((function(e){console.log(e.error),e.error?p(Object(u.a)(Object(u.a)({},h),{},{error:e.error})):p(Object(u.a)(Object(u.a)({},h),{},{name:"",description:"",price:"",photo:"",stock:"",loading:!1,createdProduct:e.name}))})).catch()},D=function(e){return function(t){var c="photo"===e?t.target.files[0]:t.target.value;k.set(e,c),console.log(c),p(Object(u.a)(Object(u.a)({},h),{},Object(N.a)({},e,c)))}};return Object(n.jsxs)(b,{title:"Add product here",description:"Welcome to product creation section",className:"container bg-info p-4",children:[Object(n.jsx)(r.b,{to:"/admin/dashboard",className:"btn btn-dark btn-md mb-3",children:"Admin home"}),Object(n.jsx)("div",{className:"row bg-dark text-white rounded",children:Object(n.jsxs)("div",{className:"col-md-8 offset-md-2",children:[Object(n.jsx)("div",{className:"alert alert-success mt-3",style:{display:w?"":"none"},children:Object(n.jsxs)("h4",{children:[w," created successfully"]})}),Object(n.jsx)("div",{className:"alert alert-danger mt-3",style:{display:y?"":"none"},children:Object(n.jsxs)("h4",{children:[T," failed"]})}),Object(n.jsxs)("form",{children:[Object(n.jsx)("span",{children:"Post photo"}),Object(n.jsx)("div",{className:"form-group",children:Object(n.jsx)("label",{className:"btn btn-block btn-success my-3",children:Object(n.jsx)("input",{onChange:D("photo"),type:"file",name:"photo",accept:"image",placeholder:"choose a file"})})}),Object(n.jsx)("div",{className:"form-group mb-3",children:Object(n.jsx)("input",{onChange:D("name"),name:"photo",className:"form-control",placeholder:"Name",value:O})}),Object(n.jsx)("div",{className:"form-group mb-3",children:Object(n.jsx)("textarea",{onChange:D("description"),name:"photo",className:"form-control",placeholder:"Description",value:x})}),Object(n.jsx)("div",{className:"form-group mb-3",children:Object(n.jsx)("input",{onChange:D("price"),type:"number",className:"form-control",placeholder:"Price",value:f})}),Object(n.jsx)("div",{className:"form-group mb-3",children:Object(n.jsxs)("select",{onChange:D("category"),className:"form-control",placeholder:"Category",children:[Object(n.jsx)("option",{children:"Select"}),v&&v.map((function(e,t){return Object(n.jsx)("option",{value:e._id,children:e.name},t)}))]})}),Object(n.jsx)("div",{className:"form-group mb-3",children:Object(n.jsx)("input",{onChange:D("stock"),type:"number",className:"form-control",placeholder:"Stock",value:g})}),Object(n.jsx)("button",{type:"submit",onClick:A,className:"btn btn-outline-success mb-3",children:"Update Product"})]})]})})]})},R=c(23),U=function(e){var t=e.products,c=(e.setReload,e.reload,Object(a.useState)({loading:!1,success:!1,error:"",address:""})),s=Object(o.a)(c,2),d=(s[0],s[1],l()&&l().token),j=(l()&&l().user._id,function(){var e=Object(x.a)(O.a.mark((function e(c){var n,a,r,s,o,l;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(R.a)("pk_test_51I0Wb0KqHKGFHkOJqpgcf60Q0nZen14AjMGqf8wyUOIcstQUiKD8gazEnzI6BUcapiYnCOJv2zt6FR68swHAhdJl00970TZ1jQ");case 2:return n=e.sent,a=n,r={token:d,products:t},s={"Content-Type":"application/json"},e.next=8,fetch("".concat(i,"/stripepayment"),{method:"POST",headers:s,body:JSON.stringify(r)});case 8:return o=e.sent,console.log(o),e.next=12,o.json();case 12:l=e.sent,a.redirectToCheckout({sessionId:l.id}).error;case 15:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}());return Object(n.jsxs)("div",{children:[Object(n.jsxs)("h3",{children:["Stripe checkout ",function(){var e=0;return t.map((function(t){e+=t.price})),e}()]}),l()?Object(n.jsx)("button",{role:"link",className:"btn btn-success",onClick:j,children:"Pay with Stripe"}):Object(n.jsx)(r.b,{to:"/signin",children:Object(n.jsx)("button",{className:"btn btn-warning",children:"Signin"})})]})},B=function(){var e=Object(a.useState)([]),t=Object(o.a)(e,2),c=t[0],r=t[1],s=Object(a.useState)(!1),i=Object(o.a)(s,2),l=i[0],d=i[1];Object(a.useEffect)((function(){r(function(){if(void 0!==typeof window&&localStorage.getItem("cart"))return JSON.parse(localStorage.getItem("cart"))}())}),[l]);return Object(n.jsx)(b,{title:"Cart Page",description:"Ready to checkout",children:Object(n.jsxs)("div",{className:"row text-center",children:[Object(n.jsx)("div",{className:"col-6",children:Object(n.jsxs)("div",{children:[Object(n.jsx)("h2",{children:"This section is to load products"}),c.map((function(e,t){return Object(n.jsx)(h,{product:e,addToCart:!1,removeFromCart:!0,setReload:d,reload:l},t)}))]})}),Object(n.jsx)("div",{className:"col-6",children:Object(n.jsx)(U,{reload:l,products:c,setReload:d})})]})})};function H(){return Object(n.jsx)(r.a,{children:Object(n.jsxs)(s.d,{children:[Object(n.jsx)(s.b,{path:"/",exact:!0,component:g}),Object(n.jsx)(s.b,{path:"/signup",exact:!0,component:y}),Object(n.jsx)(s.b,{path:"/signin",exact:!0,component:v}),Object(n.jsx)(s.b,{path:"/cart",exact:!0,component:B}),Object(n.jsx)(S,{path:"/user/dashboard",exact:!0,component:A}),Object(n.jsx)(k,{path:"/admin/dashboard",exact:!0,component:C}),Object(n.jsx)(k,{path:"/admin/create/category",exact:!0,component:I}),Object(n.jsx)(k,{path:"/admin/categories",exact:!0,component:E}),Object(n.jsx)(k,{path:"/admin/create/product",exact:!0,component:_}),Object(n.jsx)(k,{path:"/admin/products",exact:!0,component:F}),Object(n.jsx)(k,{path:"/admin/product/update/:productId",exact:!0,component:J})]})})}var M=c(24);c.n(M).a.render(Object(n.jsx)(H,{}),document.getElementById("root"))}},[[36,1,2]]]);
//# sourceMappingURL=main.691e4067.chunk.js.map
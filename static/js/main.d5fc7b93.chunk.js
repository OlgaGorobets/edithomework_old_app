(this.webpackJsonpmy_editor=this.webpackJsonpmy_editor||[]).push([[0],{105:function(e,t,a){},106:function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),r=a(22),s=a(8),l=a(42),c=a(30),u=a(7),d=a(5),o=a(28),m=a.n(o),g="CHANGE_ACTIVE_PDF",p="CHANGE_TEXT_VALUE",f="REMOVE_TEXT_VALUE",_="ADD_NEW_TEXT_VALUE",b="REMOVE_MESSAGE",v="ADD_NEW_MESSAGE",x="ADD_FIRST_MESSAGE",h="REMOVE_PAGE",E="ADD_NEW_PAGE",O="SIGN_FORM",j="SIGN_OUT_FORM",y="SIGN_FORM_AND_ADD_NEW_PAGE",w="ADD_PDF",F="REMOVE_PDF",T="CHANGE_PDF_DATE",N="CHANGE_PAGE_DATE";function I(e){return{type:p,id:e.id,text:e.text,max_width:e.max_width,x:e.x,y:e.y,status:e.status}}function k(e){return{type:h,id:e}}function P(e){return{type:O,name:e.login,pass:e.pass}}function C(e){return{type:w,path:e.path,images:e.images,user_id:e.user_id}}function A(e){return{type:T,id:e}}function D(e){return{type:N,id:e}}function S(e,t){return!!(e.className&&e.className.split&&e.className.split(" ").indexOf(t)>=0)||e.parentNode&&S(e.parentNode,t)}function R(e){var t=e?new Date(e):new Date,a=""+["Jan","Feb","March","Apr","May","June","July","Aug","Sep","Oct","Nov","Dec"][t.getMonth()],n=""+t.getDate(),i=t.getFullYear(),r=t.getHours(),s=t.getMinutes();return a.length<2&&(a="0"+a),n.length<2&&(n="0"+n),n+" "+a+","+i+" "+r+":"+s}var G={current_user:{id:0},users:[{id:0,name:"Olka",pass:"123"},{id:1,name:"Barabolka",pass:"123"}],pdfs:[{path:"some path1",id:0,user_id:0,load_date:"",last_edit_date:"",images:["/uploads/photos/photo_pdf \u0431\u0438\u043b\u0435\u0442\u0430.png","../photos/2.jpg","../photos/3.jpg","../photos/4.jpg","../photos/5.jpg","../photos/6.jpg","../photos7.jpg","../photos/8.jpg"]},{path:"some path2",id:1,user_id:0,load_date:"",last_edit_date:"",images:["../photos/2.jpg"]}],texts:[{text:"testing text1",x:0,y:0,page_id:0,image_index:0,id:0,max_width:"auto",status:"ok"},{text:"testing text2",x:100,y:100,page_id:0,image_index:0,id:1,max_width:"auto",status:null}],messages:[{id:0,user_id:null,text_id:0,text:"message1",date:"date1"},{id:1,user_id:0,text_id:0,text:"message2",date:"date2"}],active_pdf_index:0,pages:[{name:"page 1",id:0,pdf_id:0,user_id:0},{name:"page 2",id:1,pdf_id:1,user_id:0},{name:"page 3",id:2,pdf_id:0,user_id:0}]};var M=a(29),U=a(46),z=a(32),L=a(24),B=a(15),H=a(9),W=a(43),J=a(11),V=a(20),Y=a(49),X=a(34),q=a(40),K=a(12),Q=function(e){var t={login:"",pass:"",name:""},a={login:!1,pass:!1,name:!1},r={name:e.addPage,login:e.signIn,pass:e.signIn},s=Object(n.useState)(!1),l=Object(J.a)(s,2),c=l[0],u=l[1],o=Object(n.useState)(Object(d.a)({},t)),m=Object(J.a)(o,2),g=m[0],p=m[1],f=Object(n.useState)(Object(d.a)({},a)),_=Object(J.a)(f,2),b=_[0],v=_[1],x=function(){return u(!1)},h=function(e){p(Object(d.a)({},g,Object(W.a)({},e.target.getAttribute("name"),e.target.value))),v(Object(d.a)({},a)),console.log(b,"errors"),console.log(e.target.getAttribute("name"))},E="",O="",j="",y="";return e.signIn&&(E=i.a.createElement(q.a,null,i.a.createElement(q.a.Body,null,i.a.createElement(q.a.Title,null,"Login or Register ",i.a.createElement("small",null,"(if you don't have an account)")),i.a.createElement(q.a.Text,null,i.a.createElement("div",null,i.a.createElement(Y.a.Control,{name:"login",type:"text",value:g.login,placeholder:"Login",onChange:h}),b.login?i.a.createElement(X.a,{variant:"danger"},"Required field"):i.a.createElement(i.a.Fragment,null)),i.a.createElement("div",null,i.a.createElement(Y.a.Control,{name:"pass",type:"password",value:g.pass,placeholder:"Password",onChange:h}),b.pass?i.a.createElement(X.a,{variant:"danger"},"Required field"):i.a.createElement(i.a.Fragment,null)))))),e.sureRemove&&(O=i.a.createElement("div",null,"Are you sure? You won't be able to recover this page! ")),e.sureRemovePdf&&(j=i.a.createElement("div",null,"Are you sure? You won't be able to recover this Pdf and all pages created from this Pdf will be removed! ")),e.addPage&&(y=i.a.createElement("div",null,i.a.createElement(Y.a.Control,{type:"text",name:"name",value:g.name,placeholder:"Name",onChange:h}),b.name?i.a.createElement(X.a,{variant:"danger"},"Required field"):i.a.createElement(i.a.Fragment,null))),i.a.createElement(i.a.Fragment,null,i.a.createElement(H.a,{size:"sm",variant:"primary",onClick:function(){return u(!0)}},e.button.icon?i.a.createElement(K.a,{icon:e.button.icon}):"",e.button.title),i.a.createElement(V.a,{show:c,onHide:x,animation:!1},i.a.createElement(V.a.Header,{closeButton:!0},i.a.createElement(V.a.Title,null,e.title)),i.a.createElement(V.a.Body,null,E,"",O,j,y),i.a.createElement(V.a.Footer,null,e.buttons.map((function(e,a){return i.a.createElement(H.a,{size:"sm",key:a,variant:"secondary",onClick:function(){(function(){var e=!0,t={};for(var a in r)if(r[a]){var n=0==g[a].trim().length;t[a]=n,n&&(e=!1)}else t[a]=!1;return v(Object(d.a)({},t)),e})()&&("function"===typeof e.func&&e.func(g),x(),p(Object(d.a)({},t)))}},e.title)})))))},Z=Object(s.b)((function(e){return{current_user:e.current_user,users:e.users}}))((function(e){var t=e.current_user,a=e.users,n=e.dispatch,r={signIn:!0,signUp:!1,title:"Login or Register",button:{title:"Login or Register"},buttons:[{title:"Cancel"},{title:"Ok",func:function(e){n(P(e))}}]},s=null;if(null!==t.id){var l=a.filter((function(e){return e.id==t.id}));s=l.length>0?l[0]:null}return i.a.createElement(B.a,null,null==t.id?i.a.createElement(B.a.Item,null,i.a.createElement(Q,r)):i.a.createElement(B.a.Item,null,"Hello, ",s?s.name:""," ",i.a.createElement(H.a,{onClick:function(){n({type:j})},variant:"primary",size:"sm"},"SignOut")))})),$=Z=Object(s.b)()(Z),ee=a(10),te=a(27),ae=function(e){var t=e.pdf,a=e.dispatch,n={signIn:!1,signUp:!1,sureRemovePdf:!0,title:"Remove Pdf File",button:{title:"Remove"},buttons:[{title:"Cancel"},{title:"Remove it!",func:function(){var e;a((e=t.id,{type:F,id:e}))}}]};return i.a.createElement(B.a.Item,{className:t.is_active?"list-group-item-primary":""},i.a.createElement(H.a,{variant:"link",onClick:function(e){var n;e.preventDefault(),a((n=t.index,{type:g,index:n}))}},i.a.createElement("span",null,t.path)," ",i.a.createElement(K.a,{icon:ee.c})),null!==t.current_user.id&&t.user&&t.current_user.id==t.user.id?i.a.createElement(te.a,{className:"mr-2"},i.a.createElement(Q,n)):i.a.createElement(i.a.Fragment,null),t.user?i.a.createElement("div",null,i.a.createElement("small",null,"Loaded by ",t.user.id==t.current_user.id?"you":t.user.name," ",t.load_date),i.a.createElement("div",null,i.a.createElement("small",null,"Last pages edits - ",t.last_edit_date))):i.a.createElement(i.a.Fragment,null))},ne=ae=Object(s.b)()(ae),ie=a(69),re=Object(s.b)((function(e){return{current_user:e.current_user}}))((function(e){var t=e.current_user,a=e.dispatch,r=Object(n.useState)(null),s=Object(J.a)(r,2),l=s[0],c=s[1],u=Object(n.useState)(null),m=Object(J.a)(u,2),g=m[0],p=m[1],f=Object(n.useState)({show:!1,title:"",text:""}),_=Object(J.a)(f,2),b=_[0],v=_[1],x=function(e){var t=new FormData;t.append("file",e);return Object(o.post)("/upload.php",t,{headers:{"content-type":"multipart/form-data"}})};return i.a.createElement(i.a.Fragment,null,i.a.createElement("form",{onSubmit:function(e){e.preventDefault(),l&&p(!0),x(l).then((function(e){p(!1);var n=e.data;0==n.error&&a(C({path:n.file,images:JSON.parse(n.images),user_id:t.id}))}))}},i.a.createElement("h5",null,"Upload Pdf File"),g?i.a.createElement("span",null,i.a.createElement(ie.a,{animation:"border",variant:"secondary"}),"Wait please, File is Loading..."):i.a.createElement(i.a.Fragment,null,i.a.createElement("div",{className:"custom-file"},i.a.createElement("input",{type:"file",className:"custom-file-input",id:"inputGroupFile01","aria-describedby":"inputGroupFileAddon01",onChange:function(e){c(e.target.files[0]),e.target.files[0]&&(p(!0),x(e.target.files[0]).then((function(e){p(!1);var n=e.data;0==n.error?a(C({path:n.file,images:JSON.parse(n.images),user_id:t.id})):v(Object(d.a)({},b,{show:!0,title:"File Upload Error",text:"File wasn't loaded. "+n.error}))})).catch((function(e){p(!1),v(Object(d.a)({},b,{show:!0,title:"File Upload Error",text:"File wasn't loaded. Somthing went wrong..."}))})))},size:"sm"}),i.a.createElement("label",{className:"custom-file-label",size:"sm",htmlFor:"inputGroupFile01"},"Choose file"),i.a.createElement("button",{type:"submit",style:{display:"none"}},"Upload")))),i.a.createElement(V.a,{show:b.show,onHide:function(){v(Object(d.a)({},b,{show:!1}))}},i.a.createElement(V.a.Header,{closeButton:!0},i.a.createElement(V.a.Title,null,b.title)),i.a.createElement(V.a.Body,null,b.text),i.a.createElement(V.a.Footer,null,i.a.createElement(H.a,{variant:"primary",onClick:function(){v(Object(d.a)({},b,{show:!1}))}},"Ok"))))})),se=Object(s.b)((function(e){return{pdfs:e.pdfs,active_pdf_index:e.active_pdf_index,users:e.users,current_user:e.current_user}}))((function(e){var t=e.pdfs,a=e.active_pdf_index,n=e.users,r=e.current_user,s=e.dispatch,l={signIn:!0,signUp:!1,title:"Login or Register to Upload File",button:{title:"Upload Pdf File",icon:ee.h},buttons:[{title:"Cancel"},{title:"Ok",func:function(e){s(P(e))}}]};return i.a.createElement(B.a,{className:"list-group-flush"},t.map((function(e,t){var s=n.filter((function(t){return t.id==e.user_id})),l=s.length>0?s[0]:null,c=Object(d.a)({},e,{is_active:t===a,index:t,user:l,current_user:r});return i.a.createElement(ne,Object.assign({key:t},{pdf:c}))})),i.a.createElement(B.a.Item,null,null==r.id?i.a.createElement(Q,l):i.a.createElement(re,null)))})),le=function(e){var t=e.page,a=e.dispatch,n={signIn:!1,signUp:!1,sureRemove:!0,title:"Remove Page",button:{title:"Remove"},buttons:[{title:"Cancel"},{title:"Remove it!",func:function(){a(A(t.pdf_id)),a(k(t.id))}}]};return i.a.createElement(B.a.Item,null,i.a.createElement(c.b,{to:"/pages/"+t.id},i.a.createElement("span",null,t.name)," ",i.a.createElement(K.a,{icon:ee.e})),t.user&&t.user.id==t.current_user.id?i.a.createElement(te.a,{className:"mr-2"},i.a.createElement(Q,n)):i.a.createElement(i.a.Fragment,null),t.user?i.a.createElement("div",null,i.a.createElement("small",null,"Added by ",t.user.id==t.current_user.id?"you":t.user.name," ",t.load_date),i.a.createElement("div",null,i.a.createElement("small",null,"Last edit - ",t.last_edit_date))):i.a.createElement(i.a.Fragment,null))},ce=le=Object(s.b)()(le),ue=Object(s.b)((function(e){return{pages:e.pages,pdfs:e.pdfs,active_pdf_index:e.active_pdf_index,users:e.users,current_user:e.current_user}}))((function(e){var t=e.pages,a=e.pdfs,n=e.active_pdf_index,r=e.users,s=e.current_user,l=e.dispatch,c=a.length>0?a[n].id:null,u=t.filter((function(e){return c==e.pdf_id})),o={signIn:!1,signUp:!1,addPage:!0,title:"Add New Page",button:{title:"Add New Page",icon:ee.h},buttons:[{title:"Cancel"},{title:"Add Page",func:function(e){var t;l(A(c)),l((t={name:e.name,pdf_id:c,user_id:s.id},{type:E,name:t.name,pdf_id:t.pdf_id,user_id:t.user_id}))}}]},m={signIn:!0,signUp:!0,addPage:!0,title:"Add New Page",button:{title:"Add New Page",icon:ee.h},buttons:[{title:"Cancel"},{title:"Ok",func:function(e){var t;l(A(c)),l((t={name:e.name,pdf_id:c,login:e.login,pass:e.pass},{type:y,name:t.name,pdf_id:t.pdf_id,login:t.login,pass:t.pass}))}}]};return i.a.createElement(B.a,{className:"list-group-flush"},u.map((function(e,t){var a=r.filter((function(t){return t.id==e.user_id})),n=a.length>0?a[0]:null,l=Object(d.a)({},e,{user:n,current_user:s});return i.a.createElement(ce,Object.assign({key:t},{page:l}))})),i.a.createElement(B.a.Item,null,null!==s.id?i.a.createElement(Q,o):i.a.createElement(Q,m)))})),de=Object(s.b)((function(e){return{pdfs:e.pdfs,active_pdf_index:e.active_pdf_index}}))((function(e){e.pdfs,e.active_pdf_index;return i.a.createElement(i.a.Fragment,null,i.a.createElement(L.a,null,i.a.createElement($,null)),i.a.createElement(L.a,null,i.a.createElement(se,null)),i.a.createElement(L.a,null,i.a.createElement(ue,null)))})),oe=(a(101),function(e){var t=e.images,a=e.activeIndex,r=e.items,s=e.onPageChange,l=(e.pageId,Object(n.useState)(0)),c=Object(J.a)(l,2),u=c[0],d=c[1],o=Object(n.useState)(0),m=Object(J.a)(o,2),g=m[0],p=m[1],f=Object(n.useState)(t),_=Object(J.a)(f,2),b=_[0],v=_[1],x=function(e,a){e.preventDefault();var n=parseInt(t.length/r),i="next"==a?u<n?u+1:0:0==u?n:u-1;if(d(i),!(g>=r*i&&g<r*i+r)){var l=r*i;p(l),window.location.hash="#page_"+l,"function"==typeof s&&s({selected:l})}v(t.filter((function(e,t){return t>=r*i&&t<r*i+r})))};return Object(n.useEffect)((function(){var e=u,n=window.location.hash;if(-1!==n.indexOf("#page_")){var i=parseInt(n.replace("#page_",""));!isNaN(i)&&i>0&&i<t.length&&(a=i)}console.log(a,"activeIndex"),a>0&&(p(a),"function"==typeof s&&s({selected:a}),a>r*u+r&&(e=parseInt(a/r),d(e))),v(t.filter((function(t,a){return a>=r*e&&a<r*e+r}))),console.log("--pag->>>")}),[t]),i.a.createElement("div",{className:"imagePreviewsContainer"},i.a.createElement("div",{className:"imagePreviewsPrev",onClick:function(e){x(e,"prev")}},i.a.createElement(K.a,{icon:ee.d})),i.a.createElement("div",{className:"imagePreviews"},i.a.createElement(i.a.Fragment,null,console.log(b,"--\x3e>render inages")),b.map((function(e,t){var a=e.replace(".png","_preview.png").replace(".jpg","_preview.jpg");return i.a.createElement("div",{onClick:function(e){e.preventDefault();var a=r*u+t;p(a),window.location.hash="#page_"+a,"function"==typeof s&&s({selected:a})},className:g==r*u+t?"active imagePreview":"imagePreview"},i.a.createElement("img",{src:a}),i.a.createElement("span",{className:"imagePreviewNumber"},i.a.createElement("span",null,r*u+t+1)))}))),i.a.createElement("div",{onClick:function(e){x(e,"next")},className:"imagePreviewsNext"},i.a.createElement(K.a,{icon:ee.b})))}),me=function(e){var t=e.page,a=e.newTextId,r=e.dispatch;console.log(t,"page");var s={visibility:"hidden",left:0,top:0,value:"",width:0,height:0,imageTextId:null},l={remove:"visible",move:"visible",warning:"visible",ok:"visible",message:"visible"},c={warning:!1,ok:!1,message:!0},o=Object(n.useRef)(null),m=Object(n.useState)([]),g=Object(J.a)(m,2),p=g[0],h=g[1],E=Object(n.useState)([]),O=Object(J.a)(E,2),j=O[0],y=O[1],w=Object(n.useState)(""),F=Object(J.a)(w,2),T=F[0],N=F[1],P=Object(n.useState)(0),C=Object(J.a)(P,2),G=C[0],M=C[1],B=Object(n.useState)(Object(d.a)({},s)),W=Object(J.a)(B,2),V=W[0],Y=W[1],q=Object(n.useState)(Object(d.a)({},l)),Z=Object(J.a)(q,2),$=Z[0],ae=Z[1],ne=Object(n.useState)(Object(d.a)({},c)),ie=Object(J.a)(ne,2),re=ie[0],se=ie[1],le=Object(n.useState)(!1),ce=Object(J.a)(le,2),ue=(ce[0],ce[1]),de={signIn:!1,signUp:!1,sureRemove:!0,title:"Remove Page",button:{title:"Remove"},buttons:[{title:"Cancel"},{title:"Remove it!",func:function(){r(k(t.id))}}]},me=function(e,a){var n;r((n=a.id,{type:b,id:n})),r(D(t.id)),r(A(t.pdf_id)),pe().then((function(e){h(Object(u.a)(fe(p,{id:V.imageTextId,visibility:"hidden"})));var a=t.texts.filter((function(e){return e.id==V.imageTextId}))[0].messages;y(Object(u.a)(a))}))},ge=function(e){if(T.trim().length>0){e.preventDefault();var n=V.imageTextId;null==V.imageTextId?(r((i={text:"",max_width:0,x:V.left,y:V.top,page_id:t.id,image_index:G,id:a,user_id:t.current_user.id,msgText:T,date:R()},{type:x,user_id:i.user_id,msgText:i.msgText,date:i.date,text:i.text,max_width:i.max_width,x:i.x,y:i.y,page_id:i.page_id,image_index:i.image_index,id:i.id})),r(D(t.id)),r(A(t.pdf_id)),Y(Object(d.a)({},V,{imageTextId:a})),n=a,console.log(a,"newTextId")):(r(function(e){return{type:v,user_id:e.user_id,text_id:e.text_id,text:e.text,date:e.date}}({text:T,date:R(),text_id:V.imageTextId,user_id:t.current_user.id})),r(D(t.id)),r(A(t.pdf_id))),pe().then((function(e){h(Object(u.a)(fe(_e(),{id:n,visibility:"hidden"})));var a=t.texts.filter((function(e){return e.id==n}));a.length>0&&y(Object(u.a)(a[0].messages)),N("")}))}var i},pe=function(){var e=o.current.getContext("2d"),a=new Image;return a.src=t.pdf.images[G],new Promise((function(t){a.onload=function(){var n=1e3*a.height/a.width;e.canvas.width=1e3,e.canvas.height=n,e.clearRect(0,0,e.canvas.width,e.canvas.height),e.drawImage(a,0,0,1e3,n),h(_e()),t({status:"ok"})}}))},fe=function(e,t){return e.map((function(e){var a="visible";return void 0!==t&&e.id==t.id&&(a=t.visibility),e.visibility=a,e}))},_e=function(){var e=t.texts.filter((function(e){return e.image_index==G}));return e.forEach((function(e){e.messages=t.messages.filter((function(t){return t.text_id==e.id}))})),fe(e)};return Object(n.useEffect)((function(){pe(G),console.log("---ed---\x3e>>")}),[G]),i.a.createElement(U.a,{onClick:function(e){S(e.target,"imageTexts")||(ue(!1),Y(Object(d.a)({},s)),h(Object(u.a)(fe(p))))}},i.a.createElement(z.a,null,i.a.createElement(L.a,null,i.a.createElement("h2",null,t.name," "),t.user?i.a.createElement("div",null,i.a.createElement("small",null,"Added by ",t.user.id==t.current_user.id?"you":t.user.name," ",t.load_date),i.a.createElement("div",null,i.a.createElement("small",null,"Last edit - ",t.last_edit_date))):i.a.createElement(i.a.Fragment,null)),i.a.createElement(L.a,null,t.user&&t.user.id==t.current_user.id?i.a.createElement(te.a,{className:"mr-2"},i.a.createElement(Q,de)):i.a.createElement(i.a.Fragment,null),i.a.createElement(oe,{images:t.pdf.images,items:5,onPageChange:function(e){M(e.selected)},activeIndex:0,pageId:t.id}))),i.a.createElement(z.a,null,i.a.createElement("div",{className:"imageParent"},i.a.createElement("canvas",{ref:o}),i.a.createElement("div",{className:"imageTexts",onClick:function(e){if(!S(e.target,"imageText")&&!S(e.target,"imageTextFileldParent")){ae(Object(d.a)({},l,{remove:"hidden",ok:"hidden",warning:"hidden"})),se(Object(d.a)({},c));var t=e.target.getBoundingClientRect();Y(Object(d.a)({},s,{visibility:"visible",width:120,height:30,left:e.clientX-t.x,top:e.clientY-t.y})),y([]),h(Object(u.a)(fe(p)))}}},p.map((function(e,a){return i.a.createElement("div",{key:a,style:{position:"absolute",zIndex:3,left:e.x,top:e.y,maxWidth:e.max_width,visibility:e.visibility,borderWidth:t.user&&t.user.id==t.current_user.id||""!=e.text?1:0},className:e.status?"imageText "+e.status+"Text":"imageText",onClick:function(t){!function(e,t,a,n,i){e.preventDefault(),e.stopPropagation(),ue(!1),ae(Object(d.a)({},l)),se(Object(d.a)({},c,{warning:"warning"==a,ok:"ok"==a}));var r=e.currentTarget.getBoundingClientRect();Y({visibility:"visible",left:e.currentTarget.offsetLeft,top:e.currentTarget.offsetTop,value:i,width:r.width+30,height:r.height>30?r.height:30,imageTextId:t}),y(Object(u.a)(n)),h(Object(u.a)(fe(p,{id:t,visibility:"hidden"})))}(t,e.id,e.status,e.messages,e.text)}},i.a.createElement("span",null,e.text),e.messages.length>0?i.a.createElement(H.a,{variant:"primary",size:"sm"},i.a.createElement(K.a,{icon:ee.f}),e.messages.length):i.a.createElement(i.a.Fragment,null))})),i.a.createElement("div",{className:"imageTextFileldParent",style:{left:V.left,top:V.top,visibility:V.visibility}},i.a.createElement("textarea",{disabled:!(t.user&&t.user.id==t.current_user.id),placeholder:"Your text...",onChange:function(e){if(Y(Object(d.a)({},V,{value:e.target.value})),e.target.value.trim().length>0)if(null==V.imageTextId){r((n={text:e.target.value,max_width:e.target.offsetWidth,x:V.left,y:V.top,page_id:t.id,image_index:G,id:a},{type:_,text:n.text,max_width:n.max_width,x:n.x,y:n.y,page_id:n.page_id,image_index:n.image_index,id:n.id})),r(D(t.id)),r(A(t.pdf_id)),ae(Object(d.a)({},l,{remove:"visible"})),Y(Object(d.a)({},V,{imageTextId:a,value:e.target.value}));e.target.value;pe().then((function(e){h(Object(u.a)(fe(_e(),{id:V.imageTextId,visibility:"hidden"})))}))}else r(I({text:e.target.value,id:V.imageTextId,max_width:e.target.offsetWidth,x:V.left,y:V.top})),r(D(t.id)),r(A(t.pdf_id)),h(Object(u.a)(fe(_e(),{id:V.imageTextId,visibility:"hidden"})));var n},style:{width:""!=V.value||t.user&&t.user.id==t.current_user.id?V.width:0,borderWidth:t.user&&t.user.id==t.current_user.id?1:0,height:V.height,resize:t.user&&t.user.id==t.current_user.id?"both":"none"},value:V.value,className:re.warning?"form-control form-control-warning imageTextFileld":re.ok?"form-control form-control-ok imageTextFileld":"form-control imageTextFileld",rows:"1"}),i.a.createElement("div",{className:"imageTextFileldButtons"},t.user&&t.user.id==t.current_user.id?i.a.createElement(H.a,{style:{display:"visible"==$.remove?"inline":"none"},onClick:function(e){var a;r((a=V.imageTextId,{type:f,id:a})),r(D(t.id)),r(A(t.pdf_id)),Y(Object(d.a)({},s)),pe()},variant:"outline-primary",size:"sm"},i.a.createElement(K.a,{icon:ee.i})):i.a.createElement(i.a.Fragment,null),i.a.createElement(H.a,{style:{display:"visible"==$.warning?"inline":"none"},onClick:function(e){e.preventDefault(),e.stopPropagation(),r(I({text:V.value,id:V.imageTextId,max_width:V.max_width,x:V.left,y:V.top,status:re.warning?null:"warning"})),r(D(t.id)),r(A(t.pdf_id)),se(Object(d.a)({},c,{warning:!re.warning,ok:!!re.warning&&re.ok})),pe().then((function(e){h(Object(u.a)(fe(p,{id:V.imageTextId,visibility:"hidden"})))}))},variant:re.warning?"danger":"outline-danger",size:"sm"},i.a.createElement(K.a,{icon:ee.g})),i.a.createElement(H.a,{style:{display:"visible"==$.ok?"inline":"none"},onClick:function(e){e.preventDefault(),e.stopPropagation(),r(I({text:V.value,id:V.imageTextId,max_width:V.max_width,x:V.left,y:V.top,status:re.ok?null:"ok"})),r(D(t.id)),r(A(t.pdf_id)),se(Object(d.a)({},c,{warning:!!re.ok&&re.warning,ok:!re.ok})),pe().then((function(e){h(Object(u.a)(fe(p,{id:V.imageTextId,visibility:"hidden"})))}))},variant:re.ok?"success":"outline-success",size:"sm"},i.a.createElement(K.a,{icon:ee.a})),i.a.createElement(H.a,{style:{display:"visible"==$.message?"inline":"none"},onClick:function(){se(Object(d.a)({},re,{message:!re.message}))},variant:re.message?"primary":"outline-primary",size:"sm"},i.a.createElement(K.a,{icon:ee.f}))),i.a.createElement("div",{className:"imageTextFileldMessageParent",style:{display:re.message?"block":"none"}},i.a.createElement(X.a,{variant:"primary"},j.map((function(e,a){var n=t.users.filter((function(t){return t.id==e.user_id})),r=n.length>0?n[0]:null;return i.a.createElement("div",{key:a},i.a.createElement("div",null,r?i.a.createElement(i.a.Fragment,null,r.id==t.current_user.id?"you":r.name,", "):i.a.createElement(i.a.Fragment,null,"unsigned user, ")," ",e.date),i.a.createElement("div",null,e.text),r&&r.id==t.current_user.id&&i.a.createElement(H.a,{onClick:function(t){me(0,e)},variant:"outline-primary",size:"sm"},i.a.createElement(K.a,{icon:ee.i})),i.a.createElement("hr",null))})),i.a.createElement("div",null,i.a.createElement("textarea",{onChange:function(e){N(e.target.value)},placeholder:"Your message...",className:"form-control imageTextFileldMessageField",rows:"4",value:T}),i.a.createElement(te.a,{className:"imageTextFileldMessageBtn"}," ",i.a.createElement(H.a,{className:"simpBtn",onClick:function(e){ge(e)},variant:"primary",size:"sm"},"Add Message")," ")))))))))},ge=me=Object(s.b)()(me),pe=Object(s.b)((function(e){return{pages:e.pages,pdfs:e.pdfs,texts:e.texts,messages:e.messages,users:e.users,current_user:e.current_user}}))((function(e){var t=e.pages,a=e.pdfs,n=e.texts,r=e.messages,s=e.users,l=e.current_user,u=(e.history,Object(M.e)().id),d=t.filter((function(e){return e.id==u})),o=d.length>0?d[0]:null,m=n.length>0?n[n.length-1].id+1:0;if(null!==o){var g=a.filter((function(e){return e.id==o.pdf_id})),p=g.length>0?g[0]:null;o.pdf=p;var f=n.filter((function(e){return e.page_id==u}));o.texts=f,o.texts&&(o.messages=r),o.users=s,o.current_user=l;var _=s.filter((function(e){return e.id==o.user_id})),b=_.length>0?_[0]:null;o.user=b}return i.a.createElement(i.a.Fragment,null,i.a.createElement(c.b,{to:"/"},"Go Back"),null===o?i.a.createElement(i.a.Fragment,null,"Page Not Found"):i.a.createElement(ge,{page:o,newTextId:m}))})),fe=Object(M.f)(pe);a(105);var _e=Object(s.b)()(Object(M.f)((function(e){return e.location,e.dispatch,Object(n.useEffect)((function(){!function(){var e=["users","pages","texts","pdfs","messages"],t=[];e.forEach((function(e){var a=new FormData;a.append("action","get"),a.append("data",""),a.append("name","users"),t.push(Object(o.post)("/db.php",a))})),m.a.all(t).then(m.a.spread((function(){for(var t=arguments.length,a=new Array(t),n=0;n<t;n++)a[n]=arguments[n];var i=[];e.forEach((function(e,t){i[e]=a[t]})),console.log(i,"res")}))).catch((function(e){}))}(),console.log("get users")}),[]),i.a.createElement(U.a,null,i.a.createElement("h1",null,"EditHomework"),i.a.createElement(z.a,null,i.a.createElement(M.a,{exact:!0,path:"/",component:de}),i.a.createElement(M.a,{exact:!0,path:"/pages/:id",component:fe})))}))),be=Object(l.b)((function(){var e,t,a,n,i,r,s,l,c,m,I,k=arguments.length>0&&void 0!==arguments[0]?arguments[0]:G,P=arguments.length>1?arguments[1]:void 0,C=function(e,t){var a=JSON.stringify(t),n=new FormData;n.append("name",e),n.append("action","set"),n.append("data",a),Object(o.post)("/db.php",n).then((function(t){console.log(t,"saved",e)}))};switch(P.type){case g:return Object(d.a)({},k,{active_pdf_index:P.index});case p:return C("texts",e=k.texts.map((function(e){return e.id==P.id&&(e.text=P.text,e.max_width=P.max_width,e.x=P.x,e.y=P.y,e.status=P.status,e.last_edit_date=R()),e}))),Object(d.a)({},k,{texts:e});case _:return n={text:P.text,x:P.x,y:P.y,page_id:P.page_id,image_index:P.image_index,id:P.id,max_width:P.max_width,status:null,load_date:R(),last_edit_date:R()},C("texts",[].concat(Object(u.a)(k.texts),[n])),Object(d.a)({},k,{texts:[].concat(Object(u.a)(k.texts),[n])});case v:return i={id:a=k.messages.length>0?k.messages[k.messages.length-1].id+1:0,user_id:P.user_id,text_id:P.text_id,text:P.text,date:P.date},C("messages",[].concat(Object(u.a)(k.messages),[i])),Object(d.a)({},k,{messages:[].concat(Object(u.a)(k.messages),[i])});case x:return n={text:P.text,x:P.x,y:P.y,page_id:P.page_id,image_index:P.image_index,id:P.id,max_width:P.max_width,status:null},i={id:a=k.messages.length>0?k.messages[k.messages.length-1].id+1:0,user_id:P.user_id,text_id:P.id,text:P.msgText,date:P.date},C("messages",[].concat(Object(u.a)(k.messages),[i])),C("texts",[].concat(Object(u.a)(k.texts),[n])),Object(d.a)({},k,{texts:[].concat(Object(u.a)(k.texts),[n]),messages:[].concat(Object(u.a)(k.messages),[i])});case E:return a=k.pages.length>0?k.pages[k.pages.length-1].id+1:0,s={name:P.name,id:a,pdf_id:P.pdf_id,user_id:P.user_id,load_date:R(),last_edit_date:R()},C("pages",[].concat(Object(u.a)(k.pages),[s])),Object(d.a)({},k,{pages:[].concat(Object(u.a)(k.pages),[s])});case f:return e=k.texts.filter((function(e){return e.id!==P.id})),t=k.messages.filter((function(e){return e.text_id!==P.id})),C("texts",e),C("messages",t),Object(d.a)({},k,{texts:e,messages:t});case b:return C("messages",t=k.messages.filter((function(e){return e.id!==P.id}))),Object(d.a)({},k,{messages:t});case h:r=k.pages.filter((function(e){return e.id!==P.id})),e=k.texts.filter((function(e){return e.page_id!==P.id}));var A=k.texts.filter((function(e){return e.page_id==P.id})).map((function(e){return e.id}));return C("messages",t=k.messages.filter((function(e){return-1==A.indexOf(e.text_id)}))),C("texts",e),C("pages",r),Object(d.a)({},k,{pages:r,texts:e,messages:t});case O:return l=null,c=Object(u.a)(k.users),(m=k.users.filter((function(e){return e.name==P.name&&e.pass==P.pass}))).length>0?l=m[0].id:(a=k.users.length>0?k.users[k.users.length-1].id+1:0,c=[].concat(Object(u.a)(k.users),[{id:a,name:P.name,pass:P.pass}]),l=a),C("users",Object(u.a)(c)),Object(d.a)({},k,{current_user:{id:l},users:Object(u.a)(c)});case j:return Object(d.a)({},k,{current_user:{id:null}});case y:return l=null,c=Object(u.a)(k.users),(m=k.users.filter((function(e){return e.name==P.login&&e.pass==P.pass}))).length>0?l=m[0].id:(a=k.users.length>0?k.users[k.users.length-1].id+1:0,c=[].concat(Object(u.a)(k.users),[{id:a,name:P.login,pass:P.pass}]),l=a),I=k.pages.length>0?k.pages[k.pages.length-1].id+1:0,s={name:P.name,id:I,pdf_id:P.pdf_id,user_id:l,load_date:R(),last_edit_date:R()},C("pages",[].concat(Object(u.a)(k.pages),[s])),C("users",Object(u.a)(c)),Object(d.a)({},k,{pages:[].concat(Object(u.a)(k.pages),[s]),current_user:{id:l},users:Object(u.a)(c)});case w:var D={id:a=k.pdfs.length>0?k.pdfs[k.pdfs.length-1].id+1:0,path:P.path,images:P.images,user_id:P.user_id,load_date:R(),last_edit_date:R()};return C("pdfs",[].concat(Object(u.a)(k.pdfs),[D])),Object(d.a)({},k,{pdfs:[].concat(Object(u.a)(k.pdfs),[D])});case F:return r=k.pages.map((function(e){return e.id==P.id&&(e.last_edit_date=R()),e})),C("pages",Object(u.a)(r)),Object(d.a)({},k,{pages:Object(u.a)(r)});case T:var S=k.pdfs.map((function(e){return e.id==P.id&&(e.last_edit_date=R()),e}));return C("pdfs",Object(u.a)(S)),Object(d.a)({},k,{pdfs:Object(u.a)(S)});case N:return console.log(P.id,"page action"),r=k.pages.map((function(e){return e.id==P.id&&(e.last_edit_date=R()),e})),C("pages",Object(u.a)(r)),Object(d.a)({},k,{pages:Object(u.a)(r)});default:return k}}));Object(r.render)(i.a.createElement(s.a,{store:be},i.a.createElement(c.a,null,i.a.createElement(_e,null))),document.getElementById("root"))},71:function(e,t,a){e.exports=a(106)}},[[71,1,2]]]);
//# sourceMappingURL=main.d5fc7b93.chunk.js.map
(this.webpackJsonpmy_editor=this.webpackJsonpmy_editor||[]).push([[0],{104:function(e,t,a){},105:function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),r=a(21),s=a(8),l=a(40),u=a(27),c=a(7),d=a(6),o="CHANGE_ACTIVE_PDF",m="CHANGE_TEXT_VALUE",g="REMOVE_TEXT_VALUE",p="ADD_NEW_TEXT_VALUE",f="REMOVE_MESSAGE",_="ADD_NEW_MESSAGE",b="ADD_FIRST_MESSAGE",x="REMOVE_PAGE",v="ADD_NEW_PAGE",h="SIGN_FORM",E="SIGN_OUT_FORM",O="SIGN_FORM_AND_ADD_NEW_PAGE";function j(e){return{type:m,id:e.id,text:e.text,max_width:e.max_width,x:e.x,y:e.y,status:e.status}}function y(e){return{type:x,id:e}}var w={current_user:{id:0},users:[{id:0,name:"Olka",pass:"123"},{id:1,name:"Barabolka",pass:"123"}],pdfs:[{path:"some path1",id:0,user_id:0,images:["/uploads/photos/photo_pdf \u0431\u0438\u043b\u0435\u0442\u0430.png","../photos/2.jpg","../photos/3.jpg","../photos/4.jpg","../photos/5.jpg","../photos/6.jpg","../photos7.jpg","../photos/8.jpg"]},{path:"some path2",id:1,user_id:0,images:["../photos/2.jpg"]}],texts:[{text:"testing text1",x:0,y:0,page_id:0,image_index:0,id:0,max_width:"auto",status:"ok"},{text:"testing text2",x:100,y:100,page_id:0,image_index:0,id:1,max_width:"auto",status:null}],messages:[{id:0,user_id:null,text_id:0,text:"message1",date:"date1"},{id:1,user_id:0,text_id:0,text:"message2",date:"date2"}],active_pdf_index:0,pages:[{name:"page 1",id:0,pdf_id:0,user_id:0},{name:"page 2",id:1,pdf_id:1,user_id:0},{name:"page 3",id:2,pdf_id:0,user_id:0}]};var T=a(26),k=a(45),I=a(29),C=a(23),F=a(14),N=a(9),A=a(41),D=a(15),P=a(33),R=a(48),S=a(31),M=a(38),G=a(13),L=function(e){console.log(e,"datatatat");var t={login:"",pass:"",name:""},a={login:!1,pass:!1,name:!1},r={name:e.addPage,login:e.signIn,pass:e.signIn},s=Object(n.useState)(!1),l=Object(D.a)(s,2),u=l[0],c=l[1],o=Object(n.useState)(Object(d.a)({},t)),m=Object(D.a)(o,2),g=m[0],p=m[1],f=Object(n.useState)(Object(d.a)({},a)),_=Object(D.a)(f,2),b=_[0],x=_[1],v=function(){return c(!1)};console.log(b,"fieldsErrorsfieldsErrorsfieldsErrorsfieldsErrors");var h=function(e){p(Object(d.a)({},g,Object(A.a)({},e.target.getAttribute("name"),e.target.value))),x(Object(d.a)({},a)),console.log(b,"errors"),console.log(e.target.getAttribute("name"))},E="",O="",j="";return e.signIn&&(E=i.a.createElement(M.a,null,i.a.createElement(M.a.Body,null,i.a.createElement(M.a.Title,null,"Login or Register ",i.a.createElement("small",null,"(if you don't have an account)")),i.a.createElement(M.a.Text,null,i.a.createElement("div",null,i.a.createElement(R.a.Control,{name:"login",type:"text",value:g.login,placeholder:"Login",onChange:h}),b.login?i.a.createElement(S.a,{variant:"danger"},"Required field"):i.a.createElement(i.a.Fragment,null)),i.a.createElement("div",null,i.a.createElement(R.a.Control,{name:"pass",type:"password",value:g.pass,placeholder:"Password",onChange:h}),b.pass?i.a.createElement(S.a,{variant:"danger"},"Required field"):i.a.createElement(i.a.Fragment,null)))))),e.sureRemove&&(O=i.a.createElement("div",null,"Are you sure? You won't be able to recover this page! ")),e.addPage&&(j=i.a.createElement("div",null,i.a.createElement(R.a.Control,{type:"text",name:"name",value:g.name,placeholder:"Name",onChange:h}),b.name?i.a.createElement(S.a,{variant:"danger"},"Required field"):i.a.createElement(i.a.Fragment,null))),i.a.createElement(i.a.Fragment,null,i.a.createElement(N.a,{size:"sm",variant:"primary",onClick:function(){return c(!0)}},e.button.icon?i.a.createElement(G.a,{icon:e.button.icon}):"",e.button.title),i.a.createElement(P.a,{show:u,onHide:v,animation:!1},i.a.createElement(P.a.Header,{closeButton:!0},i.a.createElement(P.a.Title,null,e.title)),i.a.createElement(P.a.Body,null,E,"",O,j),i.a.createElement(P.a.Footer,null,e.buttons.map((function(e,a){return i.a.createElement(N.a,{size:"sm",key:a,variant:"secondary",onClick:function(){(function(){var e=!0,t={};for(var a in r)if(r[a]){var n=0==g[a].trim().length;t[a]=n,n&&(e=!1)}else t[a]=!1;return x(Object(d.a)({},t)),e})()&&("function"===typeof e.func&&e.func(g),v(),p(Object(d.a)({},t)))}},e.title)})))))},U=Object(s.b)((function(e){return{current_user:e.current_user,users:e.users}}))((function(e){var t=e.current_user,a=e.users,n=e.dispatch,r={signIn:!0,signUp:!1,title:"Login or Register",button:{title:"Login or Register"},buttons:[{title:"Cancel"},{title:"Ok",func:function(e){n(function(e){return{type:h,name:e.login,pass:e.pass}}(e))}}]},s=null;if(null!==t.id){var l=a.filter((function(e){return e.id==t.id}));s=l.length>0?l[0]:null}return i.a.createElement(F.a,null,null==t.id?i.a.createElement(F.a.Item,null,i.a.createElement(L,r)):i.a.createElement(F.a.Item,null,"Hello, ",s?s.name:""," ",i.a.createElement(N.a,{onClick:function(){n({type:E})},variant:"primary",size:"sm"},"SignOut")))})),z=U=Object(s.b)()(U),B=a(10),W=function(e){var t=e.pdf,a=e.dispatch;return i.a.createElement(F.a.Item,{className:t.is_active?"list-group-item-primary":""},i.a.createElement(N.a,{variant:"link",onClick:function(e){var n;e.preventDefault(),a((n=t.index,{type:o,index:n}))}},i.a.createElement("span",null,t.path)," ",i.a.createElement(G.a,{icon:B.b})),i.a.createElement(N.a,{variant:"link",onClick:function(e){e.preventDefault()}},i.a.createElement(G.a,{icon:B.g})),t.user?i.a.createElement("div",null,i.a.createElement("small",null,"(Loaded by ",t.user.id==t.current_user.id?"you":t.user.name,")")):i.a.createElement(i.a.Fragment,null))},V=W=Object(s.b)()(W),H=a(68),J=Object(s.b)((function(e){return{pdfs:e.pdfs,active_pdf_index:e.active_pdf_index,users:e.users,current_user:e.current_user}}))((function(e){e.pdfs,e.active_pdf_index,e.users,e.current_user,e.dispatch;var t=Object(n.useState)(null),a=Object(D.a)(t,2),r=a[0],s=a[1];return i.a.createElement("form",{onSubmit:function(e){e.preventDefault(),function(e){var t=new FormData;t.append("file",e);return Object(H.post)("/upload.php",t,{headers:{"content-type":"multipart/form-data"}})}(r).then((function(e){console.log(e.data)}))}},i.a.createElement("h1",null,"File Upload"),i.a.createElement("input",{type:"file",onChange:function(e){s(e.target.files[0])}}),i.a.createElement("button",{type:"submit"},"Upload Pdf File"))})),Y=Object(s.b)((function(e){return{pdfs:e.pdfs,active_pdf_index:e.active_pdf_index,users:e.users,current_user:e.current_user}}))((function(e){var t=e.pdfs,a=e.active_pdf_index,n=e.users,r=e.current_user,s={signIn:!0,signUp:!0,title:"Add PDF file",button:{title:"Add PDF file",icon:B.f},buttons:[{title:"Cancel"},{title:"Ok",func:function(){console.log("is ok",t)}}]};return i.a.createElement(F.a,{className:"list-group-flush"},t.map((function(e,t){var s=n.filter((function(t){return t.id==e.user_id})),l=s.length>0?s[0]:null,u=Object(d.a)({},e,{is_active:t===a,index:t,user:l,current_user:r});return i.a.createElement(V,Object.assign({key:t},{pdf:u}))})),i.a.createElement(F.a.Item,null,null==r.id?i.a.createElement(L,s):i.a.createElement(J,null)))})),X=a(44),q=function(e){var t=e.page,a=e.dispatch,n={signIn:!1,signUp:!1,sureRemove:!0,title:"Remove",button:{title:"Remove"},buttons:[{title:"Cancel"},{title:"Remove it!",func:function(){a(y(t.id))}}]};return i.a.createElement(F.a.Item,null,i.a.createElement(u.b,{to:"/pages/"+t.id},i.a.createElement("span",null,t.name)," ",i.a.createElement(G.a,{icon:B.c})),t.user&&t.user.id==t.current_user.id?i.a.createElement(X.a,{className:"mr-2"},i.a.createElement(L,n)):i.a.createElement(i.a.Fragment,null),t.user?i.a.createElement("div",null,i.a.createElement("small",null,"(Added by ",t.user.id==t.current_user.id?"you":t.user.name,")")):i.a.createElement(i.a.Fragment,null))},K=q=Object(s.b)()(q),Q=Object(s.b)((function(e){return{pages:e.pages,pdfs:e.pdfs,active_pdf_index:e.active_pdf_index,users:e.users,current_user:e.current_user}}))((function(e){var t=e.pages,a=e.pdfs,n=e.active_pdf_index,r=e.users,s=e.current_user,l=e.dispatch,u=a.length>0?a[n].id:null,c=t.filter((function(e){return u==e.pdf_id})),o={signIn:!1,signUp:!1,addPage:!0,title:"Add New Page",button:{title:"Add New Page",icon:B.f},buttons:[{title:"Cancel"},{title:"Add Page",func:function(e){var t;l((t={name:e.name,pdf_id:u,user_id:s.id},{type:v,name:t.name,pdf_id:t.pdf_id,user_id:t.user_id}))}}]},m={signIn:!0,signUp:!0,addPage:!0,title:"Add New Page",button:{title:"Add New Page",icon:B.f},buttons:[{title:"Cancel"},{title:"Ok",func:function(e){var a;l((a={name:e.name,pdf_id:u,login:e.login,pass:e.pass},{type:O,name:a.name,pdf_id:a.pdf_id,login:a.login,pass:a.pass})),console.log(e,"fieldsValue"),console.log("is ok",t)}}]};return i.a.createElement(F.a,{className:"list-group-flush"},c.map((function(e,t){var a=r.filter((function(t){return t.id==e.user_id})),n=a.length>0?a[0]:null,l=Object(d.a)({},e,{user:n,current_user:s});return i.a.createElement(K,Object.assign({key:t},{page:l}))})),i.a.createElement(F.a.Item,null,null!==s.id?i.a.createElement(L,o):i.a.createElement(L,m)))})),Z=Object(s.b)((function(e){return{pdfs:e.pdfs,active_pdf_index:e.active_pdf_index}}))((function(e){e.pdfs,e.active_pdf_index;return i.a.createElement(i.a.Fragment,null,i.a.createElement(C.a,null,i.a.createElement(z,null)),i.a.createElement(C.a,null,i.a.createElement(Y,null)),i.a.createElement(C.a,null,i.a.createElement(Q,null)))})),$=a(70),ee=a.n($);function te(e,t){return!!(e.className&&e.className.split&&e.className.split(" ").indexOf(t)>=0)||e.parentNode&&te(e.parentNode,t)}function ae(e){var t=e?new Date(e):new Date,a=""+["Jan","Feb","March","Apr","May","June","July","Aug","Sep","Oct","Nov","Dec"][t.getMonth()],n=""+t.getDate(),i=t.getFullYear().toString().substr(-2);return a.length<2&&(a="0"+a),n.length<2&&(n="0"+n),n+" "+a+","+i}var ne=function(e){var t=e.page,a=e.newTextId,r=e.dispatch;console.log(t,"page");var s={visibility:"hidden",left:0,top:0,value:"",width:0,height:0,imageTextId:null},l={remove:"visible",move:"visible",warning:"visible",ok:"visible",message:"visible"},u={warning:!1,ok:!1,message:!0},o=Object(n.useRef)(null),m=Object(n.useState)([]),x=Object(D.a)(m,2),v=x[0],h=x[1],E=Object(n.useState)([]),O=Object(D.a)(E,2),w=O[0],T=O[1],F=Object(n.useState)(""),A=Object(D.a)(F,2),P=A[0],R=A[1],M=Object(n.useState)(0),U=Object(D.a)(M,2),z=U[0],W=U[1],V=Object(n.useState)(Object(d.a)({},s)),H=Object(D.a)(V,2),J=H[0],Y=H[1],q=Object(n.useState)(Object(d.a)({},l)),K=Object(D.a)(q,2),Q=K[0],Z=K[1],$=Object(n.useState)(Object(d.a)({},u)),ne=Object(D.a)($,2),ie=ne[0],re=ne[1],se=Object(n.useState)(!1),le=Object(D.a)(se,2),ue=(le[0],le[1]),ce={signIn:!1,signUp:!1,sureRemove:!0,title:"Remove",button:{title:"Remove"},buttons:[{title:"Cancel"},{title:"Remove it!",func:function(){r(y(t.id))}}]},de=function(e,a){var n;r((n=a.id,{type:f,id:n})),oe().then((function(e){h(Object(c.a)(me(v,{id:J.imageTextId,visibility:"hidden"})));var a=t.texts.filter((function(e){return e.id==J.imageTextId}))[0].messages;T(Object(c.a)(a))}))},oe=function(){var e=o.current.getContext("2d"),a=new Image;return a.src=t.pdf.images[z],new Promise((function(t){a.onload=function(){var n=1e3*a.height/a.width;e.canvas.width=1e3,e.canvas.height=n,e.clearRect(0,0,e.canvas.width,e.canvas.height),e.drawImage(a,0,0,1e3,n),h(ge()),t({status:"ok"})}}))},me=function(e,t){return e.map((function(e){var a="visible";return void 0!==t&&e.id==t.id&&(a=t.visibility),e.visibility=a,e}))},ge=function(){var e=t.texts.filter((function(e){return e.image_index==z}));return e.forEach((function(e){e.messages=t.messages.filter((function(t){return t.text_id==e.id}))})),console.log(e,"teataal;ala;;"),me(e)};return Object(n.useEffect)((function(){oe(z)}),[z]),i.a.createElement(k.a,{onClick:function(e){te(e.target,"imageTexts")||(ue(!1),Y(Object(d.a)({},s)),h(Object(c.a)(me(v))))}},i.a.createElement(I.a,null,i.a.createElement(C.a,null,i.a.createElement("h2",null,t.name," "),t.user?i.a.createElement("div",null,i.a.createElement("small",null,"(Added by ",t.user.id==t.current_user.id?"you":t.user.name,")")):i.a.createElement(i.a.Fragment,null)),i.a.createElement(C.a,null,t.user&&t.user.id==t.current_user.id?i.a.createElement(X.a,{className:"mr-2"},i.a.createElement(L,ce)):i.a.createElement(i.a.Fragment,null),i.a.createElement(ee.a,{previousLabel:"previous",nextLabel:"next",breakLabel:"...",breakClassName:"break-me",pageCount:t.pdf.images.length,marginPagesDisplayed:2,pageRangeDisplayed:5,onPageChange:function(e){W(e.selected)},containerClassName:"pagination",subContainerClassName:"pages pagination",activeClassName:"active"}))),i.a.createElement(I.a,null,i.a.createElement("div",{className:"imageParent"},i.a.createElement("canvas",{ref:o}),i.a.createElement("div",{className:"imageTexts",onClick:function(e){if(!te(e.target,"imageText")&&!te(e.target,"imageTextFileldParent")){Z(Object(d.a)({},l,{remove:"hidden",ok:"hidden",warning:"hidden"})),re(Object(d.a)({},u));var t=e.target.getBoundingClientRect();Y(Object(d.a)({},s,{visibility:"visible",width:120,height:30,left:e.clientX-t.x,top:e.clientY-t.y})),T([]),h(Object(c.a)(me(v)))}}},v.map((function(e,a){return i.a.createElement("div",{key:a,style:{position:"absolute",zIndex:3,left:e.x,top:e.y,maxWidth:e.max_width,visibility:e.visibility,borderWidth:t.user&&t.user.id==t.current_user.id||""!=e.text?1:0},className:e.status?"imageText "+e.status+"Text":"imageText",onClick:function(t){!function(e,t,a,n,i){e.preventDefault(),e.stopPropagation(),ue(!1),Z(Object(d.a)({},l)),re(Object(d.a)({},u,{warning:"warning"==a,ok:"ok"==a}));var r=e.currentTarget.getBoundingClientRect();Y({visibility:"visible",left:e.currentTarget.offsetLeft,top:e.currentTarget.offsetTop,value:i,width:r.width+30,height:r.height>30?r.height:30,imageTextId:t}),T(Object(c.a)(n)),h(Object(c.a)(me(v,{id:t,visibility:"hidden"})))}(t,e.id,e.status,e.messages,e.text)}},i.a.createElement("span",null,e.text),e.messages.length>0?i.a.createElement(N.a,{variant:"primary",size:"sm"},i.a.createElement(G.a,{icon:B.d}),e.messages.length):i.a.createElement(i.a.Fragment,null))})),i.a.createElement("div",{className:"imageTextFileldParent",style:{left:J.left,top:J.top,visibility:J.visibility}},i.a.createElement("textarea",{disabled:!(t.user&&t.user.id==t.current_user.id),placeholder:"Your text...",onChange:function(e){if(Y(Object(d.a)({},J,{value:e.target.value})),e.target.value.trim().length>0)if(null==J.imageTextId){r((n={text:e.target.value,max_width:e.target.offsetWidth,x:J.left,y:J.top,page_id:t.id,image_index:z,id:a},{type:p,text:n.text,max_width:n.max_width,x:n.x,y:n.y,page_id:n.page_id,image_index:n.image_index,id:n.id})),Z(Object(d.a)({},l,{remove:"visible"})),Y(Object(d.a)({},J,{imageTextId:a,value:e.target.value}));e.target.value;oe().then((function(e){h(Object(c.a)(me(ge(),{id:J.imageTextId,visibility:"hidden"})))}))}else r(j({text:e.target.value,id:J.imageTextId,max_width:e.target.offsetWidth,x:J.left,y:J.top})),h(Object(c.a)(me(ge(),{id:J.imageTextId,visibility:"hidden"})));var n},style:{width:""!=J.value||t.user&&t.user.id==t.current_user.id?J.width:0,borderWidth:t.user&&t.user.id==t.current_user.id?1:0,height:J.height,resize:t.user&&t.user.id==t.current_user.id?"both":"none"},value:J.value,className:ie.warning?"form-control form-control-warning imageTextFileld":ie.ok?"form-control form-control-ok imageTextFileld":"form-control imageTextFileld",rows:"1"}),i.a.createElement("div",{className:"imageTextFileldButtons"},t.user&&t.user.id==t.current_user.id?i.a.createElement(N.a,{style:{display:"visible"==Q.remove?"inline":"none"},onClick:function(e){var t;r((t=J.imageTextId,{type:g,id:t})),Y(Object(d.a)({},s)),oe()},variant:"outline-primary",size:"sm"},i.a.createElement(G.a,{icon:B.g})):i.a.createElement(i.a.Fragment,null),i.a.createElement(N.a,{style:{display:"visible"==Q.warning?"inline":"none"},onClick:function(e){e.preventDefault(),e.stopPropagation(),r(j({text:J.value,id:J.imageTextId,max_width:J.max_width,x:J.left,y:J.top,status:ie.warning?null:"warning"})),re(Object(d.a)({},u,{warning:!ie.warning,ok:!!ie.warning&&ie.ok})),oe().then((function(e){h(Object(c.a)(me(v,{id:J.imageTextId,visibility:"hidden"})))}))},variant:ie.warning?"danger":"outline-danger",size:"sm"},i.a.createElement(G.a,{icon:B.e})),i.a.createElement(N.a,{style:{display:"visible"==Q.ok?"inline":"none"},onClick:function(e){e.preventDefault(),e.stopPropagation(),r(j({text:J.value,id:J.imageTextId,max_width:J.max_width,x:J.left,y:J.top,status:ie.ok?null:"ok"})),re(Object(d.a)({},u,{warning:!!ie.ok&&ie.warning,ok:!ie.ok})),oe().then((function(e){h(Object(c.a)(me(v,{id:J.imageTextId,visibility:"hidden"})))}))},variant:ie.ok?"success":"outline-success",size:"sm"},i.a.createElement(G.a,{icon:B.a})),i.a.createElement(N.a,{style:{display:"visible"==Q.message?"inline":"none"},onClick:function(){re(Object(d.a)({},ie,{message:!ie.message}))},variant:ie.message?"primary":"outline-primary",size:"sm"},i.a.createElement(G.a,{icon:B.d}))),i.a.createElement("div",{className:"imageTextFileldMessageParent",style:{display:ie.message?"block":"none"}},i.a.createElement(S.a,{variant:"primary"},w.map((function(e,a){var n=t.users.filter((function(t){return t.id==e.user_id})),r=n.length>0?n[0]:null;return i.a.createElement("div",{key:a},i.a.createElement("div",null,r?i.a.createElement(i.a.Fragment,null,r.id==t.current_user.id?"you":r.name,", "):i.a.createElement(i.a.Fragment,null,"unsigned user, ")," ",e.date),i.a.createElement("div",null,e.text),r&&r.id==t.current_user.id&&i.a.createElement(N.a,{onClick:function(t){de(0,e)},variant:"outline-primary",size:"sm"},i.a.createElement(G.a,{icon:B.g})),i.a.createElement("hr",null))})),i.a.createElement("textarea",{onChange:function(e){R(e.target.value)},onKeyDown:function(e){if(13==e.keyCode&&0==e.shiftKey&&e.target.value.trim().length>0){e.preventDefault();var n=J.imageTextId;null==J.imageTextId?(r((i={text:"",max_width:0,x:J.left,y:J.top,page_id:t.id,image_index:z,id:a,user_id:t.current_user.id,msgText:e.target.value,date:ae()},{type:b,user_id:i.user_id,msgText:i.msgText,date:i.date,text:i.text,max_width:i.max_width,x:i.x,y:i.y,page_id:i.page_id,image_index:i.image_index,id:i.id})),Y(Object(d.a)({},J,{imageTextId:a})),n=a,console.log(a,"newTextId")):r(function(e){return{type:_,user_id:e.user_id,text_id:e.text_id,text:e.text,date:e.date}}({text:e.target.value,date:ae(),text_id:J.imageTextId,user_id:t.current_user.id})),oe().then((function(e){h(Object(c.a)(me(ge(),{id:n,visibility:"hidden"})));var a=t.texts.filter((function(e){return e.id==n}));a.length>0&&T(Object(c.a)(a[0].messages)),R("")}))}var i},placeholder:"Your message...",className:"form-control imageTextFileldMessageField",rows:"4",value:P}))))))))},ie=ne=Object(s.b)()(ne),re=Object(s.b)((function(e){return{pages:e.pages,pdfs:e.pdfs,texts:e.texts,messages:e.messages,users:e.users,current_user:e.current_user}}))((function(e){var t=e.pages,a=e.pdfs,n=e.texts,r=e.messages,s=e.users,l=e.current_user,c=(e.history,Object(T.e)().id),d=t.filter((function(e){return e.id==c})),o=d.length>0?d[0]:null,m=n.length>0?n[n.length-1].id+1:0;if(null!==o){var g=a.filter((function(e){return e.id==o.pdf_id})),p=g.length>0?g[0]:null;o.pdf=p;var f=n.filter((function(e){return e.page_id==c}));o.texts=f,o.texts&&(o.messages=r),o.users=s,o.current_user=l;var _=s.filter((function(e){return e.id==o.user_id})),b=_.length>0?_[0]:null;o.user=b}return i.a.createElement(i.a.Fragment,null,i.a.createElement(u.b,{to:"/"},"Go Back"),null===o?i.a.createElement(i.a.Fragment,null,"Page Not Found"):i.a.createElement(ie,{page:o,newTextId:m}))})),se=Object(T.f)(re);a(104);var le=Object(T.f)((function(e){return e.location,i.a.createElement(k.a,null,i.a.createElement("h1",null,"EditHomework"),i.a.createElement(I.a,null,i.a.createElement(T.a,{exact:!0,path:"/",component:Z}),i.a.createElement(T.a,{exact:!0,path:"/pages/:id",component:se})))})),ue=Object(l.b)((function(){var e,t,a,n,i,r,s,l,u,j,y,T=arguments.length>0&&void 0!==arguments[0]?arguments[0]:w,k=arguments.length>1?arguments[1]:void 0;switch(k.type){case o:return Object(d.a)({},T,{active_pdf_index:k.index});case m:return e=T.texts.map((function(e){return e.id==k.id&&(e.text=k.text,e.max_width=k.max_width,e.x=k.x,e.y=k.y,e.status=k.status),e})),Object(d.a)({},T,{texts:e});case p:return n={text:k.text,x:k.x,y:k.y,page_id:k.page_id,image_index:k.image_index,id:k.id,max_width:k.max_width,status:null},Object(d.a)({},T,{texts:[].concat(Object(c.a)(T.texts),[n])});case _:return i={id:a=T.messages.length>0?T.messages[T.messages.length-1].id+1:0,user_id:k.user_id,text_id:k.text_id,text:k.text,date:k.date},Object(d.a)({},T,{messages:[].concat(Object(c.a)(T.messages),[i])});case b:return n={text:k.text,x:k.x,y:k.y,page_id:k.page_id,image_index:k.image_index,id:k.id,max_width:k.max_width,status:null},i={id:a=T.messages.length>0?T.messages[T.messages.length-1].id+1:0,user_id:k.user_id,text_id:k.id,text:k.msgText,date:k.date},Object(d.a)({},T,{texts:[].concat(Object(c.a)(T.texts),[n]),messages:[].concat(Object(c.a)(T.messages),[i])});case v:return a=T.pages.length>0?T.pages[T.pages.length-1].id+1:0,s={name:k.name,id:a,pdf_id:k.pdf_id,user_id:k.user_id},Object(d.a)({},T,{pages:[].concat(Object(c.a)(T.pages),[s])});case g:return e=T.texts.filter((function(e){return e.id!==k.id})),t=T.messages.filter((function(e){return e.text_id!==k.id})),Object(d.a)({},T,{texts:e,messages:t});case f:return t=T.messages.filter((function(e){return e.id!==k.id})),Object(d.a)({},T,{messages:t});case x:r=T.pages.filter((function(e){return e.id!==k.id})),e=T.texts.filter((function(e){return e.page_id!==k.id}));var I=T.texts.filter((function(e){return e.page_id==k.id})).map((function(e){return e.id}));return t=T.messages.filter((function(e){return-1==I.indexOf(e.text_id)})),Object(d.a)({},T,{pages:r,texts:e,messages:t});case h:return l=null,u=Object(c.a)(T.users),(j=T.users.filter((function(e){return e.name==k.name&&e.pass==k.pass}))).length>0?l=j[0].id:(a=T.users.length>0?T.users[T.users.length-1].id+1:0,u=[].concat(Object(c.a)(T.users),[{id:a,name:k.name,pass:k.pass}]),l=a),Object(d.a)({},T,{current_user:{id:l},users:Object(c.a)(u)});case E:return Object(d.a)({},T,{current_user:{id:null}});case O:return l=null,u=Object(c.a)(T.users),(j=T.users.filter((function(e){return e.name==k.login&&e.pass==k.pass}))).length>0?l=j[0].id:(a=T.users.length>0?T.users[T.users.length-1].id+1:0,u=[].concat(Object(c.a)(T.users),[{id:a,name:k.login,pass:k.pass}]),l=a),y=T.pages.length>0?T.pages[T.pages.length-1].id+1:0,s={name:k.name,id:y,pdf_id:k.pdf_id,user_id:l},console.log(Object(d.a)({},T,{pages:[].concat(Object(c.a)(T.pages),[s]),current_user:{id:l},users:Object(c.a)(u)}),"--======="),Object(d.a)({},T,{pages:[].concat(Object(c.a)(T.pages),[s]),current_user:{id:l},users:Object(c.a)(u)});default:return T}}));Object(r.render)(i.a.createElement(s.a,{store:ue},i.a.createElement(u.a,null,i.a.createElement(le,null))),document.getElementById("root"))},71:function(e,t,a){e.exports=a(105)}},[[71,1,2]]]);
//# sourceMappingURL=main.f551b696.chunk.js.map
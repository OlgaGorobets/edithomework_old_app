(this.webpackJsonpmy_editor=this.webpackJsonpmy_editor||[]).push([[0],{105:function(e,t,a){},106:function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),r=a(22),l=a(10),s=a(41),c=a(29),u=a(7),d=a(5),o="CHANGE_ACTIVE_PDF",m="CHANGE_TEXT_VALUE",g="REMOVE_TEXT_VALUE",p="ADD_NEW_TEXT_VALUE",f="REMOVE_MESSAGE",_="ADD_NEW_MESSAGE",b="ADD_FIRST_MESSAGE",v="REMOVE_PAGE",E="ADD_NEW_PAGE",x="SIGN_FORM",h="SIGN_OUT_FORM",O="SIGN_FORM_AND_ADD_NEW_PAGE",j="ADD_PDF",y="REMOVE_PDF",w="CHANGE_PDF_DATE",T="CHANGE_PAGE_DATE";function F(e){return{type:m,id:e.id,text:e.text,max_width:e.max_width,x:e.x,y:e.y,status:e.status}}function N(e){return{type:v,id:e}}function I(e){return{type:x,name:e.login,pass:e.pass}}function k(e){return{type:j,path:e.path,images:e.images,user_id:e.user_id}}function P(e){return{type:w,id:e}}function C(e){return{type:T,id:e}}function A(e,t){return!!(e.className&&e.className.split&&e.className.split(" ").indexOf(t)>=0)||e.parentNode&&A(e.parentNode,t)}function R(e){var t=e?new Date(e):new Date,a=""+["Jan","Feb","March","Apr","May","June","July","Aug","Sep","Oct","Nov","Dec"][t.getMonth()],n=""+t.getDate(),i=t.getFullYear(),r=t.getHours(),l=t.getMinutes();return a.length<2&&(a="0"+a),n.length<2&&(n="0"+n),n+" "+a+","+i+" "+r+":"+l}var S={current_user:{id:0},users:[{id:0,name:"Olka",pass:"123"},{id:1,name:"Barabolka",pass:"123"}],pdfs:[{path:"some path1",id:0,user_id:0,load_date:"",last_edit_date:"",images:["/uploads/photos/photo_pdf \u0431\u0438\u043b\u0435\u0442\u0430.png","../photos/2.jpg","../photos/3.jpg","../photos/4.jpg","../photos/5.jpg","../photos/6.jpg","../photos7.jpg","../photos/8.jpg"]},{path:"some path2",id:1,user_id:0,load_date:"",last_edit_date:"",images:["../photos/2.jpg"]}],texts:[{text:"testing text1",x:0,y:0,page_id:0,image_index:0,id:0,max_width:"auto",status:"ok"},{text:"testing text2",x:100,y:100,page_id:0,image_index:0,id:1,max_width:"auto",status:null}],messages:[{id:0,user_id:null,text_id:0,text:"message1",date:"date1"},{id:1,user_id:0,text_id:0,text:"message2",date:"date2"}],active_pdf_index:0,pages:[{name:"page 1",id:0,pdf_id:0,user_id:0},{name:"page 2",id:1,pdf_id:1,user_id:0},{name:"page 3",id:2,pdf_id:0,user_id:0}]};var D=a(28),G=a(45),M=a(31),U=a(24),z=a(15),L=a(8),B=a(42),H=a(11),W=a(20),V=a(48),J=a(33),Y=a(39),X=a(12),q=function(e){var t={login:"",pass:"",name:""},a={login:!1,pass:!1,name:!1},r={name:e.addPage,login:e.signIn,pass:e.signIn},l=Object(n.useState)(!1),s=Object(H.a)(l,2),c=s[0],u=s[1],o=Object(n.useState)(Object(d.a)({},t)),m=Object(H.a)(o,2),g=m[0],p=m[1],f=Object(n.useState)(Object(d.a)({},a)),_=Object(H.a)(f,2),b=_[0],v=_[1],E=function(){return u(!1)},x=function(e){p(Object(d.a)({},g,Object(B.a)({},e.target.getAttribute("name"),e.target.value))),v(Object(d.a)({},a)),console.log(b,"errors"),console.log(e.target.getAttribute("name"))},h="",O="",j="",y="";return e.signIn&&(h=i.a.createElement(Y.a,null,i.a.createElement(Y.a.Body,null,i.a.createElement(Y.a.Title,null,"Login or Register ",i.a.createElement("small",null,"(if you don't have an account)")),i.a.createElement(Y.a.Text,null,i.a.createElement("div",null,i.a.createElement(V.a.Control,{name:"login",type:"text",value:g.login,placeholder:"Login",onChange:x}),b.login?i.a.createElement(J.a,{variant:"danger"},"Required field"):i.a.createElement(i.a.Fragment,null)),i.a.createElement("div",null,i.a.createElement(V.a.Control,{name:"pass",type:"password",value:g.pass,placeholder:"Password",onChange:x}),b.pass?i.a.createElement(J.a,{variant:"danger"},"Required field"):i.a.createElement(i.a.Fragment,null)))))),e.sureRemove&&(O=i.a.createElement("div",null,"Are you sure? You won't be able to recover this page! ")),e.sureRemovePdf&&(j=i.a.createElement("div",null,"Are you sure? You won't be able to recover this Pdf and all pages created from this Pdf will be removed! ")),e.addPage&&(y=i.a.createElement("div",null,i.a.createElement(V.a.Control,{type:"text",name:"name",value:g.name,placeholder:"Name",onChange:x}),b.name?i.a.createElement(J.a,{variant:"danger"},"Required field"):i.a.createElement(i.a.Fragment,null))),i.a.createElement(i.a.Fragment,null,i.a.createElement(L.a,{size:"sm",variant:"primary",onClick:function(){return u(!0)}},e.button.icon?i.a.createElement(X.a,{icon:e.button.icon}):"",e.button.title),i.a.createElement(W.a,{show:c,onHide:E,animation:!1},i.a.createElement(W.a.Header,{closeButton:!0},i.a.createElement(W.a.Title,null,e.title)),i.a.createElement(W.a.Body,null,h,"",O,j,y),i.a.createElement(W.a.Footer,null,e.buttons.map((function(e,a){return i.a.createElement(L.a,{size:"sm",key:a,variant:"secondary",onClick:function(){(function(){var e=!0,t={};for(var a in r)if(r[a]){var n=0==g[a].trim().length;t[a]=n,n&&(e=!1)}else t[a]=!1;return v(Object(d.a)({},t)),e})()&&("function"===typeof e.func&&e.func(g),E(),p(Object(d.a)({},t)))}},e.title)})))))},K=Object(l.b)((function(e){return{current_user:e.current_user,users:e.users}}))((function(e){var t=e.current_user,a=e.users,n=e.dispatch,r={signIn:!0,signUp:!1,title:"Login or Register",button:{title:"Login or Register"},buttons:[{title:"Cancel"},{title:"Ok",func:function(e){n(I(e))}}]},l=null;if(null!==t.id){var s=a.filter((function(e){return e.id==t.id}));l=s.length>0?s[0]:null}return i.a.createElement(z.a,null,null==t.id?i.a.createElement(z.a.Item,null,i.a.createElement(q,r)):i.a.createElement(z.a.Item,null,"Hello, ",l?l.name:""," ",i.a.createElement(L.a,{onClick:function(){n({type:h})},variant:"primary",size:"sm"},"SignOut")))})),Q=K=Object(l.b)()(K),Z=a(9),$=a(27),ee=function(e){var t=e.pdf,a=e.dispatch,n={signIn:!1,signUp:!1,sureRemovePdf:!0,title:"Remove Pdf File",button:{title:"Remove"},buttons:[{title:"Cancel"},{title:"Remove it!",func:function(){var e;a((e=t.id,{type:y,id:e}))}}]};return i.a.createElement(z.a.Item,{className:t.is_active?"list-group-item-primary":""},i.a.createElement(L.a,{variant:"link",onClick:function(e){var n;e.preventDefault(),a((n=t.index,{type:o,index:n}))}},i.a.createElement("span",null,t.path)," ",i.a.createElement(X.a,{icon:Z.c})),null!==t.current_user.id&&t.user&&t.current_user.id==t.user.id?i.a.createElement($.a,{className:"mr-2"},i.a.createElement(q,n)):i.a.createElement(i.a.Fragment,null),t.user?i.a.createElement("div",null,i.a.createElement("small",null,"Loaded by ",t.user.id==t.current_user.id?"you":t.user.name," ",t.load_date),i.a.createElement("div",null,i.a.createElement("small",null,"Last pages edits - ",t.last_edit_date))):i.a.createElement(i.a.Fragment,null))},te=ee=Object(l.b)()(ee),ae=a(68),ne=a(69),ie=Object(l.b)((function(e){return{current_user:e.current_user}}))((function(e){var t=e.current_user,a=e.dispatch,r=Object(n.useState)(null),l=Object(H.a)(r,2),s=l[0],c=l[1],u=Object(n.useState)(null),o=Object(H.a)(u,2),m=o[0],g=o[1],p=Object(n.useState)({show:!1,title:"",text:""}),f=Object(H.a)(p,2),_=f[0],b=f[1],v=function(e){var t=new FormData;t.append("file",e);return Object(ae.post)("/upload.php",t,{headers:{"content-type":"multipart/form-data"}})};return i.a.createElement(i.a.Fragment,null,i.a.createElement("form",{onSubmit:function(e){e.preventDefault(),s&&g(!0),v(s).then((function(e){g(!1);var n=e.data;0==n.error&&a(k({path:n.file,images:JSON.parse(n.images),user_id:t.id}))}))}},i.a.createElement("h5",null,"Upload Pdf File"),m?i.a.createElement("span",null,i.a.createElement(ne.a,{animation:"border",variant:"secondary"}),"Wait please, File is Loading..."):i.a.createElement(i.a.Fragment,null,i.a.createElement("div",{className:"custom-file"},i.a.createElement("input",{type:"file",className:"custom-file-input",id:"inputGroupFile01","aria-describedby":"inputGroupFileAddon01",onChange:function(e){c(e.target.files[0]),e.target.files[0]&&(g(!0),v(e.target.files[0]).then((function(e){g(!1);var n=e.data;0==n.error?a(k({path:n.file,images:JSON.parse(n.images),user_id:t.id})):b(Object(d.a)({},_,{show:!0,title:"File Upload Error",text:"File wasn't loaded. "+n.error}))})).catch((function(e){g(!1),b(Object(d.a)({},_,{show:!0,title:"File Upload Error",text:"File wasn't loaded. Somthing went wrong..."}))})))},size:"sm"}),i.a.createElement("label",{className:"custom-file-label",size:"sm",htmlFor:"inputGroupFile01"},"Choose file"),i.a.createElement("button",{type:"submit",style:{display:"none"}},"Upload")))),i.a.createElement(W.a,{show:_.show,onHide:function(){b(Object(d.a)({},_,{show:!1}))}},i.a.createElement(W.a.Header,{closeButton:!0},i.a.createElement(W.a.Title,null,_.title)),i.a.createElement(W.a.Body,null,_.text),i.a.createElement(W.a.Footer,null,i.a.createElement(L.a,{variant:"primary",onClick:function(){b(Object(d.a)({},_,{show:!1}))}},"Ok"))))})),re=Object(l.b)((function(e){return{pdfs:e.pdfs,active_pdf_index:e.active_pdf_index,users:e.users,current_user:e.current_user}}))((function(e){var t=e.pdfs,a=e.active_pdf_index,n=e.users,r=e.current_user,l=e.dispatch,s={signIn:!0,signUp:!1,title:"Login or Register to Upload File",button:{title:"Upload Pdf File",icon:Z.h},buttons:[{title:"Cancel"},{title:"Ok",func:function(e){l(I(e))}}]};return i.a.createElement(z.a,{className:"list-group-flush"},t.map((function(e,t){var l=n.filter((function(t){return t.id==e.user_id})),s=l.length>0?l[0]:null,c=Object(d.a)({},e,{is_active:t===a,index:t,user:s,current_user:r});return i.a.createElement(te,Object.assign({key:t},{pdf:c}))})),i.a.createElement(z.a.Item,null,null==r.id?i.a.createElement(q,s):i.a.createElement(ie,null)))})),le=function(e){var t=e.page,a=e.dispatch,n={signIn:!1,signUp:!1,sureRemove:!0,title:"Remove Page",button:{title:"Remove"},buttons:[{title:"Cancel"},{title:"Remove it!",func:function(){a(P(t.pdf_id)),a(N(t.id))}}]};return i.a.createElement(z.a.Item,null,i.a.createElement(c.b,{to:"/pages/"+t.id},i.a.createElement("span",null,t.name)," ",i.a.createElement(X.a,{icon:Z.e})),t.user&&t.user.id==t.current_user.id?i.a.createElement($.a,{className:"mr-2"},i.a.createElement(q,n)):i.a.createElement(i.a.Fragment,null),t.user?i.a.createElement("div",null,i.a.createElement("small",null,"Added by ",t.user.id==t.current_user.id?"you":t.user.name," ",t.load_date),i.a.createElement("div",null,i.a.createElement("small",null,"Last edit - ",t.last_edit_date))):i.a.createElement(i.a.Fragment,null))},se=le=Object(l.b)()(le),ce=Object(l.b)((function(e){return{pages:e.pages,pdfs:e.pdfs,active_pdf_index:e.active_pdf_index,users:e.users,current_user:e.current_user}}))((function(e){var t=e.pages,a=e.pdfs,n=e.active_pdf_index,r=e.users,l=e.current_user,s=e.dispatch,c=a.length>0?a[n].id:null,u=t.filter((function(e){return c==e.pdf_id})),o={signIn:!1,signUp:!1,addPage:!0,title:"Add New Page",button:{title:"Add New Page",icon:Z.h},buttons:[{title:"Cancel"},{title:"Add Page",func:function(e){var t;s(P(c)),s((t={name:e.name,pdf_id:c,user_id:l.id},{type:E,name:t.name,pdf_id:t.pdf_id,user_id:t.user_id}))}}]},m={signIn:!0,signUp:!0,addPage:!0,title:"Add New Page",button:{title:"Add New Page",icon:Z.h},buttons:[{title:"Cancel"},{title:"Ok",func:function(e){var t;s(P(c)),s((t={name:e.name,pdf_id:c,login:e.login,pass:e.pass},{type:O,name:t.name,pdf_id:t.pdf_id,login:t.login,pass:t.pass}))}}]};return i.a.createElement(z.a,{className:"list-group-flush"},u.map((function(e,t){var a=r.filter((function(t){return t.id==e.user_id})),n=a.length>0?a[0]:null,s=Object(d.a)({},e,{user:n,current_user:l});return i.a.createElement(se,Object.assign({key:t},{page:s}))})),i.a.createElement(z.a.Item,null,null!==l.id?i.a.createElement(q,o):i.a.createElement(q,m)))})),ue=Object(l.b)((function(e){return{pdfs:e.pdfs,active_pdf_index:e.active_pdf_index}}))((function(e){e.pdfs,e.active_pdf_index;return i.a.createElement(i.a.Fragment,null,i.a.createElement(U.a,null,i.a.createElement(Q,null)),i.a.createElement(U.a,null,i.a.createElement(re,null)),i.a.createElement(U.a,null,i.a.createElement(ce,null)))})),de=(a(101),function(e){var t=e.images,a=e.activeIndex,r=e.items,l=e.onPageChange,s=(e.pageId,Object(n.useState)(0)),c=Object(H.a)(s,2),u=c[0],d=c[1],o=Object(n.useState)(0),m=Object(H.a)(o,2),g=m[0],p=m[1],f=Object(n.useState)(t),_=Object(H.a)(f,2),b=_[0],v=_[1],E=function(e,a){e.preventDefault();var n=parseInt(t.length/r),i="next"==a?u<n?u+1:0:0==u?n:u-1;if(d(i),!(g>=r*i&&g<r*i+r)){var s=r*i;p(s),window.location.hash="#page_"+s,"function"==typeof l&&l({selected:s})}v(t.filter((function(e,t){return t>=r*i&&t<r*i+r})))};return Object(n.useEffect)((function(){var e=window.location.hash;if(-1!==e.indexOf("#page_")){var n=parseInt(e.replace("#page_",""));!isNaN(n)&&n>0&&n<t.length&&(a=n)}if(console.log(a,"activeIndex"),a>0){if(p(a),"function"==typeof l&&l({selected:a}),a>r*u+r){var i=parseInt(a/r);d(i)}v(t.filter((function(e,t){return t>=r*u&&t<r*u+r})))}console.log("--pag->>>")}),[t]),i.a.createElement("div",{className:"imagePreviewsContainer"},i.a.createElement("div",{className:"imagePreviewsPrev",onClick:function(e){E(e,"prev")}},i.a.createElement(X.a,{icon:Z.d})),i.a.createElement("div",{className:"imagePreviews"},b.map((function(e,t){var a=e.replace(".png","_preview.png").replace(".jpg","_preview.jpg");return i.a.createElement("div",{onClick:function(e){e.preventDefault();var a=r*u+t;p(a),window.location.hash="#page_"+a,"function"==typeof l&&l({selected:a})},className:g==r*u+t?"active imagePreview":"imagePreview"},i.a.createElement("img",{src:a}),i.a.createElement("span",{className:"imagePreviewNumber"},i.a.createElement("span",null,r*u+t+1)))}))),i.a.createElement("div",{onClick:function(e){E(e,"next")},className:"imagePreviewsNext"},i.a.createElement(X.a,{icon:Z.b})))}),oe=function(e){var t=e.page,a=e.newTextId,r=e.dispatch;console.log(t,"page");var l={visibility:"hidden",left:0,top:0,value:"",width:0,height:0,imageTextId:null},s={remove:"visible",move:"visible",warning:"visible",ok:"visible",message:"visible"},c={warning:!1,ok:!1,message:!0},o=Object(n.useRef)(null),m=Object(n.useState)([]),v=Object(H.a)(m,2),E=v[0],x=v[1],h=Object(n.useState)([]),O=Object(H.a)(h,2),j=O[0],y=O[1],w=Object(n.useState)(""),T=Object(H.a)(w,2),I=T[0],k=T[1],S=Object(n.useState)(0),D=Object(H.a)(S,2),z=D[0],B=D[1],W=Object(n.useState)(Object(d.a)({},l)),V=Object(H.a)(W,2),Y=V[0],K=V[1],Q=Object(n.useState)(Object(d.a)({},s)),ee=Object(H.a)(Q,2),te=ee[0],ae=ee[1],ne=Object(n.useState)(Object(d.a)({},c)),ie=Object(H.a)(ne,2),re=ie[0],le=ie[1],se=Object(n.useState)(!1),ce=Object(H.a)(se,2),ue=(ce[0],ce[1]),oe={signIn:!1,signUp:!1,sureRemove:!0,title:"Remove Page",button:{title:"Remove"},buttons:[{title:"Cancel"},{title:"Remove it!",func:function(){r(N(t.id))}}]},me=function(e,a){var n;r((n=a.id,{type:f,id:n})),r(C(t.id)),r(P(t.pdf_id)),pe().then((function(e){x(Object(u.a)(fe(E,{id:Y.imageTextId,visibility:"hidden"})));var a=t.texts.filter((function(e){return e.id==Y.imageTextId}))[0].messages;y(Object(u.a)(a))}))},ge=function(e){if(I.trim().length>0){e.preventDefault();var n=Y.imageTextId;null==Y.imageTextId?(r((i={text:"",max_width:0,x:Y.left,y:Y.top,page_id:t.id,image_index:z,id:a,user_id:t.current_user.id,msgText:I,date:R()},{type:b,user_id:i.user_id,msgText:i.msgText,date:i.date,text:i.text,max_width:i.max_width,x:i.x,y:i.y,page_id:i.page_id,image_index:i.image_index,id:i.id})),r(C(t.id)),r(P(t.pdf_id)),K(Object(d.a)({},Y,{imageTextId:a})),n=a,console.log(a,"newTextId")):(r(function(e){return{type:_,user_id:e.user_id,text_id:e.text_id,text:e.text,date:e.date}}({text:I,date:R(),text_id:Y.imageTextId,user_id:t.current_user.id})),r(C(t.id)),r(P(t.pdf_id))),pe().then((function(e){x(Object(u.a)(fe(_e(),{id:n,visibility:"hidden"})));var a=t.texts.filter((function(e){return e.id==n}));a.length>0&&y(Object(u.a)(a[0].messages)),k("")}))}var i},pe=function(){var e=o.current.getContext("2d"),a=new Image;return a.src=t.pdf.images[z],new Promise((function(t){a.onload=function(){var n=1e3*a.height/a.width;e.canvas.width=1e3,e.canvas.height=n,e.clearRect(0,0,e.canvas.width,e.canvas.height),e.drawImage(a,0,0,1e3,n),x(_e()),t({status:"ok"})}}))},fe=function(e,t){return e.map((function(e){var a="visible";return void 0!==t&&e.id==t.id&&(a=t.visibility),e.visibility=a,e}))},_e=function(){var e=t.texts.filter((function(e){return e.image_index==z}));return e.forEach((function(e){e.messages=t.messages.filter((function(t){return t.text_id==e.id}))})),fe(e)};return Object(n.useEffect)((function(){pe(z),console.log("---ed---\x3e>>")}),[z]),i.a.createElement(G.a,{onClick:function(e){A(e.target,"imageTexts")||(ue(!1),K(Object(d.a)({},l)),x(Object(u.a)(fe(E))))}},i.a.createElement(M.a,null,i.a.createElement(U.a,null,i.a.createElement("h2",null,t.name," "),t.user?i.a.createElement("div",null,i.a.createElement("small",null,"Added by ",t.user.id==t.current_user.id?"you":t.user.name," ",t.load_date),i.a.createElement("div",null,i.a.createElement("small",null,"Last edit - ",t.last_edit_date))):i.a.createElement(i.a.Fragment,null)),i.a.createElement(U.a,null,t.user&&t.user.id==t.current_user.id?i.a.createElement($.a,{className:"mr-2"},i.a.createElement(q,oe)):i.a.createElement(i.a.Fragment,null),i.a.createElement(de,{images:t.pdf.images,items:5,onPageChange:function(e){B(e.selected)},activeIndex:0,pageId:t.id}))),i.a.createElement(M.a,null,i.a.createElement("div",{className:"imageParent"},i.a.createElement("canvas",{ref:o}),i.a.createElement("div",{className:"imageTexts",onClick:function(e){if(!A(e.target,"imageText")&&!A(e.target,"imageTextFileldParent")){ae(Object(d.a)({},s,{remove:"hidden",ok:"hidden",warning:"hidden"})),le(Object(d.a)({},c));var t=e.target.getBoundingClientRect();K(Object(d.a)({},l,{visibility:"visible",width:120,height:30,left:e.clientX-t.x,top:e.clientY-t.y})),y([]),x(Object(u.a)(fe(E)))}}},E.map((function(e,a){return i.a.createElement("div",{key:a,style:{position:"absolute",zIndex:3,left:e.x,top:e.y,maxWidth:e.max_width,visibility:e.visibility,borderWidth:t.user&&t.user.id==t.current_user.id||""!=e.text?1:0},className:e.status?"imageText "+e.status+"Text":"imageText",onClick:function(t){!function(e,t,a,n,i){e.preventDefault(),e.stopPropagation(),ue(!1),ae(Object(d.a)({},s)),le(Object(d.a)({},c,{warning:"warning"==a,ok:"ok"==a}));var r=e.currentTarget.getBoundingClientRect();K({visibility:"visible",left:e.currentTarget.offsetLeft,top:e.currentTarget.offsetTop,value:i,width:r.width+30,height:r.height>30?r.height:30,imageTextId:t}),y(Object(u.a)(n)),x(Object(u.a)(fe(E,{id:t,visibility:"hidden"})))}(t,e.id,e.status,e.messages,e.text)}},i.a.createElement("span",null,e.text),e.messages.length>0?i.a.createElement(L.a,{variant:"primary",size:"sm"},i.a.createElement(X.a,{icon:Z.f}),e.messages.length):i.a.createElement(i.a.Fragment,null))})),i.a.createElement("div",{className:"imageTextFileldParent",style:{left:Y.left,top:Y.top,visibility:Y.visibility}},i.a.createElement("textarea",{disabled:!(t.user&&t.user.id==t.current_user.id),placeholder:"Your text...",onChange:function(e){if(K(Object(d.a)({},Y,{value:e.target.value})),e.target.value.trim().length>0)if(null==Y.imageTextId){r((n={text:e.target.value,max_width:e.target.offsetWidth,x:Y.left,y:Y.top,page_id:t.id,image_index:z,id:a},{type:p,text:n.text,max_width:n.max_width,x:n.x,y:n.y,page_id:n.page_id,image_index:n.image_index,id:n.id})),r(C(t.id)),r(P(t.pdf_id)),ae(Object(d.a)({},s,{remove:"visible"})),K(Object(d.a)({},Y,{imageTextId:a,value:e.target.value}));e.target.value;pe().then((function(e){x(Object(u.a)(fe(_e(),{id:Y.imageTextId,visibility:"hidden"})))}))}else r(F({text:e.target.value,id:Y.imageTextId,max_width:e.target.offsetWidth,x:Y.left,y:Y.top})),r(C(t.id)),r(P(t.pdf_id)),x(Object(u.a)(fe(_e(),{id:Y.imageTextId,visibility:"hidden"})));var n},style:{width:""!=Y.value||t.user&&t.user.id==t.current_user.id?Y.width:0,borderWidth:t.user&&t.user.id==t.current_user.id?1:0,height:Y.height,resize:t.user&&t.user.id==t.current_user.id?"both":"none"},value:Y.value,className:re.warning?"form-control form-control-warning imageTextFileld":re.ok?"form-control form-control-ok imageTextFileld":"form-control imageTextFileld",rows:"1"}),i.a.createElement("div",{className:"imageTextFileldButtons"},t.user&&t.user.id==t.current_user.id?i.a.createElement(L.a,{style:{display:"visible"==te.remove?"inline":"none"},onClick:function(e){var a;r((a=Y.imageTextId,{type:g,id:a})),r(C(t.id)),r(P(t.pdf_id)),K(Object(d.a)({},l)),pe()},variant:"outline-primary",size:"sm"},i.a.createElement(X.a,{icon:Z.i})):i.a.createElement(i.a.Fragment,null),i.a.createElement(L.a,{style:{display:"visible"==te.warning?"inline":"none"},onClick:function(e){e.preventDefault(),e.stopPropagation(),r(F({text:Y.value,id:Y.imageTextId,max_width:Y.max_width,x:Y.left,y:Y.top,status:re.warning?null:"warning"})),r(C(t.id)),r(P(t.pdf_id)),le(Object(d.a)({},c,{warning:!re.warning,ok:!!re.warning&&re.ok})),pe().then((function(e){x(Object(u.a)(fe(E,{id:Y.imageTextId,visibility:"hidden"})))}))},variant:re.warning?"danger":"outline-danger",size:"sm"},i.a.createElement(X.a,{icon:Z.g})),i.a.createElement(L.a,{style:{display:"visible"==te.ok?"inline":"none"},onClick:function(e){e.preventDefault(),e.stopPropagation(),r(F({text:Y.value,id:Y.imageTextId,max_width:Y.max_width,x:Y.left,y:Y.top,status:re.ok?null:"ok"})),r(C(t.id)),r(P(t.pdf_id)),le(Object(d.a)({},c,{warning:!!re.ok&&re.warning,ok:!re.ok})),pe().then((function(e){x(Object(u.a)(fe(E,{id:Y.imageTextId,visibility:"hidden"})))}))},variant:re.ok?"success":"outline-success",size:"sm"},i.a.createElement(X.a,{icon:Z.a})),i.a.createElement(L.a,{style:{display:"visible"==te.message?"inline":"none"},onClick:function(){le(Object(d.a)({},re,{message:!re.message}))},variant:re.message?"primary":"outline-primary",size:"sm"},i.a.createElement(X.a,{icon:Z.f}))),i.a.createElement("div",{className:"imageTextFileldMessageParent",style:{display:re.message?"block":"none"}},i.a.createElement(J.a,{variant:"primary"},j.map((function(e,a){var n=t.users.filter((function(t){return t.id==e.user_id})),r=n.length>0?n[0]:null;return i.a.createElement("div",{key:a},i.a.createElement("div",null,r?i.a.createElement(i.a.Fragment,null,r.id==t.current_user.id?"you":r.name,", "):i.a.createElement(i.a.Fragment,null,"unsigned user, ")," ",e.date),i.a.createElement("div",null,e.text),r&&r.id==t.current_user.id&&i.a.createElement(L.a,{onClick:function(t){me(0,e)},variant:"outline-primary",size:"sm"},i.a.createElement(X.a,{icon:Z.i})),i.a.createElement("hr",null))})),i.a.createElement("div",null,i.a.createElement("textarea",{onChange:function(e){k(e.target.value)},placeholder:"Your message...",className:"form-control imageTextFileldMessageField",rows:"4",value:I}),i.a.createElement($.a,{className:"imageTextFileldMessageBtn"}," ",i.a.createElement(L.a,{className:"simpBtn",onClick:function(e){ge(e)},variant:"primary",size:"sm"},"Add Message")," ")))))))))},me=oe=Object(l.b)()(oe),ge=Object(l.b)((function(e){return{pages:e.pages,pdfs:e.pdfs,texts:e.texts,messages:e.messages,users:e.users,current_user:e.current_user}}))((function(e){var t=e.pages,a=e.pdfs,n=e.texts,r=e.messages,l=e.users,s=e.current_user,u=(e.history,Object(D.e)().id),d=t.filter((function(e){return e.id==u})),o=d.length>0?d[0]:null,m=n.length>0?n[n.length-1].id+1:0;if(null!==o){var g=a.filter((function(e){return e.id==o.pdf_id})),p=g.length>0?g[0]:null;o.pdf=p;var f=n.filter((function(e){return e.page_id==u}));o.texts=f,o.texts&&(o.messages=r),o.users=l,o.current_user=s;var _=l.filter((function(e){return e.id==o.user_id})),b=_.length>0?_[0]:null;o.user=b}return i.a.createElement(i.a.Fragment,null,i.a.createElement(c.b,{to:"/"},"Go Back"),null===o?i.a.createElement(i.a.Fragment,null,"Page Not Found"):i.a.createElement(me,{page:o,newTextId:m}))})),pe=Object(D.f)(ge);a(105);var fe=Object(D.f)((function(e){return e.location,i.a.createElement(G.a,null,i.a.createElement("h1",null,"EditHomework"),i.a.createElement(M.a,null,i.a.createElement(D.a,{exact:!0,path:"/",component:ue}),i.a.createElement(D.a,{exact:!0,path:"/pages/:id",component:pe})))})),_e=Object(s.b)((function(){var e,t,a,n,i,r,l,s,c,F,N,I=arguments.length>0&&void 0!==arguments[0]?arguments[0]:S,k=arguments.length>1?arguments[1]:void 0;switch(k.type){case o:return Object(d.a)({},I,{active_pdf_index:k.index});case m:return e=I.texts.map((function(e){return e.id==k.id&&(e.text=k.text,e.max_width=k.max_width,e.x=k.x,e.y=k.y,e.status=k.status,e.last_edit_date=R()),e})),Object(d.a)({},I,{texts:e});case p:return n={text:k.text,x:k.x,y:k.y,page_id:k.page_id,image_index:k.image_index,id:k.id,max_width:k.max_width,status:null,load_date:R(),last_edit_date:R()},Object(d.a)({},I,{texts:[].concat(Object(u.a)(I.texts),[n])});case _:return i={id:a=I.messages.length>0?I.messages[I.messages.length-1].id+1:0,user_id:k.user_id,text_id:k.text_id,text:k.text,date:k.date},Object(d.a)({},I,{messages:[].concat(Object(u.a)(I.messages),[i])});case b:return n={text:k.text,x:k.x,y:k.y,page_id:k.page_id,image_index:k.image_index,id:k.id,max_width:k.max_width,status:null},i={id:a=I.messages.length>0?I.messages[I.messages.length-1].id+1:0,user_id:k.user_id,text_id:k.id,text:k.msgText,date:k.date},Object(d.a)({},I,{texts:[].concat(Object(u.a)(I.texts),[n]),messages:[].concat(Object(u.a)(I.messages),[i])});case E:return a=I.pages.length>0?I.pages[I.pages.length-1].id+1:0,l={name:k.name,id:a,pdf_id:k.pdf_id,user_id:k.user_id,load_date:R(),last_edit_date:R()},Object(d.a)({},I,{pages:[].concat(Object(u.a)(I.pages),[l])});case g:return e=I.texts.filter((function(e){return e.id!==k.id})),t=I.messages.filter((function(e){return e.text_id!==k.id})),Object(d.a)({},I,{texts:e,messages:t});case f:return t=I.messages.filter((function(e){return e.id!==k.id})),Object(d.a)({},I,{messages:t});case v:r=I.pages.filter((function(e){return e.id!==k.id})),e=I.texts.filter((function(e){return e.page_id!==k.id}));var P=I.texts.filter((function(e){return e.page_id==k.id})).map((function(e){return e.id}));return t=I.messages.filter((function(e){return-1==P.indexOf(e.text_id)})),Object(d.a)({},I,{pages:r,texts:e,messages:t});case x:return s=null,c=Object(u.a)(I.users),(F=I.users.filter((function(e){return e.name==k.name&&e.pass==k.pass}))).length>0?s=F[0].id:(a=I.users.length>0?I.users[I.users.length-1].id+1:0,c=[].concat(Object(u.a)(I.users),[{id:a,name:k.name,pass:k.pass}]),s=a),Object(d.a)({},I,{current_user:{id:s},users:Object(u.a)(c)});case h:return Object(d.a)({},I,{current_user:{id:null}});case O:return s=null,c=Object(u.a)(I.users),(F=I.users.filter((function(e){return e.name==k.login&&e.pass==k.pass}))).length>0?s=F[0].id:(a=I.users.length>0?I.users[I.users.length-1].id+1:0,c=[].concat(Object(u.a)(I.users),[{id:a,name:k.login,pass:k.pass}]),s=a),N=I.pages.length>0?I.pages[I.pages.length-1].id+1:0,l={name:k.name,id:N,pdf_id:k.pdf_id,user_id:s,load_date:R(),last_edit_date:R()},Object(d.a)({},I,{pages:[].concat(Object(u.a)(I.pages),[l]),current_user:{id:s},users:Object(u.a)(c)});case j:var C={id:a=I.pdfs.length>0?I.pdfs[I.pdfs.length-1].id+1:0,path:k.path,images:k.images,user_id:k.user_id,load_date:R(),last_edit_date:R()};return Object(d.a)({},I,{pdfs:[].concat(Object(u.a)(I.pdfs),[C])});case y:return r=I.pages.map((function(e){return e.id==k.id&&(e.last_edit_date=R()),e})),Object(d.a)({},I,{pages:Object(u.a)(r)});case w:console.log(k.id,"pdf action");var A=I.pdfs.map((function(e){return e.id==k.id&&(e.last_edit_date=R()),e}));return Object(d.a)({},I,{pdfs:Object(u.a)(A)});case T:return console.log(k.id,"page action"),r=I.pages.map((function(e){return e.id==k.id&&(e.last_edit_date=R()),e})),Object(d.a)({},I,{pages:Object(u.a)(r)});default:return I}}));Object(r.render)(i.a.createElement(l.a,{store:_e},i.a.createElement(c.a,null,i.a.createElement(fe,null))),document.getElementById("root"))},71:function(e,t,a){e.exports=a(106)}},[[71,1,2]]]);
//# sourceMappingURL=main.1effe321.chunk.js.map
(this.webpackJsonpmy_editor=this.webpackJsonpmy_editor||[]).push([[0],{112:function(e,t,a){},113:function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),r=a(23),l=a(11),s=a(42),c=a(25),u=a(6),d=a(4),o=a(26),m=a.n(o),g=a(56),p=a.n(g),f="CHANGE_ACTIVE_PDF",b="CHANGE_TEXT_VALUE",v="REMOVE_TEXT_VALUE",E="ADD_NEW_TEXT_VALUE",_="REMOVE_MESSAGE",h="ADD_NEW_MESSAGE",x="ADD_FIRST_MESSAGE",O="REMOVE_PAGE",j="ADD_NEW_PAGE",y="SIGN_FORM",w="SIGN_OUT_FORM",k="SIGN_FORM_AND_ADD_NEW_PAGE",N="ADD_PDF",F="REMOVE_PDF",I="CHANGE_PDF_DATE",T="CHANGE_PAGE_DATE",C="CHANGE_PAGE_NAME",S="LOAD_USERS",D="LOAD_PAGES",P="LOAD_PDFS",A="LOAD_TEXTS",B="LOAD_MESSAGES",R="LOAD_CURRENT_USER";function L(e){return{type:b,id:e.id,text:e.text,max_width:e.max_width,x:e.x,y:e.y,status:e.status}}function G(e){return{type:O,id:e}}function U(e){return{type:y,name:e.login,pass:p.a.hex_md5(e.pass)}}function M(e){return{type:N,path:e.path,images:e.images,user_id:e.user_id}}function z(e){return{type:I,id:e}}function H(e){return{type:T,id:e}}function V(e){return{type:S,data:e}}function J(e){return{type:D,data:e}}function W(e){return{type:A,data:e}}function Y(e){return{type:P,data:e}}function X(e){return{type:B,data:e}}function q(e){return{type:R,id:e}}function K(e,t){return!!(e.className&&e.className.split&&e.className.split(" ").indexOf(t)>=0)||e.parentNode&&K(e.parentNode,t)}function Q(e){var t=e?new Date(e):new Date,a=""+["Jan","Feb","March","Apr","May","June","July","Aug","Sep","Oct","Nov","Dec"][t.getMonth()],n=""+t.getDate(),i=t.getFullYear(),r=t.getHours(),l=t.getMinutes();return a.length<2&&(a="0"+a),n.length<2&&(n="0"+n),n+" "+a+","+i+" "+r+":"+l}var Z={current_user:{id:null},users:[],pdfs:[],texts:[],messages:[],active_pdf_index:0,pages:[]};var $=a(44),ee=a(30),te=a(47),ae=a(20),ne=a(33),ie=a(13),re=a(10),le=a(8),se=a(43),ce=a(9),ue=a(12),de=a(21),oe=a(50),me=a(35),ge=a(40),pe=function(e){var t={login:"",pass:"",name:""},a={login:!1,pass:!1,name:!1},r={name:e.addPage,login:e.signIn,pass:e.signIn},l=Object(n.useState)(!1),s=Object(ce.a)(l,2),c=s[0],u=s[1],o=Object(n.useState)(Object(d.a)({},t)),m=Object(ce.a)(o,2),g=m[0],p=m[1],f=Object(n.useState)(Object(d.a)({},a)),b=Object(ce.a)(f,2),v=b[0],E=b[1],_=function(){return u(!1)},h=function(e){p(Object(d.a)({},g,Object(se.a)({},e.target.getAttribute("name"),e.target.value))),E(Object(d.a)({},a))},x="",O="",j="",y="";return e.signIn&&(x=i.a.createElement(ge.a,null,i.a.createElement(ge.a.Body,null,i.a.createElement(ge.a.Title,null,"Login or Register ",i.a.createElement("small",null,"(if you don't have an account)")),i.a.createElement(ge.a.Text,null,i.a.createElement("div",null,i.a.createElement(oe.a.Control,{size:"sm",name:"login",type:"text",value:g.login,placeholder:"Login",onChange:h}),v.login?i.a.createElement(me.a,{variant:"danger"},"Required field"):i.a.createElement(i.a.Fragment,null)),i.a.createElement("div",null,i.a.createElement(oe.a.Control,{size:"sm",name:"pass",type:"password",value:g.pass,placeholder:"Password",onChange:h}),v.pass?i.a.createElement(me.a,{variant:"danger"},"Required field"):i.a.createElement(i.a.Fragment,null)))))),e.sureRemove&&(O=i.a.createElement("div",null,"Are you sure? You won't be able to recover this page! ")),e.sureRemovePdf&&(j=i.a.createElement("div",null,"Are you sure? You won't be able to recover this Pdf and all pages created from this Pdf will be removed! ")),e.addPage&&(y=i.a.createElement("div",null,i.a.createElement(oe.a.Control,{size:"sm",type:"text",name:"name",value:g.name,placeholder:"Name",onChange:h}),v.name?i.a.createElement(me.a,{variant:"danger"},"Required field"):i.a.createElement(i.a.Fragment,null))),i.a.createElement(i.a.Fragment,null,i.a.createElement(ue.a,{size:e.button.large?"lg":"sm",variant:"primary",onClick:function(){return u(!0)}},e.button.icon?i.a.createElement(re.a,{icon:e.button.icon}):"",e.button.title),i.a.createElement(de.a,{show:c,onHide:_,animation:!1},i.a.createElement(de.a.Header,{closeButton:!0},i.a.createElement(de.a.Title,null,e.title)),i.a.createElement(de.a.Body,null,x,"",O,j,y),i.a.createElement(de.a.Footer,null,e.buttons.map((function(e,a){return i.a.createElement(ue.a,{size:"sm",key:a,variant:"primary",onClick:function(){(function(){var e=!0,t={};for(var a in r)if(r[a]){var n=0==g[a].trim().length;t[a]=n,n&&(e=!1)}else t[a]=!1;return E(Object(d.a)({},t)),e})()&&("function"===typeof e.func&&e.func(g),_(),p(Object(d.a)({},t)))}},e.title)})))))},fe=a(29),be=function(e){var t=e.pdf,a=e.dispatch,n={signIn:!1,signUp:!1,sureRemovePdf:!0,title:"Remove PDF File",button:{title:"Remove PDF",icon:le.k},buttons:[{title:"Cancel"},{title:"Remove it!",func:function(){var e;a((e=t.id,{type:F,id:e}))}}]};return i.a.createElement(ie.a.Item,{className:t.is_active?"list-group-item-primary":""},i.a.createElement("div",{className:"itemTitle"},i.a.createElement(ue.a,{variant:"link",onClick:function(e){var n;e.preventDefault(),a((n=t.index,{type:f,index:n}))}},i.a.createElement("span",null,t.path," ",i.a.createElement(re.a,{icon:le.e})))),i.a.createElement("div",{className:"absBtns"},null!==t.current_user.id&&t.user&&t.current_user.id==t.user.id?i.a.createElement(fe.a,null,i.a.createElement(pe,n)):i.a.createElement(i.a.Fragment,null)),i.a.createElement("div",{className:"calendarBlock"},i.a.createElement("div",{className:"calendarIcon"},i.a.createElement(re.a,{icon:le.a})),i.a.createElement("div",{className:"calendarValue"},t.user?i.a.createElement("div",null,i.a.createElement("small",null,"Loaded by ",t.user.id==t.current_user.id?"you":t.user.name," ",t.load_date),i.a.createElement("div",null,i.a.createElement("small",null,"Last pages edits - ",t.last_edit_date))):i.a.createElement(i.a.Fragment,null))))},ve=be=Object(l.b)()(be),Ee=a(72),_e=Object(l.b)((function(e){return{current_user:e.current_user}}))((function(e){var t=e.current_user,a=e.dispatch,r=Object(n.useState)(null),l=Object(ce.a)(r,2),s=l[0],c=l[1],u=Object(n.useState)(null),m=Object(ce.a)(u,2),g=m[0],p=m[1],f=Object(n.useState)({show:!1,title:"",text:""}),b=Object(ce.a)(f,2),v=b[0],E=b[1],_=function(e){var t=new FormData;t.append("file",e);return Object(o.post)("/upload.php",t,{headers:{"content-type":"multipart/form-data"}})};return i.a.createElement(i.a.Fragment,null,i.a.createElement("form",{onSubmit:function(e){e.preventDefault(),s&&p(!0),_(s).then((function(e){p(!1);var n=e.data;0==n.error&&a(M({path:n.file,images:JSON.parse(n.images),user_id:t.id}))}))}},i.a.createElement("h6",null,"Upload PDF File"),g?i.a.createElement("span",null,i.a.createElement(Ee.a,{animation:"border",variant:"secondary"}),"Wait please, File is Loading..."):i.a.createElement(i.a.Fragment,null,i.a.createElement("div",{className:"custom-file"},i.a.createElement("input",{type:"file",className:"custom-file-input",id:"inputGroupFile01","aria-describedby":"inputGroupFileAddon01",onChange:function(e){c(e.target.files[0]),e.target.files[0]&&(p(!0),_(e.target.files[0]).then((function(e){p(!1);var n=e.data;0==n.error?a(M({path:n.file,images:JSON.parse(n.images),user_id:t.id})):E(Object(d.a)({},v,{show:!0,title:"File Upload Error",text:"File wasn't loaded. "+n.error}))})).catch((function(e){p(!1),E(Object(d.a)({},v,{show:!0,title:"File Upload Error",text:"File wasn't loaded. Somthing went wrong..."}))})))},size:"sm"}),i.a.createElement("label",{className:"custom-file-label",size:"sm",htmlFor:"inputGroupFile01"},"Choose file"),i.a.createElement("button",{type:"submit",style:{display:"none"}},"Upload")))),i.a.createElement(de.a,{show:v.show,onHide:function(){E(Object(d.a)({},v,{show:!1}))}},i.a.createElement(de.a.Header,{closeButton:!0},i.a.createElement(de.a.Title,null,v.title)),i.a.createElement(de.a.Body,null,v.text),i.a.createElement(de.a.Footer,null,i.a.createElement(ue.a,{variant:"primary",onClick:function(){E(Object(d.a)({},v,{show:!1}))}},"Ok"))))})),he=Object(l.b)((function(e){return{pdfs:e.pdfs,active_pdf_index:e.active_pdf_index,users:e.users,current_user:e.current_user}}))((function(e){var t=e.pdfs,a=e.active_pdf_index,n=e.users,r=e.current_user,l=e.dispatch,s={signIn:!0,signUp:!1,title:"Login or Register to Upload File",button:{title:"Upload PDF File",icon:le.j,large:!0},buttons:[{title:"Cancel"},{title:"Ok",func:function(e){l(U(e))}}]};return i.a.createElement(ie.a,{className:"list-group-flush"},i.a.createElement(ie.a.Item,{className:"topItem"},null==r.id?i.a.createElement(pe,s):i.a.createElement(_e,null)),i.a.createElement("div",{className:"scrollBlock"},t.sort((function(e,t){var a=new Date(e.last_edit_date),n=new Date(t.last_edit_date);return+a>+n?-1:+a<+n?1:0})).map((function(e,t){var l=n.filter((function(t){return t.id==e.user_id})),s=l.length>0?l[0]:null,c=Object(d.a)({},e,{is_active:t===a,index:t,user:s,current_user:r});return i.a.createElement(ve,Object.assign({key:t},{pdf:c}))})),0==t.length?i.a.createElement(ie.a.Item,null,"Don't have any PDF Files"):i.a.createElement(i.a.Fragment,null)))})),xe=function(e){var t=e.page,a=e.dispatch,n={signIn:!1,signUp:!1,sureRemove:!0,title:"Remove Book",button:{title:"Remove Book",icon:le.k},buttons:[{title:"Cancel"},{title:"Remove it!",func:function(){a(z(t.pdf_id)),a(G(t.id))}}]};return i.a.createElement(ie.a.Item,null,i.a.createElement("div",{className:"itemTitle"},i.a.createElement(c.b,{to:"/pages/"+t.id},i.a.createElement("span",null,t.name)," ",i.a.createElement(re.a,{icon:le.e}))),i.a.createElement("div",{className:"absBtns"},t.user&&t.user.id==t.current_user.id?i.a.createElement(fe.a,null,i.a.createElement(pe,n)):i.a.createElement(i.a.Fragment,null)),i.a.createElement("div",{className:"calendarBlock"},i.a.createElement("div",{className:"calendarIcon"},i.a.createElement(re.a,{icon:le.a})),i.a.createElement("div",{className:"calendarValue"},t.user?i.a.createElement("div",null,i.a.createElement("small",null,"Added by ",t.user.id==t.current_user.id?"you":t.user.name," ",t.load_date),i.a.createElement("div",null,i.a.createElement("small",null,"Last edit - ",t.last_edit_date))):i.a.createElement(i.a.Fragment,null))))},Oe=xe=Object(l.b)()(xe),je=Object(l.b)((function(e){return{pages:e.pages,pdfs:e.pdfs,active_pdf_index:e.active_pdf_index,users:e.users,current_user:e.current_user}}))((function(e){var t=e.pages,a=e.pdfs,n=e.active_pdf_index,r=e.users,l=e.current_user,s=e.dispatch,c=a.length>0?a[n].id:null,u=a.length>0?a[n].path:null,o=t.filter((function(e){return c==e.pdf_id})),m={signIn:!1,signUp:!1,addPage:!0,title:"Create New Book",button:{title:"Create New Book",icon:le.j,large:!0},buttons:[{title:"Cancel"},{title:"Create New Book",func:function(e){var t;s(z(c)),s((t={name:e.name,pdf_id:c,user_id:l.id},{type:j,name:t.name,pdf_id:t.pdf_id,user_id:t.user_id}))}}]},g={signIn:!0,signUp:!0,addPage:!0,title:"Create New Book",button:{title:"Create New Book",icon:le.j,large:!0},buttons:[{title:"Cancel"},{title:"Ok",func:function(e){var t;s(z(c)),s((t={name:e.name,pdf_id:c,login:e.login,pass:e.pass},{type:k,name:t.name,pdf_id:t.pdf_id,login:t.login,pass:p.a.hex_md5(t.pass)}))}}]};return i.a.createElement(i.a.Fragment,null,a.length>0?i.a.createElement(ie.a,{className:"list-group-flush"},i.a.createElement(ie.a.Item,{className:"topItem"},null!==l.id?i.a.createElement(pe,m):i.a.createElement(pe,g),o.length>0&&null!==u?i.a.createElement("div",{className:"topItemText"},"Books, created from  ",u,": "):i.a.createElement(i.a.Fragment,null)),i.a.createElement("div",{className:"scrollBlock"},o.sort((function(e,t){var a=new Date(e.last_edit_date),n=new Date(t.last_edit_date);return+a>+n?-1:+a<+n?1:0})).map((function(e,t){var a=r.filter((function(t){return t.id==e.user_id})),n=a.length>0?a[0]:null,s=Object(d.a)({},e,{user:n,current_user:l});return i.a.createElement(Oe,Object.assign({key:t},{page:s}))})),0==o.length?i.a.createElement(ie.a.Item,null,"Don't have any Books"):i.a.createElement(i.a.Fragment,null))):i.a.createElement(i.a.Fragment,null))})),ye=Object(l.b)((function(e){return{pdfs:e.pdfs,active_pdf_index:e.active_pdf_index}}))((function(e){e.pdfs,e.active_pdf_index;return i.a.createElement(i.a.Fragment,null,i.a.createElement(ne.a,null,i.a.createElement(ae.a,null,i.a.createElement("div",{className:"blockBorder"},i.a.createElement(he,null)))),i.a.createElement(ne.a,null,i.a.createElement(ae.a,null,i.a.createElement("div",{className:"blockBorder"},i.a.createElement(je,null)))))})),we=(a(108),function(e){var t=e.images,a=e.activeIndex,r=e.items,l=e.onPageChange,s=(e.pageId,Object(n.useState)(0)),c=Object(ce.a)(s,2),u=c[0],d=c[1],o=Object(n.useState)(0),m=Object(ce.a)(o,2),g=m[0],p=m[1],f=Object(n.useState)(t),b=Object(ce.a)(f,2),v=b[0],E=b[1],_=function(e,a){e.preventDefault();var n=parseInt(t.length/r),i="next"==a?u<n?u+1:0:0==u?n:u-1;if(d(i),!(g>=r*i&&g<r*i+r)){var s=r*i;p(s),window.location.hash="#page_"+s,"function"==typeof l&&l({selected:s})}E(t.filter((function(e,t){return t>=r*i&&t<r*i+r})))};return Object(n.useEffect)((function(){var e=u;console.log(a,"activeIndex"),a>0&&(p(a),a>r*u+r&&(e=parseInt(a/r),d(e))),E(t.filter((function(t,a){return a>=r*e&&a<r*e+r}))),console.log("--pag->>>")}),[t]),i.a.createElement("div",{className:"imagePreviewsContainer"},v.length<r?i.a.createElement(i.a.Fragment,null):i.a.createElement("div",{className:"imagePreviewsPrev",onClick:function(e){_(e,"prev")}},i.a.createElement(re.a,{icon:le.f})),i.a.createElement("div",{className:"imagePreviews"},v.map((function(e,t){var a=e.replace(".png","_preview.png").replace(".jpg","_preview.jpg");return i.a.createElement("div",{onClick:function(e){e.preventDefault();var a=r*u+t;p(a),window.location.hash="#page_"+a,"function"==typeof l&&l({selected:a})},className:g==r*u+t?"active imagePreview":"imagePreview"},i.a.createElement("img",{src:a}),i.a.createElement("span",{className:"imagePreviewNumber"},i.a.createElement("span",null,r*u+t+1)))}))),v.length<r?i.a.createElement(i.a.Fragment,null):i.a.createElement("div",{onClick:function(e){_(e,"next")},className:"imagePreviewsNext"},i.a.createElement(re.a,{icon:le.c})))}),ke=Object(l.b)((function(e){return{pages:e.pages,pdfs:e.pdfs,texts:e.texts,messages:e.messages,users:e.users,current_user:e.current_user}}))((function(e){var t=e.text,a=e.saveTextFunction,r={height:0,width:0},l=Object(n.useState)(""),s=Object(ce.a)(l,2),c=s[0],u=s[1],o=Object(n.useState)(Object(d.a)({},r)),m=Object(ce.a)(o,2),g=m[0],p=m[1],f=Object(n.useState)(null),b=Object(ce.a)(f,2),v=b[0],E=b[1],_=Object(n.useState)(null),h=Object(ce.a)(_,2),x=h[0],O=h[1],j=Object(n.useState)(Object(d.a)({},{edit:"inline-block",save:"none"})),y=Object(ce.a)(j,2),w=y[0],k=y[1],N=function e(t){v&&!v.contains(t.target)&&(u(""),k({edit:"inline-block",save:"none"}),p(Object(d.a)({},r)),document.removeEventListener("mousedown",e))},F=function(e){e.preventDefault();var a=x.getBoundingClientRect();console.log(a,"rexr"),u(t),k({edit:"none",save:"inline-block"}),p({width:a.width+10,height:a.height+10}),document.addEventListener("mousedown",N)};return i.a.createElement(i.a.Fragment,null,i.a.createElement("div",{className:"editableFieldParent",ref:E},i.a.createElement("div",{className:"editableFieldValue",style:{display:w.edit},ref:O,onClick:F},t),i.a.createElement("textarea",{style:{display:w.save,width:g.width,height:g.height},className:"editableFieldField",value:c,onChange:function(e){u(e.target.value)}}),i.a.createElement(ue.a,{size:"sm",style:{display:w.edit},onClick:F},i.a.createElement(re.a,{icon:le.g}),"Edit"),i.a.createElement(ue.a,{size:"sm",style:{display:w.save},onClick:function(e){c.trim().length>0&&"function"==typeof a&&(a(c),u(""),k({edit:"inline-block",save:"none"})),p(Object(d.a)({},r)),document.removeEventListener("mousedown",N)}},"Save")))})),Ne=Object(ee.f)(ke),Fe=function(e){var t=e.page,a=e.newTextId,r=e.dispatch;console.log(t,"page");var l=parseInt(window.innerHeight/40)-2;l<5&&(l=5);var s={visibility:"hidden",left:0,top:0,value:"",width:0,height:0,imageTextId:null},c={remove:"visible",move:"visible",warning:"visible",ok:"visible",message:"visible"},o={warning:!1,ok:!1,message:!0},m=0,g=window.location.hash;if(-1!==g.indexOf("#page_")){var p=parseInt(g.replace("#page_",""));!isNaN(p)&&p>0&&p<t.pdf.images.length&&(m=p)}console.log(m,"startImageIndex");var f=Object(n.useRef)(null),b=Object(n.useState)([]),O=Object(ce.a)(b,2),j=O[0],y=O[1],w=Object(n.useState)([]),k=Object(ce.a)(w,2),N=k[0],F=k[1],I=Object(n.useState)(""),T=Object(ce.a)(I,2),S=T[0],D=T[1],P=Object(n.useState)(m),A=Object(ce.a)(P,2),B=A[0],R=A[1],U=Object(n.useState)(Object(d.a)({},s)),M=Object(ce.a)(U,2),V=M[0],J=M[1],W=Object(n.useState)(Object(d.a)({},c)),Y=Object(ce.a)(W,2),X=Y[0],q=Y[1],Z=Object(n.useState)(Object(d.a)({},o)),$=Object(ce.a)(Z,2),ee=$[0],ne=$[1],ie=Object(n.useState)(!1),se=Object(ce.a)(ie,2),de=(se[0],se[1]),oe={signIn:!1,signUp:!1,sureRemove:!0,title:"Remove Book",button:{title:"Remove Book",icon:le.k},buttons:[{title:"Cancel"},{title:"Remove it!",func:function(){r(G(t.id))}}]},ge=function(e,a){var n;r((n=a.id,{type:_,id:n})),r(H(t.id)),r(z(t.pdf_id)),ve().then((function(e){y(Object(u.a)(Ee(j,{id:V.imageTextId,visibility:"hidden"})));var a=t.texts.filter((function(e){return e.id==V.imageTextId}))[0].messages;F(Object(u.a)(a))}))},be=function(e){if(S.trim().length>0){e.preventDefault();var n=V.imageTextId;null==V.imageTextId?(r((i={text:"",max_width:0,x:V.left,y:V.top,page_id:t.id,image_index:B,id:a,user_id:t.current_user.id,msgText:S,date:Q()},{type:x,user_id:i.user_id,msgText:i.msgText,date:i.date,text:i.text,max_width:i.max_width,x:i.x,y:i.y,page_id:i.page_id,image_index:i.image_index,id:i.id})),r(H(t.id)),r(z(t.pdf_id)),J(Object(d.a)({},V,{imageTextId:a})),n=a,console.log(a,"newTextId")):(r(function(e){return{type:h,user_id:e.user_id,text_id:e.text_id,text:e.text,date:e.date}}({text:S,date:Q(),text_id:V.imageTextId,user_id:t.current_user.id})),r(H(t.id)),r(z(t.pdf_id))),ve().then((function(e){y(Object(u.a)(Ee(_e(),{id:n,visibility:"hidden"})));var a=t.texts.filter((function(e){return e.id==n}));a.length>0&&F(Object(u.a)(a[0].messages)),D("")}))}var i},ve=function(){var e=f.current.getContext("2d"),a=new Image;return a.src=t.pdf.images[B],new Promise((function(t){a.onload=function(){var n=1e3*a.height/a.width;e.canvas.width=1e3,e.canvas.height=n,e.clearRect(0,0,e.canvas.width,e.canvas.height),e.drawImage(a,0,0,1e3,n),y(_e()),t({status:"ok"})}}))},Ee=function(e,t){return e.map((function(e){var a="visible";return void 0!==t&&e.id==t.id&&(a=t.visibility),e.visibility=a,e}))},_e=function(){var e=t.texts.filter((function(e){return e.image_index==B}));return e.forEach((function(e){e.messages=t.messages.filter((function(t){return t.text_id==e.id}))})),Ee(e)};return Object(n.useEffect)((function(){ve(B),console.log("---ed---\x3e>>")}),[B]),i.a.createElement(te.a,{onClick:function(e){K(e.target,"imageTexts")||(de(!1),J(Object(d.a)({},s)),y(Object(u.a)(Ee(j))))}},i.a.createElement(ae.a,null,t.user&&t.user.id==t.current_user.id?i.a.createElement("div",{className:"removeBookBtnParent"},i.a.createElement(fe.a,{className:"removeBookBtn"},i.a.createElement(pe,oe))):i.a.createElement(i.a.Fragment,null),i.a.createElement("div",null,i.a.createElement("h2",{className:"bookPageTitle"},t.user&&t.user.id==t.current_user.id?i.a.createElement(Ne,{text:t.name,saveTextFunction:function(e){console.log("new name",e),r(function(e,t){return{type:C,id:e,name:t}}(t.id,e)),r(H(t.id)),r(z(t.pdf_id))}}):i.a.createElement(i.a.Fragment,null,t.name)," ")),i.a.createElement("div",{style:{width:"100%"}},i.a.createElement("div",{className:"calendarBlock"},i.a.createElement("div",{className:"calendarIcon"},i.a.createElement(re.a,{icon:le.a})),i.a.createElement("div",{className:"calendarValue"},t.user?i.a.createElement("div",null,i.a.createElement("small",null,"Added by ",t.user.id==t.current_user.id?"you":t.user.name," ",t.load_date),i.a.createElement("div",null,i.a.createElement("small",null,"Last edit - ",t.last_edit_date))):i.a.createElement(i.a.Fragment,null)))),i.a.createElement(we,{images:t.pdf.images,items:l,onPageChange:function(e){R(e.selected)},activeIndex:B,pageId:t.id})),i.a.createElement(ae.a,null,i.a.createElement("div",{className:"imageParent"},i.a.createElement("canvas",{ref:f}),i.a.createElement("div",{className:"imageTexts",onClick:function(e){if(!K(e.target,"imageText")&&!K(e.target,"imageTextFileldParent")){q(Object(d.a)({},c,{remove:"hidden",ok:"hidden",warning:"hidden"})),ne(Object(d.a)({},o));var t=e.target.getBoundingClientRect();J(Object(d.a)({},s,{visibility:"visible",width:120,height:30,left:e.clientX-t.x,top:e.clientY-t.y})),F([]),y(Object(u.a)(Ee(j)))}}},j.map((function(e,a){return i.a.createElement("div",{key:a,style:{position:"absolute",zIndex:3,left:e.x,top:e.y,maxWidth:e.max_width,visibility:e.visibility,borderWidth:t.user&&t.user.id==t.current_user.id||""!=e.text?1:0},className:e.status?"imageText "+e.status+"Text":"imageText",onClick:function(t){!function(e,t,a,n,i){e.preventDefault(),e.stopPropagation(),de(!1),q(Object(d.a)({},c)),ne(Object(d.a)({},o,{warning:"warning"==a,ok:"ok"==a}));var r=e.currentTarget.getBoundingClientRect();J({visibility:"visible",left:e.currentTarget.offsetLeft,top:e.currentTarget.offsetTop,value:i,width:r.width+30,height:r.height>30?r.height:30,imageTextId:t}),F(Object(u.a)(n)),y(Object(u.a)(Ee(j,{id:t,visibility:"hidden"})))}(t,e.id,e.status,e.messages,e.text)}},i.a.createElement("span",null,e.text),e.messages.length>0?i.a.createElement(ue.a,{variant:"primary",size:"sm"},i.a.createElement(re.a,{icon:le.h}),e.messages.length):i.a.createElement(i.a.Fragment,null))})),i.a.createElement("div",{className:"imageTextFileldParent",style:{left:V.left,top:V.top,visibility:V.visibility}},i.a.createElement("textarea",{disabled:!(t.user&&t.user.id==t.current_user.id),placeholder:"Your text...",onChange:function(e){if(J(Object(d.a)({},V,{value:e.target.value})),e.target.value.trim().length>0)if(null==V.imageTextId){r((n={text:e.target.value,max_width:e.target.offsetWidth,x:V.left,y:V.top,page_id:t.id,image_index:B,id:a},{type:E,text:n.text,max_width:n.max_width,x:n.x,y:n.y,page_id:n.page_id,image_index:n.image_index,id:n.id})),r(H(t.id)),r(z(t.pdf_id)),q(Object(d.a)({},c,{remove:"visible"})),J(Object(d.a)({},V,{imageTextId:a,value:e.target.value}));e.target.value;ve().then((function(e){y(Object(u.a)(Ee(_e(),{id:V.imageTextId,visibility:"hidden"})))}))}else r(L({text:e.target.value,id:V.imageTextId,max_width:e.target.offsetWidth,x:V.left,y:V.top})),r(H(t.id)),r(z(t.pdf_id)),y(Object(u.a)(Ee(_e(),{id:V.imageTextId,visibility:"hidden"})));var n},style:{width:""!=V.value||t.user&&t.user.id==t.current_user.id?V.width:0,borderWidth:t.user&&t.user.id==t.current_user.id?1:0,height:V.height,resize:t.user&&t.user.id==t.current_user.id?"both":"none"},value:V.value,className:ee.warning?"form-control form-control-warning imageTextFileld":ee.ok?"form-control form-control-ok imageTextFileld":"form-control imageTextFileld",rows:"1"}),i.a.createElement("div",{className:"imageTextFileldButtons"},t.user&&t.user.id==t.current_user.id?i.a.createElement(ue.a,{style:{display:"visible"==X.remove?"inline":"none"},onClick:function(e){var a;r((a=V.imageTextId,{type:v,id:a})),r(H(t.id)),r(z(t.pdf_id)),J(Object(d.a)({},s)),ve()},variant:"outline-primary",size:"sm"},i.a.createElement(re.a,{icon:le.k})):i.a.createElement(i.a.Fragment,null),i.a.createElement(ue.a,{style:{display:"visible"==X.warning?"inline":"none"},onClick:function(e){e.preventDefault(),e.stopPropagation(),r(L({text:V.value,id:V.imageTextId,max_width:V.max_width,x:V.left,y:V.top,status:ee.warning?null:"warning"})),r(H(t.id)),r(z(t.pdf_id)),ne(Object(d.a)({},o,{warning:!ee.warning,ok:!!ee.warning&&ee.ok})),ve().then((function(e){y(Object(u.a)(Ee(j,{id:V.imageTextId,visibility:"hidden"})))}))},variant:ee.warning?"danger":"outline-danger",size:"sm"},i.a.createElement(re.a,{icon:le.i})),i.a.createElement(ue.a,{style:{display:"visible"==X.ok?"inline":"none"},onClick:function(e){e.preventDefault(),e.stopPropagation(),r(L({text:V.value,id:V.imageTextId,max_width:V.max_width,x:V.left,y:V.top,status:ee.ok?null:"ok"})),r(H(t.id)),r(z(t.pdf_id)),ne(Object(d.a)({},o,{warning:!!ee.ok&&ee.warning,ok:!ee.ok})),ve().then((function(e){y(Object(u.a)(Ee(j,{id:V.imageTextId,visibility:"hidden"})))}))},variant:ee.ok?"success":"outline-success",size:"sm"},i.a.createElement(re.a,{icon:le.b})),i.a.createElement(ue.a,{style:{display:"visible"==X.message?"inline":"none"},onClick:function(){ne(Object(d.a)({},ee,{message:!ee.message}))},variant:ee.message?"primary":"outline-primary",size:"sm"},i.a.createElement(re.a,{icon:le.h}))),i.a.createElement("div",{className:"imageTextFileldMessageParent",style:{display:ee.message?"block":"none"}},i.a.createElement(me.a,{variant:"primary"},N.map((function(e,a){var n=t.users.filter((function(t){return t.id==e.user_id})),r=n.length>0?n[0]:null;return i.a.createElement("div",{key:a},i.a.createElement("div",null,r?i.a.createElement(i.a.Fragment,null,r.id==t.current_user.id?"you":r.name,", "):i.a.createElement(i.a.Fragment,null,"unsigned user, ")," ",e.date),i.a.createElement("div",null,e.text),r&&r.id==t.current_user.id&&i.a.createElement(ue.a,{onClick:function(t){ge(0,e)},variant:"outline-primary",size:"sm"},i.a.createElement(re.a,{icon:le.k})),i.a.createElement("hr",null))})),i.a.createElement("div",null,i.a.createElement("textarea",{onChange:function(e){D(e.target.value)},placeholder:"Your message...",className:"form-control imageTextFileldMessageField",rows:"4",value:S}),i.a.createElement(fe.a,{className:"imageTextFileldMessageBtn"}," ",i.a.createElement(ue.a,{className:"simpBtn",onClick:function(e){be(e)},variant:"primary",size:"sm"},"Add Message")," ")))))))))},Ie=Fe=Object(l.b)()(Fe),Te=Object(l.b)((function(e){return{pages:e.pages,pdfs:e.pdfs,texts:e.texts,messages:e.messages,users:e.users,current_user:e.current_user}}))((function(e){var t=e.pages,a=e.pdfs,n=e.texts,r=e.messages,l=e.users,s=e.current_user,u=(e.history,Object(ee.e)().id),d=t.filter((function(e){return e.id==u})),o=d.length>0?d[0]:null,m=n&&n.length>0?n[n.length-1].id+1:0;if(null!==o){var g=a.filter((function(e){return e.id==o.pdf_id})),p=g.length>0?g[0]:null;o.pdf=p;var f=n&&n.filter((function(e){return e.page_id==u}));o.texts=f,o.texts&&(o.messages=r),o.users=l,o.current_user=s;var b=l.filter((function(e){return e.id==o.user_id})),v=b.length>0?b[0]:null;o.user=v}return i.a.createElement(i.a.Fragment,null,i.a.createElement($.Helmet,null,i.a.createElement("title",null,"Edit Homework ",null!==o&&null!==o.pdf?" - "+o.pdf.path+" - "+o.name:"")),i.a.createElement(c.b,{to:"/",className:"backLink"}," ",i.a.createElement(re.a,{icon:le.d})," Back To Home Page"),null===o||null==o.pdf?i.a.createElement(i.a.Fragment,null):i.a.createElement(Ie,{page:o,newTextId:m}))})),Ce=Object(ee.f)(Te),Se=Object(l.b)((function(e){return{current_user:e.current_user,users:e.users}}))((function(e){var t=e.current_user,a=e.users,n=e.dispatch,r={signIn:!0,signUp:!1,title:"Login or Register",button:{title:"Login or Register"},buttons:[{title:"Cancel"},{title:"Ok",func:function(e){n(U(e))}}]},l=null;if(null!==t.id){var s=a.filter((function(e){return e.id==t.id}));l=s.length>0?s[0]:null}return i.a.createElement(ie.a,{className:"topUserBlock"},null==t.id?i.a.createElement(ie.a.Item,null,i.a.createElement(pe,r)):i.a.createElement(ie.a.Item,null,"Hello, ",i.a.createElement("strong",null,l?l.name:"")," ",i.a.createElement("div",null,i.a.createElement(ue.a,{onClick:function(){n({type:w})},variant:"primary",size:"sm"},"SignOut"))))})),De=Se=Object(l.b)()(Se);a(112);var Pe=Object(l.b)()(Object(ee.f)((function(e){e.location;var t=e.dispatch;return Object(n.useEffect)((function(){!function(){var e=[["users",V],["pages",J],["texts",W],["pdfs",Y],["messages",X]],a=[];e.forEach((function(e){var t=new FormData;t.append("action","get"),t.append("data",""),t.append("name",e[0]),a.push(Object(o.post)("/db.php",t))})),m.a.all(a).then(m.a.spread((function(){for(var a=arguments.length,n=new Array(a),i=0;i<a;i++)n[i]=arguments[i];e.forEach((function(e,a){var i=n[a];0==i.data.error&&t(e[1](JSON.parse(i.data.data)))}));var r=localStorage.getItem("current_user_edithomework");null!==r&&t(q(r))}))).catch((function(e){console.log("loading error")}))}()}),[]),i.a.createElement(te.a,null,i.a.createElement($.Helmet,null,i.a.createElement("title",null,"Edit Homework")),i.a.createElement(ae.a,{className:"headerBlock"},i.a.createElement(c.b,{className:"mainLogoLink",to:"/"},i.a.createElement("h1",{className:"mainLogo"},i.a.createElement("span",null,"Edit"),"Homework")),i.a.createElement(De,null)),i.a.createElement(ae.a,{className:"contentBlock"},i.a.createElement(ee.a,{exact:!0,path:"/",component:ye}),i.a.createElement(ee.a,{exact:!0,path:"/pages/:id",component:Ce})),i.a.createElement(ae.a,{className:"bottomBlock"}))}))),Ae=Object(s.b)((function(){var e,t,a,n,i,r,l,s,c,m,g,p,L,G=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Z,U=arguments.length>1?arguments[1]:void 0,M=function(e,t){var a=JSON.stringify(t),n=new FormData;n.append("name",e),n.append("action","set"),n.append("data",a),Object(o.post)("/db.php",n).then((function(t){console.log(t,"saved",e)}))};switch(U.type){case f:return Object(d.a)({},G,{active_pdf_index:U.index});case b:return M("texts",e=G.texts.map((function(e){return e.id==U.id&&(e.text=U.text,e.max_width=U.max_width,e.x=U.x,e.y=U.y,e.status=U.status,e.last_edit_date=Q()),e}))),Object(d.a)({},G,{texts:e});case E:return n={text:U.text,x:U.x,y:U.y,page_id:U.page_id,image_index:U.image_index,id:U.id,max_width:U.max_width,status:null,load_date:Q(),last_edit_date:Q()},M("texts",[].concat(Object(u.a)(G.texts),[n])),Object(d.a)({},G,{texts:[].concat(Object(u.a)(G.texts),[n])});case h:return i={id:a=G.messages.length>0?G.messages[G.messages.length-1].id+1:0,user_id:U.user_id,text_id:U.text_id,text:U.text,date:U.date},M("messages",[].concat(Object(u.a)(G.messages),[i])),Object(d.a)({},G,{messages:[].concat(Object(u.a)(G.messages),[i])});case x:return n={text:U.text,x:U.x,y:U.y,page_id:U.page_id,image_index:U.image_index,id:U.id,max_width:U.max_width,status:null},i={id:a=G.messages.length>0?G.messages[G.messages.length-1].id+1:0,user_id:U.user_id,text_id:U.id,text:U.msgText,date:U.date},M("messages",[].concat(Object(u.a)(G.messages),[i])),M("texts",[].concat(Object(u.a)(G.texts),[n])),Object(d.a)({},G,{texts:[].concat(Object(u.a)(G.texts),[n]),messages:[].concat(Object(u.a)(G.messages),[i])});case j:return a=G.pages.length>0?G.pages[G.pages.length-1].id+1:0,l={name:U.name,id:a,pdf_id:U.pdf_id,user_id:U.user_id,load_date:Q(),last_edit_date:Q()},M("pages",[].concat(Object(u.a)(G.pages),[l])),Object(d.a)({},G,{pages:[].concat(Object(u.a)(G.pages),[l])});case v:return e=G.texts.filter((function(e){return e.id!==U.id})),t=G.messages.filter((function(e){return e.text_id!==U.id})),M("texts",e),M("messages",t),Object(d.a)({},G,{texts:e,messages:t});case _:return M("messages",t=G.messages.filter((function(e){return e.id!==U.id}))),Object(d.a)({},G,{messages:t});case O:r=G.pages.filter((function(e){return e.id!==U.id})),e=G.texts.filter((function(e){return e.page_id!==U.id}));var z=G.texts.filter((function(e){return e.page_id==U.id}));return L=z.map((function(e){return e.id})),M("messages",t=G.messages.filter((function(e){return-1==L.indexOf(e.text_id)}))),M("texts",e),M("pages",r),Object(d.a)({},G,{pages:r,texts:e,messages:t});case y:return s=null,c=Object(u.a)(G.users),(m=G.users.filter((function(e){return e.name==U.name&&e.pass==U.pass}))).length>0?s=m[0].id:(a=G.users.length>0?G.users[G.users.length-1].id+1:0,c=[].concat(Object(u.a)(G.users),[{id:a,name:U.name,pass:U.pass}]),s=a),M("users",Object(u.a)(c)),localStorage.setItem("current_user_edithomework",s),Object(d.a)({},G,{current_user:{id:s},users:Object(u.a)(c)});case w:return localStorage.removeItem("current_user_edithomework"),Object(d.a)({},G,{current_user:{id:null}});case k:return s=null,c=Object(u.a)(G.users),(m=G.users.filter((function(e){return e.name==U.login&&e.pass==U.pass}))).length>0?s=m[0].id:(a=G.users.length>0?G.users[G.users.length-1].id+1:0,c=[].concat(Object(u.a)(G.users),[{id:a,name:U.login,pass:U.pass}]),s=a),g=G.pages.length>0?G.pages[G.pages.length-1].id+1:0,l={name:U.name,id:g,pdf_id:U.pdf_id,user_id:s,load_date:Q(),last_edit_date:Q()},M("pages",[].concat(Object(u.a)(G.pages),[l])),M("users",Object(u.a)(c)),localStorage.setItem("current_user_edithomework",s),Object(d.a)({},G,{pages:[].concat(Object(u.a)(G.pages),[l]),current_user:{id:s},users:Object(u.a)(c)});case N:var H={id:a=G.pdfs.length>0?G.pdfs[G.pdfs.length-1].id+1:0,path:U.path,images:U.images,user_id:U.user_id,load_date:Q(),last_edit_date:Q()};return M("pdfs",[].concat(Object(u.a)(G.pdfs),[H])),Object(d.a)({},G,{pdfs:[].concat(Object(u.a)(G.pdfs),[H])});case F:p=G.pdfs.filter((function(e){return e.id!==U.id}));var V=G.pdfs.filter((function(e){return e.id==U.id})),J=V.length>0?V[0]:null;r=G.pages.filter((function(e){return e.pdf_id!==U.id}));var W=G.pages.filter((function(e){return e.pdf_id==U.id})).map((function(e){return e.id}));e=G.texts.filter((function(e){return-1==W.indexOf(e.page_id)}));var Y=G.texts.filter((function(e){return-1!==W.indexOf(e.page_id)}));return L=Y.map((function(e){return e.id})),M("messages",t=G.messages.filter((function(e){return-1==L.indexOf(e.text_id)}))),M("texts",e),M("pages",r),M("pdfs",p),J&&function(e,t){var a=new FormData;a.append("images",JSON.stringify(e)),a.append("pdf",t),Object(o.post)("/remove_pdf.php",a).then((function(e){console.log(e,"removed")}))}(J.images,J.path),Object(d.a)({},G,{pdfs:Object(u.a)(p),pages:Object(u.a)(r),texts:Object(u.a)(e),messages:Object(u.a)(t)});case I:return p=G.pdfs.map((function(e){return e.id==U.id&&(e.last_edit_date=Q()),e})),M("pdfs",Object(u.a)(p)),Object(d.a)({},G,{pdfs:Object(u.a)(p)});case T:return console.log(U.id,"page action"),r=G.pages.map((function(e){return e.id==U.id&&(e.last_edit_date=Q()),e})),M("pages",Object(u.a)(r)),Object(d.a)({},G,{pages:Object(u.a)(r)});case C:return console.log(U.id,"page action"),r=G.pages.map((function(e){return e.id==U.id&&(e.name=U.name),e})),M("pages",Object(u.a)(r)),Object(d.a)({},G,{pages:Object(u.a)(r)});case S:return Object(d.a)({},G,{users:Object(u.a)(U.data)});case D:return Object(d.a)({},G,{pages:Object(u.a)(U.data)});case P:return Object(d.a)({},G,{pdfs:Object(u.a)(U.data)});case A:return Object(d.a)({},G,{texts:Object(u.a)(U.data)});case B:return Object(d.a)({},G,{messages:Object(u.a)(U.data)});case R:var X=G.users.filter((function(e){return e.id==U.id})).length>0?{id:U.id}:Object(d.a)({},G.current_user);return Object(d.a)({},G,{current_user:X});default:return G}}));Object(r.render)(i.a.createElement(l.a,{store:Ae},i.a.createElement(c.a,null,i.a.createElement(Pe,null))),document.getElementById("root"))},74:function(e,t,a){e.exports=a(113)}},[[74,1,2]]]);
//# sourceMappingURL=main.7f9e4987.chunk.js.map
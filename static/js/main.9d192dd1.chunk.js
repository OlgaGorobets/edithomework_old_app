(this.webpackJsonpmy_editor=this.webpackJsonpmy_editor||[]).push([[0],{106:function(e,t,a){},107:function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),r=a(22),l=a(9),s=a(42),c=a(29),u=a(7),d=a(4),o=a(25),m=a.n(o),g=a(54),p=a.n(g),f="CHANGE_ACTIVE_PDF",b="CHANGE_TEXT_VALUE",v="REMOVE_TEXT_VALUE",_="ADD_NEW_TEXT_VALUE",E="REMOVE_MESSAGE",h="ADD_NEW_MESSAGE",x="ADD_FIRST_MESSAGE",O="REMOVE_PAGE",j="ADD_NEW_PAGE",y="SIGN_FORM",w="SIGN_OUT_FORM",N="SIGN_FORM_AND_ADD_NEW_PAGE",F="ADD_PDF",k="REMOVE_PDF",I="CHANGE_PDF_DATE",T="CHANGE_PAGE_DATE",P="LOAD_USERS",S="LOAD_PAGES",A="LOAD_PDFS",C="LOAD_TEXTS",D="LOAD_MESSAGES",R="LOAD_CURRENT_USER";function B(e){return{type:f,index:e}}function L(e){return{type:b,id:e.id,text:e.text,max_width:e.max_width,x:e.x,y:e.y,status:e.status}}function U(e){return{type:O,id:e}}function G(e){return{type:y,name:e.login,pass:p.a.hex_md5(e.pass)}}function M(e){return{type:F,path:e.path,images:e.images,user_id:e.user_id}}function z(e){return{type:I,id:e}}function H(e){return{type:T,id:e}}function V(e){return{type:P,data:e}}function J(e){return{type:S,data:e}}function W(e){return{type:C,data:e}}function Y(e){return{type:A,data:e}}function X(e){return{type:D,data:e}}function q(e){return{type:R,id:e}}function K(e,t){return!!(e.className&&e.className.split&&e.className.split(" ").indexOf(t)>=0)||e.parentNode&&K(e.parentNode,t)}function Q(e){var t=e?new Date(e):new Date,a=""+["Jan","Feb","March","Apr","May","June","July","Aug","Sep","Oct","Nov","Dec"][t.getMonth()],n=""+t.getDate(),i=t.getFullYear(),r=t.getHours(),l=t.getMinutes();return a.length<2&&(a="0"+a),n.length<2&&(n="0"+n),n+" "+a+","+i+" "+r+":"+l}var Z={current_user:{id:null},users:[],pdfs:[],texts:[],messages:[],active_pdf_index:0,pages:[{name:"page 1 page 1page 1page 1 page 1page 1page 1page 1page 1page 1page 1page 1page 1page 1page 1",id:0,pdf_id:0,user_id:0}]};var $=a(30),ee=a(46),te=a(23),ae=a(32),ne=a(15),ie=a(11),re=a(8),le=a(43),se=a(12),ce=a(10),ue=a(20),de=a(49),oe=a(34),me=a(40),ge=function(e){var t={login:"",pass:"",name:""},a={login:!1,pass:!1,name:!1},r={name:e.addPage,login:e.signIn,pass:e.signIn},l=Object(n.useState)(!1),s=Object(se.a)(l,2),c=s[0],u=s[1],o=Object(n.useState)(Object(d.a)({},t)),m=Object(se.a)(o,2),g=m[0],p=m[1],f=Object(n.useState)(Object(d.a)({},a)),b=Object(se.a)(f,2),v=b[0],_=b[1],E=function(){return u(!1)},h=function(e){p(Object(d.a)({},g,Object(le.a)({},e.target.getAttribute("name"),e.target.value))),_(Object(d.a)({},a))},x="",O="",j="",y="";return e.signIn&&(x=i.a.createElement(me.a,null,i.a.createElement(me.a.Body,null,i.a.createElement(me.a.Title,null,"Login or Register ",i.a.createElement("small",null,"(if you don't have an account)")),i.a.createElement(me.a.Text,null,i.a.createElement("div",null,i.a.createElement(de.a.Control,{size:"sm",name:"login",type:"text",value:g.login,placeholder:"Login",onChange:h}),v.login?i.a.createElement(oe.a,{variant:"danger"},"Required field"):i.a.createElement(i.a.Fragment,null)),i.a.createElement("div",null,i.a.createElement(de.a.Control,{size:"sm",name:"pass",type:"password",value:g.pass,placeholder:"Password",onChange:h}),v.pass?i.a.createElement(oe.a,{variant:"danger"},"Required field"):i.a.createElement(i.a.Fragment,null)))))),e.sureRemove&&(O=i.a.createElement("div",null,"Are you sure? You won't be able to recover this page! ")),e.sureRemovePdf&&(j=i.a.createElement("div",null,"Are you sure? You won't be able to recover this Pdf and all pages created from this Pdf will be removed! ")),e.addPage&&(y=i.a.createElement("div",null,i.a.createElement(de.a.Control,{size:"sm",type:"text",name:"name",value:g.name,placeholder:"Name",onChange:h}),v.name?i.a.createElement(oe.a,{variant:"danger"},"Required field"):i.a.createElement(i.a.Fragment,null))),i.a.createElement(i.a.Fragment,null,i.a.createElement(ce.a,{size:e.button.large?"lg":"sm",variant:"primary",onClick:function(){return u(!0)}},e.button.icon?i.a.createElement(ie.a,{icon:e.button.icon}):"",e.button.title),i.a.createElement(ue.a,{show:c,onHide:E,animation:!1},i.a.createElement(ue.a.Header,{closeButton:!0},i.a.createElement(ue.a.Title,null,e.title)),i.a.createElement(ue.a.Body,null,x,"",O,j,y),i.a.createElement(ue.a.Footer,null,e.buttons.map((function(e,a){return i.a.createElement(ce.a,{size:"sm",key:a,variant:"primary",onClick:function(){(function(){var e=!0,t={};for(var a in r)if(r[a]){var n=0==g[a].trim().length;t[a]=n,n&&(e=!1)}else t[a]=!1;return _(Object(d.a)({},t)),e})()&&("function"===typeof e.func&&e.func(g),E(),p(Object(d.a)({},t)))}},e.title)})))))},pe=a(28),fe=function(e){var t=e.pdf,a=e.dispatch,n={signIn:!1,signUp:!1,sureRemovePdf:!0,title:"Remove Pdf File",button:{title:"Remove",icon:re.i},buttons:[{title:"Cancel"},{title:"Remove it!",func:function(){var e;a((e=t.id,{type:k,id:e}))}}]};return i.a.createElement(ne.a.Item,{className:t.is_active?"list-group-item-primary":""},i.a.createElement("div",{className:"itemTitle"},i.a.createElement(ce.a,{variant:"link",onClick:function(e){e.preventDefault(),a(B(t.index))}},i.a.createElement("span",null,t.path))),i.a.createElement("div",{className:"absBtns"},i.a.createElement("div",null,i.a.createElement(ce.a,{size:"sm",onClick:function(e){e.preventDefault(),a(B(t.index))}},"Show Pages")),null!==t.current_user.id&&t.user&&t.current_user.id==t.user.id?i.a.createElement(pe.a,{className:"mr-2"},i.a.createElement(ge,n)):i.a.createElement(i.a.Fragment,null)),i.a.createElement("div",{className:"calendarBlock"},i.a.createElement("div",{className:"calendarIcon"},i.a.createElement(ie.a,{icon:re.a})),i.a.createElement("div",{className:"calendarValue"},t.user?i.a.createElement("div",null,i.a.createElement("small",null,"Loaded by ",t.user.id==t.current_user.id?"you":t.user.name," ",t.load_date),i.a.createElement("div",null,i.a.createElement("small",null,"Last pages edits - ",t.last_edit_date))):i.a.createElement(i.a.Fragment,null))))},be=fe=Object(l.b)()(fe),ve=a(70),_e=Object(l.b)((function(e){return{current_user:e.current_user}}))((function(e){var t=e.current_user,a=e.dispatch,r=Object(n.useState)(null),l=Object(se.a)(r,2),s=l[0],c=l[1],u=Object(n.useState)(null),m=Object(se.a)(u,2),g=m[0],p=m[1],f=Object(n.useState)({show:!1,title:"",text:""}),b=Object(se.a)(f,2),v=b[0],_=b[1],E=function(e){var t=new FormData;t.append("file",e);return Object(o.post)("/upload.php",t,{headers:{"content-type":"multipart/form-data"}})};return i.a.createElement(i.a.Fragment,null,i.a.createElement("form",{onSubmit:function(e){e.preventDefault(),s&&p(!0),E(s).then((function(e){p(!1);var n=e.data;0==n.error&&a(M({path:n.file,images:JSON.parse(n.images),user_id:t.id}))}))}},i.a.createElement("h6",null,"Upload Pdf File"),g?i.a.createElement("span",null,i.a.createElement(ve.a,{animation:"border",variant:"secondary"}),"Wait please, File is Loading..."):i.a.createElement(i.a.Fragment,null,i.a.createElement("div",{className:"custom-file"},i.a.createElement("input",{type:"file",className:"custom-file-input",id:"inputGroupFile01","aria-describedby":"inputGroupFileAddon01",onChange:function(e){c(e.target.files[0]),e.target.files[0]&&(p(!0),E(e.target.files[0]).then((function(e){p(!1);var n=e.data;0==n.error?a(M({path:n.file,images:JSON.parse(n.images),user_id:t.id})):_(Object(d.a)({},v,{show:!0,title:"File Upload Error",text:"File wasn't loaded. "+n.error}))})).catch((function(e){p(!1),_(Object(d.a)({},v,{show:!0,title:"File Upload Error",text:"File wasn't loaded. Somthing went wrong..."}))})))},size:"sm"}),i.a.createElement("label",{className:"custom-file-label",size:"sm",htmlFor:"inputGroupFile01"},"Choose file"),i.a.createElement("button",{type:"submit",style:{display:"none"}},"Upload")))),i.a.createElement(ue.a,{show:v.show,onHide:function(){_(Object(d.a)({},v,{show:!1}))}},i.a.createElement(ue.a.Header,{closeButton:!0},i.a.createElement(ue.a.Title,null,v.title)),i.a.createElement(ue.a.Body,null,v.text),i.a.createElement(ue.a.Footer,null,i.a.createElement(ce.a,{variant:"primary",onClick:function(){_(Object(d.a)({},v,{show:!1}))}},"Ok"))))})),Ee=Object(l.b)((function(e){return{pdfs:e.pdfs,active_pdf_index:e.active_pdf_index,users:e.users,current_user:e.current_user}}))((function(e){var t=e.pdfs,a=e.active_pdf_index,n=e.users,r=e.current_user,l=e.dispatch,s={signIn:!0,signUp:!1,title:"Login or Register to Upload File",button:{title:"Upload Pdf File",icon:re.h,large:!0},buttons:[{title:"Cancel"},{title:"Ok",func:function(e){l(G(e))}}]};return i.a.createElement(ne.a,{className:"list-group-flush"},i.a.createElement(ne.a.Item,{className:"topItem"},null==r.id?i.a.createElement(ge,s):i.a.createElement(_e,null)),i.a.createElement("div",{className:"scrollBlock"},t.map((function(e,t){var l=n.filter((function(t){return t.id==e.user_id})),s=l.length>0?l[0]:null,c=Object(d.a)({},e,{is_active:t===a,index:t,user:s,current_user:r});return i.a.createElement(be,Object.assign({key:t},{pdf:c}))})),0==t.length?i.a.createElement(ne.a.Item,null,"Don't have any Pdf Files"):i.a.createElement(i.a.Fragment,null)))})),he=function(e){var t=e.page,a=e.dispatch,n={signIn:!1,signUp:!1,sureRemove:!0,title:"Remove Page",button:{title:"Remove",icon:re.i},buttons:[{title:"Cancel"},{title:"Remove it!",func:function(){a(z(t.pdf_id)),a(U(t.id))}}]};return i.a.createElement(ne.a.Item,null,i.a.createElement("div",{className:"itemTitle"},i.a.createElement(c.b,{to:"/pages/"+t.id},i.a.createElement("span",null,t.name))),i.a.createElement("div",{className:"absBtns"},i.a.createElement("div",null,i.a.createElement(c.b,{to:"/pages/"+t.id,className:"btn btn-primary btn-sm"},i.a.createElement(ie.a,{icon:re.e})," Edit")),t.user&&t.user.id==t.current_user.id?i.a.createElement(pe.a,{className:"mr-2"},i.a.createElement(ge,n)):i.a.createElement(i.a.Fragment,null)),i.a.createElement("div",{className:"calendarBlock"},i.a.createElement("div",{className:"calendarIcon"},i.a.createElement(ie.a,{icon:re.a})),i.a.createElement("div",{className:"calendarValue"},t.user?i.a.createElement("div",null,i.a.createElement("small",null,"Added by ",t.user.id==t.current_user.id?"you":t.user.name," ",t.load_date),i.a.createElement("div",null,i.a.createElement("small",null,"Last edit - ",t.last_edit_date))):i.a.createElement(i.a.Fragment,null))))},xe=he=Object(l.b)()(he),Oe=Object(l.b)((function(e){return{pages:e.pages,pdfs:e.pdfs,active_pdf_index:e.active_pdf_index,users:e.users,current_user:e.current_user}}))((function(e){var t=e.pages,a=e.pdfs,n=e.active_pdf_index,r=e.users,l=e.current_user,s=e.dispatch,c=a.length>0?a[n].id:null,u=t.filter((function(e){return c==e.pdf_id})),o={signIn:!1,signUp:!1,addPage:!0,title:"Add New Page",button:{title:"Add New Page",icon:re.h,large:!0},buttons:[{title:"Cancel"},{title:"Add Page",func:function(e){var t;s(z(c)),s((t={name:e.name,pdf_id:c,user_id:l.id},{type:j,name:t.name,pdf_id:t.pdf_id,user_id:t.user_id}))}}]},m={signIn:!0,signUp:!0,addPage:!0,title:"Add New Page",button:{title:"Add New Page",icon:re.h,large:!0},buttons:[{title:"Cancel"},{title:"Ok",func:function(e){var t;s(z(c)),s((t={name:e.name,pdf_id:c,login:e.login,pass:e.pass},{type:N,name:t.name,pdf_id:t.pdf_id,login:t.login,pass:p.a.hex_md5(t.pass)}))}}]};return i.a.createElement(i.a.Fragment,null,a.length>0?i.a.createElement(ne.a,{className:"list-group-flush"},i.a.createElement(ne.a.Item,{className:"topItem"},null!==l.id?i.a.createElement(ge,o):i.a.createElement(ge,m)),i.a.createElement("div",{className:"scrollBlock"},u.map((function(e,t){var a=r.filter((function(t){return t.id==e.user_id})),n=a.length>0?a[0]:null,s=Object(d.a)({},e,{user:n,current_user:l});return i.a.createElement(xe,Object.assign({key:t},{page:s}))})),0==u.length?i.a.createElement(ne.a.Item,null,"Don't have any Pages"):i.a.createElement(i.a.Fragment,null))):i.a.createElement(i.a.Fragment,null))})),je=Object(l.b)((function(e){return{pdfs:e.pdfs,active_pdf_index:e.active_pdf_index}}))((function(e){e.pdfs,e.active_pdf_index;return i.a.createElement(i.a.Fragment,null,i.a.createElement(ae.a,null,i.a.createElement(te.a,null,i.a.createElement("div",{className:"blockBorder"},i.a.createElement(Ee,null)))),i.a.createElement(ae.a,null,i.a.createElement(te.a,null,i.a.createElement("div",{className:"blockBorder"},i.a.createElement(Oe,null)))))})),ye=(a(102),function(e){var t=e.images,a=e.activeIndex,r=e.items,l=e.onPageChange,s=(e.pageId,Object(n.useState)(0)),c=Object(se.a)(s,2),u=c[0],d=c[1],o=Object(n.useState)(0),m=Object(se.a)(o,2),g=m[0],p=m[1],f=Object(n.useState)(t),b=Object(se.a)(f,2),v=b[0],_=b[1],E=function(e,a){e.preventDefault();var n=parseInt(t.length/r),i="next"==a?u<n?u+1:0:0==u?n:u-1;if(d(i),!(g>=r*i&&g<r*i+r)){var s=r*i;p(s),window.location.hash="#page_"+s,"function"==typeof l&&l({selected:s})}_(t.filter((function(e,t){return t>=r*i&&t<r*i+r})))};return Object(n.useEffect)((function(){var e=u,n=window.location.hash;if(-1!==n.indexOf("#page_")){var i=parseInt(n.replace("#page_",""));!isNaN(i)&&i>0&&i<t.length&&(a=i)}console.log(a,"activeIndex"),a>0&&(p(a),"function"==typeof l&&l({selected:a}),a>r*u+r&&(e=parseInt(a/r),d(e))),_(t.filter((function(t,a){return a>=r*e&&a<r*e+r}))),console.log("--pag->>>")}),[t]),i.a.createElement("div",{className:"imagePreviewsContainer"},i.a.createElement("div",{className:"imagePreviewsPrev",onClick:function(e){E(e,"prev")}},i.a.createElement(ie.a,{icon:re.d})),i.a.createElement("div",{className:"imagePreviews"},i.a.createElement(i.a.Fragment,null,console.log(v,"--\x3e>render inages")),v.map((function(e,t){var a=e.replace(".png","_preview.png").replace(".jpg","_preview.jpg");return i.a.createElement("div",{onClick:function(e){e.preventDefault();var a=r*u+t;p(a),window.location.hash="#page_"+a,"function"==typeof l&&l({selected:a})},className:g==r*u+t?"active imagePreview":"imagePreview"},i.a.createElement("img",{src:a}),i.a.createElement("span",{className:"imagePreviewNumber"},i.a.createElement("span",null,r*u+t+1)))}))),i.a.createElement("div",{onClick:function(e){E(e,"next")},className:"imagePreviewsNext"},i.a.createElement(ie.a,{icon:re.c})))}),we=function(e){var t=e.page,a=e.newTextId,r=e.dispatch;console.log(t,"page");var l={visibility:"hidden",left:0,top:0,value:"",width:0,height:0,imageTextId:null},s={remove:"visible",move:"visible",warning:"visible",ok:"visible",message:"visible"},c={warning:!1,ok:!1,message:!0},o=Object(n.useRef)(null),m=Object(n.useState)([]),g=Object(se.a)(m,2),p=g[0],f=g[1],b=Object(n.useState)([]),O=Object(se.a)(b,2),j=O[0],y=O[1],w=Object(n.useState)(""),N=Object(se.a)(w,2),F=N[0],k=N[1],I=Object(n.useState)(0),T=Object(se.a)(I,2),P=T[0],S=T[1],A=Object(n.useState)(Object(d.a)({},l)),C=Object(se.a)(A,2),D=C[0],R=C[1],B=Object(n.useState)(Object(d.a)({},s)),G=Object(se.a)(B,2),M=G[0],V=G[1],J=Object(n.useState)(Object(d.a)({},c)),W=Object(se.a)(J,2),Y=W[0],X=W[1],q=Object(n.useState)(!1),Z=Object(se.a)(q,2),$=(Z[0],Z[1]),ae={signIn:!1,signUp:!1,sureRemove:!0,title:"Remove Page",button:{title:"Remove",icon:re.i},buttons:[{title:"Cancel"},{title:"Remove it!",func:function(){r(U(t.id))}}]},ne=function(e,a){var n;r((n=a.id,{type:E,id:n})),r(H(t.id)),r(z(t.pdf_id)),ue().then((function(e){f(Object(u.a)(de(p,{id:D.imageTextId,visibility:"hidden"})));var a=t.texts.filter((function(e){return e.id==D.imageTextId}))[0].messages;y(Object(u.a)(a))}))},le=function(e){if(F.trim().length>0){e.preventDefault();var n=D.imageTextId;null==D.imageTextId?(r((i={text:"",max_width:0,x:D.left,y:D.top,page_id:t.id,image_index:P,id:a,user_id:t.current_user.id,msgText:F,date:Q()},{type:x,user_id:i.user_id,msgText:i.msgText,date:i.date,text:i.text,max_width:i.max_width,x:i.x,y:i.y,page_id:i.page_id,image_index:i.image_index,id:i.id})),r(H(t.id)),r(z(t.pdf_id)),R(Object(d.a)({},D,{imageTextId:a})),n=a,console.log(a,"newTextId")):(r(function(e){return{type:h,user_id:e.user_id,text_id:e.text_id,text:e.text,date:e.date}}({text:F,date:Q(),text_id:D.imageTextId,user_id:t.current_user.id})),r(H(t.id)),r(z(t.pdf_id))),ue().then((function(e){f(Object(u.a)(de(me(),{id:n,visibility:"hidden"})));var a=t.texts.filter((function(e){return e.id==n}));a.length>0&&y(Object(u.a)(a[0].messages)),k("")}))}var i},ue=function(){var e=o.current.getContext("2d"),a=new Image;return a.src=t.pdf.images[P],new Promise((function(t){a.onload=function(){var n=1e3*a.height/a.width;e.canvas.width=1e3,e.canvas.height=n,e.clearRect(0,0,e.canvas.width,e.canvas.height),e.drawImage(a,0,0,1e3,n),f(me()),t({status:"ok"})}}))},de=function(e,t){return e.map((function(e){var a="visible";return void 0!==t&&e.id==t.id&&(a=t.visibility),e.visibility=a,e}))},me=function(){var e=t.texts.filter((function(e){return e.image_index==P}));return e.forEach((function(e){e.messages=t.messages.filter((function(t){return t.text_id==e.id}))})),de(e)};return Object(n.useEffect)((function(){ue(P),console.log("---ed---\x3e>>")}),[P]),i.a.createElement(ee.a,{onClick:function(e){K(e.target,"imageTexts")||($(!1),R(Object(d.a)({},l)),f(Object(u.a)(de(p))))}},i.a.createElement(te.a,null,i.a.createElement("div",null,i.a.createElement("h2",null,t.name," "),t.user&&t.user.id==t.current_user.id?i.a.createElement(pe.a,{className:"mr-2"},i.a.createElement(ge,ae)):i.a.createElement(i.a.Fragment,null)),i.a.createElement("div",null,i.a.createElement("div",{className:"calendarBlock"},i.a.createElement("div",{className:"calendarIcon"},i.a.createElement(ie.a,{icon:re.a})),i.a.createElement("div",{className:"calendarValue"},t.user?i.a.createElement("div",null,i.a.createElement("small",null,"Added by ",t.user.id==t.current_user.id?"you":t.user.name," ",t.load_date),i.a.createElement("div",null,i.a.createElement("small",null,"Last edit - ",t.last_edit_date))):i.a.createElement(i.a.Fragment,null)))),i.a.createElement(ye,{images:t.pdf.images,items:5,onPageChange:function(e){S(e.selected)},activeIndex:0,pageId:t.id})),i.a.createElement(te.a,null,i.a.createElement("div",{className:"imageParent"},i.a.createElement("canvas",{ref:o}),i.a.createElement("div",{className:"imageTexts",onClick:function(e){if(!K(e.target,"imageText")&&!K(e.target,"imageTextFileldParent")){V(Object(d.a)({},s,{remove:"hidden",ok:"hidden",warning:"hidden"})),X(Object(d.a)({},c));var t=e.target.getBoundingClientRect();R(Object(d.a)({},l,{visibility:"visible",width:120,height:30,left:e.clientX-t.x,top:e.clientY-t.y})),y([]),f(Object(u.a)(de(p)))}}},p.map((function(e,a){return i.a.createElement("div",{key:a,style:{position:"absolute",zIndex:3,left:e.x,top:e.y,maxWidth:e.max_width,visibility:e.visibility,borderWidth:t.user&&t.user.id==t.current_user.id||""!=e.text?1:0},className:e.status?"imageText "+e.status+"Text":"imageText",onClick:function(t){!function(e,t,a,n,i){e.preventDefault(),e.stopPropagation(),$(!1),V(Object(d.a)({},s)),X(Object(d.a)({},c,{warning:"warning"==a,ok:"ok"==a}));var r=e.currentTarget.getBoundingClientRect();R({visibility:"visible",left:e.currentTarget.offsetLeft,top:e.currentTarget.offsetTop,value:i,width:r.width+30,height:r.height>30?r.height:30,imageTextId:t}),y(Object(u.a)(n)),f(Object(u.a)(de(p,{id:t,visibility:"hidden"})))}(t,e.id,e.status,e.messages,e.text)}},i.a.createElement("span",null,e.text),e.messages.length>0?i.a.createElement(ce.a,{variant:"primary",size:"sm"},i.a.createElement(ie.a,{icon:re.f}),e.messages.length):i.a.createElement(i.a.Fragment,null))})),i.a.createElement("div",{className:"imageTextFileldParent",style:{left:D.left,top:D.top,visibility:D.visibility}},i.a.createElement("textarea",{disabled:!(t.user&&t.user.id==t.current_user.id),placeholder:"Your text...",onChange:function(e){if(R(Object(d.a)({},D,{value:e.target.value})),e.target.value.trim().length>0)if(null==D.imageTextId){r((n={text:e.target.value,max_width:e.target.offsetWidth,x:D.left,y:D.top,page_id:t.id,image_index:P,id:a},{type:_,text:n.text,max_width:n.max_width,x:n.x,y:n.y,page_id:n.page_id,image_index:n.image_index,id:n.id})),r(H(t.id)),r(z(t.pdf_id)),V(Object(d.a)({},s,{remove:"visible"})),R(Object(d.a)({},D,{imageTextId:a,value:e.target.value}));e.target.value;ue().then((function(e){f(Object(u.a)(de(me(),{id:D.imageTextId,visibility:"hidden"})))}))}else r(L({text:e.target.value,id:D.imageTextId,max_width:e.target.offsetWidth,x:D.left,y:D.top})),r(H(t.id)),r(z(t.pdf_id)),f(Object(u.a)(de(me(),{id:D.imageTextId,visibility:"hidden"})));var n},style:{width:""!=D.value||t.user&&t.user.id==t.current_user.id?D.width:0,borderWidth:t.user&&t.user.id==t.current_user.id?1:0,height:D.height,resize:t.user&&t.user.id==t.current_user.id?"both":"none"},value:D.value,className:Y.warning?"form-control form-control-warning imageTextFileld":Y.ok?"form-control form-control-ok imageTextFileld":"form-control imageTextFileld",rows:"1"}),i.a.createElement("div",{className:"imageTextFileldButtons"},t.user&&t.user.id==t.current_user.id?i.a.createElement(ce.a,{style:{display:"visible"==M.remove?"inline":"none"},onClick:function(e){var a;r((a=D.imageTextId,{type:v,id:a})),r(H(t.id)),r(z(t.pdf_id)),R(Object(d.a)({},l)),ue()},variant:"outline-primary",size:"sm"},i.a.createElement(ie.a,{icon:re.i})):i.a.createElement(i.a.Fragment,null),i.a.createElement(ce.a,{style:{display:"visible"==M.warning?"inline":"none"},onClick:function(e){e.preventDefault(),e.stopPropagation(),r(L({text:D.value,id:D.imageTextId,max_width:D.max_width,x:D.left,y:D.top,status:Y.warning?null:"warning"})),r(H(t.id)),r(z(t.pdf_id)),X(Object(d.a)({},c,{warning:!Y.warning,ok:!!Y.warning&&Y.ok})),ue().then((function(e){f(Object(u.a)(de(p,{id:D.imageTextId,visibility:"hidden"})))}))},variant:Y.warning?"danger":"outline-danger",size:"sm"},i.a.createElement(ie.a,{icon:re.g})),i.a.createElement(ce.a,{style:{display:"visible"==M.ok?"inline":"none"},onClick:function(e){e.preventDefault(),e.stopPropagation(),r(L({text:D.value,id:D.imageTextId,max_width:D.max_width,x:D.left,y:D.top,status:Y.ok?null:"ok"})),r(H(t.id)),r(z(t.pdf_id)),X(Object(d.a)({},c,{warning:!!Y.ok&&Y.warning,ok:!Y.ok})),ue().then((function(e){f(Object(u.a)(de(p,{id:D.imageTextId,visibility:"hidden"})))}))},variant:Y.ok?"success":"outline-success",size:"sm"},i.a.createElement(ie.a,{icon:re.b})),i.a.createElement(ce.a,{style:{display:"visible"==M.message?"inline":"none"},onClick:function(){X(Object(d.a)({},Y,{message:!Y.message}))},variant:Y.message?"primary":"outline-primary",size:"sm"},i.a.createElement(ie.a,{icon:re.f}))),i.a.createElement("div",{className:"imageTextFileldMessageParent",style:{display:Y.message?"block":"none"}},i.a.createElement(oe.a,{variant:"primary"},j.map((function(e,a){var n=t.users.filter((function(t){return t.id==e.user_id})),r=n.length>0?n[0]:null;return i.a.createElement("div",{key:a},i.a.createElement("div",null,r?i.a.createElement(i.a.Fragment,null,r.id==t.current_user.id?"you":r.name,", "):i.a.createElement(i.a.Fragment,null,"unsigned user, ")," ",e.date),i.a.createElement("div",null,e.text),r&&r.id==t.current_user.id&&i.a.createElement(ce.a,{onClick:function(t){ne(0,e)},variant:"outline-primary",size:"sm"},i.a.createElement(ie.a,{icon:re.i})),i.a.createElement("hr",null))})),i.a.createElement("div",null,i.a.createElement("textarea",{onChange:function(e){k(e.target.value)},placeholder:"Your message...",className:"form-control imageTextFileldMessageField",rows:"4",value:F}),i.a.createElement(pe.a,{className:"imageTextFileldMessageBtn"}," ",i.a.createElement(ce.a,{className:"simpBtn",onClick:function(e){le(e)},variant:"primary",size:"sm"},"Add Message")," ")))))))))},Ne=we=Object(l.b)()(we),Fe=Object(l.b)((function(e){return{pages:e.pages,pdfs:e.pdfs,texts:e.texts,messages:e.messages,users:e.users,current_user:e.current_user}}))((function(e){var t=e.pages,a=e.pdfs,n=e.texts,r=e.messages,l=e.users,s=e.current_user,u=(e.history,Object($.e)().id),d=t.filter((function(e){return e.id==u})),o=d.length>0?d[0]:null,m=n.length>0?n[n.length-1].id+1:0;if(null!==o){var g=a.filter((function(e){return e.id==o.pdf_id})),p=g.length>0?g[0]:null;o.pdf=p;var f=n.filter((function(e){return e.page_id==u}));o.texts=f,o.texts&&(o.messages=r),o.users=l,o.current_user=s;var b=l.filter((function(e){return e.id==o.user_id})),v=b.length>0?b[0]:null;o.user=v}return i.a.createElement(i.a.Fragment,null,i.a.createElement(c.b,{to:"/"},"Go Back"),null===o||null==o.pdf?i.a.createElement(i.a.Fragment,null,"Page Not Found"):i.a.createElement(Ne,{page:o,newTextId:m}))})),ke=Object($.f)(Fe),Ie=Object(l.b)((function(e){return{current_user:e.current_user,users:e.users}}))((function(e){var t=e.current_user,a=e.users,n=e.dispatch,r={signIn:!0,signUp:!1,title:"Login or Register",button:{title:"Login or Register"},buttons:[{title:"Cancel"},{title:"Ok",func:function(e){n(G(e))}}]},l=null;if(null!==t.id){var s=a.filter((function(e){return e.id==t.id}));l=s.length>0?s[0]:null}return i.a.createElement(ne.a,{className:"topUserBlock"},null==t.id?i.a.createElement(ne.a.Item,null,i.a.createElement(ge,r)):i.a.createElement(ne.a.Item,null,"Hello, ",i.a.createElement("strong",null,l?l.name:"")," ",i.a.createElement("div",null,i.a.createElement(ce.a,{onClick:function(){n({type:w})},variant:"primary",size:"sm"},"SignOut"))))})),Te=Ie=Object(l.b)()(Ie);a(106);var Pe=Object(l.b)()(Object($.f)((function(e){e.location;var t=e.dispatch;return Object(n.useEffect)((function(){!function(){var e=[["users",V],["pages",J],["texts",W],["pdfs",Y],["messages",X]],a=[];e.forEach((function(e){var t=new FormData;t.append("action","get"),t.append("data",""),t.append("name",e[0]),a.push(Object(o.post)("/db.php",t))})),m.a.all(a).then(m.a.spread((function(){for(var a=arguments.length,n=new Array(a),i=0;i<a;i++)n[i]=arguments[i];e.forEach((function(e,a){var i=n[a];0==i.data.error&&t(e[1](JSON.parse(i.data.data)))}));var r=localStorage.getItem("current_user_edithomework");null!==r&&t(q(r))}))).catch((function(e){console.log("loading error")}))}()}),[]),i.a.createElement(ee.a,null,i.a.createElement(te.a,{className:"headerBlock"},i.a.createElement("h1",{className:"mainLogo"},i.a.createElement("span",null,"Edit"),"Homework"),i.a.createElement(Te,null)),i.a.createElement(te.a,{className:"contentBlock"},i.a.createElement($.a,{exact:!0,path:"/",component:je}),i.a.createElement($.a,{exact:!0,path:"/pages/:id",component:ke})),i.a.createElement(te.a,{className:"bottomBlock"}))}))),Se=Object(s.b)((function(){var e,t,a,n,i,r,l,s,c,m,g,p,B,L=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Z,U=arguments.length>1?arguments[1]:void 0,G=function(e,t){var a=JSON.stringify(t),n=new FormData;n.append("name",e),n.append("action","set"),n.append("data",a),Object(o.post)("/db.php",n).then((function(t){console.log(t,"saved",e)}))};switch(U.type){case f:return Object(d.a)({},L,{active_pdf_index:U.index});case b:return G("texts",e=L.texts.map((function(e){return e.id==U.id&&(e.text=U.text,e.max_width=U.max_width,e.x=U.x,e.y=U.y,e.status=U.status,e.last_edit_date=Q()),e}))),Object(d.a)({},L,{texts:e});case _:return n={text:U.text,x:U.x,y:U.y,page_id:U.page_id,image_index:U.image_index,id:U.id,max_width:U.max_width,status:null,load_date:Q(),last_edit_date:Q()},G("texts",[].concat(Object(u.a)(L.texts),[n])),Object(d.a)({},L,{texts:[].concat(Object(u.a)(L.texts),[n])});case h:return i={id:a=L.messages.length>0?L.messages[L.messages.length-1].id+1:0,user_id:U.user_id,text_id:U.text_id,text:U.text,date:U.date},G("messages",[].concat(Object(u.a)(L.messages),[i])),Object(d.a)({},L,{messages:[].concat(Object(u.a)(L.messages),[i])});case x:return n={text:U.text,x:U.x,y:U.y,page_id:U.page_id,image_index:U.image_index,id:U.id,max_width:U.max_width,status:null},i={id:a=L.messages.length>0?L.messages[L.messages.length-1].id+1:0,user_id:U.user_id,text_id:U.id,text:U.msgText,date:U.date},G("messages",[].concat(Object(u.a)(L.messages),[i])),G("texts",[].concat(Object(u.a)(L.texts),[n])),Object(d.a)({},L,{texts:[].concat(Object(u.a)(L.texts),[n]),messages:[].concat(Object(u.a)(L.messages),[i])});case j:return a=L.pages.length>0?L.pages[L.pages.length-1].id+1:0,l={name:U.name,id:a,pdf_id:U.pdf_id,user_id:U.user_id,load_date:Q(),last_edit_date:Q()},G("pages",[].concat(Object(u.a)(L.pages),[l])),Object(d.a)({},L,{pages:[].concat(Object(u.a)(L.pages),[l])});case v:return e=L.texts.filter((function(e){return e.id!==U.id})),t=L.messages.filter((function(e){return e.text_id!==U.id})),G("texts",e),G("messages",t),Object(d.a)({},L,{texts:e,messages:t});case E:return G("messages",t=L.messages.filter((function(e){return e.id!==U.id}))),Object(d.a)({},L,{messages:t});case O:r=L.pages.filter((function(e){return e.id!==U.id})),e=L.texts.filter((function(e){return e.page_id!==U.id}));var M=L.texts.filter((function(e){return e.page_id==U.id}));return B=M.map((function(e){return e.id})),G("messages",t=L.messages.filter((function(e){return-1==B.indexOf(e.text_id)}))),G("texts",e),G("pages",r),Object(d.a)({},L,{pages:r,texts:e,messages:t});case y:return s=null,c=Object(u.a)(L.users),(m=L.users.filter((function(e){return e.name==U.name&&e.pass==U.pass}))).length>0?s=m[0].id:(a=L.users.length>0?L.users[L.users.length-1].id+1:0,c=[].concat(Object(u.a)(L.users),[{id:a,name:U.name,pass:U.pass}]),s=a),G("users",Object(u.a)(c)),localStorage.setItem("current_user_edithomework",s),Object(d.a)({},L,{current_user:{id:s},users:Object(u.a)(c)});case w:return localStorage.removeItem("current_user_edithomework"),Object(d.a)({},L,{current_user:{id:null}});case N:return s=null,c=Object(u.a)(L.users),(m=L.users.filter((function(e){return e.name==U.login&&e.pass==U.pass}))).length>0?s=m[0].id:(a=L.users.length>0?L.users[L.users.length-1].id+1:0,c=[].concat(Object(u.a)(L.users),[{id:a,name:U.login,pass:U.pass}]),s=a),g=L.pages.length>0?L.pages[L.pages.length-1].id+1:0,l={name:U.name,id:g,pdf_id:U.pdf_id,user_id:s,load_date:Q(),last_edit_date:Q()},G("pages",[].concat(Object(u.a)(L.pages),[l])),G("users",Object(u.a)(c)),localStorage.setItem("current_user_edithomework",s),Object(d.a)({},L,{pages:[].concat(Object(u.a)(L.pages),[l]),current_user:{id:s},users:Object(u.a)(c)});case F:var z={id:a=L.pdfs.length>0?L.pdfs[L.pdfs.length-1].id+1:0,path:U.path,images:U.images,user_id:U.user_id,load_date:Q(),last_edit_date:Q()};return G("pdfs",[].concat(Object(u.a)(L.pdfs),[z])),Object(d.a)({},L,{pdfs:[].concat(Object(u.a)(L.pdfs),[z])});case k:p=L.pdfs.filter((function(e){return e.id!==U.id}));var H=L.pdfs.filter((function(e){return e.id==U.id})),V=H.length>0?H[0]:null;r=L.pages.filter((function(e){return e.pdf_id!==U.id}));var J=L.pages.filter((function(e){return e.pdf_id==U.id})).map((function(e){return e.id}));e=L.texts.filter((function(e){return-1==J.indexOf(e.page_id)}));var W=L.texts.filter((function(e){return-1!==J.indexOf(e.page_id)}));return B=W.map((function(e){return e.id})),G("messages",t=L.messages.filter((function(e){return-1==B.indexOf(e.text_id)}))),G("texts",e),G("pages",r),G("pdfs",p),V&&function(e,t){var a=new FormData;a.append("images",JSON.stringify(e)),a.append("pdf",t),Object(o.post)("/remove_pdf.php",a).then((function(e){console.log(e,"removed")}))}(V.images,V.path),Object(d.a)({},L,{pdfs:Object(u.a)(p),pages:Object(u.a)(r),texts:Object(u.a)(e),messages:Object(u.a)(t)});case I:return p=L.pdfs.map((function(e){return e.id==U.id&&(e.last_edit_date=Q()),e})),G("pdfs",Object(u.a)(p)),Object(d.a)({},L,{pdfs:Object(u.a)(p)});case T:return console.log(U.id,"page action"),r=L.pages.map((function(e){return e.id==U.id&&(e.last_edit_date=Q()),e})),G("pages",Object(u.a)(r)),Object(d.a)({},L,{pages:Object(u.a)(r)});case P:return Object(d.a)({},L,{users:Object(u.a)(U.data)});case S:return Object(d.a)({},L,{pages:Object(u.a)(U.data)});case A:return Object(d.a)({},L,{pdfs:Object(u.a)(U.data)});case C:return Object(d.a)({},L,{texts:Object(u.a)(U.data)});case D:return Object(d.a)({},L,{messages:Object(u.a)(U.data)});case R:var Y=L.users.filter((function(e){return e.id==U.id})).length>0?{id:U.id}:Object(d.a)({},L.current_user);return Object(d.a)({},L,{current_user:Y});default:return L}}));Object(r.render)(i.a.createElement(l.a,{store:Se},i.a.createElement(c.a,null,i.a.createElement(Pe,null))),document.getElementById("root"))},72:function(e,t,a){e.exports=a(107)}},[[72,1,2]]]);
//# sourceMappingURL=main.9d192dd1.chunk.js.map
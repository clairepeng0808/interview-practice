(this.webpackJsonpyahootest=this.webpackJsonpyahootest||[]).push([[0],{22:function(n,e,t){},27:function(n,e,t){"use strict";t.r(e);var i,a,c,o,r,s,l,d,b,j,u,p,m,x,h,O,f,g,v,k,w,y,D,S=t(1),C=t.n(S),z=t(12),F=t.n(z),N=(t(22),t(2)),B=t(4),A=t(3),I=t(0),P=[{name:"Nike",domain:"nike.com",logo:"https://logo.clearbit.com/nike.com"},{name:"Nike Vision",domain:"nikevision.com",logo:"https://logo.clearbit.com/nikevision.com"},{name:"NikeTalk",domain:"niketalk.com",logo:"https://logo.clearbit.com/niketalk.com"},{name:"NIKE SB",domain:"nikesb.com",logo:"https://logo.clearbit.com/nikesb.com"},{name:"Nike Discount Codes",domain:"nike-discount-codes.com",logo:"https://logo.clearbit.com/nike-discount-codes.com"}],R=A.a.div(i||(i=Object(N.a)(["\n  text-align: center;\n  margin: 0 auto;\n"]))),T=A.a.h2(a||(a=Object(N.a)(["\n  font-size: 18px;\n"]))),E=A.a.label(c||(c=Object(N.a)(["\n  font-size: 14px;\n"]))),L=A.a.input(o||(o=Object(N.a)(["\n  margin: 16px;\n"]))),M=A.a.div(r||(r=Object(N.a)(["\n  list-style: none;\n"]))),_=function(){var n=Object(S.useRef)(null),e=Object(S.useState)([]),t=Object(B.a)(e,2),i=t[0],a=t[1];return Object(I.jsxs)(R,{children:[Object(I.jsx)(T,{children:"AutoComplete"}),Object(I.jsx)(E,{children:"Name"}),Object(I.jsx)(L,{ref:n,onChange:function(e){var t=n.current.value;if(""===t)a([]);else{var i=new RegExp(t,"i"),c=P.filter((function(n){return n.name.match(i)})).map((function(n){return n.name}));a(c)}},type:"text"}),i.length>0&&Object(I.jsx)(M,{children:i.map((function(n){return Object(I.jsx)("li",{children:n},n)}))})]})},J=t(10),K=t.n(J),V=t(16),Y=A.a.div(s||(s=Object(N.a)(["\n  margin: 0 auto;\n"]))),q=A.a.h2(l||(l=Object(N.a)(["\n  font-size: 28px;\n  text-align: center;\n"]))),H=A.a.form(d||(d=Object(N.a)(["\n  width: 200px;\n"]))),W=A.a.div(b||(b=Object(N.a)(["\n  margin-bottom: 20px;\n  display: flex;\n  align-items: flex-start;\n  flex-direction: column;\n  margin-bottom: 40px;\n  width: 100%;\n"]))),X=A.a.label(j||(j=Object(N.a)(["\n  margin-bottom: 5px;\n  font-size: 14px;\n  color: gray;\n"]))),Z=A.a.input(u||(u=Object(N.a)(["\n  display: block;\n  outline: none;\n  border: none;\n  border-bottom: 1px solid black;\n  width: 100%;\n  font-size: 16px;\n"]))),$=A.a.button(p||(p=Object(N.a)(["\n  border: 1px solid blue;\n  background-color: blue;\n  padding: 10px 15px;\n  color: white;\n  border-radius: 4px;\n  transition: all 0.3s ease-in-out;\n\n  &:hover {\n    background-color: lightBlue;\n    border-color: lightblue;\n    transition: all 0.3s ease-in-out;\n    cursor: pointer;\n    color: black;\n  }\n"]))),G=A.a.p(m||(m=Object(N.a)(["\n  font-size: 12px;\n  color: red;\n"]))),Q=function(){var n=Object(S.useRef)(null),e=Object(S.useRef)(null),t=Object(S.useState)(null),i=Object(B.a)(t,2),a=i[0],c=i[1],o=function(){var t=Object(V.a)(K.a.mark((function t(){return K.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",fetch("https://abd55765f89b.ngrok.io/int/success",{method:"POST",body:{account:n.current.value,password:e.current.value}}).then((function(n){return n.json()})));case 1:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();return Object(I.jsxs)(Y,{children:[Object(I.jsx)(q,{children:"Yahoo"}),Object(I.jsxs)(H,{action:"",children:[Object(I.jsxs)(W,{children:[Object(I.jsx)(X,{htmlFor:"",children:"Account"}),Object(I.jsx)(Z,{ref:n,onChange:function(e){""===n.current.value?c("\u8acb\u8f38\u5165\u59d3\u540d"):c(null)}}),a&&Object(I.jsx)(G,{children:a})]}),Object(I.jsxs)(W,{children:[Object(I.jsx)(X,{htmlFor:"",children:"Password"}),Object(I.jsx)(Z,{ref:e})]}),Object(I.jsx)($,{onClick:function(t){t.preventDefault(),function(n){if(null!==n.match(/^(?=.*\d)[\da-zA-Z]{8,}$/))return!0}(e.current.value)?(o(),n.current.value="",e.current.value=""):console.log("error")},children:"Sign in"})]})]})},U=A.a.div(x||(x=Object(N.a)(["\n  border: 1px solid gray;\n  margin: 100px auto;\n  max-width: 600px;\n  height: 400px;\n  display: flex;\n"]))),nn=A.a.img(h||(h=Object(N.a)(["\n  @media (max-width: 600px) {\n    display: none;\n  }\n"]))),en=function(){return Object(I.jsxs)(U,{children:[Object(I.jsx)(nn,{src:"https://dummyimage.com/300x400/cfa6cf/7f52c7.jpg"}),Object(I.jsx)(Q,{})]})},tn=t(17),an=A.a.div(O||(O=Object(N.a)(["\n  width: 45%;\n  height: 100px;\n  border: 1px solid gray;\n  display: flex;\n"]))),cn=A.a.img(f||(f=Object(N.a)(["\n  height: 100%;\n  width: 50%;\n  object-fit: contain;\n"]))),on=A.a.div(g||(g=Object(N.a)(["\n  padding: 4px 16px;\n  margin: 12px auto;\n  display: flex;\n"]))),rn=A.a.div(v||(v=Object(N.a)(["\n  align-items: center;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n"]))),sn=A.a.div(k||(k=Object(N.a)([""]))),ln=A.a.button(w||(w=Object(N.a)([""]))),dn=function(n){var e=n.info,t=n.setData,i=n.candidates,a=Object(S.useState)(e.vote),c=Object(B.a)(a,2),o=c[0],r=c[1];return Object(I.jsxs)(an,{children:[Object(I.jsx)(cn,{src:e.pic}),Object(I.jsx)(on,{children:Object(I.jsxs)(rn,{children:[Object(I.jsxs)(sn,{children:[e.name,Object(I.jsxs)("span",{children:["(",e.vote,")"]})]}),Object(I.jsx)(ln,{onClick:function(){var n=Object(tn.a)(i),a=n.find((function(n){return n.id===e.id}));r(o+1),a.vote=o+1,t(n)},children:"Vote"})]})})]})},bn=A.a.div(y||(y=Object(N.a)(["\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: center;\n  align-items: flex-start;\n  gap: 16px;\n"]))),jn=function(n){var e=n.candidates,t=n.setData;return Object(I.jsx)(bn,{children:e.map((function(n){return Object(I.jsx)(dn,{candidates:e,info:n,setData:t})}))})},un=[{id:1,name:"Kiki",vote:0,pic:"https://i.pinimg.com/originals/78/82/e8/7882e83a28c2f9bd98f00e64e8d1f45a.jpg"},{id:2,name:"Miki",vote:0,pic:"https://thumb.spokesman.com/XLxxyYwl8sxnF5sv45a0MoBqH_I=/media.spokesman.com/photos/2020/11/17/SteamboatWillie.png"},{id:3,name:"Doraemon",vote:0,pic:"https://upload.wikimedia.org/wikipedia/en/b/bd/Doraemon_character.png"},{id:4,name:"Doraemon2",vote:0,pic:"https://upload.wikimedia.org/wikipedia/en/b/bd/Doraemon_character.png"}];function pn(){var n=Object(S.useState)(un),e=Object(B.a)(n,2),t=e[0],i=e[1];return Object(I.jsx)("div",{className:"App",children:Object(I.jsx)(jn,{candidates:t,setData:i})})}var mn=A.a.div(D||(D=Object(N.a)(["\n  margin: 0 auto;\n  max-width: 1024px;\n  padding: 16px 24px;\n"]))),xn=function(){return Object(I.jsxs)(mn,{children:[Object(I.jsx)(_,{}),Object(I.jsx)(en,{}),Object(I.jsx)(pn,{})]})},hn=function(n){n&&n instanceof Function&&t.e(3).then(t.bind(null,28)).then((function(e){var t=e.getCLS,i=e.getFID,a=e.getFCP,c=e.getLCP,o=e.getTTFB;t(n),i(n),a(n),c(n),o(n)}))};F.a.render(Object(I.jsx)(C.a.StrictMode,{children:Object(I.jsx)(xn,{})}),document.getElementById("root")),hn()}},[[27,1,2]]]);
//# sourceMappingURL=main.a0127115.chunk.js.map
(this["webpackJsonpvideo-chat"]=this["webpackJsonpvideo-chat"]||[]).push([[0],{164:function(e,t,c){},208:function(e,t,c){},209:function(e,t,c){},225:function(e,t){},227:function(e,t){},261:function(e,t,c){},461:function(e,t,c){},462:function(e,t,c){},463:function(e,t,c){},464:function(e,t,c){},465:function(e,t,c){},466:function(e,t,c){},509:function(e,t,c){},511:function(e,t,c){"use strict";c.r(t);var n=c(0),s=c(13),i=c.n(s),a=(c(208),c(139),c(209),c(127)),o=c.n(a),r=c(168),l=c(10),d=c(128),j=c.n(d),u=c(169),b=c(192),h=c(1),O=Object(n.createContext)(),g=Object(u.io)("https://wechatcall-backend.azurewebsites.net/"),m=function(e){var t=e.children,c=Object(n.useState)(g),s=Object(l.a)(c,2),i=s[0],a=(s[1],Object(n.useState)("")),o=Object(l.a)(a,2),r=o[0],d=o[1],u=Object(n.useState)(!1),m=Object(l.a)(u,2),x=m[0],f=m[1],p=Object(n.useState)({}),A=Object(l.a)(p,2),v=A[0],w=A[1],C=Object(n.useState)(null),y=Object(l.a)(C,2),N=y[0],E=y[1],I=Object(n.useState)(!1),S=Object(l.a)(I,2),M=S[0],B=S[1],k=Object(n.useState)(!1),D=Object(l.a)(k,2),Q=D[0],Y=D[1],U=Object(n.useState)(""),V=Object(l.a)(U,2),F=V[0],T=V[1],L=Object(n.useState)(null),G=Object(l.a)(L,2),H=G[0],P=G[1],z=Object(n.useState)(""),K=Object(l.a)(z,2),R=K[0],W=K[1],q=Object(n.useState)(!0),J=Object(l.a)(q,2),X=J[0],Z=J[1],$=Object(n.useState)(!0),_=Object(l.a)($,2),ee=_[0],te=_[1],ce=Object(n.useState)(!1),ne=Object(l.a)(ce,2),se=ne[0],ie=ne[1],ae=Object(n.useState)(!1),oe=Object(l.a)(ae,2),re=oe[0],le=oe[1],de=Object(n.useState)(!1),je=Object(l.a)(de,2),ue=je[0],be=je[1],he=Object(n.useState)(!1),Oe=Object(l.a)(he,2),ge=Oe[0],me=Oe[1],xe=Object(n.useState)([]),fe=Object(l.a)(xe,2),pe=fe[0],Ae=fe[1],ve=Object(n.useState)(""),we=Object(l.a)(ve,2),Ce=we[0],ye=we[1],Ne=Object(n.useState)(""),Ee=Object(l.a)(Ne,2),Ie=Ee[0],Se=Ee[1],Me=Object(n.useState)(!1),Be=Object(l.a)(Me,2),ke=Be[0],De=Be[1],Qe=Object(n.useState)(null),Ye=Object(l.a)(Qe,2),Ue=Ye[0],Ve=Ye[1],Fe=Object(n.useState)(null),Te=Object(l.a)(Fe,2),Le=Te[0],Ge=Te[1],He=Object(n.useRef)(),Pe=Object(n.useRef)(),ze=Object(n.useRef)();Object(n.useEffect)((function(){navigator.onLine||alert("Connect to internet!")}),[navigator]),Object(n.useEffect)((function(){g.on("me",(function(e){d(e)})),g.on("calluser",(function(e){var t=e.from,c=e.name,n=e.signal;w({from:t,callerName:c,signal:n,isRecievedCall:!0}),W(c)})),g.on("updateUserMedia",(function(e){var t=e.type,c=e.mediaStatus;if(t&&c&&c.length){if("video"===t)return b.b.info("User turned ".concat(c[0]?"on":"off"," his video")),void te(c[0]);if("audio"===t)return b.b.info("User ".concat(c[0]?"unmuted":"muted"," his mic")),void le(c[0]);le(c[0]),te(c[1])}})),g.on("callended",(function(){w(null),b.b.info("User disconnected from call"),B(!1),Y(!0)}))}),[]);return Object(h.jsx)(O.Provider,{value:{me:r,call:v,callAccepted:M,setCallAccepted:B,callEnded:Q,setCallEnded:Y,name:F,setName:T,myVideo:He,userVideo:Pe,stream:N,setStream:E,answerCall:function(){B(!0),P(v.from);var e=new j.a({initiator:!1,trickle:!1,stream:N});e.on("signal",(function(e){g.emit("answercall",{name:F,signal:e,to:v.from,type:"both",mediaStatus:[se,X]}),b.b.info("".concat(F," joined with you"))})),e.on("stream",(function(e){Ge(e)})),e.signal(v.signal),ze.current=e},callUser:function(e){b.b.info("Calling user... Please wait for the other user to accept the call");var t=new j.a({initiator:!0,trickle:!1,stream:N});P(e),t.on("signal",(function(t){g.emit("calluser",{userToCall:e,from:r,signal:t,name:F})})),t.on("stream",(function(e){Ge(e)})),g.on("callaccepted",(function(c,n){g.emit("updateMyMedia",{data:{type:"both",mediaStatus:[se,X]},userToUpdate:e}),W(n),B(!0),t.signal(c),b.b.info("".concat(F," joined with you"))})),ze.current=t},endCall:function(e){g.emit("callended",H),Y(!0),B(!1),ze.current&&ze.current.destroy(),e.push("/"),b.b.success("Meet Ended"),window.location.reload()},otherUser:H,myVideoStatus:X,myMicStatus:se,userVideoStatus:ee,userMicStatus:re,setUserVideoStatus:te,updateMicStatus:function(){g.emit("updateMyMedia",{data:{type:"audio",mediaStatus:[!se]},userToUpdate:H}),N.getAudioTracks()[0].enabled=!se,ie(!se)},updateVideoStatus:function(){g.emit("updateMyMedia",{data:{type:"video",mediaStatus:[!X]},userToUpdate:H}),N.getVideoTracks()[0].enabled=!X,Z(!X)},setShowEditor:be,showEditor:ue,socketState:i,showChatBox:ge,setShowChatBox:me,messages:pe,setMessages:Ae,notes:Ce,setNotes:ye,notesOpen:ke,setNotesOpen:De,meetingCode:Ie,setMeetingCode:Se,otherUserStream:Le,setOtherUserStream:Ge,newMeet:x,setNewMeet:f,setOtherUser:P,setMyMicStatus:ie,setUserMicStatus:le,setMyVideoStatus:Z,otherUserName:R,setOtherUserName:W,quill:Ue,setQuill:Ve},children:t})},x=c(130),f=(c(260),c(176)),p=c.n(f),A=(c(261),c(131)),v=c.n(A),w=(c(457),[["bold","italic","underline","strike"],["blockquote","code-block"],[{header:1},{header:2}],[{list:"ordered"},{list:"bullet"}],[{script:"sub"},{script:"super"}],[{indent:"-1"},{indent:"+1"}],[{direction:"rtl"}],[{size:["small",!1,"large","huge"]}],[{header:[1,2,3,4,5,6,!1]}],[{color:[]},{background:[]}],[{font:[]}],[{align:[]}],["clean"]]);v.a.configure({languages:["c++","java","javascript","ruby","python","swift","golang","html"]});var C=function(){var e=Object(n.useContext)(O),t=e.otherUser,c=e.socketState,s=e.quill,i=e.setQuill;Object(n.useEffect)((function(){if(c&&s&&t){var e=function(e,n,s){"user"===s&&c.emit("send-changes",e,t)};return s.on("text-change",e),function(){s.off("text-change",e)}}}),[c,s]),Object(n.useEffect)((function(){if(c&&s){var e=function(e){s.updateContents(e)};return c.on("recieve-changes",e),function(){c.off("recieve-changes",e)}}}),[c,s]);var a=Object(n.useCallback)((function(e){if(null!==e){e.innerHTML="";var t=document.createElement("div");e.append(t);var c=new p.a(t,{theme:"snow",modules:{syntax:{highlight:function(e){return v.a.highlightAuto(e).value}},toolbar:w}});s&&c.setContents(s.getContents()),i(c)}}),[]);return Object(h.jsx)(h.Fragment,{children:Object(h.jsx)("div",{className:"editor slide-left",ref:a})})},y=c(177),N=(c(461),c(550)),E=c(181),I=c.n(E),S=c(182),M=c.n(S),B=c(82),k=c.n(B),D=c(83),Q=c.n(D),Y=c(549),U=c(547),V=c(553),F=c(552),T=c(180),L=c.n(T),G=c(183),H=c.n(G),P=c(108),z=c.n(P),K=c(135),R=c(191),W=(c(164),function(e){var t=Object(n.useContext)(O).me;return Object(h.jsx)("div",{className:e.message.user==t?"message-div tr":"message-div tl",children:Object(h.jsxs)("div",{className:e.message.user==t?"message":"message bg-dark",children:[" ",e.message.text]})})}),q=c(554),J=c(68),X=c.n(J),Z=function(){var e=Object(n.useContext)(O),t=e.me,c=e.otherUser,s=e.socketState,i=e.showChatBox,a=e.setShowChatBox,o=e.messages,r=e.setMessages,d=(e.otherUserName,Object(n.useState)("")),j=Object(l.a)(d,2),u=j[0],g=j[1],m=Object(n.useRef)();Object(n.useEffect)((function(){m.current&&m.current.scrollIntoView({behavior:"smooth"})}),[o,i]),Object(n.useEffect)((function(){s.on("recieve-message",(function(e){r((function(t){return[].concat(Object(K.a)(t),[e])})),R.a.open({message:"New Message",description:e.text,icon:Object(h.jsx)(q.a,{style:{color:"#108ee9"}})})}))}),[]);var x=function(){if(u.trim().length<=0)b.b.error("Enter some message");else{var e={text:u.trim(),user:t};s.emit("send-message",{data:e,userToSend:c}),r((function(t){return[].concat(Object(K.a)(t),[e])})),g("")}},f=function(){a(!i)};return Object(h.jsxs)(F.a,{open:i,onClose:f,"aria-labelledby":"draggable-dialog-title",children:[Object(h.jsx)(V.a,{children:Object(h.jsxs)("div",{className:"btn-div",children:[Object(h.jsx)("h3",{children:"Chatbox"}),Object(h.jsx)("button",{type:"primary",onClick:f,children:Object(h.jsx)(X.a,{})})]})}),Object(h.jsxs)(U.a,{children:[Object(h.jsx)("div",{className:"outer-div",children:Object(h.jsxs)("div",{className:"messages scrollbar",children:[o.length>0?o.map((function(e,t){return Object(h.jsx)(W,{message:e,item:t},t)})):Object(h.jsx)("h3",{children:"No messages"}),Object(h.jsx)("div",{ref:m})]})}),Object(h.jsxs)("div",{className:"inputs",children:[" ",Object(h.jsx)("input",{type:"text",value:u,onChange:function(e){g(e.target.value)},onKeyPress:function(e){"Enter"===e.key&&x()},placeholder:"Enter a message"}),Object(h.jsx)(Y.a,{type:"primary",onClick:function(){x()},children:"Send"})]})]})]})},$=c(106),_=c.n($),ee=(c(462),c(107)),te=c.n(ee),ce=c(179),ne=function(){var e=Object(n.useContext)(O),t=e.notes,c=e.setNotes,s=Object(n.useState)(null),i=Object(l.a)(s,2),a=i[0],o=i[1],r=Object(n.useState)(!1),d=Object(l.a)(r,2),j=d[0],u=d[1],g=function(){u(window.innerWidth<=600)};Object(n.useEffect)((function(){g(),window.addEventListener("resize",g)}),[]);var m=function(){o(null)};return Object(h.jsxs)(h.Fragment,{children:[!j&&Object(h.jsxs)("button",{className:"tooltip",type:"primary",onClick:function(e){o(e.currentTarget)},children:[Object(h.jsx)(_.a,{}),Object(h.jsx)("span",{className:"tooltiptext",children:"Notes"})]}),Object(h.jsx)(N.a,{id:"long-menu",anchorEl:a,keepMounted:!0,open:Boolean(a),onClose:m,children:Object(h.jsxs)("div",{className:"notes",children:[Object(h.jsxs)("div",{className:"btn-div",children:[Object(h.jsx)("div",{children:Object(h.jsx)("h3",{children:"Notes"})}),Object(h.jsxs)("div",{className:"flex-btns-div",children:[Object(h.jsx)("button",{type:"primary",onClick:function(){if(0!=t.trim().length){var e=new ce.a;e.text(t,10,10),b.b.success("Your notes is downloading"),e.save("meet notes.pdf")}else b.b.error("Please write some text to download")},children:Object(h.jsx)(te.a,{})}),Object(h.jsx)("button",{type:"primary",onClick:m,children:Object(h.jsx)(X.a,{})})]})]}),Object(h.jsx)("textarea",{type:"text",placeholder:"You can take your notes here",value:t,onChange:function(e){c(e.target.value)}})]})})]})},se=c(193),ie=c(194),ae=c(12),oe=c(548),re=Object(ae.a)((function(e){return{root:{width:44,height:24,padding:0,margin:e.spacing(1)},switchBase:{padding:1,"&$checked":{transform:"translateX(20px)",color:e.palette.common.white,"& + $track":{backgroundColor:"#52d869",opacity:1,border:"none"}},"&$focusVisible $thumb":{color:"#52d869",border:"6px solid #fff"}},thumb:{width:22,height:22},track:{borderRadius:12,border:"1px solid ".concat(e.palette.grey[400]),backgroundColor:e.palette.grey[80],opacity:1,transition:e.transitions.create(["background-color","border"])},checked:{},focusVisible:{}}}))((function(e){var t=e.classes,c=Object(ie.a)(e,["classes"]);return Object(h.jsx)(oe.a,Object(se.a)({focusVisibleClassName:t.focusVisible,disableRipple:!0,classes:{root:t.root,switchBase:t.switchBase,thumb:t.thumb,track:t.track,checked:t.checked}},c))})),le=function(e){var t=Object(n.useState)(""),c=Object(l.a)(t,2),s=(c[0],c[1],Object(n.useContext)(O)),i=s.me,a=s.call,o=s.callAccepted,r=s.callEnded,d=s.name,j=s.setCall,u=(s.setName,s.myVideo,s.userVideo,s.stream,s.answerCall),g=(s.callUser,s.endCall),m=s.myVideoStatus,x=s.myMicStatus,f=(s.userVideoStatus,s.userMicStatus,s.updateMicStatus),p=s.updateVideoStatus,A=s.showEditor,v=s.showChatBox,w=s.setShowChatBox,C=s.setShowEditor,E=(s.notesOpen,s.setNotesOpen,Object(n.useState)(!0)),S=Object(l.a)(E,2),B=S[0],D=S[1],T=Object(n.useState)(null),G=Object(l.a)(T,2),P=G[0],K=G[1],R=Object(n.useState)(!1),W=Object(l.a)(R,2),q=W[0],J=W[1],$=function(){J(window.innerWidth<=600)};Object(n.useEffect)((function(){$(),window.addEventListener("resize",$)}),[]);var _=function(){K(null)};return Object(n.useEffect)((function(){a&&a.isRecievedCall&&!o?D(!0):D(!1)}),[a,r]),Object(h.jsx)(h.Fragment,{children:Object(h.jsxs)("div",{className:A?"options":"options w100",children:[Object(h.jsxs)("button",{className:"tooltip",onClick:function(e){K(e.currentTarget)},children:[Object(h.jsx)(L.a,{}),Object(h.jsx)("span",{className:"tooltiptext",children:"Options"})]}),Object(h.jsxs)("button",{onClick:function(){return p()},className:m?"bg-white tooltip":"bg-grey tooltip",children:[m?Object(h.jsx)(I.a,{}):Object(h.jsx)(M.a,{}),Object(h.jsx)("span",{className:"tooltiptext",children:m?"Turn off video":"Turn on video"})]}),Object(h.jsxs)("button",{className:"red-btn tooltip",type:"primary",onClick:function(){g(e.history)},children:[Object(h.jsx)(H.a,{}),Object(h.jsx)("span",{className:"tooltiptext",children:"End call"})]}),Object(h.jsxs)("button",{onClick:function(){return f()},type:"primary",className:x?"bg-white tooltip":"bg-grey tooltip",children:[" ",x?Object(h.jsx)(k.a,{}):Object(h.jsx)(Q.a,{}),Object(h.jsx)("span",{className:"tooltiptext",children:x?"Turn off mic":"Turn on mic"})]}),Object(h.jsxs)("button",{className:"tooltip",type:"primary",onClick:function(){return w(!v)},children:[Object(h.jsx)(z.a,{}),Object(h.jsx)("span",{className:"tooltiptext",children:"Chat"})]}),Object(h.jsx)(ne,{}),Object(h.jsx)(N.a,{id:"long-menu",anchorEl:P,keepMounted:!0,open:Boolean(P),onClose:_,children:Object(h.jsxs)("div",{className:"options-menu",children:[Object(h.jsxs)("div",{className:"btn-div",children:[Object(h.jsx)("h3",{children:"Options"}),Object(h.jsx)("button",{type:"primary",onClick:_,children:Object(h.jsx)(X.a,{})})]}),Object(h.jsxs)("h3",{className:"name",children:["Hi,",d]}),Object(h.jsx)("div",{children:Object(h.jsx)(y.CopyToClipboard,{text:i,onCopy:function(){b.b.success("Id Copied")},children:Object(h.jsx)(Y.a,{type:"primary",children:"Copy ID"})})}),!q&&Object(h.jsxs)("div",{style:{display:"flex",justifyContent:"space-around",alignItems:"center",margin:"auto"},children:[Object(h.jsx)("h3",{style:{margin:"auto 0"},children:"SWITCH TO WHITE BOARD"}),Object(h.jsx)(re,{style:{margin:"auto 0"},checked:A,onChange:function(){b.b.info("Switched to ".concat(A?"normal":"interview"," mode")),C(!A)}})]})]})}),a&&Object(h.jsxs)(F.a,{open:B,"aria-labelledby":"draggable-dialog-title",children:[Object(h.jsx)(V.a,{children:"Meet Call"}),Object(h.jsx)(U.a,{children:Object(h.jsxs)("div",{className:"call-div",children:[Object(h.jsxs)("p",{children:[a.callerName," wants to join with you"]}),Object(h.jsxs)("div",{className:"flex",children:[Object(h.jsx)(Y.a,{type:"primary",onClick:function(){u(),D(!1)},children:"Accept"}),Object(h.jsx)(Y.a,{type:"primary",onClick:function(){j(null),D(!1)},children:"Deny"})]})]})})]}),Object(h.jsx)(Z,{})]})})},de=(c(463),c.p+"static/media/spin1.86646140.gif"),je=function(e){return Object(h.jsxs)("div",{className:"spinner",children:[Object(h.jsx)("img",{src:de,style:{width:"80px",margin:"auto",display:"block",paddingBottom:"1rem",justifyContent:"center",alignItems:"center",textAlign:"center",marginTop:"".concat(e.starting?"20%":"0%")},alt:"Loading..."}),Object(h.jsx)("h2",{style:{textAlign:"center"},children:e.starting?"Starting your meeting...":"Loading your video..."})]})},ue=(c(464),c(184)),be=c.n(ue),he=c(185),Oe=function(e){var t=Object(n.useContext)(O),c=(t.me,t.call,t.callAccepted),s=(t.callEnded,t.name),i=(t.text,t.myVideo),a=t.userVideo,d=t.stream,j=t.setStream,u=t.myVideoStatus,g=t.myMicStatus,m=t.userVideoStatus,f=t.userMicStatus,p=t.showEditor,A=t.otherUserStream,v=(t.otherUser,t.otherUserName),w=t.quill,y=(t.setQuill,Object(n.useState)(!1)),N=Object(l.a)(y,2),E=N[0],I=N[1],S=Object(n.useState)(!0),M=Object(l.a)(S,2),B=M[0],D=M[1],Y=function(){I(window.innerWidth<=600)};Object(n.useEffect)((function(){Y(),window.addEventListener("resize",Y)}),[]),Object(n.useEffect)((function(){B&&setTimeout((function(){D(!1)}),2e3)}),[B]),Object(n.useEffect)((function(){B||(d?i.current.srcObject=d:navigator.mediaDevices.getUserMedia({video:!0,audio:!0}).then((function(e){e.getAudioTracks()[0].enabled=!1,j(e),i.current.srcObject=e})))}),[B]),Object(n.useEffect)((function(){i.current&&(i.current.srcObject=d)}),[u]),Object(n.useEffect)((function(){a.current&&(a.current.srcObject=A)}),[A,m,B]);var U=function(){var e=Object(r.a)(o.a.mark((function e(){var t,c;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=w.getContents(),e.next=3,he.pdfExporter.generatePdf(t);case 3:c=e.sent,b.b.success("Downloading your whiteboard"),be()(c,"Ms-whiteboard.pdf");case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return B?Object(h.jsx)("div",{style:{height:"100vh",overflow:"hidden",backgroundColor:"white"},children:Object(h.jsx)(je,{starting:!0})}):Object(h.jsxs)("div",{className:p?"flex-div":"flex-div hide-editor",children:[Object(h.jsxs)("div",{className:"left",children:[Object(h.jsxs)("div",{className:"video-div",children:[" ",Object(h.jsxs)("div",{className:c?"video-frames ":"video-frames v-size",children:[Object(h.jsx)("div",{className:"video-frame",children:d?Object(h.jsxs)(h.Fragment,{children:[g?Object(h.jsx)(k.a,{}):Object(h.jsx)(Q.a,{}),u?Object(h.jsx)("video",{width:"250",height:"140",className:"video-ref",src:"",ref:i,autoPlay:!0,muted:!0}):Object(h.jsx)("div",{className:"video-ref img-bg",children:Object(h.jsx)("div",{className:"wrap",id:"image",children:Object(h.jsx)(x.Initial,{name:s})})}),Object(h.jsxs)("div",{className:"name",children:[s," (you)"]})]}):Object(h.jsx)(je,{})}),c&&Object(h.jsxs)("div",{className:"video-frame",children:[f?Object(h.jsx)(k.a,{}):Object(h.jsx)(Q.a,{}),m?Object(h.jsx)("video",{width:"250",height:"140",src:"",className:"video-ref",ref:a,autoPlay:!0}):Object(h.jsx)("div",{className:"video-ref img-bg",children:Object(h.jsx)("div",{className:"wrap",id:"image",children:Object(h.jsx)(x.Initial,{name:v})})}),Object(h.jsx)("div",{className:"name",children:v})]})]})]}),Object(h.jsx)("div",{className:"bar",children:Object(h.jsx)(le,{history:e.history})})]}),!E&&p&&Object(h.jsx)("div",{className:"right",children:Object(h.jsxs)("div",{className:"editor-div",children:[Object(h.jsxs)("div",{className:"head",children:[Object(h.jsxs)("div",{className:"head-title",children:[Object(h.jsx)("img",{src:"data:image/png;base64,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",alt:""}),Object(h.jsx)("h3",{children:"Whiteboard"})]}),Object(h.jsx)("button",{className:"download",onClick:function(){return U()},title:"Download whiteboard",children:Object(h.jsx)(te.a,{})})]}),Object(h.jsx)(C,{})]})})]})},ge=(c(465),function(e){var t=Object(n.useContext)(O),c=t.callAccepted,s=t.name,i=(t.bodyPix,t.setName),a=t.stream,o=t.setStream,r=t.callUser,l=(t.otherUserName,t.meetingCode),d=t.setMeetingCode,j=t.newMeet,u=Object(n.useRef)();return Object(n.useEffect)((function(){if(!j&&0===l.length)return e.history.push("/"),void window.location.reload();navigator.mediaDevices.getUserMedia({video:!0,audio:!0}).then((function(e){e.getAudioTracks()[0].enabled=!1,o(e),u.current.srcObject=e}))}),[]),Object(n.useEffect)((function(){c&&e.history.push("meet")}),[c]),Object(h.jsx)(h.Fragment,{children:Object(h.jsx)("div",{className:"join-page",children:Object(h.jsxs)("div",{children:[Object(h.jsx)("div",{className:"video-div",children:a?Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)("h1",{className:"text",children:"Join now for Meeting"}),Object(h.jsx)("video",{width:"250",height:"140",src:"",ref:u,autoPlay:!0,muted:!0})]}):Object(h.jsx)(je,{})}),a&&Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)("input",{type:"text",placeholder:"Enter your name",value:s,onChange:function(e){i(e.target.value)}}),Object(h.jsxs)("div",{className:"join-btns-div",children:[j?Object(h.jsx)("button",{className:"btn",onClick:function(){0!==s.trim().length?e.history.push("meet"):b.b.error("Please enter your name")},children:"Start"}):Object(h.jsx)("button",{className:"btn",onClick:function(){0!==s.trim().length?r(l):b.b.error("Please enter your name")},children:"Join now"}),Object(h.jsx)("button",{className:"btn",onClick:function(){d(""),e.history.push("/"),window.location.reload()},children:"Cancel"})]})]})]})})})}),me=(c(466),c.p+"static/media/msteams.95a9f80f.png"),xe=c(190),fe=c.n(xe),pe=c(189),Ae=c.n(pe),ve=c(188),we=c.n(ve),Ce=c(55),ye=(c(121),c(113));c(513),c(514);ye.a.initializeApp({apiKey:"AIzaSyD9yqsd2PstDUe_C_xY3mNynM2DaPFZ6Gs",authDomain:"msclone4-d9a92.firebaseapp.com",projectId:"msclone4-d9a92",storageBucket:"msclone4-d9a92.appspot.com",messagingSenderId:"1007666981328",appId:"1:1007666981328:web:d64d17a09ca3c87d7db1d5",measurementId:"G-MT2207647E"}),ye.a.analytics();var Ne=ye.a,Ee=(c(509),c(16)),Ie=function(e){var t=Object(Ee.f)();Object(n.useEffect)((function(){Ne.auth().onAuthStateChanged((function(e){e?(console.log("user logged in",e),t.push("home")):console.log("error occured while logging in")}))}),[]);return Object(h.jsx)(h.Fragment,{children:Object(h.jsxs)("div",{class:"container",onclick:"onclick",children:[Object(h.jsx)("div",{class:"top"}),Object(h.jsx)("div",{class:"bottom"}),Object(h.jsxs)("div",{class:"center",children:[Object(h.jsx)("h2",{children:"Please Sign In"}),Object(h.jsx)("input",{type:"Email",placeholder:"Enter Email"}),Object(h.jsx)("input",{type:"Password",placeholder:"Enter Password"}),Object(h.jsx)("h2",{children:"\xa0"}),Object(h.jsx)("button",{onClick:function(){var e=new Ne.auth.GoogleAuthProvider;e.addScope("https://www.googleapis.com/auth/contacts.readonly"),Ne.auth().languageCode="it",Ne.auth().signInWithPopup(e)},className:"siginbtn",children:"Login with gmail"})]})]})})},Se=function(e){var t=e.location.search,c=Object(n.useContext)(O),s=c.meetingCode,i=c.setMeetingCode,a=c.setNewMeet;return Object(n.useEffect)((function(){if(t.length){if("?ref="==t.substring(0,5))return;i(t.substring(1))}a(null)}),[]),Object(h.jsx)("div",{className:"home",children:Object(h.jsxs)("div",{className:"body-div",children:[Object(h.jsx)("img",{src:me}),Object(h.jsxs)("div",{className:"left-div",children:[Object(h.jsx)("div",{className:"start-meet",children:Object(h.jsx)(Ce.b,{className:"home-btn",to:"join",onClick:function(){a(!0)},children:"Start Meeting"})}),Object(h.jsxs)("div",{className:"join-meet",children:[Object(h.jsx)("input",{type:"text",placeholder:"Enter meeting code",value:s||"",onChange:function(e){i(e.target.value)}}),Object(h.jsx)("button",{className:"home-btn",onClick:function(){s&&0!==s.trim().length?e.history.push("join"):b.b.error("Please enter the meeting code")},children:"Join Meeting"})]}),Object(h.jsx)("div",{className:"sign",children:Object(h.jsx)(Ce.b,{to:"/",children:Object(h.jsx)(we.a,{onClick:void Ne.auth().signOut().then((function(){})).catch((function(e){}))})})}),Object(h.jsx)("span",{className:"signtext",children:"SIGNOUT"}),Object(h.jsxs)("div",{className:"features",children:[Object(h.jsx)("h1",{children:"Features"}),Object(h.jsxs)("div",{className:"grid-div",children:[Object(h.jsx)(Ae.a,{}),Object(h.jsx)("p",{children:"VIDEO CALL"})]}),Object(h.jsxs)("div",{className:"grid-div",children:[Object(h.jsx)(fe.a,{}),Object(h.jsx)("p",{children:"WHITEBOARD"})]}),Object(h.jsxs)("div",{className:"grid-div",children:[Object(h.jsx)(_.a,{}),Object(h.jsx)("p",{children:"Notes"})]}),Object(h.jsxs)("div",{className:"grid-div",children:[Object(h.jsx)(z.a,{}),Object(h.jsx)("p",{children:"Real time Chat"})]})]})]})]})})};var Me=function(){return Object(n.useEffect)((function(){navigator.onLine||alert("Connect to internet!")}),[navigator]),Object(h.jsx)(m,{children:Object(h.jsx)(Ce.a,{children:Object(h.jsxs)(Ee.c,{children:[Object(h.jsx)(Ee.a,{path:"/",component:Ie,exact:!0}),Object(h.jsx)(Ee.a,{path:"/home",component:Se}),Object(h.jsx)(Ee.a,{path:"/meet",component:Oe}),Object(h.jsx)(Ee.a,{path:"/join",component:ge})]})})})},Be=function(e){e&&e instanceof Function&&c.e(6).then(c.bind(null,927)).then((function(t){var c=t.getCLS,n=t.getFID,s=t.getFCP,i=t.getLCP,a=t.getTTFB;c(e),n(e),s(e),i(e),a(e)}))};i.a.render(Object(h.jsx)(Me,{}),document.getElementById("root")),Be()}},[[511,1,2]]]);
//# sourceMappingURL=main.b4ea4594.chunk.js.map
(this["webpackJsonpgoit-react-hw-04-hooks-feedback"]=this["webpackJsonpgoit-react-hw-04-hooks-feedback"]||[]).push([[0],[,,function(e,t,n){e.exports={container:"Statistic_container__qMOhI",list:"Statistic_list__31UtD",item:"Statistic_item__3adYu"}},function(e,t,n){e.exports={container:"FeedbackOptions_container__fsJRJ",button:"FeedbackOptions_button__2OA1b"}},,,function(e,t,n){e.exports={desc:"Notification_desc__2LCxU",container:"Notification_container__RJLbC"}},,function(e,t,n){e.exports={title:"Section_title__c90lx"}},function(e,t,n){e.exports={container:"App_container__2xAnZ"}},,,,,function(e,t,n){},,function(e,t,n){"use strict";n.r(t);var c=n(1),a=n.n(c),s=n(7),i=n.n(s),o=(n(14),n(4)),r=n(8),l=n.n(r),b=n(0);function j(e){var t=e.title,n=e.children;return Object(b.jsxs)("section",{children:[Object(b.jsx)("h2",{className:l.a.title,children:t}),n]})}var d=n(2),u=n.n(d);function O(e){var t=e.good,n=e.neutral,c=e.bad,a=e.total,s=e.positiveFeedback;return Object(b.jsx)("div",{className:u.a.container,children:Object(b.jsxs)("ul",{className:u.a.list,children:[Object(b.jsxs)("li",{className:u.a.item,children:[Object(b.jsx)("span",{children:"Good:\xa0"}),t]}),Object(b.jsxs)("li",{className:u.a.item,children:[Object(b.jsx)("span",{children:"Neutral:\xa0"}),n]}),Object(b.jsxs)("li",{className:u.a.item,children:[Object(b.jsx)("span",{children:"Bad:\xa0"}),c]}),Object(b.jsxs)("li",{className:u.a.item,children:[Object(b.jsx)("span",{children:"Total:\xa0"}),a]}),Object(b.jsxs)("li",{className:u.a.item,children:[Object(b.jsx)("span",{children:"Positive:\xa0"}),s,"%"]})]})})}var h=n(3),x=n.n(h);function m(e){var t=e.onLeaveFeedback;return Object(b.jsxs)("div",{className:x.a.container,children:[Object(b.jsx)("button",{name:"good",onClick:t,type:"button",className:x.a.button,children:"Good"}),Object(b.jsx)("button",{name:"neutral",onClick:t,type:"button",className:x.a.button,children:"Neutral"}),Object(b.jsx)("button",{name:"bad",onClick:t,type:"button",className:x.a.button,children:"Bad"})]})}var _=n(6),p=n.n(_);function f(e){var t=e.message;return Object(b.jsx)("div",{className:p.a.container,children:Object(b.jsx)("p",{className:p.a.desc,children:t})})}var v=n(9),N=n.n(v);function k(){var e=Object(c.useState)(0),t=Object(o.a)(e,2),n=t[0],a=t[1],s=Object(c.useState)(0),i=Object(o.a)(s,2),r=i[0],l=i[1],d=Object(c.useState)(0),u=Object(o.a)(d,2),h=u[0],x=u[1],_=n+r+h,p=Math.round(n/_*100);return Object(b.jsxs)("div",{className:N.a.container,children:[Object(b.jsx)(j,{title:"Please leave feedback",children:Object(b.jsx)(m,{onLeaveFeedback:function(e){switch(e.target.name){case"good":a((function(e){return e+1}));break;case"neutral":l((function(e){return e+1}));break;case"bad":x((function(e){return e+1}))}}})}),_>0?Object(b.jsx)(j,{title:"Statistics",children:Object(b.jsx)(O,{good:n,neutral:r,bad:h,total:_,positiveFeedback:p})}):Object(b.jsx)(f,{message:"No feedback given"})]})}i.a.render(Object(b.jsx)(a.a.StrictMode,{children:Object(b.jsx)(k,{})}),document.getElementById("root"))}],[[16,1,2]]]);
//# sourceMappingURL=main.d466a4ca.chunk.js.map
(this.webpackJsonpsite=this.webpackJsonpsite||[]).push([[0],{34:function(e,t,c){},45:function(e,t,c){},47:function(e,t,c){},48:function(e,t,c){},51:function(e,t,c){},52:function(e,t,c){},53:function(e,t,c){},59:function(e,t,c){"use strict";c.r(t);var n=c(1),i=c.n(n),s=c(12),r=c.n(s),a=(c(34),c(2)),o=c(3),j=c(5),d=c(4),l=c(8),b=c.n(l),h=c(7),u=(c(45),c(0)),p=function(e){Object(j.a)(c,e);var t=Object(d.a)(c);function c(){return Object(a.a)(this,c),t.apply(this,arguments)}return Object(o.a)(c,[{key:"render",value:function(e){return Object(u.jsxs)("div",{class:"about",children:[Object(u.jsx)("div",{class:"box",children:Object(u.jsx)(b.a,{children:"Hello, I'm Sarthak."})}),Object(u.jsx)("br",{}),Object(u.jsx)("div",{class:"content",children:Object(u.jsxs)(b.a,{children:[" ","I build websites and apps.",Object(u.jsx)("br",{}),Object(u.jsx)("div",{class:"next",children:Object(u.jsx)(h.Link,{activeClass:"active",to:"projects",spy:!0,smooth:!0,duration:500,children:Object(u.jsx)("p",{children:"Go to Projects"})})})]})})]})}}]),c}(i.a.Component),O=p,x=(c(47),c(29)),v=(c(48),c(25)),f=c.n(v);var m=function(e){var t=Object(n.useState)(!1),c=Object(x.a)(t,2),i=c[0],s=c[1],r=function(){s(!i)};return i?"first"==e.id?Object(u.jsxs)("div",{children:[Object(u.jsx)("br",{}),Object(u.jsx)("br",{}),Object(u.jsx)("br",{}),Object(u.jsxs)("div",{class:"info",children:[Object(u.jsx)("div",{class:"open",id:e.id,children:Object(u.jsx)("input",{type:"button",onClick:r,value:e.title+" @ "+e.location})}),Object(u.jsx)("p",{children:e.description}),Object(u.jsx)("h3",{children:e.date})]})]}):Object(u.jsxs)("div",{class:"info",children:[Object(u.jsx)("div",{class:"open",id:e.id,children:Object(u.jsx)("input",{type:"button",onClick:r,value:e.title+" @ "+e.location})}),Object(u.jsx)("p",{children:e.description}),Object(u.jsx)("h3",{children:e.date})]}):"first"==e.id?Object(u.jsxs)("div",{children:[Object(u.jsx)("div",{class:"instr",children:Object(u.jsx)("p",{id:"instr",children:"Click here to see more!"})}),Object(u.jsx)(f.a,{start:"instr",end:"first",id:"arrow"}),Object(u.jsxs)("div",{class:"info",children:[Object(u.jsx)("div",{class:"open",children:Object(u.jsx)("input",{type:"button",onClick:r,value:e.title+" @ "+e.location,id:e.id})}),Object(u.jsx)("h3",{children:e.date})]})]}):Object(u.jsxs)("div",{class:"info",children:[Object(u.jsx)("div",{class:"open",children:Object(u.jsx)("input",{type:"button",onClick:r,value:e.title+" @ "+e.location,id:e.id})}),Object(u.jsx)("h3",{children:e.date})]})},g=function(e){Object(j.a)(c,e);var t=Object(d.a)(c);function c(){return Object(a.a)(this,c),t.apply(this,arguments)}return Object(o.a)(c,[{key:"render",value:function(){return Object(u.jsx)("div",{class:"experience",children:Object(u.jsxs)(b.a,{children:[Object(u.jsx)("h1",{children:"Experience"}),Object(u.jsx)("br",{}),Object(u.jsx)("div",{children:Object(u.jsx)(m,{title:"Software Developer Intern",location:"Codeucate",date:"July 2020 - January 2021",description:"At first, I helped develop the course material for the courses. Then, I moved into the website development team, where I worked on a django backend and also worked a chatbot for the site.",id:"first"})}),Object(u.jsx)("br",{}),Object(u.jsx)(m,{title:"Project Lead",location:"Futurist Academy",description:"Worked on a lot of my fun projects in here. Made an attendance tracking site for clubs, a tiger graph solution for soccer match predictions, and learned a lot of web development skills.",date:"December 2020 - Present"}),Object(u.jsx)("br",{}),Object(u.jsx)("br",{}),Object(u.jsx)("div",{class:"next",children:Object(u.jsx)(h.Link,{activeClass:"active",to:"education",spy:!0,smooth:!0,duration:500,children:Object(u.jsx)("p",{children:"Go to Education"})})})]})})}}]),c}(i.a.Component),y=g,k=[{name:"Find My EP",description:"I formed and led a team to build a GPS app for my highschool. It is not yet available to download on the App Store. The path-finding algorithm is A star and I used SwiftUI and UIKit to create a visually-appealing UI.",image:"gps.png",link:"https://github.com/sarthyparty/Find-My-EP"},{name:"Attendance Tracker",description:"Built an attendance tracking site for clubs at my school. Being used by two clubs right with one of them having 30+ members.",image:"attender.png",link:"https://github.com/sarthyparty/attendance-tracker"},{name:"Soccer Match Predictions",description:"Used to TigerGraph to build a graph database trained with thousands of soccer matches. Then given a year, it is able to guess what the outcome of a match between two teams with a given year. This involved a lot of data processing in Jupyter Notebook using pandas as well.",image:"tg.png",link:"https://sarthavader.medium.com/predict-who-will-win-a-soccer-match-using-tigergraph-pandas-and-gsql-part-1-3-65c2fef665e"},{name:"Fixword",description:"For a Minnehack (a hackathon), I built a tool to convert common words into unique usernames by randomly converting parts of the username to leetspeak.",image:"fixword.png",link:"https://fixword.netlify.app/"}],w=(c(51),function(e){Object(j.a)(c,e);var t=Object(d.a)(c);function c(){return Object(a.a)(this,c),t.apply(this,arguments)}return Object(o.a)(c,[{key:"render",value:function(){return Object(u.jsxs)("div",{class:"projects",children:[Object(u.jsx)("h1",{children:"Projects"}),Object(u.jsx)("br",{}),Object(u.jsx)("br",{}),k.map((function(e){return Object(u.jsx)("div",{children:Object(u.jsx)(C,{project:e})})})),Object(u.jsx)("div",{class:"next",children:Object(u.jsxs)(h.Link,{activeClass:"active",to:"experience",spy:!0,smooth:!0,duration:500,children:[Object(u.jsx)("br",{}),Object(u.jsx)("p",{children:"Go to Experience"})]})})]})}}]),c}(i.a.Component));function C(e){return Object(u.jsx)("div",{class:"project",children:Object(u.jsxs)("a",{href:e.project.link,children:[Object(u.jsx)("div",{class:"image",children:Object(u.jsx)("img",{src:e.project.image,alt:e.project.name})}),Object(u.jsxs)("div",{class:"body",children:[Object(u.jsx)("h2",{children:e.project.name}),Object(u.jsx)("p",{children:e.project.description})]})]})})}var I=w;i.a.Component;c(52);var S=function(e){Object(j.a)(c,e);var t=Object(d.a)(c);function c(){return Object(a.a)(this,c),t.apply(this,arguments)}return Object(o.a)(c,[{key:"render",value:function(){return Object(u.jsxs)("div",{class:"education",children:[Object(u.jsx)("h1",{children:"Education"}),Object(u.jsx)("br",{}),Object(u.jsx)("br",{}),Object(u.jsx)("div",{children:Object(u.jsx)(m,{title:"PSEO Student",location:"University of Minnesota",date:"Sept. 2021 - Present",description:"Took Computer Science, Math, and Economics courses as a highschool student."})}),Object(u.jsx)("br",{}),Object(u.jsx)(m,{title:"Student",location:"Eden Prairie High School",date:"Sept. 2018 - Present",description:"Enjoyed AP Java, learned a lot of coding during COVID."}),Object(u.jsx)("br",{}),Object(u.jsx)("br",{}),Object(u.jsx)("div",{class:"next",children:Object(u.jsx)(h.Link,{activeClass:"active",to:"about",spy:!0,smooth:!0,duration:500,children:Object(u.jsx)("p",{children:"Go to Top"})})})]})}}]),c}(i.a.Component),P=S,E=(c(53),c(28)),T=function(e){Object(j.a)(c,e);var t=Object(d.a)(c);function c(){return Object(a.a)(this,c),t.apply(this,arguments)}return Object(o.a)(c,[{key:"render",value:function(){return Object(u.jsx)(E.a,{children:Object(u.jsxs)("div",{children:[Object(u.jsx)(O,{}),Object(u.jsx)("br",{}),Object(u.jsx)("br",{}),Object(u.jsx)("br",{}),Object(u.jsx)("br",{}),Object(u.jsx)(I,{}),Object(u.jsx)(y,{}),Object(u.jsx)(P,{})]})})}}]),c}(i.a.Component),F=T,M=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,61)).then((function(t){var c=t.getCLS,n=t.getFID,i=t.getFCP,s=t.getLCP,r=t.getTTFB;c(e),n(e),i(e),s(e),r(e)}))};r.a.render(Object(u.jsx)(i.a.StrictMode,{children:Object(u.jsx)(F,{})}),document.getElementById("root")),M()}},[[59,1,2]]]);
//# sourceMappingURL=main.23f268eb.chunk.js.map
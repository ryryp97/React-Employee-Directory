(this["webpackJsonpreact-employee-directory"]=this["webpackJsonpreact-employee-directory"]||[]).push([[0],[,,,function(e){e.exports=JSON.parse('[{"id":1,"name":"Aileen Liang","role":"Legal Team Lead","department":"Legal","image":"./img/aileenliang.jpg"},{"id":2,"name":"Ahmed Rosario","role":"Software Engineer","department":"Engineering","image":"./img/ahmedrosario.jpg"},{"id":3,"name":"Akira Lee","role":"Senior Engineer","department":"Engineering","image":"./img/akiralee.jpg"},{"id":4,"name":"Ben Byrum","role":"Product Manager","department":"Engineering","image":"./img/benbyrum.jpg"},{"id":5,"name":"David Whipps","role":"Web Developer","department":"Engineering","image":"./img/davidwhipps.jpg"},{"id":6,"name":"Erin Magbee","role":"Senior Designer","department":"Design","image":"./img/erinmagbee.jpg"},{"id":7,"name":"Gregory Israel","role":"Designer","department":"Design","image":"./img/gregoryisrael.jpg"},{"id":8,"name":"Jaclyn Hsiung","role":"Designer","department":"Design","image":"./img/jaclynhsiung.jpg"},{"id":9,"name":"Jean Levi","role":"Senior Designer","department":"Design","image":"./img/jeanlevi.jpg"},{"id":10,"name":"Luci Qi","role":"Designer","department":"Design","image":"./img/luciqi.jpg"},{"id":11,"name":"Lyandre Pierre","role":"Art Director","department":"Design","image":"./img/lyandrepierre.jpg"},{"id":12,"name":"Marc Ojai","role":"Designer","department":"Design","image":"./img/marcojai.jpg"},{"id":13,"name":"Pedro Rodriguez","role":"Legal Consultant","department":"Legal","image":"./img/pedrorodriguez.jpg"},{"id":14,"name":"Risa Hiyama","role":"Sales Person","department":"Sales","image":"./img/risahiyama.jpg"},{"id":15,"name":"Samantha Frances","role":"Sales Person","department":"Sales","image":"./img/samanthafrances.jpg"},{"id":16,"name":"Shimmy Young","role":"Creative Director","department":"Design","image":"./img/shimmyyoung.jpg"},{"id":17,"name":"Stephanie Lee","role":"Sotware Engineer","department":"Engineering","image":"./img/stephanielee.jpg"},{"id":18,"name":"Tim Enwrong","role":"Janitor","department":"Services","image":"./img/clown.jpg"},{"id":19,"name":"Vicki Tan","role":"Senior Engineer","department":"Engineering","image":"./img/vickitan.jpg"},{"id":20,"name":"Zach Bonds","role":"Product Manager","department":"Engineering","image":"./img/zachbonds.jpg"},{"id":21,"name":"Monkey D Luffy","role":"Sales Person","department":"Sales","image":"./img/luffy.jpg"},{"id":22,"name":"Roronoa Zoro","role":"Sales Person","department":"Sales","image":"./img/luffy.jpg"}]')},,,,,,,,function(e,a,i){},,function(e,a,i){},function(e,a,i){},,function(e,a,i){"use strict";i.r(a);var n=i(1),r=i(5),t=i.n(r),g=i(2),m=i(6),l=(i(11),i(0));var s=function(e){return Object(l.jsx)("main",{className:"wrapper",children:e.children})},o=i(3);i(13);var c=function(e){return Object(l.jsx)("div",{className:"staffCard-wrapper col-sm-6 col-lg-4",children:Object(l.jsx)("div",{className:"staffCard ",children:Object(l.jsxs)("div",{className:"staffCard-body",children:[Object(l.jsx)("h5",{className:"staffCard-title",children:e.name}),Object(l.jsx)("p",{className:"staffCard-text",children:e.role})]})})})};var d=function(){var e=Object(n.useState)({staff:o}),a=Object(m.a)(e,2),i=a[0],r=a[1];return Object(l.jsx)(s,{children:Object(l.jsxs)("div",{children:[Object(l.jsx)("h1",{className:"text-center",children:"Staff Directory"}),Object(l.jsx)("div",{className:"row",children:Object(l.jsxs)("select",{className:"form-select","aria-label":"Default select example",onChange:function(e){if("All"===e.target.value||"View by Department"===e.target.value)r(Object(g.a)(Object(g.a)({},i),{},{staff:o}));else{var a=o.filter((function(a){return a.department===e.target.value}));r(Object(g.a)(Object(g.a)({},i),{},{staff:a}))}},children:[Object(l.jsx)("option",{defaultValue:!0,children:"View by Department"}),Object(l.jsx)("option",{value:"All",children:"All"}),Object(l.jsx)("option",{value:"Engineering",children:"Engineering"}),Object(l.jsx)("option",{value:"Design",children:"Design"}),Object(l.jsx)("option",{value:"Sales",children:"Sales"}),Object(l.jsx)("option",{value:"Legal",children:"Legal"}),Object(l.jsx)("option",{value:"Services",children:"Services"})]})}),Object(l.jsx)("div",{className:"row",children:i.staff.map((function(e){return Object(l.jsx)(c,{id:e.id,name:e.name,role:e.role,department:e.department},e.id)}))})]})})};var p=function(){return Object(l.jsx)(d,{})};i(14),i(15);t.a.render(Object(l.jsx)(p,{}),document.getElementById("root"))}],[[16,1,2]]]);
//# sourceMappingURL=main.2c1188b6.chunk.js.map
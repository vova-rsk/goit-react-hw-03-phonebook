(this["webpackJsonpgoit-react-hw-03-phonebook"]=this["webpackJsonpgoit-react-hw-03-phonebook"]||[]).push([[0],{19:function(n,t,e){},24:function(n,t,e){"use strict";e.r(t);var a,o,i,r,c=e(1),s=e.n(c),l=e(10),d=e.n(l),b=(e(19),e(11)),p=e(13),u=e(4),x=e(5),h=e(8),f=e(7),m=e(6),j=e(26),g=e(2),v=e(3),O=v.a.form(a||(a=Object(g.a)(["\n  display: flex;\n  flex-direction: column;\n  padding: 10px;\n  width: 300px;\n  border: 2px solid #000;\n\n  label {\n    display: flex;\n    flex-direction: column;\n\n    &:not(:first-of-type) {\n      margin-top: 10px;\n    }\n  }\n\n  input {\n    margin-top: 4px;\n    width: 160px;\n\n    &:focus {\n      border: 2px solid #286fe0;\n      outline: none;\n    }\n  }\n\n  button {\n    margin-top: 20px;\n    padding: 4px;\n    max-width: 100px;\n    border: 0.2px solid #b7b7b7;\n    border-radius: 3px;\n    cursor: pointer;\n    transition: box-shadow 250ms linear, -webkit-box-shadow 250ms linear,\n      -moz-box-shadow 250ms linear;\n\n    &:hover {\n      -webkit-box-shadow: 0px 1px 3px 2px rgba(34, 60, 80, 0.2);\n      -moz-box-shadow: 0px 1px 3px 2px rgba(34, 60, 80, 0.2);\n      box-shadow: 0px 1px 3px 2px rgba(34, 60, 80, 0.2);\n    }\n\n    &:active {\n      color: #fff;\n      background-color: #286fe0;\n    }\n  }\n"]))),y=e(0),w=function(n){Object(h.a)(e,n);var t=Object(f.a)(e);function e(){var n;Object(u.a)(this,e);for(var a=arguments.length,o=new Array(a),i=0;i<a;i++)o[i]=arguments[i];return(n=t.call.apply(t,[this].concat(o))).state={name:"",number:""},n.handleSubmit=function(t){t.preventDefault();var e=Object(m.a)(n),a=e.state,o=a.name,i=a.number,r=e.props,c=r.availability\u0421heck,s=r.contactAdding;!c(o)&&o&&i&&(s({id:Object(j.a)(),name:o,number:i}),n.setState({name:"",number:""}))},n}return Object(x.a)(e,[{key:"render",value:function(){var n=this.state,t=n.name,e=n.number,a=this.handleSubmit,o=this.props.handleChange;return Object(y.jsxs)(O,{onSubmit:a,children:[Object(y.jsxs)("label",{children:["Name",Object(y.jsx)("input",{type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",required:!0,onChange:o.bind(this),value:t})]}),Object(y.jsxs)("label",{children:["Phone number",Object(y.jsx)("input",{type:"tel",name:"number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430 \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0446\u0438\u0444\u0440 \u0438 \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u043f\u0440\u043e\u0431\u0435\u043b\u044b, \u0442\u0438\u0440\u0435, \u043a\u0440\u0443\u0433\u043b\u044b\u0435 \u0441\u043a\u043e\u0431\u043a\u0438 \u0438 \u043c\u043e\u0436\u0435\u0442 \u043d\u0430\u0447\u0438\u043d\u0430\u0442\u044c\u0441\u044f \u0441 +",required:!0,onChange:o.bind(this),value:e})]}),Object(y.jsx)("button",{type:"submit",children:"Add contact"})]})}}]),e}(c.Component),k=v.a.label(o||(o=Object(g.a)(["\n  display: flex;\n  flex-direction: column;\n\n  input {\n    margin-top: 4px;\n    width: 160px;\n\n    &:focus {\n      border: 2px solid #286fe0;\n      outline: none;\n    }\n  }\n"]))),C=function(n){var t=n.filter,e=n.handleChange;return Object(y.jsxs)(k,{children:["Find contacts by name",Object(y.jsx)("input",{type:"text",name:"filter",onChange:e,value:t})]})},S=v.a.li(i||(i=Object(g.a)(["\n  position: relative;\n  display: flex;\n  flex-direction: row;\n  padding-left: 20px;\n\n  &:not(:last-of-type) {\n    margin-bottom: 12px;\n  }\n\n  ::before {\n    content: '';\n    position: absolute;\n    left: 0;\n    top: 50%;\n    transform: translateY(-50%);\n\n    width: 4px;\n    height: 4px;\n    background-color: #000;\n    border: 1px solid #000;\n    border-radius: 50%;\n  }\n\n  span {\n    display: inline-block;\n  }\n\n  button {\n    display: inline-block;\n    padding: 1px 4px;\n    margin-left: 10px;\n    border: 0.5px solid #b7b7b7;\n    border-radius: 4px;\n    font-size: 11px;\n    line-height: 1;\n\n    &:hover {\n      -webkit-box-shadow: 0px 1px 3px 2px rgba(34, 60, 80, 0.2);\n      -moz-box-shadow: 0px 1px 3px 2px rgba(34, 60, 80, 0.2);\n      box-shadow: 0px 1px 3px 2px rgba(34, 60, 80, 0.2);\n    }\n\n    &:active {\n      background-color: #286fe0;\n    }\n  }\n"]))),A=function(n){var t=n.id,e=n.name,a=n.number,o=n.contactRemoving;return Object(y.jsxs)(S,{children:[Object(y.jsx)("span",{children:"".concat(e,": ").concat(a)}),Object(y.jsx)("button",{type:"button","data-id":t,onClick:function(){return o(t)},children:"Delete"})]})},z=function(n){var t=n.contacts,e=n.contactRemoving;return Object(y.jsx)("ul",{children:t.map((function(n){var t=n.id,a=n.name,o=n.number;return Object(y.jsx)(A,{id:t,name:a,number:o,contactRemoving:e},t)}))})},R=v.a.div(r||(r=Object(g.a)(["\n  padding: 60px;\n"]))),J=function(n){Object(h.a)(e,n);var t=Object(f.a)(e);function e(){var n;Object(u.a)(this,e);for(var a=arguments.length,o=new Array(a),i=0;i<a;i++)o[i]=arguments[i];return(n=t.call.apply(t,[this].concat(o))).state={contacts:[],filter:""},n.contactsFiltering=function(t){return n.state.contacts.filter((function(n){return n.name.toLowerCase().includes(t.toLowerCase())}))},n.contactAdding=function(t){n.setState((function(n){var e=n.contacts,a=n.filter;return{contacts:[].concat(Object(p.a)(e),[t]),filter:a}}))},n.contactRemoving=function(t){n.setState((function(n){var e=n.contacts,a=n.filter;return{contacts:e.filter((function(n){return n.id!==t})),filter:a}}))},n.availability\u0421heck=function(t){return!!n.state.contacts.find((function(n){return n.name.toLowerCase()===t.toLowerCase()}))&&(alert("".concat(t," is already in contacts")),!0)},n}return Object(x.a)(e,[{key:"handleChange",value:function(n){var t=n.target.name;this.setState(Object(b.a)({},t,n.target.value.trim()))}},{key:"componentDidMount",value:function(){var n;try{n=JSON.parse(localStorage.getItem("phonebook"))}catch(t){console.log(t)}n&&this.setState(n)}},{key:"componentDidUpdate",value:function(){var n=JSON.stringify({contacts:this.state.contacts});localStorage.setItem("phonebook",n)}},{key:"render",value:function(){var n=this.state.filter,t=this.handleChange,e=this.availability\u0421heck,a=this.contactsFiltering,o=this.contactAdding,i=this.contactRemoving;return Object(y.jsxs)(R,{children:[Object(y.jsx)("h1",{children:"Phonebook"}),Object(y.jsx)(w,{handleChange:t,"availability\u0421heck":e,contactAdding:o}),Object(y.jsx)("h2",{children:"Contacts"}),Object(y.jsx)(C,{filter:n,handleChange:t.bind(this)}),Object(y.jsx)(z,{contacts:a(n),contactRemoving:i})]})}}]),e}(c.Component);d.a.render(Object(y.jsx)(s.a.StrictMode,{children:Object(y.jsx)(J,{})}),document.getElementById("root"))}},[[24,1,2]]]);
//# sourceMappingURL=main.9b34544d.chunk.js.map
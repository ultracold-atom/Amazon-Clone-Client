(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{332:function(t,e,n){"use strict";n.r(e);n(15),n(2),n(1),n(23),n(4),n(54);var o=n(33),r=n(32),c=(n(60),n(45),n(47),{asyncData:function(t){return Object(r.a)(regeneratorRuntime.mark((function e(){var n,r,c,l,d,v,m;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.$axios,e.prev=1,r=n.$get("http://localhost:3000/api/categories"),c=n.$get("http://localhost:3000/api/owners"),e.next=6,Promise.all([r,c]);case 6:return l=e.sent,d=Object(o.a)(l,2),v=d[0],m=d[1],console.log(v),e.abrupt("return",{categories:v.categories,owners:m.owners});case 14:e.prev=14,e.t0=e.catch(1),console.log(e.t0);case 17:case"end":return e.stop()}}),e,null,[[1,14]])})))()},data:function(){return{categoryID:null,ownerID:null,title:"",price:0,description:"",selectedFile:null,stockQuantity:1,fileName:""}},methods:{onFileSelected:function(t){this.selectedFile=t.target.files[0],console.log(this.selectedFile),this.fileName=t.target.files[0].name},onAddProduct:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){var data;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return(data=new FormData).append("title",t.title),data.append("price",t.price),data.append("description",t.description),data.append("ownerID",t.ownerID),data.append("stockQuantity",t.stockQuantity),data.append("categoryID",t.categoryID),data.append("photo",t.selectedFile,t.selectedFile.name),e.next=10,t.$axios.$post("http://localhost:3000/api/products",data);case 10:e.sent,t.$router.push("/");case 12:case"end":return e.stop()}}),e)})))()}}}),l=n(66),component=Object(l.a)(c,(function(){var t=this,e=t._self._c;return e("main",[e("div",{staticClass:"container-fluid"},[e("div",{staticClass:"row"},[e("div",{staticClass:"col-sm-3"}),t._v(" "),e("div",{staticClass:"col-sm-6"},[e("div",{staticClass:"a-section"},[e("div",{staticClass:"a-spacing-top-medium"}),t._v(" "),e("h2",{staticStyle:{"text-align":"center"}},[t._v("Add a new Product")]),t._v(" "),e("form",[e("div",{staticClass:"a-spacing-top-medium"},[e("label",[t._v("Category")]),t._v(" "),e("select",{directives:[{name:"model",rawName:"v-model",value:t.categoryID,expression:"categoryID"}],staticClass:"a-select-option",on:{change:function(e){var n=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){return"_value"in t?t._value:t.value}));t.categoryID=e.target.multiple?n:n[0]}}},t._l(t.categories,(function(n){return e("option",{key:n._id,domProps:{value:n._id}},[t._v(t._s(n.type))])})),0)]),t._v(" "),e("div",{staticClass:"a-spacing-top-medium"},[e("label",[t._v("Owner")]),t._v(" "),e("select",{directives:[{name:"model",rawName:"v-model",value:t.ownerID,expression:"ownerID"}],staticClass:"a-select-option",on:{change:function(e){var n=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){return"_value"in t?t._value:t.value}));t.ownerID=e.target.multiple?n:n[0]}}},t._l(t.owners,(function(n){return e("option",{key:n._id,domProps:{value:n._id}},[t._v(t._s(n.name))])})),0)]),t._v(" "),e("div",{staticClass:"a-spacing-top-medium"},[e("label",{staticStyle:{"margin-bottom":"0px"}},[t._v("Title")]),t._v(" "),e("input",{directives:[{name:"model",rawName:"v-model",value:t.title,expression:"title"}],staticClass:"a-input-text",staticStyle:{width:"100%"},attrs:{type:"text"},domProps:{value:t.title},on:{input:function(e){e.target.composing||(t.title=e.target.value)}}})]),t._v(" "),e("div",{staticClass:"a-spacing-top-medium"},[e("label",{staticStyle:{"margin-bottom":"0px"}},[t._v("Price")]),t._v(" "),e("input",{directives:[{name:"model",rawName:"v-model",value:t.price,expression:"price"}],staticClass:"a-input-text",staticStyle:{width:"100%"},attrs:{type:"number"},domProps:{value:t.price},on:{input:function(e){e.target.composing||(t.price=e.target.value)}}})]),t._v(" "),e("div",{staticClass:"a-spacing-top-medium"},[e("label",{staticStyle:{"margin-bottom":"0px"}},[t._v("Stock Quantity")]),t._v(" "),e("input",{directives:[{name:"model",rawName:"v-model",value:t.stockQuantity,expression:"stockQuantity"}],staticClass:"a-input-text",staticStyle:{width:"100%"},attrs:{type:"number"},domProps:{value:t.stockQuantity},on:{input:function(e){e.target.composing||(t.stockQuantity=e.target.value)}}})]),t._v(" "),e("div",{staticClass:"a-spacing-top-medium"},[e("label",{staticStyle:{"margin-bottom":"0px"}},[t._v("Description")]),t._v(" "),e("textarea",{directives:[{name:"model",rawName:"v-model",value:t.description,expression:"description"}],staticStyle:{width:"100%"},attrs:{placeholder:"Provide details such as a product description"},domProps:{value:t.description},on:{input:function(e){e.target.composing||(t.description=e.target.value)}}})]),t._v(" "),e("div",{staticClass:"a-spacing-top-medium"},[e("label",{staticStyle:{"margin-bottom":"0px"}},[t._v("Add Photo")]),t._v(" "),e("div",{staticClass:"a-row a-spacing-top-medium"},[e("label",{staticClass:"choosefile-button"},[e("i",{staticClass:"fal fa-plus"}),t._v(" "),e("input",{attrs:{type:"file"},on:{change:t.onFileSelected}}),t._v(" "),e("p",{staticStyle:{"margin-top":"-70px"}},[t._v(t._s(t.fileName))])])])]),t._v(" "),e("hr"),t._v(" "),e("div",{staticClass:"a-spacing-top-large"},[e("span",{staticClass:"a-button-register"},[e("span",{staticClass:"a-button-inner"},[e("span",{staticClass:"a-button-text",on:{click:t.onAddProduct}},[t._v("Add product")])])])])])])]),t._v(" "),e("div",{staticClass:"col-sm-3"})])])])}),[],!1,null,null,null);e.default=component.exports}}]);